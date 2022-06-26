import React, {Component} from 'react';
import './index.css'
import PropTypes from "prop-types";

class Item extends Component {
    state = {mouse: false}
    static propTypes = {
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        done: PropTypes.bool.isRequired,
        updateTodo: PropTypes.func.isRequired,
        deleteTodo:PropTypes.func.isRequired

    }

    render() {
        const {id, name, done} = this.props;
        return (
            <li style={{backgroundColor: this.state.mouse ? '#ddd' : 'white'}} onMouseLeave={this.handleMouse(false)}
                onMouseEnter={this.handleMouse(true)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleChecked(id)}/>
                    <span>{name}</span>
                </label>
                <button onClick={()=>this.handleDelete(id)} className="btn btn-danger" style={{display: this.state.mouse ? 'block' : 'none'}}>删除</button>
            </li>
        );
    }

    handleChecked = (id) => {
        return (event) => {
            const {updateTodo} = this.props;
            updateTodo(id, event.target.checked)
        }
    }

    handleMouse = (flag) => {
        return () => {
            this.setState({mouse: flag})
        }
    }

    handleDelete=(id)=>{
      const {deleteTodo}=this.props;
     if (window.confirm("是否删除此选项?")) deleteTodo(id);
    }
}

export default Item;