import React, { useEffect } from "react";
import { connect } from "react-redux";

import Loading from "../pages/Loading";
import { userMgr } from "../auth";
import { setAuth } from "../redux/actions";

const AuthProvider = function (props) {
  const { isAuthed, authInProgress } = props; // redux states
  const { setAuth } = props; // redux actions

  useEffect(async () => {
    const params = new URLSearchParams(location.search); // check query params for code (for callbacks only)
    const state = params.get("state");
    const code = params.get("code");
    const sessionState = params.get("session_state");

    try {
      if (state && code && sessionState) {
        const user = await userMgr.signinRedirectCallback(); // check login callback from redirect
        if (user) setAuth(user);
        window.history.replaceState({}, document.title, location.origin); // clear url params
      } else {
        const user = await userMgr.getUser(); // load stored user
        if (!user || (user && user.expired)) await userMgr.signinRedirect(); // if loaded user not found or user expired
        if (user) setAuth(user);
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  return isAuthed && !authInProgress ? props.children : <Loading />;
};

const mapStateToProps = (state) => ({
  isAuthed: state.isAuthed,
  authInProgress: state.authInProgress,
});

const mapDispatchToProps = (dispatch) => ({
  setAuth: (user) => dispatch(setAuth(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthProvider);
