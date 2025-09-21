import { Player } from "../../../domain/entities/Player.js";

export class PlayerCreateUsecase {
    execute(request) {
        const { id, name } = request;

        const newPlayer = new Player(id, name);

        return newPlayer;
    }
}
