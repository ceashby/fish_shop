'use strict'

var _ = require('underscore')

exports.immutableSplice = function(array, start, deleteCount, ...items) {
    return [ ...array.slice(0, start), ...items, ...array.slice(start + deleteCount) ]
}

exports.immutableRemove = function(array, item) {
    return exports.immutableSplice(array, _.indexOf(array, item), 1)
}

exports.getRandomInt = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}