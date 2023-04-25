import { UserManagerSettings } from "oidc-client-ts";

export class AuthConfig {
  public static clientUri = "http://localhost:4202";
  public static authorityUri = "https://localhost:5005";
  public static clientId = "b76ac7b9-dfbf-4fab-86cb-598de7e2f7b9";

  public static get clientSettings(): UserManagerSettings {
    return {
      authority: AuthConfig.authorityUri,
      client_id: AuthConfig.clientId,
      response_type: "code",
      scope: "openid profile email ngcloud-webapi",
      
      monitorSession: true,
      monitorAnonymousSession: true,

      loadUserInfo: true,
      
      automaticSilentRenew: true,
      // validateSubOnSilentRenew: true,
      
      // filterProtocolClaims: true,
      // revokeTokensOnSignout: true,
      
      redirect_uri: `${AuthConfig.clientUri}/auth/signin-callback`,
      silent_redirect_uri: `${AuthConfig.clientUri}/assets/silent-callback.html`,
      post_logout_redirect_uri: `${AuthConfig.clientUri}/auth/signout-callback`,
    };
  }
}