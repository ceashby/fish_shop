'use strict'

var $ = require('jquery')
var Promise = require('bluebird')
var utils = require('./utils.js')

// All functions in this module take fish names as arguments

exports.getCompatibilityIfFishRemoved = function(fishes, fish){
    return exports.getCompatibilityForFishes(utils.immutableRemove(fishes, fish))
}

exports.getCompatibilityIfFishAdded = function(fishes, fish){
    return exports.getCompatibilityForFishes(fishes.concat([fish]))
}

exports.getCompatibilityForFishes = function(fishes){
    if(window.CHECK_ALL_FISH_COMPATIBILITY){
        return Promise.delay(utils.getRandomInt(50, 250)).then(() => {
            return fishes.filter(f => f.charAt(0) == 's').length < 3
        })
    }else{
        return Promise.resolve($.ajax({
            method: 'POST',
            url: 'https://fishshop.attest.tech/compatibility',
            contentType: 'application/json',
            data: JSON.stringify({
                fish: fishes
            })
        })).then(response => {
            return response.canLiveTogether
        })
    }
}


// For a list of fishes with an isInTank property determine for every fish whether the tank would be compatible if the fish was added or removed from the tank
exports.getCompatibilityIfFishesAddedOrRemoved = function(fishesToQuery, fishesInTank) {
    var fishesInTankSet = new Set(fishesInTank)
    var tankIsCompatible

    return exports.getCompatibilityForFishes(fishesInTank)
        .then(result => {
            tankIsCompatible = result
            return Promise.map(fishesToQuery, fish => {
                if (fishesInTankSet.has(fish)) {
                    if (tankIsCompatible) {
                        return {
                            tankIsCompatibleIfAdded: null, //Fish already in tank so not relevant,
                            tankIsCompatibleIfRemoved: true // I'm assuming  when removing a fish from a compatible tank,
                                                            // the tank will always remain compatible
                        }
                    } else {
                        return this.getCompatibilityIfFishRemoved(fishesInTank, fish)
                            .then(isCompatible => {
                                return {
                                    tankIsCompatibleIfAdded: null, //Fish already in tank so not relevant
                                    tankIsCompatibleIfRemoved: isCompatible
                                }
                            })
                    }
                } else {
                    if (tankIsCompatible) {
                        return this.getCompatibilityIfFishAdded(fishesInTank, fish)
                            .then(isCompatible => {
                                return {
                                    tankIsCompatibleIfAdded: isCompatible,
                                    tankIsCompatibleIfRemoved: null //Fish not in tank so not relevant
                                }
                            })
                    } else {
                        return {
                            tankIsCompatibleIfAdded: false, // I'm assuming that when adding a fish to an incompatible tank,
                                                            // the tank will always remain incompatible
                            tankIsCompatibleIfRemoved: null //Fish not in tank so not relevant
                        }
                    }
                }
            })
        })
        .then(compatibilities => {
            return {
                compatibilities:compatibilities,
                tankIsCompatible:tankIsCompatible
            }
        })
}
