import { fireAuth } from "config/firebase";
import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import React, { useEffect } from "react";

export const FIRE_UI_CONTAINER_ID = "firebase-auth-container";

export interface FireAuthProps {}

export function FireAuth(/* props: FireAuthProps */) {
  useEffect(() => {
    const firebaseUI =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(fireAuth);

    firebaseUI.start(`#${FIRE_UI_CONTAINER_ID}`, {
      signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
    });
  }, []);

  return (
    <div className="flex-1">
      <div id={FIRE_UI_CONTAINER_ID} />
    </div>
  );
}
