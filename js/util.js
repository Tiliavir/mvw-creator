"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNullOrUndefined = (o) => {
    return o === null || o === undefined;
};
exports.isNullOrEmpty = (o) => {
    return exports.isNullOrUndefined(o) || o.length === 0;
};
//# sourceMappingURL=util.js.map