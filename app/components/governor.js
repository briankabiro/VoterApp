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
var image1 = require('../assets/kidero.jpg');
var image2 = require('../assets/sonko.jpg');
var image3 = require('../assets/mudavadi.jpg');
var image4 = require('../assets/obama.jpg');

const Cards = [{
	id:1,
	"first_name":"Evans Kidero",
	"party":"CORD",
	"color":"orange",
	"image":image1

},{
	id:2,
	"first_name":"Mike Sonko",
	"party":"Jubilee",
	"color":"red",
	"image":image2,
},{
	id:3,
	"first_name":"Musalia Mudavadi",
	"party":"ANC",
	"color":"green",
	"image":image3
},{
	id:4,
	"first_name":"Barrack Obama",
	"party":"MaHustla Party",
	"color":"blue",
	"image":image4
}];

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 });

export default class Governor extends Component{
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