import { Result } from "../../common/result.js";

export class GroupRemoveWordByIdUsecase {
    execute(currentWords, currentWordId) {
        currentWords = currentWords.filter((jsonObject) => {
            return jsonObject["id"] !== currentWordId;
        });

        return Result.success("Word removed successfully.", currentWords);
    }
}
