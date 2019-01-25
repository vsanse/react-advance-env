import { auth, gProvider } from "./config";

// Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

// Sign In
export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

// Sign out
export const doSignOut = () => {
  auth.signOut();
}

// Password Reset
export const sendPasswordResetEmail = (email) =>
  auth.sendPasswordResetEmail(email);

// Password Change
export const doPasswordUpdate = (password) =>
  auth.currentUser.updatePassword(password);

// Sign In with Google
export const SingInWithGoogle = () => {
    auth.signInWithPopup(gProvider)
      .then((result) => {
        const user = result.user;
      });
  }