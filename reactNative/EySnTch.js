'use strict';

var React = require('react-native');

var ListView = require('./components/ListView');
var MapView = require('./components/MapView');
var ScrollView = require('./components/ScrollView');
var SliderIOS = require('./components/SliderIOS');
var SwitchIOS = require('./components/SwitchIOS');


var {
  Image,
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

module.exports = React.createClass({
    render: function() {
        return (
          <View>
            <View style={[styles.view12]}>
                <Text 
                	style={[styles.view12Navbar13]}>
                	My Really Cool App
                </Text>
            </View>
            <View style={[styles.view14]}>
                <Image
                	source={{uri: 'https://scontent-lga1-1.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/390469_103735846412710_468610899_n.jpg?oh=c08c11408e17d55d11c05431a3f9efdb&oe=5683D084'}} resizeMode='cover' 
                	style={[styles.view14Image15]}>
                </Image>
            </View>
            <View style={[styles.view16]}>
                <ScrollView 
                dataSource={['http://www.viralnovelty.net/wp-content/uploads/2014/07/121.jpg', 'http://imgscenter.com/images/2014/09/13/Beauty-of-nature-random-4884759-1280-800.jpg', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcShVpqAWrvxn8f2-XGo0ES0XP555GrVnU83y4v5kxBg8wOK9m1E']}
                style={[styles.view16Scrollview17]}>
                </ScrollView>
            </View>
          </View>
        );
    }
})


var styles = StyleSheet.create({
      view12:{
      }, 
      view12Navbar13:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          fontSize: 17,
          textAlign: 'center',
          width: 375,
      }, 
      view14:{
      }, 
      view14Image15:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          width: 375,
          height: 271.25,
      }, 
      view16:{
      }, 
      view16Scrollview17:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          width: 375,
      }, 
      view18:{
          height: 55,
      }, 
      view18Tabbarios19:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
      }, 
})

AppRegistry.registerComponent('reactNative', () => reactNative);

