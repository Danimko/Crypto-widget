import { Header } from "../Header/index";
import { Home } from "../Home/index";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <Home />
      </div>
    </>
  );
};
