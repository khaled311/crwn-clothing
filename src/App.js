import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import Header from "./components/Header";
import SignInSignOut from "./pages/SignIn-SignOut";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { useEffect, useState } from "react";
import { setCurrentUser } from "./redux/user/user.actions";
import { useStore } from "react-redux";
import store from "./redux/store";

function App() {
	const [user, setUser] = useState({});
	const { dispatch } = useStore();
	store.subscribe(() => {
		setUser(store.getState().user.currentUser);
	});

	useEffect(() => {
		auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = createUserProfileDocument(userAuth);

				(await userRef).onSnapshot((snapshot) => {
					dispatch(
						setCurrentUser({
							id: snapshot.id,
							...snapshot.data(),
						})
					);
				});
			} else {
				dispatch(setCurrentUser(userAuth));
			}
		});
		// eslint-disable-next-line
	}, []);

	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route path="/shop" element={<ShopPage />}></Route>
				<Route
					exact
					path="/signin"
					element={user ? <Navigate to="/" replace /> : <SignInSignOut />}
				></Route>
			</Routes>
		</div>
	);
}

export default App;
