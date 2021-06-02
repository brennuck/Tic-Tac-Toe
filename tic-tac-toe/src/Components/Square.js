import React from "react";

const style = {
	background: "burlywood",
	border: "2px solid #87b2de",
	fontSize: "30px",
	fontWeight: "800",
    fontFamily: 'Sintony',
	cursor: "pointer",
	outline: "none",
    color: "black"
};

const Square = ({ value, onClick }) => (
	<button style={style} onClick={onClick}>
		{value}
	</button>
);

export default Square;
