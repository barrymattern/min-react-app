// react imports
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
// Style imports
import {createUseStyles} from 'react-jss';
import { profileLinks } from '../config';
const useStyles = createUseStyles({
    footer: {
        position: 'fixed',
        bottom: 0,
        height: '6vh', 
        width: '100%',  
        borderTop: '1px solid black',
        backgroundColor: 'azure',     
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: '2rem',
        marginTop: '1rem'
    },
    text: {
        color: 'black',
        fontFamily: 'AmaticSC',
        textAlign: 'center',
        margin: '0 15px 0 15px',
    },
    icons: {
        margin: '7px 10px 0 10px',
    }
})
const Footer = () => {
    const classes = useStyles();
    const { angel, linkedin, github, email } = profileLinks;
    return (
        <footer className={ classes.footer }>
            <span className={ classes.text }>Created by Brad Simpson ©2021</span>
            <a href={github} >
                <FaGithub className={ classes.icons } />
            </a>
            <a href={linkedin} >
                <FaLinkedin className={ classes.icons } />
            </a>
            <a href={`mailto:${email}`}>
                <FaEnvelope className={ classes.icons } />
            </a> 
        </footer>
    )
};
export default Footer;