import test from "node:test";
import assert from "node:assert/strict";
import { GroupWordCheckUsecase } from "../../src/application/usecases/group/groupWordCheckUsecase.js";

test("should verify if char in word", () => {
    let char = "t";

    const current_info = {
        hint: 'Aracnídeo que tece teias',
        response: 'aranha',
        traits: ['_', '_', '_', '_', '_', '_'],
        hangman_level: 0,
        word_length: 6,
        word_id: 73,
        message_id: null
    }

    const groupWordCheckUsecase = new GroupWordCheckUsecase();
    const response = groupWordCheckUsecase.execute(char, current_info);

    console.log(response.data);
    if (!response.success) assert.fail(response.message);

    assert.equal(response.success, true);
});
