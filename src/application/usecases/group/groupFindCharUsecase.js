import { Result } from "../../common/result.js";

export class GroupFindCharUsecase {
    execute(char, currentInfo) {
        const wordSplitted = currentInfo.response.split("");

        if (!wordSplitted.some(x => x === char.toLowerCase())) {
            currentInfo.hangman_level += 1;

            return Result.failure("", currentInfo);
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

        return Result.success("", currentInfo);
    }
}
