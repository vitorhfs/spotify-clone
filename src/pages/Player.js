import React from 'react';
import Sidebar from '../components/Sidebar';
import Body from '../components/Body';
import Footer from '../components/Footer';
import './style/player.css';

function Player ({ spotify }){
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar />
                <Body spotify={spotify} />
            </div>
            <div className="player__footer">
                <Footer />
            </div>            
        </div>
    )
}

export default Player;