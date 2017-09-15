import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';
import { connect } from "react-redux"
import firebase from 'firebase'

@connect((store) => {
	return {//props
		user: store.user
	}
},)
export default class LoginScreen extends React.Component{
	onSignIn(googleUser) {
		  console.log('Google Auth Response', googleUser);
		  // We need to register an Observer on Firebase Auth to make sure auth is initialized.
		  var unsubscribe = firebase.auth().onAuthStateChanged(function(firebaseUser) {
		    unsubscribe();
		    // Check if we are already signed-in Firebase with the correct user.
		    if (!isUserEqual(googleUser, firebaseUser)) {
		      // Build Firebase credential with the Google ID token.
		      var credential = firebase.auth.GoogleAuthProvider.credential(
		          googleUser.getAuthResponse().id_token);
		      // Sign in with credential from the Google user.
		      firebase.auth().signInWithCredential(credential).catch(function(error) {
		        // Handle Errors here.
		        var errorCode = error.code;
		        var errorMessage = error.message;
		        // The email of the user's account used.
		        var email = error.email;
		        // The firebase.auth.AuthCredential type that was used.
		        var credential = error.credential;
		        // ...
		      });
		    } else {
		      console.log('User already signed-in Firebase.');
		    }
		  });
		}


	render(){
		return (
     		<View style={{
		        flex: 1,
		        flexDirection: 'column',
		        justifyContent: 'center',
		        alignItems: 'center'
		      }}>
				<Text> Helo {this.props.user.name}
				</Text>
			</View>)
	}
}