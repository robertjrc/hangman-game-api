import test from "node:test";
import assert from "node:assert/strict";
import { PlayerCreateUsecase } from "../../src/application/usecases/player/playerCreateUsecase.js";

test("should create player", () => {
    const playerForm  = {
        id: "92039203020@c.us",
        name: "Maria Silva"
    }

    const playerCreateUsecase = new PlayerCreateUsecase();
    const response = playerCreateUsecase.execute(playerForm);

    console.log(response.data);

    assert.equal(response.success, true);
})
