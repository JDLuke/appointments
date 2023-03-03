import React, {useState} from "react";

export const CustomerForm = ({original, onSubmit}) => {
  const [customer, setCustomer] = useState(original);
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(customer);
  }
  const handleChangeField = ({target}) => setCustomer((customer) => ({...customer, [target.name]: target.value}));

  return (<form onSubmit={handleSubmit}>
    <label htmlFor="firstName">First name</label>
    <input type="text" id="firstName" name="firstName" value={customer.firstName} onChange={handleChangeField}/>
    <label htmlFor="lastName">Last name</label>
    <input type="text" id="lastName" name="lastName" value={customer.lastName} onChange={handleChangeField}/>
    <label htmlFor="phoneNumber">Telephone Number</label>
    <input type="text" id="phoneNumber" name="phoneNumber" value={customer.phoneNumber} onChange={handleChangeField} />
    <input type="submit" value="Add"/>
  </form>)
};