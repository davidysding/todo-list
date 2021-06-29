import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

    handleCheckAll = (event) => {
        this.props.checkAllTodo(event.target.checked)
    }
    handleClearAllDone = () =>{
        this.props.clearAllDone()
    }
    render() {
        const { todos } = this.props
        //calculate the number of todos have done
        const doneCount = todos.reduce((pre, todo) => { return pre + (todo.done ? 1 : 0) }, 0)
        const total = todos.length
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === total && total !== 0 ? true : false} />
                </label>
                <span>
                    <span>Done {doneCount} </span> / Total {total}
                </span>
                <button onClick={this.handleClearAllDone} className="btn btn-danger">Reset/Clear All Dones.</button>
            </div>

        )
    }
}
