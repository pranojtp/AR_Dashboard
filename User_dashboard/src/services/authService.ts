// // import { User, UserManager, UserManagerSettings } from "oidc-client-ts";

// // // 1. Define OIDC config type
// // const oidcConfig: UserManagerSettings = {
// //   authority: "https://cognito-idp.eu-central-1.amazonaws.com/eu-central-1_KKMD0ZZBS",
// //   client_id: "1lvrsjvmru9fc9r5gf0d59fiet",
// //   redirect_uri: "http://localhost:8080",
// //   response_type: "code",
// //   scope: "email openid phone",

// //   // Optional callback after sign-in
// //   onSigninCallback: (_user: User | void): void => {
// //     window.history.replaceState({}, document.title, window.location.pathname);
// //   },
// // };

// // // 2. Create UserManager instance
// // const userManager = new UserManager(oidcConfig);

// // // 3. Get access token with correct typing
// // export const getAccessToken = async (): Promise<string | null> => {
// //   const user: User | null = await userManager.getUser();
// //   return user?.access_token ?? null;
// // };

// // export default oidcConfig;



// // src/auth/authService.ts

// import { UserManager, WebStorageStateStore, User} from "oidc-client-ts";

// const authority = import.meta.env.VITE_COGNITO_DOMAIN!;
// const client_id = import.meta.env.VITE_COGNITO_CLIENT_ID!;
// const redirect_uri = import.meta.env.VITE_REDIRECT_URI!;
// const post_logout_redirect_uri = import.meta.env.VITE_POST_LOGOUT_REDIRECT_URI!;

// const settings = {
//   authority,
//   client_id,
//   redirect_uri,
//   post_logout_redirect_uri,
//   response_type: "code",
//   scope: "email openid phone",
//   // store user in sessionStorage so it doesn't persist across browser sessions
//   userStore: new WebStorageStateStore({ store: window.sessionStorage }),
//   // enable automatic silent renew if you later want refresh
//   automaticSilentRenew: false,
// };

// export const userManager = new UserManager(settings);

// // helper to start signin redirect
// export function signInRedirect() {
//   return userManager.signinRedirect();
// }

// // called on /auth/callback to handle the redirect and get user
// export async function handleSigninCallback(): Promise<User | null> {
//   const user = await userManager.signinRedirectCallback();
//   return user;
// }

// export function signOutRedirect() {
//   return userManager.signoutRedirect();
// }

// export async function getUser() {
//   return userManager.getUser();
// }


// import { UserManager, WebStorageStateStore, User, Log } from "oidc-client-ts";
// import type { SigninRedirectArgs } from "oidc-client-ts";

// // ✅ Enable detailed OIDC logs
// Log.setLogger(console);
// Log.setLevel(Log.DEBUG); // Keep this set to DEBUG during troubleshooting!

// const authority = import.meta.env.VITE_COGNITO_DOMAIN!;
// const client_id = import.meta.env.VITE_COGNITO_CLIENT_ID!;
// const redirect_uri = import.meta.env.VITE_REDIRECT_URI!;
// const post_logout_redirect_uri = import.meta.env.VITE_POST_LOGOUT_REDIRECT_URI!;

// const settings = {
//   authority,
//   client_id,
//   redirect_uri,
//   post_logout_redirect_uri,
//   response_type: "code",
//   scope: "email openid phone",
//   userStore: new WebStorageStateStore({ store: window.sessionStorage }),
//   automaticSilentRenew: false,
// };

// export const userManager = new UserManager(settings);

// export function signInRedirect(args?: SigninRedirectArgs) {
//   // Use a temporary signin storage key to prevent collision in development
//   return userManager.signinRedirect(args);
// }

// export async function handleSigninCallback(): Promise<User | null> {
//   // THE INVALID_GRANT ERROR HAPPENS HERE. 
//   // The error is thrown by the Cognito server due to incorrect parameters or code expiration.
//   return userManager.signinRedirectCallback();
// }

// export function signOutRedirect() {
//   return userManager.signoutRedirect();
// }

// export async function getUser(): Promise<User | null> {
//   return userManager.getUser();
// }

// export async function getAccessToken(): Promise<string | null> {
//   const user = await userManager.getUser();
//   return user?.access_token ?? null;
// }


// authService.ts
import { UserManager, WebStorageStateStore, User, Log } from "oidc-client-ts";

// ✅ Enable detailed OIDC logs
Log.setLogger(console);
Log.setLevel(Log.DEBUG); // Keep this set to DEBUG during troubleshooting!

const authority = import.meta.env.VITE_COGNITO_DOMAIN!;
const client_id = import.meta.env.VITE_COGNITO_CLIENT_ID!;
const redirect_uri = import.meta.env.VITE_REDIRECT_URI!;
const post_logout_redirect_uri = import.meta.env.VITE_POST_LOGOUT_REDIRECT_URI!;

const settings = {
  authority,
  client_id,
  redirect_uri,
  post_logout_redirect_uri,
  response_type: "code",
  scope: "email openid phone",
  userStore: new WebStorageStateStore({ store: window.sessionStorage }),
  automaticSilentRenew: false,
};

export const userManager = new UserManager(settings);

export function signInRedirect() {
  // Use a temporary signin storage key to prevent collision in development
  return userManager.signinRedirect();
}

export async function handleSigninCallback(): Promise<User | null> {
  const user = await userManager.signinRedirectCallback();

  if (!user?.id_token) {    
    console.error("No id_token received from Cognito.");
    //todo redirect to error page
  }

  return user;
}
// export async function getLoggedInUserId(): Promise<string | null> {
//   const user = await userManager.getUser();
//   return user?.profile?.sub ?? null;
// }


export function signOutRedirect() {
  return userManager.signoutRedirect();
}

export async function getUser(): Promise<User | null> {
  return userManager.getUser();
}

export async function getIdToken(): Promise<string | null> {
  const user = await userManager.getUser();
  return user?.id_token ?? null;  // Now returning the id_token
}
