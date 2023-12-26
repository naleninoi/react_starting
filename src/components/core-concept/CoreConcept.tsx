import "./CoreConcept.css";
import { FC } from "react";

interface CoreConceptProps {
    title: string,
    description: string,
    image: any
}

const CoreConcept: FC<CoreConceptProps> = (props) => {
    return (
        <li>
            <img src={props.image} alt={props.title}/>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </li>
    );
}

export default CoreConcept;
