import test from "node:test";
import assert from "node:assert/strict";
import { GroupInMemoryRepository } from "../../src/infrastructure/repositories/groupInMemoryRepository.js";
import { GroupGetByIdUsecase } from "../../src/application/usecases/group/groupGetByIdUsecase.js";

test("should get group by id", async () => {
    const repository = new GroupInMemoryRepository();

    const id = "920390203";

    const groupGetByIdUsecase = new GroupGetByIdUsecase(repository);
    const response = await groupGetByIdUsecase.execute(id);

    if (!response.success) assert.fail(response.message);

    console.log(response);

    assert.equal(response.success, true);
});
