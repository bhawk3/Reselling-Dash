//This contains the buttons above the data that will help control/filter the display
import "../Navbar.css";

export default function Navbar() {
	//The filter btn will likely need to be changed to something else. Maybe checkboxes onclick or something.
	return (
		<>
			<div className="navbar-btn-container">
				<button>All</button>
				<button>Sold</button>
				<button>Filter</button>
			</div>
		</>
	);
}
