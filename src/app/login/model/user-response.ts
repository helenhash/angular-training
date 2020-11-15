import {User} from "@app/login/model/user";

export interface UserResponse {
  message: string;
  success: boolean;
  data: User;
}
