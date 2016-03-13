import React, {	Component, StyleSheet, Image, Text, View, TextInput, TouchableHighlight } from 'react-native'
 
export default class todo extends Component {

	constructor ( props, context ) {
		
		super ( props )

		this.state = {
			todos: []
		}
	}

	onPress () {
		this.props.navigator.pop()
	}

	render () {
		return (
			<View style={ styles.container }>
				<View>							 
					<TouchableHighlight
						style={ styles.button }
						underlayColor={ '#328FE6' }
						onPress={ this.onPress.bind( this ) }
						>
						<Text>Volver</Text>
					</TouchableHighlight>
				</View>
			</View>
		)
	}
}
 
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'stretch',
		backgroundColor: 'teal'
	},
	loginContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	input: {
		width: 250,
		color: '#555555',
		padding: 10,
		height: 50,
		borderColor: '#32C5E6',
		borderWidth: 1,
		borderRadius: 4,
		alignSelf: 'center',
		backgroundColor: '#ffffff'
	},
	button: {
		width: 250,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		borderWidth: 1,
		borderRadius: 5,
		borderColor: '#328FE6',
		padding: 10,
		marginTop: 10,
		backgroundColor: '#32c5e6'
	},
	label: {
		flex: 1,
		alignSelf: 'center',
		textAlign: 'center',
		fontSize: 20,
		fontWeight: '600',
		color: '#ffffff'
	}
});