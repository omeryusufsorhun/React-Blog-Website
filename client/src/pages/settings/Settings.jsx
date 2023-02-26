import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.css";
import { Context } from "./../../context/Context";
import { useContext, useState } from "react";

import axios from "axios";
export default function Settings() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
    console.log(PF + user.profilePic);
  };
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your account</span>
          <span className="settingsDeleteTitle">Delete your account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={file ? URL.createObjectURL(file) : PF + user.profilePic}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{
                display: "none",
                textAlign: "center",
                marginTop: "20px",
              }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="settingsSubmit">
            Update
          </button>
          {success && (
            <span style={{ color: "green" }}>Profile has been updated</span>
          )}
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
