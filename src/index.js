// https://zhuanlan.zhihu.com/p/467298647

// 伪代码
const buttonMachine = {
  // 状态机当前状态
  currentState: 'off',
  // 每次输入会调用 transition 方法根据输入判断更改当前状态
  transition: function (event) {
    // do something 根据用户行为(event)更改currentState
    switch (this.currentState) {
      case 'on':
        // do something 更改为 关闭 状态， 取消高亮同时隐藏菜单
        this.currentState = 'off';
        doSomething();
        break;

      case 'off':
        // do something 更改状态为 打开 状态 高亮按钮、显示菜单
        this.currentState = 'on';
        doSomething();
        break;

      default:
        console.log('Invalid State');
        break;
    }
  },
};
