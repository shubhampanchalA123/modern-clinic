(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/HairGrowth-Clinic/components/ThemeToggle.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ThemeToggle() {
    _s();
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Avoid hydration mismatch
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeToggle.useEffect": ()=>setMounted(true)
    }["ThemeToggle.useEffect"], []);
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: ()=>setTheme(theme === "dark" ? "light" : "dark"),
        className: "p-2 rounded-full bg-secondary hover:bg-muted transition",
        children: theme === "dark" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
            className: "w-5 h-5 text-accent"
        }, void 0, false, {
            fileName: "[project]/HairGrowth-Clinic/components/ThemeToggle.jsx",
            lineNumber: 21,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
            className: "w-5 h-5 text-primary"
        }, void 0, false, {
            fileName: "[project]/HairGrowth-Clinic/components/ThemeToggle.jsx",
            lineNumber: 23,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/HairGrowth-Clinic/components/ThemeToggle.jsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(ThemeToggle, "uGU5l7ciDSfqFDe6wS7vfMb29jQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$components$2f$ThemeToggle$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/components/ThemeToggle.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$react$2d$icons$2f$sl$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/react-icons/sl/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function Navbar() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    // Detect scroll for navbar styling
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>setScrolled(window.scrollY > 20)
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    // Pages where floating buttons should be hidden
    const hideFloating = [
        "/HairGrowth/register",
        "/HairGrowth/coach"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: `sticky top-0 z-40 transition-all duration-300 ${scrolled ? "bg-card/90 backdrop-blur border-b border-border shadow-soft" : "bg-transparent backdrop-blur"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-6 py-4 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "flex items-center gap-3 cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold shadow-soft",
                                        children: "MC"
                                    }, void 0, false, {
                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                                        lineNumber: 39,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-lg font-semibold text-foreground",
                                                children: "Modern Clinic"
                                            }, void 0, false, {
                                                fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                                                lineNumber: 43,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-muted-foreground -mt-1",
                                                children: "Doctor-Guided Hair Regrowth"
                                            }, void 0, false, {
                                                fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                                                lineNumber: 44,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                                        lineNumber: 42,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "hidden md:flex items-center gap-8 text-sm font-medium relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "flex items-center gap-1 hover:text-primary transition",
                                                children: [
                                                    "About Us",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$react$2d$icons$2f$sl$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SlArrowDown"], {}, void 0, false, {
                                                            fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                                                            lineNumber: 57,
                                                            columnNumber: 43
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                                                        lineNumber: 57,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                                                lineNumber: 55,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "   absolute left-0 top-full mt-1 w-56    bg-muted border border-border shadow-sm   opacity-0 invisible group-hover:opacity-100 group-hover:visible   transition-all duration-200 rounded-md   p-3   ",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/",
                                                        className: "block px-3 py-2 hover:bg-card transition",
                                                        children: "Home"
                                                    }, void 0, false, {
                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                                                        lineNumber: 69,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/HairGrowth/doctor",
                                                        className: "block px-3 py-2 hover:bg-card transition",
                                                        children: "Dr. Devendra"
                                                    }, void 0, false, {
                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                                                        lineNumber: 72,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/HairGrowth/faq",
                                                        className: "block px-3 py-2 hover:bg-card transition",
                                                        children: "FAQ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                                                        lineNumber: 75,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                                                lineNumber: 60,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                                        lineNumber: 54,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "flex items-center gap-1 hover:text-primary transition",
                                                children: [
                                                    "Services",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$react$2d$icons$2f$sl$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SlArrowDown"], {}, void 0, false, {
                                                            fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                                                            lineNumber: 86,
                                                            columnNumber: 43
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                                                        lineNumber: 86,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                                                lineNumber: 84,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "   absolute left-0 top-full mt-1 w-56    bg-muted border border-border shadow-sm   opacity-0 invisible group-hover:opacity-100 group-hover:visible   transition-all duration-200 rounded-md   p-3   ",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/HairGrowth",
                                                        className: "block px-3 py-2 hover:bg-card transition",
                                                        children: "Hair Growth"
                                                    }, void 0, false, {
                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                                                        lineNumber: 98,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/SkinCare",
                                                        className: "block px-3 py-2 hover:bg-card transition",
                                                        children: "Skin Care"
                                                    }, void 0, false, {
                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                                                        lineNumber: 101,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/WeightLoss",
                                                        className: "block px-3 py-2 hover:bg-card transition",
                                                        children: "Weight Loss"
                                                    }, void 0, false, {
                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                                                        lineNumber: 104,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                                                lineNumber: 89,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/contact",
                                        className: "hover:text-primary transition",
                                        children: "Contact"
                                    }, void 0, false, {
                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$components$2f$ThemeToggle$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "md:hidden p-2 rounded-md hover:bg-muted transition",
                                onClick: ()=>setOpen(!open),
                                children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                                    lineNumber: 123,
                                    columnNumber: 21
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                                    lineNumber: 123,
                                    columnNumber: 39
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:hidden bg-card border-t border-border shadow-medium",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col px-6 py-4 space-y-4 text-sm font-medium text-foreground",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                    className: "group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                            className: "cursor-pointer py-2 hover:text-primary flex justify-between",
                                            children: [
                                                "About Us",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$react$2d$icons$2f$sl$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SlArrowDown"], {}, void 0, false, {
                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                                                        lineNumber: 136,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                                                    lineNumber: 136,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                                            lineNumber: 134,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ml-3 mt-2 space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/",
                                                    onClick: ()=>setOpen(false),
                                                    className: "block hover:text-primary",
                                                    children: "Home"
                                                }, void 0, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                                                    lineNumber: 139,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/HairGrowth/doctor",
                                                    onClick: ()=>setOpen(false),
                                                    className: "block hover:text-primary",
                                                    children: "Dr. Devendra"
                                                }, void 0, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                                                    lineNumber: 140,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/HairGrowth/faq",
                                                    onClick: ()=>setOpen(false),
                                                    className: "block hover:text-primary",
                                                    children: "FAQ"
                                                }, void 0, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                                                    lineNumber: 143,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                                            lineNumber: 138,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                                    lineNumber: 133,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                    className: "group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                            className: "cursor-pointer py-2 hover:text-primary flex justify-between",
                                            children: [
                                                "Services",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$react$2d$icons$2f$sl$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SlArrowDown"], {}, void 0, false, {
                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                                                        lineNumber: 153,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                                                    lineNumber: 153,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                                            lineNumber: 151,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ml-3 mt-2 space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/HairGrowth",
                                                    onClick: ()=>setOpen(false),
                                                    className: "block hover:text-primary",
                                                    children: "Hair Growth"
                                                }, void 0, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                                                    lineNumber: 156,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/SkinCare",
                                                    onClick: ()=>setOpen(false),
                                                    className: "block hover:text-primary",
                                                    children: "Skin Care"
                                                }, void 0, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                                                    lineNumber: 159,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/WeightLoss",
                                                    onClick: ()=>setOpen(false),
                                                    className: "block hover:text-primary",
                                                    children: "Weight Loss"
                                                }, void 0, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                                                    lineNumber: 162,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                                            lineNumber: 155,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                                    lineNumber: 150,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/contact",
                                    onClick: ()=>setOpen(false),
                                    className: "hover:text-primary",
                                    children: "Contact"
                                }, void 0, false, {
                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                                    lineNumber: 169,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$components$2f$ThemeToggle$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                                        lineNumber: 174,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                                    lineNumber: 173,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                            lineNumber: 130,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                        lineNumber: 129,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            !hideFloating.includes(pathname) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/HairGrowth/register",
                className: "   fixed bottom-6 left-1/2 -translate-x-1/2 z-50   bg-gradient-to-br from-primary to-accent   text-white font-semibold shadow-xl hover:shadow-2xl transition   px-6 py-2 text-sm md:px-10 md:py-3 md:text-xl rounded-full   ",
                children: "Book Consultation"
            }, void 0, false, {
                fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                lineNumber: 184,
                columnNumber: 9
            }, this),
            !hideFloating.includes(pathname) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "https://wa.me/919770799998",
                target: "_blank",
                className: "   fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground p-4 rounded-full    shadow-xl hover:shadow-2xl transition   ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaWhatsapp"], {
                    size: 26
                }, void 0, false, {
                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                    lineNumber: 207,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/HairGrowth-Clinic/components/layout/header/Navbar.jsx",
                lineNumber: 199,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(Navbar, "J/vsj44rE8ObvSOob5s1OVNg75M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/HairGrowth-Clinic/components/layout/Footer.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        id: "footer-section",
        className: "bg-card/60 backdrop-blur-xl border-t border-border mt-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-1 w-full bg-gradient-to-r from-primary to-accent opacity-70"
            }, void 0, false, {
                fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 lg:grid-cols-5 gap-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:col-span-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold shadow-soft",
                                            children: "MC"
                                        }, void 0, false, {
                                            fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
                                            lineNumber: 19,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "text-xl font-semibold text-foreground",
                                                    children: "Modern Clinic"
                                                }, void 0, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
                                                    lineNumber: 23,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground -mt-1",
                                                    children: "Doctor-Guided Health & Wellness Care"
                                                }, void 0, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
                                                    lineNumber: 24,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
                                            lineNumber: 22,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
                                    lineNumber: 18,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
                                lineNumber: 17,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-muted-foreground text-sm leading-relaxed max-w-md",
                                children: "A holistic doctor-led program combining Homeopathy, Nutrition & Lifestyle healing to treat chronic and lifestyle-related health problems from the root."
                            }, void 0, false, {
                                fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-sm text-muted-foreground",
                                children: "5000+ Patients • 10+ Years Experience"
                            }, void 0, false, {
                                fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-md font-semibold text-foreground mb-4",
                                children: "Quick Links"
                            }, void 0, false, {
                                fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-3 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FooterLink, {
                                        href: "/doctor",
                                        title: "About Dr."
                                    }, void 0, false, {
                                        fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
                                        lineNumber: 45,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FooterLink, {
                                        href: "/HairGrowth/register",
                                        title: "Book Assessment"
                                    }, void 0, false, {
                                        fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
                                        lineNumber: 46,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FooterLink, {
                                        href: "/testimonials",
                                        title: "Testimonials"
                                    }, void 0, false, {
                                        fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
                                        lineNumber: 47,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FooterLink, {
                                        href: "/blog",
                                        title: "Blogs"
                                    }, void 0, false, {
                                        fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
                                        lineNumber: 48,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FooterLink, {
                                        href: "/faq",
                                        title: "FAQ"
                                    }, void 0, false, {
                                        fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
                                        lineNumber: 49,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FooterLink, {
                                        href: "/privacy-policy",
                                        title: "Privacy Policy"
                                    }, void 0, false, {
                                        fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
                                        lineNumber: 50,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FooterLink, {
                                        href: "/terms-and-conditions",
                                        title: "Terms & Conditions"
                                    }, void 0, false, {
                                        fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FooterLink, {
                                        href: "/refund-policy",
                                        title: "Refund & Cancellation Policy"
                                    }, void 0, false, {
                                        fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-md font-semibold text-foreground mb-4",
                                children: "Our Centres"
                            }, void 0, false, {
                                fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-3 text-sm text-muted-foreground",
                                children: [
                                    "Mumbai",
                                    "Indore",
                                    "Nagpur",
                                    "Delhi NCR",
                                    "Ujjain",
                                    "Kolkata"
                                ].map((city)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "hover:text-primary transition",
                                        children: city
                                    }, city, false, {
                                        fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-md font-semibold text-foreground mb-4",
                                children: "Contact"
                            }, void 0, false, {
                                fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-3 text-sm text-muted-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                size: 16,
                                                className: "text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
                                                lineNumber: 74,
                                                columnNumber: 15
                                            }, this),
                                            "+91 9770799998"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                size: 16,
                                                className: "text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
                                                lineNumber: 79,
                                                columnNumber: 15
                                            }, this),
                                            "mhomeo@yahoo.com"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                size: 16,
                                                className: "text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
                                                lineNumber: 84,
                                                columnNumber: 15
                                            }, this),
                                            "Mon–Sat: 10 AM – 7 PM"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                size: 16,
                                                className: "text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
                                                lineNumber: 89,
                                                columnNumber: 15
                                            }, this),
                                            "202 Business Island, Indore"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                size: 16,
                                                className: "text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
                                                lineNumber: 94,
                                                columnNumber: 15
                                            }, this),
                                            "121 Orbit Mall, Indore"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                size: 16,
                                                className: "text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
                                                lineNumber: 99,
                                                columnNumber: 15
                                            }, this),
                                            "India (Online Consultations)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 mt-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialIcon, {
                                        href: "https://wa.me/919770799998",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaWhatsapp"], {
                                            size: 22,
                                            color: "#25D366"
                                        }, void 0, false, {
                                            fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
                                            lineNumber: 109,
                                            columnNumber: 21
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialIcon, {
                                        href: "https://www.instagram.com/askdrdevendra",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaInstagram"], {
                                            size: 22,
                                            color: "#E1306C"
                                        }, void 0, false, {
                                            fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
                                            lineNumber: 113,
                                            columnNumber: 21
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialIcon, {
                                        href: "https://www.youtube.com/@ModernHealthNutrition",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaYoutube"], {
                                            size: 24,
                                            color: "#FF0000"
                                        }, void 0, false, {
                                            fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
                                            lineNumber: 117,
                                            columnNumber: 21
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-border py-4 text-center text-sm text-muted-foreground",
                children: [
                    "© ",
                    new Date().getFullYear(),
                    " Modern Clinic — All Rights Reserved."
                ]
            }, void 0, true, {
                fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
                lineNumber: 124,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = Footer;
/* REUSABLE COMPONENTS */ function FooterLink({ href, title }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: href,
            className: "hover:text-primary transition",
            children: title
        }, void 0, false, {
            fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
            lineNumber: 136,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
        lineNumber: 135,
        columnNumber: 5
    }, this);
}
_c1 = FooterLink;
function SocialIcon({ href, icon }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: href,
        target: "_blank",
        className: "w-10 h-10 rounded-xl border border-border flex items-center justify-center transition",
        children: icon
    }, void 0, false, {
        fileName: "[project]/HairGrowth-Clinic/components/layout/Footer.jsx",
        lineNumber: 145,
        columnNumber: 5
    }, this);
}
_c2 = SocialIcon;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Footer");
__turbopack_context__.k.register(_c1, "FooterLink");
__turbopack_context__.k.register(_c2, "SocialIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/HairGrowth-Clinic/components/layout/header/Topbar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TopBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
;
function TopBar() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full bg-[#1F4DA0] text-white text-sm py-2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 flex justify-between items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "opacity-90",
                            children: "Trusted Homeopathy Care Since 1995"
                        }, void 0, false, {
                            fileName: "[project]/HairGrowth-Clinic/components/layout/header/Topbar.jsx",
                            lineNumber: 13,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "opacity-90 hidden sm:block",
                            children: "|  ISO Certified Clinic"
                        }, void 0, false, {
                            fileName: "[project]/HairGrowth-Clinic/components/layout/header/Topbar.jsx",
                            lineNumber: 17,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/Topbar.jsx",
                    lineNumber: 12,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "#footer-section",
                            className: "flex items-center gap-1 hover:text-gray-200 transition",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/Topbar.jsx",
                                    lineNumber: 30,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Find Clinic"
                                }, void 0, false, {
                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/Topbar.jsx",
                                    lineNumber: 31,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/HairGrowth-Clinic/components/layout/header/Topbar.jsx",
                            lineNumber: 26,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "tel:+919770799998",
                            className: "flex items-center gap-1 hover:text-gray-200 transition",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/Topbar.jsx",
                                    lineNumber: 38,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Call Support"
                                }, void 0, false, {
                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/Topbar.jsx",
                                    lineNumber: 39,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/HairGrowth-Clinic/components/layout/header/Topbar.jsx",
                            lineNumber: 35,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://wa.me/919770799998",
                            className: "   w-7 h-7 flex items-center justify-center rounded-full    bg-white/20 hover:bg-white/30 transition   ",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                size: 16,
                                className: "text-white"
                            }, void 0, false, {
                                fileName: "[project]/HairGrowth-Clinic/components/layout/header/Topbar.jsx",
                                lineNumber: 50,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/HairGrowth-Clinic/components/layout/header/Topbar.jsx",
                            lineNumber: 43,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/Topbar.jsx",
                    lineNumber: 23,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/HairGrowth-Clinic/components/layout/header/Topbar.jsx",
            lineNumber: 9,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/HairGrowth-Clinic/components/layout/header/Topbar.jsx",
        lineNumber: 8,
        columnNumber: 9
    }, this);
}
_c = TopBar;
var _c;
__turbopack_context__.k.register(_c, "TopBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$components$2f$ThemeToggle$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/components/ThemeToggle.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$react$2d$icons$2f$sl$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/react-icons/sl/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function Navbar() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>setScrolled(window.scrollY > 20)
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    const hideFloating = [
        "/HairGrowth/register",
        "/HairGrowth/coach"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: `
                sticky top-0 z-40 transition-all duration-300 
                bg-card ${scrolled ? "shadow-[0_1px_6px_rgba(31,77,160,0.15)]" : ""}
                `,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-6 py-4 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "flex items-center gap-3 cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-lg bg-primary flex items-center justify-center            text-primary-foreground font-bold",
                                        children: "MC"
                                    }, void 0, false, {
                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                        lineNumber: 38,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-lg font-semibold text-foreground",
                                                children: "Modern Clinic"
                                            }, void 0, false, {
                                                fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                lineNumber: 42,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-muted-foreground -mt-1",
                                                children: "Holistic Healing for Every Age"
                                            }, void 0, false, {
                                                fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                lineNumber: 43,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                        lineNumber: 41,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                lineNumber: 37,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "hidden md:flex items-center gap-8 text-sm font-medium",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "flex items-center gap-1 hover:text-primary transition",
                                                children: [
                                                    "Conditions ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$react$2d$icons$2f$sl$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SlArrowDown"], {
                                                        className: "text-xs"
                                                    }, void 0, false, {
                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                        lineNumber: 55,
                                                        columnNumber: 44
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                lineNumber: 54,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "   absolute left-0 top-full mt-3 w-[750px]   bg-muted border border-border shadow-lg rounded-xl   opacity-0 invisible group-hover:opacity-100 group-hover:visible   transition-all duration-300 p-6 grid grid-cols-4 gap-6 z-50   ",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "text-primary font-semibold mb-3",
                                                                children: "Hair & Skin"
                                                            }, void 0, false, {
                                                                fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                lineNumber: 68,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "space-y-2 text-muted-foreground",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "/conditions/hair-fall",
                                                                            className: "hover:text-foreground transition",
                                                                            children: "Hair Fall"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                            lineNumber: 70,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                        lineNumber: 70,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "/conditions/alopecia",
                                                                            className: "hover:text-foreground transition",
                                                                            children: "Alopecia"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                            lineNumber: 71,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                        lineNumber: 71,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "/conditions/dandruff",
                                                                            className: "hover:text-foreground transition",
                                                                            children: "Dandruff"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                            lineNumber: 72,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                        lineNumber: 72,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "/conditions/acne",
                                                                            className: "hover:text-foreground transition",
                                                                            children: "Acne"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                            lineNumber: 73,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                        lineNumber: 73,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "/conditions/eczema",
                                                                            className: "hover:text-foreground transition",
                                                                            children: "Eczema"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                            lineNumber: 74,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                        lineNumber: 74,
                                                                        columnNumber: 41
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                lineNumber: 69,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                        lineNumber: 67,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "text-primary font-semibold mb-3",
                                                                children: "Chronic Health"
                                                            }, void 0, false, {
                                                                fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                lineNumber: 80,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "space-y-2 text-muted-foreground",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "/conditions/thyroid",
                                                                            className: "hover:text-foreground transition",
                                                                            children: "Thyroid"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                            lineNumber: 82,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                        lineNumber: 82,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "/conditions/arthritis",
                                                                            className: "hover:text-foreground transition",
                                                                            children: "Arthritis"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                            lineNumber: 83,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                        lineNumber: 83,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "/conditions/sinus",
                                                                            className: "hover:text-foreground transition",
                                                                            children: "Sinus"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                            lineNumber: 84,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                        lineNumber: 84,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "/conditions/migraine",
                                                                            className: "hover:text-foreground transition",
                                                                            children: "Migraine"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                            lineNumber: 85,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                        lineNumber: 85,
                                                                        columnNumber: 41
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                lineNumber: 81,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                        lineNumber: 79,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "text-primary font-semibold mb-3",
                                                                children: "Emotional & Lifestyle"
                                                            }, void 0, false, {
                                                                fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                lineNumber: 91,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "space-y-2 text-muted-foreground",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "/conditions/stress",
                                                                            className: "hover:text-foreground transition",
                                                                            children: "Stress"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                            lineNumber: 93,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                        lineNumber: 93,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "/conditions/anxiety",
                                                                            className: "hover:text-foreground transition",
                                                                            children: "Anxiety"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                            lineNumber: 94,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                        lineNumber: 94,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "/conditions/sleep-disturbance",
                                                                            className: "hover:text-foreground transition",
                                                                            children: "Sleep Disturbance"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                            lineNumber: 95,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                        lineNumber: 95,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "/conditions/immunity",
                                                                            className: "hover:text-foreground transition",
                                                                            children: "Immunity"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                            lineNumber: 96,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                        lineNumber: 96,
                                                                        columnNumber: 41
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                lineNumber: 92,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                        lineNumber: 90,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "text-primary font-semibold mb-3",
                                                                children: "Child Care"
                                                            }, void 0, false, {
                                                                fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                lineNumber: 102,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "space-y-2 text-muted-foreground",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "/conditions/allergies",
                                                                            className: "hover:text-foreground transition",
                                                                            children: "Allergies"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                            lineNumber: 104,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                        lineNumber: 104,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "/conditions/low-immunity",
                                                                            className: "hover:text-foreground transition",
                                                                            children: "Low Immunity"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                            lineNumber: 105,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                        lineNumber: 105,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "/conditions/behavioral-support",
                                                                            className: "hover:text-foreground transition",
                                                                            children: "Behavioral Support"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                            lineNumber: 106,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                        lineNumber: 106,
                                                                        columnNumber: 41
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                lineNumber: 103,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                        lineNumber: 101,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                lineNumber: 58,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                        lineNumber: 53,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "flex items-center gap-1 hover:text-primary transition",
                                                children: [
                                                    "Our Doctors ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$react$2d$icons$2f$sl$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SlArrowDown"], {
                                                        className: "text-xs"
                                                    }, void 0, false, {
                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                        lineNumber: 115,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                lineNumber: 114,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "   absolute left-0 top-full mt-3 w-64 bg-muted border border-border   shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100   group-hover:visible transition-all duration-200 p-3 z-50   ",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/doctor",
                                                        className: "block px-3 py-2 hover:bg-card",
                                                        children: "Meet Our Specialists"
                                                    }, void 0, false, {
                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                        lineNumber: 125,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "#qualification",
                                                        className: "block px-3 py-2 hover:bg-card",
                                                        children: "Qualifications & Expertise"
                                                    }, void 0, false, {
                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                        lineNumber: 126,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "#experience",
                                                        className: "block px-3 py-2 hover:bg-card",
                                                        children: "Years of Experience"
                                                    }, void 0, false, {
                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                        lineNumber: 127,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "#",
                                                        className: "block px-3 py-2 hover:bg-card",
                                                        children: "Certifications"
                                                    }, void 0, false, {
                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                        lineNumber: 128,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/videos",
                                                        className: "block px-3 py-2 hover:bg-card",
                                                        children: "Doctor Videos"
                                                    }, void 0, false, {
                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                        lineNumber: 129,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                lineNumber: 118,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                        lineNumber: 113,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "flex items-center gap-1 hover:text-primary transition",
                                                children: [
                                                    "Treatment Approach ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$react$2d$icons$2f$sl$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SlArrowDown"], {
                                                        className: "text-xs"
                                                    }, void 0, false, {
                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                        lineNumber: 136,
                                                        columnNumber: 52
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                lineNumber: 135,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "   absolute left-0 top-full mt-3 w-64 bg-muted border border-border    shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100    group-hover:visible transition-all duration-200 p-3 z-50   ",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/treatment-approach/how-homeopathy-works",
                                                        className: "block px-3 py-2 hover:bg-card",
                                                        children: "How Homeopathy Works"
                                                    }, void 0, false, {
                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                        lineNumber: 146,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/treatment-approach/digital-diagnosis-method",
                                                        className: "block px-3 py-2 hover:bg-card",
                                                        children: "Digital Diagnosis Method"
                                                    }, void 0, false, {
                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                        lineNumber: 147,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/treatment-approach/safety-and-research",
                                                        className: "block px-3 py-2 hover:bg-card",
                                                        children: "Safety & Research"
                                                    }, void 0, false, {
                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                        lineNumber: 148,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/treatment-approach/custom-programs",
                                                        className: "block px-3 py-2 hover:bg-card",
                                                        children: "Custom Programs"
                                                    }, void 0, false, {
                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                        lineNumber: 149,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/treatment-approach/home-vs-clinic-care",
                                                        className: "block px-3 py-2 hover:bg-card",
                                                        children: "Home vs Clinic Care"
                                                    }, void 0, false, {
                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                        lineNumber: 150,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                lineNumber: 139,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                        lineNumber: 134,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "flex items-center gap-1 hover:text-primary transition",
                                                children: [
                                                    "Results ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$react$2d$icons$2f$sl$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SlArrowDown"], {
                                                        className: "text-xs"
                                                    }, void 0, false, {
                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                        lineNumber: 157,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                lineNumber: 156,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "   absolute left-0 top-full mt-3 w-64 bg-muted border border-border    shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100    group-hover:visible transition-all duration-200 p-3 z-50   ",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/testimonials",
                                                        className: "block px-3 py-2 hover:bg-card",
                                                        children: "Before / After"
                                                    }, void 0, false, {
                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                        lineNumber: 167,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/case-studies",
                                                        className: "block px-3 py-2 hover:bg-card",
                                                        children: "Case Studies"
                                                    }, void 0, false, {
                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                        lineNumber: 168,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/google-reviews",
                                                        className: "block px-3 py-2 hover:bg-card",
                                                        children: "Google Reviews"
                                                    }, void 0, false, {
                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                        lineNumber: 169,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/blog",
                                                        className: "block px-3 py-2 hover:bg-card",
                                                        children: "Blogs"
                                                    }, void 0, false, {
                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                        lineNumber: 170,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "#",
                                                        className: "block px-3 py-2 hover:bg-card",
                                                        children: "Video Testimonials"
                                                    }, void 0, false, {
                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                        lineNumber: 171,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                lineNumber: 160,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                        lineNumber: 155,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "flex items-center gap-1 hover:text-primary transition",
                                                children: [
                                                    "Pricing ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$react$2d$icons$2f$sl$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SlArrowDown"], {
                                                        className: "text-xs"
                                                    }, void 0, false, {
                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                        lineNumber: 178,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                lineNumber: 177,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "   absolute left-0 top-full mt-3 w-64 bg-muted border border-border    shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100    group-hover:visible transition-all duration-200 p-3 z-50   ",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/pricing/online-consultation",
                                                        className: "block px-3 py-2 hover:bg-card",
                                                        children: "Online Consultation"
                                                    }, void 0, false, {
                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                        lineNumber: 188,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/pricing/clinic-consultation",
                                                        className: "block px-3 py-2 hover:bg-card",
                                                        children: "Clinic Consultation"
                                                    }, void 0, false, {
                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                        lineNumber: 189,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/pricing/monthly-plans",
                                                        className: "block px-3 py-2 hover:bg-card",
                                                        children: "1 / 3 Month Plans"
                                                    }, void 0, false, {
                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                        lineNumber: 190,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/pricing/family-wellness",
                                                        className: "block px-3 py-2 hover:bg-card",
                                                        children: "Family Wellness Plans"
                                                    }, void 0, false, {
                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                        lineNumber: 191,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                lineNumber: 181,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                        lineNumber: 176,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "flex items-center gap-1 hover:text-primary transition",
                                                children: [
                                                    "Contact ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$react$2d$icons$2f$sl$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SlArrowDown"], {
                                                        className: "text-xs"
                                                    }, void 0, false, {
                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                        lineNumber: 198,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                lineNumber: 197,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "   absolute left-0 top-full mt-3 w-64 bg-muted border border-border    shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100    group-hover:visible transition-all duration-200 p-3 z-50   ",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/HairGrowth/register",
                                                        className: "block px-3 py-2 hover:bg-card",
                                                        children: "Book Appointment"
                                                    }, void 0, false, {
                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                        lineNumber: 208,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "#",
                                                        className: "block px-3 py-2 hover:bg-card",
                                                        children: "Clinic Locator"
                                                    }, void 0, false, {
                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                        lineNumber: 209,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "tel:+919770799998",
                                                        className: "block px-3 py-2 hover:bg-card",
                                                        children: "Emergency Call"
                                                    }, void 0, false, {
                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                        lineNumber: 210,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "https://wa.me/919770799998",
                                                        target: "_blank",
                                                        className: "block px-3 py-2 hover:bg-card",
                                                        children: "WhatsApp Chat"
                                                    }, void 0, false, {
                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                        lineNumber: 211,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                lineNumber: 201,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                        lineNumber: 196,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                lineNumber: 50,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:flex items-center gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/login",
                                        className: "flex items-center gap-1 hover:text-primary",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                lineNumber: 219,
                                                columnNumber: 29
                                            }, this),
                                            " Login"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                        lineNumber: 218,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/HairGrowth/register",
                                        className: "px-5 py-2 rounded-lg bg-[#1F4DA0] text-white font-medium hover:bg-[#0A2C63]",
                                        children: "Book Consultation"
                                    }, void 0, false, {
                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                        lineNumber: 222,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                lineNumber: 217,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$components$2f$ThemeToggle$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                lineNumber: 232,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "md:hidden p-2 rounded-md hover:bg-muted transition",
                                onClick: ()=>setOpen(!open),
                                children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                    lineNumber: 239,
                                    columnNumber: 33
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                    lineNumber: 239,
                                    columnNumber: 51
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                lineNumber: 235,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                        lineNumber: 34,
                        columnNumber: 17
                    }, this),
                    open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:hidden bg-card border-t border-border shadow-medium",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-6 py-4 space-y-4 text-sm font-medium text-foreground",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                            className: "cursor-pointer py-2 hover:text-primary flex justify-between",
                                            children: [
                                                "Conditions ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$react$2d$icons$2f$sl$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SlArrowDown"], {
                                                    className: "text-xs"
                                                }, void 0, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                    lineNumber: 252,
                                                    columnNumber: 48
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                            lineNumber: 251,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ml-3 mt-2 space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-primary font-semibold mb-1",
                                                            children: "Hair & Skin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                            lineNumber: 257,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "ml-2 space-y-1 text-muted-foreground",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "/conditions/hair-fall",
                                                                        children: "Hair Fall"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                        lineNumber: 259,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                    lineNumber: 259,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "/conditions/alopecia",
                                                                        children: "Alopecia"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                        lineNumber: 260,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                    lineNumber: 260,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "/conditions/dandruff",
                                                                        children: "Dandruff"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                        lineNumber: 261,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                    lineNumber: 261,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "/conditions/acne",
                                                                        children: "Acne"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                        lineNumber: 262,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                    lineNumber: 262,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "/conditions/eczema",
                                                                        children: "Eczema"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                        lineNumber: 263,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                    lineNumber: 263,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                            lineNumber: 258,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                    lineNumber: 256,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-primary font-semibold mb-1",
                                                            children: "Chronic Health"
                                                        }, void 0, false, {
                                                            fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                            lineNumber: 268,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "ml-2 space-y-1 text-muted-foreground",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "/conditions/thyroid",
                                                                        children: "Thyroid"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                        lineNumber: 270,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                    lineNumber: 270,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "/conditions/arthritis",
                                                                        children: "Arthritis"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                        lineNumber: 271,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                    lineNumber: 271,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "/conditions/sinus",
                                                                        children: "Sinus"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                        lineNumber: 272,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                    lineNumber: 272,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "/conditions/migraine",
                                                                        children: "Migraine"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                        lineNumber: 273,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                    lineNumber: 273,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                            lineNumber: 269,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                    lineNumber: 267,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-primary font-semibold mb-1",
                                                            children: "Emotional & Lifestyle"
                                                        }, void 0, false, {
                                                            fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                            lineNumber: 278,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "ml-2 space-y-1 text-muted-foreground",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "/conditions/stress",
                                                                        children: "Stress"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                        lineNumber: 280,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                    lineNumber: 280,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "/conditions/anxiety",
                                                                        children: "Anxiety"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                        lineNumber: 281,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                    lineNumber: 281,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "/conditions/sleep-disturbance",
                                                                        children: "Sleep Disturbance"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                        lineNumber: 282,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                    lineNumber: 282,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "/conditions/immunity",
                                                                        children: "Immunity"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                        lineNumber: 283,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                    lineNumber: 283,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                            lineNumber: 279,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                    lineNumber: 277,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-primary font-semibold mb-1",
                                                            children: "Child Care"
                                                        }, void 0, false, {
                                                            fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                            lineNumber: 288,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "ml-2 space-y-1 text-muted-foreground",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "/conditions/allergies",
                                                                        children: "Allergies"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                        lineNumber: 290,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                    lineNumber: 290,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "/conditions/low-immunity",
                                                                        children: "Low Immunity"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                        lineNumber: 291,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                    lineNumber: 291,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "/conditions/behavioral-support",
                                                                        children: "Behavioral Support"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                        lineNumber: 292,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                                    lineNumber: 292,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                            lineNumber: 289,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                    lineNumber: 287,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                            lineNumber: 254,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                    lineNumber: 250,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                            className: "cursor-pointer py-2 hover:text-primary flex justify-between",
                                            children: [
                                                "Our Doctors ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$react$2d$icons$2f$sl$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SlArrowDown"], {
                                                    className: "text-xs"
                                                }, void 0, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                    lineNumber: 302,
                                                    columnNumber: 49
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                            lineNumber: 301,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ml-4 mt-2 space-y-2 text-muted-foreground",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/doctor",
                                                    className: "block",
                                                    children: "Meet Our Specialists"
                                                }, void 0, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                    lineNumber: 305,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "#qualification",
                                                    className: "block",
                                                    children: "Qualifications & Expertise"
                                                }, void 0, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                    lineNumber: 306,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "#experience",
                                                    className: "block",
                                                    children: "Years of Experience"
                                                }, void 0, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                    lineNumber: 307,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "#",
                                                    className: "block",
                                                    children: "Certifications"
                                                }, void 0, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                    lineNumber: 308,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/videos",
                                                    className: "block",
                                                    children: "Doctor Videos"
                                                }, void 0, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                    lineNumber: 309,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                            lineNumber: 304,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                    lineNumber: 300,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                            className: "cursor-pointer py-2 hover:text-primary flex justify-between",
                                            children: [
                                                "Treatment Approach ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$react$2d$icons$2f$sl$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SlArrowDown"], {
                                                    className: "text-xs"
                                                }, void 0, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                    lineNumber: 316,
                                                    columnNumber: 56
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                            lineNumber: 315,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ml-4 mt-2 space-y-2 text-muted-foreground",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/treatment-approach/how-homeopathy-works",
                                                    className: "block",
                                                    children: "How Homeopathy Works"
                                                }, void 0, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                    lineNumber: 319,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/treatment-approach/digital-diagnosis-method",
                                                    className: "block",
                                                    children: "Digital Diagnosis Method"
                                                }, void 0, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                    lineNumber: 320,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/treatment-approach/safety-and-research",
                                                    className: "block",
                                                    children: "Safety & Research"
                                                }, void 0, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                    lineNumber: 321,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/treatment-approach/custom-programs",
                                                    className: "block",
                                                    children: "Custom Programs"
                                                }, void 0, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                    lineNumber: 322,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/treatment-approach/home-vs-clinic-care",
                                                    className: "block",
                                                    children: "Home vs Clinic Care"
                                                }, void 0, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                    lineNumber: 323,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                            lineNumber: 318,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                    lineNumber: 314,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                            className: "cursor-pointer py-2 hover:text-primary flex justify-between",
                                            children: [
                                                "Results ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$react$2d$icons$2f$sl$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SlArrowDown"], {
                                                    className: "text-xs"
                                                }, void 0, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                    lineNumber: 330,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                            lineNumber: 329,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ml-4 mt-2 space-y-2 text-muted-foreground",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/testimonials",
                                                    className: "block",
                                                    children: "Before / After"
                                                }, void 0, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                    lineNumber: 333,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/case-studies",
                                                    className: "block",
                                                    children: "Case Studies"
                                                }, void 0, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                    lineNumber: 334,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/google-reviews",
                                                    className: "block",
                                                    children: "Google Reviews"
                                                }, void 0, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                    lineNumber: 335,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/blog",
                                                    className: "block",
                                                    children: "Blogs"
                                                }, void 0, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                    lineNumber: 336,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "#",
                                                    className: "block",
                                                    children: "Video Testimonials"
                                                }, void 0, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                    lineNumber: 337,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                            lineNumber: 332,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                    lineNumber: 328,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                            className: "cursor-pointer py-2 hover:text-primary flex justify-between",
                                            children: [
                                                "Pricing ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$react$2d$icons$2f$sl$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SlArrowDown"], {
                                                    className: "text-xs"
                                                }, void 0, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                    lineNumber: 344,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                            lineNumber: 343,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ml-4 mt-2 space-y-2 text-muted-foreground",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/pricing/online-consultation",
                                                    className: "block",
                                                    children: "Online Consultation"
                                                }, void 0, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                    lineNumber: 347,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/pricing/clinic-consultation",
                                                    className: "block",
                                                    children: "Clinic Consultation"
                                                }, void 0, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                    lineNumber: 348,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/pricing/monthly-plans",
                                                    className: "block",
                                                    children: "1 / 3 Month Plans"
                                                }, void 0, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                    lineNumber: 349,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/pricing/family-wellness",
                                                    className: "block",
                                                    children: "Family Wellness Plans"
                                                }, void 0, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                    lineNumber: 350,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                            lineNumber: 346,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                    lineNumber: 342,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                            className: "cursor-pointer py-2 hover:text-primary flex justify-between",
                                            children: [
                                                "Contact ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$react$2d$icons$2f$sl$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SlArrowDown"], {
                                                    className: "text-xs"
                                                }, void 0, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                    lineNumber: 357,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                            lineNumber: 356,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ml-4 mt-2 space-y-2 text-muted-foreground",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/HairGrowth/register",
                                                    className: "block",
                                                    children: "Book Appointment"
                                                }, void 0, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                    lineNumber: 360,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "#",
                                                    className: "block",
                                                    children: "Clinic Locator"
                                                }, void 0, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                    lineNumber: 361,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "tel:+919770799998",
                                                    className: "block",
                                                    children: "Emergency Call"
                                                }, void 0, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                    lineNumber: 362,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "https://wa.me/919770799998",
                                                    target: "_blank",
                                                    className: "block",
                                                    children: "WhatsApp Chat"
                                                }, void 0, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                    lineNumber: 363,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                            lineNumber: 359,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                    lineNumber: 355,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-around gap-3 pt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/login",
                                            className: "flex items-center gap-1 text-foreground hover:text-primary",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                                    lineNumber: 372,
                                                    columnNumber: 37
                                                }, this),
                                                " Login"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                            lineNumber: 371,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/HairGrowth/register",
                                            className: "px-4 py-2 rounded-lg bg-[#1F4DA0] text-white font-medium hover:bg-[#0A2C63] whitespace-nowrap",
                                            children: "Book Consultation"
                                        }, void 0, false, {
                                            fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                            lineNumber: 376,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                                    lineNumber: 368,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                            lineNumber: 247,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                        lineNumber: 246,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                lineNumber: 28,
                columnNumber: 13
            }, this),
            !hideFloating.includes(pathname) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "https://wa.me/919770799998",
                target: "_blank",
                className: "   fixed bottom-6 right-6 z-50 bg-[#15c34a] text-primary-foreground p-4 rounded-full    shadow-xl hover:shadow-2xl transition   ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaWhatsapp"], {
                    size: 26
                }, void 0, false, {
                    fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                    lineNumber: 415,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/HairGrowth-Clinic/components/layout/header/MainHeader.jsx",
                lineNumber: 407,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true);
}
_s(Navbar, "J/vsj44rE8ObvSOob5s1OVNg75M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/HairGrowth-Clinic/app/scroll-reset.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollToTop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ScrollToTop() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollToTop.useEffect": ()=>{
            window.scrollTo(0, 0);
        }
    }["ScrollToTop.useEffect"], [
        pathname
    ]);
    return null;
}
_s(ScrollToTop, "V/ldUoOTYUs0Cb2F6bbxKSn7KxI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = ScrollToTop;
var _c;
__turbopack_context__.k.register(_c, "ScrollToTop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/HairGrowth-Clinic/redux/axiosClient.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const axiosClient = __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: ("TURBOPACK compile-time value", "http://13.203.201.103:5006/api/"),
    headers: {
        "Content-Type": "application/json"
    }
});
const __TURBOPACK__default__export__ = axiosClient;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/HairGrowth-Clinic/redux/slices/registerSlice.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearApiState",
    ()=>clearApiState,
    "createOrder",
    ()=>createOrder,
    "default",
    ()=>__TURBOPACK__default__export__,
    "registerAppointment",
    ()=>registerAppointment,
    "registerUser",
    ()=>registerUser,
    "submitData",
    ()=>submitData,
    "verifyAppointmentOtp",
    ()=>verifyAppointmentOtp,
    "verifyPayment",
    ()=>verifyPayment,
    "verifyUser",
    ()=>verifyUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$redux$2f$axiosClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/redux/axiosClient.js [app-client] (ecmascript)");
;
;
const verifyUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("register/verifyUser", async (payload, thunkAPI)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$redux$2f$axiosClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("bookingconsultancy/verify", payload);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || "Verify API failed");
    }
});
const registerUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("register/registerUser", async (formData, thunkAPI)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$redux$2f$axiosClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("bookingconsultancy/register", formData);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || "Registration failed");
    }
});
const submitData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("register/submitData", async ({ consultantId, consultationData, scalpPhoto }, thunkAPI)=>{
    try {
        let data = {
            consultantId,
            consultationData: JSON.stringify(consultationData)
        };
        let headers = {};
        if (scalpPhoto) {
            const formData = new FormData();
            formData.append('consultantId', consultantId);
            formData.append('consultationData', JSON.stringify(consultationData));
            formData.append('scalpPhoto', scalpPhoto);
            data = formData;
            headers['Content-Type'] = 'multipart/form-data';
        }
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$redux$2f$axiosClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("bookingconsultancy/submit", data, {
            headers
        });
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || "Submit data failed");
    }
});
const createOrder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("register/createOrder", async ({ consultantId, amount }, thunkAPI)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$redux$2f$axiosClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("payments/create-order", {
            consultantId,
            amount
        });
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || "Create order failed");
    }
});
const verifyPayment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("register/verifyPayment", async ({ consultantId, razorpay_payment_id, razorpay_order_id, razorpay_signature }, thunkAPI)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$redux$2f$axiosClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("payments/verify", {
            consultantId,
            razorpay_payment_id,
            razorpay_order_id,
            razorpay_signature
        });
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || "Verify payment failed");
    }
});
const registerAppointment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("register/registerAppointment", async (formData, thunkAPI)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$redux$2f$axiosClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("register", formData);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || "Register appointment failed");
    }
});
const verifyAppointmentOtp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("register/verifyAppointmentOtp", async ({ phone, idToken, appointmentId }, thunkAPI)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$redux$2f$axiosClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("verify", {
            phone,
            idToken,
            appointmentId
        });
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || "Verify appointment OTP failed");
    }
});
// ------------------- SLICE -------------------
const registerApiSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "register",
    initialState: {
        loading: false,
        error: null,
        verifySuccess: false,
        registerSuccess: false,
        submitSuccess: false,
        createOrderSuccess: false,
        orderDetails: null,
        registerAppointmentSuccess: false,
        verifyAppointmentSuccess: false,
        appointmentId: null,
        consultantId: null
    },
    reducers: {
        clearApiState: (state)=>{
            state.loading = false;
            state.error = null;
            state.verifySuccess = false;
            state.registerSuccess = false;
            state.submitSuccess = false;
            state.createOrderSuccess = false;
            state.orderDetails = null;
            state.registerAppointmentSuccess = false;
            state.verifyAppointmentSuccess = false;
            state.appointmentId = null;
            state.consultantId = null;
        }
    },
    extraReducers: (builder)=>{
        builder// VERIFY
        .addCase(verifyUser.pending, (state)=>{
            state.loading = true;
            state.error = null;
            state.verifySuccess = false;
        }).addCase(verifyUser.fulfilled, (state, action)=>{
            state.loading = false;
            state.verifySuccess = true;
        }).addCase(verifyUser.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
            state.verifySuccess = false;
        })// REGISTER
        .addCase(registerUser.pending, (state)=>{
            state.loading = true;
            state.error = null;
            state.registerSuccess = false;
        }).addCase(registerUser.fulfilled, (state, action)=>{
            state.loading = false;
            state.registerSuccess = true;
            state.consultantId = action.payload.consultantId;
        }).addCase(registerUser.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
            state.registerSuccess = false;
        })// SUBMIT DATA
        .addCase(submitData.pending, (state)=>{
            state.loading = true;
            state.error = null;
            state.submitSuccess = false;
        }).addCase(submitData.fulfilled, (state)=>{
            state.loading = false;
            state.submitSuccess = true;
        }).addCase(submitData.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
            state.submitSuccess = false;
        })// CREATE ORDER
        .addCase(createOrder.pending, (state)=>{
            state.loading = true;
            state.error = null;
            state.createOrderSuccess = false;
        }).addCase(createOrder.fulfilled, (state, action)=>{
            state.loading = false;
            state.createOrderSuccess = true;
            state.orderDetails = action.payload;
        }).addCase(createOrder.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
            state.createOrderSuccess = false;
        })// REGISTER APPOINTMENT
        .addCase(registerAppointment.pending, (state)=>{
            state.loading = true;
            state.error = null;
            state.registerAppointmentSuccess = false;
        }).addCase(registerAppointment.fulfilled, (state, action)=>{
            state.loading = false;
            state.registerAppointmentSuccess = true;
            state.appointmentId = action.payload.appointmentId;
        }).addCase(registerAppointment.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
            state.registerAppointmentSuccess = false;
        })// VERIFY APPOINTMENT OTP
        .addCase(verifyAppointmentOtp.pending, (state)=>{
            state.loading = true;
            state.error = null;
            state.verifyAppointmentSuccess = false;
        }).addCase(verifyAppointmentOtp.fulfilled, (state)=>{
            state.loading = false;
            state.verifyAppointmentSuccess = true;
        }).addCase(verifyAppointmentOtp.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
            state.verifyAppointmentSuccess = false;
        });
    }
});
const { clearApiState } = registerApiSlice.actions;
const __TURBOPACK__default__export__ = registerApiSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/HairGrowth-Clinic/redux/slices/appointmentSlice.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearApiState",
    ()=>clearApiState,
    "createAppointmentOrder",
    ()=>createAppointmentOrder,
    "default",
    ()=>__TURBOPACK__default__export__,
    "registerAppointment",
    ()=>registerAppointment,
    "verifyAppointmentOtp",
    ()=>verifyAppointmentOtp,
    "verifyAppointmentPayment",
    ()=>verifyAppointmentPayment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$redux$2f$axiosClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/redux/axiosClient.js [app-client] (ecmascript)");
;
;
const registerAppointment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("appointment/registerAppointment", async (formData, thunkAPI)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$redux$2f$axiosClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("appointments/register", formData);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || "Register appointment failed");
    }
});
const verifyAppointmentOtp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("appointment/verifyAppointmentOtp", async ({ phone, idToken, appointmentId }, thunkAPI)=>{
    try {
        console.log("Calling backend verify with:", {
            phone,
            appointmentId,
            idToken: idToken.substring(0, 50) + "..."
        });
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$redux$2f$axiosClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("appointments/verify", {
            phone,
            idToken,
            appointmentId
        });
        console.log("Backend verify response:", response.data);
        return response.data;
    } catch (error) {
        console.log("Backend verify error:", error);
        console.log("Error response:", error.response);
        return thunkAPI.rejectWithValue(error.response?.data?.message || "Verify appointment OTP failed");
    }
});
const createAppointmentOrder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("appointment/createAppointmentOrder", async ({ appointmentId, amount }, thunkAPI)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$redux$2f$axiosClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("payments/appointment/create-order", {
            appointmentId,
            amount
        });
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || "Create appointment order failed");
    }
});
const verifyAppointmentPayment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("appointment/verifyAppointmentPayment", async ({ appointmentId, razorpay_payment_id, razorpay_order_id, razorpay_signature }, thunkAPI)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$redux$2f$axiosClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("payments/appointment/verify", {
            appointmentId,
            razorpay_payment_id,
            razorpay_order_id,
            razorpay_signature
        });
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || "Verify appointment payment failed");
    }
});
// ------------------- SLICE -------------------
const appointmentSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "appointment",
    initialState: {
        loading: false,
        error: null,
        registerAppointmentSuccess: false,
        verifyAppointmentSuccess: false,
        createAppointmentOrderSuccess: false,
        verifyAppointmentPaymentSuccess: false,
        appointmentId: null,
        orderDetails: null
    },
    reducers: {
        clearApiState: (state)=>{
            state.loading = false;
            state.error = null;
            state.registerAppointmentSuccess = false;
            state.verifyAppointmentSuccess = false;
            state.createAppointmentOrderSuccess = false;
            state.verifyAppointmentPaymentSuccess = false;
            state.appointmentId = null;
            state.orderDetails = null;
        }
    },
    extraReducers: (builder)=>{
        builder// REGISTER APPOINTMENT
        .addCase(registerAppointment.pending, (state)=>{
            state.loading = true;
            state.error = null;
            state.registerAppointmentSuccess = false;
        }).addCase(registerAppointment.fulfilled, (state, action)=>{
            state.loading = false;
            state.registerAppointmentSuccess = true;
            state.appointmentId = action.payload.appointmentId;
        }).addCase(registerAppointment.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
            state.registerAppointmentSuccess = false;
        })// VERIFY APPOINTMENT OTP
        .addCase(verifyAppointmentOtp.pending, (state)=>{
            state.loading = true;
            state.error = null;
            state.verifyAppointmentSuccess = false;
        }).addCase(verifyAppointmentOtp.fulfilled, (state)=>{
            state.loading = false;
            state.verifyAppointmentSuccess = true;
        }).addCase(verifyAppointmentOtp.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
            state.verifyAppointmentSuccess = false;
        })// CREATE APPOINTMENT ORDER
        .addCase(createAppointmentOrder.pending, (state)=>{
            state.loading = true;
            state.error = null;
            state.createAppointmentOrderSuccess = false;
        }).addCase(createAppointmentOrder.fulfilled, (state, action)=>{
            state.loading = false;
            state.createAppointmentOrderSuccess = true;
            state.orderDetails = action.payload;
        }).addCase(createAppointmentOrder.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
            state.createAppointmentOrderSuccess = false;
        })// VERIFY APPOINTMENT PAYMENT
        .addCase(verifyAppointmentPayment.pending, (state)=>{
            state.loading = true;
            state.error = null;
            state.verifyAppointmentPaymentSuccess = false;
        }).addCase(verifyAppointmentPayment.fulfilled, (state)=>{
            state.loading = false;
            state.verifyAppointmentPaymentSuccess = true;
        }).addCase(verifyAppointmentPayment.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
            state.verifyAppointmentPaymentSuccess = false;
        });
    }
});
const { clearApiState } = appointmentSlice.actions;
const __TURBOPACK__default__export__ = appointmentSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/HairGrowth-Clinic/redux/store.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "store",
    ()=>store
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$redux$2f$slices$2f$registerSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/redux/slices/registerSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$redux$2f$slices$2f$appointmentSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/redux/slices/appointmentSlice.js [app-client] (ecmascript)");
;
;
;
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        register: __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$redux$2f$slices$2f$registerSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        appointment: __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$redux$2f$slices$2f$appointmentSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/HairGrowth-Clinic/app/providers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$redux$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/redux/store.js [app-client] (ecmascript)");
"use client";
;
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$redux$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"],
        children: children
    }, void 0, false, {
        fileName: "[project]/HairGrowth-Clinic/app/providers.js",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
_c = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=HairGrowth-Clinic_2e994a59._.js.map