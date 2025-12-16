
// import api from "../api/api";

// const userService = {
//   // Read all users
//   getUsers: () => {
//     return api.get("/users");
//   },

//   //Read specific user 
//   getSpecificUser: (id: string) => {
//     return api.get(`/users/${id}`);
//   },


//   // Signup / create new user
//   addUser: (userData: any) => {
//     return api.post("/users", userData);
//   },

//   // Update an existing user
//   updateUser: (id: string, userData: any) => {
//     return api.put(`/users/${id}`, userData);
//   },

//   // Delete a user
//   deleteUser: (id: string) => {
//     return api.delete(`/users/${id}`);
//   },
// };

// export default userService;

// src/services/userService.ts
// import api from "../api/api";

// const userService = {
//   // Get user by ID (Cognito sub)
//   getSpecificUser: (id: string) => api.get(`/users/${id}`),

//   getUsers: () => api.get("/users"),
//   addUser: (data: any) => api.post("/users", data),
//   updateUser: (id: string, data: any) => api.put(`/users/${id}`, data),
//   deleteUser: (id: string) => api.delete(`/users/${id}`)
// };

// export default userService;

// userService.ts
// src/services/userService.ts
import api from "../api/api";
// import { getLoggedInUserId } from "./authService";

const userService = {

  getUsers: () => api.get("/users"),

  getUserProfile: () => api.get("/users/jwt"),

  // getUserProfile: async () => {
  //   const id = await getLoggedInUserId();
  //   if (!id) throw new Error("User ID not found in token");

  //   return api.get(`/users/${id}`);
  // },


  addUser: (data: any) => api.post("/users", data),

  updateUser: (id: string, data: any) => api.put(`/users/${id}`, data),

  // updateUserProfile: (data: any) =>
  // api.put("/users/jwt", data), // or /users/jwt


  deleteUser: (id: string) => api.delete(`/users/${id}`),
};

export default userService;
