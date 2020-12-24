import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Task.css'
import { Avatar } from '@material-ui/core';
function Taskleft() {
    return (
        <div className="taskleft">
            <div className="taskleft__header">
                <h4>Studenanfragen</h4>
                <div className="task__header__right">
                    <p>AAlle anfragen</p>
                    <ExpandMoreIcon className="task__header__icon"/>
                </div>
            </div>
            <div className="taskleft__main">
                <div className="taskleft__main__item">
                    <Avatar/>
                    <div className="taskleft__main__item__text">
                        <h4><span>Achsel</span>Mochte mit<span>peter</span>
                        um 12.00 Uhr eine<span>Uberfandfahrt</span>  machen
                        </h4>
                        <p>Bezzhte am 10,03 etn 12.12 Uhr</p>
                    </div>
                </div>
                <hr/>
                <div className="taskleft__main__item">
                    <Avatar/>
                    <div className="taskleft__main__item__text">
                        <h4><span>Achsel</span>Mochte mit<span>peter</span>
                        um 12.00 Uhr eine<span>Uberfandfahrt</span>  machen
                        </h4>
                        <p>Bezzhte am 10,03 etn 12.12 Uhr</p>
                    </div>
                </div>
                <hr/>
                <div className="taskleft__main__item">
                    <Avatar/>
                    <div className="taskleft__main__item__text">
                        <h4><span>Achsel</span>Mochte mit<span>peter</span>
                        um 12.00 Uhr eine<span>Uberfandfahrt</span>  machen
                        </h4>
                        <p>Bezzhte am 10,03 etn 12.12 Uhr</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Taskleft
