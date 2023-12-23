import React from "react";

interface TabButtonProps {
    onSelect: () => void,
    isSelected: boolean,
    children: React.ReactNode
}

const TabButton: React.FC<TabButtonProps> = (props) => {
    return (
        <li>
            <button className={props.isSelected ? 'active' : ''} onClick={props.onSelect}>
                {props.children}
            </button>
        </li>
    );
}

export default TabButton;
