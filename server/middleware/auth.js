

export const authenticateToken = async (req, res, next) => {
    const user = sessionStorage.getItem('user')

    if (user === null)
        return res.sendStatus(401)
    next();

};