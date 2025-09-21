import { RNG } from "../../application/utils/RNG.js";

export class Group {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.players = [];
        this.words = null;
        this.current_info = {
            hint: null,
            response: null,
            traits: [],
            chars: [],
            hangman_level: 0,
            word_length: 0,
            word_id: null,
            message_id: null
        };
        this.moves = 1;
        this.status = true;
    }

    setCurrentInfo(words) {
        const wordRand = words[RNG(0, words.length)];

        this.current_info.hint = wordRand.hint;
        this.current_info.response = wordRand.word;
        this.current_info.traits = this.#wordToTraits(wordRand.word);
        this.current_info.hangman_level = 0;
        this.current_info.word_length = this.current_info.traits.length;
        this.current_info.word_id = wordRand.id;
    }

    #wordToTraits(word) {
        const wordSplitted = word.split("");
        const traits = new Array();

        for (let i = 0; i < wordSplitted.length; i++) {
            traits[i] = "_";
        }

        return traits;
    }
}
