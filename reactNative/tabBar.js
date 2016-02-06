'use strict';

var React = require('react-native');
var EySnTch = require('./EySnTch.js');

var {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} = React;

var systemIconTypes = ['bookmarks', 'contacts', 'downloads', 'favorites', 'featured', 'history', 'more', 'most-recent', 'most-viewed', 'recents', 'search', 'top-rated'];

module.exports = React.createClass({
  getInitialState: function() {
    return {
      selectedTab: 'bookmarks'
    };
  },

  render: function() {
    return (
      <TabBarIOS
        style={[styles.view18Tabbarios19]}
        >
        <TabBarIOS.Item 
        systemIcon='bookmarks'
        selected={this.state.selectedTab === 'bookmarks'}
        onPress={() => {
          this.setState({
            selectedTab: 'bookmarks',
          });
        }}>
        <EySnTch />
        </TabBarIOS.Item>
        <TabBarIOS.Item 
        systemIcon='contacts'
        selected={this.state.selectedTab === 'contacts'}
        onPress={() => {
          this.setState({
            selectedTab: 'contacts',
          });
        }}>
        <EySnTch />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  },

});

var styles = StyleSheet.create({
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
});
