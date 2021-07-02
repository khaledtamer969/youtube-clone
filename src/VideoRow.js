import React from 'react'
import "./VideoRow.css";
function VideoRow(props) {
    return (
        <div className="videoRow">
            <img src={props.image}
            alt=""/>
            <div className="videoRow_text">
                <h3>{props.title}</h3>
                   <p className="videoRow_headline">
                       {props.channel} .<span> <span className="videoRow_subNumber"> {props.subs}</span> subscribers {props.views}. {props.timestamp}
                       </span>
                   </p>
                   <p className="videoRow_description">{props.description}</p>
            </div>
        </div>
    )
}

export default VideoRow
