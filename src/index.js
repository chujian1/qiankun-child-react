import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

// 父应用加载子应用，会将子应用的js文件注释掉，通过fetch重新去请求，所以会有跨域问题，需要解决

// if(window.__POWERED_BY_QIANKUN__) {
//   // 父应用加载子应用执行时
//   // 动态修改路径
//   __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
// }
if(!window.__POWERED_BY_QIANKUN__) {
  // 子应用独立执行时
  render()
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
export async function bootstrap(props) {}
export async function mount(props) {
  render()
}
export async function unmount(props) {
  ReactDOM.unmountComponentAtNode(document.getElementById('root'))
}
