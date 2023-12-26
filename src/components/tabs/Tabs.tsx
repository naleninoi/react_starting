import { FC, ReactNode } from "react";

type TabsProps = {
    buttons: ReactNode;
    children: ReactNode
}

const Tabs: FC<TabsProps> = ({buttons, children}) => {
    return (
        <>
        <menu>
            {buttons}
        </menu>
        {children}
        </>
    );
}

export default Tabs;
