import { useProfile } from "@/hooks/useProfile";
import React, { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

// import { useProfile, useRedux } from "../hooks/index";
// import { getCurrentUser } from "../redux/actions";

const AuthProtected = (props: any) => {
  const { userProfile, loading } = useProfile();
  //   const { dispatch } = useRedux();

  console.log(userProfile);

  const history = useNavigate();
  const location = useLocation();
  // console.log(userProfile);

  //   useEffect(() => {
  //     let tmo = setTimeout(() => {
  //       dispatch(getCurrentUser(history, location));
  //       clearTimeout(tmo);
  //     }, 0);
  //   }, []);

  /*
    redirect is un-auth access protected routes via url
  */
  if (!userProfile && loading) {
    return (
      // <Navigate to={{ pathname: "/auth-login"}} />
      <Navigate to={{ pathname: "/admin-portal/login" }} />
    );
  }

  if (!sessionStorage.getItem("accessToken")) {
    return <Navigate to={{ pathname: "/admin-portal/login" }} />;
  }

  //   if (userProfile && !userProfile.verified) {
  //     return <Navigate to={{ pathname: "/auth-login" }} />;
  //   }

  return <>{props.children}</>;
};

export { AuthProtected };
