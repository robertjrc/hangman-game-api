import { Result } from "../../common/result.js";

export class GroupCharCheckUsecase {
    execute(chars, char) {
        if (!chars.some(x => x === char)) {
            return Result.failure("", null);
        }

        return Result.success("", null);
    }
}
