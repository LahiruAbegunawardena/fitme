import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainContent from './src/MainContent'
import { Provider } from "react-redux"
import store from "./src/store"

export default class App extends React.Component {
  render() {
    return (
    	<Provider store={ store }>
    		<MainContent />
    	</Provider>)
  }
}
