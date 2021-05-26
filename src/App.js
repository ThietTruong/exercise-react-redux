import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header';
import NotFound from './components/NotFound';
import router from './router';
import gif from './assets/data/gif.json'
import "./assets/css/App.css"
import { useDispatch } from 'react-redux'
import { setData } from "./feature/gif/gifSlice"
function App() {
  const dispatch = useDispatch();
  console.log("data ", gif)
  useEffect(() => {
    dispatch(setData(gif));
  }, [])
  return (
    <div>
      <Router>
        <div className="App">
          <Header />
        </div>
        <Switch>
          {router.map((item, index) => {
            return (
              <Route key={index} path={item.path} exact={item.exact} component={item.component} />
            )
          })}
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
