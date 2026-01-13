import api from "../api/api";

export interface CreateTaskRequest {
  domain: "PROFILE" | "PROJECT" | "VOICE_VAULT";
  taskType: "TEAM_INVITE";
  title: string;
  description: string;
  targetUrl: string;
  expiresAt?: string;
  label?: string;
  actionKey?: string;
  apiEndpoint?: string;
  method?: string;
}

const taskService = {
  // 🔹 READ tasks (logged-in user)
  getTasks: () => {
    return api.get("/tasks");
  },

  // 🔹 CREATE task for a specific user
  createTask: (userIdOrEmail: string, payload: CreateTaskRequest) => {
    return api.post(`/tasks/${userIdOrEmail}`, payload);
  },
};

export default taskService;
