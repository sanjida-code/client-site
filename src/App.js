import './App.css';
import AuthProvider from './context/AuthProvider';
import {
  BrowserRouter as Router,
  Switch,
  Route
}from "react-router-dom";
import Navigation from './pages/Navigation/Navigation';
import AddCourse from './pages/AddCourse/AddCourse';
import Course from './pages/Course/Course';
import UpdateCourse from './pages/UpdateCourse/UpdateCourse';
import LiveClass from './pages/LiveClass/LiveClass';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';





function App() {
  return (
    <div className='mx-5'>
      <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute exact path='/'>
            <Navigation></Navigation>
            <LiveClass></LiveClass>
            <Course></Course>
          </PrivateRoute>
          <PrivateRoute path='/addcourse'>
            <Navigation></Navigation>
            <AddCourse></AddCourse>
          </PrivateRoute>
          <Route path='/login'>
            <Navigation></Navigation>
            <Login></Login>
          </Route>
          <PrivateRoute path='/update/:id'>
            <Navigation></Navigation>
            <UpdateCourse></UpdateCourse>
          </PrivateRoute>
        </Switch>
      </Router>
      
    </AuthProvider>
    </div>
  );
}

export default App;
