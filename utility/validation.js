const validate = (value, rules) => {
    
    let isValid = true;

    for (let rule in rules) {
        switch (rule) {
            case 'isEmail':
                isValid = isValid && emailValidator(value);
                break;
            case 'minLength':
                isValid = isValid && minLengthValidator(value, rules[rule]);
                break;
            case 'maxLength':
                isValid = isValid && maxLengthValidator(value, rules[rule]);
                break;
            default:
                isValid = true;
        }
    }
    return isValid;
}

const emailValidator = value => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
}

const minLengthValidator = (value, minLength) => {
    return value.length >= minLength;
}

const maxLengthValidator = (value, maxLength) => {
    return value.length <= maxLength;
}

export default validate;