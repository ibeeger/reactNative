import React, {
  Component,
  StyleSheet,
  Text,
  AlertIOS,
  TextInput,
  TouchableHighlight,
  Dimensions,
  View
} from 'react-native';

import Loading from "../Components/loading.js"

var width = Dimensions.get('window').width;

class ListItem extends Component{
	state = {
		isok:false
	}
	shouldComponentUpdate(){
		return false
	}
	render(){
		
			return (
			 <View style={styles.Itembox}>
			 	<View style={styles.userBox}>
			 		<Text style={styles.user}>{this.props.username}</Text>
			 	</View>
			 	<View style={styles.msgBox}>
			 	<Text style={styles.msg}>{this.props.msg}</Text>
			 	</View>
			 	
			 </View>
			)
		
	}
}



const styles = StyleSheet.create({
	Itembox:{
		flexDirection:"row",
		alignItems:"flex-start",
		justifyContent:"space-between",
    	width:width,
    	paddingBottom:5,
    	flex:1
	},
	userBox:{
		 width:50,
		 padding:5,
		 alignSelf:"flex-start",
		 justifyContent: 'center',
	},
	msgBox:{
		 justifyContent: 'flex-start',
		 marginRight:5,
		 borderRadius:4,
		 flex:1,
		 padding:5,
		 backgroundColor:"#41d063"
	},
	user:{
		color:"#555000",
		textAlign:"center",
		lineHeight:20,
	},
	msg:{
		color:"#fff",
		lineHeight:20,
		
	}
})


export default ListItem
