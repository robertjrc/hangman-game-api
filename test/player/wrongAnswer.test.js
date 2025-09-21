import test from "node:test";
import assert from "node:assert/strict";
import { PlayerWrongAnswerUsecase } from "../../src/application/usecases/player/playerWrongAnswerUsecase.js";

test("should update status if answer is wrong.", () => {
    const player = {
        id: '92039203020@c.us',
        name: 'Maria',
        score: 0,
        hits: 0,
        errors: 0,
        moves: 0
    }

    const playerWrongAnswerUsecase = new PlayerWrongAnswerUsecase();
    const response = playerWrongAnswerUsecase.execute(player);

    console.log(response.data);

    assert.equal(response.success, true);
});
