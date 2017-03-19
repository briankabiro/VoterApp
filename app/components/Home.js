import React, {Component} from 'react-native';
import {
	View,
	Text,
	StyleSheet
} from 'react-native'

export default class Home extends Component{
	render(){
		return(
			<View>
				<Text style={styles.header}>Vote For</Text>
				<View style={styles.button}>
					<Text>President</Text>
				</View>
				<View style={styles.button}>
					<Text>Governor of Nairobi</Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	header:{
		fontSize:15
	},
	button:{
		backgroundColor:'green',
		borderRadius:5
	}
})