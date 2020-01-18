import React from "react";
import "./index.css";

interface SquareProps {
	value: string;
	onClick: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

const Square: React.FC<SquareProps> = props => {
	return (
		<button className="square" onClick={props.onClick}>
			{props.value}
		</button>
	);
};

export default Square;
