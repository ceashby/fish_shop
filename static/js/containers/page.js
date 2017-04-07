'use strict'

var ReactDOM = require('react-dom')
var React = require('react')
var utils = require('../utils.js')
var Shop = require('../components/shop.js')
var Tank = require('../components/tank.js')
var _ = require('underscore')
var fishCompatibility = require('../fish_compatibility.js')
var animations = require('../animate_fish.js')

class Page extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            fishes: this.props.fishes.map((f, i) => ({
                id: i,
                name: f.name,
                friendly_name: f.friendly_name,
                isInTank: false,
                tankIsCompatibleIfAdded: true,   // Only used when CHECK_ALL_FISH_COMPATIBILITY is true
                tankIsCompatibleIfRemoved: null, // Only used when CHECK_ALL_FISH_COMPATIBILITY is true
            })),
            tankIsCompatible: true,
            isLoading: false,
            isError: false,
        }

        this.updateNumber = 0
    }

    updateFish(id, properties){
        var oldFish = this.state.fishes[id]
        var newFish = Object.assign({}, oldFish, properties)
        var newFishes = [...this.state.fishes]
        newFishes[id] = newFish

        var tankHasChanged = oldFish.isInTank != newFish.isInTank
        if (tankHasChanged) {
            this.updateFishCompatibility(newFishes)
        }
    }

    updateFishCompatibility(newFishes){
        this.updateNumber++
        var thisUpdate = this.updateNumber

        this.setState({
            fishes: newFishes,
            isLoading: true,
            isError: false
        })

        var fishesInTank = newFishes.filter(f => f.isInTank).map(f => f.name)
        var fishesToQuery = newFishes.map(f => f.name)
        var promise
        if(window.CHECK_ALL_FISH_COMPATIBILITY){
            // Old method which displayed outcome of adding and removing every fish.
            // The error rate makes this unusable on the live API.
            promise = fishCompatibility.getCompatibilityIfFishesAddedOrRemoved(fishesToQuery, fishesInTank)
                .then(args => {
                    if(thisUpdate == this.updateNumber){ //Don't run if later update running
                        var newFishesWithUpdatedCompatibility = []
                        for(var i = 0; i < args.compatibilities.length; i++){
                            var compatibility = args.compatibilities[i]
                            var fish = newFishes[i]
                            newFishesWithUpdatedCompatibility.push(Object.assign({}, fish, compatibility))
                        }
                        this.setState({
                            fishes: newFishesWithUpdatedCompatibility,
                            isLoading: false,
                            tankIsCompatible: args.tankIsCompatible
                        })
                    }
                })
        }else{
            promise = fishCompatibility.getCompatibilityForFishes(newFishes.filter(f => f.isInTank).map(f => f.name))
                .then(isCompatible => {
                    this.setState({
                        isLoading: false,
                        tankIsCompatible: isCompatible
                    })
                })
        }
        promise.catch(e => {
            this.setState({
                isError: true,
                isLoading: false,
                tankIsCompatible: false
            })
        })
    }

    addFishToTank(id, element){
        this.updateFish(id, {
            isInTank: true
        })
        var offset = element.getBoundingClientRect()
        animations.createAnimatedFish(offset.top, offset.left)
    }

    removeFishFromTank(id){
        this.updateFish(id, {
            isInTank: false
        })
    }

    render(){
        return(
        <div className='body'>
            <Shop
                showCompatibilityFlags={this.state.tankIsCompatible}
                fishes={this.state.fishes}
                onAddFishClick={(fishID, element) => this.addFishToTank(fishID, element)}
            />
            <Tank
                isError={this.state.isError}
                isLoading={this.state.isLoading}
                showCompatibilityFlags={!this.state.tankIsCompatible}
                isCompatible={this.state.tankIsCompatible}
                fishes={this.state.fishes.filter(fish => fish.isInTank)}
                onRemoveFishClick={fishID => this.removeFishFromTank(fishID)}
                onRetryClick={() => this.updateFishCompatibility(this.state.fishes)}
            />
        </div>
    )}
}

module.exports = Page