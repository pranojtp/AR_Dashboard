// import { User, UserManager, UserManagerSettings } from "oidc-client-ts";

// // 1. Define OIDC config type
// const oidcConfig: UserManagerSettings = {
//   authority: "https://cognito-idp.eu-central-1.amazonaws.com/eu-central-1_KKMD0ZZBS",
//   client_id: "1lvrsjvmru9fc9r5gf0d59fiet",
//   redirect_uri: "http://localhost:8080",
//   response_type: "code",
//   scope: "email openid phone",

//   // Optional callback after sign-in
//   onSigninCallback: (_user: User | void): void => {
//     window.history.replaceState({}, document.title, window.location.pathname);
//   },
// };

// // 2. Create UserManager instance
// const userManager = new UserManager(oidcConfig);

// // 3. Get access token with correct typing
// export const getAccessToken = async (): Promise<string | null> => {
//   const user: User | null = await userManager.getUser();
//   return user?.access_token ?? null;
// };

// export default oidcConfig;
