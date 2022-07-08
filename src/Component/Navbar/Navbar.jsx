import React from "react";
import { FaGift,FaBell,FaUserCircle, } from 'react-icons/fa';
import {BsGift,BsBell} from 'react-icons/bs'

import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-main">
        <div className="container-fluid">
          <a className="navbar-brand logo" href="#">
          DRAMATIC
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse navbar-menu" id="navbarSupportedContent" >
            <ul className="navbar-nav  mb-2 mb-lg-0 d-flex" style={{gap : "37px" ,whiteSpace: "nowrap"}}>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  TV SHOW
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  MOVIES
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  NEW
                </a>
              </li>
  
            </ul>
            <form className="d-flex form-main" style={{marginLeft : "127px",marginRight : "55px"}}>
              <input
                className="form-control me-2 search-main"
                type="Search"
                placeholder="SEARCH"
                // aria-label="Search"
              />
              {/* <button className="btn btn-outline-success" type="submit">
                Search
              </button> */}
            </form>
            <div className="d-flex" style={{gap : "41px" ,alignItems : "center"}}>
            {/* <FaGift color="white" fontSize ="30px"/> */}
            <BsGift color="white" size={30}/>
           <BsBell color="white" size={30} />
            <FaUserCircle color="white" fontSize="54px"/>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
