"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var glamorous_1 = require("glamorous");
var contiamo_ui_utils_1 = require("contiamo-ui-utils");
var style = function (_a) {
    var theme = _a.theme, color = _a.color;
    var backgroundColor = color ? contiamo_ui_utils_1.hexOrColor(color)((theme.colors && theme.colors[color]) || "white") : "white";
    return {
        backgroundColor: backgroundColor,
        display: "flex",
        flexDirection: "column",
        width: "fit-content",
        padding: theme.spacing / 2,
        color: contiamo_ui_utils_1.readableTextColor(backgroundColor)(["black", "white"]),
        "&.Stat + .Stat": {
            borderLeft: "1px solid",
            borderLeftColor: contiamo_ui_utils_1.darken(backgroundColor)(10)
        },
        "& .Stat__label": {
            marginBottom: 3,
            fontSize: ".8rem",
            fontWeight: 600,
            color: contiamo_ui_utils_1.readableTextColor(backgroundColor)([theme.greys["60"], theme.greys["10"]])
        }
    };
};
var Stat = function (_a) {
    var className = _a.className, label = _a.label, children = _a.children;
    return (React.createElement("div", { className: className + " Stat" },
        React.createElement("small", { className: "Stat__label" }, label),
        React.createElement("span", { className: "Stat__value" }, children)));
};
exports.Stat = Stat;
exports.default = glamorous_1.default(Stat)(style);
//# sourceMappingURL=Stat.js.map