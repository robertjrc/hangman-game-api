import { InMemoryDb } from "../persistence/dbContext.js";

export class GroupInMemoryRepository {
    #db = new InMemoryDb();

    async getByIdAsync(id) {
        const group = await this.#db.findAsync(id);
        return (!group) ? null : group;
    }

    async deleteByIdAsync(id) {
        await this.#db.removeAsync(id);
    }
    async saveAsync(id, data) {
        await this.#db.saveChangesAsync(id, data);
    }
}
