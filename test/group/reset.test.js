import test from "node:test";
import assert from "node:assert/strict";
import { GroupResetUsecase } from "../../src/application/usecases/group/groupResetUsecase.js";

test("should reset group", () => {
    const groupForm  = {
        id: "920390203",
        name: "group name"
    }

    const groupResetUsecase = new GroupResetUsecase();
    const response = groupResetUsecase.execute(groupForm);

    console.log(response.data);

    assert.equal(response.success, true);
})
