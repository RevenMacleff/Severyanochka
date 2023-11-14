import { FC, PropsWithChildren } from "react";
import logo from "../assets/logo.svg";
import { MenuSvg } from "../assets/MenuSvg";
import classes from "./Header.module.scss";
import { Button } from "src/shared/ui/button";
const Header: FC<PropsWithChildren> = () => {
  return (
    <header className={classes.header}>
      <div className="container">
        <div className={classes.content}>
          <div className={classes.logo}>
            <img src={logo} alt="logo" className="" />
          </div>
          <Button leftIcon={<MenuSvg></MenuSvg>}>
            <div className={classes.button_text}>Каталог</div>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
