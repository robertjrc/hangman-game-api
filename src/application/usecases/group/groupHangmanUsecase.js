import { Result } from "../../common/result.js";

export class GroupHangmanUsecase {
    execute(hangmanLevel) {
        const hangman = [
            "__\n|   |\n|  \n|\n|",
            "__\n|   |\n|  O\n| \n|",
            "__\n|   |\n|  O\n|   |\n|",
            "__\n|   |\n|  O\n| /|\n|",
            "__\n|   |\n|  O\n| /|\\ \n|",
            "__\n|   |\n|  O\n| /|\\ \n| /",
            "__\n|   |\n|  O\n| /|\\ \n| / \\"];


        return Result.success("", hangman[hangmanLevel]);
    }
}
