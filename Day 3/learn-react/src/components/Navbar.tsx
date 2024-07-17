/** @format */

import { INavbar } from "../interfaces/navbar.props";

export default function Navbar(props: INavbar) {
  return (
    <>
      <div className="navbar">
        {props.logo}
        <span
          style={{
            color: "green",
            marginLeft: "10px",
          }}
        >
          {props.menu1}
        </span>

        <a href="/">HOME</a>
        <a href="/about">ABOUT</a>
        <a href="/profile/jordan">jordan</a>
        <a href="/profile/danjor">danjor</a>
      </div>
    </>
  );
}
