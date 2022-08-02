import { BrowserRouter as Router, Routes, Route}
  from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' exact element={<Home />} />
        <Route path='/registration-donations' element={<Registration/>} />
        <Route path='/scholarships' element={<Scholarship/>} />
      </Routes>
    </div>
  );
}

const Registration = () => {
  return (

      <div>
        <h1>Ree</h1>
      </div>
  );
};

const Home = () => {
  return (
      <div>
        <h1>Mail us on feedback@geeksforgeeks.org</h1>
      </div>
  );
};

const Scholarship = () => {
  return (
      <div>
        <h1>Scholarship</h1>
      </div>
  );
};

export default App;
