let ButtonMachine = function (btnEle, ulEle) {
  return {
    // 状态机当前状态
    currentState: 'off',
    // 初始化事件
    init: function () {
      btnEle.addEventListener('click', (event) => {
        console.log('this', this);
        this.transition();
      });
      log(this);
    },
    // 每次输入会调用 transition 方法根据输入判断更改当前状态
    transition: function (event) {
      // do something 根据用户行为(event)更改currentState
      switch (this.currentState) {
        case 'on': {
          const old = this.currentState;
          // do something 更改为 关闭 状态， 取消高亮同时隐藏菜单
          this.currentState = 'off';
          this.turnOff(old);
          break;
        }
        case 'off': {
          const old = this.currentState;
          // do something 更改状态为 打开 状态 高亮按钮、显示菜单
          this.currentState = 'on';
          this.turnOn(old);
          break;
        }
        default:
          console.log('Invalid State');
          break;
      }
    },
    turnOn: function (fromState) {
      btnEle.classList.add('on');
      ulEle.classList.add('ul-visible');
      log(this, fromState);
    },
    turnOff: function (fromState) {
      btnEle.classList.remove('on');
      ulEle.classList.remove('ul-visible');
      log(this, fromState);
    },
  };
};

function log(fsm, previousState) {
  if (!previousState) {
    console.log(`[INIT] currentState is :  ${fsm.currentState}`);
  } else {
    console.log(
      `[TRANSFORM] currentState is :  ${fsm.currentState}, and previous state is : ${previousState}`
    );
  }
}
