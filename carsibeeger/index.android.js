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

import Header from './modules/layout/header.js'
import Footer from './modules/layout/footer.js'
import Loading from './Components/loading.js'
import Lists  from './modules/list.js'

const url = "http://api.ibeeger.com/driving/info/0?type=";


class carsibeeger extends Component {
  constructor(){
    super()
    this.state = {
      name:"交通信息标志",
      datatype:"qita",
      load:false,
      connect:true,
    }
    this.changePage = this.changePage.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this._handleReachabilityChange = this._handleReachabilityChange.bind(this);
  }
   _handleReachabilityChange(arg){

    if (arg.toLocaleLowerCase() == "none") {
      this.setState({
        name:"离线状态",
        connect:false,
        load:false
      })
    }else{
      this.setState({
        name:"交通信息标志",
        connect:true
      });
      this.fetchData(this.state.datatype);
    }
    
  }

  componentWillUnmount() {
    NetInfo.removeEventListener(
        'change',
        this._handleReachabilityChange
    );
  }

  componentDidMount(){
    StatusBar.setHidden(true);
    NetInfo.addEventListener(
        'change',
         this._handleReachabilityChange
    );
  }

  fetchData(t){
     this.setState({
      load:false,
      datatype:t
    });
    if (!this.state.connect) {
      return ;
    }
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

  changePage(i){
    let datatype = "qita";
    switch(i){
      case 1:
      datatype = "zhishi";
      break;
      case 2:
      datatype = "jinggao";
      break;
      case 3:
      datatype = "zhilu";
      break;
      default:
      datatype = "qita";
    };
    this.fetchData(datatype);
  }

  render() {
     let main = <Loading text={this.state.name} />;
    if (this.state.load) {
        main = <Lists style={styles.list} dataSource={this.state.dataSource} />
    }
    return (
      <View style={styles.container}>
         <Header style={styles.Header} title={this.state.name} />
         <View style={styles.Content}>
          {main}
         </View>
         <Footer style={styles.Footer} changePage={this.changePage} loading={this.state.load} />
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
