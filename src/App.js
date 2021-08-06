import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

let dialogsData =
    [
        { id: 1, name: 'Димыч3333' },
        { id: 2, name: 'Васич' },
        { id: 3, name: 'Даша' },
        { id: 4, name: 'Глаша' },
        { id: 5, name: 'Катя' },
        { id: 6, name: 'Маша' },
        { id: 7, name: 'Рома2222' }

    ]
let messageData =
    [
        { Messages: 'Первое сообщение', name: 'Димыч' },
        { Messages: 'Второе сообщение', name: 'Васич' },
        { Messages: 'Третье сообщение', name: 'Даша' },
        { Messages: 'В середине мая, у нас состоялся нелегкий', name: 'Глаша' }

    ]
let postData =
    [
        {id: 1, message: 'Привет это первое сообщение', likesCount: 12},
        {id: 2, message: 'Это второе сообщение здесь', likesCount: 11},
        {id: 3, message: 'Жаль сообщения не берутся из базы', likesCount: 110}
    ]


const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavBar />

        <div className='app-wrapper-content'>
          <Route /*exact*/ path="/Dialogs" render={ () => <Dialogs dialogsData = {dialogsData} messageData = {messageData}/>} />
          <Route path="/Profile" render={ () => <Profile postData = {postData}/>} />
          <Route path="/News" render={ () => <News />} />
          <Route path="/Music" render={ () => <Music />} />
          <Route path="/Settings" render={ () => <Settings />} />
        </div>
        
      </div>
    </BrowserRouter>

  );
}

export default App;