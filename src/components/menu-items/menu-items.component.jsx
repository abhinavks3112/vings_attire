import React from 'react';
import './menu-items.style.scss';

const MenuItem = ({ title, imageUrl, size }) => {
    // `${size} menu-item` if present size then the value of this variable gets added as css class name, to which we can assign attributes/property in css file
    return(
        <div className={`${size} menu-item`}>
            <div 
            className='background-image' 
            style={{
                backgroundImage: `url(${imageUrl})`
            }} 
            />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
}

export default MenuItem;