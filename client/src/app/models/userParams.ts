import { User } from "./user";

export class UserParams {
  minAge = 18;
  maxAge = 100;
  gender: string;
  orderBy = 'lastActive';
  pageNumber = 1;
  pageSize = 5;

  constructor(user: User) {
    this.gender = user.gender === 'male' ? 'female' : 'male';
  }
}
