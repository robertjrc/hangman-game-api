import test from "node:test";
import assert from "node:assert/strict";
import { GroupSaveUsecase } from "../../src/application/usecases/group/groupSaveUsecase.js";
import { GroupInMemoryRepository } from "../../src/infrastructure/repositories/groupInMemoryRepository.js";

test("should save group states", async () => {
    const repository = new GroupInMemoryRepository();

    const group = {
        id: '920390203',
        name: 'group name',
        players: [],
        questions: [],
        current_info: {
            question: 'O que é um tsunami?',
            alternatives: ['Um terremoto', 'Um maremoto', 'Um tornado', 'Um ciclone'],
            response: 'Um maremoto',
            question_id: 72,
            message_id: null
        },
        moves: 1,
        status: true
    }

    const newPlayer = {
        id: "12930203020@c.us",
        name: "Jhon",
        score: 0,
        moves: 0,
        hits: 0,
        errors: 0
    }

    group.players.push(newPlayer);

    const groupSaveUsecase = new GroupSaveUsecase(repository);
    const response = await groupSaveUsecase.execute(group.id, group);

    assert.equal(response.success, true);
})
