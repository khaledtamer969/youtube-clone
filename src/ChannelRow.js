import React from 'react'
import './ChannelRow.css';
import CheckCircleOutlinedIcon from 
"@material-ui/icons/CheckCircleOutlined";
import { Avatar } from 
'@material-ui/core';
function ChannelRow(props) {
    return (
        <div className="channelRow">
            <Avatar 
            className="channelRow_logo"
             alt={props.Channel} 
             src={props.image}/>
             <div className="channelRow_text">
             <h4>{props.Channel}{props.verified &&<CheckCircleOutlinedIcon/>}</h4>
             <p>{props.subs} subscribers . {props.noOfVideos} videos</p>
             <p>{props.description}</p>
             </div>
        </div>
    )
} 

export default ChannelRow
