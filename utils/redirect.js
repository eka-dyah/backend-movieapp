const redirect = (paramValue = "") => {
    return async (req, res, next) => {
        const urlReq = req.url !== '/' ? req.url + '/' : '/';
        res.redirect(`${req.baseUrl}${urlReq}${paramValue}`);
    }
}

module.exports = redirect;