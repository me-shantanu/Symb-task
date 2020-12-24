import React from 'react'
import './Task.css'
import Taskleft from './Taskleft'
import Taskright from './Taskright'

function Task() {
    return (
        <div className="task">
            <Taskleft/>
            <Taskright/>
        </div>
    )
}

export default Task
