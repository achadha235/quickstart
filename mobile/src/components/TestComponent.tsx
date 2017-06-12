import { StyleSheet, Text } from 'react-native'
import PropTypes from 'prop-types'
import React from 'react'

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

export default class TestComponent extends React.Component<Props, State> {
  render() {
    return (
        <Text style={styles.welcome}>
          My Common Component
        </Text>
    )
  }
}