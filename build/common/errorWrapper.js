export function errorWrapper(handler) {
    async function wrapper(req, res, next) {
        try {
            await handler(req, res, next);
        }
        catch (err) {
            next(err);
        }
    }
    return wrapper;
}
;
