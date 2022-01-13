import logo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <header className="d-flex py-3 mb-4 align-items-center border-bottom">
      <img src={logo} alt="Currency Logo" style={{ height: "60px" }} />
      <h1 className="display-4" style={{ marginLeft: "2rem" }}>
        Przelicznik walut
      </h1>
    </header>
  );
};

export default Header;
