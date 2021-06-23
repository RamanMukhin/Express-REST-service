const toTaskDto = (requestBody) => {
    const { title, order, description, userId, boardId, columnId } = requestBody;
    return { title, order, description, userId, boardId, columnId };
};
const toTask = (boardId, taskDto) => {
    const { title, order, description, userId, columnId } = taskDto;
    return { title, order, description, userId, boardId, columnId };
};
const toUpdateTask = (id, taskUpdateFrom) => {
    const { title, order, description, userId, boardId, columnId } = taskUpdateFrom;
    return { id, title, order, description, userId, boardId, columnId };
};
export { toTaskDto, toUpdateTask, toTask };
