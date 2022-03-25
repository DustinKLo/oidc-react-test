import React from "react";
import { connect } from "react-redux";

const User = function (props) {
  const { user } = props;

  let userProfile, token;
  if (user) {
    const tokenSplit = user.id_token.split(".");
    token = tokenSplit[1];
    try {
      userProfile = JSON.parse(window.atob(token));
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div style={{ padding: 5 }}>
      {user ? <h1>Hello {user.profile.preferred_username}!</h1> : null}
      {user ? (
        <div style={{ wordWrap: "break-word" }}>
          <pre>user: {JSON.stringify(userProfile, null, 2)}</pre>
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, null)(User);
