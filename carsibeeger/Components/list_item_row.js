/*
  横向的列表项
  图片
  文案
  pic ,  title , desc
*/
import  React,{
  Component,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableHighlight
} from 'react-native'


class ListItemRow extends Component {
  constructor() {
     super()
     this.state = {

     }
  }

  componentDidMount(){


  }

  pressItem(){
    console.log("pressItem")
  }
  render(){
    var url = this.props.pic,title = this.props.name,desc = this.props.desc;
    return (
       <TouchableHighlight onPress={this.pressItem} activeOpacity={0.9}>
            <View style={styles.Item}>
              <View style={styles.ImgView}>
                  <Image source={{uri:url}}  style={styles.Img} />
              </View>
              <View style={styles.Content}>
                <Text style={styles.Title} numberOfLines={1} >{title}</Text>
                <Text style={styles.desc}>{desc}</Text>
              </View>
            </View>
      </TouchableHighlight>
    )
  }
}

var styles = StyleSheet.create({
   Item:{
     justifyContent:"center",
     flexDirection:"row",
     height:100,
     padding:5,
     backgroundColor:"#fff"
   },
   Img:{
     resizeMode: Image.resizeMode.contain,
     flex:1
   },
   ImgView:{
    width:100,
    height:100,
    alignSelf:"center",
  },Content:{
    flex:1,
    alignSelf:"flex-start",
    paddingLeft:10,
    height:60,
    padding:5,
  },
  Title:{
    fontSize:16,
    height:30,
  },
  desc:{
    height:30,
    fontSize:14,
    color:"#999"
  }
})


module.exports = ListItemRow;
