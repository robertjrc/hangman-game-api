import { Result } from "../../common/result.js";

export class GroupDeleteByIdUsecase {
    #_repository;

    constructor(repository) {
        this.#_repository = repository;
    }

    async execute(id) {
        await this.#_repository.deleteByIdAsync(id);
        return Result.success("Group deleted successfully.", null);
    }
}
