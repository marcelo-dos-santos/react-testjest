import { ReactNode } from "react";

const Button = ({disabled, children, onClick}: {disabled: boolean, children: ReactNode, onClick: (number: number) => void;}) => {
    return (
        <button onClick={() => onClick(10)} style={{ backgroundColor: disabled ? "red" : "blue" }}>{children}</button>
    )
}

export default Button