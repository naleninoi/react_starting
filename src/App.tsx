import React, { useState } from 'react';
import './App.css';
import Header from "./components/header/Header";
import { CORE_CONCEPTS } from "./data.js";
import CoreConcept from "./components/core-concept/CoreConcept";
import TabButton from "./components/tab-button/TabButton";

function App() {
    const [selectedTopic, setSelectedTopic] = useState<string>('Please click a button!');

    function handleSelect(selectedButton: string) {
        setSelectedTopic(selectedButton);
    }

    return (
        <div className="App">
            <Header/>
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcept
                            title={CORE_CONCEPTS[0].title}
                            description={CORE_CONCEPTS[0].description}
                            image={CORE_CONCEPTS[0].image}/>
                        <CoreConcept
                            title={CORE_CONCEPTS[1].title}
                            description={CORE_CONCEPTS[1].description}
                            image={CORE_CONCEPTS[1].image}/>
                        <CoreConcept
                            title={CORE_CONCEPTS[2].title}
                            description={CORE_CONCEPTS[2].description}
                            image={CORE_CONCEPTS[2].image}/>
                        <CoreConcept
                            title={CORE_CONCEPTS[3].title}
                            description={CORE_CONCEPTS[3].description}
                            image={CORE_CONCEPTS[3].image}/>
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
                        <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                        <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
                        <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
                    </menu>
                    <p>{selectedTopic}</p>
                </section>
            </main>
        </div>
    );
}

export default App;
