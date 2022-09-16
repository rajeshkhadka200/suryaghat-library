import Cookies from "js-cookie";
import { useContext } from "react";
import { useHistory } from "react-router";
import { ContexStore } from "../../ContexStore/ContexStore";

const Check = () => {
  const { admin } = useContext(ContexStore);
  const { is_super } = admin;
  let history = useHistory();
  const isAdmin = Cookies.get("__tcphblad__");

  if (!isAdmin || is_super === "false") {
    history.push("/route/haribabalibrary/admin/login");
  }
};

export const AddFav = (icon) => {
  const favicon = document.querySelector("#favicons");
  favicon.href = icon;
};

export default Check;
