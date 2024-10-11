import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Start from "./Start";

function Menu({}) {
  const [text, setText] = useState(true);

  return (
    <div className="all">

        
        
      <ul className="ol">

      <h1 className="text">SOME<br></br> NAME</h1>
        
          <Link
            to="/"
            onClick={() => {
              setText(true);
            }}
          >
            PORTFOLIO
          </Link>

          <Link
            to="/component2"
            onClick={() => {
              setText(false);
            }}
          >
            ABOUT ME
          </Link>

          <Link
            to="/component3"
            onClick={() => {
              setText(false);
            }}
          >
           CONTACT
          </Link>
        
      </ul>

      {text ? <Start /> : <Outlet />}
    </div>
  );
}

export default Menu;