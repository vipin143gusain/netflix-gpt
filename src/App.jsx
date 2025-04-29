/** @format */

import './App.css';
import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import { Provider } from 'react-redux';
import appStore from './utils/store/appStore';

function App() {
   return (
      <div className=''>
         <Provider store={appStore}>
            <Body />
         </Provider>
      </div>
   );
}

export default App;
