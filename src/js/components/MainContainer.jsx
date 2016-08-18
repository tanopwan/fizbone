import React from 'react';
import MainMenu from './MainMenu.jsx';

const MainContainer = ({children}) => (
    <div className = "container fizbone-container">
        <MainMenu />
        {children}
    </div>
);

export default MainContainer;
