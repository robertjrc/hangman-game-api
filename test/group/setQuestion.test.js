import test from "node:test";
import assert from "node:assert/strict";
import { GroupSetQuestionUsecase } from "../../src/application/usecases/group/groupSetQuestionsUsecase.js";

test("should set group new current info.", () => {
    const group = {
        id: '920390203',
        name: 'group name',
        players: [],
        questions: [
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
        ],
        current_info: {
            question: 'Em que país foi construído o Muro de Berlim?',
            alternatives: ['Estados Unidos', 'China', 'Coreia do Norte', 'Alemanha'],
            response: 'Alemanha',
            question_id: 55,
            message_id: null
        },
        moves: 1,
        status: true
    }

    const groupSetQuestionUsecase = new GroupSetQuestionUsecase();
    const response = groupSetQuestionUsecase.execute(group);

    console.log(response);

    assert.equal(response.success, true);
});
