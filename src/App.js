import React from 'react';
import ReactDOM from "react-dom";
import Body from './components/Body';
import Header from './components/Header';

const App = () => {
    return(
        <>
            {/* <Header/> */}
            <Body/>
        </>
    );
};

const root = document.getElementById('root');
ReactDOM.render(<App />, root);

