import { Group } from "../../../domain/entities/Group.js";
import { importJson } from "../../utils/importJson.js";

export class GroupResetUsecase {
    async execute(request) {
        const newGroup = new Group(request.id, request.name);

        newGroup.words = await importJson("../../infrastructure/seeds/words.json");
        newGroup.setCurrentInfo(newGroup.words);

        newGroup;
    }
}
