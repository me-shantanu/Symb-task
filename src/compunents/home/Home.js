import React from 'react'
import './Home.css'
import Intro from './intro/Intro'
import Notification from './notification/Notification'
import Task from './tasks/Task'

function Home() {
    return (
        <div className="home col-md-10">
            <h3>Dashboard</h3>
            <Intro/>
            <Notification/>
            <Task/>
        </div>
    )
}

export default Home
