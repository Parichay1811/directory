import React, { useState } from 'react';

const PersonForm = ({ addPerson }) => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    aadhar: '',
    mobile: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateAge = (dob) => {
    const birth = new Date(dob);
    const today = new Date();
    return today.getFullYear() - birth.getFullYear();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const age = calculateAge(formData.dob);
    addPerson({ ...formData, age });
    setFormData({ name: '', dob: '', aadhar: '', mobile: '' });
  };

  return (
    <form className="form-section" onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
      <input name="aadhar" value={formData.aadhar} onChange={handleChange} placeholder="Aadhar Number" required />
      <input name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile Number" required />
      <button type="submit" className="btn">Add</button>
    </form>
  );
};

export default PersonForm;
