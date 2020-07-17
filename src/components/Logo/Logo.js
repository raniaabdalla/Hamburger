import React from 'react';
import styles from './Logo.module.css';

const logo = (props) => (
    <div className= {styles.Logo} style={{height: props.height}} >
      <img src="https://image.shutterstock.com/image-vector/hamburger-cartoon-vector-illustration-isolated-260nw-257426938.jpg"
        alt= "My Burger"/>
    </div>

);

export default logo; 