import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
