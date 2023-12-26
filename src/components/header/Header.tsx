import "./Header.css";
import reactImg from "../../assets/react-core-concepts.png";
import { FC } from "react";

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function getRandomInt(max: number): number {
    return Math.floor(Math.random() * (max + 1));
}

const Header: FC = () => {
    const maxIndex = reactDescriptions.length - 1;
    const description = reactDescriptions[getRandomInt(maxIndex)];
    return (
        <header>
            <img src={reactImg} alt="Stylized atom"/>
            <h1>React Essentials</h1>
            <p>
                {description} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    );
}

export default Header;
