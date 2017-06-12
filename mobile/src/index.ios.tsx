import { AppRegistry, StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types'
import React from 'react'
import TestComponent from './components/TestComponent'


export interface Props extends PropTypes { }
export interface State { }

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})

export default class App extends React.Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native with iOS! (in TypeScript)
        </Text>
        <Text style={styles.instructions}>
          To get started, edit src/index.ios.tsx
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <TestComponent/>
      </View>
    )
  }
}

AppRegistry.registerComponent('App', () => App)