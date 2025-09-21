export class Result {
    static success(message, value = null) {
        return {
            success: true,
            message,
            data: value
        }
    }

    static failure(message, value = null) {
        return {
            success: false,
            message,
            data: value
        }
    }
}
