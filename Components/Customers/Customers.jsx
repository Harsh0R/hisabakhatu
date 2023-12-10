import React from "react";

const Customers = ({ formData }) => {
  return (
    <div>
      <h2>Customer Details</h2>
      <p>Party Name: {formData.partyName}</p>
      <p>Phone Number: {formData.phoneNumber}</p>
      <p>Amount: {formData.amount}</p>
      <p>Transaction Type: {formData.transactionType}</p>
    </div>
  );
};

export default Customers;
