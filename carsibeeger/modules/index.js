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
import Swiper from '../Components/swiper.js'
import ListItemRow from "../Components/list_item_row.js"

var createThumbRow = (item, i) => <ListItemRow key={i} title={item.title} pic={item.pic} desc={item.desc} />;

class Index extends Component {
	constructor(props){
		super(props);
		this.state = {

		}
	}

	render(){
		return(
    
      <ScrollView
      alwaysBounceVertical={false}
        contentContainerStyle={styles.scrollView}
        style={styles.scrollView}>
       <Swiper style={styles.con} showsButtons={false} height={200}>
            <View style={styles.slide1}>
              <Text style={styles.text}>Hello Swiper</Text>
            </View>
            <View style={styles.slide2}>
              <Text style={styles.text}>Beautiful</Text>
            </View>
            <View style={styles.slide3}>
              <Text style={styles.text}>And simple</Text>
            </View>
          </Swiper>
          <View style={styles.main}>
             <View style={styles.navbox}>
                
             </View>
          </View>
      </ScrollView>
    
   )
	}
}

var styles = StyleSheet.create({
	scrollView:{
		flex:1
	},
	main:{
		flex:1
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