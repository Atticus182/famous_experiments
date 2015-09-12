var DOMElement = require('famous/dom-renderables/DOMElement');

// options - Object
// options.src - image src
// options.size - image size
function Avatar(node, options) {
  var size = options.size ? options.size : 48;
  var ava = node.addChild();
  ava
    .setSizeMode('absolute', 'absolute', 'absolute')
    .setAbsoluteSize(size, size)
    .setPosition(50, 50)
  ava.el = new DOMElement(ava, {
      tagName: 'img',
      properties :{
          'background-color': '#ccccc',
          'border': '2px solid',
          'border-color': 'white',
          'padding': '5px'
      }
  });
  ava.el.setAttribute('src', options.src);
  ava.el.setProperty('border-radius', size / 2 + 'px');
  return ava;
}

module.exports = Avatar;
