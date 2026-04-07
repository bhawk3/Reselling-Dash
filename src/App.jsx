import "./App.css";
import Header from "./components/Header.jsx";
import InventoryManager from "./components/InventoryManager.jsx";
import { useEffect, useState } from "react";

function App() {
	//This is saving inventory data in state
	const [item, setItem] = useState([]);

	//Fetching data from JSON file
	useEffect(() => {
		fetch("/Data.json")
			.then((res) => {
				if (!res.ok) {
					throw new Error(`HTTP error! Status: ${res.status}`);
				}
				return res.json();
			})
			.then((item) => setItem(item))
			.catch((error) => console.log("Error fetching data", error));
	});

	return (
		<>
			<Header />
			<InventoryManager item={item} />
		</>
	);
}

export default App;
