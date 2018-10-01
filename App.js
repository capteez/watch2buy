/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Scene,Router,Schema,ActionConst} from 'react-native-router-flux';
import Main from './view/Main';
import Login from './view/Login';
import Register from './view/Register';
import Home from './view/Home';
import addAd from './view/addAd';
import showAd from './view/showAd';
import searchedAds from './view/searchedAds';
import calcFees from './view/calcFees';
import contactUs from './view/contactUs';

export default class App extends Component {
  render() {
    return (<Router>
            <Scene key="root" hideNavBar={true}>
                <Scene key="Home" type={ActionConst.REPLACE}  component={Home} title="Home"/>
                <Scene key="showAd" component={showAd} title="showAd"/>
                <Scene key="searchedAds" component={searchedAds} title="searchedAds"/>
                <Scene key="Main" component={Main} title="Main"/>
                <Scene key="Login" type={ActionConst.REPLACE} component={Login} title="Login"/>
                <Scene key="Register" type={ActionConst.REPLACE} component={Register} title="Register"/>
                <Scene key="addAd" component={addAd} title="addAd"/>
                <Scene key="calcFees" type={ActionConst.REPLACE} component={calcFees} title="calcFees"/>
                <Scene key="contactUs" type={ActionConst.REPLACE} component={contactUs} title="contactUs"/>
            </Scene>

    </Router>);
    }
}


