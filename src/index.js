'use strict';

var famous = require('famous');
var avatar = require('./avatar');
var avatarList = require('./avatarList');
var DOMElement = famous.domRenderables.DOMElement;
var FamousEngine = famous.core.FamousEngine;
var GestureHandler = famous.components.GestureHandler;
var Transitionable = require('famous/transitions/Transitionable');
var Position = famous.components.Position;
var Transitionable = require('famous/transitions/Transitionable');
var Align = famous.components.Align;

var scene= FamousEngine.createScene();

var mainNode = scene.addChild();
mainNode
    .setSizeMode('relative', 'relative');

mainNode.el = new DOMElement(mainNode, {
    properties: {
        'background-color': '#CCCEC7'

    }
})

var item1 = mainNode.addChild();
item1
    .setProportionalSize(0.8, 0.1)
    .setMountPoint(0.5, 0.5)
    .setAlign(0.5, 0.1);

item1.el = new DOMElement(item1, {
    properties: {
        'background-color': '#E3F5BD',
        'border': '5px solid',
        'border-color': 'whitesmoke',
        'border-radius': '20px',
        'box-shadow': '7px 7px 10px #888888'
    }
})

var draggingNode = scene.addChild();
draggingNode
    .setProportionalSize(1, 1)
    .setAlign(0.95, 0);

draggingNode.el = new DOMElement(draggingNode, {
    properties: {
        'background-color': '#EFCA72',
        'box-shadow': '-2px 0px 5px #888888'
    }
})

draggingNode.alignPos = new Align(draggingNode);
draggingNode.gestures = new GestureHandler(draggingNode);
draggingNode.gestures.on('drag', function(e, p){
    var currentPos = draggingNode.getPosition()
    var newPosX = currentPos[0] + e.centerDelta.x
    if (newPosX < -100) {
        console.log('hey there!!!');
        draggingNode.alignPos.set(0.05, 0, 0, {duration: 1000, curve: 'easeOutBounce'})
    }
    draggingNode.setPosition(newPosX, currentPos[1])
});

var item2 = draggingNode.addChild();
item2
    .setSizeMode('absolute', 'absolute')
    .setAbsoluteSize(300, 300)
    .setMountPoint(0.5, 0.5)
    .setAlign(0.5, 0.5);

item2.el = new DOMElement(item2, {
    tagName: 'img',
    properties: {
        'background-color': '#E3F5BD',
        'border': '5px solid',
        'border-color': 'whitesmoke',
        'border-radius': '20px',
        'box-shadow': '7px 7px 10px #888888'
    }
});
item2.el.setAttribute('src', '/images/ae.jpg');

FamousEngine.init();
