export class GroupGetHangmanStatusUsecase {
    execute(hangmanLevel) {
        const hangman = [
            "__\n|   |\n|  \n|\n|",
            "__\n|   |\n|  O\n| \n|",
            "__\n|   |\n|  O\n|   |\n|",
            "__\n|   |\n|  O\n| /|\n|",
            "__\n|   |\n|  O\n| /|\\ \n|",
            "__\n|   |\n|  O\n| /|\\ \n| /",
            "__\n|   |\n|  O\n| /|\\ \n| / \\"
        ];

        return hangman[hangmanLevel];
    }
}
