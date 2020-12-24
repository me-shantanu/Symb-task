import React from 'react'
import './Nabbar.css'
import AccessibilityNewRoundedIcon from '@material-ui/icons/AccessibilityNewRounded';
import { Avatar } from '@material-ui/core';


function Nabbar({avatar}) {
    return (
        <div className="nabbar">
            <div className="nabbar__left">
                <div className="nabbar__logo">
                    <AccessibilityNewRoundedIcon className="nabbar__logo__icon"/>
                    <h3 className="nabbar__logo__text"> drivEddy</h3>
                </div>
                <div className="nabbar__items">
                    <h5 className="active">Home</h5>
                    <h5>Produkte</h5>
                    <h5>kalender</h5>
                    <h5>Schuler</h5>
                    <h5>Kollegen</h5>
                    <h5>Buchungen</h5>
                    <h5>Forschritt</h5>
                </div>
            </div>
            <h1>|</h1>
            <div className="nabbar__right">
                <h1>weiterbildung</h1>
                <Avatar src={avatar}/>
            </div>
            
        </div>
    )
}

export default Nabbar
