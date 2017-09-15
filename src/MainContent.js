import React from 'react';
import { Container, ScrollableTab, Tabs, Tab, TabHeading, Item, Input, Form, Badge, Fab, CheckBox, ListItem, Card, CardItem, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, View } from 'native-base';
import LoginScreen from './Components/LoginScreen'
export default class MainContent extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render() {
    return (<LoginScreen />)
  }
}