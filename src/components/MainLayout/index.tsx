import { Header } from "../Header";
import { Home } from "../Home";

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
