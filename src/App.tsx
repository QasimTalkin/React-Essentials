import './App.css';
import React from 'react';
import About from './components/Organism/About';
import Nav from './components/Organism/Nav';

const user = {
  name: 'Abul Qasim',
  title: 'Software Engineer'
}
function App() {
  let reactElem = React.createElement('div', {user}, 'Hello, ' + user.name);
  return (
    <div className='App'>
    <main>
     <Nav/>
      <About/>
      From react: {reactElem}
      From JSX: <div>Hello, {user.name}</div>
    </main>
    </div>
  );
}

export default App;
