import { Group } from "../../../domain/entities/Group.js";
import { Result } from "../../common/result.js";

export class GroupSetWordUsecase {
    execute(group) {
        const newGroup = new Group(group.id, group.name);

        newGroup.setCurrentInfo(group.words);
        newGroup.current_info.message_id = group.current_info.message_id;

        return Result.success("Question successfully defined.", newGroup.current_info);
    }
}
