// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.

    // right now this breaks the chat
    RoomsView.$button.on('click', RoomsView.render);
    // RoomsView.$select.on('load', handleChange(event));
  },

  render: function() {
    // TODO: Render out the list of rooms.
    // populate the div with a list of rooms
    // RoomsView.$select.html();
    // for in loop over the rooms set
    // call renderRoom on each

  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    // add HTML with the room name to room selector list
    // check if the rooomname (input) matches rooms._data.room
    // append to select element the result of invoking roomView.render(roomname)
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    // filter messages by room
    // and messageView . render only for messages in that rooom
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.

  }

};


let roomView = {
  render: _.template(`
 <option><%= roomname%></option>
`),

};