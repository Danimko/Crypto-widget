export const Navbar = () => {
  const tabs = [
    {
      id: 0,
      name: "BTC - USD",
      index: 0,
      active: false,
    },
    { id: 1, name: "ETH - USD", index: 1, active: false },
    { id: 2, name: "OMG - RUB", index: 2, active: true },
    { id: 3, name: "LTC - USD", index: 3, active: false },
    { id: 4, name: "KNC - USD", index: 4, active: false },
    { id: 5, name: "LSK - USD", index: 5, active: false },
    { id: 6, name: "BCC - USD", index: 6, active: false },
  ];
  return (
    <nav className={"navbar"}>
      <h1>Popular pairs</h1>
      {tabs.map((tab) => (
        <div className={`${tab.active ? "active" : ""}`} key={tab.id}>
          {tab.name}
        </div>
      ))}
    </nav>
  );
};
