import React from "react";
import { connect } from "react-redux";

import { decodeToken } from "../utils";

const Home = function (props) {
  const { user, accessToken } = props;
  const claims = accessToken ? decodeToken(accessToken) : null;

  return (
    <div style={{ padding: 5 }}>
      <h1>Home</h1>
      {user ? (
        <div
          style={{
            wordWrap: "break-word",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div style={{ width: "50%" }}>
            <pre>user: {JSON.stringify(user, null, 2)}</pre>
          </div>
          <div style={{ width: "50%" }}>
            <pre>claims: {JSON.stringify(claims, null, 2)}</pre>
          </div>
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  accessToken: state.accessToken,
});

export default connect(mapStateToProps, null)(Home);
