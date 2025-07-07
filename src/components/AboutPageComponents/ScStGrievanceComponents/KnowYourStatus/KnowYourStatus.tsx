"use client";

import { useState } from "react";

interface FormData {
  contactNumber: string;
  email: string;
}

export default function KnowYourStatus() {
  const [formData, setFormData] = useState<FormData>({
    contactNumber: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white  text-black shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Know Your Grievance Status</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Contact Number</label>
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder="Enter valid 10 digit mobile number"
            className="mt-1 block outline-none w-full p-2 border border-gray-300 rounded-md"
            pattern="[0-9]{10}"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your E-Mail address"
            className="mt-1 outline-none block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="flex justify-end space-x-4">
          <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
            Submit
          </button>
          <button
            type="reset"
            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
            onClick={() => setFormData({ contactNumber: "", email: "" })}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
