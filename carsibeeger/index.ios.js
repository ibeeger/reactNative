/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  StatusBar,
  ListView,
  View
} from 'react-native';


import Header from './modules/layout/header.js'
import Footer from './modules/layout/footer.js'
import Loading from './Components/loading.js'
import Lists  from './modules/list.js'


class carsibeeger extends Component {
  constructor(){
    super()

  }
  componentDidMount(){
    StatusBar.setHidden(true)
  }
  render() {
    return (
      <View style={styles.container}>

         <Header style={styles.Header} title="标题标题标题标题标题标题" />
         <View style={styles.Content}>
          <Lists style={styles.list} />
         </View>
         <Footer style={styles.Footer} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  loading:{
    position:"absolute",
    left:0,
    top:0,
    flex:1,
    right:0,
    bottom:0,
    backgroundColor:"#999"
  },
  Content:{
    flex:1
  },
  list:{
    flex:1
  },
  Header:{
    height:60,
    flex:1,
    width:100
  },
  Footer:{
    position:"relative",
    bottom:0,
    left:0,
    right:0,
    justifyContent:'flex-end'
  }
});

AppRegistry.registerComponent('carsibeeger', () => carsibeeger);
