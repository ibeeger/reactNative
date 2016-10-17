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
import List from "./modules/list.js";
import Header from './modules/layout/header.js'
const url = "http://api.ibeeger.com/driving/4s?cityid=";


class carsibeeger extends Component {

  constructor(){
    super()
    this.state = {
        load: true,
        show:0,
        title:"标题"
    }
    this.changePage = this.changePage.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.renderList = this.renderList.bind(this);
  }
   

  componentWillUnmount() {
    
  }

  componentDidMount(){
    StatusBar.setHidden(false);
  }

  changePage(i){
      if (i==1) {
         this.setState({
           load:false,
         })
         this.fetchData(parseInt(Math.random()*20));
      }else{
        this.setState({
           load:true
         })
      }
      this.setState({
        show:i
      })
  }

  renderList(){
    if (this.state.load) {
      switch(this.state.show){
        case 0:
        return (<Index style={styles.Content} />);
        break;
        case 1:
        return (<List dataSource={this.state.dataSource}></List>);
        break;
        default:
        return (<View style={styles.Content}><Text style={styles.center}>暂未开通</Text></View>)
      }
    }else{
      return (<View style={styles.Content}><Text style={styles.center}>Loading</Text></View>)
    };
  }

  fetchData(t){
    fetch(url+t)
      .then((response) => response.json())
      .then((responseData) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          dataSource: ds.cloneWithRows(responseData.data),
          load: true,
        });
      })
      .done();
  }
 

  render() {
      return (
        <View style={styles.container}>
        <Header style={styles.Header} title={this.state.title} />
            {this.renderList()}
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
  center:{
    textAlign:"center"
  },
  Content:{
    flex:1,
  },
  main:{
    height:700
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
