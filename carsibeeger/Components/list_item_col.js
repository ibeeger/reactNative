/*
  网格
*/
import  React,{
  Component,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  TouchableHighlight
} from 'react-native'

var width = Dimensions.get('window').width/2,height=Dimensions.get('window').height;

const picw = parseInt(width*0.8);


class ListItemCol extends Component {
  constructor() {
    super()
  }
  _pressRow(url){
    console.log(url)
  }
  render(){
    var url = this.props.pic,text = this.props.text;
    if (url) {
      return(<TouchableHighlight onPress={() => this._pressRow(url)} activeOpacity={0.9}>
            <View style={styles.row}>
              <Image style={styles.thumb} source={{uri:url}} />
              <Text style={styles.text}  numberOfLines={1}>
                {text}
              </Text>
            </View>
        </TouchableHighlight>)
    }

  }
}


var styles = StyleSheet.create({
  row: {
    justifyContent: 'center',
    padding: 5,
    height: width,
    width:width,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
  },
  thumb: {
    resizeMode: Image.resizeMode.contain,
    height:picw,
    width:picw,
  },
  text: {
    flex: 1,
    marginTop:5,
    fontWeight: 'bold'
  }
})

module.exports = ListItemCol;
