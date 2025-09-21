import { GroupCreateUsecase } from "../../application/usecases/group/groupCreateUsecase.js";
import { GroupDeleteByIdUsecase } from "../../application/usecases/group/groupDeleteByIdUsecase.js";
import { GroupGetByIdUsecase } from "../../application/usecases/group/groupGetByIdUsecase.js";
import { GroupWordsEmptyVerify } from "../../application/usecases/group/groupWordsEmptyVerifyUsecase.js";
import { GroupRemoveWordByIdUsecase } from "../../application/usecases/group/groupRemoveWordByIdUsecase.js";
import { GroupResetUsecase } from "../../application/usecases/group/groupResetUsecase.js";
import { GroupSaveUsecase } from "../../application/usecases/group/groupSaveUsecase.js";
import { GroupNewWordUsecase } from "../../application/usecases/group/groupNewWordUsecase.js";
import { GroupInMemoryRepository } from "../../infrastructure/repositories/groupInMemoryRepository.js"
import { GroupFindCharUsecase } from "../../application/usecases/group/groupFindCharUsecase.js";
import { GroupHangmanVerifyUsecase } from "../../application/usecases/group/groupHangmanVerifyUsecase.js";
import { GroupGetHangmanStatusUsecase } from "../../application/usecases/group/groupGetHangmanStatusUsecase.js";
import { GroupCharExistUsecase } from "../../application/usecases/group/groupCharExistUsecase.js";
import { GroupIsMatchUsecase } from "../../application/usecases/group/groupIsMatchUsecase.js";

class GroupController {
    #repository = new GroupInMemoryRepository();

    async create(request) {
        const usecase = new GroupCreateUsecase();
        return await usecase.execute(request);
    }

    async getById(id) {
        const usecase = new GroupGetByIdUsecase(this.#repository);
        return await usecase.execute(id);
    }

    async save(id, data) {
        const usecase = new GroupSaveUsecase(this.#repository);
        await usecase.execute(id, data);
    }

    async reset(request) {
        const usecase = new GroupResetUsecase()
        return await usecase.execute(request);
    }

    async isEmpty(questions) {
        const usecase = new GroupWordsEmptyVerify();
        return await usecase.execute(questions);
    }

    removeWordById(words, wordId) {
        return new GroupRemoveWordByIdUsecase().execute(words, wordId);
    }

    newWord(group) {
        return new GroupNewWordUsecase().execute(group);
    }

    findChar(char, currentInfo) {
        return new GroupFindCharUsecase().execute(char, currentInfo);
    }

    charExist(chars, char) {
        return new GroupCharExistUsecase().execute(chars, char);
    }

    hangmanVerify(hangmanLevel) {
        return new GroupHangmanVerifyUsecase().execute(hangmanLevel);
    }

    isMatch(currentInfo) {
        return new GroupIsMatchUsecase().execute(currentInfo);
    }

    getHangmanStatus(hangmanLevel) {
        return new GroupGetHangmanStatusUsecase().execute(hangmanLevel);
    }

    async delete(id) {
        const usecase = new GroupDeleteByIdUsecase(this.#repository);
        return await usecase.execute(id);
    }
}

export default new GroupController();
