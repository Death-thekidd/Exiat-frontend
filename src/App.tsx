import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/login";
import Root from "./components/root/root";
import { useEffect } from "react";

function App() {
	useEffect(() => {
		// Initialize your app here
		// Call your initialization functions
	}, []);

	return (
		<>
			<Routes>
				<Route path="/" element={<Login />}></Route>
				<Route path="/app" element={<Root />}></Route>
			</Routes>
		</>
	);
}

export default App;
