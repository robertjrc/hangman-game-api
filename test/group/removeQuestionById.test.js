import test from "node:test";
import assert from "node:assert/strict";
import { GroupRemoveQuestionByIdUsecase } from "../../src/application/usecases/group/groupRemoveQuestionByIdUsecase.js";

test("should remove question by id", () => {
    const questions = [
        {
            "id": 253,
            "question": "Qual é o autor de 'Cem Anos de Solidão'?",
            "alternatives": [
                "Gabriel García Márquez",
                "Mario Vargas Llosa",
                "Jorge Luis Borges",
                "Isabel Allende"
            ]
        },
        {
            "id": 254,
            "question": "Qual é o maior país da África em área?",
            "alternatives": [
                "Argélia",
                "Nigéria",
                "Etiópia",
                "África do Sul"
            ]
        }
    ];
    const id = 254;

    const groupRemoveQuestionById = new GroupRemoveQuestionByIdUsecase();
    const response = groupRemoveQuestionById.execute(questions, id);

    console.log(response);

    assert.equal(response.success, true);
});
