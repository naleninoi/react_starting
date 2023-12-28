import { FC, ReactNode } from "react";

type TabsProps = {
    buttons: ReactNode;
    ButtonsContainer: any;
    children: ReactNode
}

const Tabs: FC<TabsProps> = ({buttons, ButtonsContainer, children}) => {
    return (
        <>
        <ButtonsContainer>{buttons}</ButtonsContainer>
        {children}
        </>
    );
}

export default Tabs;
