import React, {
  Component,
  StyleSheet,
  Text,
  AlertIOS,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';


class Loading extends Component{

	render(){

		return (
				<View style={styles.main}>
					<Text>数据加载中</Text>
				</View>
			)
	}
}


const styles = StyleSheet.create({
	main:{
		flex:1
	}
})


export default Loading