import React from "react";
import './style.css';

export default function UserDetails({ user, readonly, onChange }) {
  return (
    <>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          name="name"
          value={user.name}
          onChange={onChange}
          disabled={readonly}
        />
      </div>
      <div className="form-group">
        <label htmlFor="age">Age</label>
        <input
          name="age"
          value={user.age}
          onChange={onChange}
          disabled={readonly}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          name="email"
          value={user.email}
          onChange={onChange}
          disabled={readonly}
        />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address</label>
        <input
          name="address"
          value={user.address}
          onChange={onChange}
          disabled={readonly}
        />
      </div>
      <div className="form-group">
        <label htmlFor="balance">Balance</label>
        <input
          name="balance"
          value={user.balance}
          onChange={onChange}
          disabled={readonly}
        />
      </div>
      <div className="form-group">
        <label htmlFor="eyeColor">Eye color</label>
        <input
          name="eyeColor"
          value={user.eyeColor}
          onChange={onChange}
          disabled={readonly}
        />
      </div>
      <div className="form-group">
        <label htmlFor="company">Company</label>
        <input
          name="company"
          value={user.company}
          onChange={onChange}
          disabled={readonly}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          name="phone"
          value={user.phone}
          onChange={onChange}
          disabled={readonly}
        />
      </div>
      <div className="form-group">
        <label htmlFor="gender">Gender</label>
        <input
          name="gender"
          value={user.gender}
          onChange={onChange}
          disabled={readonly}
        />
      </div>
      <div className="form-group">
        <label htmlFor="about">About</label>
        <input
          name="about"
          value={user.about}
          onChange={onChange}
          disabled={readonly}
        />
      </div>
    </>
  );
}
