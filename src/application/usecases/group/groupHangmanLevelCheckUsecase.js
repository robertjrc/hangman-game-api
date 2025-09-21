import { Result } from "../../common/result.js";

export class GroupHangmanLevelCheckUsecase {
    execute(hangmanLevel) {
        if (hangmanLevel === 6) return Result.success("", null);

        return Result.failure("", null);
    }
}
