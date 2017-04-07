'use strict'

var React = require('react')
var TankFish = require('./tank_fish.js')
var BuyButton = require('./buy_button.js')


class Tank extends React.Component {
    render() {
        var tankIncompatibleClass = !this.props.isCompatible ? ' tank-incompatible' : ''
        var tankIncompatibleTranslucentClass = !this.props.isCompatible ? ' tank-incompatible-translucent' : ''

        var buttonState
        if(this.props.isError){
            buttonState = 'error'
        }else if(this.props.isLoading){
            buttonState = 'loading'
        }else if(!this.props.isCompatible){
            buttonState = 'not_compatible'
        }else if(!this.props.fishes.length){
            buttonState = 'disabled'
        }else{
            buttonState = 'buy'
        }

        return <div className={'tank frame' + tankIncompatibleClass}>
            <div className={'banner' + tankIncompatibleTranslucentClass}>
                <h1>Tank</h1>
            </div>
            <div className='scroll-container'>
                <div className='scroll-area tank-scroll-area'>
                    {this.props.fishes.map((f) => <TankFish
                        fish={f}
                        key={f.name}
                        onRemoveFishClick={this.props.onRemoveFishClick}
                        showCompatibilityFlags={this.props.showCompatibilityFlags}
                    />)}
                </div>
            </div>
            <div className={'banner buy-banner' + tankIncompatibleTranslucentClass}>
                <BuyButton state={buttonState} onBuyClick={() => {}} onRetryClick={this.props.onRetryClick}/>
            </div>
        </div>
    }
}

module.exports = Tank