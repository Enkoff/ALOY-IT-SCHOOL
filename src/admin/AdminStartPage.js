import React from "react";
import { useSelector } from "react-redux";

import HomePage from "../Pages/HomePage/Home-page";
import AddPage from './add-page/AddPage';

const AdminStartPage = (props) => {
  const role = useSelector((store) => store.userReducer.role);
  return <>{role === 'admin' ? <AddPage /> : <HomePage />}</>;
};

export default AdminStartPage;
