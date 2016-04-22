/*
首页
*/

'use strict';

import React,{
  Component,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  Dimensions
} from "react-native"


var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

import Swiper from 'react-native-page-swiper'


import Header from './layout/header.js'
import Navbox from "../Components/navbox.js"


var createThumbRow = (item, i) => <ListItemRow key={i} title={item.title} pic={item.pic} desc={item.desc} />;

class Index extends Component {
	constructor(props){
		super(props);
		this.state = {
      name:"标题"
		}
	}

	render(){
		return(
    <View style={styles.body}>
    <Header style={styles.Header} title={this.state.name} />
    <View style={styles.main}>
      <ScrollView 
      automaticallyAdjustContentInsets={false}
      scrollEnabled={true}>
        <View style={styles.con}>
       <Swiper style={styles.con} threshold={50}>
            <View style={styles.slide1}>
              <Text style={styles.text}>第一页</Text>
            </View>
            <View style={styles.slide2}>
              <Text style={styles.text}>第二页</Text>
            </View>
            <View style={styles.slide3}>
              <Text style={styles.text}>第三页</Text>
            </View>
            <View style={styles.slide3}>
              <Text style={styles.text}>第四页</Text>
            </View>
          </Swiper>
          </View>
         <View style={styles.navbox} >
             <Navbox />
             <Navbox />
          </View>

         <View style={styles.adbox}>
            <View style={styles.adview1}>
                <Image
                  style={styles.adimage}
                  source={{uri: 'http://works.ibeeger.com/imgfile/3d/5.jpg'}}
                />
            </View>
            <View  style={styles.adview2}>
                <Image
                  style={styles.adimage}
                  source={{uri: 'http://works.ibeeger.com/imgfile/adx.png'}}
                />
            </View>
         </View>
      </ScrollView>
      </View>
      </View>
   )
	}
}

var styles = StyleSheet.create({
  adbox:{
     flexDirection: 'row',
     height:100,
     flex:1,

     backgroundColor:"#f0f0f0"
  },
  adview1:{
    height:90,
    flex:1,
    margin:1,
    padding:2,
  },
  adview2:{
    height:90,
    flex:1,
    margin:1,
    paddingTop:2,
    paddingRight:2,
    paddingBottom:2
  },
  adimage:{
    height:90,
    resizeMode: Image.resizeMode.cover,
  },
	scrollView:{
		flex:1,
    backgroundColor:"#ffffff"
	},
  navbox:{
    height:160,
  },
  body:{
    flex:1
  },
  Header:{
    height:60,
    flex:1,
    width:100
  },
	main:{
    flex:1,
    backgroundColor:"#ffffff"
	},
	con:{
    height:200,
    overflow:"hidden"
	},
  wrapper: {
  	flex:1,
  	backgroundColor:"#cccccc"
  },
  slide1: {
  	flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});



module.exports = Index