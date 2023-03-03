import React, {useState} from "react";

export const CustomerForm = ({original, onSubmit}) => {
  const [customer, setCustomer] = useState(original);
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(customer);
  }
  const handleChangeFirstName = ({target}) => setCustomer((customer) => ({...customer, firstName: target.value}));
  const handleChangeLastName = ({target}) => setCustomer((customer) => ({...customer, lastName: target.value}));

  return (<form onSubmit={handleSubmit}>
    <label htmlFor="firstName">First name</label>
    <input type="text" id="firstName" name="firstName" value={customer.firstName} onChange={handleChangeFirstName}/>
    <label htmlFor="lastName">Last name</label>
    <input type="text" id="lastName" name="lastName" value={customer.lastName} onChange={handleChangeLastName}/>
    <input type="submit" value="Add"/>
  </form>)
};