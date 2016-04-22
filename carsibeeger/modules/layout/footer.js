/*
* @Author: willclass
* @Date:   2016-04-14 10:55:05
* @Last Modified by:   ibeeger
* @Last Modified time: 2016-04-22 16:59:33
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

  constructor(props) {
    super(props);
    this.state = {
      icons:[require("../../assets/home.png"),require("../../assets/list.png"),require("../../assets/shop.png"),require("../../assets/help.png")],
      names:["主页","列表","购物车","我的"],
      cur:0
    }
    this.renderItem = this.renderItem;
    this.changePage = this.changePage.bind(this);
  }
  componentDidMount(){
    //渲染之后执行
  }

  componentWillReceiveProps(next){
   
  }

  changePage(i){
    if (i == this.state.cur) {
      return;
    }
    this.setState({
      cur:i
    });
    this.props.changePage(i);
  }

  renderItem(item,i,_this){
    var text = _this.state.names[i],cssArr=[styles.touch]
      if (i == _this.state.cur) {
        cssArr.push({backgroundColor:"#c00"})
      }
      return(
          <TouchableHighlight style={cssArr} key={i} onPress={_this.changePage.bind(null,i)} underlayColor="#c00">
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
     height:60
   },
   touch:{
      flex:1,
      overflow:"hidden",
      height:60,
    },
   cell:{
    flex:1,
    height:60
   },
   text:{
     textAlign:"center",
     color:"#fff"
   },
   icon:{
     resizeMode: Image.resizeMode.contain,
     height:40,
     alignSelf:"center",
   }
})

module.exports = Footer;
