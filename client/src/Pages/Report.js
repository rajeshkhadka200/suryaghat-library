import { useHistory, useParams } from "react-router-dom";

const Report = () => {
  const history = useHistory();
  const { id } = useParams();
  const loc_id = localStorage.getItem("reports");
  if (id !== loc_id) {
    history.push("/");
  }
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

export default Report;
