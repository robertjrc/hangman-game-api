import { Group } from "../../../domain/entities/Group.js";
import { Result } from "../../common/result.js";
import { importJson } from "../../utils/importJson.js";

export class GroupCreateUsecase {
    async execute(request) {
        const { id, name } = request;

        const newGroup = new Group(id, name);

        newGroup.words = await importJson("../../infrastructure/seeds/words.json");
        newGroup.setCurrentInfo(newGroup.words);

        return Result.success("Group created successfully.", newGroup);
    }
}
