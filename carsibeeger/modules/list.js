/*
  列表
  type =
*/

import React,{
  Component,
  StyleSheet,
  Text,
  Image,
  View,
  ListView
} from "react-native"

import Loading from '../Components/loading.js'
import ListItemCol from '../Components/list_item_col.js'
import ListItemRow from '../Components/list_item_row.js'  //<ListItemRow pic="http://www.itjuzi.com/images/2bffc9e937163e875b6bf80fae945cb6.png" title="标题文案" desc="描述文案" />

const url = "http://api.ibeeger.com/driving/info/0?type=qita";

class Lists extends Component {
  constructor() {
    super()

    this.state = {
      dataSource:[],
      load:false
    }
  }

  componentDidMount(){

    this.fetchData()

  }

  fetchData(){
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData.arr);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          dataSource: ds.cloneWithRows(responseData.arr),
          load: true,
        });
      })
      .done();
  }

  changeViewRows(){
    console.log("changeViewRows")
    console.log(arguments);

  }
  EndReached(){
      console.log("EndReached")
        console.log(arguments);
  }

  render(){
    if (!this.state.load) {
        return(
          <Loading />
        )
    }else{
      return (
        <ListView
        initialListSize={6}
        pageSize={6}
        onChangeVisibleRows={this.changeViewRows}
        onEndReached={this.EndReached}

        contentContainerStyle={styles.list}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
        />
      )
    }

  }
  _genRows(pressData){
      var dataBlob = [];
     for (var ii = 0; ii < 100; ii++) {
       var pressedText = pressData[ii] ? ' (X)' : '';
       dataBlob.push('Cell ' + ii + pressedText);
     }
     return dataBlob;
  }
  _renderRow(rowData,sectionID){
    var imgSource ="http://oss.files.ibeeger.com"+rowData.picurl;
    var name = rowData.name;
    return (
       <ListItemCol pic={imgSource} text={name} />
    );
  }
}

var hashCode = function(str) {
  var hash = 15;
  for (var ii = str.length - 1; ii >= 0; ii--) {
    hash = ((hash << 5) - hash) + str.charCodeAt(ii);
  }
  return hash;
};

const styles = StyleSheet.create({
  list: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  loading:{
    position:"absolute",
    left:0,
    top:0,
    flex:1,
    right:0,
    bottom:0,
    backgroundColor:"#999"
  }
})

module.exports = Lists;
