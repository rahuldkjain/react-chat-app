import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Main from '../../components/Main/Main';
import store from '../../store';
import _ from 'lodash';
import './App.css';

function App() {
  const { contacts, user, activeUserId } = store.getState();
  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main user={user} activeUserId={activeUserId} />
    </div>
  );
}

export default App;
