import './App.css';
import Description from './components/Description';
import MainSection from './components/MainSection';
import Nb from './components/Nb';
import Related_courses from './components/Related_courses';
import Snb from './components/Snb';



function App() {
  return (
    <div className="App">
      <Nb/>
      <Snb/>
     <MainSection/>
     <Description />
     <Related_courses/>
    </div>
  );
}

export default App;
