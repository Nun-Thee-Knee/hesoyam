'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  firstname: string;
  lastname: string;
  address: string;
  contact: string;
}

const Signup: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstname: '',
    lastname: '',
    address: '',
    contact: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-neutral-950 p-10 shadow-2xl rounded-xl flex flex-col gap-4">
      <div className="flex gap-4 items-center justify-center">
        <div className="flex flex-col gap-2">
          <label htmlFor="firstname">First Name:</label>
          <input
            required
            id="firstname"
            className="bg-neutral-800 rounded-md p-2"
            type="text"
            value={formData.firstname}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="lastname">Last Name:</label>
          <input
            required
            id="lastname"
            className="bg-neutral-800 rounded-md p-2"
            type="text"
            value={formData.lastname}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="address">Address Line:</label>
        <input
          required
          id="address"
          className="bg-neutral-800 rounded-md p-2 w-full"
          type="text"
          value={formData.address}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="contact">Contact Number:</label>
        <input
          required
          id="contact"
          placeholder="+91 XXXX XXXX XX"
          className="bg-neutral-800 rounded-md p-2 w-full"
          type="text"
          value={formData.contact}
          onChange={handleChange}
          minLength={10}
        />
      </div>
      <button type="submit" className="mt-3 p-2 rounded-md hover:bg-blue-800 bg-blue-600 uppercase font-bold">
        Submit
      </button>
    </form>
  );
};

export default Signup;
