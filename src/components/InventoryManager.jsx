//This is going to contain the table head / tbody and then the individual table rows will get placed in their own component
import InventoryData from "./InventoryData";

export default function InventoryManager() {
	return (
		<>
			<table>
				<thead>
					<tr>
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
					<InventoryData />
				</tbody>
			</table>
		</>
	);
}
