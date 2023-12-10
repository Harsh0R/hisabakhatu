import React from "react";
import images from "../../assets";
import Style from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div>
      {/* <nav
        id="sidebar"
        className="col-md-3 col-lg-2 d-md-block bg-dark sidebar"
      > */}
        <div>
          <h2 className={Style.customtext}>KHATABOOK</h2>
        </div>
        <div className="container">
          <div className={Style.custombackground}>
            <div className="row">
              <div className="col-md-4">
                <div className="my-div">
                  <img
                    className="mt-2"
                    src={images.avatar}
                    alt="Logo"
                    width={50}
                    height={50}
                  ></img>
                </div>
              </div>
              <div className="col-md-8">
                <div className="my-div text-white fw-bolder">My Business</div>
                <div className="my-div text-white fw-bolder">9737901892</div>
                <div className="my-div text-success fw-bolder">Online</div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-3">
          <div className={Style.custombackground}>
            <div className="text-white">
              <div>
                Explore demo account. Try all features with full details on
                bills, parties & items
              </div>
            </div>
            <div className="text-white">
              <button type="button" className="btn btn-primary btn-lg btn-block">
                View demo Account
              </button>
            </div>
          </div>
          <ul
            className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
            id="menu"
          >
            <li>
              <i className="fs-4 bi-speedometer2" />{" "}
              <span className="ms-1 d-none d-sm-inline text-primary fw-bolder">
                PARTIES
              </span>{" "}
              <ul
                className="collapse show nav flex-column ms-1"
                id="submenu1"
                data-bs-parent="#menu"
              >
                <li className="w-100">
                  <a href="#" className="nav-link px-0">
                    {" "}
                    <img src={images.buddy} height={25} width={25} alt="" />
                    <span className="d-none d-sm-inline ms-2">
                      Customers
                    </span>{" "}
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link px-0">
                    {" "}
                    <img src={images.hero} height={25} width={25} alt="" />
                    <span className="d-none d-sm-inline ms-2">
                      Suppliers
                    </span>{" "}
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <i className="fs-4 bi-speedometer2" />{" "}
              <span className="ms-1 d-none d-sm-inline text-primary fw-bolder">
                MANAGE INVENTORY
              </span>{" "}
              <ul
                className="collapse show nav flex-column ms-1"
                id="submenu1"
                data-bs-parent="#menu"
              >
                <li>
                  <a href="#" className="nav-link px-0">
                    {" "}
                    <img src={images.open} height={25} width={25} alt="" />
                    <span className="d-none d-sm-inline ms-2">Items</span>{" "}
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <i className="fs-4 bi-speedometer2" />{" "}
              <span className="ms-1 d-none d-sm-inline text-primary fw-bolder">
                BILLS
              </span>{" "}
              <ul
                className="collapse show nav flex-column ms-1"
                id="submenu1"
                data-bs-parent="#menu"
              >
                <li>
                  <a href="#" className="nav-link px-0">
                    {" "}
                    <img src={images.service1} height={25} width={25} alt="" />
                    <span className="d-none d-sm-inline ms-2">Sales</span>{" "}
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link px-0">
                    {" "}
                    <img src={images.service2} height={25} width={25} alt="" />
                    <span className="d-none d-sm-inline ms-2">
                      Purchase
                    </span>{" "}
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link px-0">
                    {" "}
                    <img src={images.service3} height={25} width={25} alt="" />
                    <span className="d-none d-sm-inline ms-2">
                      Expenses
                    </span>{" "}
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link px-0">
                    {" "}
                    <img src={images.case1} height={25} width={25} alt="" />
                    <span className="d-none d-sm-inline ms-2">
                      Casebook
                    </span>{" "}
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <i className="fs-4 bi-speedometer2" />{" "}
              <span className="ms-1 d-none d-sm-inline text-primary fw-bolder">
                OTHERS
              </span>{" "}
              <ul
                className="collapse show nav flex-column ms-1"
                id="submenu1"
                data-bs-parent="#menu"
              >
                <li>
                  <a href="#" className="nav-link px-0">
                    {" "}
                    <img src={images.service4} height={25} width={25} alt="" />
                    <span className="d-none d-sm-inline ms-2">
                      Reports
                    </span>{" "}
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link px-0">
                    {" "}
                    <img src={images.upadate} height={25} width={25} alt="" />
                    <span className="d-none d-sm-inline ms-2">Staff</span>{" "}
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link px-0">
                    {" "}
                    <img src={images.service1} height={25} width={25} alt="" />
                    <span className="d-none d-sm-inline ms-2">
                      Setting
                    </span>{" "}
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className={Style.customtext}></div>
      {/* </nav> */}
    </div>
  );
};

export default Sidebar;
