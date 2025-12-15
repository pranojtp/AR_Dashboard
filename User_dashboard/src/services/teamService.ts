// import api from "../api/api";

// const teamService = {
//   // Read all team members
//   getMembers: () => {
//     return api.get('/');
//   },

//   // Create a new team member
//   addMember: (memberData) => {
//     return api.post('/', memberData);
//   },

//   // Update an existing team member
//   updateMember: (id, memberData) => {
//     return api.put(`//${id}`, memberData);
//   },

//   // Delete a team member
//   deleteMember: (id) => {
//     return api.delete(`//${id}`);
//   },
// };

// export default teamService;


import api from "../api/api";

/** Request payload for inviting a user */
export interface InviteUserRequest {
  email: string;
  name?: string; // optional if backend allows
}

/** Response schema from invite API */
export interface InviteUserResponse {
  email: string;
  name: string;
  created: boolean;
  passwordReset: boolean;
  error: boolean;
  message: string;
}

/**
 * Invite a new team member
 * POST /admin/users/invite
 */
export const inviteTeamMember = async (
  payload: InviteUserRequest
): Promise<InviteUserResponse> => {
  try {
    const response = await api.post<InviteUserResponse>(
      "/admin/users/invite",
      payload
    );
    return response.data;
  } catch (error: any) {
    // Normalize backend errors
    throw {
      message:
        error?.response?.data?.message ||
        "Failed to invite team member",
      status: error?.response?.status,
      raw: error
    };
  }
};
