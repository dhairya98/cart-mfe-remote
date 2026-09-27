import React, { useState } from "react";

// Inline styling matching the layout style in the video
const styles = {
	container: {
		fontFamily: "Arial, sans-serif",
		padding: "20px",
		maxWidth: "400px",
	},
	header: { fontSize: "24px", marginBottom: "15px" },
	form: { display: "flex", gap: "10px", marginBottom: "20px" },
	input: {
		flex: 1,
		padding: "8px",
		border: "1px solid #ccc",
		borderRadius: "4px",
	},
	addButton: {
		backgroundColor: "#28a745",
		color: "white",
		border: "none",
		padding: "8px 12px",
		borderRadius: "4px",
		cursor: "pointer",
	},
	row: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#f4f4f4",
		padding: "10px",
		marginBottom: "8px",
		borderRadius: "4px",
	},
	deleteButton: {
		backgroundColor: "#dc3545",
		color: "white",
		border: "none",
		padding: "6px 12px",
		borderRadius: "4px",
		cursor: "pointer",
	},
};

export default function App() {
	const [items, setItems] = useState(["Pizza", "Burger"]);
	const [inputValue, setInputValue] = useState("");

	const handleAddItem = (e) => {
		e.preventDefault();
		if (!inputValue.trim()) return;
		setItems([...items, inputValue.trim()]);
		setInputValue("");
	};

	const handleDeleteItem = (indexToDelete) => {
		setItems(items.filter((_, index) => index !== indexToDelete));
	};

	// FIXED: Added the required JSX structure inside the return statement
	return (
		<div style={styles.container}>
			<h2 style={styles.header}>Product List</h2>

			<form onSubmit={handleAddItem} style={styles.form}>
				<input
					type="text"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					placeholder="Enter item name..."
					style={styles.input}
				/>
				<button type="submit" style={styles.addButton}>
					Add Todo
				</button>
			</form>

			<div>
				{items.map((item, index) => (
					<div key={index} style={styles.row}>
						<span>{item}</span>
						<button
							onClick={() => handleDeleteItem(index)}
							style={styles.deleteButton}
						>
							Delete
						</button>
					</div>
				))}
			</div>
		</div>
	);
}
