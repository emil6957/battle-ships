function sleep(delay) {
    // eslint-disable-next-line no-promise-executor-return
    return new Promise((resolve) => setTimeout(resolve, delay));
}

module.exports = sleep;
