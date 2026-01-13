module.exports = [
"[project]/HairGrowth-Clinic/components/Register/ProgressTabs.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProgressTabs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function ProgressTabs({ step = 0, healthIssue = "hair fall" }) {
    const tabs = [
        "About You",
        "Hair Health",
        "Internal Health",
        "Scalp Assessment",
        "Plan Selection"
    ];
    const percent = healthIssue === "hair fall" ? Math.round(step / 4 * 100) : step === 0 ? 0 : 100;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 hidden md:block"
                    }, void 0, false, {
                        fileName: "[project]/HairGrowth-Clinic/components/Register/ProgressTabs.jsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "   flex gap-3    overflow-x-auto    no-scrollbar    max-w-full    py-1   ",
                        children: tabs.map((t, i)=>{
                            if (healthIssue !== "hair fall" && i > 0 && i < 4) return null;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `
                  px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap
                  ${i <= step ? "bg-primary/20 text-foreground" : "bg-muted text-muted-foreground"}
                `,
                                children: t
                            }, t, false, {
                                fileName: "[project]/HairGrowth-Clinic/components/Register/ProgressTabs.jsx",
                                lineNumber: 29,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/HairGrowth-Clinic/components/Register/ProgressTabs.jsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 text-right text-sm text-muted-foreground hidden md:block",
                        children: [
                            percent,
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/HairGrowth-Clinic/components/Register/ProgressTabs.jsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/HairGrowth-Clinic/components/Register/ProgressTabs.jsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-2 bg-muted rounded-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-2 bg-primary rounded-full transition-all",
                        style: {
                            width: `${percent}%`
                        }
                    }, void 0, false, {
                        fileName: "[project]/HairGrowth-Clinic/components/Register/ProgressTabs.jsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/HairGrowth-Clinic/components/Register/ProgressTabs.jsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/HairGrowth-Clinic/components/Register/ProgressTabs.jsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden text-right text-xs text-muted-foreground mt-1",
                children: [
                    percent,
                    "%"
                ]
            }, void 0, true, {
                fileName: "[project]/HairGrowth-Clinic/components/Register/ProgressTabs.jsx",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/HairGrowth-Clinic/components/Register/ProgressTabs.jsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/HairGrowth-Clinic/components/Register/QuestionCard.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuestionCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function QuestionCard({ question, options = [], value, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 bg-card rounded-2xl border border-border shadow-soft",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-semibold text-foreground mb-4",
                children: question
            }, void 0, false, {
                fileName: "[project]/HairGrowth-Clinic/components/Register/QuestionCard.jsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: options.map((opt, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-center gap-4 cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "radio",
                                name: question,
                                checked: value === opt,
                                onChange: ()=>onChange(opt),
                                className: "form-radio text-primary h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/HairGrowth-Clinic/components/Register/QuestionCard.jsx",
                                lineNumber: 16,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-foreground",
                                children: opt
                            }, void 0, false, {
                                fileName: "[project]/HairGrowth-Clinic/components/Register/QuestionCard.jsx",
                                lineNumber: 23,
                                columnNumber: 13
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/HairGrowth-Clinic/components/Register/QuestionCard.jsx",
                        lineNumber: 12,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/HairGrowth-Clinic/components/Register/QuestionCard.jsx",
                lineNumber: 10,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/HairGrowth-Clinic/components/Register/QuestionCard.jsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/HairGrowth-Clinic/components/Register/PhotoUploader.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PhotoUploader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function PhotoUploader({ file, onChange }) {
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [preview, setPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (file) {
            const url = URL.createObjectURL(file);
            setPreview(url);
            return ()=>URL.revokeObjectURL(url);
        } else {
            setPreview(null);
        }
    }, [
        file
    ]);
    function handleFileChange(e) {
        const f = e.target.files?.[0];
        if (f) onChange(f);
    }
    function handleRemove() {
        onChange(null);
        if (inputRef.current) inputRef.current.value = null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-48 h-48 rounded-xl bg-muted flex items-center justify-center overflow-hidden shadow-soft border border-border",
                children: preview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: preview,
                    alt: "preview",
                    className: "object-cover w-full h-full"
                }, void 0, false, {
                    fileName: "[project]/HairGrowth-Clinic/components/Register/PhotoUploader.jsx",
                    lineNumber: 35,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center text-muted-foreground",
                    children: "No photo yet"
                }, void 0, false, {
                    fileName: "[project]/HairGrowth-Clinic/components/Register/PhotoUploader.jsx",
                    lineNumber: 37,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/HairGrowth-Clinic/components/Register/PhotoUploader.jsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3 w-full justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "inline-flex items-center justify-center px-6 py-3 border border-border bg-card rounded text-sm cursor-pointer hover:bg-muted transition",
                        children: [
                            "Upload Scalp Photo",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ref: inputRef,
                                type: "file",
                                accept: "image/*",
                                style: {
                                    display: "none"
                                },
                                onChange: handleFileChange
                            }, void 0, false, {
                                fileName: "[project]/HairGrowth-Clinic/components/Register/PhotoUploader.jsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/HairGrowth-Clinic/components/Register/PhotoUploader.jsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded text-sm cursor-pointer hover:opacity-90 transition shadow-soft",
                        children: [
                            "Take a Picture",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "file",
                                accept: "image/*",
                                capture: "environment",
                                style: {
                                    display: "none"
                                },
                                onChange: handleFileChange
                            }, void 0, false, {
                                fileName: "[project]/HairGrowth-Clinic/components/Register/PhotoUploader.jsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/HairGrowth-Clinic/components/Register/PhotoUploader.jsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/HairGrowth-Clinic/components/Register/PhotoUploader.jsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            preview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleRemove,
                    className: "px-4 py-2 bg-card border border-border rounded shadow-soft text-sm hover:bg-muted transition",
                    children: "Remove"
                }, void 0, false, {
                    fileName: "[project]/HairGrowth-Clinic/components/Register/PhotoUploader.jsx",
                    lineNumber: 72,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/HairGrowth-Clinic/components/Register/PhotoUploader.jsx",
                lineNumber: 71,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/HairGrowth-Clinic/components/Register/PhotoUploader.jsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}),
"[project]/HairGrowth-Clinic/components/ui/button.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Button({ children, className = '', variant = 'default', ...props }) {
    const base = 'px-4 py-2 rounded-md font-medium';
    const styles = variant === 'ghost' ? 'bg-transparent border' : 'bg-emerald-600 text-white';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: `${base} ${styles} ${className}`,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/HairGrowth-Clinic/components/ui/button.jsx",
        lineNumber: 4,
        columnNumber: 10
    }, this);
}
}),
"[project]/HairGrowth-Clinic/components/PlanSelector.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PlanSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/components/ui/button.jsx [app-ssr] (ecmascript)");
;
;
const plans = [
    {
        id: "quick",
        title: "Quick Consult",
        price: 499,
        summary: "15 min video consult + basic plan",
        includes: [
            "Doctor review",
            "1 follow-up chat"
        ]
    },
    {
        id: "standard",
        title: "Standard Care",
        price: 1499,
        summary: "30 min consult + 4-week plan",
        includes: [
            "Personal Rx",
            "2 follow-ups"
        ]
    },
    {
        id: "comprehensive",
        title: "Comprehensive Remote",
        price: 3999,
        summary: "Detailed digital diagnosis + 3 month support",
        includes: [
            "AI-assisted report",
            "Monthly doctor reviews"
        ]
    }
];
function PlanSelector({ plans: propPlans, onSelect, selectedPlan }) {
    const displayPlans = propPlans || plans;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-6 grid grid-cols-1 md:grid-cols-3 gap-6",
        children: displayPlans.map((p)=>{
            const isSelected = selectedPlan === p.id;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative bg-white rounded-2xl shadow-md border p-6 flex flex-col transition-all ${isSelected ? "border-blue-500 bg-blue-50 shadow-lg" : "border-gray-200"}`,
                children: [
                    isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-3 right-3 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-white text-sm",
                            children: "✓"
                        }, void 0, false, {
                            fileName: "[project]/HairGrowth-Clinic/components/PlanSelector.jsx",
                            lineNumber: 42,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/HairGrowth-Clinic/components/PlanSelector.jsx",
                        lineNumber: 41,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-lg",
                                children: p.title
                            }, void 0, false, {
                                fileName: "[project]/HairGrowth-Clinic/components/PlanSelector.jsx",
                                lineNumber: 48,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xl font-bold",
                                children: [
                                    "₹",
                                    p.price
                                ]
                            }, void 0, true, {
                                fileName: "[project]/HairGrowth-Clinic/components/PlanSelector.jsx",
                                lineNumber: 49,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/HairGrowth-Clinic/components/PlanSelector.jsx",
                        lineNumber: 47,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-600 mt-2",
                        children: p.summary
                    }, void 0, false, {
                        fileName: "[project]/HairGrowth-Clinic/components/PlanSelector.jsx",
                        lineNumber: 53,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "mt-4 text-sm text-gray-700 space-y-2 flex-1",
                        children: p.includes.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "✔"
                                    }, void 0, false, {
                                        fileName: "[project]/HairGrowth-Clinic/components/PlanSelector.jsx",
                                        lineNumber: 59,
                                        columnNumber: 19
                                    }, this),
                                    " ",
                                    item
                                ]
                            }, item, true, {
                                fileName: "[project]/HairGrowth-Clinic/components/PlanSelector.jsx",
                                lineNumber: 58,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/HairGrowth-Clinic/components/PlanSelector.jsx",
                        lineNumber: 56,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        className: "w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white",
                        onClick: ()=>onSelect(p),
                        children: "Book"
                    }, void 0, false, {
                        fileName: "[project]/HairGrowth-Clinic/components/PlanSelector.jsx",
                        lineNumber: 65,
                        columnNumber: 13
                    }, this)
                ]
            }, p.id, true, {
                fileName: "[project]/HairGrowth-Clinic/components/PlanSelector.jsx",
                lineNumber: 34,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/HairGrowth-Clinic/components/PlanSelector.jsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}),
"[externals]/punycode [external] (punycode, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("punycode", () => require("punycode"));

module.exports = mod;
}),
"[project]/HairGrowth-Clinic/lib/firebase.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/firebase.js
__turbopack_context__.s([
    "analytics",
    ()=>analytics,
    "app",
    ()=>app,
    "auth",
    ()=>auth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$firebase$2f$app$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/firebase/app/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/@firebase/app/dist/esm/index.esm2017.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/firebase/auth/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/@firebase/auth/dist/node-esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$firebase$2f$analytics$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/firebase/analytics/dist/index.mjs [app-ssr] (ecmascript) <locals>");
;
;
;
const firebaseConfig = {
    apiKey: "AIzaSyC-sfCC3GgeuZHfsZ8ft8a1Sfy3D-2SGec",
    authDomain: "modernclinic-5ef30.firebaseapp.com",
    projectId: "modernclinic-5ef30",
    storageBucket: "modernclinic-5ef30.firebasestorage.app",
    messagingSenderId: "779266766038",
    appId: "1:779266766038:web:40875ef21f586091518577",
    measurementId: "G-4RY9HVV8XL"
};
// IMPORTANT:
// Prevent initialization errors during Next.js hot reload
const app = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApps"])().length ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApp"])();
// Auth must be created AFTER app is initialized
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuth"])(app);
// Analytics must run only in browser
let analytics = null;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
;
}),
"[project]/HairGrowth-Clinic/hooks/useBaseURL.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useBaseURL
]);
"use client";
function useBaseURL() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return "";
}
}),
"[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RegisterFlow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$components$2f$Register$2f$ProgressTabs$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/components/Register/ProgressTabs.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$components$2f$Register$2f$QuestionCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/components/Register/QuestionCard.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$components$2f$Register$2f$PhotoUploader$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/components/Register/PhotoUploader.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$components$2f$PlanSelector$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/components/PlanSelector.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$lib$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/lib/firebase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/firebase/auth/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/@firebase/auth/dist/node-esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$hooks$2f$useBaseURL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/hooks/useBaseURL.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$redux$2f$slices$2f$registerSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/redux/slices/registerSlice.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function RegisterFlow() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDispatch"])();
    // Redux state
    const { loading, error, registerSuccess, verifySuccess, submitSuccess, createOrderSuccess, orderDetails, consultantId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.register);
    console.log("Register State:", {
        loading,
        error,
        registerSuccess,
        verifySuccess,
        submitSuccess,
        consultantId
    });
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        phone: "",
        age: "",
        region: "",
        gender: "",
        healthIssue: "hair fall",
        stage: null,
        hair: {},
        internal: {},
        scalpPhoto: null,
        plan: "",
        planPrice: 0
    });
    const [openDropdown, setOpenDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [confirmationResult, setConfirmationResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const recaptchaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [otpModalOpen, setOtpModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [otpSent, setOtpSent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [otp, setOtp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const baseURL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$hooks$2f$useBaseURL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const regionList = [
        "India",
        "Asia",
        "Europe, Australia",
        "USA, Canada",
        "South America, Africa"
    ];
    const healthIssues = [
        "Hair Fall",
        "Respiratory",
        "Skin Disorders",
        "Gastrointestinal",
        "Mental & Emotional Health",
        "Musculoskeletal",
        "ENT Problems",
        "Women’s Health",
        "Children’s Health",
        "Chronic Conditions",
        "Lifestyle-Related Problems",
        "Obesity"
    ];
    // Initialize Recaptcha
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!recaptchaRef.current) {
            recaptchaRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RecaptchaVerifier"]("recaptcha-container", {
                size: "invisible"
            }, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$lib$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"]);
        }
    }, []);
    // Handle registration success → automatically proceed to verify
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (registerSuccess && consultantId) {
            console.log("Registration successful! ConsultantId:", consultantId);
            localStorage.setItem("consultantId", consultantId);
            // Now send OTP via Firebase
            sendOtp();
        }
    }, [
        registerSuccess,
        consultantId
    ]);
    // Handle verify success → move to step 1 or 4
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (verifySuccess) {
            setOtpModalOpen(false);
            setStep(form.healthIssue === "hair fall" ? 1 : 4);
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$redux$2f$slices$2f$registerSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearApiState"])());
        }
    }, [
        verifySuccess,
        form.healthIssue
    ]);
    // Handle submit success → create order
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (submitSuccess) {
            const currentConsultantId = consultantId || localStorage.getItem("consultantId");
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$redux$2f$slices$2f$registerSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createOrder"])({
                consultantId: currentConsultantId,
                amount: form.planPrice
            }));
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$redux$2f$slices$2f$registerSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearApiState"])());
        }
    }, [
        submitSuccess
    ]);
    // Handle create order success → redirect to payment
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (createOrderSuccess && orderDetails) {
            const params = new URLSearchParams({
                orderId: orderDetails.orderId,
                amount: orderDetails.amount,
                currency: orderDetails.currency,
                key: orderDetails.key,
                consultantId: consultantId || localStorage.getItem("consultantId")
            });
            router.push(`/payment-method/online?${params.toString()}`);
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$redux$2f$slices$2f$registerSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearApiState"])());
        }
    }, [
        createOrderSuccess,
        orderDetails
    ]);
    // Handle errors
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (error) {
            alert(error);
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$redux$2f$slices$2f$registerSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearApiState"])());
        }
    }, [
        error
    ]);
    // Send OTP via Firebase
    async function sendOtp() {
        try {
            if (!recaptchaRef.current) {
                alert("Recaptcha not ready! Try again.");
                return;
            }
            const phone = "+91" + form.phone;
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signInWithPhoneNumber"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$lib$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"], phone, recaptchaRef.current);
            setConfirmationResult(result);
            setOtpSent(true);
        } catch (err) {
            console.log("SEND OTP ERROR:", err);
            alert("OTP sending failed. Try again.");
        }
    }
    // Verify OTP and call Redux verify API
    async function verifyOtp() {
        try {
            if (!confirmationResult) {
                alert("OTP expired. Please resend.");
                return;
            }
            // Confirm OTP with Firebase
            await confirmationResult.confirm(otp);
            // Get Firebase ID token
            const idToken = await __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$lib$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser.getIdToken();
            // Dispatch Redux verify action
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$redux$2f$slices$2f$registerSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verifyUser"])({
                mobile: form.phone,
                idToken: idToken,
                consultantId: consultantId
            }));
        } catch (err) {
            console.log("VERIFY ERROR", err);
            alert("Invalid OTP");
        }
    }
    // Validation
    function validateStep() {
        let err = {};
        if (step === 0) {
            if (!form.name.trim()) err.name = "Name is required";
            if (!form.phone.trim()) err.phone = "Phone is required";
            if (!form.age) err.age = "Age is required";
            if (!form.gender) err.gender = "Gender is required";
            if (!form.region) err.region = "Region is required";
        }
        if (step === 1) {
            if (form.stage === null) err.stage = "Please choose your stage";
        }
        if (step === 3) {
            if (!form.scalpPhoto) err.scalpPhoto = "Scalp photo is required";
        }
        if (step === 4) {
            if (!form.plan) err.plan = "Please select a plan";
        }
        setErrors(err);
        return Object.keys(err).length === 0;
    }
    function next() {
        if (!validateStep()) return;
        if (step === 0) {
            // Dispatch Redux register action
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$redux$2f$slices$2f$registerSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerUser"])({
                name: form.name,
                mobile: form.phone,
                age: form.age,
                gender: form.gender,
                region: form.region,
                healthIssue: form.healthIssue
            }));
            setOtpModalOpen(true);
            return;
        }
        setStep((p)=>p + 1);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    function prev() {
        if (step === 1) {
            setStep(0);
        } else if (step === 2) {
            setStep(1);
        } else if (step === 3) {
            setStep(2);
        } else if (step === 4) {
            if (form.healthIssue === "hair fall") {
                setStep(3);
            } else {
                setStep(0);
            }
        }
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    function updateField(field, value) {
        setForm((prev)=>({
                ...prev,
                [field]: value
            }));
    }
    function updateNested(section, id, value) {
        setForm((prev)=>({
                ...prev,
                [section]: {
                    ...prev[section],
                    [id]: value
                }
            }));
    }
    // Submit final assessment
    function submit() {
        if (!validateStep()) return;
        const currentConsultantId = consultantId || localStorage.getItem("consultantId");
        if (!currentConsultantId) {
            alert("Please complete registration and verification first");
            setStep(0);
            return;
        }
        const consultationData = {
            hairHealth: {
                stage: form.stage,
                familyHistory: form.hair?.family || "",
                dandruff: form.hair?.dandruff || "",
                selectedStage: form.stage
            },
            internalHealth: form.internal || {},
            scalpAssessment: {
                scalpPhoto: form.scalpPhoto?.name || null
            },
            plan: form.plan
        };
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$redux$2f$slices$2f$registerSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["submitData"])({
            consultantId: currentConsultantId,
            consultationData: consultationData,
            scalpPhoto: form.scalpPhoto
        }));
    }
    const hairQuestions = [
        {
            id: "family",
            q: "Do you have a family history of hair loss?",
            options: [
                "Mother or mother's side",
                "Father or father's side",
                "Both",
                "None"
            ]
        },
        {
            id: "dandruff",
            q: "Do you have Dandruff?",
            options: [
                "No Dandruff",
                "Mild Dandruff",
                "Heavy Dandruff",
                "Psoriasis / Seborrheic Dermatitis"
            ]
        }
    ];
    const internalQuestions = [
        {
            id: "sleep",
            q: "How well do you sleep?",
            options: [
                "Peacefully 6-8 hours",
                "Disturbed sleep",
                "Difficulty sleeping"
            ]
        },
        {
            id: "stress",
            q: "How stressed are you?",
            options: [
                "None",
                "Low",
                "Moderate",
                "High"
            ]
        },
        {
            id: "constipation",
            q: "Do you feel constipated?",
            options: [
                "No",
                "Yes (fewer than 3 stools/week)",
                "Unsatisfied after stools",
                "IBS"
            ]
        },
        {
            id: "gas",
            q: "Gas, Acidity, or Bloating?",
            options: [
                "No",
                "Sometimes",
                "Often"
            ]
        },
        {
            id: "energy",
            q: "How is your energy during the day?",
            options: [
                "Normal",
                "Low in morning",
                "Low afternoon",
                "Low evening",
                "Always low"
            ]
        },
        {
            id: "supplements",
            q: "Are you taking supplements?",
            options: [
                "Yes",
                "No"
            ]
        }
    ];
    const stageData = {
        male: [
            {
                id: 0,
                label: "Stage 1 (Mild)",
                img: "/images/stages/male-stage1.png"
            },
            {
                id: 1,
                label: "Stage 2 (Moderate)",
                img: "/images/stages/male-stage2.png"
            },
            {
                id: 2,
                label: "Stage 3 (Severe)",
                img: "/images/stages/male-stage3.png"
            }
        ],
        female: [
            {
                id: 0,
                label: "Stage 1 (Mild)",
                img: "/images/stages/female-stage1.png"
            },
            {
                id: 1,
                label: "Stage 2 (Moderate)",
                img: "/images/stages/female-stage2.png"
            },
            {
                id: 2,
                label: "Stage 3 (Severe)",
                img: "/images/stages/female-stage3.png"
            }
        ]
    };
    const gender = form.gender || "male";
    const stageImages = stageData[gender];
    const DropdownShell = ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-full left-0 w-full mt-2 bg-card border border-border shadow-lg rounded-xl p-2 z-20",
            children: children
        }, void 0, false, {
            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
            lineNumber: 390,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen py-8 bg-background-soft",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "max-w-4xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "recaptcha-container"
                }, void 0, false, {
                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                    lineNumber: 398,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between mb-4 text-sm text-muted-foreground",
                    children: [
                        step > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: prev,
                            children: "← Previous"
                        }, void 0, false, {
                            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                            lineNumber: 402,
                            columnNumber: 23
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                            lineNumber: 402,
                            columnNumber: 68
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "hover:text-accent",
                            children: "Exit"
                        }, void 0, false, {
                            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                            lineNumber: 403,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                    lineNumber: 401,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$components$2f$Register$2f$ProgressTabs$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    step: step,
                    healthIssue: form.healthIssue
                }, void 0, false, {
                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                    lineNumber: 406,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-card mt-6 rounded-2xl shadow-soft border border-border p-6",
                    children: [
                        step === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl text-center font-bold mb-8 text-foreground",
                                    children: "Tell us about you"
                                }, void 0, false, {
                                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                    lineNumber: 414,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-medium text-foreground",
                                            children: "Full Name"
                                        }, void 0, false, {
                                            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                            lineNumber: 420,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: "w-full border border-border bg-background px-3 py-2 rounded mt-1 text-foreground",
                                            value: form.name,
                                            onChange: (e)=>updateField("name", e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                            lineNumber: 421,
                                            columnNumber: 17
                                        }, this),
                                        errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-red-600 text-sm mt-1",
                                            children: errors.name
                                        }, void 0, false, {
                                            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                            lineNumber: 427,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                    lineNumber: 419,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-medium text-foreground",
                                            children: "Phone Number"
                                        }, void 0, false, {
                                            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                            lineNumber: 433,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: "w-full border border-border bg-background px-3 py-2 rounded mt-1 text-foreground",
                                            value: form.phone,
                                            onChange: (e)=>updateField("phone", e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                            lineNumber: 434,
                                            columnNumber: 17
                                        }, this),
                                        errors.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-red-600 text-sm mt-1",
                                            children: errors.phone
                                        }, void 0, false, {
                                            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                            lineNumber: 440,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                    lineNumber: 432,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-medium text-foreground",
                                            children: "Age"
                                        }, void 0, false, {
                                            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                            lineNumber: 446,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            className: "w-full border border-border bg-background px-3 py-2 rounded mt-1 text-foreground",
                                            value: form.age,
                                            onChange: (e)=>updateField("age", e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                            lineNumber: 447,
                                            columnNumber: 17
                                        }, this),
                                        errors.age && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-red-600 text-sm mt-1",
                                            children: errors.age
                                        }, void 0, false, {
                                            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                            lineNumber: 454,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                    lineNumber: 445,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-medium text-foreground",
                                            children: "Gender"
                                        }, void 0, false, {
                                            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                            lineNumber: 460,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-3 mt-2",
                                            children: [
                                                "male",
                                                "female"
                                            ].map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>updateField("gender", g),
                                                    className: `px-5 py-2 rounded border 
                        ${form.gender === g ? "bg-primary text-primary-foreground" : "bg-muted text-foreground border-border"}`,
                                                    children: g.toUpperCase()
                                                }, g, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                                    lineNumber: 463,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                            lineNumber: 461,
                                            columnNumber: 17
                                        }, this),
                                        errors.gender && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-red-600 text-sm mt-1",
                                            children: errors.gender
                                        }, void 0, false, {
                                            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                            lineNumber: 477,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                    lineNumber: 459,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col relative mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-medium text-foreground mb-1",
                                            children: "Region"
                                        }, void 0, false, {
                                            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                            lineNumber: 483,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setOpenDropdown(openDropdown === "region" ? null : "region"),
                                            className: "flex items-center justify-between bg-background border border-border px-3 py-2 rounded-xl w-full text-foreground",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                            size: 18,
                                                            className: "text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                                            lineNumber: 494,
                                                            columnNumber: 21
                                                        }, this),
                                                        form.region || "Select Region"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                                    lineNumber: 493,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    size: 16,
                                                    className: "text-muted-foreground"
                                                }, void 0, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                                    lineNumber: 497,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                            lineNumber: 486,
                                            columnNumber: 17
                                        }, this),
                                        openDropdown === "region" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DropdownShell, {
                                            children: regionList.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onClick: ()=>{
                                                        updateField("region", r);
                                                        setOpenDropdown(null);
                                                    },
                                                    className: "px-3 py-2 hover:bg-secondary/15 rounded-lg cursor-pointer text-sm text-foreground",
                                                    children: r
                                                }, r, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                                    lineNumber: 503,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                            lineNumber: 501,
                                            columnNumber: 19
                                        }, this),
                                        errors.region && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-red-600 text-sm mt-1",
                                            children: errors.region
                                        }, void 0, false, {
                                            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                            lineNumber: 518,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                    lineNumber: 482,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col relative mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-medium text-foreground mb-1",
                                            children: "Health Issue"
                                        }, void 0, false, {
                                            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                            lineNumber: 524,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setOpenDropdown(openDropdown === "health" ? null : "health"),
                                            className: "flex items-center justify-between bg-background border border-border px-3 py-2 rounded-xl w-full text-foreground",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: form.healthIssue || "Select Health Issue"
                                                    }, void 0, false, {
                                                        fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                                        lineNumber: 535,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                                    lineNumber: 534,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    size: 16,
                                                    className: "text-muted-foreground"
                                                }, void 0, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                                    lineNumber: 537,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                            lineNumber: 527,
                                            columnNumber: 17
                                        }, this),
                                        openDropdown === "health" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DropdownShell, {
                                            children: healthIssues.map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onClick: ()=>{
                                                        updateField("healthIssue", h.toLowerCase());
                                                        setOpenDropdown(null);
                                                    },
                                                    className: "px-3 py-2 hover:bg-secondary/15 rounded-lg cursor-pointer text-sm text-foreground",
                                                    children: h
                                                }, h, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                                    lineNumber: 543,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                            lineNumber: 541,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                    lineNumber: 523,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true),
                        step === 1 && form.healthIssue === "hair fall" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl text-center font-bold mb-8 text-foreground",
                                    children: "Hair Health"
                                }, void 0, false, {
                                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                    lineNumber: 563,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                    children: stageImages.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: ()=>updateField("stage", s.id),
                                            className: `rounded-xl border p-4 cursor-pointer transition
                      ${form.stage === s.id ? "ring-2 ring-primary bg-primary/10" : "border-border bg-muted"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: s.img,
                                                    className: "w-full mb-3 rounded"
                                                }, void 0, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                                    lineNumber: 579,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-medium text-foreground",
                                                    children: s.label
                                                }, void 0, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                                    lineNumber: 580,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, s.id, true, {
                                            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                            lineNumber: 570,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                    lineNumber: 568,
                                    columnNumber: 15
                                }, this),
                                errors.stage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-600 text-sm mt-2",
                                    children: errors.stage
                                }, void 0, false, {
                                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                    lineNumber: 586,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 space-y-6",
                                    children: hairQuestions.map((q)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$components$2f$Register$2f$QuestionCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            question: q.q,
                                            options: q.options,
                                            value: form.hair[q.id],
                                            onChange: (v)=>updateNested("hair", q.id, v)
                                        }, q.id, false, {
                                            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                            lineNumber: 592,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                    lineNumber: 590,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true),
                        step === 2 && form.healthIssue === "hair fall" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl text-center font-bold mb-8 text-foreground",
                                    children: "Internal Health"
                                }, void 0, false, {
                                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                    lineNumber: 607,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: internalQuestions.map((q)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$components$2f$Register$2f$QuestionCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            question: q.q,
                                            options: q.options,
                                            value: form.internal[q.id],
                                            onChange: (v)=>updateNested("internal", q.id, v)
                                        }, q.id, false, {
                                            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                            lineNumber: 613,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                    lineNumber: 611,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true),
                        step === 3 && form.healthIssue === "hair fall" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-semibold text-center mb-4 text-foreground",
                                    children: "Upload your scalp picture"
                                }, void 0, false, {
                                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                    lineNumber: 628,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$components$2f$Register$2f$PhotoUploader$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    file: form.scalpPhoto,
                                    onChange: (file)=>updateField("scalpPhoto", file)
                                }, void 0, false, {
                                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                    lineNumber: 632,
                                    columnNumber: 15
                                }, this),
                                errors.scalpPhoto && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-600 text-sm mt-2",
                                    children: errors.scalpPhoto
                                }, void 0, false, {
                                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                    lineNumber: 638,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true),
                        step === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl text-center font-bold mb-8 text-foreground",
                                    children: "Choose Your Plan"
                                }, void 0, false, {
                                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                    lineNumber: 646,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$components$2f$PlanSelector$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    selectedPlan: form.plan,
                                    onSelect: (plan)=>{
                                        updateField("plan", plan.id);
                                        updateField("planPrice", plan.price);
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                    lineNumber: 650,
                                    columnNumber: 15
                                }, this),
                                errors.plan && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-600 text-sm mt-4 text-center",
                                    children: errors.plan
                                }, void 0, false, {
                                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                    lineNumber: 659,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end mt-6",
                            children: step < 4 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: next,
                                disabled: loading,
                                className: "px-6 py-2 bg-primary text-primary-foreground rounded shadow-soft hover:bg-primary-dark disabled:opacity-50",
                                children: loading ? "Processing..." : "Next →"
                            }, void 0, false, {
                                fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                lineNumber: 667,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: submit,
                                className: "px-6 py-2 bg-accent text-accent-foreground rounded shadow-soft hover:bg-accent/80",
                                children: "Proceed to Payment"
                            }, void 0, false, {
                                fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                lineNumber: 675,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                            lineNumber: 665,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                    lineNumber: 409,
                    columnNumber: 9
                }, this),
                otpModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-6 rounded-xl shadow-xl w-full max-w-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold text-center mb-4",
                                children: "Verify Your Phone"
                            }, void 0, false, {
                                fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                lineNumber: 689,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center text-gray-600 text-sm mb-2",
                                children: "OTP will be sent to:"
                            }, void 0, false, {
                                fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                lineNumber: 693,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center font-medium mb-4",
                                children: [
                                    "+91 ",
                                    form.phone
                                ]
                            }, void 0, true, {
                                fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                lineNumber: 696,
                                columnNumber: 15
                            }, this),
                            !otpSent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center text-gray-500",
                                children: "Sending OTP..."
                            }, void 0, false, {
                                fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                lineNumber: 701,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        className: "w-full border px-3 py-2 rounded mb-3",
                                        placeholder: "Enter OTP",
                                        value: otp,
                                        onChange: (e)=>setOtp(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                        lineNumber: 706,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: verifyOtp,
                                        disabled: loading,
                                        className: "w-full bg-primary text-white py-2 rounded-lg disabled:opacity-50",
                                        children: loading ? "Verifying..." : "Verify OTP"
                                    }, void 0, false, {
                                        fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                        lineNumber: 714,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setOtpModalOpen(false);
                                    setOtpSent(false);
                                    setOtp("");
                                },
                                className: "mt-4 w-full text-center text-gray-500 text-sm",
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                lineNumber: 724,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                        lineNumber: 688,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                    lineNumber: 687,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
            lineNumber: 397,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
        lineNumber: 396,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a501fa1a._.js.map