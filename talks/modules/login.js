//登录

import React, {
  Component,
  StyleSheet,
  Text,
  AlertIOS,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

import Button from "../Components/button.js"
// <Button style={styles.button} Join={this.props.joinroom.bind(null,this.state)} />

var Login = React.createClass({
	componentDidMount:function(){

	},
	getInitialState:function () {
		return {

		}
	},
	join:function(state){
			var msg;
			if (!/\d{10,10}/g.test(state.roomid)) {
				msg = "请输入正确格式的房间号码";
				AlertIOS.alert(
					'提示信息',
					msg, [{
						text: '确定',
						onPress: () => console.log('Foo Pressed!')
					}, ]
				)
				return;
			}
			if (!state.username) {
				msg = "请输入您的姓名";
				AlertIOS.alert(
					'提示信息',
					msg, [{
						text: '确定',
						onPress: () => console.log('Foo Pressed!')
					}, ]
				);
				return;
			};

			this.props.joinroom(state);
	},
	render:function(){
		if (this.props.joinroom) {
			return (
			  <View style={styles.main}>
			      <View style={styles.container}>
			        <Text style={styles.welcome}>
			          会课
			        </Text>
			      </View>
			      <View style={styles.iptcon}>
			        <TextInput
			        style={styles.inputtext}
			        placeholder="请输入10位房间号码"
			        onChangeText={(text) => this.setState({roomid: text})}
			      />
			        <TextInput
			        style={styles.inputtext}
			        placeholder="请输入您的姓名"
			        onChangeText={(text) => this.setState({username: text})}
			      />
			       <Button style={styles.button} Join={this.join.bind(null,this.state)} />
			      </View>
			    </View>
			)
		}else{
			return(
				<View style={styles.main}>
						<Text>黑丰田</Text>
				</View>
				)
		}
		
	}
})
 


const styles = StyleSheet.create({
  main:{
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex:2
  },
  iptcon:{
    flex:10,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputtext:{
    height: 40, 
    width:300,
    borderWidth: 1,
    marginBottom:10,
    borderColor:"#cccccc",
    alignItems: 'center',
    borderRadius:5,
    padding:5,
  },
  button:{
    flex:3,
    justifyContent: 'flex-start',
    alignItems: 'center',
    height:40
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
  }
});


export default Login