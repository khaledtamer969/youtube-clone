import React from 'react'
import './AppMenu.css'
import SideBarRow from './SideBarRow';
import YouTubeIcon from '@material-ui/icons/YouTube';
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
function AppMenu() {
    return (
        <div className= "appMenu">
            <SideBarRow Icon={OndemandVideoIcon}  title={"Youtube Tv"} />
            <hr/>
            <SideBarRow Icon={ExitToAppIcon} title={"Youtube Music"} />
            <SideBarRow Icon={ExitToAppIcon} title={"Youtube Kids"} />
            <hr/>
            <SideBarRow Icon={YouTubeIcon} title={"Creator academy"} />
            <SideBarRow Icon={YouTubeIcon} title={"Youtube for Artists"} />
        </div>
    )
}

export default AppMenu
