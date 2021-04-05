
// import * as serviceWorker from './serviceWorker';
import './index.css';
import { hot } from 'react-hot-loader/root';
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';

const Navigation = lazy(() => import('./Navigation.js'));
const Header = lazy(() => import('./Header.js'));
const Social = lazy(() => import('./Social.js'));
const Supplementary = lazy(() => import('./Supplementary.js'));

class App extends React.Component {
    render () {
      return (
        <>
          <Suspense fallback={<></>}>
          <Navigation Header="Deniz Arca" />
          <Header />
          <Social />
          <Supplementary />
          </Suspense>
        </>
      );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
// serviceWorker.unregister();

export default hot(App);
