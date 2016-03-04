/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vector2 = require('vector2');
var numbers = [{
  title: '0',
  subtitle: ''
}, {
  title: '1',
  subtitle: ''
}, {
  title: '2',
  subtitle: ''
}, {
  title: '3',
  subtitle: ''
}, {
  title: '4',
  subtitle: ''
}, {
  title: '5',
  subtitle: ''
}, {
  title: '6',
  subtitle: ''
}, {
  title: '7',
  subtitle: ''
}, {
  title: '8',
  subtitle: ''
}, {
  title: '9',
  subtitle: ''
}, {
  title: '10',
  subtitle: ''
}, {
  title: '11',
  subtitle: ''
}, {
  title: '12',
  subtitle: ''
}, {
  title: '13',
  subtitle: ''
}, {
  title: '14',
  subtitle: ''
}, {
  title: '15',
  subtitle: ''
}, {
  title: '16',
  subtitle: ''
}, {
  title: '17',
  subtitle: ''
}, {
  title: '18',
  subtitle: ''
}, {
  title: '19',
  subtitle: ''
}, {
  title: '20',
  subtitle: ''
}];
var stats = new UI.Card({
  title: "My Progress",
  body: "Sed aliquam augue et condimentum faucibus. Duis viverra felis urna, sit amet vulputate tellus aliquam at. Phasellus dignissim feugiat ante, sit amet venenatis augue varius id. Sed elit magna, tempus vel ex et, vulputate tristique felis. Quisque egestas quam at tortor accumsan tincidunt. Proin sapien eros, varius pharetra lectus commodo, varius posuere tortor. Donec placerat sem ut rutrum rhoncus. Quisque vestibulum ante sed lectus efficitur consectetur. Sed tincidunt bibendum blandit. Donec viverra blandit augue, ac condimentum nisl feugiat quis. Donec efficitur tempus ligula, non posuere augue sagittis ac. In tristique metus a dolor consectetur, et congue ligula molestie. Pellentesque efficitur in velit quis congue. Proin gravida in felis et ultrices. Aenean ut dolor mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  scrollable: true
});
var logform = new UI.Menu({
  sections: [{
    title: 'Distance in km/miles',
    items: numbers
  }]
});
var menuItems = [{
      title: 'Log Activity',
      subtitle: 'Track time, km, miles',
      toshow: logform
    }, {
      title: 'Stats',
      subtitle: 'See your progress',
      toshow: stats
    }];
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
    items: menuItems } , {
    title: 'Log',
    items: userlog
  }]
});

main.on('select', function(e) {
  e.item.toshow.show();
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