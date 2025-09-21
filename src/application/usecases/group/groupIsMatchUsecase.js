export class GroupIsMatchUsecase {
    execute(currentInfo) {
        return (currentInfo.word_length > 0) ? false : true;
    }
}
