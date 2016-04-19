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


class Lists extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource: this.props.dataSource || [],
      load:false
    }
  }

  componentDidMount(){

  }

  componentWillReceiveProps(next){
    this.refs["list"].scrollTo({x:0,y:0,animated:false})
  }

  

  changeViewRows(){
    console.log("changeViewRows")
  }
  EndReached(){
      console.log("EndReached")
  }

  render(){
   
      return (
        <ListView
        initialListSize={6}
        pageSize={6}
        onChangeVisibleRows={this.changeViewRows}
        onEndReached={this.EndReached}
        ref="list"
        contentContainerStyle={styles.list}
          dataSource={this.props.dataSource}
          renderRow={this._renderRow}
        />
      )
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
