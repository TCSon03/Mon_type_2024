import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { User } from "../interfaces/User";
import instance from "../apis";
import { Link, useNavigate } from "react-router-dom";

import bgr from "../assets/banner-3.png";
import { useState } from "react";

type Props = {
  isLogin?: boolean;
};

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(255),
  // confirmPass: z.string().min(6).max(255),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(255),
});

const AuthForm = ({ isLogin }: Props) => {
  const [login, setLogin] = useState(true);
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<User>({
    resolver: zodResolver(isLogin ? loginSchema : registerSchema),
  });
  const nav = useNavigate();

  const onSubmit = async (user: User) => {
    if (isLogin) {
      const { data } = await instance.post("/login", user);
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("user", JSON.stringify(data.user));
      nav("/");
    } else {
      await instance.post("/register", user);
      nav("/login");
    }
  };
  return (
    <body className="body-form">
      <form className="auform" onSubmit={handleSubmit(onSubmit)}>
        {/* <div className="backround-form"> */}
        {/* <img src="" alt="" /> */}
        <div className="main-form">
          <h1>{isLogin ? "Login" : "Register"}</h1>
          <div className="mb-3 box-item">
            <label htmlFor="email" className="form-label">
              Email :
            </label>
            <input
              className="form-control"
              placeholder="Eg: abc@gmail.com"
              type="text"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <div className="text-warning">{errors.email.message}</div>
            )}
          </div>
          <div className="mb-3 box-item">
            <label className="form-label" htmlFor="password">
              Password :
            </label>
            <input
              className="form-control"
              placeholder="Eg: abc"
              type="password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-warning">{errors.password.message}</span>
            )}
          </div>

          {/* {!isLogin && (
            <div className="mb-3">
              <label htmlFor="confirmPass" className="form-label">
                Confirm Password
              </label>
              <input
                className="form-control"
                type="password"
                {...register("confirmPass", { required: true })}
              />
              {errors.confirmPass && (
                <span className="text-warning">{errors.confirmPass.message}</span>
              )}
            </div>
          )} */}

          <div className="mb-3 box-item">
            <button className="b">{isLogin ? "Login" : "Register"}</button>
          </div>
          <div>
            <p>
              Bạn có muốn chuyển trang?{" "}
              <Link
                className="link"
                to={isLogin ? "/register" : "/login"}
                onClick={() => setLogin(!isLogin)}
              >
                {isLogin ? "Register" : "Login"}
              </Link>
            </p>
            <p>
              Bạn có muốn chuyển trang?{" "}
              <Link className="link" to="/">
                Home
              </Link>
            </p>
          </div>
        </div>
      </form>
    </body>
  );
};

export default AuthForm;
