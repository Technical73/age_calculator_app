import image from "../assets/Images/icon-arrow.svg";
import { useState, useRef } from "react";

const MainComponent = () => {
  {
    /* Data state Variable Starts from here */
  }
  const [data, setData] = useState({
    day: "",
    month: "",
    year: "",
  });
  {
    /* Data state Variable Ends here */
  }
  {
    /* Errors state Variable Starts from here */
  }
  const [errors, setError] = useState({
    day: "",
    month: "",
    year: "",
  });
  {
    /* Errors state Variable Ends here */
  }
  const dayRef = useRef(null);
  const monthRef = useRef(null);
  const yearRef = useRef(null);

  {
    /* handleChange Function Starts from here */
  }
  const handleChange = (e) => {
    const { name, value } = e.target;

    setError((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Move focus to the next input field if two digits are entered
    if (value.length === 2 && value !== "0" && value !== "00") {
      switch (name) {
        case "day":
          monthRef.current.focus();
          break;
        case "month":
          yearRef.current.focus();
          break;
        default:
          break;
      }
    }
  };

  {
    /* handleChange Function Ends here */
  }
  {
    /* onSubmit function Starts from here */
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    setError({
      day: "",
      month: "",
      year: "",
    });

    let hasErrors = false;

    if (data.day === "" || data.day === undefined) {
      setError((prevErrors) => ({
        ...prevErrors,
        day: "must be a valid dd",
      }));
      hasErrors = true;
    }

    if (data.month === "" || data.month === undefined) {
      setError((prevErrors) => ({
        ...prevErrors,
        month: "must be a valid mm",
      }));
      hasErrors = true;
    }

    if (data.year === "" || data.year === undefined) {
      setError((prevErrors) => ({
        ...prevErrors,
        year: "must be a valid yyyy",
      }));
      hasErrors = true;
    }

    if (hasErrors) {
      return;
    }

    const birthDate = new Date(`${data.year}-${data.month}-${data.day}`);
    const currentDate = new Date();
    const timeDiff = Math.abs(currentDate.getTime() - birthDate.getTime());
    const age = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25));

    setData({
      ...data,
      age: age,
    });

    setError({
      day: "",
      month: "",
      year: "",
    });

    // Clear input fields
    dayRef.current.value = "";
    monthRef.current.value = "";
    yearRef.current.value = "";
    dayRef.current.focus();
    console.log("button is clicked");
  };
  {
    /* onSubmit function Ends here */
  }

  return (
    <>
      {/* Main Container Starts from here */}
      <div className="flex justify-center items-center font-customFonts min-w-full px-4 md:px-0  min-h-screen bg-primaryBg">
        {/* Box Container Starts from here*/}
        <div className="lg:w-lgBoxContainer  bg-boxBg  md:w-mdBoxContainer rounded-customBoxRadios md:py-5 md:px-5 px-3 py-3">
          {/* Form Starts from here */}
          <form onSubmit={handleSubmit}>
            {/* Input Group Start from here*/}
            <div className="flex flex-row justify-start  align-baseline">
              {/* Day Input Starts from here */}
              <div className=" lg:mr-6 md:mr-6 mr-3">
                <label
                  htmlFor="day"
                  className={`text-customLabelSubSize mb-2  font-bold ${
                    errors?.day ? "text-customErrorColor" : "text-gray-500"
                  }`}
                >
                  D A Y
                </label>
                <br />
                <input
                  type="number"
                  placeholder="DD"
                  name="day"
                  onChange={handleChange}
                  ref={dayRef}
                  className={`shadow md:text-mdCustomInputsSize text-defaultFontSmall px-2 py-2  font-bold focus:outline-none focus:shadow-outline leading-tight md:w-28 w-24 ${
                    errors.day ? "border border-customErrorColor" : ""
                  }`}
                />
                <p className="text-customErrorColor text-customErrorSize mt-2">
                  {errors?.day}
                </p>
              </div>
              {/* Day Input Ends here */}

              {/* Month Input Starts from here */}
              <div className=" lg:mr-6 md:mr-6 mr-3">
                <label
                  htmlFor="month"
                  className={`text-customLabelSubSize  mb-2 font-bold ${
                    errors?.month ? "text-customErrorColor" : "text-gray-500"
                  }`}
                >
                  M O N T H
                </label>
                <br />
                <input
                  type="number"
                  name="month"
                  onChange={handleChange}
                  placeholder="MM"
                  ref={monthRef}
                  className={`shadow md:text-mdCustomInputsSize text-defaultFontSmall px-2 py-2 font-bold focus:outline-none focus:shadow-outline leading-tight md:w-28 w-24 ${
                    errors.month ? "border border-customErrorColor" : ""
                  }`}
                />

                <p className="text-customErrorColor text-customErrorSize mt-2">
                  {errors?.month}
                </p>
              </div>
              {/* Month Input Ends here */}

              {/* Year Input Starts from here */}
              <div>
                <label
                  htmlFor="year"
                  className={`text-customLabelSubSize mb-2 font-bold ${
                    errors?.year ? "text-customErrorColor" : "text-gray-500"
                  }`}
                >
                  Y E A R
                </label>
                <br />
                <input
                  type="number"
                  placeholder="YYYY"
                  name="year"
                  ref={yearRef}
                  onChange={handleChange}
                  className={`shadow md:text-mdCustomInputsSize text-defaultFontSmall px-2 py-2 font-bold focus:outline-none focus:shadow-outline leading-tight md:w-28  w-24 ${
                    errors.year ? "border border-customErrorColor" : ""
                  }`}
                />

                <p className="text-customErrorColor text-customErrorSize mt-2">
                  {errors?.year}
                </p>
              </div>
              {/* Year Input Ends here */}
            </div>
            {/* Input Group End here */}

            {/* Submit Button Starts from here */}
            <div className="lg:text-right md:text-right text-center md:my-5 my-5 ">
              <button type="submit" className="cursor-pointer">
                <img
                  src={image}
                  className="w-16 h-16 rounded-customButtonRadius p-5 bg-customButtonBg hover:bg-black hover:text-white"
                />
              </button>
            </div>

            {/* Submit Button Ends here */}
          </form>
          {/* Form Ends here */}
          {/* Group of Results Starts from here */}
          <div className="flex flex-col justify-start items-start">
            <div>
              <h1 className="font-customWeight text-customBigHeading italic">
                <span className="font-customWeight text-customBigHeading text-customTextHeadingColor mr-3">
                  {data.age !== undefined ? data.age : "--"}
                </span>
                years
              </h1>
            </div>
            <div>
              <h1 className="font-customWeight text-customBigHeading italic">
                <span className="font-customWeight text-customBigHeading text-customTextHeadingColor mr-3">
                  {data.age !== undefined ? data.age * 12 : "--"}
                </span>
                months
              </h1>
            </div>
            <div>
              <h1 className="font-customWeight text-customBigHeading italic">
                <span className="font-customWeight text-customBigHeading text-customTextHeadingColor mr-3">
                  {data.age !== undefined ? data.age * 365 : "--"}
                </span>
                days
              </h1>
            </div>
          </div>

          {/* Group of Results Ends here */}
        </div>
        {/* Box Container Ends here*/}
      </div>
      {/* Main Container Ends  here */}
    </>
  );
};
export default MainComponent;