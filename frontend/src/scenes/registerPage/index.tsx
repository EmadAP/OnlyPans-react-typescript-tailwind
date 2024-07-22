
import { useAuth } from '@/context/useAuth';
import { yupResolver } from '@hookform/resolvers/yup';

import { useForm } from 'react-hook-form';
import * as Yup from "yup";

type Props = {}

type RegisterFormsInputs = {
    email: string;
    userName: string;
    password: string;
};

const validation = Yup.object().shape({
    email: Yup.string().required("Email is required"),
    userName: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required")
});



const RegisterPage = (props: Props) => {
    const { registerUser } = useAuth();
    const { register, handleSubmit, formState: { errors }} = useForm<RegisterFormsInputs>({ resolver: yupResolver});

    const handleLogin = (form: RegisterFormsInputs) => {
        registerUser(form.userName, form.password, form.email);
    }
  return (
    <section >
   
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <div className="w-full bg-primary-300 rounded-lg shadow dark:border md:mb-20 sm:max-w-md xl:p-0 ">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-500 md:text-2xl ">
          Sign up in to your account
        </h1>
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(handleLogin)}>
        <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-500"
            >
              Email
            </label>
            <input
              type="text"
              
              id="email"
              className="bg-primary-100 border border-gray-300 text-gray-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="Email"
              {...register("email")}
            />
            {errors.email ? <p>{errors.email.message}</p> : ""}
          </div>
          <div>
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-500"
            >
              Username
            </label>
            <input
              type="text"
              
              id="username"
              className="bg-primary-100 border border-gray-300 text-gray-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="Username"
              {...register("userName")}
            />
            {errors.userName ? <p>{errors.userName.message}</p> : ""}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-500 "
            >
              Password
            </label>
            <input
              type="password"
              
              id="password"
              placeholder="••••••••"
              className="bg-primary-100 border border-gray-300 text-gray-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              {...register("password")}
            />
            {errors.password ? <p>{errors.password.message}</p> : ""}
          </div>
          <div className="flex items-center justify-between">
          
          </div>
          <button
            type="submit"
            className="w-full text-gray-500 bg-secondary-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            Sign up
          </button>
         
        </form>
      </div>
    </div>
  </div>
</section>
  )
}

export default RegisterPage