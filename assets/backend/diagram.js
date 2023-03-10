/*
@license

dhtmlxDiagram v.2.1.0 Trial
This software is covered by DHTMLX Evaluation License. Contact sales@dhtmlx.com to get Commercial or Enterprise license. Usage without proper license is prohibited.

(c) Dinamenta, UAB.
*/ !(function (t) {
    var e = {};
    function n(r) {
        if (e[r]) return e[r].exports;
        var i = (e[r] = { i: r, l: !1, exports: {} });
        return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    (n.m = t),
        (n.c = e),
        (n.d = function (t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, { configurable: !1, enumerable: !0, get: r });
        }),
        (n.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t.default;
                      }
                    : function () {
                          return t;
                      };
            return n.d(e, "a", e), e;
        }),
        (n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (n.p = "/codebase/"),
        n((n.s = 17));
})([
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(20);
        (e.el = r.defineElement),
            (e.sv = r.defineSvgElement),
            (e.view = r.defineView),
            (e.create = r.createView),
            (e.inject = r.injectView),
            (e.disableHelp = function () {
                (r.DEVMODE.mutations = !1), (r.DEVMODE.warnings = !1), (r.DEVMODE.verbose = !1), (r.DEVMODE.UNKEYED_INPUT = !1);
            }),
            (e.resizer = function (t) {
                return e.el("iframe", {
                    _hooks: {
                        didInsert: function (e) {
                            var n = function () {
                                var n = e.el.offsetHeight,
                                    r = e.el.offsetWidth;
                                t(r, n);
                            };
                            (e.el.contentWindow.onresize = n), n();
                        },
                    },
                    style: "position:absolute;left:0;top:-100%;width:100%;height:100%;margin:1px 0 0;border:none;opacity:0;visibility:hidden;pointer-events:none;",
                });
            });
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r,
            i = n(7);
        (e.DataEvents = i.DataEvents),
            (e.DragBehaviour = i.DragBehaviour),
            (e.DragMode = i.DragMode),
            ((r = e.TreeFilterType || (e.TreeFilterType = {}))[(r.all = 1)] = "all"),
            (r[(r.specific = 2)] = "specific"),
            (r[(r.leafs = 3)] = "leafs");
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(9),
            i = n(14),
            o = n(15);
        (e.isEqualObj = function (t, e) {
            for (var n in t) if (t[n] !== e[n]) return !1;
            return !0;
        }),
            (e.naturalCompare = function (t, e) {
                var n = [],
                    r = [];
                for (
                    t.replace(/(\d+)|(\D+)/g, function (t, e, r) {
                        n.push([e || 1 / 0, r || ""]);
                    }),
                        e.replace(/(\d+)|(\D+)/g, function (t, e, n) {
                            r.push([e || 1 / 0, n || ""]);
                        });
                    n.length && r.length;

                ) {
                    var i = n.shift(),
                        o = r.shift(),
                        s = i[0] - o[0] || i[1].localeCompare(o[1]);
                    if (s) return s;
                }
                return n.length - r.length;
            }),
            (e.findByConf = function (t, e) {
                if ("function" == typeof e) {
                    if (e.call(this, t)) return t;
                } else if (e.by && e.match && t[e.by] === e.match) return t;
            }),
            (e.isDebug = function () {
                var t = window.dhx;
                if (void 0 !== t) return void 0 !== t.debug && t.debug;
            }),
            (e.dhxWarning = function (t) {
                console.warn(t);
            }),
            (e.dhxError = function (t) {
                throw new Error(t);
            }),
            (e.toProxy = function (t) {
                var e = typeof t;
                return "string" === e ? new r.DataProxy(t) : "object" === e ? t : void 0;
            }),
            (e.toDataDriver = function (t) {
                if ("string" == typeof t)
                    switch (t) {
                        case "csv":
                            return new i.CsvDriver();
                        case "json":
                            return new o.JsonDriver();
                        default:
                            console.warn("incorrect driver type", t);
                    }
                else if ("object" == typeof t) return t;
            });
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = (function () {
            function t(t) {
                (this.events = {}), (this.context = t || this);
            }
            return (
                (t.prototype.on = function (t, e, n) {
                    var r = t.toLowerCase();
                    (this.events[r] = this.events[r] || []), this.events[r].push({ callback: e, context: n || this.context });
                }),
                (t.prototype.detach = function (t, e) {
                    var n = t.toLowerCase(),
                        r = this.events[n];
                    if (e) for (var i = r.length - 1; i >= 0; i--) r[i].context === e && r.splice(i, 1);
                    else this.events[n] = [];
                }),
                (t.prototype.fire = function (t, e) {
                    void 0 === e && (e = []);
                    var n = t.toLowerCase();
                    return (
                        !this.events[n] ||
                        this.events[n]
                            .map(function (t) {
                                return t.callback.apply(t.context, e);
                            })
                            .indexOf(!1) < 0
                    );
                }),
                t
            );
        })();
        (e.EventSystem = r),
            (e.EventsMixin = function (t) {
                var e = new r((t = t || {}));
                (t.detachEvent = e.detach.bind(e)), (t.attachEvent = e.on.bind(e)), (t.callEvent = e.fire.bind(e));
            });
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = new Date().valueOf();
        (e.uid = function () {
            return "u" + r++;
        }),
            (e.extend = function t(e, n) {
                if (n)
                    for (var r in n) {
                        var i = n[r],
                            o = e[r];
                        "object" != typeof o || o instanceof Date || o instanceof Array ? (e[r] = i) : t(o, i);
                    }
                return e;
            }),
            (e.copy = function (t) {
                var e = {};
                for (var n in t) e[n] = t[n];
                return e;
            }),
            (e.naturalSort = function (t) {
                return t.sort(function (t, e) {
                    return "string" == typeof t ? t.localeCompare(e) : t - e;
                });
            }),
            (e.findIndex = function (t, e) {
                for (var n = t.length, r = 0; r < n; r++) if (e(t[r])) return r;
                return -1;
            }),
            (e.isEqualString = function (t, e) {
                if (t.length > e.length) return !1;
                for (var n = 0; n < t.length; n++) if (t[n].toLowerCase() !== e[n].toLowerCase()) return !1;
                return !0;
            }),
            (e.singleOuterClick = function (t) {
                var e = function (n) {
                    t(n) && document.removeEventListener("click", e);
                };
                document.addEventListener("click", e);
            });
    },
    function (t, e, n) {
        "use strict";
        function r(t, e) {
            for (void 0 === e && (e = "dhx_id"), t instanceof Event && (t = t.target); t && t.getAttribute; ) {
                if (t.getAttribute(e)) return t;
                t = t.parentNode;
            }
        }
        Object.defineProperty(e, "__esModule", { value: !0 }),
            n(21),
            (e.toNode = function (t) {
                return "string" == typeof t && (t = document.getElementById(t) || document.querySelector(t)), t || document.body;
            }),
            (e.eventHandler = function (t, e) {
                var n = Object.keys(e);
                return function (r) {
                    for (var i = t(r), o = r.target; o; ) {
                        var s = (o.getAttribute && o.getAttribute("class")) || "";
                        if (s.length) for (var a = s.split(" "), l = 0; l < n.length; l++) if (a.indexOf(n[l]) > -1) return e[n[l]](r, i);
                        o = o.parentNode;
                    }
                    return !0;
                };
            }),
            (e.locate = function (t, e) {
                void 0 === e && (e = "dhx_id");
                var n = r(t, e);
                return n ? n.getAttribute(e) : "";
            }),
            (e.locateNode = r),
            (e.getBox = function (t) {
                var e = t.getBoundingClientRect(),
                    n = document.body,
                    r = window.pageYOffset || n.scrollTop,
                    i = window.pageXOffset || n.scrollLeft;
                return { top: e.top + r, left: e.left + i, right: n.offsetWidth - e.right, bottom: n.offsetHeight - e.bottom, width: e.right - e.left, height: e.bottom - e.top };
            });
        var i = -1;
        (e.getScrollbarWidth = function () {
            if (i > -1) return i;
            var t = document.createElement("div");
            return document.body.appendChild(t), (t.style.cssText = "position: absolute;left: -99999px;overflow:scroll;width: 100px;height: 100px;"), (i = t.offsetWidth - t.clientWidth), document.body.removeChild(t), i;
        }),
            (e.fitPosition = function (t, e, n, r) {
                var i = t.left + t.width,
                    o = t.top + t.height;
                if ("bottom" === e) return { position: "absolute", left: (l = window.innerWidth < t.left + n ? i - n : t.left), top: (a = o + r > window.innerHeight ? t.top - r + window.scrollY : o + window.scrollY), minWidth: n };
                var s = void 0,
                    a = t.top + window.scrollY,
                    l = window.innerWidth < i + n ? t.left - n : i;
                return o + r > window.innerHeight && (o - r > 0 ? (a = o - r + window.scrollY) : ((s = "scroll"), (r = 0.8 * (window.innerHeight - t.top)))), { position: "absolute", left: l, top: a, minWidth: n, overflow: s, height: r };
            });
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r,
            i = n(7);
        (e.DataEvents = i.DataEvents),
            (e.SelectionEvents = i.SelectionEvents),
            ((r = e.DiagramEvents || (e.DiagramEvents = {})).scroll = "scroll"),
            (r.beforeCollapse = "beforecollapse"),
            (r.afterCollapse = "aftercollapse"),
            (r.beforeExpand = "beforeexpand"),
            (r.afterExpand = "afterexpand"),
            (r.shapeMouseDown = "shapemousedown"),
            (r.shapeClick = "shapeclick"),
            (r.shapedDblClick = "shapedblclick"),
            (r.shapeIconClick = "shapeiconclick"),
            (r.beforeRender = "beforerender"),
            (r.shapeHover = "shapeHover"),
            (r.emptyAreaClick = "emptyAreaClick"),
            (r.load = "load");
    },
    function (t, e, n) {
        "use strict";
        var r, i, o, s, a;
        Object.defineProperty(e, "__esModule", { value: !0 }),
            ((r = e.DataEvents || (e.DataEvents = {})).add = "add"),
            (r.afterAdd = "afteradd"),
            (r.beforeAdd = "beforeadd"),
            (r.remove = "remove"),
            (r.removeAll = "removeAll"),
            (r.beforeRemove = "beforeremove"),
            (r.afterRemove = "afterRemove"),
            (r.change = "change"),
            (r.load = "load"),
            ((i = e.DragEvents || (e.DragEvents = {})).beforeDrag = "beforedrag"),
            (i.beforeDrop = "beforeDrop"),
            (i.dragStart = "dragstart"),
            (i.dragEnd = "dragend"),
            (i.canDrop = "candrop"),
            (i.cancelDrop = "canceldrop"),
            (i.dropComplete = "dropcomplete"),
            (i.dragOut = "dragOut"),
            (i.dragIn = "dragIn"),
            ((o = e.DragMode || (e.DragMode = {})).target = "target"),
            (o.both = "both"),
            (o.source = "source"),
            ((s = e.DragBehaviour || (e.DragBehaviour = {})).child = "child"),
            (s.sibling = "sibling"),
            (s.complex = "complex"),
            ((a = e.SelectionEvents || (e.SelectionEvents = {})).beforeUnSelect = "beforeunselect"),
            (a.afterUnSelect = "afterunselect"),
            (a.beforeSelect = "beforeselect"),
            (a.afterSelect = "afterselect");
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = (function () {
            function t(t) {
                (this.config = this.setDefaults(t)), (this.id = t.id), t.width && (t.width = parseFloat(t.width)), t.height && (t.height = parseFloat(t.height)), t.x && (t.x = parseFloat(t.x)), t.y && (t.y = parseFloat(t.y));
            }
            return (
                (t.prototype.isConnector = function () {
                    return !1;
                }),
                (t.prototype.canResize = function () {
                    return !0;
                }),
                (t.prototype.getCenter = function () {
                    var t = this.config;
                    return { x: Math.abs(t.width / 2), y: Math.abs(t.height / 2) };
                }),
                (t.prototype.getBox = function () {
                    var t = this.config,
                        e = t.x + (t.dx || 0),
                        n = e + t.width,
                        r = t.y + (t.dy || 0);
                    return { left: e, right: n, top: r, bottom: r + t.height };
                }),
                (t.prototype.getMetaInfo = function () {
                    return [{ id: "text", label: "Text", type: "text" }];
                }),
                (t.prototype.move = function (t, e) {
                    this.update({ x: t, y: e });
                }),
                (t.prototype.resize = function (t, e) {
                    this.update({ width: t, height: e });
                }),
                (t.prototype.rotate = function (t) {
                    this.update({ angle: t });
                }),
                (t.prototype.update = function (t) {
                    for (var e in t) this.config[e] = t[e];
                }),
                (t.prototype.toSVG = function () {
                    return "";
                }),
                (t.prototype.getPoint = function (t, e) {
                    var n = this.config;
                    if (n.angle) {
                        var r = n.x + n.width / 2,
                            i = n.y + n.height / 2,
                            o = n.angle * (Math.PI / 180);
                        return { x: (t - r) * Math.cos(o) - (e - i) * Math.sin(o) + r, y: (t - r) * Math.sin(o) + (e - i) * Math.cos(o) + i };
                    }
                    return { x: t, y: e };
                }),
                (t.prototype.setCss = function (t) {
                    this.config.css = t;
                }),
                (t.prototype.getCss = function () {
                    return (this.config.$selected ? "dhx_selected " : "") + (this.config.css || "");
                }),
                (t.prototype.setDefaults = function (t) {
                    return t;
                }),
                (t.prototype.getCoords = function (t) {
                    var e = t.x,
                        n = t.y;
                    return t.dx && (e = t.x + t.dx), t.dy && (n = t.y + t.dy), { x: e, y: n };
                }),
                t
            );
        })();
        e.BaseShape = r;
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = (function () {
            function t(t) {
                this.url = t;
            }
            return (
                (t.prototype.load = function () {
                    return this._ajax(this.url);
                }),
                (t.prototype.save = function (t, e) {
                    return this._ajax(this.url, t, { insert: "POST", delete: "DELETE", update: "POST" }[e] || "POST");
                }),
                (t.prototype._ajax = function (t, e, n) {
                    return (
                        void 0 === n && (n = "GET"),
                        new Promise(function (r, i) {
                            var o = new XMLHttpRequest();
                            switch (
                                ((o.onload = function () {
                                    o.status >= 200 && o.status < 300 ? r(o.response || o.responseText) : i({ status: o.status, statusText: o.statusText });
                                }),
                                (o.onerror = function () {
                                    i({ status: o.status, statusText: o.statusText });
                                }),
                                o.open(n, t),
                                o.setRequestHeader("Content-Type", "application/json"),
                                n)
                            ) {
                                case "POST":
                                case "DELETE":
                                case "PUT":
                                    o.send(JSON.stringify(e));
                                    break;
                                case "GET":
                                default:
                                    o.send();
                            }
                        })
                    );
                }),
                t
            );
        })();
        e.DataProxy = r;
    },
    function (t, e, n) {
        "use strict";
        var r,
            i =
                (this && this.__extends) ||
                ((r =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                            t.__proto__ = e;
                        }) ||
                    function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                    }),
                function (t, e) {
                    function n() {
                        this.constructor = t;
                    }
                    r(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(0),
            s = n(8),
            a = n(12),
            l = (function (t) {
                function e() {
                    return (null !== t && t.apply(this, arguments)) || this;
                }
                return (
                    i(e, t),
                    (e.prototype.toSVG = function () {
                        var t = this.config,
                            e = this.getCenter(),
                            n = t.$selected ? t.color : "#E4E4E4",
                            r = this.getCoords(t);
                        return o.sv("g", { _key: t.id, transform: "translate(" + r.x + "," + r.y + ") rotate(" + (t.angle || 0) + "," + e.x + "," + e.y + ")", class: this.getCss(), dhx_id: t.id }, [
                            o.sv("rect", { class: "dhx_item_shape", id: t.id, height: t.height, width: t.width, rx: 1, ry: 1, stroke: n, "stroke-width": 1 }),
                            a.getTextTemplate(t, this.text()),
                            a.getHeaderTpl(t),
                            a.getCircleTpl(t),
                        ]);
                    }),
                    (e.prototype.getMetaInfo = function () {
                        return [{ id: "text", label: "Text", type: "text" }];
                    }),
                    (e.prototype.getCss = function () {
                        return "dhx_diagram_item " + t.prototype.getCss.call(this);
                    }),
                    (e.prototype.setDefaults = function (t) {
                        return (t.width = t.width || 140), (t.height = t.height || 90), t;
                    }),
                    (e.prototype.text = function () {
                        return this.config.text;
                    }),
                    e
                );
            })(s.BaseShape);
        e.DiagramCard = l;
    },
    function (t, e, n) {
        "use strict";
        var r =
            (this && this.__assign) ||
            Object.assign ||
            function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t;
            };
        function i(t, e, n) {
            var i = { top: { x: (t = r({}, t)).x + t.width / 2, y: t.y - e }, bottom: { x: t.x + t.width / 2, y: t.y + t.height + e }, left: { x: t.x - e, y: t.y + t.height / 2 }, right: { x: t.x + t.width + e, y: t.y + t.height / 2 } };
            return n
                ? [i[n] || i].map(function (e) {
                      return t.$shape.getPoint(e.x, e.y);
                  })
                : [i.top, i.bottom, i.left, i.right].map(function (e) {
                      return t.$shape.getPoint(e.x, e.y);
                  });
        }
        function o(t, e, n, i, o, s) {
            if ((void 0 === s && (s = 10), !o)) {
                var a = n.y === i.y ? +s : 0,
                    l = n.x === i.x ? +s : 0;
                return [t, { x1: n.x, y1: n.y, x: n.x + a, y: n.y + l }, { x: i.x - a, y: i.y - l }, { x1: i.x, y1: i.y, x: e.x, y: e.y }];
            }
            var c = i.x < o.x ? -1 : 1,
                u = i.y < o.y ? -1 : 1,
                h = n.x > o.x ? 1 : -1,
                d = n.y > o.y ? 1 : -1,
                f = r({}, o),
                p = r({}, i),
                v = { x1: o.x, y1: o.y, x: o.x, y: o.y + s * u };
            return (
                n.x === o.x && ((f.y += s * d), (p.x -= s * c), (v = { x1: o.x, y1: o.y, x: o.x + s * c, y: o.y })),
                n.y === o.y && ((f.x += s * h), (p.y -= s * u), (v = { x1: o.x, y1: o.y, x: o.x, y: o.y + s * u })),
                [t, n, f, v, p, { x1: i.x, y1: i.y, x: e.x, y: e.y }]
            );
        }
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.nearestLinkPath = function (t, e, n, r) {
                if (e && n) {
                    var s = (function (t, e, n, r, s, a) {
                        void 0 === s && (s = ""), void 0 === a && (a = "");
                        for (var l, c, u, h, d, f, p, v, g = i(e, 0, s), _ = i(n, 0, a), y = i(e, r, s), m = i(n, r, a), x = 1 / 0, b = 0; b < y.length; b++)
                            for (var w = y[b], D = 0; D < m.length; D++) {
                                var C = m[D],
                                    k = ((d = w), (p = (f = C).x - d.x), (v = f.y - d.y), Math.sqrt(p * p + v * v));
                                if (x > k)
                                    if (((x = k), w.x === C.x || w.y === C.y))
                                        (g[b].x === w.x && w.x === _[D].x) || (g[b].y === w.y && _[D].y === w.y)
                                            ? (l = [g[b], _[D]])
                                            : ((l = [g[b], w, C, _[D]]), t.cornersRadius && "straight" !== t.connectType && (l = o(g[b], _[D], w, C, null, t.cornersRadius)));
                                    else {
                                        var M = w.x < g[b].x && w.x < C.x,
                                            S = w.y > g[b].y && w.y > C.y,
                                            E = g[b].x === w.x || M ? { x: w.x, y: C.y } : { x: C.x, y: w.y };
                                        (E = S ? { x: C.x, y: w.y } : E),
                                            "curved" === t.connectType
                                                ? ((c = g[b]), (u = _[D]), (l = [c, { x1: (h = E).x, y1: h.y, x: u.x, y: u.y }]))
                                                : (l = t.cornersRadius && "straight" !== t.connectType ? o(g[b], _[D], w, C, E, t.cornersRadius) : [g[b], w, E, C, _[D]]);
                                    }
                            }
                        return l;
                    })(t, e, n, r.lineGap, t.fromSide, t.toSide);
                    if ("straight" === t.connectType) return (t.points = [s[0], s[s.length - 1]]);
                    if (t.points) {
                        if (t.points.length === s.length)
                            t.points = t.points.map(function (t, e) {
                                return t && s[e] && !t.$custom ? s[e] : t;
                            });
                        else {
                            var a = t.points.filter(function (t) {
                                return t.$custom;
                            });
                            t.points = a.length ? t.points : s;
                        }
                        t.$move || ((t.points[0] = s[0]), (t.points[t.points.length - 1] = s[s.length - 1]));
                    } else t.points = s;
                }
            }),
            (e.directLinkPath = function (t, e, n, r) {
                var i = e.x + (e.dx || 0),
                    o = e.y + (e.dy || 0),
                    s = n.x + (n.dx || 0),
                    a = n.y + (n.dy || 0);
                if ("vertical" === e.dir) {
                    var l = i,
                        c = Math.round(o + e.height / 2),
                        u = s,
                        h = Math.round(a + n.height / 2),
                        d = 0.5 - Math.round(r.margin.itemX / 2);
                    t.points = [
                        { x: l, y: c },
                        { x: l + d, y: c },
                        { x: l + d, y: h },
                        { x: u, y: h },
                    ];
                } else
                    (l = Math.round(i + e.width / 2)),
                        (c = o + e.height),
                        (u = Math.round(s + n.width / 2)),
                        (h = a),
                        (d = Math.round(r.margin.itemY / 2) + 0.5),
                        (t.points = [
                            { x: l, y: c },
                            { x: l, y: c + d },
                            { x: u, y: c + d },
                            { x: u, y: h },
                        ]);
            });
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(0);
        (e.getCircleTpl = function (t) {
            if (!t.$count && !1 !== t.open) return "";
            var e = "vertical" === t.dir,
                n = !1 === t.open,
                i = t.width / 2,
                o = t.height / 2,
                s = { x: e ? 0 : i, y: e ? o : t.height },
                a = n
                    ? r.sv("polyline", {
                          points: s.x - 5 + "," + s.y + "\n\t\t" + s.x + "," + s.y + "\n\t\t" + s.x + "," + (s.y - 5) + "\n\t\t" + s.x + "," + (s.y + 5) + "\n\t\t" + s.x + "," + s.y + "\n\t\t" + (s.x + 5) + "," + s.y,
                          "stroke-width": "2",
                          stroke: "white",
                          fill: "none",
                      })
                    : r.sv("line", { x1: s.x - 5, y1: s.y, x2: s.x + 5, y2: s.y, "stroke-width": "2", stroke: "white" });
            return r.sv("g", { x: s.x, y: s.y, dhx_diagram: "hide", class: n ? "dhx_expand_icon" : "dhx_hide_icon" }, [r.sv("circle", { r: 10, cx: s.x, cy: s.y, fill: t.$expandColor }), a]);
        }),
            (e.getHeaderTpl = function (t) {
                var e = t.color || "#20b6e2";
                return r.sv("rect", { height: 3.5, width: t.width, class: "dhx_item_header", stroke: e, fill: e, "stroke-width": 1 });
            }),
            (e.getTextTemplate = function (t, e) {
                return t.text || t.title
                    ? r.sv("foreignObject", { width: t.width, overflow: "hidden", height: t.height, transform: "translate(0 0)" }, [r.el("div", { class: "shape_content", style: "width:" + t.width + "px;height:" + t.height + "px;" }, e)])
                    : null;
            });
    },
    function (t, e, n) {
        "use strict";
        var r =
            (this && this.__assign) ||
            Object.assign ||
            function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t;
            };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n(3),
            o = n(34),
            s = n(35),
            a = n(9),
            l = n(2),
            c = n(1),
            u = n(4),
            h = (function () {
                function t(t, e) {
                    (this._order = []),
                        (this._pull = {}),
                        (this._changes = { order: [] }),
                        (this._initOrder = null),
                        (this.config = t || {}),
                        (this._sort = new s.Sort()),
                        (this._loader = new o.Loader(this, this._changes)),
                        (this.events = e || new i.EventSystem(this));
                }
                return (
                    (t.prototype.add = function (t, e) {
                        this.events.fire(c.DataEvents.beforeAdd, [t]) && (this._addCore(t, e), this._onChange(c.DataEvents.add, t.id, t), this.events.fire(c.DataEvents.afterAdd, [t]));
                    }),
                    (t.prototype.remove = function (t) {
                        var e = this._pull[t];
                        if (e) {
                            if (!this.events.fire(c.DataEvents.beforeRemove, [e])) return;
                            this._removeCore(e.id), this._onChange(c.DataEvents.remove, t, e);
                        }
                    }),
                    (t.prototype.removeAll = function () {
                        this._removeAll(), this.events.fire(c.DataEvents.change);
                    }),
                    (t.prototype.exists = function (t) {
                        return !!this._pull[t];
                    }),
                    (t.prototype.getNearId = function (t) {
                        if (!this._pull[t]) return this._order[0].id || "";
                    }),
                    (t.prototype.getItem = function (t) {
                        return this._pull[t];
                    }),
                    (t.prototype.update = function (t, e, n) {
                        var r = this.getItem(t);
                        if (r) {
                            if (l.isEqualObj(e, r)) return;
                            e.id && t !== e.id
                                ? (l.dhxWarning("this method doesn't allow change id"), l.isDebug())
                                : (u.extend(this._pull[t], e), this.config.update && this.config.update(this._pull[t]), n || this._onChange("update", t, this._pull[t]));
                        } else l.dhxWarning("item not found");
                    }),
                    (t.prototype.getIndex = function (t) {
                        var e = u.findIndex(this._order, function (e) {
                            return e.id === t;
                        });
                        return this._pull[t] && e >= 0 ? e : -1;
                    }),
                    (t.prototype.getId = function (t) {
                        if (this._order[t]) return this._order[t].id;
                    }),
                    (t.prototype.filter = function (t, e) {
                        if ((e || ((this._order = this._initOrder || this._order), (this._initOrder = null)), t)) {
                            var n = this._order.filter(function (e) {
                                return "function" == typeof t ? t(e) : e[t.by] === t.match;
                            });
                            this._initOrder || ((this._initOrder = this._order), (this._order = n));
                        }
                        this.events.fire(c.DataEvents.change);
                    }),
                    (t.prototype.find = function (t) {
                        for (var e in this._pull) {
                            var n = l.findByConf(this._pull[e], t);
                            if (n) return n;
                        }
                        return null;
                    }),
                    (t.prototype.findAll = function (t) {
                        var e = [];
                        for (var n in this._pull) {
                            var r = l.findByConf(this._pull[n], t);
                            r && e.push(r);
                        }
                        return e;
                    }),
                    (t.prototype.sort = function (t) {
                        this._sort.sort(this._order, t), this._initOrder && this._initOrder.length && this._sort.sort(this._initOrder, t), this.events.fire(c.DataEvents.change);
                    }),
                    (t.prototype.copy = function (t, e, n, i) {
                        if (!this.exists(t)) return null;
                        var o = u.uid();
                        return n ? (i ? void n.add(r({}, this.getItem(t)), e, i) : n.exists(t) ? (n.add(r({}, this.getItem(t), { id: o }), e), o) : (n.add(this.getItem(t), e), t)) : (this.add(r({}, this.getItem(t), { id: o }), e), o);
                    }),
                    (t.prototype.move = function (t, e, n, r) {
                        if (n && n !== this && this.exists(t)) {
                            var i = this.getItem(t);
                            return n.exists(t) && (i.id = u.uid()), r && (i.parent = r), n.add(i, e), this.remove(i.id), i.id;
                        }
                        if (this.getIndex(t) === e) return null;
                        var o = this._order.splice(this.getIndex(t), 1)[0];
                        return -1 === e && (e = this._order.length), this._order.splice(e, 0, o), this.events.fire(c.DataEvents.change), t;
                    }),
                    (t.prototype.load = function (t, e) {
                        return "string" == typeof t && (t = new a.DataProxy(t)), this._loader.load(t, e);
                    }),
                    (t.prototype.parse = function (t, e) {
                        return this._removeAll(), this._loader.parse(t, e);
                    }),
                    (t.prototype.$parse = function (t) {
                        var e = this.config.approximate;
                        e && (t = this._approximate(t, e.value, e.maxNum)), this._parse_data(t), this.events.fire(c.DataEvents.change), this.events.fire(c.DataEvents.load);
                    }),
                    (t.prototype.save = function (t) {
                        this._loader.save(t);
                    }),
                    (t.prototype.isSaved = function () {
                        return !this._changes.order.length;
                    }),
                    (t.prototype.map = function (t) {
                        for (var e = [], n = 0; n < this._order.length; n++) e.push(t.call(this, this._order[n], n));
                        return e;
                    }),
                    (t.prototype.serialize = function () {
                        return this.map(function (t) {
                            var e = r({}, t);
                            return (
                                Object.keys(e).forEach(function (t) {
                                    "$" === t[0] && delete e[t];
                                }),
                                e
                            );
                        });
                    }),
                    (t.prototype._removeAll = function () {
                        (this._pull = {}), (this._order = []), (this._changes.order = []), (this._initOrder = null);
                    }),
                    (t.prototype._addCore = function (t, e) {
                        this.config.init && (t = this.config.init(t)),
                            (t.id = t.id ? t.id.toString() : u.uid()),
                            this._pull[t.id] && l.dhxError("Item already exist"),
                            this._initOrder && this._initOrder.length && this._addToOrder(this._initOrder, t, e),
                            this._addToOrder(this._order, t, e);
                    }),
                    (t.prototype._removeCore = function (t) {
                        this.getIndex(t) >= 0 &&
                            ((this._order = this._order.filter(function (e) {
                                return e.id !== t;
                            })),
                            delete this._pull[t]),
                            this._initOrder &&
                                this._initOrder.length &&
                                (this._initOrder = this._initOrder.filter(function (e) {
                                    return e.id !== t;
                                }));
                    }),
                    (t.prototype._parse_data = function (t) {
                        for (var e = this._order.length, n = 0, r = t; n < r.length; n++) {
                            var i = r[n];
                            this.config.init && (i = this.config.init(i)), (i.id = i.id || u.uid()), (this._pull[i.id] = i), (this._order[e++] = i);
                        }
                    }),
                    (t.prototype._approximate = function (t, e, n) {
                        for (var r = t.length, i = e.length, o = Math.floor(r / n), s = Array(Math.ceil(r / o)), a = 0, l = 0; l < r; l += o) {
                            for (var c = u.copy(t[l]), h = Math.min(r, l + o), d = 0; d < i; d++) {
                                for (var f = 0, p = l; p < h; p++) f += t[p][e[d]];
                                c[e[d]] = f / (h - l);
                            }
                            s[a++] = c;
                        }
                        return s;
                    }),
                    (t.prototype._onChange = function (t, e, n) {
                        for (var i = 0, o = this._changes.order; i < o.length; i++) {
                            var s = o[i];
                            if (s.id === e && !s.saving) return s.error && (s.error = !1), (s = r({}, s, { obj: n, status: t })), void this.events.fire(c.DataEvents.change, [e, t, n]);
                        }
                        this._changes.order.push({ id: e, status: t, obj: r({}, n), saving: !1 }), this.events.fire(c.DataEvents.change, [e, t, n]);
                    }),
                    (t.prototype._addToOrder = function (t, e, n) {
                        n && t[n] ? ((this._pull[e.id] = e), t.splice(n, 0, e)) : ((this._pull[e.id] = e), t.push(e));
                    }),
                    t
                );
            })();
        e.DataCollection = h;
    },
    function (t, e, n) {
        "use strict";
        var r =
            (this && this.__assign) ||
            Object.assign ||
            function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t;
            };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = (function () {
            function t(t) {
                void 0 === t && (t = {});
                (this.config = r({}, { skipHeader: 0, nameByHeader: !1, row: "\n", column: "," }, t)), this.config.nameByHeader && (this.config.skipHeader = 1);
            }
            return (
                (t.prototype.getFields = function (t, e) {
                    for (var n = t.trim().split(this.config.column), r = {}, i = 0; i < n.length; i++) r[e ? e[i] : i + 1] = n[i];
                    return r;
                }),
                (t.prototype.getRows = function (t) {
                    return t.trim().split(this.config.row);
                }),
                (t.prototype.toJsonArray = function (t) {
                    var e = this,
                        n = this.getRows(t),
                        r = this.config.names;
                    if (this.config.skipHeader) {
                        var i = n.splice(0, this.config.skipHeader);
                        this.config.nameByHeader && (r = i[0].trim().split(this.config.column));
                    }
                    return n.map(function (t) {
                        return e.getFields(t, r);
                    });
                }),
                t
            );
        })();
        e.CsvDriver = i;
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = (function () {
            function t() {}
            return (
                (t.prototype.toJsonArray = function (t) {
                    return this.getRows(t);
                }),
                (t.prototype.getFields = function (t) {
                    return t;
                }),
                (t.prototype.getRows = function (t) {
                    return "string" == typeof t ? JSON.parse(t) : t;
                }),
                t
            );
        })();
        e.JsonDriver = r;
    },
    function (t, e, n) {
        "use strict";
        var r,
            i =
                (this && this.__extends) ||
                ((r =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                            t.__proto__ = e;
                        }) ||
                    function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                    }),
                function (t, e) {
                    function n() {
                        this.constructor = t;
                    }
                    r(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                }),
            o =
                (this && this.__assign) ||
                Object.assign ||
                function (t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t;
                };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var s = n(4),
            a = n(13),
            l = n(9),
            c = n(2),
            u = n(1);
        function h(t, e, n, r) {
            void 0 !== r && -1 !== r && t[n] && t[n][r] ? t[n].splice(r, 0, e) : (t[n] || (t[n] = []), t[n].push(e));
        }
        var d = (function (t) {
            function e(e, n) {
                var r,
                    i = t.call(this, e, n) || this,
                    o = (i._root = "_ROOT_" + s.uid());
                return (i._childs = (((r = {})[o] = []), r)), (i._initChilds = null), i;
            }
            return (
                i(e, t),
                (e.prototype.add = function (e, n, r) {
                    void 0 === n && (n = -1), void 0 === r && (r = this._root), (e.parent = e.parent ? e.parent.toString() : r), t.prototype.add.call(this, e, n);
                }),
                (e.prototype.getRoot = function () {
                    return this._root;
                }),
                (e.prototype.getParent = function (t, e) {
                    if ((void 0 === e && (e = !1), !this._pull[t])) return null;
                    var n = this._pull[t].parent;
                    return e ? this._pull[n] : n;
                }),
                (e.prototype.getChilds = function (t) {
                    return this._childs && this._childs[t] ? this._childs[t] : [];
                }),
                (e.prototype.getLength = function (t) {
                    return this._childs[t] ? this._childs[t].length : null;
                }),
                (e.prototype.removeAll = function (e) {
                    if (e)
                        for (var n = 0, r = this._childs[e].slice(); n < r.length; n++) {
                            var i = r[n];
                            this.remove(i.id);
                        }
                    else {
                        t.prototype.removeAll.call(this);
                        var o = this._root;
                        (this._initChilds = null), (this._childs = (((s = {})[o] = []), s));
                    }
                    var s;
                }),
                (e.prototype.getIndex = function (t) {
                    var e = this.getParent(t);
                    return e && this._childs[e]
                        ? s.findIndex(this._childs[e], function (e) {
                              return e.id === t;
                          })
                        : -1;
                }),
                (e.prototype.sort = function (t) {
                    var e = this._childs;
                    for (var n in e) this._sort.sort(e[n], t);
                    this.events.fire(u.DataEvents.change);
                }),
                (e.prototype.map = function (t, e, n) {
                    void 0 === e && (e = this._root), void 0 === n && (n = !0);
                    var r = [];
                    if (!this.haveChilds(e)) return r;
                    for (var i = 0; i < this._childs[e].length; i++)
                        if ((r.push(t.call(this, this._childs[e][i], i)), n)) {
                            var o = this.map(t, this._childs[e][i].id, n);
                            r = r.concat(o);
                        }
                    return r;
                }),
                (e.prototype.filter = function (t) {
                    if (t) {
                        this._initChilds || (this._initChilds = this._childs), (t.type = t.type || u.TreeFilterType.all);
                        var e = {};
                        this._recursiveFilter(t, this._root, 0, e), (this._childs = e), this.events.fire(u.DataEvents.change);
                    } else this.restoreOrder();
                }),
                (e.prototype.restoreOrder = function () {
                    (this._childs = this._initChilds), (this._initChilds = null), this.events.fire(u.DataEvents.change);
                }),
                (e.prototype.copy = function (t, n, r, i) {
                    if ((void 0 === r && (r = this), void 0 === i && (i = this._root), !this.exists(t))) return null;
                    var a = o({}, this._childs)[t];
                    if (r === this && !this.canCopy(t, i)) return null;
                    if (r instanceof e) {
                        if (this.exists(t)) {
                            var l = o({}, this.getItem(t));
                            r.exists(t) ? (l.id = s.uid()) : (l.id = t), (l.parent = i), r.add(l, n), (t = l.id);
                        }
                        if (a)
                            for (var c = 0, u = a; c < u.length; c++) {
                                var h = u[c].id,
                                    d = this.getIndex(h);
                                this.copy(h, d, r, t);
                            }
                        return t;
                    }
                    r.add(this._pull[t]);
                }),
                (e.prototype.move = function (t, n, r, i) {
                    if ((void 0 === r && (r = this), void 0 === i && (i = this._root), !this.exists(t))) return null;
                    if (r !== this) {
                        if (!(r instanceof e)) return r.add(this._pull[t]), void this.remove(t);
                        var o = this.copy(t, n, r, i);
                        return this.remove(t), o;
                    }
                    if (!this.canCopy(t, i)) return null;
                    var s = this.getParent(t),
                        a = this.getIndex(t),
                        l = this._childs[s].splice(a, 1)[0];
                    return (
                        (l.parent = i),
                        this._childs[s].length || delete this._childs[s],
                        this.haveChilds(i) || (this._childs[i] = []),
                        -1 === n ? (n = this._childs[i].push(l)) : this._childs[i].splice(n, 0, l),
                        this.events.fire(u.DataEvents.change),
                        t
                    );
                }),
                (e.prototype.eachChild = function (t, e, n) {
                    if ((void 0 === n && (n = !0), this.haveChilds(t))) for (var r = 0; r < this._childs[t].length; r++) e.call(this, this._childs[t][r], r), n && this.eachChild(this._childs[t][r].id, e, n);
                }),
                (e.prototype.getNearId = function (t) {
                    return t;
                }),
                (e.prototype.loadChilds = function (t, e) {
                    var n = this;
                    void 0 === e && (e = "json");
                    var r = this.config.autoload + "?id=" + t;
                    new l.DataProxy(r).load().then(function (r) {
                        (r = (e = c.toDataDriver(e)).toJsonArray(r)), n._parse_data(r, t), n.events.fire(u.DataEvents.change);
                    });
                }),
                (e.prototype.refreshChilds = function (t, e) {
                    void 0 === e && (e = "json"), this.removeAll(t), this.loadChilds(t, e);
                }),
                (e.prototype.eachParent = function (t, e, n) {
                    void 0 === n && (n = !1);
                    var r = this.getItem(t);
                    if (r && (n && e.call(this, r), r.parent !== this._root)) {
                        var i = this.getItem(r.parent);
                        e.call(this, i), this.eachParent(r.parent, e);
                    }
                }),
                (e.prototype.haveChilds = function (t) {
                    return t in this._childs;
                }),
                (e.prototype.canCopy = function (t, e) {
                    if (t === e) return !1;
                    var n = !0;
                    return (
                        this.eachParent(e, function (e) {
                            return e.id === t ? (n = !1) : null;
                        }),
                        n
                    );
                }),
                (e.prototype._removeCore = function (t) {
                    if (this._pull[t]) {
                        var e = this.getParent(t);
                        (this._childs[e] = this._childs[e].filter(function (e) {
                            return e.id !== t;
                        })),
                            e === this._root || this._childs[e].length || delete this._childs[e],
                            this._initChilds &&
                                this._initChilds[e] &&
                                ((this._initChilds[e] = this._initChilds[e].filter(function (e) {
                                    return e.id !== t;
                                })),
                                e === this._root || this._initChilds[e].length || delete this._initChilds[e]),
                            this._fastDeleteChilds(this._childs, t),
                            this._initChilds && this._fastDeleteChilds(this._initChilds, t);
                    }
                }),
                (e.prototype._addToOrder = function (t, e, n) {
                    var r = this._childs,
                        i = this._initChilds,
                        o = e.parent;
                    (this._pull[e.id] = e), h(r, e, o, n), i && h(i, e, o, n);
                }),
                (e.prototype._parse_data = function (t, e) {
                    void 0 === e && (e = this._root);
                    for (var n = 0, r = t; n < r.length; n++) {
                        var i = r[n];
                        this.config.init && (i = this.config.init(i)),
                            (i.id = i.id ? i.id.toString() : s.uid()),
                            (i.parent = i.parent ? i.parent.toString() : e),
                            (this._pull[i.id] = i),
                            this._childs[i.parent] || (this._childs[i.parent] = []),
                            this._childs[i.parent].push(i),
                            i.childs && i.childs instanceof Object && this._parse_data(i.childs, i.id);
                    }
                }),
                (e.prototype._fastDeleteChilds = function (t, e) {
                    if ((this._pull[e] && delete this._pull[e], t[e])) {
                        for (var n = 0; n < t[e].length; n++) this._fastDeleteChilds(t, t[e][n].id);
                        delete t[e];
                    }
                }),
                (e.prototype._recursiveFilter = function (t, e, n, r) {
                    var i = this,
                        o = this._childs[e];
                    if (o) {
                        var s = function (e) {
                            switch (t.type) {
                                case u.TreeFilterType.all:
                                    return !0;
                                case u.TreeFilterType.specific:
                                    return n === t.specific;
                                case u.TreeFilterType.leafs:
                                    return !i.haveChilds(e.id);
                            }
                        };
                        if (t.by && t.match) {
                            var a = function (e) {
                                return !s(e) || -1 !== e[t.by].toString().toLowerCase().indexOf(t.match.toString().toLowerCase());
                            };
                            r[e] = o.filter(a);
                        } else if (t.rule && "function" == typeof t.rule) {
                            a = function (e) {
                                return !s(e) || t.rule(e);
                            };
                            var l = o.filter(a);
                            l.length && (r[e] = l);
                        }
                        for (var c = 0, h = o; c < h.length; c++) {
                            var d = h[c];
                            this._recursiveFilter(t, d.id, n + 1, r);
                        }
                    }
                }),
                e
            );
        })(a.DataCollection);
        e.TreeCollection = d;
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), n(18);
        var r = n(19),
            i = n(40),
            o = (window.dhx = window.dhx || {});
        (o.i18n = o.i18n || {}),
            (o.i18n.setLocale = function (t, e) {
                var n = o.i18n[t];
                for (var r in e) n[r] = e[r];
            }),
            (o.i18n.diagram = o.i18n.diagram || i.default),
            (window.dhx.Diagram = r.Diagram);
    },
    function (t, e) {},
    function (t, e, n) {
        "use strict";
        var r,
            i =
                (this && this.__extends) ||
                ((r =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                            t.__proto__ = e;
                        }) ||
                    function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                    }),
                function (t, e) {
                    function n() {
                        this.constructor = t;
                    }
                    r(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(3),
            s = n(4),
            a = n(0),
            l = n(5),
            c = n(22),
            u = n(23),
            h = n(11),
            d = n(24),
            f = n(25),
            p = n(26),
            v = n(32),
            g = n(39),
            _ = n(6),
            y = (function (t) {
                function e(e, n) {
                    var r = t.call(this, e, n) || this;
                    (r.version = "2.1.0"), r._set_defaults(), r._init_events(), r._init_struct(), r.config.toolbar && (r._toolbar = new g.Toolbar(r.events, r.config.toolbar));
                    var i = a.create(
                        {
                            render: function (t) {
                                return r._render(t);
                            },
                        },
                        r
                    );
                    return r.mount(e, i), r;
                }
                return (
                    i(e, t),
                    (e.prototype.locate = function (t) {
                        var e = l.locate(t, "dhx_id"),
                            n = this.data.getItem(e);
                        return n ? n.$shape : null;
                    }),
                    (e.prototype.collapseItem = function (t) {
                        this.events.fire(_.DiagramEvents.beforeCollapse, [t]) && (this.data.update(t, { open: !1 }), this.events.fire(_.DiagramEvents.afterCollapse, [t]));
                    }),
                    (e.prototype.expandItem = function (t) {
                        this.events.fire(_.DiagramEvents.beforeExpand, [t]) && (this.data.update(t, { open: !0 }), this.events.fire(_.DiagramEvents.afterExpand, [t]));
                    }),
                    (e.prototype.getScrollState = function () {
                        var t = this.getRootView().node.el;
                        return { x: t.scrollLeft, y: t.scrollTop };
                    }),
                    (e.prototype.scrollTo = function (t, e) {
                        var n = this.getRootView().node.el;
                        (n.scrollLeft = t), (n.scrollTop = e);
                    }),
                    (e.prototype.showItem = function (t) {
                        var e = this.getRootView().node.el,
                            n = this.data.getItem(t);
                        if (n) {
                            var r = n.$shape.getBox(),
                                i = e.offsetWidth / 2,
                                o = e.offsetHeight / 2;
                            this.scrollTo(r.right + 10 - i, r.bottom + 10 - o);
                        }
                    }),
                    (e.prototype._render = function (t) {
                        if (this._doNotRepaint && t.node) return t.node;
                        this._doNotRepaint = !0;
                        var e = this._getContent(),
                            n = e.size,
                            r = e.content;
                        this.events.fire(_.DiagramEvents.beforeRender, [n]);
                        var i = n.x - n.left + 2 * this.config.margin.x,
                            o = n.y - n.top + 2 * this.config.margin.y,
                            s = "org" === this.config.type ? "dhx_org_chart" : "dhx_free_diagram";
                        (n.left -= this.config.margin.x), (n.top -= this.config.margin.y);
                        var l = i * this.config.scale,
                            c = o * this.config.scale,
                            u = null;
                        if (this._toolbar) {
                            var h = this.selection.getId();
                            h && (u = this._toolbar.toSVG(this.data.getItem(h), n));
                        }
                        var d = null;
                        return (
                            this.config.$svg && (d = this.config.$svg(n)),
                            a.el(".dhx_diagram.dhx_widget", this._htmlevents, [
                                a.el(".dhx_wrapper", { class: s }, [
                                    a.sv("svg", { xmlns: "http://www.w3.org/2000/svg", width: l, height: c, viewBox: n.left + " " + n.top + " " + i + " " + o }, [
                                        a.sv("defs", [a.sv("filter", { x: 0, y: 0, width: 1, height: 1, id: "dhx_text_background" }, [a.sv("feFlood", { "flood-color": "white" }), a.sv("feComposite", { in: "SourceGraphic" })])]),
                                        a.sv("g", { "shape-rendering": 1 === this.config.scale && "org" === this.config.type ? "crispedges" : "auto" }, r),
                                    ]),
                                    u,
                                    d,
                                ]),
                            ])
                        );
                    }),
                    (e.prototype._init_events = function () {
                        var t = this;
                        this._htmlevents = {
                            onscroll: function () {
                                t.events.fire(_.DiagramEvents.scroll, [t.getScrollState()]);
                            },
                            onmousedown: l.eventHandler(
                                function (e) {
                                    return t.locate(e);
                                },
                                {
                                    dhx_diagram_item: function (e, n) {
                                        t.events.fire(_.DiagramEvents.shapeMouseDown, [n.id, e]);
                                    },
                                    dhx_diagram_flow_item: function (e, n) {
                                        t.events.fire(_.DiagramEvents.shapeMouseDown, [n.id, e]);
                                    },
                                    dhx_diagram_connector: function (e, n) {
                                        t.events.fire(_.DiagramEvents.shapeMouseDown, [n.id, e, t._getPoint(e.clientX, e.clientY)]);
                                    },
                                }
                            ),
                            onmouseover: l.eventHandler(
                                function (e) {
                                    return t.locate(e);
                                },
                                {
                                    dhx_diagram_item: function (e, n) {
                                        t.events.fire(_.DiagramEvents.shapeHover, [n.id, e]);
                                    },
                                    dhx_diagram_flow_item: function (e, n) {
                                        t.events.fire(_.DiagramEvents.shapeHover, [n.id, e]);
                                    },
                                    dhx_diagram_connector: function (e, n) {
                                        t.events.fire(_.DiagramEvents.shapeHover, [n.id, e]);
                                    },
                                }
                            ),
                            onclick: l.eventHandler(
                                function (e) {
                                    return t.locate(e);
                                },
                                {
                                    dhx_expand_icon: function (e, n) {
                                        return t.expandItem(n.id);
                                    },
                                    dhx_hide_icon: function (e, n) {
                                        return t.collapseItem(n.id);
                                    },
                                    dhx_diagram_item: function (e, n) {
                                        t.events.fire(_.DiagramEvents.shapeClick, [n.id]), t.config.select && t.selection.add(n.id);
                                    },
                                    dhx_diagram: function (e) {
                                        var n = e.target,
                                            r = n.getAttribute && (n.getAttribute("class") || "").match(/dhx_diagram\b/),
                                            i = "svg" === n.tagName;
                                        (r || i) && t.events.fire(_.DiagramEvents.emptyAreaClick, [e]);
                                    },
                                }
                            ),
                            ondblclick: l.eventHandler(
                                function (e) {
                                    return t.locate(e);
                                },
                                {
                                    dhx_diagram_connector: function (e, n) {
                                        t.events.fire(_.DiagramEvents.shapedDblClick, [n.id, e]);
                                    },
                                    dhx_diagram_item: function (e, n) {
                                        t.events.fire(_.DiagramEvents.shapedDblClick, [n.id, e]);
                                    },
                                }
                            ),
                        };
                    }),
                    (e.prototype._set_defaults = function () {
                        (this.config = s.extend({ defaultShapeType: "card", defaultLinkType: "line", lineGap: 10, scale: 1, margin: { x: 40, y: 40, itemX: 40, itemY: 40 }, gridStep: 10 }, this.config)),
                            window.SVGForeignObjectElement || (this.config.defaultShapeType = "svg-card");
                    }),
                    (e.prototype._init_struct = function () {
                        var t = this;
                        (this.events = new o.EventSystem(this)),
                            (this.shapes = p.shapes),
                            (this.data = new v.ShapesCollection(
                                {
                                    init: function (e) {
                                        var n = "from" in e ? t.config.defaultLinkType : t.config.defaultShapeType;
                                        return (e.type = e.type || n), "org" !== t.config.type && e.from && (e.stroke = e.stroke || "#2196F3"), (e.$shape = p.shapesFactory(e)), e;
                                    },
                                    update: function (t) {
                                        t.$shape.config = t;
                                    },
                                    type: this.config.type,
                                },
                                this.events
                            )),
                            (this.selection = new f.Selection({}, this.data, this.events)),
                            (this.export = new u.Exporter("diagram", this.version, this)),
                            this.data.events.on(_.DataEvents.change, function () {
                                return t.paint();
                            }),
                            this.events.on(_.SelectionEvents.afterSelect, function () {
                                return t.paint();
                            });
                    }),
                    (e.prototype._getContent = function () {
                        var t = this,
                            e = !1;
                        "org" === this.config.type && (d.placeOrgonogram(this.data, this.config), (e = !0));
                        var n = { x: 0, y: 0, left: 0, top: 0, scale: this.config.scale },
                            r = [],
                            i = [];
                        return (
                            this.data.mapVisible(function (o) {
                                o.$shape.isConnector() ? (e || h.nearestLinkPath(o, t.data.getItem(o.from), t.data.getItem(o.to), t.config), i.push(o.$shape.toSVG())) : r.push(o.$shape.toSVG());
                                var s = o.$shape.getBox();
                                s.right > n.x && (n.x = s.right), s.left < n.left && (n.left = s.left), s.bottom > n.y && (n.y = s.bottom), s.top < n.top && (n.top = s.top);
                            }),
                            { size: n, content: i.concat(r) }
                        );
                    }),
                    (e.prototype._getPoint = function (t, e) {
                        var n = this.getRootView().node.el.getBoundingClientRect();
                        return { x: t - n.left - this.config.margin.x, y: e - n.top - this.config.margin.y };
                    }),
                    e
                );
            })(c.View);
        e.Diagram = y;
    },
    function (t, e, n) {
        /**
         * Copyright (c) 2017, Leon Sorokin
         * All rights reserved. (MIT Licensed)
         *
         * domvm.js (DOM ViewModel)
         * A thin, fast, dependency-free vdom view layer
         * @preserve https://github.com/leeoniya/domvm (v3.2.6, micro build)
         */ var r;
        (r = function () {
            "use strict";
            var t = 1,
                e = 2,
                n = 3,
                r = 4,
                i = 5,
                o = "undefined" != typeof window,
                s = (o ? window : {}).requestAnimationFrame,
                a = {};
            function l() {}
            var c = Array.isArray;
            function u(t) {
                return null != t;
            }
            function h(t) {
                return null != t && t.constructor === Object;
            }
            function d(t) {
                var e = typeof t;
                return "string" === e || "number" === e;
            }
            function f(t) {
                return "function" == typeof t;
            }
            function p(t) {
                for (var e = arguments, n = 1; n < e.length; n++) for (var r in e[n]) t[r] = e[n][r];
                return t;
            }
            function v(t, e) {
                for (var n = [], r = e; r < t.length; r++) n.push(t[r]);
                return n;
            }
            function g(t, e) {
                for (var n in t) if (t[n] !== e[n]) return !1;
                return !0;
            }
            function _(t, e) {
                var n = t.length;
                if (e.length !== n) return !1;
                for (var r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
                return !0;
            }
            function y(t) {
                if (!s) return t;
                var e, n, r;
                function i() {
                    (e = 0), t.apply(n, r);
                }
                return function () {
                    (n = this), (r = arguments), e || (e = s(i));
                };
            }
            function m(t) {
                return "o" === t[0] && "n" === t[1];
            }
            function x(t) {
                return "_" === t[0];
            }
            function b(t) {
                t && t.el && t.el.offsetHeight;
            }
            function w(t) {
                return null != t.node && null != t.node.el;
            }
            function D(t, e) {
                switch (e) {
                    case "value":
                    case "checked":
                    case "selected":
                        return !0;
                }
                return !1;
            }
            function C(t) {
                for (t = t || a; null == t.vm && t.parent; ) t = t.parent;
                return t.vm;
            }
            function k() {}
            var M = (k.prototype = {
                constructor: k,
                type: null,
                vm: null,
                key: null,
                ref: null,
                data: null,
                hooks: null,
                ns: null,
                el: null,
                tag: null,
                attrs: null,
                body: null,
                flags: 0,
                _class: null,
                _diff: null,
                _dead: !1,
                _lis: !1,
                idx: null,
                parent: null,
            });
            function S(t) {
                var n = new k();
                return (n.type = e), (n.body = t), n;
            }
            var E = {},
                O = /\[(\w+)(?:=(\w+))?\]/g;
            var P = 1,
                I = 2,
                T = 4,
                j = 8;
            function A(e, n, r, i) {
                var o = new k();
                (o.type = t), u(i) && (o.flags = i), (o.attrs = n);
                var s = (function (t) {
                    var e,
                        n,
                        r,
                        i,
                        o = E[t];
                    if (null == o)
                        for (E[t] = o = { tag: (e = t.match(/^[-\w]+/)) ? e[0] : "div", id: (n = t.match(/#([-\w]+)/)) ? n[1] : null, class: (r = t.match(/\.([-\w.]+)/)) ? r[1].replace(/\./g, " ") : null, attrs: null }; (i = O.exec(t)); )
                            null == o.attrs && (o.attrs = {}), (o.attrs[i[1]] = i[2] || "");
                    return o;
                })(e);
                if (((o.tag = s.tag), s.id || s.class || s.attrs)) {
                    var a = o.attrs || {};
                    if ((s.id && !u(a.id) && (a.id = s.id), s.class && ((o._class = s.class), (a.class = s.class + (u(a.class) ? " " + a.class : ""))), s.attrs)) for (var l in s.attrs) u(a[l]) || (a[l] = s.attrs[l]);
                    o.attrs = a;
                }
                var c = o.attrs;
                return (
                    u(c) &&
                        (u(c._key) && (o.key = c._key),
                        u(c._ref) && (o.ref = c._ref),
                        u(c._hooks) && (o.hooks = c._hooks),
                        u(c._data) && (o.data = c._data),
                        u(c._flags) && (o.flags = c._flags),
                        u(o.key) || (u(o.ref) ? (o.key = o.ref) : u(c.id) ? (o.key = c.id) : u(c.name) && (o.key = c.name + ("radio" === c.type || "checkbox" === c.type ? c.value : "")))),
                    null != r && (o.body = r),
                    o
                );
            }
            function L(t, n, o, s) {
                if (t.type !== i && t.type !== r) {
                    var a, l, u;
                    (t.parent = n),
                        (t.idx = o),
                        (t.vm = s),
                        null != t.ref &&
                            ((a = C(t)),
                            (l = t.ref),
                            (u = t),
                            (function (t, e, n) {
                                for (var r; (r = e.shift()); ) 0 === e.length ? (t[r] = n) : (t[r] = t = t[r] || {});
                            })(a, ["refs"].concat(l.split(".")), u));
                    var h = t.hooks,
                        d = s && s.hooks;
                    ((h && (h.willRemove || h.didRemove)) || (d && (d.willUnmount || d.didUnmount))) &&
                        (function (t) {
                            for (; (t = t.parent); ) t.flags |= P;
                        })(t),
                        c(t.body) &&
                            (function (t) {
                                for (var n = t.body, r = 0; r < n.length; r++) {
                                    var i = n[r];
                                    !1 === i || null == i
                                        ? n.splice(r--, 1)
                                        : c(i)
                                        ? ((s = i), (a = r--), (l = 1), (o = n).splice.apply(o, [a, l].concat(s)))
                                        : (null == i.type && (n[r] = i = S("" + i)),
                                          i.type === e ? (null == i.body || "" === i.body ? n.splice(r--, 1) : r > 0 && n[r - 1].type === e ? ((n[r - 1].body += i.body), n.splice(r--, 1)) : L(i, t, r, null)) : L(i, t, r, null));
                                }
                                var o, s, a, l;
                            })(t);
                }
            }
            var H = {
                animationIterationCount: !0,
                boxFlex: !0,
                boxFlexGroup: !0,
                boxOrdinalGroup: !0,
                columnCount: !0,
                flex: !0,
                flexGrow: !0,
                flexPositive: !0,
                flexShrink: !0,
                flexNegative: !0,
                flexOrder: !0,
                gridRow: !0,
                gridColumn: !0,
                order: !0,
                lineClamp: !0,
                borderImageOutset: !0,
                borderImageSlice: !0,
                borderImageWidth: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                tabSize: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
                fillOpacity: !0,
                floodOpacity: !0,
                stopOpacity: !0,
                strokeDasharray: !0,
                strokeDashoffset: !0,
                strokeMiterlimit: !0,
                strokeOpacity: !0,
                strokeWidth: !0,
            };
            function R(t, e) {
                var n,
                    r,
                    i = (t.attrs || a).style,
                    o = e ? (e.attrs || a).style : null;
                if (null == i || d(i)) t.el.style.cssText = i;
                else {
                    for (var s in i) {
                        var l = i[s];
                        (null == o || (null != l && l !== o[s])) && (t.el.style[s] = ((n = s), (r = l), isNaN(r) || H[n] ? r : r + "px"));
                    }
                    if (o) for (var c in o) null == i[c] && (t.el.style[c] = "");
                }
            }
            var N = [];
            function V(t, e, n, r, i) {
                if (null != t) {
                    var o = n.hooks[e];
                    if (o) {
                        if ("d" !== e[0] || "i" !== e[1] || "d" !== e[2]) return o(n, r);
                        i ? b(n.parent) && o(n, r) : N.push([o, n, r]);
                    }
                }
            }
            function $(t) {
                var e;
                if (N.length) for (b(t.node); (e = N.shift()); ) e[0](e[1], e[2]);
            }
            var F = o ? document : null;
            function B(t) {
                return t.nextSibling;
            }
            function W(t, e, n) {
                var r = e._node,
                    i = r.vm;
                if (c(r.body))
                    if ((r.flags & P) === P) for (var o = 0; o < r.body.length; o++) W(e, r.body[o].el);
                    else G(r);
                delete e._node, t.removeChild(e), V(r.hooks, "didRemove", r, null, n), null != i && (V(i.hooks, "didUnmount", i, i.data, n), (i.node = null));
            }
            function z(t, e) {
                var n = e._node;
                if (!n._dead) {
                    var r,
                        i,
                        o,
                        s,
                        a = (function t(e) {
                            var n = e.vm,
                                r = null != n && V(n.hooks, "willUnmount", n, n.data),
                                i = V(e.hooks, "willRemove", e);
                            if ((e.flags & P) === P && c(e.body)) for (var o = 0; o < e.body.length; o++) t(e.body[o]);
                            return r || i;
                        })(n);
                    null != a && "object" == typeof (s = a) && f(s.then)
                        ? ((n._dead = !0),
                          a.then(
                              ((r = W),
                              (i = [t, e, !0]),
                              function () {
                                  return r.apply(o, i);
                              })
                          ))
                        : W(t, e);
                }
            }
            function G(t) {
                for (var e = t.body, n = 0; n < e.length; n++) {
                    var r = e[n];
                    delete r.el._node, null != r.vm && (r.vm.node = null), c(r.body) && G(r);
                }
            }
            function Z(t) {
                var e = t.el;
                if (0 == (t.flags & P)) c(t.body) && G(t), (e.textContent = null);
                else {
                    var n = e.firstChild;
                    do {
                        var r = B(n);
                        z(e, n);
                    } while ((n = r));
                }
            }
            function Y(t, e, n) {
                var r = e._node,
                    i = null != e.parentNode,
                    o = e !== n && i ? null : r.vm;
                null != o && V(o.hooks, "willMount", o, o.data), V(r.hooks, i ? "willReinsert" : "willInsert", r), t.insertBefore(e, n), V(r.hooks, i ? "didReinsert" : "didInsert", r), null != o && V(o.hooks, "didMount", o, o.data);
            }
            function U(t, e, n) {
                Y(t, e, n ? B(n) : null);
            }
            var q = {};
            var Q = l;
            function X(t, e, n) {
                t[e] = n;
            }
            function J(t, e, n, r, i) {
                var o = t.apply(i, e.concat([n, r, i, i.data]));
                i.onevent(n, r, i, i.data, e), Q.call(null, n, r, i, i.data, e), !1 === o && (n.preventDefault(), n.stopPropagation());
            }
            function K(t) {
                var e,
                    n,
                    r = (function (t) {
                        for (; null == t._node; ) t = t.parentNode;
                        return t._node;
                    })(t.target),
                    i = C(r),
                    o = t.currentTarget._node.attrs["on" + t.type];
                if (c(o)) J((e = o[0]), (n = o.slice(1)), t, r, i);
                else
                    for (var s in o)
                        if (t.target.matches(s)) {
                            var a = o[s];
                            c(a) ? ((e = a[0]), (n = a.slice(1))) : ((e = a), (n = [])), J(e, n, t, r, i);
                        }
            }
            function tt(t, e, n, r) {
                if (n !== r) {
                    var i = t.el;
                    null == n || f(n) ? X(i, e, n) : null == r && X(i, e, K);
                }
            }
            function et(t, e, n) {
                "." === e[0] && ((e = e.substr(1)), (n = !0)), n ? (t.el[e] = "") : t.el.removeAttribute(e);
            }
            function nt(t, e, n) {
                var r,
                    i,
                    o,
                    s,
                    l,
                    c,
                    u = t.attrs || a,
                    h = e.attrs || a;
                if (u === h);
                else {
                    for (var d in u) {
                        var f = u[d],
                            p = D(t.tag, d),
                            v = p ? t.el[d] : h[d];
                        f === v ||
                            ("style" === d
                                ? R(t, e)
                                : x(d) ||
                                  (m(d)
                                      ? tt(t, d, f, v)
                                      : ((i = d),
                                        (o = f),
                                        (s = p),
                                        (l = n),
                                        (c = void 0),
                                        (c = (r = t).el),
                                        null == o
                                            ? !l && et(r, i, !1)
                                            : null != r.ns
                                            ? c.setAttribute(i, o)
                                            : "class" === i
                                            ? (c.className = o)
                                            : "id" === i || "boolean" == typeof o || s
                                            ? (c[i] = o)
                                            : "." === i[0]
                                            ? (c[i.substr(1)] = o)
                                            : c.setAttribute(i, o))));
                    }
                    for (var d in h) !(d in u) && !x(d) && et(t, d, D(t.tag, d) || m(d));
                }
            }
            function rt(t, e, n, i) {
                return t.type === r && ((e = t.data), (n = t.key), (i = t.opts), (t = t.view)), new yt(t, e, n, i);
            }
            function it(t) {
                for (var e = 0; e < t.body.length; e++) {
                    var o = t.body[e],
                        s = o.type;
                    if (s <= n) Y(t.el, ot(o));
                    else if (s === r) {
                        (s = (a = rt(o.view, o.data, o.key, o.opts)._redraw(t, e, !1)).node.type), Y(t.el, ot(a.node));
                    } else if (s === i) {
                        var a;
                        (a = o.vm)._redraw(t, e), (s = a.node.type), Y(t.el, a.node.el);
                    }
                }
            }
            function ot(r, i) {
                var o, s, l, u;
                return (
                    null == r.el &&
                        (r.type === t
                            ? ((r.el = i || ((l = r.tag), null != (u = r.ns) ? F.createElementNS(u, l) : F.createElement(l))),
                              null != r.attrs && nt(r, a, !0),
                              (r.flags & j) === j && r.body.body(r),
                              c(r.body) ? it(r) : null != r.body && "" !== r.body && (r.el.textContent = r.body))
                            : r.type === e
                            ? (r.el = i || ((s = r.body), F.createTextNode(s)))
                            : r.type === n && (r.el = i || ((o = r.body), F.createComment(o)))),
                    (r.el._node = r),
                    r.el
                );
            }
            window.lisMove = ct;
            var st = 1,
                at = 2;
            function lt(t, e, n, r, i, o, s, a) {
                return function (l, c, u, h, d, f) {
                    var p, v;
                    if (null != h[r]) {
                        if (null == (p = h[r]._node)) return void (h[r] = t(h[r]));
                        if (p.parent !== l) return (v = t(h[r])), null != p.vm ? p.vm.unmount(!0) : z(c, h[r]), void (h[r] = v);
                    }
                    if (h[i] == d) return at;
                    if (null == h[i].el) n(c, ot(h[i]), h[r]), (h[i] = e(h[i], u));
                    else if (h[i].el === h[r]) (h[i] = e(h[i], u)), (h[r] = t(h[r]));
                    else {
                        if (f || p !== h[s]) return f && null != h[r] ? ct(t, e, n, r, i, c, u, p, h) : st;
                        (v = h[r]), (h[r] = t(v)), a(c, v, h[o]), (h[o] = v);
                    }
                };
            }
            function ct(t, e, n, r, i, o, s, a, l) {
                if (a._lis) n(o, l[i].el, l[r]), (l[i] = e(l[i], s));
                else {
                    var c = (function (t, e) {
                        var n,
                            r = 0,
                            i = e.length - 1;
                        if (i <= 2147483647)
                            for (; r <= i; ) {
                                if (e[(n = (r + i) >> 1)] === t) return n;
                                e[n] < t ? (r = n + 1) : (i = n - 1);
                            }
                        else
                            for (; r <= i; ) {
                                if (e[(n = Math.floor((r + i) / 2))] === t) return n;
                                e[n] < t ? (r = n + 1) : (i = n - 1);
                            }
                        return r == e.length ? null : r;
                    })(a.idx, l.tombs);
                    a._lis = !0;
                    var u = t(l[r]);
                    n(o, l[r], null != c ? s[l.tombs[c]].el : c), null == c ? l.tombs.push(a.idx) : l.tombs.splice(c, 0, a.idx), (l[r] = u);
                }
            }
            var ut = lt(
                    B,
                    function (t, e) {
                        return e[t.idx + 1];
                    },
                    Y,
                    "lftSib",
                    "lftNode",
                    "rgtSib",
                    "rgtNode",
                    U
                ),
                ht = lt(
                    function (t) {
                        return t.previousSibling;
                    },
                    function (t, e) {
                        return e[t.idx - 1];
                    },
                    U,
                    "rgtSib",
                    "rgtNode",
                    "lftSib",
                    "lftNode",
                    Y
                );
            function dt(t, e, n, r) {
                for (var i = Array.prototype.slice.call(e.childNodes), o = [], s = 0; s < i.length; s++) {
                    var a = i[s]._node;
                    a.parent === t && o.push(a.idx);
                }
                for (
                    var l = (function (t) {
                            var e,
                                n,
                                r = t.slice(),
                                i = [];
                            i.push(0);
                            for (var o = 0, s = t.length; o < s; ++o) {
                                var a = i[i.length - 1];
                                if (t[a] < t[o]) (r[o] = a), i.push(o);
                                else {
                                    for (e = 0, n = i.length - 1; e < n; ) {
                                        var l = ((e + n) / 2) | 0;
                                        t[i[l]] < t[o] ? (e = l + 1) : (n = l);
                                    }
                                    t[o] < t[i[e]] && (e > 0 && (r[o] = i[e - 1]), (i[e] = o));
                                }
                            }
                            for (n = i[(e = i.length) - 1]; e-- > 0; ) (i[e] = n), (n = r[n]);
                            return i;
                        })(o).map(function (t) {
                            return o[t];
                        }),
                        c = 0;
                    c < l.length;
                    c++
                )
                    n[l[c]]._lis = !0;
                for (r.tombs = l; ; ) {
                    if (ut(t, e, n, r, null, !0) === at) break;
                }
            }
            function ft(t) {
                return t.el._node.parent !== t.parent;
            }
            function pt(t, e, n) {
                return e[n];
            }
            function vt(t, e, n) {
                for (; n < e.length; n++) {
                    var o = e[n];
                    if (null != o.vm) {
                        if ((t.type === r && o.vm.view === t.view && o.vm.key === t.key) || (t.type === i && o.vm === t.vm)) return o;
                    } else if (!ft(o) && t.tag === o.tag && t.type === o.type && t.key === o.key && (t.flags & ~P) == (o.flags & ~P)) return o;
                }
                return null;
            }
            function gt(t, e, n) {
                return e[e._keys[t.key]];
            }
            function _t(o, s) {
                V(s.hooks, "willRecycle", s, o);
                var l = (o.el = s.el),
                    u = s.body,
                    h = o.body;
                if (((l._node = o), o.type !== e || h === u)) {
                    (null == o.attrs && null == s.attrs) || nt(o, s, !1);
                    var d = c(u),
                        f = c(h),
                        p = (o.flags & j) === j;
                    d
                        ? f || p
                            ? (function (e, o) {
                                  var s = e.body,
                                      l = s.length,
                                      c = o.body,
                                      u = c.length,
                                      h = (e.flags & j) === j,
                                      d = (e.flags & I) === I,
                                      f = (e.flags & T) === T,
                                      p = !d && e.type === t,
                                      v = !0,
                                      g = f ? gt : d || h ? pt : vt;
                                  if (f) {
                                      for (var _ = {}, y = 0; y < c.length; y++) _[c[y].key] = y;
                                      c._keys = _;
                                  }
                                  if (p && 0 === l) return Z(o), void (h && (e.body = []));
                                  var m,
                                      x,
                                      b = 0,
                                      D = !1,
                                      C = 0;
                                  if (h)
                                      var k = { key: null },
                                          M = Array(l);
                                  for (var y = 0; y < l; y++) {
                                      if (h) {
                                          var S = !1,
                                              E = null;
                                          v && (f && (k.key = s.key(y)), (m = g(k, c, C))),
                                              null != m ? ((x = m.idx), !0 === (E = s.diff(y, m)) ? (((O = m).parent = e), (O.idx = y), (O._lis = !1)) : (S = !0)) : (S = !0),
                                              S && (L((O = s.tpl(y)), e, y), (O._diff = null != E ? E : s.diff(y)), null != m && _t(O, m)),
                                              (M[y] = O);
                                      } else {
                                          var O = s[y],
                                              P = O.type;
                                          if (P <= n) (m = v && g(O, c, C)) && (_t(O, m), (x = m.idx));
                                          else if (P === r) {
                                              if ((m = v && g(O, c, C))) {
                                                  x = m.idx;
                                                  var A = m.vm._update(O.data, e, y);
                                              } else var A = rt(O.view, O.data, O.key, O.opts)._redraw(e, y, !1);
                                              P = A.node.type;
                                          } else if (P === i) {
                                              var H = w(O.vm),
                                                  A = O.vm._update(O.data, e, y, H);
                                              P = A.node.type;
                                          }
                                      }
                                      if (!f && null != m && (x === C ? ++C === u && l > u && ((m = null), (v = !1)) : (D = !0), u > 100 && D && ++b % 10 == 0)) for (; C < u && ft(c[C]); ) C++;
                                  }
                                  h && (e.body = M);
                                  p &&
                                      (function (t, e) {
                                          var n = e.body,
                                              r = t.el,
                                              i = t.body,
                                              o = { lftNode: i[0], rgtNode: i[i.length - 1], lftSib: (n[0] || a).el, rgtSib: (n[n.length - 1] || a).el };
                                          t: for (;;) {
                                              for (;;) {
                                                  var s = ut(t, r, i, o, null, !1);
                                                  if (s === st) break;
                                                  if (s === at) break t;
                                              }
                                              for (;;) {
                                                  var l = ht(t, r, i, o, o.lftNode, !1);
                                                  if (l === st) break;
                                                  if (l === at) break t;
                                              }
                                              dt(t, r, i, o);
                                              break;
                                          }
                                      })(e, o);
                              })(o, s)
                            : h !== u && (null != h ? (l.textContent = h) : Z(s))
                        : f
                        ? (Z(s), it(o))
                        : h !== u && (l.firstChild ? (l.firstChild.nodeValue = h) : (l.textContent = h)),
                        V(s.hooks, "didRecycle", s, o);
                } else l.nodeValue = h;
            }
            function yt(t, e, n, r) {
                var i = this;
                (i.view = t), (i.data = e), (i.key = n), r && ((i.opts = r), i.config(r));
                var o = h(t) ? t : t.call(i, i, e, n, r);
                f(o) ? (i.render = o) : ((i.render = o.render), i.config(o)),
                    (i._redrawAsync = y(function (t) {
                        return i.redraw(!0);
                    })),
                    (i._updateAsync = y(function (t) {
                        return i.update(t, !0);
                    })),
                    i.init && i.init.call(i, i, i.data, i.key, r);
            }
            var mt = (yt.prototype = {
                constructor: yt,
                _diff: null,
                init: null,
                view: null,
                key: null,
                data: null,
                state: null,
                api: null,
                opts: null,
                node: null,
                hooks: null,
                onevent: l,
                refs: null,
                render: null,
                mount: function (t, e) {
                    var n = this;
                    e
                        ? (Z({ el: t, flags: 0 }), n._redraw(null, null, !1), t.nodeName.toLowerCase() !== n.node.tag ? (ot(n.node), Y(t.parentNode, n.node.el, t), t.parentNode.removeChild(t)) : Y(t.parentNode, ot(n.node, t), t))
                        : (n._redraw(null, null), t && Y(t, n.node.el));
                    t && $(n);
                    return n;
                },
                unmount: function (t) {
                    var e = this.node;
                    z(e.el.parentNode, e.el), t || $(this);
                },
                config: function (t) {
                    var e = this;
                    t.init && (e.init = t.init), t.diff && (e.diff = t.diff), t.onevent && (e.onevent = t.onevent), t.hooks && (e.hooks = p(e.hooks || {}, t.hooks)), t.onemit && (e.onemit = p(e.onemit || {}, t.onemit));
                },
                parent: function () {
                    return C(this.node.parent);
                },
                root: function () {
                    for (var t = this.node; t.parent; ) t = t.parent;
                    return t.vm;
                },
                redraw: function (t) {
                    return t ? this._redraw(null, null, w(this)) : this._redrawAsync(), this;
                },
                update: function (t, e) {
                    return e ? this._update(t, null, null, w(this)) : this._updateAsync(t), this;
                },
                _update: function (t, e, n, r) {
                    var i = this;
                    null != t && i.data !== t && (V(i.hooks, "willUpdate", i, t), (i.data = t));
                    return i._redraw(e, n, r);
                },
                _redraw: function (t, e, n) {
                    var r,
                        i,
                        o = null == t,
                        s = this,
                        a = s.node && s.node.el && s.node.el.parentNode,
                        l = s.node;
                    if (null != s.diff && ((r = s._diff), (s._diff = i = s.diff(s, s.data)), null != l)) {
                        var u = c(r) ? _ : g,
                            h = r === i || u(r, i);
                        if (h) return xt(s, l, t, e);
                    }
                    a && V(s.hooks, "willRedraw", s, s.data);
                    var d = s.render.call(s, s, s.data, r, i);
                    if (d === l) return xt(s, l, t, e);
                    (s.refs = null), null != s.key && d.key !== s.key && (d.key = s.key);
                    (s.node = d), t ? (L(d, t, e, s), (t.body[e] = d)) : l && l.parent ? (L(d, l.parent, l.idx, s), (l.parent.body[l.idx] = d)) : L(d, null, null, s);
                    if (!1 !== n)
                        if (l)
                            if (l.tag !== d.tag || l.key !== d.key) {
                                l.vm = d.vm = null;
                                var f = l.el.parentNode,
                                    p = B(l.el);
                                z(f, l.el), Y(f, ot(d), p), (l.el = d.el), (d.vm = s);
                            } else _t(d, l);
                        else ot(d);
                    a && V(s.hooks, "didRedraw", s, s.data), o && a && $(s);
                    return s;
                },
                _redrawAsync: null,
                _updateAsync: null,
            });
            function xt(t, e, n, r) {
                return null != n && ((n.body[r] = e), (e.idx = r), (e.parent = n), (e._lis = !1)), t;
            }
            function bt(t, e, n, r) {
                var i, o;
                return null == n ? (h(e) ? (i = e) : (o = e)) : ((i = e), (o = n)), A(t, i, o, r);
            }
            var wt = "http://www.w3.org/2000/svg";
            function Dt(t, e, n, r) {
                (this.view = t), (this.data = e), (this.key = n), (this.opts = r);
            }
            function Ct(t) {
                this.vm = t;
            }
            (Dt.prototype = { constructor: Dt, type: r, view: null, data: null, key: null, opts: null }), (Ct.prototype = { constructor: Ct, type: i, vm: null });
            var kt = {
                config: function (t) {
                    var e;
                    (Q = t.onevent || Q), t.onemit && ((e = t.onemit), p(q, e));
                },
                ViewModel: yt,
                VNode: k,
                createView: rt,
                defineElement: bt,
                defineSvgElement: function (t, e, n, r) {
                    var i = bt(t, e, n, r);
                    return (i.ns = wt), i;
                },
                defineText: S,
                defineComment: function (t) {
                    var e = new k();
                    return (e.type = n), (e.body = t), e;
                },
                defineView: function (t, e, n, r) {
                    return new Dt(t, e, n, r);
                },
                injectView: function (t) {
                    return new Ct(t);
                },
                injectElement: function (e) {
                    var n = new k();
                    return (n.type = t), (n.el = n.key = e), n;
                },
                lazyList: function (t, e) {
                    var n = t.length,
                        r = {
                            items: t,
                            length: n,
                            key: function (n) {
                                return e.key(t[n], n);
                            },
                            diff: function (n, r) {
                                var i = e.diff(t[n], n);
                                if (null == r) return i;
                                var o = r._diff;
                                return (i === o || c(o) ? _(i, o) : g(i, o)) || i;
                            },
                            tpl: function (n) {
                                return e.tpl(t[n], n);
                            },
                            map: function (t) {
                                return (e.tpl = t), r;
                            },
                            body: function (t) {
                                for (var e = Array(n), i = 0; i < n; i++) {
                                    var o = r.tpl(i);
                                    (o._diff = r.diff(i)), (e[i] = o), L(o, t, i);
                                }
                                t.body = e;
                            },
                        };
                    return r;
                },
                FIXED_BODY: I,
                DEEP_REMOVE: P,
                KEYED_LIST: T,
                LAZY_LIST: j,
            };
            function Mt(t) {
                var e,
                    n,
                    r = arguments,
                    i = r.length;
                if (i > 1) {
                    var o = 1;
                    h(r[1]) && ((n = r[1]), (o = 2)), (e = i === o + 1 && (d(r[o]) || c(r[o]) || (n && (n._flags & j) === j)) ? r[o] : v(r, o));
                }
                return A(t, n, e);
            }
            return (
                (M.patch = function (t, e) {
                    !(function (t, e, n) {
                        if (null != e.type) {
                            if (null != t.vm) return;
                            L(e, t.parent, t.idx, null), (t.parent.body[t.idx] = e), _t(e, t), n && b(e), $(C(e));
                        } else {
                            var r = Object.create(t);
                            r.attrs = p({}, t.attrs);
                            var i = p(t.attrs, e);
                            if (null != t._class) {
                                var o = i.class;
                                i.class = null != o && "" !== o ? t._class + " " + o : t._class;
                            }
                            nt(t, r), n && b(t);
                        }
                    })(this, t, e);
                }),
                (mt.emit = function (t) {
                    var e = this,
                        n = e,
                        r = v(arguments, 1).concat(n, n.data);
                    do {
                        var i = e.onemit,
                            o = i ? i[t] : null;
                        if (o) {
                            o.apply(e, r);
                            break;
                        }
                    } while ((e = e.parent()));
                    q[t] && q[t].apply(e, r);
                }),
                (mt.onemit = null),
                (mt.body = function () {
                    return (function t(e, n) {
                        var r = e.body;
                        if (c(r))
                            for (var i = 0; i < r.length; i++) {
                                var o = r[i];
                                null != o.vm ? n.push(o.vm) : t(o, n);
                            }
                        return n;
                    })(this.node, []);
                }),
                (kt.defineElementSpread = Mt),
                (kt.defineSvgElementSpread = function () {
                    var t = Mt.apply(null, arguments);
                    return (t.ns = wt), t;
                }),
                kt
            );
        }),
            (t.exports = r());
    },
    function (t, e) {
        if (Element && !Element.prototype.matches) {
            var n = Element.prototype;
            n.matches = n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector;
        }
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(4),
            i = n(5),
            o = (function () {
                function t(t, e) {
                    (this._uid = r.uid()), (this.config = e || {});
                }
                return (
                    (t.prototype.mount = function (t, e) {
                        (this._view = e), t && e.mount && ((this._container = i.toNode(t)), e.mount(this._container));
                    }),
                    (t.prototype.getRootView = function () {
                        return this._view;
                    }),
                    (t.prototype.paint = function () {
                        this._view && (this._view.node || this._container || !this._view.mount) && ((this._doNotRepaint = !1), this._view.redraw());
                    }),
                    t
                );
            })();
        e.View = o;
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = (function () {
            function t(t, e, n) {
                (this._name = t), (this._version = e), (this._view = n);
            }
            return (
                (t.prototype.pdf = function (t) {
                    this._rawExport(t, "pdf", this._view);
                }),
                (t.prototype.png = function (t) {
                    this._rawExport(t, "png", this._view);
                }),
                (t.prototype._rawExport = function (t, e, n) {
                    ((t = t || {}).url = t.url || "https://export.dhtmlx.ru/" + this._name + "/" + e), (t.url += "/" + this._version);
                    var r = n.getRootView().node.el.innerHTML,
                        i = document.createElement("form");
                    (i.style.cssText = "position:absolute; left:-1000px; visibility:hidden;"),
                        i.setAttribute("method", "POST"),
                        i.setAttribute("action", t.url),
                        (i.innerHTML = "<input type='hidden' name='raw'><input type='hidden' name='config'>"),
                        (i.childNodes[0].value = r),
                        (i.childNodes[1].value = JSON.stringify(t)),
                        document.body.appendChild(i),
                        i.submit(),
                        setTimeout(function () {
                            i.parentNode.removeChild(i);
                        }, 100);
                }),
                t
            );
        })();
        e.Exporter = r;
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(11),
            i = ["#FF9800", "#607D8B", "#00C7B5", "#03A9F4", "#9575CD", "#F06292"];
        e.placeOrgonogram = function (t, e) {
            var n = t.getRoots();
            if (1 === n.length) {
                var o = t.getItem(n[0]);
                !(function t(e, n, r, i, o) {
                    var s = n.$kids,
                        a = "vertical" === n.dir,
                        l = a ? r.margin.itemX / 2 : 0,
                        c = 0;
                    if (!1 !== n.open && s) {
                        for (var u = 0, h = 0; h < s.length; h++) {
                            var d = e.getItem(s[h][1]);
                            if (!d.hidden) {
                                var f = t(e, d, r, i + l, l);
                                a ? (c = Math.max(c, f)) : (c += f), u++;
                            }
                        }
                        u && !a && (c += (u - 1) * r.margin.itemX), (n.$count = u);
                    }
                    if (((c = Math.max(n.width, c)), a)) n.x = i;
                    else {
                        var p = r.gridStep || 1,
                            v = (c - n.width) / 2 + i;
                        n.x = Math.ceil(v / p) * p;
                    }
                    return (n.y = 0), (n.$width = c), c + o;
                })(t, o, e, 0, 0),
                    (function t(e, n, o, s, a, l) {
                        var c = n.$kids,
                            u = "vertical" === n.dir,
                            h = 0;
                        if (((n.x += o), (n.y += s), a.gridStep && (n.y = Math.ceil(n.y / a.gridStep) * a.gridStep), (s += n.height + a.margin.itemY), !1 !== n.open && c))
                            for (var d = void 0, f = 0; f < c.length; f++)
                                if (!(d = e.getItem(c[f][1])).hidden) {
                                    var p = t(e, d, o, s, a, l + 1);
                                    u ? ((s += p + a.margin.itemY), (h += p + a.margin.itemY)) : ((h = Math.max(h, p + a.margin.itemY)), (o += d.$width + a.margin.itemX)), r.directLinkPath(e.getItem(c[f][0]), n, d, a);
                                }
                        if (c) {
                            var v = e.getItem(c[0][1]).color;
                            n.$expandColor = v || i[(l + 1) % i.length];
                        }
                        return (n.color = n.color || i[l % i.length]), n.height + h;
                    })(t, o, 0, 0, e, 0);
            }
        };
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(3),
            i = n(6),
            o = (function () {
                function t(t, e, n) {
                    var o = this;
                    (this.events = n || new r.EventSystem()),
                        (this._data = e),
                        this._data.events.on(i.DataEvents.removeAll, function () {
                            o._selected = null;
                        }),
                        this._data.events.on(i.DataEvents.change, function () {
                            if (o._selected) {
                                var t = o._data.getNearId(o._selected);
                                if (t !== o._selected) {
                                    var e = o._data.getItem(o._selected);
                                    e && (e.$selected = !1), (o._selected = null), t && o.add(t);
                                }
                            }
                        });
                }
                return (
                    (t.prototype.getId = function () {
                        return this._selected;
                    }),
                    (t.prototype.getItem = function () {
                        return this._selected ? this._data.getItem(this._selected) : null;
                    }),
                    (t.prototype.remove = function (t) {
                        return (
                            !(t = t || this._selected) ||
                            (!!this.events.fire(i.SelectionEvents.beforeUnSelect, [t]) && (this._data.update(t, { $selected: !1 }, !0), (this._selected = null), this.events.fire(i.SelectionEvents.afterUnSelect, [t]), !0))
                        );
                    }),
                    (t.prototype.add = function (t) {
                        this._selected !== t &&
                            (this.remove(), this.events.fire(i.SelectionEvents.beforeSelect, [t]) && ((this._selected = t), this._data.update(t, { $selected: !0 }, !0), this.events.fire(i.SelectionEvents.afterSelect, [t])));
                    }),
                    t
                );
            })();
        e.Selection = o;
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(27),
            i = n(10),
            o = n(28),
            s = n(29),
            a = n(30),
            l = n(31);
        for (var c in ((e.shapes = { line: r.Line, dash: r.Line, card: i.DiagramCard, "img-card": o.DiagramImgCard, "svg-card": s.DiagramSvgCard, text: l.TextShape }), a.renders)) e.shapes[c] = a.FlowShape;
        e.shapesFactory = function (t) {
            var n = e.shapes[t.type];
            return n || (n = e.shapes.card), new n(t);
        };
    },
    function (t, e, n) {
        "use strict";
        var r,
            i =
                (this && this.__extends) ||
                ((r =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                            t.__proto__ = e;
                        }) ||
                    function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                    }),
                function (t, e) {
                    function n() {
                        this.constructor = t;
                    }
                    r(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                }),
            o =
                (this && this.__assign) ||
                Object.assign ||
                function (t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t;
                };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var s = n(0),
            a = (function (t) {
                function e(e) {
                    return t.call(this, e) || this;
                }
                return (
                    i(e, t),
                    (e.prototype.isConnector = function () {
                        return !0;
                    }),
                    (e.prototype.getMetaInfo = function () {
                        return [{ id: "strokeProps", type: "stroke", label: "Stroke", connector: !0 }];
                    }),
                    (e.prototype.setDefaults = function (t) {
                        return (t.connectType = t.connectType || "elbow"), (t.stroke = t.stroke || "#CCC"), (t.strokeWidth = t.strokeWidth || 2), (t.cornersRadius = t.cornersRadius || 0), t;
                    }),
                    (e.prototype.toSVG = function () {
                        var t = this.config.$selected;
                        return s.sv(
                            "g",
                            { dhx_id: this.config.id || "", _key: this.config.id, class: "dhx_diagram_connector " + this.getCss() },
                            [
                                s.sv("path", {
                                    d: this._getPoints(),
                                    fill: "none",
                                    class: "dhx_diagram_line " + (t ? "dhx_diagram_line--selected" : ""),
                                    "stroke-dasharray": this._getType(),
                                    "stroke-linejoin": "round",
                                    stroke: this.config.stroke,
                                    "stroke-width": this.config.strokeWidth,
                                }),
                            ].concat(this._getArrowLine())
                        );
                    }),
                    (e.prototype.getBox = function () {
                        var t = o({}, this.config),
                            e = t.points.reduce(
                                function (t, e) {
                                    return (t.x = Math.max(t.x, e.x)), (t.y = Math.max(t.y, e.y)), t;
                                },
                                { x: 0, y: 0 }
                            ),
                            n = e.x - t.x,
                            r = e.y - t.y,
                            i = t.x,
                            s = i + n,
                            a = t.y;
                        return { left: i, right: s, top: a, bottom: a + r };
                    }),
                    (e.prototype._getType = function () {
                        if ((this.config.strokeType && (this.config.type = this.config.strokeType), this.config.type))
                            switch (this.config.type) {
                                case "line":
                                    return "";
                                case "dash":
                                    return "5, 5";
                                default:
                                    return "";
                            }
                    }),
                    (e.prototype._getPoints = function () {
                        return this._getStringPoints();
                    }),
                    (e.prototype._getStringPoints = function () {
                        return (
                            (this.config.width = Math.abs(this.config.points[this.config.points.length - 1].x - this.config.points[0].x)),
                            (this.config.height = Math.abs(this.config.points[this.config.points.length - 1].y - this.config.points[0].y)),
                            (this.config.x = this.config.points[0].x),
                            (this.config.y = this.config.points[0].y),
                            "M " +
                                this.config.x +
                                "," +
                                this.config.y +
                                this.config.points
                                    .map(function (t) {
                                        return t.x1 && t.y1 ? "Q" + t.x1 + "," + t.y1 + " " + t.x + "," + t.y : "L " + t.x + "," + t.y;
                                    })
                                    .join(" ")
                        );
                    }),
                    (e.prototype._getArrowLine = function () {
                        var t = this.config.points,
                            e = this.config.backArrow,
                            n = this.config.forwardArrow;
                        if (e || n) return [e ? this._arrow(t[1], t[0]) : null, n ? this._arrow(t[t.length - 2], t[t.length - 1]) : null];
                    }),
                    (e.prototype._arrow = function (t, e) {
                        var n = t.x !== e.x,
                            r = (n ? t.x < e.x : t.y < e.y) ? 1 : -1,
                            i = e.x - (n ? r : 0),
                            o = e.y - (n ? 0 : r),
                            a = e.x - (n ? 7 * r : 5 * r),
                            l = e.y - (n ? 5 : 7 * r),
                            c = e.x + (n ? -7 * r : 5 * r),
                            u = e.y - (n ? -5 : 7 * r);
                        return s.sv("path", { d: "M" + a + "," + l + " L" + i + "," + o + " L" + c + "," + u + " Z", class: "dhx_diagram_arrow", "shape-rendering": "auto", stroke: this.config.stroke, fill: this.config.stroke });
                    }),
                    e
                );
            })(n(8).BaseShape);
        e.Line = a;
    },
    function (t, e, n) {
        "use strict";
        var r,
            i =
                (this && this.__extends) ||
                ((r =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                            t.__proto__ = e;
                        }) ||
                    function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                    }),
                function (t, e) {
                    function n() {
                        this.constructor = t;
                    }
                    r(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(0),
            s = (function (t) {
                function e() {
                    return (null !== t && t.apply(this, arguments)) || this;
                }
                return (
                    i(e, t),
                    (e.prototype.getMetaInfo = function () {
                        return [
                            { id: "title", label: "Title", type: "text" },
                            { id: "text", label: "Text", type: "text" },
                            { id: "img", label: "Image", type: "image" },
                        ];
                    }),
                    (e.prototype.setDefaults = function (t) {
                        return (t.width = t.width || 210), (t.height = t.height || 90), t;
                    }),
                    (e.prototype.getCss = function () {
                        return "dhx_diagram_image " + t.prototype.getCss.call(this);
                    }),
                    (e.prototype.text = function () {
                        var t = this.config;
                        return [
                            o.el("div", { class: "dhx_content_img", style: "background-image:url(" + (t.img || "") + ");background-color:" + t.color + ";" }),
                            o.el("div", { class: "dhx_content_title" }, [t.title || null]),
                            o.el("div", { class: "dhx_content_text " + (t.title ? "" : "dhx_content_text-alone") }, [t.text || null]),
                        ];
                    }),
                    e
                );
            })(n(10).DiagramCard);
        e.DiagramImgCard = s;
    },
    function (t, e, n) {
        "use strict";
        var r,
            i =
                (this && this.__extends) ||
                ((r =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                            t.__proto__ = e;
                        }) ||
                    function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                    }),
                function (t, e) {
                    function n() {
                        this.constructor = t;
                    }
                    r(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(0),
            s = n(10),
            a = n(12),
            l = (function (t) {
                function e() {
                    return (null !== t && t.apply(this, arguments)) || this;
                }
                return (
                    i(e, t),
                    (e.prototype.toSVG = function () {
                        var t = this.config,
                            e = this.getCenter(),
                            n = t.$selected ? t.color : "#E4E4E4",
                            r = this.getCoords(t);
                        return o.sv("g", { transform: "translate(" + r.x + "," + r.y + ") rotate(" + (t.angle || 0) + "," + e.x + "," + e.y + ")", class: this.getCss(), dhx_id: t.id }, [
                            o.sv("rect", { class: "dhx_item_shape", id: t.id, height: t.height, width: t.width, rx: 1, ry: 1, stroke: n, "stroke-width": 1 }),
                            o.sv("text", { y: t.height / 2, dy: "-5", x: t.width / 2, "text-anchor": "middle" }, [
                                t.title ? o.sv("tspan", { class: "dhx_content_title" }, [t.title || ""]) : null,
                                o.sv("tspan", { class: "dhx_content_text", x: t.width / 2, dy: t.title ? "1.5em" : ".5em" }, [t.text || ""]),
                            ]),
                            a.getHeaderTpl(t),
                            a.getCircleTpl(t),
                        ]);
                    }),
                    (e.prototype.getMetaInfo = function () {
                        return [
                            { id: "title", label: "Title", type: "text" },
                            { id: "text", label: "Text", type: "text" },
                        ];
                    }),
                    (e.prototype.getCss = function () {
                        return "dhx_diagram_svg-card " + (t.prototype.getCss.call(this) || "");
                    }),
                    e
                );
            })(s.DiagramCard);
        e.DiagramSvgCard = l;
    },
    function (t, e, n) {
        "use strict";
        var r,
            i =
                (this && this.__extends) ||
                ((r =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                            t.__proto__ = e;
                        }) ||
                    function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                    }),
                function (t, e) {
                    function n() {
                        this.constructor = t;
                    }
                    r(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(0),
            s = (function (t) {
                function n() {
                    return (null !== t && t.apply(this, arguments)) || this;
                }
                return (
                    i(n, t),
                    (n.prototype.getMetaInfo = function () {
                        return [
                            { id: "fill", type: "color", label: "Fill", hint: "Top line", value: "#FFDDFF" },
                            { id: "text", label: "Content", type: "text" },
                            { id: "strokeProps", type: "stroke", label: "Stroke" },
                            { id: "textProps", type: "textProps", label: "Text" },
                        ];
                    }),
                    (n.prototype.toSVG = function () {
                        this.config.strokeType && ("dash" === this.config.strokeType && (this.config.strokeDash = "5,5"), "none" === this.config.strokeType && (this.config.stroke = "none"));
                        var t = this.config,
                            e = this.getCenter(),
                            n = this.getCoords(t);
                        return o.sv("g", { _key: t.id, transform: "translate(" + n.x + "," + n.y + ") rotate(" + (t.angle || 0) + "," + e.x + "," + e.y + ")", class: "dhx_diagram_flow_item " + this.getCss(), dhx_id: t.id }, [
                            this._shapeLine(),
                            this._getExtraLines(),
                            this._getText(),
                        ]);
                    }),
                    (n.prototype.setDefaults = function (t) {
                        var e = ["circle", "or", "junction"].indexOf(t.type) >= 0;
                        return (
                            (t.width = t.width || (e ? 90 : 140)),
                            (t.height = t.height || 90),
                            (t.stroke = t.stroke || "#DEDEDE"),
                            (t.extraLinesStroke = t.extraLinesStroke || "#FFF"),
                            (t.fill = t.fill || "#DEDEDE"),
                            (t.strokeWidth = t.strokeWidth || 1),
                            (t.fontColor = t.fontColor || "#4C4C4C"),
                            (t.fontSize = t.fontSize || 14),
                            (t.textAlign = t.textAlign || "center"),
                            (t.lineHeight = t.lineHeight || 14),
                            (t.fontStyle = t.fontStyle || "normal"),
                            (t.textVerticalAlign = t.textVerticalAlign || "center"),
                            t
                        );
                    }),
                    (n.prototype._shapeLine = function () {
                        return o.sv("path", {
                            d: this._getPoints(),
                            class: "dhx_diagram_flow_shape dhx_item_shape ",
                            stroke: this.config.stroke,
                            fill: this.config.fill,
                            "stroke-width": this.config.strokeWidth,
                            "stroke-dasharray": this.config.strokeDash || "",
                        });
                    }),
                    (n.prototype._getPoints = function () {
                        return (0, e.renders[this.config.type])(this.config.width, this.config.height, Math.round(this.config.width / 12));
                    }),
                    (n.prototype._getExtraLines = function () {
                        if (e.extraLines[this.config.type]) return e.extraLines[this.config.type](this.config.width, this.config.height, Math.round(this.config.width / 12), this.config);
                    }),
                    (n.prototype._getText = function () {
                        var t = this.config,
                            e = t.textVerticalAlign;
                        if (t.text) {
                            var n = t.text.split(/\r?\n/).filter(function (t) {
                                    return t.trim();
                                }),
                                r = 1 === n.length ? 0.35 : 0.6,
                                i = { left: 10, center: t.width / 2, right: t.width - 10 },
                                s = n.map(function (e) {
                                    var n = o.sv("tspan", { class: "dhx_content_text", x: i[t.textAlign], dy: r + "em" }, e.trim());
                                    return (r = (t.lineHeight / 14) * 1.2), n;
                                }),
                                a = { top: 10, center: t.height / (n.length + 1), bottom: t.height - 17 * n.length };
                            return o.sv(
                                "text",
                                { y: a[e], x: t.width / 2, "text-anchor": { left: "start", center: "middle", right: "end" }[t.textAlign], "font-size": t.fontSize, "font-style": t.fontStyle, "font-weight": t.fontWeight, fill: t.fontColor },
                                s
                            );
                        }
                    }),
                    n
                );
            })(n(8).BaseShape);
        function a(t, e) {
            return "\n\tM " + t / 2 + " 0 A " + e / 2 + "," + e / 2 + " 0 1 0 " + t / 2 + "," + e + "\n\tA " + e / 2 + "," + e / 2 + " 0 1 0 " + t / 2 + ",0 Z";
        }
        function l(t, e) {
            return "\n\tM 0,0\n\t" + t + ",0\n\t" + t / 2 + "," + e + " Z";
        }
        function c(t, e) {
            return "\n\tM " + e / 2 + " 0 A " + e / 2 + "," + e / 2 + " 0 1 0 " + e / 2 + "," + e + "\n\tH " + (t - e / 2) + " A " + e / 2 + "," + e / 2 + " 0 1 0 " + (t - e / 2) + ",0 H " + e / 2 + " Z";
        }
        function u(t, e) {
            return "M 0,0 L 0," + e + " L " + t + "," + e + " L " + t + ",0 Z";
        }
        (e.FlowShape = s),
            (e.extraLines = {
                database: function (t, e, n, r) {
                    return o.sv("path", { d: "M 0 " + n + " A " + t / 2 + "," + n + " 0 1 0 " + t + "," + n, fill: "none", stroke: r.extraLinesStroke, class: "dhx_diagram_extra_lines" });
                },
                internal: function (t, e, n, r) {
                    return o.sv("path", { d: "M " + n + " 0 V " + e + " M 0 " + n + " H " + t, stroke: r.extraLinesStroke, class: "dhx_diagram_extra_lines" });
                },
                offline: function (t, e, n, r) {
                    var i = e / Math.sqrt(Math.pow(t / 2, 2) + Math.pow(e, 2)),
                        s = Math.sqrt(Math.pow(n / i, 2) - Math.pow(n, 2));
                    return o.sv("path", { d: "M " + (t / 2 - s) + " " + (e - n) + " h " + 2 * s, stroke: r.extraLinesStroke, class: "dhx_diagram_extra_lines" });
                },
                subroutine: function (t, e, n, r) {
                    return o.sv("path", { d: "M " + n + " 0 V " + e + " M " + (t - n) + " 0 V " + e, stroke: r.extraLinesStroke, class: "dhx_diagram_extra_lines" });
                },
                or: function (t, e, n, r) {
                    return o.sv("path", {
                        d: "\n\t\t\t\tM" + (t - e) / 2 + " " + e / 2 + " " + (t - (t - e) / 2) + " " + e / 2 + "\n\t\t\t\tM" + t / 2 + " 0 " + t / 2 + " " + e,
                        stroke: r.extraLinesStroke,
                        class: "dhx_diagram_extra_lines",
                    });
                },
                junction: function (t, e, n, r) {
                    return o.sv("path", {
                        d:
                            "\n\t\t\tM " +
                            (t / 2 - (e * Math.SQRT2) / 4) +
                            " " +
                            (e / 2 - (e * Math.SQRT2) / 4) +
                            " L " +
                            (t / 2 + (e * Math.SQRT2) / 4) +
                            " " +
                            (e / 2 + (e * Math.SQRT2) / 4) +
                            "\n\t\t\tM " +
                            (t / 2 - (e * Math.SQRT2) / 4) +
                            " " +
                            (e / 2 + (e * Math.SQRT2) / 4) +
                            " L " +
                            (t / 2 + (e * Math.SQRT2) / 4) +
                            " " +
                            (e / 2 - (e * Math.SQRT2) / 4),
                        stroke: r.extraLinesStroke,
                        class: "dhx_diagram_extra_lines",
                    });
                },
                roll: function (t, e, n, r) {
                    return o.sv("path", { d: "M " + t / 2 + " " + e + " H " + t, stroke: r.stroke, "stroke-width": "2px", class: "dhx_item_shape " });
                },
            }),
            (e.renders = {
                circle: a,
                rectangle: u,
                triangle: function (t, e) {
                    return "M " + t / 2 + " 0 L" + t + " " + e + " L 0 " + e + " z";
                },
                start: c,
                end: c,
                process: u,
                output: function (t, e, n) {
                    return "\n\tM " + 2 * n + ",0\n\t" + t + ",0\n\t" + (t - 2 * n) + "," + e + "\n\t0," + e + " Z";
                },
                decision: function (t, e) {
                    return "M 0 " + e / 2 + " L " + t / 2 + " 0 L " + t + " " + e / 2 + " L " + t / 2 + " " + e + " Z";
                },
                display: function (t, e) {
                    return "\n\tM 0 " + e / 2 + " L " + t / 4 + " 0 H " + (3 * t) / 4 + "\n\tA " + t / 4 + "," + e / 2 + " 0 1 1 " + (3 * t) / 4 + "," + e + "\n\tH " + t / 4 + " Z";
                },
                document: function (t, e) {
                    return "M0 " + e + " C\n\t" + t / 6 + " " + (10 * e) / 9 + ",\n\t" + t / 3 + " " + (10 * e) / 9 + ",\n\t" + t / 2 + " " + e + " S\n\t" + (5 * t) / 6 + " " + (8 * e) / 9 + ",\n\t" + t + " " + e + "\n\tV 0 H 0 Z";
                },
                data: function (t, e, n) {
                    return "M " + n + " 0 Q\n\t" + -n + " " + e / 2 + ",\n\t" + n + " " + e + " H " + t + " Q\n\t" + (t - 2 * n) + " " + e / 2 + ",\n\t" + t + " 0 Z";
                },
                database: function (t, e, n) {
                    return "M 0 " + n + " A " + t / 2 + "," + n + " 0 1 0 " + t + "," + n + "\n\tA " + t / 2 + "," + n + " 0 1 0 0," + n + "\n\tV " + e + " H " + t + " V " + n;
                },
                internal: u,
                offline: l,
                delay: function (t, e) {
                    return "\n\tM 0 0 H " + (3 * t) / 4 + "\n\tA " + t / 4 + "," + e / 2 + " 0 1 1 " + (3 * t) / 4 + "," + e + "\n\tH 0 Z";
                },
                page: function (t, e) {
                    return "\n\tM 0,0\n\t" + t + ",0\n\t" + t + "," + e / 2 + "\n\t" + t / 2 + "," + e + "\n\t0," + e / 2 + " Z";
                },
                input: function (t, e) {
                    return "\n\tM 0," + e / 3 + "\n\t" + t + ",0\n\t" + t + "," + e + "\n\t0," + e + " Z";
                },
                operation: function (t, e) {
                    return "\n\tM 0,0\n\t" + t + ",0\n\t" + (3 * t) / 4 + "," + e + "\n\t" + t / 4 + "," + e + " Z";
                },
                punchcard: function (t, e) {
                    return "\n\tM 0," + e / 4 + "\n\t" + t / 4 + ",0\n\t" + t + ",0\n\t" + t + "," + e + "\n\t0," + e + " Z";
                },
                subroutine: u,
                comment: function (t, e) {
                    return "M " + t + " 0 H 0 V " + e + " H" + t + " V" + (e - 4) + " H4 V4 H" + t;
                },
                storage: l,
                extract: function (t, e) {
                    return "\n\tM 0," + e + "\n\t" + t + "," + e + "\n\t" + t / 2 + ",0 Z";
                },
                collate: function (t, e) {
                    return "M " + t / 2 + " " + e / 2 + " L 0 0 H " + t + " L 0 " + e + " H " + t + " Z";
                },
                or: a,
                junction: a,
                keyring: function (t, e, n) {
                    return "\n\tM " + n + " 0 A " + n + "," + e / 2 + " 0 1 0 " + n + "," + e + "\n\tH " + (t - n) + " A " + n + "," + e / 2 + " 0 1 0 " + (t - n) + ",0 H " + n + " Z";
                },
                tape: function (t, e) {
                    return (
                        "\n\tM0 " +
                        e +
                        " C\n\t" +
                        t / 6 +
                        " " +
                        (10 * e) / 9 +
                        ",\n\t" +
                        t / 3 +
                        " " +
                        (10 * e) / 9 +
                        ",\n\t" +
                        t / 2 +
                        " " +
                        e +
                        " S\n\t" +
                        (5 * t) / 6 +
                        " " +
                        (8 * e) / 9 +
                        ",\n\t" +
                        t +
                        " " +
                        e +
                        "\n\tV 0 C\n\t" +
                        (5 * t) / 6 +
                        " " +
                        -e / 9 +
                        ",\n\t" +
                        (2 * t) / 3 +
                        " " +
                        -e / 9 +
                        ",\n\t" +
                        t / 2 +
                        " 0 S\n\t" +
                        (1 * t) / 6 +
                        " " +
                        e / 9 +
                        ",\n\t0 0 Z"
                    );
                },
                preparation: function (t, e) {
                    return "M 0," + e / 2 + " L20 0 L" + (t - 20) + " 0 L" + t + " " + e / 2 + " L" + (t - 20) + " " + e + " L20 " + e;
                },
                endpoint: function (t, e) {
                    return "M0 " + e / 2 + "  L" + t / 2 + " 0 L " + t / 2 + " " + e + " z";
                },
                roll: a,
            });
    },
    function (t, e, n) {
        "use strict";
        var r,
            i =
                (this && this.__extends) ||
                ((r =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                            t.__proto__ = e;
                        }) ||
                    function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                    }),
                function (t, e) {
                    function n() {
                        this.constructor = t;
                    }
                    r(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(0),
            s = (function (t) {
                function e() {
                    return (null !== t && t.apply(this, arguments)) || this;
                }
                return (
                    i(e, t),
                    (e.prototype.toSVG = function () {
                        var t = this.config,
                            e = this.getCoords(t);
                        return o.sv("g", { _key: t.id, transform: "translate(" + e.x + "," + e.y + ") ", "text-anchor": "middle", class: "dhx_item_shape dhx_diagram_flow_item " + this.getCss(), dhx_id: t.id }, [this._getText()]);
                    }),
                    (e.prototype.getMetaInfo = function () {
                        return [
                            { id: "text", label: "Content", type: "text" },
                            { id: "textProps", type: "textProps", label: "Text", alignments: !1 },
                        ];
                    }),
                    (e.prototype.canResize = function () {
                        return !1;
                    }),
                    (e.prototype.setDefaults = function (t) {
                        return (t.width = 0), (t.height = 0), (t.fontColor = "rgba(0,0,0,0.70)"), (t.fontSize = 14), (t.textAlign = "center"), (t.lineHeight = 14), (t.fontStyle = "normal"), (t.textVerticalAlign = "center"), t;
                    }),
                    (e.prototype._getText = function () {
                        var t = this.config;
                        if (t.text) {
                            var e = t.text.split(/\r?\n/).filter(function (t) {
                                    return t.trim();
                                }),
                                n = 1 === e.length ? 0 : 0.6,
                                r = e.map(function (t) {
                                    var e = o.sv("tspan", { x: 0, dy: n + "em" }, t.trim());
                                    return (n = 1.2), e;
                                });
                            return o.sv("text", { y: t.height, x: t.width, "text-anchor": "middle", class: "dhx_item_text", "font-size": t.fontSize, "font-style": t.fontStyle, fill: t.fontColor }, r);
                        }
                    }),
                    e
                );
            })(n(8).BaseShape);
        e.TextShape = s;
    },
    function (t, e, n) {
        "use strict";
        var r,
            i =
                (this && this.__extends) ||
                ((r =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                            t.__proto__ = e;
                        }) ||
                    function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                    }),
                function (t, e) {
                    function n() {
                        this.constructor = t;
                    }
                    r(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                });
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(33),
            s = n(6),
            a = (function (t) {
                function e(e, n) {
                    var r = t.call(this, e, n) || this;
                    return (
                        (r._roots = []),
                        (r._orgMode = "org" === e.type),
                        r.events.on(s.DataEvents.change, function (t, e, n) {
                            "remove" === e && (r._removeNested(n), r._removeCore(n.$parent)), "add" === e && n.parent && r._addCore({ from: n.parent, to: n.id }, -1), r._mark_chains();
                        }),
                        r
                    );
                }
                return (
                    i(e, t),
                    (e.prototype.getNearId = function (t) {
                        var e = this._pull[t];
                        if (!e) return this._order.length ? this._order[0].id : "";
                        for (var n = e; this._orgMode && n.$parent; ) if (!1 === (n = this._pull[this._pull[n.$parent].from]).open) return n.id;
                        return e.id;
                    }),
                    (e.prototype.mapVisible = function (t) {
                        var e = this,
                            n = [];
                        if (this._orgMode) for (var r = this.getRoots(), i = 0; i < r.length; i++) this._eachBranch(this.getItem(r[i]), t, n);
                        else
                            this.map(function (r) {
                                if (!r.hidden) {
                                    if (r.$shape.isConnector()) {
                                        var i = e.getItem(r.from) || {},
                                            o = e.getItem(r.to) || {};
                                        if (i.hidden || o.hidden) return;
                                    }
                                    n.push(t(r));
                                }
                            });
                        return n;
                    }),
                    (e.prototype.getRoots = function () {
                        return this._roots;
                    }),
                    (e.prototype._removeNested = function (t) {
                        var e = t.$kids;
                        if (e) for (var n = 0; n < e.length; n++) this._orgMode && (this._removeNested(this.getItem(e[n][1])), this._removeCore(e[n][1])), this._removeCore(e[n][0]);
                    }),
                    (e.prototype._eachBranch = function (t, e, n) {
                        if (!t.hidden && (n.push(e(t)), !1 !== t.open)) {
                            var r = t.$kids;
                            if (r)
                                for (var i = 0; i < r.length; i++) {
                                    var o = this.getItem(r[i][1]);
                                    o.hidden || (n.push(e(this.getItem(r[i][0]))), this._eachBranch(o, e, n));
                                }
                        }
                    }),
                    (e.prototype._parse_data = function (e) {
                        for (var n = [], r = !1, i = 0; i < e.length; i++) {
                            var o = e[i];
                            o.parent && !r && n.push({ from: o.parent, to: o.id }), o.from && (r = !0);
                        }
                        n.length && !r && (e = e.concat(n)), t.prototype._parse_data.call(this, e);
                    }),
                    (e.prototype._mark_chains = function () {
                        var t = this;
                        this._roots = [];
                        var e = {},
                            n = {};
                        this.map(function (t) {
                            if (t.$shape.isConnector()) {
                                var r = t;
                                (n[r.to] = r.id), (e[r.from] = e[r.from] || []).push([t.id, r.to]);
                            }
                        }),
                            this.map(function (r) {
                                r.$shape.isConnector() || ((r.$parent = n[r.id]), (r.$kids = e[r.id]), r.$parent || t._roots.push(r.id));
                            });
                    }),
                    e
                );
            })(o.DataCollection);
        e.ShapesCollection = a;
    },
    function (t, e, n) {
        "use strict";
        function r(t) {
            for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
        }
        Object.defineProperty(e, "__esModule", { value: !0 }), r(n(1)), r(n(13)), r(n(16)), r(n(36)), r(n(9)), r(n(2)), r(n(14)), r(n(15)), r(n(38));
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(2),
            i = (function () {
                function t(t, e) {
                    (this._parent = t), (this._changes = e);
                }
                return (
                    (t.prototype.load = function (t, e) {
                        var n = this;
                        return (this._parent.loadData = t.load().then(function (t) {
                            n._parent.removeAll(), n.parse(t, e);
                        }));
                    }),
                    (t.prototype.parse = function (t, e) {
                        void 0 === e && (e = "json"), (t = (e = r.toDataDriver(e)).toJsonArray(t)), this._parent.$parse(t);
                    }),
                    (t.prototype.save = function (t) {
                        for (
                            var e = this,
                                n = function (n) {
                                    if (n.saving || n.pending) r.dhxWarning("item is saving");
                                    else {
                                        var o = i._findPrevState(n.id);
                                        if (o && o.saving) {
                                            var s = new Promise(function (i, s) {
                                                o.promise
                                                    .then(function () {
                                                        (n.pending = !1), i(e._setPromise(n, t));
                                                    })
                                                    .catch(function (i) {
                                                        e._removeFromOrder(o), e._setPromise(n, t), r.dhxWarning(i), s(i);
                                                    });
                                            });
                                            i._addToChain(s), (n.pending = !0);
                                        } else i._setPromise(n, t);
                                    }
                                },
                                i = this,
                                o = 0,
                                s = this._changes.order;
                            o < s.length;
                            o++
                        ) {
                            n(s[o]);
                        }
                        this._parent.saveData.then(function () {
                            e._saving = !1;
                        });
                    }),
                    (t.prototype._setPromise = function (t, e) {
                        var n = this;
                        return (
                            (t.promise = e.save(t.obj, t.status)),
                            t.promise
                                .then(function () {
                                    n._removeFromOrder(t);
                                })
                                .catch(function (e) {
                                    (t.saving = !1), (t.error = !0), r.dhxError(e);
                                }),
                            (t.saving = !0),
                            (this._saving = !0),
                            this._addToChain(t.promise),
                            t.promise
                        );
                    }),
                    (t.prototype._addToChain = function (t) {
                        this._parent.saveData && this._saving
                            ? (this._parent.saveData = this._parent.saveData.then(function () {
                                  return t;
                              }))
                            : (this._parent.saveData = t);
                    }),
                    (t.prototype._findPrevState = function (t) {
                        for (var e = 0, n = this._changes.order; e < n.length; e++) {
                            var r = n[e];
                            if (r.id === t) return r;
                        }
                        return null;
                    }),
                    (t.prototype._removeFromOrder = function (t) {
                        this._changes.order = this._changes.order.filter(function (e) {
                            return !r.isEqualObj(e, t);
                        });
                    }),
                    t
                );
            })();
        e.Loader = i;
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(2),
            i = (function () {
                function t() {}
                return (
                    (t.prototype.sort = function (t, e) {
                        var n = this;
                        e.rule && "function" == typeof e.rule
                            ? this._sort(t, e)
                            : e.by &&
                              ((e.rule = function (t, i) {
                                  var o = n._checkVal(e.as, t[e.by]),
                                      s = n._checkVal(e.as, i[e.by]);
                                  return r.naturalCompare(o.toString(), s.toString());
                              }),
                              this._sort(t, e));
                    }),
                    (t.prototype._checkVal = function (t, e) {
                        return t ? t.call(this, e) : e;
                    }),
                    (t.prototype._sort = function (t, e) {
                        var n = this,
                            r = { asc: 1, desc: -1 };
                        return t.sort(function (t, i) {
                            return e.rule.call(n, t, i) * (r[e.dir] || r.asc);
                        });
                    }),
                    t
                );
            })();
        e.Sort = i;
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r,
            i,
            o = n(5),
            s = n(7),
            a = n(37),
            l = n(16),
            c = n(1);
        function u(t) {
            var e = t.y,
                n = (function (t) {
                    for (t instanceof Event && (t = t.target); t && t.getAttribute; ) {
                        if (t.getAttribute("dhx_id")) return t;
                        t = t.parentNode;
                    }
                })(t);
            if (!n) return null;
            var r = n.childNodes[0].getBoundingClientRect();
            return (e - r.top) / r.height;
        }
        ((i = r || (r = {}))[(i.top = 0)] = "top"), (i[(i.bot = 1)] = "bot"), (i[(i.in = 2)] = "in");
        var h = (function () {
            function t() {
                var t = this;
                (this._transferData = {}),
                    (this._canMove = !0),
                    (this._ghostTopPadding = -17),
                    document.addEventListener("mousemove", function (e) {
                        return t._onMouseMove(e);
                    }),
                    document.addEventListener("mouseup", function () {
                        return t._onMouseUp();
                    });
            }
            return (
                (t.prototype.setItem = function (t, e, n) {
                    a.collectionStore.setItem(t, e, n);
                }),
                (t.prototype.onMouseDown = function (t) {
                    if (1 === t.which) {
                        var e = o.locate(t, "dhx_id"),
                            n = o.locate(t, "dhx_collection_id");
                        e && n && ((this._transferData.x = t.x), (this._transferData.y = t.y), (this._transferData.targetId = n), (this._transferData.id = e));
                    }
                }),
                (t.prototype._onMouseMove = function (t) {
                    if (this._transferData.id) {
                        var e = t.pageX,
                            n = t.pageY;
                        if (!this._transferData.ghost) {
                            if (Math.abs(this._transferData.x - e) < 3 && Math.abs(this._transferData.y - n) < 3) return;
                            var r = this._onDragStart(this._transferData.id, this._transferData.targetId);
                            if (!r) return void this._endDrop();
                            (this._transferData.ghost = r), document.body.appendChild(this._transferData.ghost);
                        }
                        this._moveGhost(e, n), this._onDrag(t);
                    }
                }),
                (t.prototype._onMouseUp = function () {
                    this._transferData.x && (this._transferData.ghost ? (this._removeGhost(), this._onDrop()) : this._endDrop());
                }),
                (t.prototype._moveGhost = function (t, e) {
                    if (this._transferData.ghost) {
                        var n = this._transferData.ghost.offsetWidth / 2;
                        (this._transferData.ghost.style.left = t - n + "px"), (this._transferData.ghost.style.top = e + this._ghostTopPadding + "px");
                    }
                }),
                (t.prototype._removeGhost = function () {
                    document.body.removeChild(this._transferData.ghost);
                }),
                (t.prototype._onDrop = function () {
                    if (this._canMove) {
                        var t = a.collectionStore.getItem(this._lastCollectionId),
                            e = a.collectionStore.getItemConfig(this._lastCollectionId);
                        if (t && e.mode !== c.DragMode.source) {
                            var n = { id: this._lastId, target: t },
                                r = { id: this._transferData.id, target: this._transferData.target };
                            r.target.events.fire(s.DragEvents.beforeDrop, [r, n]) && (this._move(r, n), n.target.events.fire(s.DragEvents.dropComplete, [n.id, this._transferData.dropPosition])), this._endDrop();
                        } else this._endDrop();
                    } else this._endDrop();
                }),
                (t.prototype._onDragStart = function (t, e) {
                    var n = a.collectionStore.getItem(e),
                        r = a.collectionStore.getItemConfig(e);
                    if (r.dragMode === c.DragMode.target) return null;
                    var i = n.data.getItem(t);
                    n.events.fire(s.DragEvents.dragStart);
                    var o,
                        l,
                        u = ((o = i), ((l = document.createElement("div")).textContent = o.value || o.text), (l.className = "drag-ghost"), l);
                    return n.events.fire(s.DragEvents.beforeDrag, [i, u]) && t ? (this._toggleTextSelection(!0), (this._transferData.target = n), (this._transferData.dragConfig = r), u) : null;
                }),
                (t.prototype._onDrag = function (t) {
                    var e = t.x,
                        n = t.y,
                        i = document.elementFromPoint(e, n),
                        h = o.locate(i, "dhx_id");
                    if (h) {
                        var d,
                            f,
                            p = o.locate(i, "dhx_collection_id");
                        if (this._transferData.dragConfig.behaviour === c.DragBehaviour.complex) {
                            var v = u(t);
                            this._transferData.dropPosition = v <= 0.25 ? r.top : v >= 0.75 ? r.bot : r.in;
                        } else if (this._lastId === h && this._lastCollectionId === p) return;
                        if ((h && p) || !this._canMove)
                            if (
                                ((d = [(f = { id: this._transferData.id, target: this._transferData.target }), { id: h, target: a.collectionStore.getItem(p) }]),
                                f.target.events.fire(s.DragEvents.dragOut, d),
                                p !== this._transferData.targetId || !(f.target.data instanceof l.TreeCollection) || (f.target.data instanceof l.TreeCollection && f.target.data.canCopy(f.id, h)))
                            )
                                this._cancelCanDrop(), (this._lastId = h), (this._lastCollectionId = p), f.target.events.fire(s.DragEvents.dragIn, d) && this._canDrop();
                            else this._cancelCanDrop();
                        else this._cancelCanDrop();
                    } else this._cancelCanDrop();
                }),
                (t.prototype._move = function (t, e) {
                    var n = t.target.data,
                        i = e.target.data,
                        o = 0,
                        s = e.id;
                    switch (this._transferData.dragConfig.behaviour) {
                        case c.DragBehaviour.child:
                            break;
                        case c.DragBehaviour.sibling:
                            (s = i.getParent(s)), (o = i.getIndex(e.id) + 1);
                            break;
                        case c.DragBehaviour.complex:
                            var a = this._transferData.dropPosition;
                            a === r.top ? ((s = i.getParent(s)), (o = i.getIndex(e.id))) : a === r.bot && ((s = i.getParent(s)), (o = i.getIndex(e.id) + 1));
                    }
                    n.move(t.id, o, i, s);
                }),
                (t.prototype._endDrop = function () {
                    this._toggleTextSelection(!1),
                        this._transferData.target && this._transferData.target.events.fire(s.DragEvents.dragEnd),
                        this._cancelCanDrop(),
                        (this._canMove = !0),
                        (this._transferData = {}),
                        (this._lastId = null),
                        (this._lastCollectionId = null);
                }),
                (t.prototype._cancelCanDrop = function () {
                    this._canMove = !1;
                    var t = a.collectionStore.getItem(this._lastCollectionId);
                    t && this._lastId && t.events.fire(s.DragEvents.cancelDrop, [this._lastId]);
                }),
                (t.prototype._canDrop = function () {
                    this._canMove = !0;
                    var t = a.collectionStore.getItem(this._lastCollectionId);
                    t && this._lastId && t.events.fire(s.DragEvents.canDrop, [this._lastId, this._transferData.dropPosition]);
                }),
                (t.prototype._toggleTextSelection = function (t) {
                    t ? document.body.classList.add("dhx-no-select") : document.body.classList.remove("dhx-no-select");
                }),
                t
            );
        })();
        e.dragManager = new h();
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = (function () {
            function t() {
                this._store = {};
            }
            return (
                (t.prototype.setItem = function (t, e, n) {
                    this._store[t] = { target: e, config: n };
                }),
                (t.prototype.getItem = function (t) {
                    return this._store[t] ? this._store[t].target : null;
                }),
                (t.prototype.getItemConfig = function (t) {
                    return this._store[t] ? this._store[t].config : null;
                }),
                t
            );
        })();
        e.collectionStore = new r();
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(3),
            i = n(7),
            o = n(1),
            s = (function () {
                function t(t, e, n) {
                    var i = this;
                    (this.events = n || new r.EventSystem()),
                        (this._data = e),
                        this._data.events.on(o.DataEvents.removeAll, function () {
                            i._selected = null;
                        }),
                        this._data.events.on(o.DataEvents.change, function () {
                            if (i._selected) {
                                var t = i._data.getNearId(i._selected);
                                t !== i._selected && ((i._selected = null), t && i.add(t));
                            }
                        });
                }
                return (
                    (t.prototype.getId = function () {
                        return this._selected;
                    }),
                    (t.prototype.getItem = function () {
                        return this._selected ? this._data.getItem(this._selected) : null;
                    }),
                    (t.prototype.remove = function (t) {
                        return (
                            !(t = t || this._selected) ||
                            (!!this.events.fire(i.SelectionEvents.beforeUnSelect, [t]) && (this._data.update(t, { $selected: !1 }), (this._selected = null), this.events.fire(i.SelectionEvents.afterUnSelect, [t]), !0))
                        );
                    }),
                    (t.prototype.add = function (t) {
                        this._selected !== t && (this.remove(), this.events.fire(i.SelectionEvents.beforeSelect, [t]) && ((this._selected = t), this._data.update(t, { $selected: !0 }), this.events.fire(i.SelectionEvents.afterSelect, [t])));
                    }),
                    t
                );
            })();
        e.Selection = s;
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(0),
            i = n(5),
            o = n(6),
            s = (function () {
                function t(t, e) {
                    var n = this;
                    (this.config = { height: 50, iconWidth: 30, gap: 20, icons: e }),
                        (this.events = t),
                        (this._handlers = {
                            onclick: i.eventHandler(
                                function (t) {
                                    return i.locate(t);
                                },
                                {
                                    dhx_icon: function (t, e) {
                                        n.events.fire(o.DiagramEvents.shapeIconClick, [e]);
                                    },
                                }
                            ),
                        }),
                        this.events.on(o.DiagramEvents.shapeMouseDown, function (t, e, r) {
                            n._pressCoords = r;
                        }),
                        this.events.on(o.DiagramEvents.emptyAreaClick, function () {
                            n._pressCoords = null;
                        });
                }
                return (
                    (t.prototype.toSVG = function (t, e) {
                        var n = this.config,
                            i = this._getIcons(t, n.icons),
                            o = n.iconWidth * i.length + n.gap,
                            s = this._getCoords(t, o, n.height, e.scale);
                        return r.el(
                            "div",
                            {
                                class: "dhx_popup_toolbar",
                                style: "\n\t\t\t\tmax-height:" + this.config.height + "px;\n\t\t\t\twidth:" + this.config.width + "px;\n\t\t\t\ttop:" + (s.y - e.top * e.scale) + "px;\n\t\t\t\tleft:" + (s.x - e.left * e.scale) + "px;",
                                onclick: this._handlers.onclick,
                            },
                            [r.el("div", { class: "dhx_item_toolbar" }, i)]
                        );
                    }),
                    (t.prototype._getIcons = function (t, e) {
                        for (var n = [], i = 0; i < e.length; i++) {
                            var o = e[i];
                            if (!o.check || o.check(t)) {
                                var s = o.css ? o.css(t) : "",
                                    a = { _key: o.id, class: "dhx_icon " + s, dhx_id: o.id },
                                    l = "function" == typeof o.content ? o.content(t) : o.content;
                                "string" == typeof l ? ((a[".innerHTML"] = l), n.push(r.el("div", a))) : n.push(r.el("div", a, [l]));
                            }
                        }
                        return n;
                    }),
                    (t.prototype._getCoords = function (t, e, n, r) {
                        if (t.$shape.isConnector()) return this._pressCoords ? { x: this._pressCoords.x * r - 50, y: this._pressCoords.y * r - 50 } : { x: t.points[0].x * r, y: t.points[0].y * r };
                        var i = t.$shape.getBox();
                        return { x: (i.right / 2 + i.left / 2) * r - e / 2, y: i.top * r - n - 10 };
                    }),
                    t
                );
            })();
        e.Toolbar = s;
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        e.default = { applyAll: "Apply all", resetChanges: "Reset Changes", editCard: "Edit Card", color: "Color", position: "Position", size: "Size" };
    },
]);
