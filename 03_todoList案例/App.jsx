import React, {Component} from 'react';
import Heard from "./components/Heard";
import List from "./components/List";
import Footer from "./components/Footer";
import  './App.css'
class App extends Component {
    // 初始化状态
    state={todos:[
            {id:'001',name:'吃饭',done:true},
            {id:'002',name:'睡觉',done:true},
            {id:'003',name:'写代码',done:false},
            {id:'004',name:'逛街',done:false},
        ]}

    render() {
        const {todos}=this.state
        return (
            <div>
                <div className="todo-container">
                    <div className="todo-wrap">
                       <Heard addTodo={this.addTodo}/>
                        <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                        <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
                    </div>
                </div>
            </div>
        );
    }
// addTodo用于添加一个todo,接收参数为对象
    addTodo=(todoObj)=>{
         // console.log('APP',todoObj);
         //获取原来的todos
        const {todos}=this.state;
        //往前追加todo
        const newTodos=[todoObj,...todos];
       // 更新状态
        this.setState({todos: newTodos});
    }

    //用于勾选和取消勾选的todo
    //  用于更新一个todo对象
    updateTodo=(id,done)=>{
      // 获取状态中的todos
        const {todos}=this.state;
        const newTodos=todos.map((todoObj)=>{
          if (todoObj.id===id) return {...todoObj,done}
          else return todoObj;
        });
        this.setState({todos: newTodos});
    }
    // 用于删除一个任务卡的函数
    deleteTodo=(id)=>{
       const {todos}=this.state;
       //删除指定id的对象
       const newTodos=todos.filter((todoObj)=>{
           return todoObj.id!==id;
        });
       this.setState({todos: newTodos});
    }
  //全选函数
    checkAllTodo=(done)=>{
     //获取原来的todos
        const {todos}=this.state
      const newTodos =todos.map((todoObj)=>{
            return {...todoObj,done}
        })
        this.setState({todos: newTodos})
    }
    //清除所有的函数
    clearAllDone=()=>{
        //获取原来的todos
        const {todos}=this.state;
       const newTodos=todos.filter((todoObj)=>{
            return !todoObj.done;
        })
        this.setState({todos: newTodos});
    }

}

export default App;