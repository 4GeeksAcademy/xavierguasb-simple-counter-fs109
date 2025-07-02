import React from "react";
import { FaRegClock } from "react-icons/fa";
import {SecondsNumber} from "./Counter";


const Home = ({Second1, Second2, Second3, Second4, Second5, Second6}) => {
	return (
	
		<div className="d-flex justify-content-center bg-dark">
			<div className="bg-dark pt-4 text-white text-center fs-1 border border-dark-subtle border-3 m-1 rounded" style={{ width: "5rem", height: "7rem"}}>
			<FaRegClock size={32} className="text-white mb-2" />
			</div>
			<SecondsNumber SecondsNumber ={Second6} />
			<SecondsNumber SecondsNumber ={Second5} />
			<SecondsNumber SecondsNumber ={Second4} />
			<SecondsNumber SecondsNumber ={Second3} />
			<SecondsNumber SecondsNumber ={Second2} />
			<SecondsNumber SecondsNumber ={Second1} />
		</div>
	)
};

export default Home;

