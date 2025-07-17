import React from "react";
import { useParams } from "react-router-dom";

function ServiceDetails() {
  const { id } = useParams();

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">Service Details</h1>
      <p>You are viewing details for service ID: {id}</p>
    </div>
  );
}

export default ServiceDetails;
