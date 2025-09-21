import { PlayerCorrectAnswerUsecase } from "../../application/usecases/player/playerCorrectAnswerUsecase.js";
import { PlayerCreateUsecase } from "../../application/usecases/player/playerCreateUsecase.js"
import { PlayerOverallPlayersScore } from "../../application/usecases/player/playerOverAllscoreUsecase.js";
import { PlayerWrongAnswerUsecase } from "../../application/usecases/player/playerWrongAnswerUsecase.js";

class PlayerController {
    create(request) {
        return new PlayerCreateUsecase().execute(request);
    }

    correctAnswer(player) {
        return new PlayerCorrectAnswerUsecase().execute(player);
    }

    wrongAnswer(player) {
        return new PlayerWrongAnswerUsecase().execute(player);
    }

    overallScore(players) {
        return new PlayerOverallPlayersScore().execute(players);
    }
}

export default new PlayerController();
