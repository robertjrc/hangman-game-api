export class GroupSaveUsecase {
    #_repository;

    constructor(repository) {
        this.#_repository = repository;
    }

    async execute(id, data) {
        await this.#_repository.saveAsync(id, data);
    }
}
