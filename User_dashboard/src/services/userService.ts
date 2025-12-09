
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

const userService = {
  // Fetch a single user by Cognito 'sub'
 
  getUsers: () => api.get("/users"),

  getUserProfile: () => api.get("/users/e05044ab-26d3-48df-b5d5-520d046bb55d"),

  addUser: (data: any) => api.post("/users", data),

  updateUser: (id: string, data: any) => api.put(`/users/${id}`, data),

  deleteUser: (id: string) => api.delete(`/users/${id}`),
};

export default userService;
