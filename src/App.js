import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAToXh9W9CXDJyemiDQcVywlkmT5HdNa0s',
      authDomain: 'manager-94208.firebaseapp.com',
      databaseURL: 'https://manager-94208.firebaseio.com',
      projectId: 'manager-94208',
      storageBucket: 'manager-94208.appspot.com',
      messagingSenderId: '886205135294'
    };
    firebase.initializeApp(config);    
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
