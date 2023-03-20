var fsm = new StateMachine({
  init: 'menu',

  transitions: [
    { name: 'play', from: 'menu', to: 'game' },
    { name: 'quit', from: 'game', to: 'menu' },
  ],

  methods: {
    onEnterMenu: function () {
      return new Promise(function (resolve, reject) {
        $('#menu').fadeIn('fast', resolve);
      });
    },

    onEnterGame: function () {
      return new Promise(function (resolve, reject) {
        $('#game').fadeIn('fast', resolve);
      });
    },

    onLeaveMenu: function () {
      return new Promise(function (resolve, reject) {
        $('#menu').fadeOut('fast', resolve);
      });
    },

    onLeaveGame: function () {
      return new Promise(function (resolve, reject) {
        $('#game').fadeOut('fast', resolve);
      });
    },
  },
});
