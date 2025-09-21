import test from "node:test";
import assert from "node:assert/strict";
import { GroupQuestionsEmptyVerify } from "../../src/application/usecases/group/groupQuestionsEmptyVerifyUsecase.js";

test("should verify question is empty", () => {
    const questions = [];

    const groupQuestionsEmptyVerifyUsecase = new GroupQuestionsEmptyVerify();
    const response = groupQuestionsEmptyVerifyUsecase.execute(questions);

    if (!response.success) assert.fail(response.message);

    console.log(response);

    assert.equal(response.success, true);
});
