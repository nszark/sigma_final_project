// Importing the "useForm" hook from the "react-hook-form" library.
import { useForm } from "react-hook-form";

// Creating a functional component called "Form".
function Form() {
  
  // Destructuring the properties of "useForm" hook.
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur", // Setting the mode of the form to onBlur
  });

  // Defining a function to handle the form submission.
  const onSubmit = (data) => {
    localStorage.setItem("firstName", data.firstName); // Saving the value of "firstName" input field to local storage.
    localStorage.setItem("surName", data.surName); // Saving the value of "surName" input field to local storage.
    localStorage.setItem("email", data.email); // Saving the value of "email" input field to local storage.
    reset(); // Clearing the form fields.
  };

  // Rendering the form.
  return (
    <div id="form" className="form">
      <div className="form__wrapper _container">
        <h2>DON’T FORGET TO SIGN UP</h2>
        <section></section>
        <p>
          Find out early about all upcoming promotions and new product releases with <br /> our
          newsletter.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="form__block-form">
          <div>
            <div className="form__first-form">
              <input
                {...register("firstName", {
                  pattern: /^[A-Z][a-z]+$/, // Validating the input field using a regular expression.
                  required: "The field is required", // Displaying an error message if the field is left empty.
                })}
                className={!errors?.firstName ? "form__input" : "form__input__error"} // Displaying the error message if there"s any.
                type="text"
                placeholder = "Enter your name....."
              />

              <div className="form__errors">
                {errors?.firstName && <p>{errors?.firstName?.message || "Error!"}</p>}
              </div>
            </div>

            <div className="form__first-form">
              <input
                {...register("surName", {
                  pattern: /^[A-Z][a-z]+$/, // Validating the input field using a regular expression.
                  required: "The field is required", // Displaying an error message if the field is left empty.
                })}
                className={!errors?.surName ? "form__input" : "form__input__error"} // Displaying the error message
                type="text"
                placeholder = "Enter your surname....."
              />
              <div className="form__errors">
                {errors?.surName && <p>{errors?.surName?.message || "Error!"}</p>}
              </div>
            </div>
          </div>

          <input
            {...register("email", {
              pattern:
                /^[-a-z0-9!#$%&"*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&"*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/,
              required: "The field is required",
            })}
            className={errors?.email ? "form__input_email__error" : "form__input_email"}
            type="text"
            placeholder = "Enter your e-mail....."
          />
          <div className="form__errors">
            {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
          </div>
          <br />

          <input
            disabled={!isValid}
            className={isValid ? "form_buttom" : "form_buttom__disable"}
            type="submit"
            value={"SUBSCRIBE"}
          />
        </form>
      </div>
    </div>
  );
}

export default Form;
