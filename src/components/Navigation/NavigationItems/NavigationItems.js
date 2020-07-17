import React from 'react';
import styles from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
 
const navigationItems = () => (
  <ul className= {styles.NavigationItems}>
    <NavigationItem link="/" active>Burger Builder</NavigationItem>
    <NavigationItem link="/">Check Out</NavigationItem>
  </ul>
);

export default navigationItems;