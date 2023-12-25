import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Login } from './Component/Login';
import { HomePage } from './Component/HomePage';
import { SignUp } from './Component/SignUp';
import { IndividualRoomPage } from './Component/IndividualRoomPage';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li><Link to="HomePage">Home</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="HomePage" element={<HomePage />} />
          <Route path="IndividualRoomPage/:roomID" element={<IndividualRoomPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
