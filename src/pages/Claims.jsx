import React from "react";
import { connect } from "react-redux";

import { decodeToken } from "../utils";

const Claims = function (props) {
  const { accessToken } = props;
  const claims = accessToken ? decodeToken(accessToken) : null;

  return (
    <div style={{ padding: 5 }}>
      <h1>Claims</h1>
      {accessToken ? (
        <div style={{ wordWrap: "break-word" }}>
          <pre>claims: {JSON.stringify(claims, null, 2)}</pre>
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  accessToken: state.accessToken,
});

export default connect(mapStateToProps, null)(Claims);
