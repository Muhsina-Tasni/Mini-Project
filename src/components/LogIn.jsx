import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { login } from "../redux/slice";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //  check the user and redirect to the specific routes
  const { isAuthenticated, user } = useSelector((state) => state.slice);
  if (isAuthenticated && user?.role === "admin") {
    return <Navigate to="/admin" />;
  }

  if (isAuthenticated && user?.role !== "user") {
    return <Navigate to="/user" />;
  }

  // function when the form  submit navigate to specific routes
  const handleSubmit = (e) => {
    e.preventDefault();
    const userName = e.target.userName.value;
    // console.log(userName);
    const password = e.target.password.value;
    // console.log(password);

    if (userName === "admin" && password === "12345") {
      dispatch(login({ userName, role: "admin" }));
      navigate("/admin");
    } else if (userName === "user" && password === "12345") {
      dispatch(login({ userName, role: "user" }));
      navigate("/user");
    } else {
      alert("invalid credential");
    }
  };

  return (
    <>
      <div className="login-container flex justify-center items-center h-screen">
        <div className="bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')] bg-cover bg-center rounded-lg flex justify-center items-center overflow-hidden w-full max-w-4xl py-15    ">
          {/* Left Side - Login Form */}
          <div className="w-full md:w-1/2  p-8 bg-black/70 rounded-lg text-white   ">
            <p className="mb-7">
              Welcome! Please fill in your username and password to sign into
              your account.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="flex items-center my-5">
                {/* input forthe username */}
                <input
                  required
                  type="text"
                  name="userName"
                  placeholder="Your Name"
                  className="w-full bg-black/40 text-white focus:outline-none placeholder-white p-2 rounded"
                />
              </div>

              <div className="flex items-center my-5">
                {/* input to the password*/}
                <input
                  required
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="w-full bg-black/40 text-white  placeholder-white p-2 rounded"
                />
              </div>
              {/* button to submit the form */}
              <button
                type="submit"
                className="bg-gray-800 cursor-pointer   text-white font-semibold px-6 py-2 rounded-full hover:bg-gray-600 transition"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
