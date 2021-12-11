import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
	apiKey: "AIzaSyAk2ux4wuYac9UzvOOrk1RNYC77Zx1f6mo",
	authDomain: "crwn-db311.firebaseapp.com",
	projectId: "crwn-db311",
	storageBucket: "crwn-db311.appspot.com",
	messagingSenderId: "876847252818",
	appId: "1:876847252818:web:e00342423d61a574e4268b",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (err) {
			console.log("error:", err);
		}
	}

	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
