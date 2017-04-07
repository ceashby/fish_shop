'use strict'

var React = require('react')
var utils = require('../utils.js')

class ShopFish extends React.Component {
    render() {
        var showIncompatible = this.props.fish.tankIsCompatibleIfAdded === false && this.props.showCompatibilityFlags
        var incompatibleClass = showIncompatible ? ' fish-incompatible' : ''
        return <div className={'shop-fish' + incompatibleClass} ref={element => {this.element=element}}>
                {this.props.showAddButton
                    ? <img src='/static/img/fish.png' className='fish-image'/>
                    : null
                }
                <div className='fish-text-container'>
                    <div className='fish-text'>
                        {this.props.fish.friendly_name}
                    </div>
                </div>
                {(this.props.showAddButton
                    ? <button className='add-button invisible-button' onClick={(e) => this.props.onAddFishClick(this.props.fish.id, this.element)}>
                        <i className='fa fa-plus'/>
                    </button>
                    : null
                )}
        </div>
    }
}

module.exports = ShopFish