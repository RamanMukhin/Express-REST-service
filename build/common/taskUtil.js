function toTaskDto(requestBody) {
    const { title, order, description, userId, boardId, columnId } = requestBody;
    return { title, order, description, userId, boardId, columnId };
}
const toTask = (id, taskUpdateFrom) => {
    const { title, order, description, userId, boardId, columnId } = taskUpdateFrom;
    return { id, title, order, description, userId, boardId, columnId };
};
export { toTaskDto, toTask };
