//This is going to contain the table head / tbody and then the individual table rows will get placed in their own component
import InventoryData from "./InventoryData";
import Navbar from "./Navbar";

export default function InventoryManager({ item, handleStatus }) {
	return (
		<>
			<Navbar />
			<table>
				<thead>
					<tr>
						<th>SKU</th>
						<th>Name</th>
						<th>Quantity</th>
						<th>Status</th>
						<th>Bought Price</th>
						<th>Sold Price</th>
						<th>Profit</th>
						<th>Sourcing Location</th>
					</tr>
				</thead>
				<tbody>
					<InventoryData handleStatus={handleStatus} item={item} />
				</tbody>
			</table>
		</>
	);
}
