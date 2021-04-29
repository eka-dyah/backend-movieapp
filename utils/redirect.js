const redirect = (paramValue = "") => {
    return async (req, res, next) => {
        console.log(req.url);
        res.redirect(`${req.baseUrl}${req.url ? req.url + '/' : '/'}${paramValue}`);
    }
}

module.exports = redirect;