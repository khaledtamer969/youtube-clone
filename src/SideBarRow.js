import React from "react";
import "./SideBarRow.css";
function SideBarRow(props) {
	return (
		<div className={`sidebarRow ${props.selected && "selected"}`}>
			<props.Icon className="sidebar_icon" />
			<h2 className="sidebar_title">{props.title}</h2>
		</div>
	);
}

export default SideBarRow;
