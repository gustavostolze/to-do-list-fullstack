const validateTitle = (request, response, next) => {
    const { body } = request;

    if (body.title === undefined) {
        response.status(400).json({ message: 'The "title" field is required' });
    } else if (body.title === '') {
        response.status(400).json({ message: 'The "title" field cannot be empty' });
    } else {
        next();
    }

};

const validateStatus = (request, response, next) => {
    const { body } = request;

    if (body.status === undefined ) {
        response.status(400).json({ message: 'The "status" field is required'});
    } else if (body.status === '') {
        response.status(400).json({ message: 'The "status" field cannot be empty' });
    } else {
        next();
    }
};

module.exports = {
    validateTitle,
    validateStatus
};