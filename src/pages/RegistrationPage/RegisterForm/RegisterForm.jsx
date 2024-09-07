
import { useForm } from "react-hook-form";
import Button from "../../../components/shared/Button/Button";
const commonInputClassName =
  "py-2 px-3 border border-blue-400 rounded-md focus:outline-none transition duration-300";
const inputParentClassName = "flex flex-col gap-1 text-lg mb-3 ";

const RegisterForm = () => {
  const { register, handleSubmit, errors } = useForm();

  // Handle form submission
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Name */}
      <div className={inputParentClassName}>
        <label>Name:</label>
        <input
          {...register("name")}
          required
          type="text"
          placeholder="Your Name"
          className={commonInputClassName}
        />
      </div>

      {/* Email */}
      <div className={inputParentClassName}>
        <label>Email:</label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Entered value does not match email format",
            },
          })}
          type="email"
          placeholder="Your Email"
          className={commonInputClassName}
          required
        />
        {errors?.email && (
          <span className="text-red-500">{errors?.email.message}</span>
        )}
      </div>

      {/* Password */}
      <div className={inputParentClassName}>
        <label>Password:</label>
        <input
          {...register("password")}
          required
          type="password"
          placeholder="Password"
          className={commonInputClassName}
        />
      </div>

      {/* Submit Button */}
      <div>
        <Button customClass="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
          Register
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
