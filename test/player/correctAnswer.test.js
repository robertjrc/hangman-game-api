import test from "node:test";
import assert from "node:assert/strict";
import { PlayerCorrectAnswerUsecase } from "../../src/application/usecases/player/playerCorrectAnswerUsecase.js";

test("should update status if answer is correct.", () => {
    const player = {
        id: '92039203020@c.us',
        name: 'Maria',
        score: 0,
        hits: 0,
        errors: 0,
        moves: 0
    }

    const playerCorrectAnswerUsecase = new PlayerCorrectAnswerUsecase();
    const response = playerCorrectAnswerUsecase.execute(player);

    console.log(response.data);

    assert.equal(response.success, true);
});
