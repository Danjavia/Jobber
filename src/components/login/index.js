import React, {	Component, StyleSheet, Image, Text, View, TextInput, TouchableHighlight } from 'react-native'
 
export default class Login extends Component {

	constructor ( props ) {
		
		super ( props )

		this.state = {
			username: ''
		}
	}

	onPress () {
		console.log( this.state.username )
		this.props.navigator.push({ name: 'todos' })
	}

	render () {
		return (
			<View style={ styles.container }>
			
				<Image source={ require( './img.jpg' ) } style={ styles.backgroundImage } resizeMode={ Image.resizeMode.cover } />
				
				<View>

					<TextInput
						style={ styles.input }
						value={ this.state.email }
						onChangeText={ ( email ) => this.setState({ email: email }) }
						placeholder={ 'Enter your email' }
						maxLength={ 50 }
						keyboardType="email-address"
						multiline={ false }
						/>

					<TextInput
						style={styles.input}
						value={this.state.username}
						onChangeText={ (text) => this.setState({ username: text }) }
						placeholder={ 'Enter User Nickname' }
						maxLength={ 15 }
						multiline={false}
						/>
			 
					<TouchableHighlight
						style={ styles.button }
						underlayColor={ '#4CAF50' }
						onPress={ this.onPress.bind( this ) }
						>
						<Text style={{ color: '#fefefe' }}>LOGIN</Text>
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
		backgroundColor: '#fefefe',
	},
	backgroundImage: {
	    flex: 1,
		width: null,
		height: null,
  	},
	loginContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	input: {
		width: 250,
		color: '#4a4a4a',
		fontSize: 18,
		padding: 10,
		height: 50,
		borderColor: '#fefefe',
		borderWidth: 1,
		borderRadius: 10,
		alignSelf: 'center',
		marginTop: 15 
	},
	button: {
		width: 250,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		borderWidth: 1,
		borderRadius: 5,
		borderColor: '#4CAF50',
		padding: 10,
		marginTop: 20,
		backgroundColor: '#388E3C'
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