import React from 'react';
import './style/footer.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { Grid, Slider } from '@material-ui/core';

function Footer(){
    return (
        <footer className="footer">
            <div className="footer__left">
                <img className="footer__albumLogo" src="https://img.discogs.com/qOrAoy-jlSiFvgSKct89e4-S9Vk=/fit-in/594x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-126862-1193649351.jpeg.jpg" alt="" />
                <div className="footer__songInfo">
                    <h4>Cars</h4>
                    <p>Gary Numan</p>
                </div>

            </div>
            <div className="footer__center">
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className="footer__icon" />
                <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
                <SkipNextIcon className="footer__icon" />
                <RepeatIcon className="footer__green" />
            </div>
            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </footer>
    )
}

export default Footer;