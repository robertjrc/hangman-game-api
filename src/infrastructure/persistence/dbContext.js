import fs from "node:fs/promises";
import { existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";
(await import("dotenv")).config({ quiet: true });

export class InMemoryDb {
    #storage;

    constructor() {
        this.#storage = join(
            process.cwd(),
            `${process.env.STORAGE_PATH}/hangman_storage`
        );
        this.#init();
    }

    async #init() {
        if (!existsSync(this.#storage)) mkdirSync(this.#storage);
    }

    async saveChangesAsync(id, data) {
        await fs.writeFile(`${this.#storage}/${id}.json`, JSON.stringify(data, null, 2));
    }

    async findAsync(id) {
        const group = `${this.#storage}/${id}.json`;
        return (!existsSync(group) ? null : JSON.parse(await fs.readFile(group)));
    }

    async removeAsync(id) {
        const group = `${this.#storage}/${id}.json`;
        if (existsSync(group)) await fs.unlink(group);
    }
}
