import { useState, useEffect } from "react";
import { db, storage } from "../firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcryptjs";

function ServiceProviderRegister({ onClose }) {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    email: "",
    password: "",
    userType: "client",
    fullName: "",
    surname: "",
    nationality: "",
    city: "",
    shortBio: "",
    longBio: "",
    locationAddress: "",
    mobility: "",
    suburb: "",
    available: false,
    verifyStatus: "registered",
  });

  const [geo, setGeo] = useState({ lat: null, lng: null });

  const [profilePicture, setProfilePicture] = useState(null);
  const [qualificationDoc, setQualificationDoc] = useState(null);
  const [policeClearanceDoc, setPoliceClearanceDoc] = useState(null);
  const [otherDocument, setOtherDocument] = useState(null);

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setGeo({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          });
        },
        (err) => {
          console.warn("Geolocation error:", err);
        }
      );
    }
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.surname.trim()) newErrors.surname = "Surname is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    if (!formData.phoneNumber.trim())
      newErrors.phoneNumber = "Phone Number is required";
    if (!formData.nationality.trim())
      newErrors.nationality = "Nationality is required";
    if (
      !formData.city.trim() ||
      formData.city.length > 20 ||
      /[^a-zA-Z\s]/.test(formData.city)
    )
      newErrors.city = "City is required, max 20 chars, letters only";
    if (
      !formData.locationAddress.trim() ||
      formData.locationAddress.length > 30
    )
      newErrors.locationAddress = "Location Address is required, max 30 chars";
    if (
      !formData.mobility.trim() ||
      formData.mobility.length > 20 ||
      /[^a-zA-Z\s]/.test(formData.mobility)
    )
      newErrors.mobility = "Mobility is required, max 20 chars, letters only";
    if (
      !formData.suburb.trim() ||
      formData.suburb.length > 20 ||
      /[^a-zA-Z\s]/.test(formData.suburb)
    )
      newErrors.suburb = "Suburb is required, max 20 chars, letters only";
    if (!formData.shortBio.trim() || formData.shortBio.length > 30)
      newErrors.shortBio = "Short Bio is required, max 30 chars";
    if (!formData.longBio.trim() || formData.longBio.length > 40)
      newErrors.longBio = "Long Bio is required, max 40 chars";
    if (!profilePicture)
      newErrors.profilePicture = "Profile picture is required";
    if (!qualificationDoc)
      newErrors.qualificationDoc = "Qualification document is required";
    if (!policeClearanceDoc)
      newErrors.policeClearanceDoc = "Police clearance document is required";
    if (!otherDocument) newErrors.otherDocument = "Other document is required";
    if (
      qualificationDoc &&
      (qualificationDoc.name.length > 20 ||
        /[^a-zA-Z\s.]/.test(qualificationDoc.name))
    )
      newErrors.qualificationDoc =
        "Qualification doc name: max 20 chars, letters only";
    if (
      policeClearanceDoc &&
      (policeClearanceDoc.name.length > 20 ||
        /[^a-zA-Z\s.]/.test(policeClearanceDoc.name))
    )
      newErrors.policeClearanceDoc =
        "Police clearance doc name: max 20 chars, letters only";
    return newErrors;
  };

  useEffect(() => {
    validate();
    // eslint-disable-next-line
  }, [formData, errors]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    const userId = uuidv4();

    try {
      const hashedPassword = await bcrypt.hash(formData.password, 10);

      const uploadAndGetURL = async (file, path) => {
        const storageRef = ref(storage, `${path}/${userId}`);
        await uploadBytes(storageRef, file);
        return await getDownloadURL(storageRef);
      };

      if (!geo.lat || !geo.lng) {
        alert("Geolocation not available. Please allow location access.");
        return;
      }

      const profilePicURL = await uploadAndGetURL(
        profilePicture,
        "profilePictures"
      );
      const qualificationURL = await uploadAndGetURL(
        qualificationDoc,
        "qualificationDocs"
      );
      const policeClearanceURL = await uploadAndGetURL(
        policeClearanceDoc,
        "policeClearance"
      );
      const documentUploadURL = await uploadAndGetURL(
        otherDocument,
        "userDocuments"
      );

      const userDoc = {
        id: userId,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        passwordHash: hashedPassword,
        userType: formData.userType,
        fullName: formData.fullName,
        surname: formData.surname,
        profilePicture: profilePicURL,
        nationality: formData.nationality,
        city: formData.city,
        shortBio: formData.shortBio,
        longBio: formData.longBio,
        qualificationDoc: qualificationURL,
        policeClearanceDoc: policeClearanceURL,
        documentUpload: documentUploadURL,
        locationAddress: formData.locationAddress,
        mobility: formData.mobility,
        suburb: formData.suburb,
        available: formData.available,
        verifyStatus: formData.verifyStatus,
        geo_lat: geo.lat,
        geo_lng: geo.lng,
        createdAt: serverTimestamp(),
      };

      await setDoc(doc(db, "users", userId), userDoc);
      alert("✅ User registered successfully!");
      if (onClose) onClose();
    } catch (err) {
      console.error("Registration error:", err);
      alert("❌ Failed to register user.");
    }
  };

  // Trending Tailwind styles
  const inputClass =
    "w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition shadow-sm bg-gray-50";
  const errorClass = "text-xs text-red-500 mt-1";

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-2xl overflow-auto">
      <div className="flex justify-between items-center mb-6">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div>
            <input
              name="fullName"
              placeholder="Full Name"
              onChange={handleChange}
              className={inputClass}
              required
              value={formData.fullName}
            />
            {errors.fullName && (
              <div className={errorClass}>{errors.fullName}</div>
            )}
          </div>
          <div>
            <input
              name="surname"
              placeholder="Surname"
              onChange={handleChange}
              className={inputClass}
              required
              value={formData.surname}
            />
            {errors.surname && (
              <div className={errorClass}>{errors.surname}</div>
            )}
          </div>
          <div>
            <input
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
              className={inputClass}
              required
              value={formData.email}
            />
            {errors.email && <div className={errorClass}>{errors.email}</div>}
          </div>
          <div>
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              className={inputClass}
              required
              value={formData.password}
            />
            {errors.password && (
              <div className={errorClass}>{errors.password}</div>
            )}
          </div>
          <div>
            <input
              name="phoneNumber"
              placeholder="Phone Number"
              onChange={handleChange}
              className={inputClass}
              required
              value={formData.phoneNumber}
            />
            {errors.phoneNumber && (
              <div className={errorClass}>{errors.phoneNumber}</div>
            )}
          </div>
          <div>
            <input
              name="nationality"
              placeholder="Nationality"
              onChange={handleChange}
              className={inputClass}
              required
              value={formData.nationality}
            />
            {errors.nationality && (
              <div className={errorClass}>{errors.nationality}</div>
            )}
          </div>
          <div>
            <input
              name="city"
              placeholder="City"
              onChange={handleChange}
              className={inputClass}
              required
              value={formData.city}
              maxLength={20}
            />
            {errors.city && <div className={errorClass}>{errors.city}</div>}
          </div>
          <div>
            <input
              name="suburb"
              placeholder="Suburb"
              onChange={handleChange}
              className={inputClass}
              required
              value={formData.suburb}
              maxLength={20}
            />
            {errors.suburb && <div className={errorClass}>{errors.suburb}</div>}
          </div>
          <div>
            <input
              name="locationAddress"
              placeholder="Location Address"
              onChange={handleChange}
              className={inputClass}
              required
              value={formData.locationAddress}
              maxLength={30}
            />
            {errors.locationAddress && (
              <div className={errorClass}>{errors.locationAddress}</div>
            )}
          </div>
          <div>
            <input
              name="mobility"
              placeholder="Mobility"
              onChange={handleChange}
              className={inputClass}
              required
              value={formData.mobility}
              maxLength={20}
            />
            {errors.mobility && (
              <div className={errorClass}>{errors.mobility}</div>
            )}
          </div>
          <div>
            <input
              name="shortBio"
              placeholder="Short Bio"
              onChange={handleChange}
              className={inputClass}
              required
              value={formData.shortBio}
              maxLength={30}
            />
            {errors.shortBio && (
              <div className={errorClass}>{errors.shortBio}</div>
            )}
          </div>
          <div>
            <input
              name="longBio"
              placeholder="Long Bio"
              onChange={handleChange}
              className={inputClass}
              required
              value={formData.longBio}
              maxLength={40}
            />
            {errors.longBio && (
              <div className={errorClass}>{errors.longBio}</div>
            )}
          </div>
          <div>
            <label className="block font-semibold mb-1">Profile Picture</label>
            <input
              type="file"
              onChange={(e) => setProfilePicture(e.target.files[0])}
              accept="image/*"
              className={inputClass}
              required
            />
            {errors.profilePicture && (
              <div className={errorClass}>{errors.profilePicture}</div>
            )}
          </div>
          <div>
            <label className="block font-semibold mb-1">
              Qualification Document
            </label>
            <input
              type="file"
              onChange={(e) => setQualificationDoc(e.target.files[0])}
              className={inputClass}
              required
            />
            {errors.qualificationDoc && (
              <div className={errorClass}>{errors.qualificationDoc}</div>
            )}
          </div>
          <div>
            <label className="block font-semibold mb-1">
              Police Clearance Document
            </label>
            <input
              type="file"
              onChange={(e) => setPoliceClearanceDoc(e.target.files[0])}
              className={inputClass}
              required
            />
            {errors.policeClearanceDoc && (
              <div className={errorClass}>{errors.policeClearanceDoc}</div>
            )}
          </div>
          <div>
            <label className="block font-semibold mb-1">Other Document</label>
            <input
              type="file"
              onChange={(e) => setOtherDocument(e.target.files[0])}
              className={inputClass}
              required
            />
            {errors.otherDocument && (
              <div className={errorClass}>{errors.otherDocument}</div>
            )}
          </div>
          <div className="flex items-center space-x-2 md:col-span-2">
            <input
              type="checkbox"
              name="available"
              checked={formData.available}
              onChange={handleChange}
              className="accent-green-600 w-5 h-5"
            />
            <span className="font-medium">Available</span>
          </div>
          <div className="md:col-span-2 flex justify-end mt-4">
            <button
              type="submit"
              className="bg-gradient-to-r from-green-500 to-green-700 text-white px-8 py-3 rounded-lg font-bold hover:scale-105 transition shadow-lg"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ServiceProviderRegister;
