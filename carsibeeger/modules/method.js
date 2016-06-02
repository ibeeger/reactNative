/*
* @Author: ibeeger
* @Date:   2016-04-22 16:37:39
* @Last Modified by:   ibeeger
* @Last Modified time: 2016-04-22 16:43:44
*/

'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  ListView,
  StatusBar,
  NetInfo,
  View
} from 'react-native';




module.exports = {


	 checkNet:function(callback){
	 	NetInfo.addEventListener(
        'change',
         this._handleReachabilityChange
	    );
	    NetInfo.fetch().done((arg) => {
	      if (arg.toLocaleLowerCase() != "none") {
	        this.setState({
	          name: "交通信息",
	          connect: true
	        });
	        this.fetchData(this.state.datatype);
	      }
	    });

	 },

	 _handleReachabilityChange:function(arg){

    if (arg.toLocaleLowerCase() == "none") {
      this.setState({
        name:"离线状态",
        connect:false,
        load:false
      })
    }else{
      this.setState({
        name:"交通标志",
        connect:true
      });
      this.fetchData(this.state.datatype);
    }
    
  }

}