// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {
  _data: {},
  _messageCounter: 0,

  add: (message) => {
    Messages._data[message.message_id] = message;
    Messages._messageCounter += 1;
  },

  update: function (data) {
    for (var i = 0; i < data.length; i++) {
      //console.log('current message', data[i].text);
      var currentMessage = data[i];

      if (currentMessage.text !== null) {
        Messages.add(currentMessage);
      } else if (currentMessage.username !== null) {
        Messages.add(currentMessage);
      }
    }
  },

  retrieve: (message) => {
    if (Object.keys(Messages._data).length === 0) {
      return 'No messages stored yet';
    } else if (Messages._data[message.message_id] === undefined) {
      return 'Sorry message not exist';
    }
    return Messages._data[message.message_id];
  },

  size: () => {
    return Messages._messageCounter;
  },

  delete: (message) => {
    if (Object.keys(Messages._data).length === 0) {
      return 'No messages stored yet';
    } else if (Messages._data[message.message_id] === undefined) {
      return 'Sorry message not exist';
    }
    delete Messages._data[message.message_id];
    Messages._messageCounter -= 1;
  },
};
