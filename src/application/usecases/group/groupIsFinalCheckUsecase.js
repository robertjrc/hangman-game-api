import { Result } from "../../common/result.js";

export class GroupIsFinalCheckUsecase {
    execute(currentInfo) {
        if (currentInfo.word_length === 0) {
            const straitsJoin = currentInfo.traits.join("");

            if (straitsJoin === currentInfo.response) {
                return Result.success("finished.", { isMatch: true });
            }

            return Result.success("finished.", { isMatch: false });
        };

        return Result.failure("not finished.", null);
    }
}
