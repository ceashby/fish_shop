'use strict'

// watchify main.js --o bundle.js --transform [ babelify --presets [ react ] ] --debug --verbose

var ReactDOM = require('react-dom')
var Page = require('./containers/page.js')
var React = require('react')

window.CHECK_ALL_FISH_COMPATIBILITY = false

var fishes = [
    {
        name: 'american_crayfish',
        friendly_name: 'American Crayfish'
    },
    {
        name: 'barreleye',
        friendly_name: 'Barreleye'
    },
    {
        name: 'batfish',
        friendly_name: 'Batfish'
    },
    {
        name: 'battered_cod',
        friendly_name: 'Battered Cod'
    },
    {
        name: 'betta_splendens',
        friendly_name: 'Betta Splendens'
    },
    {
        name: 'bonnethead',
        friendly_name: 'Bonnethead'
    },
    {
        name: 'cichlnames',
        friendly_name: 'Cichlname'
    },
    {
        name: 'cleaner_shrimp',
        friendly_name: 'Cleaner Shrimp'
    },
    {
        name: 'cocoa_damselfish',
        friendly_name: 'Cocoa Damselfish'
    },
    {
        name: 'coelocanth',
        friendly_name: 'Coelocanth'
    },
    {
        name: 'cookiecutter',
        friendly_name: 'Cookiecutter Shark'
    },
    {
        name: 'cuttlefish',
        friendly_name: 'Cuttlefish'
    },
    {
        name: 'damselfish',
        friendly_name: 'Damselfish'
    },
    {
        name: 'dragon_wrasse',
        friendly_name: 'Dragon Wrasse'
    },
    {
        name: 'electrophorus',
        friendly_name: 'Electrophorus'
    },
    {
        name: 'elephant_seal',
        friendly_name: 'Elephant Seal'
    },
    {
        name: 'elvers',
        friendly_name: 'Elvers'
    },
    {
        name: 'fanfin_seadevil',
        friendly_name: 'Fanfin Seadevil'
    },
    {
        name: 'fish_fingers',
        friendly_name: 'Fish Fingers'
    },
    {
        name: 'french_angel_fish',
        friendly_name: 'French Angel Fish'
    },
    {
        name: 'hammerhead',
        friendly_name: 'Hammerhead Shark'
    },
    {
        name: 'harlequin_shrimp',
        friendly_name: 'Harlequin Shrimp'
    },
    {
        name: 'hawksbill_turtle',
        friendly_name: 'Hawksbill Turtle'
    },
    {
        name: 'megalodon',
        friendly_name: 'Megalodon'
    },
    {
        name: 'minnow',
        friendly_name: 'Minnow'
    },
    {
        name: 'neon_tetra',
        friendly_name: 'Neon Tetra'
    },
    {
        name: 'oarfish',
        friendly_name: 'Oarfish'
    },
    {
        name: 'painted_lobster',
        friendly_name: 'Painted Lobster'
    },
    {
        name: 'prawn_cocktail',
        friendly_name: 'Prawn Cocktail'
    },
    {
        name: 'psychedelic_frogfish',
        friendly_name: 'Psychedelic Frogfish'
    },
    {
        name: 'robocod',
        friendly_name: 'Robocod'
    },
    {
        name: 'salmon_shark',
        friendly_name: 'Salmon Shark'
    },
    {
        name: 'sand_eel',
        friendly_name: 'Sand Eel'
    },
    {
        name: 'sea_lion',
        friendly_name: 'Sea Lion'
    },
    {
        name: 'shortfin_mako_shark',
        friendly_name: 'Shortfin Mako Shark'
    },
    {
        name: 'slipper_lobster',
        friendly_name: 'Slipper Lobster'
    },
    {
        name: 'sockeye_salmon',
        friendly_name: 'Sockeye Salmon'
    },
    {
        name: 'spanish_hogfish',
        friendly_name: 'Spanish Hogfish'
    },
    {
        name: 'spinner_dolphin',
        friendly_name: 'Spinner Dolphin'
    },
    {
        name: 'stauroteuthis',
        friendly_name: 'Stauroteuthis'
    },
    {
        name: 'stingray',
        friendly_name: 'Stingray'
    },
    {
        name: 'sunstar',
        friendly_name: 'Sunstar'
    },
    {
        name: 'symphysodon',
        friendly_name: 'Symphysodon'
    },
    {
        name: 'torquigener',
        friendly_name: 'Torquigener'
    },
]



var page = <Page fishes={fishes}/>

ReactDOM.render(page, document.getElementById('react-body'))