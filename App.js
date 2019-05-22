import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Done from './src/done';
import Search from './src/search';
import {Hotels} from './src/hotels';
import {Book} from './src/book';



var _NaviApp=createStackNavigator({
            Search: {screen: Search},
            Hotels: {screen: Hotels},
            Book: {screen: Book},
            Done: {screen: Done}
       });


export default createAppContainer(_NaviApp);


