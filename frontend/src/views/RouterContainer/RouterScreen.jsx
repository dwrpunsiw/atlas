import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { Container } from "react-bootstrap";

// Components
import Header from "../../shared/components/Header/Header.jsx";
import Footer from "../../shared/components/Footer/Footer.jsx";

// Screen
import HomeScreen from "../HomeScreen/pages/HomeScreen.jsx";
import AboutScreen from "../AboutScreen/pages/AboutScreen.jsx";
import ActivityScreen from "../ActivityScreen/pages/ActivityScreen.jsx";
import ContactScreen from "../ContactScreen/pages/ContactScreen.jsx";
import EventsScreen from "../EventsScreen/pages/EventsScreen.jsx";
import NewsScreen from "../NewsScreen/pages/NewsScreen.jsx";
import ShopScreen from "../ShopScreen/pages/ShopScreen.jsx";

function RouterScreen() {
  return (
    <Router>
      <Header />
      <main>
        <Container fluid>
          <Switch>
            {/* Route */}
            <Route path="/home" component={HomeScreen} exact />
            <Route path="/about" component={AboutScreen} exact />
            <Route path="/activity" component={ActivityScreen} exact />
            <Route path="/contact" component={ContactScreen} exact />
            <Route path="/events" component={EventsScreen} exact />
            <Route path="/news" component={NewsScreen} exact />
            <Route path="/shop" component={ShopScreen} exact />

            {/* Redirect */}
            <Redirect from="/" to="/home" />
            <Redirect to="/" />
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default RouterScreen;
