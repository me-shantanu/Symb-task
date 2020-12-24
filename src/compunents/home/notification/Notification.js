import React from 'react'
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';
import './Notifi.css'
function Notification() {
    return (
        <div className="notification">
            <div className="notification__heading">
                <h3>Verbessere dein Profil</h3>
                <p>Mehr Tipps anzeigen</p>
            </div>
            <div className="notification__main">
             <div className="notification__left">
             
                    <div className="notification__main__1">
                        <div className="notification__main__1__header">
                            <h4>Lade deine Kollgen zu drivEddy ein</h4>
                            <ClearOutlinedIcon/>
                        </div>
                        
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

                        <h2>Kollegen Einladen</h2>

                    </div>
               
              
                    <div className="notification__main__1">
                        <div className="notification__main__1__header">
                            <h4>Lade deine Kollgen zu drivEddy ein</h4>
                            <ClearOutlinedIcon/>
                        </div>
                        
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

                        <h2>Kollegen Einladen</h2>

                    </div>
               
             </div>
             


                <div className="notification__right">
                
                    <div className="notification__main__2">
                        <div className="notification__main__2__header">
                            <h4>Lade deine Kollgen zu drivEddy ein</h4>
                            <ClearOutlinedIcon/>
                        </div>
                        
                            <p>Lorem when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

                        <h2>Kollegen Einladen</h2>

                    </div>
               
                </div>
            </div>
        </div>
    )
}

export default Notification
