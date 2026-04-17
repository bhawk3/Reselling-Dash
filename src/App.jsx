import "./App.css";
import Header from "./components/Header.jsx";
import InventoryManager from "./components/InventoryManager.jsx";
import Navbar from "./components/Navbar.jsx";
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

	//Handling Status updates. This might not be the file for this idk. Maybe do step 1 in here then pass it down to inventory data
	/*
		1) Create a function that maps over the current state so it creates a new array.
			1A) Use the Id to verify its the right item
			1B) Use the spread operator bc you want everything then target the Status
			1C) Then we need to update the original state
		2) In the return() map over the current state and add a <select> that has value={item.Status} and an onChange to call function
			In the onChange might need to add 2 parameters the item.Id and e.target.value but thats tbd 
	*/

	//This is the function that handles the Status dropdown.
	const handleStatusChange = (id, newStatus) => {
		setItem((prevItem) => ({
			...prevItem,
			inventory: prevItem.inventory.map((products) => {
				//console.log(products);
				return products.Id === id ? { ...products, Status: newStatus } : products;
			}),
		}));
	};

	//This is the function that handles the Filter button.
	const handleFilter = (filterStatus) => {
		setItem((prevLocation) => ({
			...prevLocation,
			//["Sourcing Location"]: prevLocation.inventory.groupBy(prevLocation, ({ Name }) => Name)
			//Double check this to ensure you understand
			inventory: prevLocation.inventory.filter((products) => products["Sourcing Location"] === filterStatus),
		}));
	};

	return (
		<>
			<Header />
			<InventoryManager handleStatus={handleStatusChange} handleFilter={handleFilter} item={item} />
		</>
	);
}

export default App;
