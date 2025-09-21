import { Result } from "../../common/result.js";

export class PlayerCorrectAnswerUsecase {
    execute(player) {
        player.hits += 1;
        player.moves += 1;

        const winPercentage = ((player.hits / player.moves) * 100).toFixed(0);

        if (winPercentage >= 90) player.score += 10;
        if (winPercentage >= 51 && winPercentage <= 89) player.score += 5;
        if (winPercentage <= 50) player.score += 3;

        return Result.success("Player status updated successfully.", player);
    }
}
