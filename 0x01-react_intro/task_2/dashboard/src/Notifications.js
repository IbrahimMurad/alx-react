import React from "react";
import "./Notifications.css";
import close_icon from './close-icon.png';
import { getLatestNotification } from "./utils.js";

export default function Notifications() {
    return (
        <div className="Notifications">
            <button
                aria-label="Close"
                onClick={() => console.log('Close button has been clicked')}
            >
                <img src={close_icon} alt="close" />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data="default">New course available</li>
                <li data="urgent">New resume available</li>
                <li data="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
            </ul>
        </div >
    );
}