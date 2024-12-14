var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { mergeTheme } from "nodoku-core";
import { listCompDefaultThemeImpl } from "./list-comp-theme";
import { ts } from "nodoku-core";
export function ListCompImpl(props) {
    return __awaiter(this, void 0, void 0, function () {
        var key, list, i18nextProvider, lng, listTheme, effectiveTheme, t, listItems;
        var _a, _b, _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    key = props.key, list = props.list, i18nextProvider = props.i18nextProvider, lng = props.lng, listTheme = props.listTheme;
                    effectiveTheme = mergeTheme(listTheme, listCompDefaultThemeImpl);
                    return [4 /*yield*/, i18nextProvider(lng)];
                case 1:
                    t = (_e.sent()).t;
                    listItems = list.items.map(function (item) {
                        return <li key={item.key} className={"listItemStyle ".concat(ts(effectiveTheme, "listItemStyle"))} dangerouslySetInnerHTML={t(item)}/>;
                    });
                    if (list.ordered) {
                        return [2 /*return*/, <ol key={key} className={"listStyle ".concat((_a = effectiveTheme.listStyle) === null || _a === void 0 ? void 0 : _a.base, " ").concat((_b = effectiveTheme.listStyle) === null || _b === void 0 ? void 0 : _b.decoration)}>{listItems}</ol>];
                    }
                    else {
                        return [2 /*return*/, <ul key={key} className={"listStyle ".concat((_c = effectiveTheme.listStyle) === null || _c === void 0 ? void 0 : _c.base, " ").concat((_d = effectiveTheme.listStyle) === null || _d === void 0 ? void 0 : _d.decoration)}>{listItems}</ul>];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
