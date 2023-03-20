let StateMachine = require('javascript-state-machine');

let fsm = new StateMachine({
  init: 'A',
  transitions: [
    { name: 'step', from: 'A', to: 'B' },
    { name: 'step', from: 'B', to: 'C' },
    { name: 'step', from: 'C', to: 'D' },
    { name: 'reset', from: ['B', 'C', 'D'], to: 'A' },
  ],
});

console.log('Demo2 fsm', fsm);

console.log(fsm.state);

fsm.step();
console.log(fsm.state);

// fsm.step();
// console.log(fsm.state);

// fsm.step();
// console.log(fsm.state);

fsm.reset();
console.log(fsm.state);
