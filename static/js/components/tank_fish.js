'use strict'

var React = require('react')

class TankFish extends React.Component {
    render() {
        var showIncompatible = this.props.fish.tankIsCompatibleIfRemoved === true && this.props.showCompatibilityFlags
        var incompatibleClass = showIncompatible ? ' fish-incompatible' : ''

        return <div className={'tank-fish' + incompatibleClass}>
            <img src='/static/img/fish.png' className='fish-image-small'/>
            <p>{this.props.fish.friendly_name}</p>
            <button  onClick={() => this.props.onRemoveFishClick(this.props.fish.id)} className='remove-button'>
                <i className='fa fa-times'/>
            </button>
        </div>
    }
}

module.exports = TankFish