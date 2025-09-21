import test from "node:test";
import assert from "node:assert/strict";
import { GroupCreateUsecase } from "../../src/application/usecases/group/groupCreateUsecase.js";

test("should create group", async () => {
    const groupForm  = {
        id: "920390203",
        name: "group name"
    }

    const groupCreateUsecase = new GroupCreateUsecase();
    const response = await groupCreateUsecase.execute(groupForm);

    console.log(response.data.current_info);

    assert.equal(response.success, true);
})
