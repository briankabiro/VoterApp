import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity
} from 'react-native'

export default class Home extends Component{
	render(){
		return(
			<View>
				<Text style={styles.header}>Vote For</Text>
				<TouchableOpacity onPress={()=> this.props.navigation.navigate('President')}>	
					<View style={styles.button}>
						<Text style={styles.position}>President</Text>
					</View>
				</TouchableOpacity>
					
				<TouchableOpacity onPress={()=> this.props.navigation.navigate('Governor')}>
					<View style={styles.button}>
						<Text style={styles.position}>Governor of Nairobi</Text>
					</View>
				</TouchableOpacity>
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