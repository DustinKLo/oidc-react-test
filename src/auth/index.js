import { UserManager, WebStorageStateStore } from "oidc-client-ts";
import { AUTHORITY, CLIENT_ID, AUTO_RENEW_TOKEN, HOME_PAGE } from "../settings";

export const userMgr = new UserManager({
  authority: AUTHORITY,
  client_id: CLIENT_ID,
  scope: "openid profile email",
  redirect_uri: HOME_PAGE,
  post_logout_redirect_uri: HOME_PAGE,
  loadUserInfo: true,
  automaticSilentRenew: AUTO_RENEW_TOKEN,
  revokeAccessTokenOnSignout: true,
  userStore: new WebStorageStateStore({ store: window.sessionStorage }),
});

userMgr.clearStaleState();

if (!AUTO_RENEW_TOKEN)
  userMgr.events.addAccessTokenExpiring(
    async () => await userMgr.signoutRedirect()
  );
