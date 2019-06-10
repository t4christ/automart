


/**
 * Class representing user validations
 * @class Car
 */

export class Car {
    static postAdchecker(req, res, next) {
        let { state, price, manufacturer, model, bodytype, imageurl } = req.body;
        
        const errors = [];
        if (!state) {
            const error = {
                message: 'Please specify the state of the car'
            };
        
            errors.push(error);
        }
        if (state) {
            state = state.trim();
            if (state.toLowerCase() !== 'new' && state.toLowerCase() !== 'used') {
                const error = {
                    message: 'State can only be new or used'
                };
                errors.push(error);
            }

        }


        if (!price) {
            const error = {
                message: 'You will need to specify a sale price'
            };
            errors.push(error);
        }
        if (price) {
            price = price.trim();
            if (!/^\d+$/.test(price)) {
                const error = {
                    message: 'Price should be numbers only'
                };
                errors.push(error);
            }
        }

        if (!manufacturer) {
            const error = {
                message: 'Specify a manufacturer'
            };
            errors.push(error);
        }

        if (manufacturer) {
            manufacturer = manufacturer.trim();
            if (/[^a-zA-Z]/.test(manufacturer)) {
                const error = {
                    message: 'Manufacturer field accepts alphabets only'
                };
                errors.push(error);
            }
        }

        if (!model) {
            const error = {
                message: 'Specify the model of the vehicle'
            };
            errors.push(error);
        }

        if (model) {
            model = model.trim();
            if (/[^a-zA-Z]/.test(model)) {
                const error = {
                    message: 'Model field accepts alphabets only'
                };
                errors.push(error);
            }
        }

        if (!bodytype) {
            const error = {
                message: 'You will need to specify a bodytype'
            };
            errors.push(error);
        }

        if (bodytype) {
            bodytype = bodytype.trim();
            if (/[^a-zA-Z]/.test(bodytype)) {
                const error = {
                    message: 'Bodytype field accepts alphabets only'
                };
                errors.push(error);
            }
        }

        if (!imageurl) {
            const error = {
                message: 'Please upload an image for this vehicle'
            };
            errors.push(error);
        }


        if (errors.length) {
            return res.status(400).json({
                status: 400,
                errors: {
                    body: errors.map(err => err.message)
                }
            });
        }


        req.body.state = state.toLowerCase().trim();
        req.body.price = price;
        req.body.manufacturer = manufacturer.toLowerCase();
        req.body.model = model.toLowerCase();
        req.body.bodytype = bodytype.toLowerCase();
        return next();
    }

}


