import React from 'react'
import SideBarRow from './SideBarRow';
import YouTubeIcon from '@material-ui/icons/YouTube';
import './VideoCallMenu.css';
function VideoCallMenu() {
    return (
        <div className='videocallMenu'>
           <SideBarRow Icon={YouTubeIcon} title={"Upload video"} />
           <SideBarRow Icon={YouTubeIcon} title={"Go Live"} />
        </div>
    )
}

export default VideoCallMenu
