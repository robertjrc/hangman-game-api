export class Player {
    constructor(id, name) {
        this.id = id;
        this.name = this.#setShortName(name);
        this.score = 0;
        this.hits = 0;
        this.errors = 0;
        this.moves = 0;
    }

    #setShortName(name) {
        return (name.includes(" ")) ? name.split(" ")[0] : name;
    }
}
