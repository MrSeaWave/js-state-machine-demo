let StateMachine = require('javascript-state-machine');

let fsm = new StateMachine({
  init: 'solid',
  transitions: [
    { name: 'melt', from: 'solid', to: 'liquid' },
    { name: 'freeze', from: 'liquid', to: 'solid' },
    { name: 'vaporize', from: 'liquid', to: 'gas' },
    { name: 'condense', from: 'gas', to: 'liquid' },
  ],
  methods: {
    onMelt: function () {
      console.log('I melted');
    },
    onFreeze: function () {
      console.log('I froze');
    },
    onVaporize: function () {
      console.log('I vaporized');
    },
    onCondense: function () {
      console.log('I condensed');
    },
  },
});

console.log('DEMO1 fsm', fsm);
console.log('fsm.state', fsm.state);

// console.log('fsm.melt', fsm.melt());
// console.log('fsm.state', fsm.state);

console.log('fsm.freeze', fsm.freeze());
console.log('fsm.state', fsm.state);

// console.log('fsm.vaporize', fsm.vaporize());
// console.log('fsm.state', fsm.state);

// console.log('fsm.condense', fsm.condense());
// console.log('fsm.state', fsm.state);
