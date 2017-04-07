'use strict'

var React = require('react')
var utils = require('../utils.js')

var states = {
    buy: {
        text: 'Buy',
        enabled: true,
        small: false,
        method: 'onBuyClick'
    },
    disabled: {
        text: 'Buy',
        enabled: false,
        small: true,
        method: null,
    },
    error: {
        text: 'Error\nClick to retry',
        enabled: true,
        small: true,
        method: 'onRetryClick',
    },
    not_compatible: {
        text: 'Not Compatible',
        enabled: false,
        small: true,
        method: null,
    },
    loading: {
        text: 'Loading',
        enabled: false,
        small: true,
        method: null,
    }
}

class BuyButton extends React.Component {
    render() {
        var state = states[this.props.state]
        var buttonSmallClass = state.small  ? ' buy-button-small-text' : ''

        return <button className={'buy-button' + buttonSmallClass} disabled={!state.enabled} onClick={this.props[state.method]}>{state.text}</button>
    }
}

module.exports = BuyButton