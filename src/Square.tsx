import React from "react";
import "./index.css";

interface SquareProps {
	value: string;
	isWinning: boolean;
	onClick: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

const Square: React.FC<SquareProps> = props => {
	return (
		<button
			className={props.isWinning ? "square winning" : "square"}
			onClick={props.onClick}
		>
			{props.value}
		</button>
	);
};

export default Square;
