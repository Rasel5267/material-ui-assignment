import React from 'react';
import Header from './Component/Header/Header';
import Posts from './Component/Posts/Posts';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NoMatch from './Component/NoMatch/NoMatch';
import PostDtl from './Component/PostDtl/PostDtl';

function App() {
  return (
    <div>
      <Header/>
      <Router>
          <Switch>
            <Route path="/posts">
              <Posts/> 
            </Route>
            <Route path="/postDtl/:postId">
              <PostDtl/>
            </Route>
            <Route exact path="/">
              <Posts/>
            </Route>
            <Route path="*">
              <NoMatch></NoMatch>
            </Route>
          </Switch>
      </Router>

    </div>
  );
}

export default App;

