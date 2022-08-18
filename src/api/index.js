import axios from "axios";
import { API_BASE_URL } from "../constants";

const fetchUsers = async (fail = false) => {
  const resp = await axios.get(`${API_BASE_URL}/users`);

  if (fail) {
    throw new Error("Response 500; Api call failed");
  }
  return resp.data;
};

const fetchUser = async (id) => {
  const resp = await axios.get(`${API_BASE_URL}/users/${id}`);
  return resp.data;
};

const saveUser = async (payload) => {
  const resp = await axios.put(`${API_BASE_URL}/users/${payload.id}`, payload);
  return resp.data;
};

export { fetchUsers, fetchUser, saveUser };
