import { Player } from "../../../domain/entities/Player.js";
import { Result } from "../../common/result.js";

export class PlayerCreateUsecase {
    execute(request) {
        const { id, name } = request;

        const newPlayer = new Player(id, name);

        return Result.success("player created successfully.", newPlayer);
    }
}
