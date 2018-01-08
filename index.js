//import library 
import React from 'react';
import {AppRegistry, View} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//create component
const App = () => (
    <View style={{flex: 1}}>
        <Header headerText={'ALBUMS'}/>
        <AlbumList/>
    </View>
);

//render to device
AppRegistry.registerComponent('albums', () => App);