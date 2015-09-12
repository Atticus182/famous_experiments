var DOMElement = require('famous/dom-renderables/DOMElement');
var avatar = require('./avatar');

// user_list - array of avatars
function avatarList(node, user_list) {
    var list = node.addChild();
    var yPos = 20;
    list
        .setSizeMode('absolute', 'absolute', 'absolute')
        .setAbsoluteSize(300, 700)
    list.el = new DOMElement(list, {
        properties: {
            'background-color': 'grey'
        }
    });

    for (var i=0; i < user_list.length; i++) {
        var temp = list.addChild();
        temp
            .setSizeMode('absolute', 'absolute', 'absolute')
            .setAbsoluteSize(250, 100);

        var ava = new avatar(temp, {
            'src': user_list[i].src
        });

        var name = temp.addChild();
        name
            .setPosition(70, yPos);
        name.el = new DOMElement(name, {
            content : user_list[i].name,
            properties : {
                'background-color': 'blue'
            }
        });

        temp
            .setPosition(20, yPos);
        yPos += 60;
    }
    return list;
}

module.exports = avatarList;
