export class GroupCharExistUsecase {
    execute(chars, char) {
        return (!chars.some(x => x === char)) ? false : true;
    }
}
