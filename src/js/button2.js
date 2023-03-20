let ButtonMachine = function (btnEle, ulEle) {
  fsm = new StateMachine({
    init: 'off',
    transitions: [
      { name: 'turnOn', from: 'off', to: 'on' },
      { name: 'turnOff', from: 'on', to: 'off' },
    ],
    methods: {
      onTurnOn: function (lifecycle) {
        const { transition, from, to } = lifecycle;
        btnEle.classList.add('on');
        ulEle.classList.add('ul-visible');
        log(to, from);
      },
      onTurnOff: function (lifecycle) {
        const { transition, from, to } = lifecycle;
        btnEle.classList.remove('on');
        ulEle.classList.remove('ul-visible');
        log(to, from);
      },
    },
  });

  btnEle.addEventListener('click', (event) => {
    console.log('fsm', fsm, fsm.transitions());
    fsm[fsm.transitions()[0]]();
  });

  log(fsm.state);

  return fsm;
};

function log(currentState, previousState) {
  if (!previousState) {
    console.log(`[INIT] currentState is :  ${currentState}`);
  } else {
    console.log(
      `[TRANSFORM] currentState is :  ${currentState}, and previous state is : ${previousState}`
    );
  }
}
