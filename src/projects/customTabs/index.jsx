import React, { useState, useEffect } from 'react';

const CustomTabs = () => {
    const [content, setContent] = useState('');
    const [activeTab, setActiveTab] = useState('home');

    const handleClick = (dir) => {
        setActiveTab(dir);
        if (dir === 'home') {
            setContent(<h3>this side <h2>Sanjay</h2></h3>);
        } else if (dir === 'contact') {
            setContent(<h1>Contact me using <a href='/'>s@sk.com</a></h1>);
        } else if (dir === 'about') {
            setContent('I am an engineer');
        }
    };
    useEffect(() => {
        handleClick(activeTab);
    }, []);
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>CUSTOM TABS</h1>
            <button
                style={{ color: activeTab === 'home' ? 'white' : 'black', backgroundColor: activeTab === 'home' ? 'black' : 'white' }}
                onClick={() => handleClick('home')}
            >
                HOME
            </button>{' '}
            <button
                style={{ color: activeTab === 'contact' ? 'white' : 'black', backgroundColor: activeTab === 'contact' ? 'black' : 'white' }}
                onClick={() => handleClick('contact')}
            >
                CONTACT
            </button>{' '}
            <button
                style={{ color: activeTab === 'about' ? 'white' : 'black', backgroundColor: activeTab === 'about' ? 'black' : 'white' }}
                onClick={() => handleClick('about')}
            >
                ABOUT
            </button>

            <h4>{content}</h4>
        </div>
    );
};

export default CustomTabs;
