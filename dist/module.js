(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.WalterCalc = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var WalterCalculator = (function () {
  function WalterCalculator() {
    _classCallCheck(this, WalterCalculator);

    this.tare = 0.08;
    this.price = 0.53;
  }

  WalterCalculator.prototype.calculate = function calculate(money) {
    var iterations = 0;
    var result = [];
    if (this.price > money) {
      result.push('No Walter for you.');
    } else if (this.price == 0) {
      result.push('Dunno where you got that deal but you have a lifetime supply of free Walter!\n');
    } else if (this.price < this.tare) {
      result.push('Congratulations! Your drinking has made you rich!\n');
    } else {
      while (money >= this.price) {
        //while have money buy more bottles, push iteration to array
        var iteration = {
          bottles: 0,
          remainingCash: 0,
          totalTare: 0,
          finalCash: 0
        };
        var bottles = Math.floor(money / this.price);
        iteration.bottles = bottles;
        iterations += 1;
        //money after buy bottles
        money -= bottles * this.price;
        iteration.remainingCash = money;
        iteration.totalTare = this.getChange(bottles);
        //money after change empty bottle
        money += iteration.totalTare;
        iteration.finalCash = money;
        // push iterartion
        money = Math.round(money * Math.pow(10, 2)) / Math.pow(10, 2);
        result.push(iteration);
      }
    }
    result.unshift(iterations);
    return result;
  };

  WalterCalculator.prototype.getChange = function getChange(bottles) {
    return bottles * this.tare;
  };

  WalterCalculator.prototype.setPrice = function setPrice(val) {
    this.price = val;
  };

  return WalterCalculator;
})();

exports.WalterCalculator = WalterCalculator;

},{}]},{},[1])(1)
});