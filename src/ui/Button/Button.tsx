import {ButtonHTMLAttributes, FC} from 'react';

type HtmlButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'>;

export interface IButton extends HtmlButtonProps {
    children: string;
    color: string;
}

const Button: FC<IButton> = ({
                                 color,
                                 children,
                                 ...props
                             }) => {
    return (
        <button onClick={props.onClick} style={{color: color}}>
            {children}
        </button>
    );
};

export default Button;