'use strict'

var $ = require('jquery')

exports.createAnimatedFish = function(top, left){
    var element = $("<img src='/static/img/fish.png' class='fish-image animated-fish'/>")
    element.css({top: top, left: left})
    $('body').append(element)
    element.animate({
        left: '+=100%'
    }, {
        duration: 15000,
        queue: false,
        easing: 'linear'
    })
    element.animate({
        opacity: 0.15
    }, {
        duration: 1000,
        queue: false,
        easing: 'linear'
    })

    oscillate(element, top, top + 100, 5, 3000)
    setTimeout(() => element.remove(), 15000)
}

function oscillate(element, top, bottom, limit, timePerHalfCycle) {
    var positions = [bottom, top]
    var count = 0
    
    var tick = () => {
        element.animate({
            top: positions[count % 2]
        }, {
            duration: timePerHalfCycle,
            queue: false
        })
        count++
        if(count >= limit){
            clearInterval(timer)
        }
    }
    tick()
    var timer = setInterval(tick, timePerHalfCycle)
}