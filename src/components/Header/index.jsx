import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {
    // This function gets the input value from event.target.value, and event.keyCode
    // when press enter, even.keyCode == 13, then enter the message content 
    static propTypes = {
        addTodo:PropTypes.func.isRequired
    }

    handleKeyUp = (event) => {
        const {keyCode, target} = event
        if (keyCode !== 13) return

        if(target.value.trim() === '') {
            alert("Enter the next ToDo!")
            return
        }
        const todoObj = {id: nanoid(), name:target.value, done: false}
        this.props.addTodo(todoObj)
        //empty the entry box 
        target.value = ""
    }
    render() {
        return (
            <div>
                <div className="todo-header">
                    <input onKeyUp={this.handleKeyUp} type="text" placeholder="Enter Your Tasks and then press Enter. " />
                </div>
            </div>
        )
    }
}
