import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect, Switch } from "react-router-dom";
import { getCurrentUser } from "./store/actions/index";
import ToastNotification from "./components/toastNotification";
import SidebarCustom from "./components/sidebarCustom";
import NavBar from "./components/navBar";
import Home from "./screens/home";
import Akis from "./screens/akis";
import Profile from "./screens/profile";
import Logout from "./screens/logout";
import NotFound from "./screens/notFound";
import Terms from "./screens/terms";
import Privacy from "./screens/privacy";
import VoteCard from "./screens/voteCard";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = { navbarMargin: 0, sidebarShow: false };

  async componentDidMount() {
    await this.props.onGetCurrentUser();
  }

  handleSidebarShow = () => this.setState({ sidebarShow: true });
  handleSidebarClose = () => this.setState({ sidebarShow: false });

  onSize = size => {
    this.setState({ navbarMargin: size.height });
  };

  render() {
    return (
      <React.Fragment>
        <ToastNotification />

        <SidebarCustom
          className="desktop-hidden"
          sidebarShow={this.state.sidebarShow}
          handleSidebarClose={this.handleSidebarClose}
        >
          {this.renderItems()}
        </SidebarCustom>

        <div className="mobile-hidden">{this.renderItems()}</div>
      </React.Fragment>
    );
  }
  renderItems = () => {
    return (
      <React.Fragment>
        <NavBar onClick={this.handleSidebarShow} onSize={this.onSize} />
        <div
          style={{ marginTop: this.state.navbarMargin }}
          onClick={this.handleSidebarClose}
        >
          <Switch>
            {this.props.currentUser && <Redirect exact to="/akis" from="/" />}
            {!this.props.currentUser && <Redirect exact to="/" from="/akis" />}
            <Route path="/akis" component={Akis} />
            <Route path="/profile" component={Profile} />
            <Route exact path="/" component={Home} />
            <Route path="/logout" component={Logout} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/terms" component={Terms} />
            <Route path="/privacy" component={Privacy} />
            <Route path="/onerge" component={VoteCard} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </React.Fragment>
    );
  };
}

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetCurrentUser: () => dispatch(getCurrentUser())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
