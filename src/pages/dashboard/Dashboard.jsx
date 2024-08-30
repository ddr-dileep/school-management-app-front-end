import React, { useEffect, useState } from "react";
import { isAuthenticated } from "../../utils";
import { useNavigate } from "react-router-dom";
import authApiServices from "../../redux/services/authServices";
import { useDispatch, useSelector } from "react-redux";
import "./styles.scss";
import { toast } from "react-toastify";
import { AppLoader, PageTitle, Toastify } from "../../components";
import DetailsView from "./component/DetailsView";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticatedUser = isAuthenticated();
  const { user, error } = useSelector((state) => state?.user);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticatedUser) {
      navigate("/login-super-admin");
    }

    setTimeout(() => {
      dispatch(authApiServices.getSuperAdminInfo());
      setIsLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    if (error?.errors?.errorMessage) {
      toast.dismiss();
      toast.error(error?.errors?.errorMessage);
    }
  }, [error]);

  return (
    <div className="user_dashboard">
      <PageTitle title="Super Admin- dashboard" />
      {isLoading && <AppLoader />}
      <Toastify />
      <DetailsView />
    </div>
  );
};

export default Dashboard;
