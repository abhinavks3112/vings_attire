import React from 'react';
import './menu-items.style.scss';

const MenuItem = ({ title, imageUrl, size }) => {
    // `${size} menu-item` if present size then the value of this variable gets added as css class name, to which we can assign attributes/property in css file
    return(
        <div style={{backgroundImage: `url(${imageUrl})`}} className={`${size} menu-item`}>
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
}

export default MenuItem;