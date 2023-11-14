import { ButtonHTMLAttributes, ReactNode, SVGAttributes } from "react";
import classes from "./Button.module.scss";
import { Icon } from "../Icon";
import { classNames } from "src/shared/lib/classNames/classNames";
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  rightIcon?: React.ReactElement<SVGAttributes<SVGElement>>;
  leftIcon?: React.ReactElement<SVGAttributes<SVGElement>>;
  onlyIcon?: React.ReactElement<SVGAttributes<SVGElement>>;
  color?: "primary" | "secondary" | "grayscale" | "error";
  decoration?: "default" | "outline" | "none";
  size?: "L" | "M" | "S";
  disabled?: boolean;
}
/* type Props = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>  */

export const Button = ({
  children,
  rightIcon,
  leftIcon,
  onlyIcon,
  color = "secondary",
  size = "S",
  decoration = "default",
  disabled,
}: Props) => {
  return (
    <button
      className={classNames(`${classes.button}`, {}, [
        classes[size],
        classes[color],
        classes[decoration],
      ])}
      disabled={disabled}>
      {onlyIcon ? (
        <Icon svg={onlyIcon}></Icon>
      ) : (
        <>
          {leftIcon}
          {children}
          {rightIcon}
        </>
      )}
    </button>
  );
};
