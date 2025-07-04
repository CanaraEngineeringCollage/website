"use client";

import { useState } from "react";

interface FormData {
  date: string;
  name: string;
  grievanceFrom: string;
  contactNumber: string;
  email: string;
  grievanceRelatedTo: string;
  natureOfGrievance: string;
}

export default function GrievanceForm() {
  const [formData, setFormData] = useState<FormData>({
    date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }).split('/').join('/'),
    name: "",
    grievanceFrom: "",
    contactNumber: "",
    email: "",
    grievanceRelatedTo: "",
    natureOfGrievance: "",
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
      <h2 className="text-2xl font-bold mb-4 text-center">GRIEVANCE REDRESSAL ONLINE FORM: SC/ST/OBC</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="text"
            name="date"
            value={formData.date}
            readOnly
            className="mt-1 block w-full outline-none p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="mt-1 block w-full outline-none p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Grievance From</label>
          <select
            name="grievanceFrom"
            value={formData.grievanceFrom}
            onChange={handleChange}
            className="mt-1 block w-full outline-none p-2 border border-gray-300 rounded-md"
            required
          >
            <option value="">Select type</option>
            <option value="student">Student</option>
            <option value="staff">Parent</option>
            <option value="other">Faculty</option>
            <option value="other">Any Other Stakeholder</option>
          </select>
        </div>
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
        <div>
          <label className="block text-sm font-medium text-gray-700">Grievance Related To</label>
          <select
            name="grievanceRelatedTo"
            value={formData.grievanceRelatedTo}
            onChange={handleChange}
            className="mt-1 outline-none block w-full p-2 border border-gray-300 rounded-md"
            required
          >
            <option value="">Select</option>
            <option value="academic">SC</option>
            <option value="administrative">ST</option>
            <option value="other">OBC</option>
             <option value="other">Any other issue</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Nature of Grievance</label>
          <textarea
            name="natureOfGrievance"
            value={formData.natureOfGrievance}
            onChange={handleChange}
            placeholder="Enter your grievance details here"
            className="mt-1 outline-none block w-full p-2 border border-gray-300 rounded-md"
            rows={4}
            required
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Submit
          </button>
          <button
            type="reset"
            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
            onClick={() => setFormData({ date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }).split('/').join('/'), name: "", grievanceFrom: "", contactNumber: "", email: "", grievanceRelatedTo: "", natureOfGrievance: "" })}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}