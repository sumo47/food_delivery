import React, { useState } from 'react';
import './DrawerSidebar.css';

const DrawerSidebar = ({ onCategorySelect }) => {
    const [isOpen, setIsOpen] = useState(false);

    const categories = [
        "Burgers", "Pizzas", "Beverages", "Desserts", "Salads", "Combo Deals",
        "View All"
    ];

    return (
        <div className={`drawer ${isOpen ? 'open' : ''}`}>
            <button className="toggle-drawer" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Close' : 'Categories'}
            </button>
            <ul className="drawer-list">
                {categories.map((category, index) => (
                    <li key={index} onClick={() => onCategorySelect(category)}>
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DrawerSidebar;
