/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
//var Vector2 = require('vector2');
var theDistance = 0;
var theTime = 0;
var logTime, logDist, dist, time, stats, submit;

var time = [{
  title: 'Done',
  digit: -1,
  toshow: stats
}, {
  title: (10*theTime + '0')/1000,
  digit: 0,
  toshow: logTime
}, {
  title: (10*theTime + '1')/1000,
  digit: 1,
  toshow: logTime
}, {
  title: (10*theTime + '2')/1000,
  digit: 2,
  toshow: logTime
}, {
  title: (10*theTime + '3')/1000,
  digit: 3,
  toshow: logTime
}, {
  title: (10*theTime + '4')/1000,
  digit: 4,
  toshow: logTime
}, {
  title: (10*theTime + '5')/1000,
  digit: 5,
  toshow: logTime
}, {
  title: (10*theTime + '6')/1000,
  digit: 6,
  toshow: logTime
}, {
  title: (10*theTime + '7')/1000,
  digit: 7,
  toshow: logTime
}, {
  title: (10*theTime + '8')/1000,
  digit: 8,
  toshow: logTime
}, {
  title: (10*theTime + '9')/1000,
  digit: 9,
  toshow: logTime
}];


var dist = [{
  title: 'Done',
  digit: -1,
  toshow: stats
}, {
  title: (10*theDistance + '0')/1000,
  digit: 0,
  toshow: logDist
}, {
  title: (10*theDistance + '1')/1000,
  digit: 1,
  toshow: logDist
}, {
  title: (10*theDistance + '2')/1000,
  digit: 2,
  toshow: logDist
}, {
  title: (10*theDistance + '3')/1000,
  digit: 3,
  toshow: logDist
}, {
  title: (10*theDistance + '4')/1000,
  digit: 4,
  toshow: logDist
}, {
  title: (10*theDistance + '5')/1000,
  digit: 5,
  toshow: logDist
}, {
  title: (10*theDistance + '6')/1000,
  digit: 6,
  toshow: logDist
}, {
  title: (10*theDistance + '7')/1000,
  digit: 7,
  toshow: logDist
}, {
  title: (10*theDistance + '8')/1000,
  digit: 8,
  toshow: logDist
}, {
  title: (10*theDistance + '9')/1000,
  digit: 9,
  toshow: logDist
}];

var stats = new UI.Card({
  title: "My Progress",
  body: "Sed aliquam augue et condimentum faucibus. Duis viverra felis urna, sit amet vulputate tellus aliquam at. Phasellus dignissim feugiat ante, sit amet venenatis augue varius id. Sed elit magna, tempus vel ex et, vulputate tristique felis. Quisque egestas quam at tortor accumsan tincidunt. Proin sapien eros, varius pharetra lectus commodo, varius posuere tortor. Donec placerat sem ut rutrum rhoncus. Quisque vestibulum ante sed lectus efficitur consectetur. Sed tincidunt bibendum blandit. Donec viverra blandit augue, ac condimentum nisl feugiat quis. Donec efficitur tempus ligula, non posuere augue sagittis ac. In tristique metus a dolor consectetur, et congue ligula molestie. Pellentesque efficitur in velit quis congue. Proin gravida in felis et ultrices. Aenean ut dolor mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  scrollable: false
});


var logTime = new UI.Menu({
  sections: [{
    title: 'Time in 00:00:00;',
    items: time
  }]
});

logTime.on('select', function(e) {
  if (e.item.digit == -1) {
    submit.show();
  } else {
    theDistance *=10;
    theDistance += e.item.digit;
    console.log(theTime);
    logTime.show();
  }
});

var logDist = new UI.Menu({
  sections: [{
    title: 'Distance in km/miles',
    items: dist
  }]
});

logDist.on('select', function(e) {
  if (e.item.digit == -1) {
    logTime.show();
  } else {
    theDistance *=10;
    theDistance += e.item.digit;
    console.log(theDistance);
    logDist.show();
  }
});

var submit = new UI.Card({
  title: "Logged Activity",
  body: "Distance: "+theDistance+"    "+"Time: "+theTime+"     ",
  scrollable: false
});

submit.on('click', 'down', function(e) {
  theDistance += 20;
  submit.show();
});


var menuItems = [{
      title: 'Log Activity',
      subtitle: 'Track time, km, miles',
      toshow: logDist
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