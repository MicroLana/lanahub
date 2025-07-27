import { useState } from "react";
import { db, storage } from "../firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcryptjs";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

function RegisterForm() {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    email: "",
    password: "",
    userType: "client",
    fullName: "",
    surName: "",
    suburb: "",
    city: "",
  });
  const [registerMsg, setRegisterMsg] = useState(null);
  const [registerMsgClass, setRegisterMsgClass] = useState("text-red-500");
  const { register, user } = useAuth();
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userDoc = {
        mobile: formData.phoneNumber,
        email: formData.email,
        password: formData.password,
        userType: formData.userType,
        fullName: formData.fullName,
        surName: formData.surName,
        profilePicture: profilePictureURL,
        suburb: formData.suburb,
        city: formData.city,
        createdAt: serverTimestamp(),
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
      case "surName":
      case "suburb":
      case "city":
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
    // Always validate the field, but skip validation for empty 'suburb'
    if (e.target.name === "suburb" && e.target.value === "") {
      setErrors((prev) => ({ ...prev, suburb: "" }));
    } else {
      validateField(e.target.name, e.target.value);
    }
  };

  // Check if form is valid
  const checkFormValidity = () => {
    const requiredFields = [
      "fullName",
      "surName",
      "email",
      "password",
      "phoneNumber",
      "city",
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
            name="surName"
            placeholder="surName"
            onChange={handleValidatedChange}
            required
            maxLength={20}
            className="input input-bordered w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.surName && (
            <span className="text-red-500 text-xs">{errors.surName}</span>
          )}
        </div>
        <div>
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleValidatedChange}
            required
            maxLength={30}
            className="input input-bordered w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <span className="text-red-500 text-xs">{errors.email}</span>
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
          <input
            name="suburb"
            placeholder="Suburb"
            onChange={handleValidatedChange}
            maxLength={20}
            className="input input-bordered w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.suburb && (
            <span className="text-red-500 text-xs">{errors.suburb}</span>
          )}
        </div>
        <div>
          <input
            name="city"
            placeholder="City"
            onChange={handleValidatedChange}
            required
            maxLength={20}
            className="input input-bordered w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.city && (
            <span className="text-red-500 text-xs">{errors.city}</span>
          )}
        </div>
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
