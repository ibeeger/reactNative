/*
* @Author: willclass
* @Date:   2016-04-14 10:55:05
* @Last Modified by:   willclass
* @Last Modified time: 2016-04-14 10:56:44
*/

'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  View
} from 'react-native';


class Footer extends Component {

  constructor() {
    super();
    this.state = {

    }
  }
  componentDidMount(){
    //渲染之后执行
  }
  showLayer(){
    console.log(arguments)
  }
  render(){
    return (<View style={styles.ViewFooter}>
      <TouchableHighlight style={styles.touch} onPress={this.showLayer} underlayColor="#c00">
            <View style={styles.cell}>
            <Image
             style={styles.icon}
             source={require('../../assets/home.png')}
           />
           <Text style={styles.text}>主页</Text>
            </View>
            </TouchableHighlight>

            <TouchableHighlight style={styles.touch} onPress={this.showLayer} underlayColor="#0c0">
            <View style={styles.cell}>
                <Image
                 style={styles.icon}
                  source={require('../../assets/list.png')}
               />
               <Text style={styles.text}>列表</Text>
            </View>
            </TouchableHighlight>
      </View>)
  }
}

var styles = StyleSheet.create({
   ViewFooter:{
     flexDirection:"row",
     backgroundColor:"#ef5343",
     height:70
   },
   touch:{
      flex:1,
      overflow:"hidden",
      height:70,
    },
   cell:{
    flex:1,
    height:70
   },
   text:{
     textAlign:"center",
     color:"#fff"
   },
   icon:{
     resizeMode: Image.resizeMode.contain,
     height:45,
     alignSelf:"center",
   }
})

module.exports = Footer;
