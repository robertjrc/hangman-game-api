import { GroupCreateUsecase } from "../../application/usecases/group/groupCreateUsecase.js";
import { GroupDeleteByIdUsecase } from "../../application/usecases/group/groupDeleteByIdUsecase.js";
import { GroupGetByIdUsecase } from "../../application/usecases/group/groupGetByIdUsecase.js";
import { GroupWordsEmptyVerify } from "../../application/usecases/group/groupWordsEmptyVerifyUsecase.js";
import { GroupRemoveWordByIdUsecase } from "../../application/usecases/group/groupRemoveWordByIdUsecase.js";
import { GroupResetUsecase } from "../../application/usecases/group/groupResetUsecase.js";
import { GroupSaveUsecase } from "../../application/usecases/group/groupSaveUsecase.js";
import { GroupSetWordUsecase } from "../../application/usecases/group/groupSetWordUsecase.js";
import { GroupInMemoryRepository } from "../../infrastructure/repositories/groupInMemoryRepository.js"
import { GroupWordCheckUsecase } from "../../application/usecases/group/groupWordCheckUsecase.js";
import { GroupHangmanLevelCheckUsecase } from "../../application/usecases/group/groupHangmanLevelCheckUsecase.js";
import { GroupHangmanUsecase } from "../../application/usecases/group/groupHangmanUsecase.js";
import { GroupCharCheckUsecase } from "../../application/usecases/group/groupCharCheckUsecase.js";
import { GroupIsFinalCheckUsecase } from "../../application/usecases/group/groupIsFinalCheckUsecase.js";

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
        return await usecase.execute(id, data);
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

    setWord(group) {
        return new GroupSetWordUsecase().execute(group);
    }

    wordCheck(char, currentInfo) {
        return new GroupWordCheckUsecase().execute(char, currentInfo);
    }

    charCheck(chars, char) {
        return new GroupCharCheckUsecase().execute(chars, char);
    }

    hangmanLevelCheck(hangmanLevel) {
        return new GroupHangmanLevelCheckUsecase().execute(hangmanLevel);
    }

    isFinal(currentInfo) {
        return new GroupIsFinalCheckUsecase().execute(currentInfo);
    }

    getHangmanLevel(hangmanLevel) {
        return new GroupHangmanUsecase().execute(hangmanLevel);
    }

    async delete(id) {
        const usecase = new GroupDeleteByIdUsecase(this.#repository);
        return await usecase.execute(id);
    }
}

export default new GroupController();
