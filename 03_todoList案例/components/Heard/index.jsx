import React, {Component} from 'react';
import {nanoid} from "nanoid";
import PropTypes from 'prop-types'

import './index.css'

class Heard extends Component {


    static propTypes={
        addTodo:PropTypes.func.isRequired
    }

    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>

        );
    }

    handleKeyUp = (event) => {
        const {keyCode, target} = event;
        if (keyCode !== 13) return;
        //添加的字符不能为空
        if (target.value.trim() === ' ') {
            alert('输入不能为空!!!')
            return;
        }
        // 构建参数对象
        const todoObj = {id: nanoid(), name: target.value, done: false}
        //将todoObj传递给App
        this.props.addTodo(todoObj);
        //清空输入框
        target.value = '';

    }
}

export default Heard;