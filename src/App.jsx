import './App.css';
import Header from './components/Header';
import RecomendedVideos from './components/RecomendedVideos';
import Sidebar from './components/Sidebar';
import { Route, Routes } from "react-router"

function App() {
  return (
    <div className="App">
      <Routes>
       <Route path="/" 
       element={ 
       <>
       <Header />
       <div className="app__page">
        <Sidebar />
        <RecomendedVideos />
       </div>
       </> 
       } />
      </Routes>
    </div>
  );
}

export default App;
