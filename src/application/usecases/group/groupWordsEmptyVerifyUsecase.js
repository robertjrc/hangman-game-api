import { Result } from "../../common/result.js";
import { importJson } from "../../utils/importJson.js";

export class GroupWordsEmptyVerify {
    async execute(currentQuestions) {
        if (currentQuestions.length >= 1) return Result.failure("It's not empty.", null);

        const words = await importJson("../../infrastructure/seeds/words.json");

        return Result.success("It's empty.", words);
    }
}
