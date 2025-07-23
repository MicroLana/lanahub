import { useState } from "react";
import { db, storage } from "../firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcryptjs";
import { useEffect } from "react";
function RegisterForm() {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    email: "",
    password: "",
    userType: "client",
    fullName: "",
    surname: "",
    nationality: "",
    city: "",
  });

  const [profilePicture, setProfilePicture] = useState(null);

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
    const userId = uuidv4();

    try {
      const hashedPassword = await bcrypt.hash(formData.password, 10);

      let profilePictureURL = "";
      if (profilePicture) {
        const storageRef = ref(storage, `profilePictures/${userId}`);
        await uploadBytes(storageRef, profilePicture);
        profilePictureURL = await getDownloadURL(storageRef);
      }

      const userDoc = {
        id: userId,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        passwordHash: hashedPassword,
        userType: formData.userType,
        fullName: formData.fullName,
        surname: formData.surname,
        profilePicture: profilePictureURL,
        nationality: formData.nationality,
        city: formData.city,
        createdAt: serverTimestamp(),
      };

      await setDoc(doc(db, "users", userId), userDoc);
      alert("✅ User registered successfully!");
    } catch (err) {
      console.error("Registration error:", err);
      alert("❌ Failed to register user.");
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
      case "nationality":
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
    // Always validate the field, but skip validation for empty 'nationality'
    if (e.target.name === "nationality" && e.target.value === "") {
      setErrors((prev) => ({ ...prev, nationality: "" }));
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
            name="nationality"
            placeholder="Nationality"
            onChange={handleValidatedChange}
            maxLength={20}
            className="input input-bordered w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.nationality && (
            <span className="text-red-500 text-xs">{errors.nationality}</span>
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
        <label className="block col-span-2">
          <span className="text-gray-700 font-medium">Profile Picture</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </label>
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
