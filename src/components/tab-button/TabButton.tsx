import React from "react";

interface TabButtonProps {
    onSelect: () => void,
    children: React.ReactNode
}

const TabButton: React.FC<TabButtonProps> = (props) => {
    return (
        <li>
            <button onClick={props.onSelect}>{props.children}</button>
        </li>
    );
}

export default TabButton;
