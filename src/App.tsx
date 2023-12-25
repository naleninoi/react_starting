import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import CoreConceptsList from "./components/core-concepts-list/CoreConceptsList";
import ExamplesList from "./components/examples-list/ExamplesList";

function App() {

    return (
        <>
            <Header/>
            <main>
                <CoreConceptsList />
                <ExamplesList />
            </main>
        </>
    );
}

export default App;
