function toTaskDto(requestBody) {
    return {
        title: requestBody.title,
        order: requestBody.order,
        description: requestBody.description,
        userId: requestBody.userId,
        boardId: requestBody.boardId,
        columnId: requestBody.columnId,
    };
}
export { toTaskDto };
