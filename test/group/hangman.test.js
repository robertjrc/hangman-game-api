import test from "node:test";
import assert from "node:assert/strict";
import { GroupHangmanUsecase } from "../../src/application/usecases/group/groupHangmanUsecase.js";

test("should get hangman level.", () => {
    const current_info = {
        hint: 'Aracnídeo que tece teias',
        response: 'aranha',
        traits: ['_', '_', '_', '_', '_', '_'],
        hangman_level: 0,
        word_length: 6,
        word_id: 73,
        message_id: null
    }

    const groupHangmanUsecase = new GroupHangmanUsecase();
    const response = groupHangmanUsecase.execute(current_info.hangman_level);

    console.log(response.data);

    assert.equal(response.success, true);
});
