import React, { useState } from 'react';
// import Counter from './Components.JSX/Counter';
import ClassCounter from './Components/ClassCounter.jsx';


function App() {
  const [value, setValue] = useState('text');

  return (
    <div className="App">
        <ClassCounter/>
     </div>
  );
}

export default App;
