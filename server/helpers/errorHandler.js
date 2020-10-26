module.exports = errorHandler;

function errorHandler(err, req, res, next) {
    console.log(err, 'ERERERERER');
    if (typeof (err) === 'string') {
        return res.status(400).json({ message: err });
    }

    if (err.name === 'ValidationError') {
        return res.status(400).json({ message: err.message });
    }

    if (err.name === 'AuthError') {
        return res.status(401).json({ message: 'Invalid Token' });
    }

    return res.status(500).json({ message: err.message });
}