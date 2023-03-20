// 如果你有做过下拉分页列表的需求，那么一定会经常遇到这些问题。
// 1. 当拉到当前页面的底部的时候，需要去加载下一页的数据，这个时候我们常常设置一个 isLoading 的状态，当数据加载成功之后会将 isLoading 设置为 false。
// 2. 但是有时候因为网络差、接口超时这些问题，会导致请求失败，这个时候就需要做一些错误提示，还要加个 isError 的状态。
// 3. 当点击重新加载的时候，就又会进入 loading 状态，重新请求接口，重复第1、2步。
// 4. 如果到了最后一页，列表底部就需要展示“已经没有更多”之类的话术，这时要设置一个 isFinish 的状态。
let StateMachine = require('javascript-state-machine');
let visualize = require('javascript-state-machine/lib/visualize');

const fsm = new StateMachine({
  init: 'loading',
  transitions: [
    { name: 'error', from: 'loading', to: 'error' },
    { name: 'finish', from: 'loading', to: 'finish' },
    { name: 'tryAgain', from: 'error', to: 'loading' },
    { name: 'init', from: 'loading', to: 'noLoading' },
  ],
  methods: {
    onEnterLoading() {
      // $('#loading').show();
    },
    onLeaveLoading() {
      // $('#loading').hide();
    },
    onEnterError() {
      // $('#error').show();
    },
    onLeaveError() {
      // $('#error').hide();
    },
    onEnterFinish() {
      // $('#finish').show();
    },
    onTryAgain() {
      // 重新请求...
    },
  },
});

console.log(visualize(fsm));
