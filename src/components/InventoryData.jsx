//This is going to contain all of the <tr> data
export default function InventoryData({ item, handleStatus }) {
	//This is where we will be mapping through the data and creating a new table row for each item in the inventory

	// Show loading message if data hasn't loaded yet

	if (!item.inventory) {
		return (
			<tr>
				<td>Loading data...</td>
			</tr>
		);
	}
	return (
		<>
			{item.inventory.map((singleItem) => (
				<tr key={singleItem.Id}>
					<td>{singleItem.Id}</td>
					<td>{singleItem.Name}</td>
					<td>{singleItem.Quantity}</td>
					<td>
						<select name="status" key={singleItem.Id} onChange={(e) => handleStatus(singleItem.id, e.target.value)}>
							<option value="Sold">Sold</option>
							<option value="In Stock">In Stock</option>
							<option value="Pending">Pending</option>
						</select>
					</td>
					<td>{singleItem["Bought Price"]}</td>
					<td>{singleItem["Sold Price"]}</td>
					<td>{singleItem.Profit}</td>
					<td>{singleItem["Sourcing Location"]}</td>
				</tr>
			))}
		</>
	);
}
