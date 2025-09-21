import { Group } from "../../../domain/entities/Group.js";

export class GroupNewWordUsecase {
    execute(group) {
        const newGroup = new Group(group.id, group.name);

        newGroup.setCurrentInfo(group.words);
        newGroup.current_info.message_id = group.current_info.message_id;

        return newGroup.current_info;
    }
}
