exports.logout = (req, res, next) => {
    console.log(`\nLOG${req.isAuthenticated()}`, req.user);
    console.log('CALL: LOGOUT');
    delete req.logout();
    return res.json({
        ok: true,
        error: null,
        status: 200,
    });
};
