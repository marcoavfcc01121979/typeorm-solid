import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): void {
    // Complete aqui
    const useAlreadyExists = this.usersRepository.findByEmail(email);

    if (useAlreadyExists) {
      throw new Error("User already exists!");
    }

    this.usersRepository.create({ name, email });
  }
}

export { CreateUserUseCase };
