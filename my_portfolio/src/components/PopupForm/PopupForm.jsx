import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './PopupForm.css';

const PopupForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    role: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_gvi7zkw', 'template_f9lcnlt', formData, 'NKy3zLWCnC4FT7hFm')
      .then((result) => {
        alert('Email sent successfully!');
        onClose();
      }, (error) => {
        alert('Failed to send email, please try again.');
      });
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="popup-form-overlay">
      <div className="popup-form-container">
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2>Hire Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Role</label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn" onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
