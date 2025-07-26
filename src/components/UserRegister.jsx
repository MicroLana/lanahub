import { useState } from "react";
import { db, storage } from "../firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
import CustomSelect from "../components/CitySelect";
import { useAuth } from "../context/AuthContext";

function RegisterForm() {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "client",
    fullName: "",
    surname: "",
    city: "",
    suburb: "",
  });
  const cityOptions = [
    { value: "Harare", label: "Harare" },
    { value: "Mutare", label: "Mutare" },
    { value: "Gweru", label: "Gweru" },
  ];
  const SuburbOptions = [
    { value: "Avondale", label: "Avondale" },
    { value: "Borrowdale", label: "Borrowdale" },
    { value: "Chisipite", label: "Chisipite" },
  ];
  const [registerMsg, setRegisterMsg] = useState(null);
  const [registerMsgClass, setRegisterMsgClass] = useState("text-red-500");
  const { register, user } = useAuth();
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userDoc = {
        mobile: formData.phoneNumber,
        email: formData.email,
        password: formData.password,
        role: formData.userType,
        fullName: formData.fullName,
        surName: formData.surname,
        city: formData.city,
        suburb: formData.suburb,
        createdAt: new Date().toISOString(),
      };
      await register(userDoc);
      console.log("User registered successfully" + (await user));
      setRegisterMsg("User Registered Successfully. Please Login.");
      setRegisterMsgClass("text-green-500");
    } catch (err) {
      setRegisterMsg("User registration failed. Please try again.");
    }
  };

  // Validation helpers
  const nameRegex = /^[A-Za-z\s]{1,20}$/;
  const phoneRegex = /^\d{1,15}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validation state
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  // Validate fields on change
  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "fullName":
      case "surname":
      case "city":
      case "suburb":
        if (!nameRegex.test(value)) {
          error = "Only letters and spaces, max 20 chars.";
        }
        break;
      case "phoneNumber":
        if (!phoneRegex.test(value)) {
          error = "Only numbers, max 15 digits.";
        }
        break;
      case "email":
        if (!emailRegex.test(value) || value.length > 30) {
          error = "Invalid email format or too long (max 30 chars).";
        }
        break;
      case "password":
        if (!value) {
          error = "Password is required.";
        } else if (value.length < 6) {
          error = "Password must be at least 6 characters.";
        } else if (
          formData.confirmPassword &&
          formData.confirmPassword !== value
        ) {
          // Update confirmPassword error too
          setErrors((prev) => ({
            ...prev,
            confirmPassword: "Passwords do not match.",
          }));
        } else {
          // Clear confirmPassword error if matches
          setErrors((prev) => ({
            ...prev,
            confirmPassword: "",
          }));
        }
        break;
      case "confirmPassword":
        if (!formData.password) {
          error = "Please enter password first.";
        } else if (value !== formData.password) {
          error = "Passwords do not match.";
        }
        break;
      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  // Update validation on input change
  const handleValidatedChange = (e) => {
    handleChange(e);
    // Always validate the field, but skip validation for empty 'city'
    if (e.target.name === "city" && e.target.value === "") {
      setErrors((prev) => ({ ...prev, city: "" }));
    } else {
      validateField(e.target.name, e.target.value);
    }
  };

  // Check if form is valid
  const checkFormValidity = () => {
    const requiredFields = [
      "fullName",
      "surname",
      "email",
      "password",
      "confirmPassword",
      "phoneNumber",
      "suburb",
    ];

    const allFilled = requiredFields.every((field) => formData[field]);
    const noErrors = Object.values(errors).every((err) => !err);

    setIsFormValid(allFilled && noErrors);
  };

  // Watch for changes to formData or errors

  useEffect(() => {
    checkFormValidity();
    // eslint-disable-next-line
  }, [formData, errors]);
  useEffect(() => {
    if (!formData.password && formData.confirmPassword) {
      setFormData((prev) => ({ ...prev, confirmPassword: "" }));
    }
  }, [formData.password]);

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-xl p-8 max-w-2xl mx-auto flex flex-col gap-6"
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <input
            name="fullName"
            placeholder="Full Name"
            onChange={handleValidatedChange}
            required
            maxLength={20}
            className="input input-bordered w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.fullName && (
            <span className="text-red-500 text-xs">{errors.fullName}</span>
          )}
        </div>
        <div>
          <input
            name="surname"
            placeholder="Surname"
            onChange={handleValidatedChange}
            required
            maxLength={20}
            className="input input-bordered w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.surname && (
            <span className="text-red-500 text-xs">{errors.surname}</span>
          )}
        </div>

        <div>
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleValidatedChange}
            maxLength={10}
            required
            className="input input-bordered w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && (
            <span className="text-red-500 text-xs">{errors.password}</span>
          )}
        </div>
        <div>
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            onChange={handleValidatedChange}
            maxLength={10}
            required
            className="input input-bordered w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.confirmPassword && (
            <span className="text-red-500 text-xs">
              {errors.confirmPassword}
            </span>
          )}
        </div>
        <div>
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleValidatedChange}
            required
            maxLength={50}
            className="input input-bordered w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <span className="text-red-500 text-xs">{errors.email}</span>
          )}
        </div>
        <div>
          <input
            name="phoneNumber"
            placeholder="Phone Number"
            onChange={handleValidatedChange}
            required
            maxLength={15}
            className="input input-bordered w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.phoneNumber && (
            <span className="text-red-500 text-xs">{errors.phoneNumber}</span>
          )}
        </div>
        <div>
          <CustomSelect
            name="city"
            id="city-select"
            options={cityOptions}
            placeholder="Select City"
            className="mb-4"
            handleValidatedChange={handleValidatedChange}
            errors={errors}
          />
        </div>
        <div>
          <CustomSelect
            name="suburb"
            id="suburb-select"
            options={SuburbOptions}
            placeholder="Select Suburb"
            className="mb-4"
            handleValidatedChange={handleValidatedChange}
            errors={errors}
          />
        </div>
      </div>
      <div>
        {registerMsg && (
          <span className={registerMsgClass + " text-xs"}>{registerMsg}</span>
        )}
      </div>

      <button
        type="submit"
        className={`bg-blue-600 text-white font-semibold py-2 rounded-lg transition-colors ${
          isFormValid ? "hover:bg-blue-700" : "opacity-50 cursor-not-allowed"
        }`}
        disabled={!isFormValid}
      >
        Register
      </button>
    </form>
  );
}

export default RegisterForm;
