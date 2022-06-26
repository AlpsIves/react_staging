import React, {Component} from 'react';
//1.创建组件,并且暴露组件
import Hello from "./components/Hello";
import Welcome from "./components/Welcome";

export default class App extends Component {
    render() {
        return (
            <div>
                <Hello/>
                <Welcome/>
            </div>
        );
    }

}
