/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  ListView,
  StatusBar,
  NetInfo,
  View
} from 'react-native';

import Index from "./modules/index.js";
import Footer from "./modules/layout/footer.js";


const url = "http://api.ibeeger.com/driving/info/0?type=";


class carsibeeger extends Component {
  constructor(){
    super()
    this.changePage = this.changePage.bind(this);
  }
   

  componentWillUnmount() {
    
  }

  componentDidMount(){
    StatusBar.setHidden(false);
    

  }

  changePage(i){
    console.log(i);
  }

  fetchData(t){
     
    fetch(url+t)
      .then((response) => response.json())
      .then((responseData) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          dataSource: ds.cloneWithRows(responseData.arr),
          load: true,
        });
      })
      .done();
  }
  render() {
     return (
        <View style={styles.container}>
           <Index style={styles.Content} />
           <Footer style={styles.Footer} changePage={this.changePage} />
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection:"column",
    backgroundColor: '#fff'
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
