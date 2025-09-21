import { Result } from "../../common/result.js";

export class GroupGetByIdUsecase {
    #_repository;

    constructor(repository) {
        this.#_repository = repository;
    }

    async execute(id) {
        const group = await this.#_repository.getByIdAsync(id);
         
        if(!group) return Result.failure("Group not found.", null);

        return Result.success("Group found successfully.", group);
    }
}
