import logo from "../img/logo.png"

const Header =() => {
  return (
      <div className="headersec">
          <div className="container">
              <div className="row justify-content-between align-items-center">
                  <div className="col-md-3">
                      <div className="logo">
                          <img src={logo} alt="logo" />
                      </div>
                  </div>
                  <div className="col-md-9">
                      <div className="navitem">
                          <ul>
                              <li><a href="#">Home</a></li>
                              <li><a href="#">About</a></li>
                              <li><a href="#">Contact</a></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
};


export default Header;