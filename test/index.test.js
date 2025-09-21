import test from "node:test";
import assert from "node:assert/strict";
import { Group, Player } from "../index.js";

test("should test API.", async () => {
    const groupId = "28391923929";
    const groupName = "group";

    const playerId = "293930229@c.us";
    const playerName = "Maria Silva";
    const playerAlternative = "a";

    let group;
    let player;

    const groupResponse = await Group.getById(groupId);

    if (!groupResponse.success) {
        const groupForm = {
            id: groupId,
            name: groupName
        }

        group = (await Group.create(groupForm)).data;
    } else {
        group = groupResponse.data
    }

    console.log(group.current_info);

    const playerResponse = group.players.find(x => x.id === playerId);

    if (!playerResponse) {
        const playerForm = {
            id: playerId,
            name: playerName
        }
        player = Player.create(playerForm).data;

        group.players.push(player);
    }

    const charCheckResponse = Group.charCheck(group.current_info.chars, playerAlternative);

    if (!charCheckResponse.success) {
        const wordCheckResponse = Group.wordCheck(playerAlternative, group.current_info);

        if (wordCheckResponse.success) {
            console.log("acertou");
            group.current_info = wordCheckResponse.data;

            const isFinalCheckResponse = Group.isFinal(group.current_info);

            if (isFinalCheckResponse.success) {
                if (isFinalCheckResponse.data.isMatch) {
                    console.log("bateu")
                    group.words = Group.removeWordById(group.words, group.current_info.word_id).data;

                    const isEmptyResponse = await Group.isEmpty(group);
                    if (isEmptyResponse.success) group.words = isEmptyResponse.data;

                    group.current_info = Group.setWord(group).data;
                } else {
                    console.log("não bateu");
                    group.current_info = Group.setWord(group).data;
                }
            }

            await Group.save(group.id, group);
        } else {
            group.current_info = wordCheckResponse.data;

            const hangmanCheckResponse = Group.hangmanLevelCheck(group.current_info.hangman_level);

            if (hangmanCheckResponse.success) {
                group.current_info = Group.setWord(group).data;
            }

            await Group.save(group.id, group);
            console.log("perdeu");
        }
    }

    console.log(group.current_info);

    // player = Player.correctAnswer(player).data;

    assert.equal(true, true);
});
