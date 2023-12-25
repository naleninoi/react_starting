import React from "react";
import { CORE_CONCEPTS } from "../../data";
import CoreConcept from "../core-concept/CoreConcept";

const CoreConceptsList: React.FC = () => {
    return (
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
                {CORE_CONCEPTS.map((conceptItem) =>
                    <CoreConcept
                        key={conceptItem.title}
                        title={conceptItem.title}
                        description={conceptItem.description}
                        image={conceptItem.image}/>)}
            </ul>
        </section>
    );
}

export default CoreConceptsList;
