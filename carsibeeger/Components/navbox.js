/*
	导航部分
*/

import React,{
  Component,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  Dimensions,
  TouchableHighlight
} from "react-native"

class Navbox extends Component {
	constructor(props){
		super(props)
		this.state = {
			icons:[require("../assets/nav1.png"),require("../assets/nav2.png"),require("../assets/nav3.png"),require("../assets/nav4.png")],
			names:["生日蛋糕","面包","积分兑换","提货卡"]
		}

	}

	 renderItem(item,i,_this){
    var text = _this.state.names[i];
      return(
          <TouchableHighlight style={styles.touch} onPress={()=>console.log(1)} key={i} activeOpacity={0.7} underlayColor="#f0f0f0">
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
		icons.forEach(function(item, i) {
			rows.push(_this.renderItem(item, i, _this));
		})
		return (
			<View style={styles.wrap}>
				 {rows}
			</View>
			)

	}

}


var styles = StyleSheet.create({
	wrap:{
		height:80,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection:"row"
	},
	 touch:{
      flex:1,
      overflow:"hidden",
      height:70,
      margin:5,
      borderRadius:5
    },
	cell:{
		height:80,
		flex:1,
		justifyContent: 'center',
		alignItems:"center"
	},
	icon:{
     resizeMode: Image.resizeMode.contain,
     height:40,
     alignSelf:"center",
   }
})

module.exports = Navbox;
