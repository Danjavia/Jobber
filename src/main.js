import React, {	Component, Navigator, StyleSheet, Image, Text, View } from 'react-native'

import Login from './components/login'
import Todos from './components/todos'
 
const ROUTES = {
	login: Login,
	todos: Todos
}
 
export default class ToDo extends Component {

	renderScene ( route, navigator ) {
		var Component = ROUTES[ route.name ];
		return <Component route={ route } navigator={ navigator } />
	}

	render () {
		return (
			<Navigator
				style={ styles.container }
				initialRoute={ { name: 'login' } }
				renderScene={ this.renderScene }
				configureScene={ () => { return Navigator.SceneConfigs.FloatFromRight } }
			/>
		)
	}
}
 
const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});