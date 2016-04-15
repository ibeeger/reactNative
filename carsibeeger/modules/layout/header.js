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
  View
} from 'react-native';


class Header extends Component {

  constructor() {
    super();
    this.state = {

    }
  }
  componentDidMount(){
    //渲染之后执行
  }
  render(){
    return (<View style={styles.ViewHeader}>
            <View style={styles.Center}>
              <Text style={styles.TitText}  numberOfLines={1}>{this.props.title}</Text>
          </View>
      </View>)
  }
}

var styles = StyleSheet.create({
   ViewHeader:{
     flexDirection:"row",
     backgroundColor:"#eb5343",
     overflow:"hidden",
     height:60
   },
   Center:{
      justifyContent: 'center',
      flex:1
   },
   TitText:{
		fontSize:20,
		color:"#fff",
		textAlign:"center",
	},
   icon:{
     resizeMode:Image.resizeMode.contain,
   }
})


module.exports = Header;
