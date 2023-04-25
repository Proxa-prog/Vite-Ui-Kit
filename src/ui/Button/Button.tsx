import {ButtonHTMLAttributes, FC} from 'react';

import style from './Button.module.scss';

type HtmlButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'>;

export interface IButton extends HtmlButtonProps {
    children: string;
    color?: string;
}

const Button: FC<IButton> = ({
                                 color,
                                 children,
                                 ...props
                             }) => {
    return (
        <button
            className={style.color}
            onClick={props.onClick}
        >
            {children}
        </button>
    );
};

export default Button;