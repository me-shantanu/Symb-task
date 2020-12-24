import React from 'react'
import './Intro.css'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';
import PersonIcon from '@material-ui/icons/Person';
import DraftsOutlinedIcon from '@material-ui/icons/DraftsOutlined';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';

function Intro() {
    return (
        <div className ="intro">
            <div className="intro__heading">
                <div className="intro__heading__left">
                    <h1>ubersicht deiner Fahrschulen</h1>
                    <KeyboardArrowDownIcon  className="intro__heading__left__icon"/>
                </div>
                <div className="intro__heading__right">
                    <h3>Profilvorschau</h3>
                </div>
            </div>
            <div className="intro__mid">
                <p>jede Fahrshule hat unterschidilche Bedurfnisse an ein ubersichtiches Dashboard. Auf dieser Seite findest eine Ubersicht aller Funktionen und wertvolle Tipps, um deine Fahrschule besser online zu prasentieren.</p>
                <h4>Profil bearbeiten</h4>
            </div>
            <div className="intro__bottom">
                <img src="./images/car.jpeg"/>
                <div className="intro__bottom__right">
                    <h1>Fahrschule Achselpeter</h1>
                    <div className="intro__bottom__right__details">
                        <LocationOnOutlinedIcon className="intro__bottom__right__details__icon" />
                        <h5>Seddiner StraBe 7|10125 Berlin</h5>
                    </div>
                    <div className="intro__bottom__right__details">
                        <PhoneRoundedIcon className="intro__bottom__right__details__icon" />
                        <h5>(030)51 65 64 26</h5>
                    </div>
                    <div className="intro__bottom__right__details">
                        <PersonIcon className="intro__bottom__right__details__icon" />
                        <h5>Achsel Peter Senior</h5>
                    </div>
                    <div className="intro__bottom__right__details">
                        <DraftsOutlinedIcon className="intro__bottom__right__details__icon" />
                        <h5><a href="#">achsel@peter.net</a></h5>
                    </div>
                    <div className="intro__bottom__right__details">
                        <LanguageOutlinedIcon className="intro__bottom__right__details__icon" />
                        <h5><a href="#"> achselpetevollinfhrt.de</a></h5>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Intro
