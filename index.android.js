/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/**这里是导包，导入我们要使用的控件*/
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
/**导入一个自己写的js文件*/
// import Splash from './app/Splash';
// import Welcome from './app/page/Welcome';
import Login from './app/page/Login.js';



// 注册应用(registerComponent)后才能正确渲染，并将第一个加载界面指向Splash.js
// AppRegistry.registerComponent('reactNativeTest', () => Splash);
// AppRegistry.registerComponent('reactNativeTest', () => Welcome);
AppRegistry.registerComponent('reactNativeTest', () => Login);