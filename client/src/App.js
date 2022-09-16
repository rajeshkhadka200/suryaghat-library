import React, { useEffect, useState } from "react";
import Loder from "./Utilities/Loder";
import Loadable from "react-loadable";
import Cookies from "js-cookie";
import ContexStoreWrapper from "./ContexStore/ContexStore";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Styles/Global/GlobalStyle.css";
import AdminProfile from "./Admin/AdminPages/AdminProfile";
import PopupFeels from "./Utilities/PopupFeels";
import FeelingCard from "./Utilities/StaticContents/FeelingCard";
import AdminSearch from "./Admin/AdminPages/AdminSearch";

const HomePage = Loadable({
  loader: () => import("./Pages/HomePage"),
  loading: () => (
    <div>
      <Loder />
    </div>
  ),
});
const StorePage = Loadable({
  loader: () => import("./Pages/StorePage"),
  loading: () => (
    <div>
      <Loder />
    </div>
  ),
});

const ShowStoreData = Loadable({
  loader: () => import("./Pages/ShowStoreData"),
  loading: () => (
    <div>
      <Loder />
    </div>
  ),
});
const Gallery = Loadable({
  loader: () => import("./Pages/Gallery"),
  loading: () => (
    <div>
      <Loder />
    </div>
  ),
});
const ItemDetails = Loadable({
  loader: () => import("./Pages/ItemDetails"),
  loading: () => (
    <div>
      <Loder />
    </div>
  ),
});
const Store = Loadable({
  loader: () => import("./Components/Store/Store.js"),
  loading: () => (
    <div>
      <Loder />
    </div>
  ),
});
const Profile = Loadable({
  loader: () => import("./Pages/Profile.js"),
  loading: () => (
    <div>
      <Loder />
    </div>
  ),
});
const Upload = Loadable({
  loader: () => import("./Pages/Upload.js"),
  loading: () => (
    <div>
      <Loder />
    </div>
  ),
});
const Login = Loadable({
  loader: () => import("./Pages/Login.js"),
  loading: () => (
    <div>
      <Loder />
    </div>
  ),
});
const About = Loadable({
  loader: () => import("./Pages/About.js"),
  loading: () => (
    <div>
      <Loder />
    </div>
  ),
});
const ShowImg = Loadable({
  loader: () => import("./Pages/ShowImg"),
  loading: () => (
    <div>
      <Loder />
    </div>
  ),
});
const NotFound = Loadable({
  loader: () => import("./Pages/NoteFound"),
  loading: () => (
    <div>
      <Loder />
    </div>
  ),
});
const Report = Loadable({
  loader: () => import("./Pages/Report"),
  loading: () => (
    <div>
      <Loder />
    </div>
  ),
});
//admin

const AdminLogin = Loadable({
  loader: () => import("./Admin/AdminPages/AdminLogin"),
  loading: () => (
    <div>
      <Loder />
    </div>
  ),
});
const Dashboard = Loadable({
  loader: () => import("./Admin/AdminPages/Dashboard"),
  loading: () => (
    <div>
      <Loder />
    </div>
  ),
});
const Commingsoon = Loadable({
  loader: () => import("./Admin/AdminPages/Commingsoon"),
  loading: () => (
    <div>
      <Loder />
    </div>
  ),
});
//user page in admin
const User = Loadable({
  loader: () => import("./Admin/AdminPages/User"),
  loading: () => (
    <div>
      <Loder />
    </div>
  ),
});
const AddAdmin = Loadable({
  loader: () => import("./Admin/AdminPages/AddAdmin"),
  loading: () => (
    <div>
      <Loder />
    </div>
  ),
});
const AdminProducts = Loadable({
  loader: () => import("./Admin/AdminPages/AdminProduct"),
  loading: () => (
    <div>
      <Loder />
    </div>
  ),
});
const VerifyImages = Loadable({
  loader: () => import("./Admin/AdminPages/VerifyImages"),
  loading: () => (
    <div>
      <Loder />
    </div>
  ),
});
const NotifRedirect = Loadable({
  loader: () => import("./Admin/AdminPages/RedirectNotif"),
  loading: () => (
    <div>
      <Loder />
    </div>
  ),
});
const EditDetails = Loadable({
  loader: () => import("./Pages/EditDetails"),
  loading: () => (
    <div>
      <Loder />
    </div>
  ),
});

