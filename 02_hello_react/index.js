//引入react核心库
// eslint-disable-next-line no-unused-vars
import React from "react";
//引入reactDom
import ReactDOM from "react-dom/client";
//引入app组件
import App from "./App";
//渲染App组件到页面
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

