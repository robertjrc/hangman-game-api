import { Result } from "../../common/result.js";

export class GroupWordCheckUsecase {
    execute(char, currentInfo) {
        const wordSplitted = currentInfo.response.split("");

        if (!wordSplitted.some(x => x === char)) {
            currentInfo.hangman_level += 1;

            return Result.failure("Word not found.", currentInfo);
        }

        currentInfo.chars.push(char);

        const letters = new Map();

        wordSplitted.forEach((letter, i) => {
            if (letter === char) {
                letters.set(i, letter);
            }
        });

        for (let letter of letters) {
            currentInfo.traits[letter[0]] = letter[1];
            currentInfo.word_length -= 1;
        }

        return Result.success("Word found.", currentInfo);
    }
}
