let ButtonMachine = function (btnEle, ulEle) {
  fsm = new StateMachine({
    init: 'off',
    transitions: [
      { name: 'turnOn', from: 'off', to: 'on' },
      { name: 'turnOff', from: 'on', to: 'off' },
    ],
    methods: {
      onTurnOn: function (event, from, to) {
        btnEle.classList.add('on');
        ulEle.classList.add('ul-visible');
        log(to, from);
      },
      onTurnOff: function (event, from, to) {
        btnEle.classList.remove('on');
        ulEle.classList.remove('ul-visible');
        log(from, to);
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
