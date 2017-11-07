/**
 *@name App
 *@description Pure Component for app container
 */
import React from 'react';

const App = ({children}) => (
  <div id="app" className="container">
    {children}
  </div>
);

export default App;
