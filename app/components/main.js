import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
	ListView,
	Image
} from 'react-native'
import SwipeCards from 'react-native-swipe-cards';
/* 
	how to display a text on screen when you done something
*/
var image1 = require('../assets/dida1.jpg');
var image2 = require('../assets/obama.jpg');
var image3 = require('../assets/raila.jpg');
var image4 = require('../assets/philipMurgor.jpg');
var image5 = require('../assets/uhuru.jpg');

const Cards = [{
	"id":1,
	"first_name":"Uhuru Kenyatta",
	"party":"Jubilee",
	"image":image5,
	color:'darkred'
},{
	"id":2,
	"first_name":"Kalonzo Musyoka",
	"party":"URN",
	"image":image4,
	color:'yellow'
},{
	"id":3,
	"first_name":"Raila Odinga",
	"party":"CORD",
	"image":image3,
	color:'orange'
},{
	"id":4,
	"first_name":"Abduba Dida",
	"party":"ARN",
	"image":image1,
	color:'lightblue'
},{
	"id":5,
	"first_name":"Barrack Obama",
	"party":"KANU",
	"image":image2,
	color:'brown'
}];

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 });

export default class Main extends Component{
	constructor(props) {
	  super(props);
	  this.state = {
	  	cards:Cards,
	  	dataSource: ds.cloneWithRows(Cards)
	  };
	}

	eachPic(x){
		return(
			<Image source={x.image} style={{width:70, height:70, borderRadius:35, margin:10}} />
		)
	}

	Card(x){
		return(
			<View style={{height:350,width:300,borderWidth:2,borderColor:x.color}}>
				<Image source={x.image} style={styles.candidateImage} />
				<View style={styles.candidateDetails}>
					<Text style={styles.name}>{x.first_name}</Text>
					<Text style={styles.party}>{x.party}</Text>
				</View>
			</View>
		)
	}
	noMore(){
		return(
			<View style={styles.noCard}>
				<Text>Seems Like there isn't a Valid Candidate running for President</Text>
				<Text>We might vote for you, give it a try</Text>
			</View>
		)
	}
	render(){
		return(
			<View style={styles.container}>
				<View>
					<Text style={styles.heading}>Aspirants</Text>
					<ListView 
						horizontal={true}
						showHorizontalScrollIndicator = {false}
						dataSource = {this.state.dataSource}
						renderRow = {(rowData) => this.eachPic(rowData)}
					/>
				</View>
			<SwipeCards
				ref={'swiper'}
				cards = {this.state.cards}
				renderCard={(cardData) => this.Card(cardData)}
				containerStyle={{ backgroundColor:'#f7f7f7', alignItems:'center', margin:20}}
				renderNoMoreCards={()=> this.noMore()}
				handleYup= {this.handleYup}
				handleNope={this.handleNope}
			 />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'#f7f7f7'
	},
	heading:{
		color:'black',
		fontSize:20,
		alignSelf:'center'
	},
	card:{

	},
	noCard:{
		height:350,
		width:300,
		borderColor:'#e3e3e3',
		borderWidth:2	
	},
	candidateImage:{
		height:280,
		width:300	
	},
	candidateDetails:{
		alignItems:'center',
		justifyContent:'center',
		padding:5
	},
	name:{
		color:'black',
		fontSize:20
	},
	party:{
		color:'black'
	}
})