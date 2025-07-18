import { useState } from "react";
import ProviderProfileForm from "./ProviderProfileForm";

export default function App() {
  const [showProviderForm, setShowProviderForm] = useState(false);

  const handleRegisterClick = (e) => {
    e.preventDefault();           // if inside a <form>
    console.log("Register clicked");
    setShowProviderForm(true);
  };

  return (
    <div>
      <button onClick={handleRegisterClick}>
        Register As a Service Provider
      </button>

      {showProviderForm && (
        <ProviderProfileForm
          user={user}
          onComplete={() => setShowProviderForm(false)}
        />
      )}
    </div>
  );
}
