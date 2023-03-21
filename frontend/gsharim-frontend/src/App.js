import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import {HomePage} from './pages/home/homePage';
import {ForumPage} from './pages/forumPage';
import {ContentPage} from './pages/content/contentPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="Title">גשרים אונליין</div>
      </header>
      <Router>
      <nav className="nav-bar">
          <ul>
            <li>
              <Link to="/">בית</Link>
            </li>
            <li>
            <Link to="/content">תכנים</Link>
            </li>
            <li>
            <Link to="/forum">פורום</Link>
            </li>
          </ul>
        </nav>
      
       <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route  path="/content" element={<ContentPage/>}exact />
        <Route  path="/forum" element={<ForumPage/>} exact/>
       </Routes>
    
   </Router>
   
    </div>
  );
}

export default App;
