import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import useStyles from './styles';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PostDetails from './components/PostDetails/PostDetails';
import Home from './components/Home/Home';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (




  <BrowserRouter>
    <Container maxWidth="lg">   
  <Switch>
  <Route path="/posts/:id" exact component={PostDetails} />
  <Route path="/posts/" exact component={Home} />
  <Route path="/" exact component={() => <Redirect to="/posts" />} />
</Switch>
    </Container>
  </BrowserRouter>

  );
};

export default App;