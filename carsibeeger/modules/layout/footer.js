/*
* @Author: willclass
* @Date:   2016-04-14 10:55:05
* @Last Modified by:   ibeeger
* @Last Modified time: 2016-04-18 10:16:52
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
      icons:[require("../../assets/home.png"),require("../../assets/list.png"),require("../../assets/shop.png"),require("../../assets/help.png")],
      names:["主页","列表","购物车","我的"]
    }
    this.renderItem = this.renderItem;
  }
  componentDidMount(){
    //渲染之后执行
  }
  showLayer(){
    console.log(arguments)
  }

  renderItem(item,i,_this){
    var text = _this.state.names[i]
      return(
          <TouchableHighlight style={styles.touch} key={i} onPress={this.props.changePage} underlayColor="#c00">
            <View style={styles.cell}>
            <Image
             style={styles.icon}
             source={item}
           />
           <Text style={styles.text}>{text}</Text>
            </View>
            </TouchableHighlight>
        )
  }

   

  render(){
    var _this = this;
    var icons = this.state.icons;
    var rows = []
        icons.forEach(function (item,i) {
          rows.push(_this.renderItem(item,i,_this));
        })
    return (<View style={styles.ViewFooter}>
          {
           rows 
          }
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
