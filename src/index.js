import React, { StrictMode, Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

//could also import without the .js extension
import Navigation from './Navigation.js';
import Header from './Header.js';
import Social from './Social.js';
import Supplementary from './Supplementary.js';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation Header="Deniz Arca" />
        <Header />
        <Social />
        <Supplementary />
      </div>
    );
  }
}

//below line connects the app with index.html
//can specify an imported class by doing <ClassName />
//any usage in between <React.StrictMode> tags will include additional checks to help with dev
ReactDOM.render(<StrictMode> <App /> </StrictMode>, document.getElementById('root'));


serviceWorker.unregister();
