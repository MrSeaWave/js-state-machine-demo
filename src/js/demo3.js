let StateMachine = require('javascript-state-machine');

let fsm = new StateMachine({
  init: 'A',
  transitions: [{ name: 'step', from: 'A', to: 'B' }],
  methods: {
    onBeforeStep: function () {
      console.log('onBeforeStep');
    },
    onLeaveA: function () {
      console.log('onLeaveA');
    },
    onB: function () {
      console.log('onEnterB');
    },
    onStep: function () {
      console.log('onStep');
    },
  },
});

fsm.onLeaveState = function (lifecycle) {
  const { transition, from, to } = lifecycle;
  console.log(`状态改变，transition:${transition},from:${from}, to:${to}`);
};

console.log('Demo3 fsm', fsm.state);
fsm.step();
