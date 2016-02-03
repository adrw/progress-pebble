/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vector2 = require('vector2');
var userlog = [{
  title: '13.2km in 44:33',
  subtitle: 'Aug 13, 2016'
}, {
  title: '12.9km in 35:21',
  subtitle: 'Aug 10, 2016'
}, {
  title: '10.2km in 25:21',
  subtitle: 'Aug 8, 2016'
}, {
  title: '15.8km in 55:21',
  subtitle: 'Aug 4, 2016'
}];

// var main = new UI.menu({
//   sections: [{
//         items: [{
//           title: 'Pebble.js',
//           icon: 'images/menu_icon.png',
//           subtitle: 'Can do Menus'
//         }, {
//           title: 'Second Item',
//           subtitle: 'Subtitle Text'
//         }]
//       }]
//     });
// main.on('select', function(e) {
//   console.log("WE DID IT");
//   //console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
//   console.log('The item is titled "' + e.item.title + '"');
//   });
// main.show();

var main = new UI.Menu({
  sections: [{
    title: 'Progress',
    items: [{
      title: 'Log Activity',
      subtitle: 'Track time, km, miles'
    }, {
      title: 'Stats',
      subtitle: 'See your progress'
    }]} , {
    title: 'Log',
    items: userlog
  }]
});

main.show();



// var main = new UI.Card({
//   title: 'Pebble.js',
//   icon: 'images/menu_icon.png',
//   subtitle: 'Hello World!',
//   body: 'Press any button.',
//   subtitleColor: 'indigo', // Named colors
//   bodyColor: '#9a0036' // Hex colors
// });

// main.show();

// main.on('click', 'up', function(e) {
//   var menu = new UI.Menu({
//     sections: [{
//       items: [{
//         title: 'Pebble.js',
//         icon: 'images/menu_icon.png',
//         subtitle: 'Can do Menus'
//       }, {
//         title: 'Second Item',
//         subtitle: 'Subtitle Text'
//       }]
//     }]
//   });
//   menu.on('select', function(e) {
//     console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
//     console.log('The item is titled "' + e.item.title + '"');
//   });
//   menu.show();
// });

// main.on('click', 'select', function(e) {
//   var wind = new UI.Window({
//     fullscreen: true,
//   });
//   var textfield = new UI.Text({
//     position: new Vector2(0, 65),
//     size: new Vector2(144, 30),
//     font: 'gothic-24-bold',
//     text: 'Text Anywhere!',
//     textAlign: 'center'
//   });
//   wind.add(textfield);
//   wind.show();
// });

// main.on('click', 'down', function(e) {
//   var card = new UI.Card();
//   card.title('A Card');
//   card.subtitle('Is a Window');
//   card.body('The simplest window type in Pebble.js.');
//   card.show();
// });