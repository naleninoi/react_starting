import React, { useState } from 'react';
import './App.css';
import Header from "./components/header/Header";
import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";
import CoreConcept from "./components/core-concept/CoreConcept";
import TabButton from "./components/tab-button/TabButton";

function App() {
    const [selectedTopic, setSelectedTopic] = useState<'components'|'jsx'|'props'|'state'|null>(null);

    function handleSelect(selectedButton: 'components'|'jsx'|'props'|'state') {
        setSelectedTopic(selectedButton);
    }

    // @ts-ignore
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
                        <TabButton
                            onSelect={() => handleSelect('components')}
                            isSelected={selectedTopic === 'components'}>
                            Components
                        </TabButton>
                        <TabButton
                            onSelect={() => handleSelect('jsx')}
                            isSelected={selectedTopic === 'jsx'}>
                            JSX
                        </TabButton>
                        <TabButton
                            onSelect={() => handleSelect('props')}
                            isSelected={selectedTopic === 'props'}>
                            Props
                        </TabButton>
                        <TabButton
                            onSelect={() => handleSelect('state')}
                            isSelected={selectedTopic === 'state'}>
                            State
                        </TabButton>
                    </menu>
                    {!selectedTopic &&
                        <p>Please select a topic.</p>
                    }
                    {selectedTopic &&
                        <div id="tab-content">
                            <h3>{EXAMPLES[selectedTopic].title}</h3>
                            <p>{EXAMPLES[selectedTopic].description}</p>
                            <pre>
                                <code>{EXAMPLES[selectedTopic].code}</code>
                            </pre>
                        </div>
                    }
                </section>
            </main>
        </div>
    );
}

export default App;
