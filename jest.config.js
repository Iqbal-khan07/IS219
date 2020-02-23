// jest.config.js
module.exports = {
    verbose: true,
    testURL: "http://localhost:3000/",
    "coverageDirectory": "./tests/coverage",

    "coveragePathIgnorePatterns": [
        "./jest",
    ],
};