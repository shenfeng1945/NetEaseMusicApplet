import React, { Component } from "react";
import { Provider } from "react-redux";
import AV from "leancloud-storage/dist/av-weapp.js";

import configStore from "./store";

import "./app.scss";

const store = configStore();

class App extends Component {
  componentDidMount() {
    const APP_ID = "82InV9gcyTzIw099BrTuO1wd-gzGzoHsz";
    const APP_KEY = "qCBb2prMElwslrBNaryawyER";

    AV.init({
      appId: APP_ID,
      appKey: APP_KEY,
      serverURLs: "https://netease.shenfeng1945.cn",
    });
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Provider store={store}>{this.props.children}</Provider>;
  }
}

export default App;
