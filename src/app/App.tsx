import "./index.scss";
/* import { Link } from "react-router-dom"; */
import { Routing } from "src/pages";
import { classNames } from "src/shared/lib/classNames/classNames";
import { useTheme } from "./providers";
import { Header } from "src/widgets/Header";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Изменение темы</button>
      <Header>
        {/*         <Link to={"/"}>главная</Link>
        <Link to={"/about"}>О сайте</Link> */}
      </Header>
      <main>
        <Routing></Routing>
      </main>
      <div className="text">TEXT</div>
      <footer>я футер</footer>
    </div>
  );
};

export default App;