//varification page imports
const Activate = Loadable({
  loader: () => import("./Admin/AdminPages/ActivationAdmin"),
  loading: () => (
    <div>
      <Loder />
    </div>
  ),
});

const App = () => {
  const AuthId = Cookies.get("__tcphbl30__");
  if (AuthId) {
    setInterval(() => {
      let newCookie = Cookies.get("__tcphbl30__");
      if (newCookie !== AuthId) {
        window.location.reload();
        Cookies.remove("__tcphbl30__");
      }
    }, 10000);
  }
  const [isPopup, setisPopup] = useState(false);
  const [emotion, setemotion] = useState("normal");

  const changeEmo = (props) => {
    setemotion(props);
    localStorage.setItem("theme", props);
    setisPopup(false);
  };

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      setemotion(currentTheme);
    }
  }, []);

  // AddFav(`${serverBaseURI}/hariBaba/api/uploads/Images/favicon.png`);
  // const favicon = document.querySelector("#favicons");
  // favicon.href = `${serverBaseURI}/hariBaba/api/uploads/Images/favicon.png`;

  //handle key press in application
  const url = window.location.href;
  let modelStatus = localStorage.getItem("model");

  if (modelStatus === null) {
    localStorage.setItem("model", "true");
  }
  return (
    <>
      <div
        className={url.includes("admin") ? "" : emotion}
        style={{ minHeight: "100vh" }}
      >
        <ContexStoreWrapper>
          <Router>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/contents" component={StorePage} />
              <Route
                exact
                path="/showstoredata/:title/:tablename"
                component={ShowStoreData}
              />
              <Route exact path="/details/:id/:type" component={ItemDetails} />
              <Route exact path="/store" component={Store} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/upload" component={Upload} />
              <Route exact path="/about" component={About} />
              <Route exact path="/store/gallery" component={Gallery} />
              <Route
                exact
                path="/edit/v1/type=contents/:editId/edits&&req=edit_data/:title"
                component={EditDetails}
              />
              <Route
                exact
                path="/store/gallery/:category"
                component={ShowImg}
              />
              <Route
                exact
                path="/bug/report/userreport/:id"
                component={Report}
              />

              {/*admin part*/}
              <Route
                exact
                path="/route/haribabalibrary/admin/login"
                component={AdminLogin}
              />
              <Route
                exact
                path="/route/haribabalibrary/admin/dashboard"
                component={Dashboard}
              />
              <Route
                exact
                path="/route/haribabalibrary/admin/dashboard/users"
                component={User}
              />
              <Route
                exact
                path="/route/haribabalibrary/admin/dashboard/products"
                component={AdminProducts}
              />
              <Route
                exact
                path="/route/haribabalibrary/admin/dashboard/addadministrator"
                component={AddAdmin}
              />
              <Route
                exact
                path="/route/haribabalibrary/admin/dashboard/adminprofile"
                component={AdminProfile}
              />
              <Route
                exact
                path="/route/haribabalibrary/admin/dashboard/soon"
                component={Commingsoon}
              />
              <Route
                exact
                path="/route/haribabalibrary/admin/dashboard/verifyimages"
                component={VerifyImages}
              />
              <Route
                exact
                path="/route/haribabalibrary/admin/dashboard/notifredirect/:notiftitle"
                component={NotifRedirect}
              />
              <Route
                exact
                path="/route/haribabalibrary/admin/dashboard/search"
                component={AdminSearch}
              />
              <Route
                exact
                path="/verifyyou/:queryString"
                component={Activate}
              />

              <Route exact path="*" component={NotFound} />
            </Switch>
          </Router>
        </ContexStoreWrapper>
        <PopupFeels setisPopup={setisPopup} isPopup={isPopup} />
        {isPopup && (
          <FeelingCard setisPopup={setisPopup} changeEmo={changeEmo} />
        )}
      </div>
    </>
  );
};
export default App;
