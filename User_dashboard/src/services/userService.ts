
import api from "../api/api";

const userService = {
  // Read all users
  getUsers: () => {
    return api.get("/users");
  },

  //Read specific user 
  getSpecificUser: (id: string) => {
    return api.get(`/users/${id}`);
  },


  // Signup / create new user
  addUser: (userData: any) => {
    return api.post("/users", userData);
  },

  // Update an existing user
  updateUser: (id: string, userData: any) => {
    return api.put(`/users/${id}`, userData);
  },

  // Delete a user
  deleteUser: (id: string) => {
    return api.delete(`/users/${id}`);
  },
};

export default userService;
