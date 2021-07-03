import React from 'react'
import { Avatar } from '@material-ui/core'
import "./NotificationMenu.css";
function NotificationMenu(props) {
    return (
        <div className="notificationMenu">
    <div className="first">
            <div className="div1" >
            <Avatar 
            className="notificationMenu_Avatar"
             alt="Image" 
             src={props.image}/>
  </div>
  <div className="div2"></div>
  <div className="div3" >
<h4 className="notificationMenu_Description">{props.description}</h4>
  </div>
  <div className="div4"></div>
  <div className="div5" >
<img className="notificationMenu_Image" src={props.Image}/>
</div>
</div>
          
          <div className="first">
          <div className="div1" >
            <Avatar 
            className="notificationMenu_Avatar"
             alt="Image" 
             src={props.image}/>
  </div>
  <div className="div2"></div>
  <div className="div3" >
<h4 className="notificationMenu_Description">{props.description}</h4>
  </div>
  <div className="div4"></div>
  <div className="div5" >
<img className="notificationMenu_Image" src={props.Image}/>
</div>
          
</div>    
        </div>
    )
}

export default NotificationMenu
