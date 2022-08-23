import React from "react";
import "./style.css";

export default function UserDetails({ user, readonly, onChange }) {
  return (
    <>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          aria-label="name"
          name="name"
          value={user.name}
          onChange={onChange}
          disabled={readonly}
        />
      </div>
      <div className="form-group">
        <label htmlFor="isActive">Active</label>
        <input
          style={{ flex: 0, marginLeft: -5 }}
          type="checkbox"
          aria-label="isActive"
          name="isActive"
          checked={user.isActive}
          onChange={(e) =>
            onChange({ target: { name: "isActive", value: e.target.checked } })
          }
          disabled={readonly}
        />
      </div>
      <div className="form-group">
        <label htmlFor="age">Age</label>
        <input
          aria-label="age"
          name="age"
          value={user.age}
          onChange={onChange}
          disabled={readonly}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          aria-label="email"
          name="email"
          value={user.email}
          onChange={onChange}
          disabled={readonly}
        />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address</label>
        <input
          aria-label="address"
          name="address"
          value={user.address}
          onChange={onChange}
          disabled={readonly}
        />
      </div>
      <div className="form-group">
        <label htmlFor="balance">Balance</label>
        <input
          aria-label="balance"
          name="balance"
          value={user.balance}
          onChange={onChange}
          disabled={readonly}
        />
      </div>
      <div className="form-group">
        <label htmlFor="eyeColor">Eye color</label>
        <input
          aria-label="eyeColor"
          name="eyeColor"
          value={user.eyeColor}
          onChange={onChange}
          disabled={readonly}
        />
      </div>
      <div className="form-group">
        <label htmlFor="company">Company</label>
        <input
          aria-label="company"
          name="company"
          value={user.company}
          onChange={onChange}
          disabled={readonly}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          aria-label="phone"
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
