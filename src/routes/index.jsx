import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from '../pages/Login';
import BookList from '../pages/BookList';
import { useAuth } from '../hooks/AuthContext';

export default function Routes() {
  const { user } = useAuth();

  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route
        path="/books"
        render={({ location }) => {
          return user ? (
            <BookList />
          ) : (
            <Redirect
              to={{
                pathname: user ? '/books' : '/login',
                state: { from: location },
              }}
            />
          );
        }}
      />
    </Switch>
  );
}
