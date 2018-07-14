import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
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

  // 2nd argument in createStore ( {} ) is for any initial state for the application.
  // applyMiddleware(ReduxThunk) is a store enhancer: adding aditional functionality to the store.
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
