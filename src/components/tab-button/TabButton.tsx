import { FC, ReactNode } from "react";

interface TabButtonProps {
    onSelect: () => void,
    isSelected: boolean,
    children: ReactNode
}

const TabButton: FC<TabButtonProps> = (props) => {
    return (
        <li>
            <button className={props.isSelected ? 'active' : ''} onClick={props.onSelect}>
                {props.children}
            </button>
        </li>
    );
}

export default TabButton;
