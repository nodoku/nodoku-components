var HighlightedCodeThemeImpl = /** @class */ (function () {
    function HighlightedCodeThemeImpl() {
    }
    HighlightedCodeThemeImpl.defaultTheme = {
        light: "a11y-light",
        dark: "a11y-dark",
        lightDisplay: "light:inline-block",
        darkDisplay: "dark:inline-block",
        codeContainer: {
            base: "text-center w-full",
            decoration: ""
        },
        preContainer: {
            base: "text-left w-full",
            decoration: "border-2 border-gray-200"
        }
    };
    return HighlightedCodeThemeImpl;
}());
export { HighlightedCodeThemeImpl };
export default HighlightedCodeThemeImpl.defaultTheme;
