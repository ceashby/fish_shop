'use strict'

var React = require('react')
var ShopFish = require('./shop_fish.js')

class Shop extends React.Component {
    render() {
        return <div className='shop frame'>
            <div className='banner'>
                <h1>Shop</h1>
            </div>
            <div className='scroll-container'>
                <div className='scroll-area'>
                    {this.props.fishes.map((fish) => <ShopFish
                        fish={fish} key={fish.name}
                        onAddFishClick={this.props.onAddFishClick}
                        showAddButton={!fish.isInTank}
                        showCompatibilityFlags={this.props.showCompatibilityFlags}
                    />)}
                </div>
            </div>
        </div>
    }
}

module.exports = Shop