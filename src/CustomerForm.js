import React from "react";
export const CustomerForm = ({original}) => (<form >
  <label htmlFor="firstName" />
  <input type="text" name="firstName" value={original.firstName} readOnly/>
  </form>);