import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route path="/shop" element={<ShopPage />}></Route>
			</Routes>
		</div>
	);
}

export default App;
