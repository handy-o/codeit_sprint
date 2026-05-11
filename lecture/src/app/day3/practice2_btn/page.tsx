'use client';
import { useState } from 'react';
import './style.css';



export default function Home() {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="container">
            <button className="btn" onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}>아이콘 버튼</button>
            <div className={`menu-container ${isActive ? 'active' : ''}`}>
                <div className="menu-item">메뉴1</div>
                <div className="menu-item">메뉴2</div>
                <div className="menu-item">메뉴3</div>
            </div>
        </div>
    );
}