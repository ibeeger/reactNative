import React, {
  Component,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';


class Button extends Component {
	state = {

	}
	render(){
		return (
			  <TouchableHighlight
			    onPress={this.props.Join}
			    style={styles.touchbox} underlayColor="#090">
			    <Text style={styles.buttonText}>进入</Text>
			  </TouchableHighlight>
			)
	}
}



const styles = StyleSheet.create({
	buttonBox:{
		width:300,
		height:40,
		backgroundColor:"#cc0000",
		borderRadius:10,
	},
	touchbox:{
		backgroundColor:"#cc0000",
		height:50,
		width:300,
		opacity:1,
		borderRadius:5,
		padding:17
	},
	buttonText:{
		textAlign:"center",
		color:"#ffffff",
		fontSize:16,
		flexDirection: "row"
	}
})


export default Button