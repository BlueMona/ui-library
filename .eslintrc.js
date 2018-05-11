module.exports = {
    "parser": "typescript-eslint-parser",
    "env": {
        "browser": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error", "single", { "avoidEscape": true, "allowTemplateLiterals": true }
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
