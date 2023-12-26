import { FC, useState } from "react";
import { EXAMPLES } from "../../data";
import TabButton from "../tab-button/TabButton";
import "./ExamplesList.css";
import Section from "../section/Section";
import Tabs from "../tabs/Tabs";

const ExamplesList: FC = () => {
    const [selectedTopic, setSelectedTopic] = useState<'components' | 'jsx' | 'props' | 'state' | null>(null);

    function handleSelect(selectedButton: 'components' | 'jsx' | 'props' | 'state') {
        setSelectedTopic(selectedButton);
    }

    return (
        <Section id="examples" title="Examples">
            <Tabs buttons={
                <>
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
                </>
            }>
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
            </Tabs>
        </Section>
    );
}

export default ExamplesList;
