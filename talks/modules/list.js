import React, {
  Component,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  StatusBar,
  ScrollView,
  Dimensions
} from 'react-native';

var width = Dimensions.get('window').width;


import Item from "./item.js"
import Loading from "../Components/loading.js"

const InitLIst = (json,i) => <Item key={i} style={styles.item} username={json.username} msg={json.msg} />





// var List = React.createClass({

// })



class List extends Component{
	 constructor(props){
        super(props);
        this.state = {
			listmessage:[],
			joindata:this.props.joindata
		};
		this.Submit = this.Submit.bind(this);
    }
	componentWillMount(){
		let _this = this;
		
		var ws = new WebSocket("ws://115.28.35.15:3003");
		var data = JSON.stringify({
			socketid: this.state.joindata.roomid,
			uname: this.state.joindata.username,
			code: 1,
		});
		_this.setState({
			ws: ws
		});
		ws.onopen = () => {
			ws.send(data);
		}

		ws.onmessage = (data) => {
			var _list = _this.state.listmessage || [];
			var _data = data.data;
			 console.log(this.state.joindata);
			 var username;
			 try{
			 	_data = JSON.parse(_data);
			 	console.log(_data.uname +"=="+ this.state.joindata)
			 	username = this.state.joindata.username == _data.uname ? "我" : _data.uname;
			 }catch(e){

			 }

			if (_data.msg) {
				_list.push({
					msg:_data.msg,
					username:username
				});
				_this.setState({
					listmessage:_list
				});
			}
			

		}

		

	}
	Submit(e){
		var _list = this.state.listmessage || [];
		var msg = e.nativeEvent.text;
		 

		try {
				var data = JSON.stringify({
					socketid: this.state.joindata.roomid,
					msg:msg,
					uname: this.state.joindata.username,
					code: 2,
				});
				this.state.ws.send(data);
			} catch (e) {
				
			}

		this.refs.inputItem.clear();
	}
	render(){
		if (this.state.listmessage.length>0) {
			return(
			<View style={styles.viewbox}>
			<StatusBar
		     backgroundColor="blue"
		     hidden={true}
		     style={styles.bars}
		   />
		    <ScrollView
		      contentContainerStyle={styles.contentContainer}
		      style={styles.scrollView}>
		   	   {this.state.listmessage.map(InitLIst)}
		    </ScrollView>
			<View style={styles.inputBox}>
				<TextInput placeholder="输入消息" ref="inputItem"  onSubmitEditing={this.Submit} style={styles.inputItem} /> 
			</View>	
			</View>
			)
		}else{
			return (
			<View style={styles.viewbox}>
				<Loading />
				<View style={styles.inputBox}>
					<TextInput placeholder="输入消息" ref="inputItem"  onSubmitEditing={this.Submit} style={styles.inputItem} /> 
				</View>	
			</View>
			)
		}
	}
}


const styles = StyleSheet.create({
	scrollView:{
		flex:9,
		flexDirection:"column",
	},
	inputBox:{
		flex:1,
		 justifyContent: "flex-end",
   		 alignItems: 'center',
	},
	inputItem:{
		height:50,
		borderWidth:1,
		width:width,
		borderColor:"#cccccc",
		padding:5
	},
	item:{
	},
	viewbox:{
		paddingTop:20,
		flexDirection:"column",
		justifyContent: 'center',
    	alignItems: 'center',
    	flex:1,
	},
	msg:{
		color:"#555555"
	}
})


export default List