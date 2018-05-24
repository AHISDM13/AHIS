import React from "react";

import AuthUserContext from "./AuthUserContext";
import { firebase } from "../firebase";
const sessionHandler = Component =>
  class SessionHandler extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        authUser: null
      };
    }
    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? this.setState(() => ({ authUser: authUser.providerData[0] }))
          : this.setState(() => ({ authUser: null }));
      });
    }

    render() {
      const { authUser } = this.state;

      return (
        <AuthUserContext.Provider value={{ user: authUser }}>
          <Component />
        </AuthUserContext.Provider>
      );
    }
  };

export default sessionHandler;
