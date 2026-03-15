export const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
};

export const validatePassword = (password) => {
    return password && password.trim().length >= 4;
};
