import React from "react";

import "./SidebarWidget.css"
import { Link } from "react-router-dom";

const SidebarWidget: React.FC = () => {
    return(
        <div className="sidebar">
            <div className="profile">
                Some user information
            </div>
            <div className="line"></div>
            <div className="menu">
                <ul>
                    <Link to="#"><li>Board</li></Link>
                    <Link to="#"><li>Members</li></Link>
                    <Link to="#"><li>Workspace settings</li></Link>
                </ul>
            </div>
            <div className="line"></div>
            <div className="menu">
                <ul>
                    <Link to="#"><li>Table 1</li></Link>
                    <Link to="#"><li>Table 2</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default SidebarWidget;