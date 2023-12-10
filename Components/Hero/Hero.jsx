import React, { useEffect, useState, useContext } from "react";
import images from "../../assets";
import Sidebar from "../Sidebar/Sidebar";
import Customers from "../Customers/Customers";

const Hero = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [isData, setIsData] = useState(false);
  // State to store form data
  const [formData, setFormData] = useState({
    partyName: "",
    phoneNumber: "",
    amount: "",
    transactionType: "",
  });
  // Function to update formData state
  const updateFormData = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleFormSubmit = () => {
    // Pass the form data to Customers component
    // You can also perform any additional logic or validation here
    setIsData(true);
    console.log("Form data submitted:", formData);
  };

  return (
    <>
      <div>
        <div className="container-fluid overflow-auto ">
          <main className="row">
            {/* Sidebar */}
            <div
              id="sidebar"
              className="col-md-3 col-lg-2 d-md-block bg-dark sidebar"
            >
              <Sidebar></Sidebar>
            </div>

            {/* Main content */}
            <div className="col-md-9 ms-sm-auto col-lg-5 px-md-4">
              <div className="text-black"></div>
              <div className="border border-primary rounded p-3">
                <div className="btn-group btn-group-justified">
                  <button
                    className="btn btn-primary m-2"
                    onClick={() => {
                      setOpen1(true);
                      setOpen2(false);
                    }}
                  >
                    Customers
                  </button>
                  <button
                    className="btn btn-primary m-2"
                    onClick={() => {
                      setOpen2(true);
                      setOpen1(false);
                    }}
                  >
                    Suppliers
                  </button>
                </div>
                {open2 && (
                  <div className="border border-primary rounded p-3">
                    <img src={images.friends} alt="" width={400} height={400} />
                    <div>No supplier data available</div>
                    <div>Add supplier and maintain your daily khata</div>
                    <div className="btn-group btn-group-justified">
                      <button className="btn btn-primary m-2">
                        <img
                          src={images.create2}
                          alt=""
                          width={20}
                          height={20}
                        />
                        Bulk Upload Customers
                      </button>
                      <button className="btn btn-primary m-2">
                        <img
                          src={images.create2}
                          alt=""
                          width={20}
                          height={20}
                        />
                        Add Supplier
                      </button>
                    </div>
                  </div>
                )}

                {open1 && (
                  <div className="border border-primary rounded p-3">
                    {!isData && (
                      <div>
                        <img
                          src={images.friends}
                          alt=""
                          width={400}
                          height={400}
                        />
                        <div>No customer data available</div>
                        <div>Add customer and maintain your daily khata</div>
                        <div className="btn-group btn-group-justified">
                          <button className="btn btn-primary m-2">
                            <img
                              src={images.create2}
                              alt=""
                              width={20}
                              height={20}
                            />
                            Bulk Upload Customers
                          </button>
                          <button
                            className="btn btn-primary m-2"
                            onClick={() => {
                              setOpenSidebar(!openSidebar);
                              console.log("open = ", openSidebar);
                            }}
                          >
                            <img
                              src={images.create2}
                              alt=""
                              width={20}
                              height={20}
                            />
                            Add Customers
                          </button>
                        </div>
                      </div>
                    )}
                    {isData &&  <Customers formData={formData} />}
                  </div>
                )}
              </div>
            </div>

            <div className="col-md-9 ms-sm-auto col-lg-5 px-md-4">
              {openSidebar && (
                <div>
                  <form>
                    <div className="container mt-5">
                      <h2>Party Name:</h2>
                      <div className="mb-5">
                        <input
                          type="text"
                          className="form-control"
                          name="partyName"
                          id=""
                          onChange={(e) =>
                            updateFormData("partyName", e.target.value)
                          }
                        />
                      </div>
                      <h2>Phone Number:</h2>
                      <div className="mb-5">
                        <input
                          type="number"
                          className="form-control"
                          name="phoneNumber"
                          id=""
                          onChange={(e) =>
                            updateFormData("phoneNumber", e.target.value)
                          }
                        />
                      </div>
                      <h2>Amount:</h2>
                      <div className="mb-5">
                        <input
                          type="number"
                          className="form-control"
                          name="amount"
                          id=""
                          onChange={(e) =>
                            updateFormData("amount", e.target.value)
                          }
                        />
                        <div className="container mt-2">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="transactionType"
                              id="give"
                              onChange={() =>
                                updateFormData("transactionType", "Give")
                              }
                            />
                            <label className="form-check-label" htmlFor="give">
                              Give
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="transactionType"
                              id="get"
                              onChange={() =>
                                updateFormData("transactionType", "Get")
                              }
                            />
                            <label className="form-check-label" htmlFor="get">
                              Get
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>

                  <div className="border border-primary rounded p-3 mt-5">
                    {/* Pass the updateFormData function to handle changes in the form */}
                    <button
                      className="btn btn-primary"
                      onClick={handleFormSubmit}
                    >
                      Add Customers
                    </button>
                  </div>
                </div>
              )}

              {/* Pass the formData to the Customers component */}
              {/* <Customers formData={formData} /> */}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Hero;
