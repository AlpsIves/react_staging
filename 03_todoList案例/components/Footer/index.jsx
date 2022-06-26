import React, {Component} from 'react';
import './index.css'
import PropTypes from "prop-types";

class Footer extends Component {
    static propsType={
        todos:PropTypes.array.isRequired,
        checkAllTodo:PropTypes.func.isRequired,
        clearAllDone:PropTypes.func.isRequired
}
    render() {
        const {todos} = this.props;
        //计算以完成的任务有多少
        //总数有多少
        const doneCount = todos.reduce((pre, todo) =>pre + (todo.done ? 1 : 0), 0)
        const Totals = todos.length;
        return (
            <div className="todo-footer">
                <label>
                    <input onChange={this.handleCheckAll} checked={doneCount === Totals && Totals!==0} type="checkbox"/>
                </label>
                <span><span>已完成{doneCount}</span> / 全部{Totals}</span>
                <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
            </div>
        );
    }
    handleCheckAll=(event)=>{
      this.props.checkAllTodo(event.target.checked);
    }
    handleClearAllDone=()=>{
      this.props.clearAllDone();
    }
}

export default Footer;