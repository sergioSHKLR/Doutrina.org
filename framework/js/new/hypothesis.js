// VERSION 23.12.22

! function() {
    "use strict";
    var s = {
        "scripts/annotator.bundle.js": "scripts/annotator.bundle.js?c696db",
        "styles/annotator.css": "styles/annotator.css?1ad63a",
        "styles/annotator.css.map": "styles/annotator.css.map?99da3f",
        "styles/highlights.css": "styles/highlights.css?6b4ebd",
        "styles/highlights.css.map": "styles/highlights.css.map?241350",
        "styles/katex.min.css": "styles/katex.min.css?e179ab",
        "styles/katex.min.css.map": "styles/katex.min.css.map?cd8c0e",
        "styles/pdfjs-overrides.css": "styles/pdfjs-overrides.css?c95edf",
        "styles/pdfjs-overrides.css.map": "styles/pdfjs-overrides.css.map?1d8ac6",
        "styles/sidebar.css": "styles/sidebar.css?39df4c",
        "styles/sidebar.css.map": "styles/sidebar.css.map?ca189d",
        "styles/ui-playground.css": "styles/ui-playground.css?ae05e7",
        "styles/ui-playground.css.map": "styles/ui-playground.css.map?a634bc",
        "scripts/ui-playground.bundle.js": "scripts/ui-playground.bundle.js?f97d87",
        "scripts/sidebar.bundle.js": "scripts/sidebar.bundle.js?e0bbe6",
        "scripts/annotator.bundle.js.map": "scripts/annotator.bundle.js.map?703b38",
        "scripts/ui-playground.bundle.js.map": "scripts/ui-playground.bundle.js.map?34cf13",
        "scripts/sidebar.bundle.js.map": "scripts/sidebar.bundle.js.map?a55904"
    };

    function t(s) {
        s.setAttribute("data-hypothesis-asset", "")
    }

    function e(s, e) {
        var n = s.createElement("link");
        n.rel = "stylesheet", n.type = "text/css", n.href = e, t(n), s.head.appendChild(n)
    }

    function n(s, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = n.esModule,
            o = void 0 === r || r,
            i = n.forceReload,
            a = void 0 !== i && i,
            l = s.createElement("script");
        o && (l.type = "module"), a && (e += "#ts=".concat(Date.now())), l.src = e, l.async = !1, t(l), s.head.appendChild(l)
    }

    function r(s, e, n, r) {
        var o = s.createElement("link");
        o.rel = e, o.href = r, o.type = "application/annotator+".concat(n), t(o), s.head.appendChild(o)
    }

    function o(s, e, n) {
        var r = s.createElement("link");
        r.rel = "preload", r.as = e, r.href = n, "fetch" === e && (r.crossOrigin = "anonymous"), t(r), s.head.appendChild(r)
    }

    function i(s, t) {
        return s.assetRoot + "build/" + s.manifest[t]
    }

    function a(s) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
        if (-1 === s.indexOf("{")) return s;
        var e = function() {
            var s, t, e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document).currentScript;
            return e ? (s = e.src, (t = s.match(/(https?):\/\/([^:/]+)/)) ? {
                protocol: t[1],
                hostname: t[2]
            } : null) : null
        }(t);
        if (!e) throw new Error("Could not process URL template because script origin is unknown");
        return s = (s = s.replace("{current_host}", e.hostname)).replace("{current_scheme}", e.protocol)
    }
    if (function() {
            var s = [function() {
                return Object.fromEntries([])
            }, function() {
                return new URL(document.location.href)
            }, function() {
                return new Request("https://hypothes.is")
            }, function() {
                return Element.prototype.attachShadow
            }, function() {
                return CSS.supports("display: grid")
            }, function() {
                return document.evaluate("/html/body", document, null, XPathResult.ANY_TYPE, null), !0
            }];
            try {
                return s.every((function(s) {
                    return s()
                }))
            } catch (s) {
                return !1
            }
        }()) {
        var l = function(s) {
                for (var t = {}, e = s.querySelectorAll("script.js-hypothesis-config"), n = 0; n < e.length; n++) {
                    var r = void 0;
                    try {
                        r = JSON.parse(e[n].textContent || "")
                    } catch (s) {
                        console.warn("Could not parse settings from js-hypothesis-config tags", s), r = {}
                    }
                    Object.assign(t, r)
                }
                return t
            }(document),
            c = a(l.assetRoot || "https://cdn.hypothes.is/hypothesis/1.1390.0/");
        if (document.querySelector("hypothesis-app")) {
            ! function(s, t) {
                o(s, "fetch", t.apiUrl), o(s, "fetch", t.apiUrl + "links");
                for (var r = 0, a = ["scripts/sidebar.bundle.js"]; r < a.length; r++) n(s, i(t, a[r]), {
                    esModule: !0
                });
                for (var l = 0, c = ["styles/katex.min.css", "styles/sidebar.css"]; l < c.length; l++) e(s, i(t, c[l]))
            }(document, {
                assetRoot: c,
                manifest: s,
                apiUrl: l.apiUrl
            })
        } else {
            var p = function() {
                var s;
                return null === (s = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window).chrome) || void 0 === s || null === (s = s.runtime) || void 0 === s ? void 0 : s.id
            }();
            if (p && ! function(s) {
                    return !!(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document).querySelector("script.js-hypothesis-config[data-extension-id=".concat(s, "]"))
                }(p)) throw new Error("Could not start Hypothesis extension as configuration is missing");
            var u = l,
                d = a(u.notebookAppUrl || "https://hypothes.is/notebook"),
                h = a(u.profileAppUrl || "https://hypothes.is/user-profile"),
                y = a(u.sidebarAppUrl || "https://hypothes.is/app.html");
            ! function(s, t) {
                if (!s.querySelector('link[type="application/annotator+html"]')) {
                    r(s, "sidebar", "html", t.sidebarAppUrl), r(s, "notebook", "html", t.notebookAppUrl), r(s, "profile", "html", t.profileAppUrl), o(s, "style", i(t, "styles/annotator.css")), r(s, "hypothesis-client", "javascript", t.assetRoot + "build/boot.js");
                    for (var a = 0, l = ["scripts/annotator.bundle.js"]; a < l.length; a++) n(s, i(t, l[a]), {
                        esModule: !1
                    });
                    var c = [];
                    void 0 !== window.PDFViewerApplication && c.push("styles/pdfjs-overrides.css"), c.push("styles/highlights.css");
                    for (var p = 0, u = c; p < u.length; p++) e(s, i(t, u[p]))
                }
            }(document, {
                assetRoot: c,
                manifest: s,
                notebookAppUrl: d,
                profileAppUrl: h,
                sidebarAppUrl: y
            })
        }
    } else console.warn("The Hypothesis annotation tool is not supported in this browser. See https://web.hypothes.is/help/which-browsers-are-supported-by-hypothesis/.")
}();