import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ListView
} from 'react-native'
const ds = new ListView.DataSource({ rowHasChanged:(r1,r2) => r1 !== r2});

const data = [{
	id:1,
	"post":'President',
	"route":"Main"
},{
	id:2,
	"post":'Governor of Nairobi',
	"route":"Governor"
},{
	id:3,
	"post":'Nasa Flagbearer',
}];

export default class Home extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	datasource:ds.cloneWithRows(data);
	  };
	}

	eachButton(x){
		return(
			<TouchableOpacity onPress={()=> this.props.navigation.navigate({x.route})}>	
					<View style={styles.button}>
						<Text style={styles.position}>{x.post}</Text>
					</View>
			</TouchableOpacity>
		)
	}
	render(){
		return(
			<View>
				<Text style={styles.header}>Vote For</Text>
				<ListView
					dataSource:{this.state.datasource}
					renderRow={(rowData) => eachButton(rowData)}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	header:{
		fontSize:17,
		textAlign:'center',
		color:'black'
	},
	button:{
		backgroundColor:'green',
		borderRadius:5.,
		width:200,
		height:30,
		marginBottom:10,
		justifyContent:'center',
		alignItems:'center',
		marginTop:10,
		alignSelf:'center'
	},
	position:{
		color:'white'
	}
})