import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { login } from "../Redux/slice";

const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(1, "test");

    const userName = e.target.userName.value;
    console.log(userName);

    const password = e.target.password.value;
    console.log(password);

    if (userName === "admin" && password === "12345") {
    
      dispatch(login({ userName,role:'admin' }));
      navigate("/admin");
    } else if(userName === "user" && password === "12345"){
      dispatch(login({userName,role:'user'}));
      navigate("/user")
    }else{
      alert("invalid credential")
    }
    }


  return (
    <div className="py-20 ">
      <h2 className="text-primary text-center  text-5xl font-bold py-10">
        login form
      </h2>
      <form className="text-center mt-3 " onSubmit={handleSubmit}>
        <div className="mb-3">
          <input required
            type="text"
            name="userName"
            placeholder="user name"
            className=" form-control border-2"
          />
        </div>
        <div className="">
          <input required
            type="password"
            name="password"
            placeholder="password"
            className=" form-control border-2"
          />
        </div>
        

        <button  type="submit"   className="my-5 bg-blue-800 text-white text-sm px-4 py-1 w-50 hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
}

export default LogIn;
