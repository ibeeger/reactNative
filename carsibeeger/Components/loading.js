/*
  loading
*/


import React,{
  Component,
  StyleSheet,
  Text,
  Image,
  View
} from "react-native"

class Loading extends Component {
  constructor(props) {
    super(props)

    this.state = {
       text:this.props.text || "数据加载中..."
    }
  }
  render(){
    return(
        <View style={styles.bgmain}>
          <View style={styles.loading}>
            <Text style={styles.text}>{this.state.text}</Text>
          </View>
       </View>
    )
  }
}


var styles = StyleSheet.create({
  bgmain:{
    flex:1,
    justifyContent:"center",
  },
  loading:{
    padding:20,
    backgroundColor:"rgba(0,0,0,0.5)",
    alignSelf:"center",
    borderRadius:10
  },
  text:{
    color:"#fff",
  }
})

module.exports = Loading;
