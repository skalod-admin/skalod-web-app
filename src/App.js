import React from 'react';
import ReactDOM from "react-dom";
import Body from './components/Body';
import Header from './components/Header';
import AboutUs from './components/AboutUs';

const App = () => {
    return(
        <>
            <Header/>
            <Body/>
            <AboutUs/>
        </>
    );
};

const root = document.getElementById('root');
ReactDOM.render(<App />, root);

