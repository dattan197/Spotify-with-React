import { useDispatch } from "react-redux";

const LogOut = () => {
  const dispatch = useDispatch();

  return (
    <li
      className="list-item btn"
      onClick={() =>
        dispatch({
          type: "LOG_OUT",
        })
      }
    >
      Logout
    </li>
  );
};

export default LogOut;
