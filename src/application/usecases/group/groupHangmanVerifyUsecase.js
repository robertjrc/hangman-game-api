export class GroupHangmanVerifyUsecase {
    execute(hangmanLevel) {
        return (hangmanLevel === 6) ? true : false;
    }
}
