import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';


const App = (props) => {
  
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>

          <Route path="/Dialogs" render={ () => <Dialogs 
            store = {props.store}
            state = {props.state} 
            dispatch = {props.dispatch}
          />} />
          
          <Route path="/Profile" render={ () => <Profile 
            state = {props.state}
            dispatch = {props.dispatch}
          />} />

          <Route path="/News" render={ () => <News />} />
          
          <Route path="/Music" render={ () => <Music />} />

          <Route path="/Settings" render={ () => <Settings />} />

        </div>
        
      </div>
    </BrowserRouter>

  );
}

export default App;