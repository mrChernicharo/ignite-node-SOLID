import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const existingUser = this.usersRepository.findByEmail(email);
    console.log({ existingUser });

    if (existingUser) {
      throw Error("email taken");
    }

    const user = this.usersRepository.create({ name, email });
    return user;
  }
}

export { CreateUserUseCase };
