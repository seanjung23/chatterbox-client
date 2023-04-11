// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {
  $chats: $('#chats'),

  initialize: function () {
    MessagesView.$chats.on('click', MessagesView.render);
  },

  render: function () {
    MessagesView.$chats.html('');

    let filterByRoom = _.filter(Messages._data, function (message) {
      return message.roomname === Rooms.selected;
    });

    _.each(filterByRoom, function (message) {
      MessagesView.renderMessage(message);
    });
  },

  renderMessage: function (message) {
    // var currentMessage = Messages.retrieve(message);
    var rendered = MessageView.render(message);
    $(rendered).appendTo(MessagesView.$chats);
  },

  handleClick: function (event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  },
};
