export class GroupRemoveWordByIdUsecase {
    execute(words, wordId) {
        words = words.filter((_words) => {
            return _words["id"] !== wordId;
        });

        return words;
    }
}
