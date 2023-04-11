// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  _data: new Set,

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  selected: 'lobby',

  add: function(message) {

    Rooms._data.add(message);
    Rooms.selected = message.roomname;
  },

  update: function(data) {
    for (var i = 0; i < data.length; i++) {
      var currentRoom = data[i];

      if (currentRoom.roomname !== null) {
        Rooms.add(currentRoom);
      }
    }
    // console.log('rooms:', Rooms._data);
  },

  select: function(room) {
    Rooms.selected = room;
  }
};