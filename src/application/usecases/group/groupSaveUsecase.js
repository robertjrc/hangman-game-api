import { Result } from "../../common/result.js";

export class GroupSaveUsecase {
    #_repository;

    constructor(repository) {
        this.#_repository = repository;
    }

    async execute(id, data) {
        await this.#_repository.saveAsync(id, data);

        return Result.success("Group state saved.", null);
    }
}
