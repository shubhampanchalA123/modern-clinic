module.exports = [
"[project]/app/videos/fetchVideos.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/videos/fetchVideos.js
/* __next_internal_action_entry_do_not_use__ [{"40110edb1e969a5958847ae787e3f55849d70e85a3":"fetchVideosFromChannel","40530df599d4af1353adc7660c91b43f8f18496591":"resolveChannelIdFromHandle"},"",""] */ __turbopack_context__.s([
    "fetchVideosFromChannel",
    ()=>fetchVideosFromChannel,
    "resolveChannelIdFromHandle",
    ()=>resolveChannelIdFromHandle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
async function resolveChannelIdFromHandle(handle) {
    // handle example: "@ModernHealthNutrition" or "ModernHealthNutrition"
    const cleaned = handle.startsWith("@") ? handle.slice(1) : handle;
    const url = `https://www.youtube.com/@${cleaned}`;
    try {
        const res = await fetch(url, {
            headers: {
                "User-Agent": "Mozilla/5.0"
            }
        });
        if (!res.ok) return null;
        const html = await res.text();
        // 1) Try meta itemprop channelId
        const metaMatch = html.match(/<meta itemprop="channelId" content="(UC[0-9A-Za-z_-]+)"/i);
        if (metaMatch) return metaMatch[1];
        // 2) Try JSON auth data "channelId":"UC..."
        const jsonMatch = html.match(/"channelId":"(UC[0-9A-Za-z_-]+)"/i);
        if (jsonMatch) return jsonMatch[1];
        // 3) Try canonical link to /channel/UC...
        const linkMatch = html.match(/<link rel="canonical" href="https:\/\/www\.youtube\.com\/channel\/(UC[0-9A-Za-z_-]+)"/i);
        if (linkMatch) return linkMatch[1];
        return null;
    } catch (err) {
        console.error("resolveChannelIdFromHandle error", err);
        return null;
    }
}
async function fetchVideosFromChannel({ channelId, handle, limit = 24 }) {
    // prefer explicit channelId if provided
    let chId = channelId || null;
    if (!chId && handle) {
        chId = await resolveChannelIdFromHandle(handle);
    }
    if (!chId) {
        throw new Error("Channel ID not found. Provide `channelId` or valid `handle`.");
    }
    // Fetch RSS
    const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${chId}`;
    const res = await fetch(rssUrl, {
        next: {
            revalidate: 3600
        }
    }); // cache 1 hour
    if (!res.ok) throw new Error("Failed to fetch YouTube RSS feed.");
    const xml = await res.text();
    // Parse entries via regex (simple, robust for the YouTube feed format)
    const entries = [
        ...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)
    ].slice(0, limit);
    const videos = entries.map((m)=>{
        const block = m[1];
        const titleMatch = block.match(/<title>([\s\S]*?)<\/title>/);
        const title = titleMatch ? titleMatch[1].trim() : "Untitled";
        const videoIdMatch = block.match(/<yt:videoId>(.*?)<\/yt:videoId>/);
        const videoId = videoIdMatch ? videoIdMatch[1].trim() : null;
        const linkMatch = block.match(/<link rel="alternate" href="(.*?)"/);
        const link = linkMatch ? linkMatch[1] : videoId ? `https://www.youtube.com/watch?v=${videoId}` : null;
        const publishedMatch = block.match(/<published>(.*?)<\/published>/);
        const published = publishedMatch ? publishedMatch[1] : null;
        // Thumbnail: prefer media:thumbnail, else fallback to ytimg
        const thumbMatch = block.match(/<media:thumbnail url="(.*?)"/);
        const thumbnail = thumbMatch ? thumbMatch[1] : videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : null;
        // Determine a short description - sometimes feed has media:description
        const descMatch = block.match(/<media:description.*?>([\s\S]*?)<\/media:description>/);
        const description = descMatch ? descMatch[1].trim() : "";
        return {
            videoId,
            title,
            link,
            published,
            thumbnail,
            description
        };
    });
    return {
        channelId: chId,
        videos
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    resolveChannelIdFromHandle,
    fetchVideosFromChannel
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(resolveChannelIdFromHandle, "40530df599d4af1353adc7660c91b43f8f18496591", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(fetchVideosFromChannel, "40110edb1e969a5958847ae787e3f55849d70e85a3", null);
}),
"[project]/.next-internal/server/app/videos/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/videos/fetchVideos.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$videos$2f$fetchVideos$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/videos/fetchVideos.js [app-rsc] (ecmascript)");
;
;
}),
"[project]/.next-internal/server/app/videos/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/videos/fetchVideos.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "40110edb1e969a5958847ae787e3f55849d70e85a3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$videos$2f$fetchVideos$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchVideosFromChannel"],
    "40530df599d4af1353adc7660c91b43f8f18496591",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$videos$2f$fetchVideos$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveChannelIdFromHandle"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$videos$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$videos$2f$fetchVideos$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/videos/page/actions.js { ACTIONS_MODULE0 => "[project]/app/videos/fetchVideos.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$videos$2f$fetchVideos$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/videos/fetchVideos.js [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_fbe10e44._.js.map