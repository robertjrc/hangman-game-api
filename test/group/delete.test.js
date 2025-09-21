import test from "node:test";
import assert from "node:assert/strict";
import { GroupInMemoryRepository } from "../../src/infrastructure/repositories/groupInMemoryRepository.js";
import { GroupDeleteByIdUsecase } from "../../src/application/usecases/group/groupDeleteByIdUsecase.js";

test("should delete group by id", async () => {
    const repository = new GroupInMemoryRepository();

    const id = "28391923929";

    const groupDeleteByIdUsecase = new GroupDeleteByIdUsecase(repository);
    const response = await groupDeleteByIdUsecase.execute(id);

    assert.equal(response.success, true);
});
