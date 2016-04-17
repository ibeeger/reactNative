/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import Login from "./modules/login.js"
import List from "./modules/list.js"

var json = [{"username":"addff","msg":"jflsjdlfsljdlfjsl"},{"username":"user","msg":"jflsjdlfsljdlfjsl"}];



var Talks = React.createClass({
    getInitialState:function(){
      return {
        isjoin:false,
      }
    },
     join:function(state) {
      console.log(state)
      this.setState({isjoin:true,joindata:state});
    },
    render:function() {
   if (this.state.isjoin) {
      return (
          <List lists={json} joindata={this.state.joindata} />
        )
    }else{
      return (
      <Login joinroom={this.join} />
    )
    }
  }
})





AppRegistry.registerComponent('talks', () => Talks);
