/*
  按钮
*/
import React,{
  Component,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  View
} from "react-native"



class Button extends Component {
  constructor() {
    super()

  }
  getDefaultsProps(){
    console.log(arguments);
  }

  render(){
    return(
      <TouchableHighlight >
        <View>
          <Text>{this}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}
