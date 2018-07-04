/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */ ! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = "length" in e && e.length,
            n = re.type(e);
        return "function" !== n && !re.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
    }

    function i(e, t, n) {
        if (re.isFunction(t)) return re.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType) return re.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (fe.test(t)) return re.filter(t, e, n);
            t = re.filter(t, e)
        }
        return re.grep(e, function(e) {
            return re.inArray(e, t) >= 0 !== n
        })
    }

    function r(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function o(e) {
        var t = xe[e] = {};
        return re.each(e.match(be) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function a() {
        he.addEventListener ? (he.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (he.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
    }

    function s() {
        (he.addEventListener || "load" === event.type || "complete" === he.readyState) && (a(), re.ready())
    }

    function l(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var i = "data-" + t.replace(Ee, "-$1").toLowerCase();
            if (n = e.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Ce.test(n) ? re.parseJSON(n) : n)
                } catch (e) {}
                re.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function u(e) {
        var t;
        for (t in e)
            if (("data" !== t || !re.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function c(e, t, n, i) {
        if (re.acceptData(e)) {
            var r, o, a = re.expando,
                s = e.nodeType,
                l = s ? re.cache : e,
                u = s ? e[a] : e[a] && a;
            if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof t) return u || (u = s ? e[a] = Y.pop() || re.guid++ : a), l[u] || (l[u] = s ? {} : {
                toJSON: re.noop
            }), ("object" == typeof t || "function" == typeof t) && (i ? l[u] = re.extend(l[u], t) : l[u].data = re.extend(l[u].data, t)), o = l[u], i || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[re.camelCase(t)] = n), "string" == typeof t ? (r = o[t], null == r && (r = o[re.camelCase(t)])) : r = o, r
        }
    }

    function d(e, t, n) {
        if (re.acceptData(e)) {
            var i, r, o = e.nodeType,
                a = o ? re.cache : e,
                s = o ? e[re.expando] : re.expando;
            if (a[s]) {
                if (t && (i = n ? a[s] : a[s].data)) {
                    re.isArray(t) ? t = t.concat(re.map(t, re.camelCase)) : t in i ? t = [t] : (t = re.camelCase(t), t = t in i ? [t] : t.split(" ")), r = t.length;
                    for (; r--;) delete i[t[r]];
                    if (n ? !u(i) : !re.isEmptyObject(i)) return
                }(n || (delete a[s].data, u(a[s]))) && (o ? re.cleanData([e], !0) : ne.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }

    function f() {
        return !0
    }

    function p() {
        return !1
    }

    function h() {
        try {
            return he.activeElement
        } catch (e) {}
    }

    function m(e) {
        var t = qe.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function g(e, t) {
        var n, i, r = 0,
            o = typeof e.getElementsByTagName !== ke ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== ke ? e.querySelectorAll(t || "*") : void 0;
        if (!o)
            for (o = [], n = e.childNodes || e; null != (i = n[r]); r++) !t || re.nodeName(i, t) ? o.push(i) : re.merge(o, g(i, t));
        return void 0 === t || t && re.nodeName(e, t) ? re.merge([e], o) : o
    }

    function v(e) {
        De.test(e.type) && (e.defaultChecked = e.checked)
    }

    function y(e, t) {
        return re.nodeName(e, "table") && re.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function b(e) {
        return e.type = (null !== re.find.attr(e, "type")) + "/" + e.type, e
    }

    function x(e) {
        var t = Ue.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function w(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++) re._data(n, "globalEval", !t || re._data(t[i], "globalEval"))
    }

    function T(e, t) {
        if (1 === t.nodeType && re.hasData(e)) {
            var n, i, r, o = re._data(e),
                a = re._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (i = 0, r = s[n].length; r > i; i++) re.event.add(t, n, s[n][i])
            }
            a.data && (a.data = re.extend({}, a.data))
        }
    }

    function k(e, t) {
        var n, i, r;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !ne.noCloneEvent && t[re.expando]) {
                r = re._data(t);
                for (i in r.events) re.removeEvent(t, i, r.handle);
                t.removeAttribute(re.expando)
            }
            "script" === n && t.text !== e.text ? (b(t).text = e.text, x(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ne.html5Clone && e.innerHTML && !re.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && De.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function C(t, n) {
        var i, r = re(n.createElement(t)).appendTo(n.body),
            o = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(r[0])) ? i.display : re.css(r[0], "display");
        return r.detach(), o
    }

    function E(e) {
        var t = he,
            n = Ze[e];
        return n || (n = C(e, t), "none" !== n && n || (Ke = (Ke || re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Ke[0].contentWindow || Ke[0].contentDocument).document, t.write(), t.close(), n = C(e, t), Ke.detach()), Ze[e] = n), n
    }

    function N(e, t) {
        return {
            get: function() {
                var n = e();
                if (null != n) return n ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function S(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = ft.length; r--;)
            if (t = ft[r] + n, t in e) return t;
        return i
    }

    function j(e, t) {
        for (var n, i, r, o = [], a = 0, s = e.length; s > a; a++) i = e[a], i.style && (o[a] = re._data(i, "olddisplay"), n = i.style.display, t ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && je(i) && (o[a] = re._data(i, "olddisplay", E(i.nodeName)))) : (r = je(i), (n && "none" !== n || !r) && re._data(i, "olddisplay", r ? n : re.css(i, "display"))));
        for (a = 0; s > a; a++) i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function A(e, t, n) {
        var i = lt.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function D(e, t, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += re.css(e, n + Se[o], !0, r)), i ? ("content" === n && (a -= re.css(e, "padding" + Se[o], !0, r)), "margin" !== n && (a -= re.css(e, "border" + Se[o] + "Width", !0, r))) : (a += re.css(e, "padding" + Se[o], !0, r), "padding" !== n && (a += re.css(e, "border" + Se[o] + "Width", !0, r)));
        return a
    }

    function L(e, t, n) {
        var i = !0,
            r = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = et(e),
            a = ne.boxSizing && "border-box" === re.css(e, "boxSizing", !1, o);
        if (0 >= r || null == r) {
            if (r = tt(e, t, o), (0 > r || null == r) && (r = e.style[t]), it.test(r)) return r;
            i = a && (ne.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + D(e, t, n || (a ? "border" : "content"), i, o) + "px"
    }

    function H(e, t, n, i, r) {
        return new H.prototype.init(e, t, n, i, r)
    }

    function _() {
        return setTimeout(function() {
            pt = void 0
        }), pt = re.now()
    }

    function M(e, t) {
        var n, i = {
                height: e
            },
            r = 0;
        for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Se[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function O(e, t, n) {
        for (var i, r = (bt[t] || []).concat(bt["*"]), o = 0, a = r.length; a > o; o++)
            if (i = r[o].call(n, t, e)) return i
    }

    function q(e, t, n) {
        var i, r, o, a, s, l, u, c, d = this,
            f = {},
            p = e.style,
            h = e.nodeType && je(e),
            m = re._data(e, "fxshow");
        n.queue || (s = re._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
            s.unqueued || l()
        }), s.unqueued++, d.always(function() {
            d.always(function() {
                s.unqueued--, re.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], u = re.css(e, "display"), c = "none" === u ? re._data(e, "olddisplay") || E(e.nodeName) : u, "inline" === c && "none" === re.css(e, "float") && (ne.inlineBlockNeedsLayout && "inline" !== E(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", ne.shrinkWrapBlocks() || d.always(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (r = t[i], mt.exec(r)) {
                if (delete t[i], o = o || "toggle" === r, r === (h ? "hide" : "show")) {
                    if ("show" !== r || !m || void 0 === m[i]) continue;
                    h = !0
                }
                f[i] = m && m[i] || re.style(e, i)
            } else u = void 0;
        if (re.isEmptyObject(f)) "inline" === ("none" === u ? E(e.nodeName) : u) && (p.display = u);
        else {
            m ? "hidden" in m && (h = m.hidden) : m = re._data(e, "fxshow", {}), o && (m.hidden = !h), h ? re(e).show() : d.done(function() {
                re(e).hide()
            }), d.done(function() {
                var t;
                re._removeData(e, "fxshow");
                for (t in f) re.style(e, t, f[t])
            });
            for (i in f) a = O(h ? m[i] : 0, i, d), i in m || (m[i] = a.start, h && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function P(e, t) {
        var n, i, r, o, a;
        for (n in e)
            if (i = re.camelCase(n), r = t[i], o = e[n], re.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), a = re.cssHooks[i], a && "expand" in a) {
                o = a.expand(o), delete e[i];
                for (n in o) n in e || (e[n] = o[n], t[n] = r)
            } else t[i] = r
    }

    function B(e, t, n) {
        var i, r, o = 0,
            a = yt.length,
            s = re.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var t = pt || _(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, o = 1 - i, a = 0, l = u.tweens.length; l > a; a++) u.tweens[a].run(o);
                return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1)
            },
            u = s.promise({
                elem: e,
                props: re.extend({}, t),
                opts: re.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: pt || _(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = re.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? u.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; i > n; n++) u.tweens[n].run(1);
                    return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (P(c, u.opts.specialEasing); a > o; o++)
            if (i = yt[o].call(u, e, c, u.opts)) return i;
        return re.map(c, O, u), re.isFunction(u.opts.start) && u.opts.start.call(e, u), re.fx.timer(re.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function F(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0,
                o = t.toLowerCase().match(be) || [];
            if (re.isFunction(n))
                for (; i = o[r++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function R(e, t, n, i) {
        function r(s) {
            var l;
            return o[s] = !0, re.each(e[s] || [], function(e, s) {
                var u = s(t, n, i);
                return "string" != typeof u || a || o[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1)
            }), l
        }
        var o = {},
            a = e === $t;
        return r(t.dataTypes[0]) || !o["*"] && r("*")
    }

    function I(e, t) {
        var n, i, r = re.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
        return n && re.extend(!0, e, n), e
    }

    function W(e, t, n) {
        for (var i, r, o, a, s = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (a in s)
                if (s[a] && s[a].test(r)) {
                    l.unshift(a);
                    break
                }
        if (l[0] in n) o = l[0];
        else {
            for (a in n) {
                if (!l[0] || e.converters[a + " " + l[0]]) {
                    o = a;
                    break
                }
                i || (i = a)
            }
            o = o || i
        }
        return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
    }

    function $(e, t, n, i) {
        var r, o, a, s, l, u = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (a = u[l + " " + o] || u["* " + o], !a)
                for (r in u)
                    if (s = r.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                        a === !0 ? a = u[r] : u[r] !== !0 && (o = s[0], c.unshift(s[1]));
                        break
                    }
            if (a !== !0)
                if (a && e.throws) t = a(t);
                else try {
                    t = a(t)
                } catch (e) {
                    return {
                        state: "parsererror",
                        error: a ? e : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function z(e, t, n, i) {
        var r;
        if (re.isArray(t)) re.each(t, function(t, r) {
            n || Vt.test(e) ? i(e, r) : z(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
        });
        else if (n || "object" !== re.type(t)) i(e, t);
        else
            for (r in t) z(e + "[" + r + "]", t[r], n, i)
    }

    function X() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }

    function V() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }

    function U(e) {
        return re.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    var Y = [],
        J = Y.slice,
        Q = Y.concat,
        G = Y.push,
        K = Y.indexOf,
        Z = {},
        ee = Z.toString,
        te = Z.hasOwnProperty,
        ne = {},
        ie = "1.11.3",
        re = function(e, t) {
            return new re.fn.init(e, t)
        },
        oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ae = /^-ms-/,
        se = /-([\da-z])/gi,
        le = function(e, t) {
            return t.toUpperCase()
        };
    re.fn = re.prototype = {
        jquery: ie,
        constructor: re,
        selector: "",
        length: 0,
        toArray: function() {
            return J.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : J.call(this)
        },
        pushStack: function(e) {
            var t = re.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return re.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(re.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(J.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: G,
        sort: Y.sort,
        splice: Y.splice
    }, re.extend = re.fn.extend = function() {
        var e, t, n, i, r, o, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || re.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
            if (null != (r = arguments[s]))
                for (i in r) e = a[i], n = r[i], a !== n && (u && n && (re.isPlainObject(n) || (t = re.isArray(n))) ? (t ? (t = !1, o = e && re.isArray(e) ? e : []) : o = e && re.isPlainObject(e) ? e : {}, a[i] = re.extend(u, o, n)) : void 0 !== n && (a[i] = n));
        return a
    }, re.extend({
        expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === re.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === re.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !re.isArray(e) && e - parseFloat(e) + 1 >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== re.type(e) || e.nodeType || re.isWindow(e)) return !1;
            try {
                if (e.constructor && !te.call(e, "constructor") && !te.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (e) {
                return !1
            }
            if (ne.ownLast)
                for (t in e) return te.call(e, t);
            for (t in e);
            return void 0 === t || te.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[ee.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && re.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(ae, "ms-").replace(se, le)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, i) {
            var r, o = 0,
                a = e.length,
                s = n(e);
            if (i) {
                if (s)
                    for (; a > o && (r = t.apply(e[o], i), r !== !1); o++);
                else
                    for (o in e)
                        if (r = t.apply(e[o], i), r === !1) break
            } else if (s)
                for (; a > o && (r = t.call(e[o], o, e[o]), r !== !1); o++);
            else
                for (o in e)
                    if (r = t.call(e[o], o, e[o]), r === !1) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(oe, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? re.merge(i, "string" == typeof e ? [e] : e) : G.call(i, e)), i
        },
        inArray: function(e, t, n) {
            var i;
            if (t) {
                if (K) return K.call(t, e, n);
                for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; n > i;) e[r++] = t[i++];
            if (n !== n)
                for (; void 0 !== t[i];) e[r++] = t[i++];
            return e.length = r, e
        },
        grep: function(e, t, n) {
            for (var i, r = [], o = 0, a = e.length, s = !n; a > o; o++) i = !t(e[o], o), i !== s && r.push(e[o]);
            return r
        },
        map: function(e, t, i) {
            var r, o = 0,
                a = e.length,
                s = n(e),
                l = [];
            if (s)
                for (; a > o; o++) r = t(e[o], o, i), null != r && l.push(r);
            else
                for (o in e) r = t(e[o], o, i), null != r && l.push(r);
            return Q.apply([], l)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, r;
            return "string" == typeof t && (r = e[t], t = e, e = r), re.isFunction(e) ? (n = J.call(arguments, 2), i = function() {
                return e.apply(t || this, n.concat(J.call(arguments)))
            }, i.guid = e.guid = e.guid || re.guid++, i) : void 0
        },
        now: function() {
            return +new Date
        },
        support: ne
    }), re.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        Z["[object " + t + "]"] = t.toLowerCase()
    });
    var ue = function(e) {
        function t(e, t, n, i) {
            var r, o, a, s, l, u, d, p, h, m;
            if ((t ? t.ownerDocument || t : R) !== H && L(t), t = t || H, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
            if (!i && M) {
                if (11 !== s && (r = ye.exec(e)))
                    if (a = r[1]) {
                        if (9 === s) {
                            if (o = t.getElementById(a), !o || !o.parentNode) return n;
                            if (o.id === a) return n.push(o), n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && B(t, o) && o.id === a) return n.push(o), n
                    } else {
                        if (r[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                        if ((a = r[3]) && w.getElementsByClassName) return K.apply(n, t.getElementsByClassName(a)), n
                    }
                if (w.qsa && (!O || !O.test(e))) {
                    if (p = d = F, h = t, m = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (u = E(e), (d = t.getAttribute("id")) ? p = d.replace(xe, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", l = u.length; l--;) u[l] = p + f(u[l]);
                        h = be.test(e) && c(t.parentNode) || t, m = u.join(",")
                    }
                    if (m) try {
                        return K.apply(n, h.querySelectorAll(m)), n
                    } catch (e) {} finally {
                        d || t.removeAttribute("id")
                    }
                }
            }
            return S(e.replace(le, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = i
            }
            var t = [];
            return e
        }

        function i(e) {
            return e[F] = !0, e
        }

        function r(e) {
            var t = H.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), i = e.length; i--;) T.attrHandle[n[i]] = t
        }

        function a(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || U) - (~e.sourceIndex || U);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function u(e) {
            return i(function(t) {
                return t = +t, i(function(n, i) {
                    for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function d() {}

        function f(e) {
            for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
            return i
        }

        function p(e, t, n) {
            var i = t.dir,
                r = n && "parentNode" === i,
                o = W++;
            return t.first ? function(t, n, o) {
                for (; t = t[i];)
                    if (1 === t.nodeType || r) return e(t, n, o)
            } : function(t, n, a) {
                var s, l, u = [I, o];
                if (a) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || r) && e(t, n, a)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || r) {
                            if (l = t[F] || (t[F] = {}), (s = l[i]) && s[0] === I && s[1] === o) return u[2] = s[2];
                            if (l[i] = u, u[2] = e(t, n, a)) return !0
                        }
            }
        }

        function h(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var r = e.length; r--;)
                    if (!e[r](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function m(e, n, i) {
            for (var r = 0, o = n.length; o > r; r++) t(e, n[r], i);
            return i
        }

        function g(e, t, n, i, r) {
            for (var o, a = [], s = 0, l = e.length, u = null != t; l > s; s++)(o = e[s]) && (!n || n(o, i, r)) && (a.push(o), u && t.push(s));
            return a
        }

        function v(e, t, n, r, o, a) {
            return r && !r[F] && (r = v(r)), o && !o[F] && (o = v(o, a)), i(function(i, a, s, l) {
                var u, c, d, f = [],
                    p = [],
                    h = a.length,
                    v = i || m(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !i && t ? v : g(v, f, e, s, l),
                    b = n ? o || (i ? e : h || r) ? [] : a : y;
                if (n && n(y, b, s, l), r)
                    for (u = g(b, p), r(u, [], s, l), c = u.length; c--;)(d = u[c]) && (b[p[c]] = !(y[p[c]] = d));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (u = [], c = b.length; c--;)(d = b[c]) && u.push(y[c] = d);
                            o(null, b = [], u, l)
                        }
                        for (c = b.length; c--;)(d = b[c]) && (u = o ? ee(i, d) : f[c]) > -1 && (i[u] = !(a[u] = d))
                    }
                } else b = g(b === a ? b.splice(h, b.length) : b), o ? o(null, a, b, l) : K.apply(a, b)
            })
        }

        function y(e) {
            for (var t, n, i, r = e.length, o = T.relative[e[0].type], a = o || T.relative[" "], s = o ? 1 : 0, l = p(function(e) {
                    return e === t
                }, a, !0), u = p(function(e) {
                    return ee(t, e) > -1
                }, a, !0), c = [function(e, n, i) {
                    var r = !o && (i || n !== j) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                    return t = null, r
                }]; r > s; s++)
                if (n = T.relative[e[s].type]) c = [p(h(c), n)];
                else {
                    if (n = T.filter[e[s].type].apply(null, e[s].matches), n[F]) {
                        for (i = ++s; r > i && !T.relative[e[i].type]; i++);
                        return v(s > 1 && h(c), s > 1 && f(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(le, "$1"), n, i > s && y(e.slice(s, i)), r > i && y(e = e.slice(i)), r > i && f(e))
                    }
                    c.push(n)
                }
            return h(c)
        }

        function b(e, n) {
            var r = n.length > 0,
                o = e.length > 0,
                a = function(i, a, s, l, u) {
                    var c, d, f, p = 0,
                        h = "0",
                        m = i && [],
                        v = [],
                        y = j,
                        b = i || o && T.find.TAG("*", u),
                        x = I += null == y ? 1 : Math.random() || .1,
                        w = b.length;
                    for (u && (j = a !== H && a); h !== w && null != (c = b[h]); h++) {
                        if (o && c) {
                            for (d = 0; f = e[d++];)
                                if (f(c, a, s)) {
                                    l.push(c);
                                    break
                                }
                            u && (I = x)
                        }
                        r && ((c = !f && c) && p--, i && m.push(c))
                    }
                    if (p += h, r && h !== p) {
                        for (d = 0; f = n[d++];) f(m, v, a, s);
                        if (i) {
                            if (p > 0)
                                for (; h--;) m[h] || v[h] || (v[h] = Q.call(l));
                            v = g(v)
                        }
                        K.apply(l, v), u && !i && v.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                    }
                    return u && (I = x, j = y), m
                };
            return r ? i(a) : a
        }
        var x, w, T, k, C, E, N, S, j, A, D, L, H, _, M, O, q, P, B, F = "sizzle" + 1 * new Date,
            R = e.document,
            I = 0,
            W = 0,
            $ = n(),
            z = n(),
            X = n(),
            V = function(e, t) {
                return e === t && (D = !0), 0
            },
            U = 1 << 31,
            Y = {}.hasOwnProperty,
            J = [],
            Q = J.pop,
            G = J.push,
            K = J.push,
            Z = J.slice,
            ee = function(e, t) {
                for (var n = 0, i = e.length; i > n; n++)
                    if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            re = ie.replace("w", "w#"),
            oe = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]",
            ae = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
            se = new RegExp(ne + "+", "g"),
            le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            ue = new RegExp("^" + ne + "*," + ne + "*"),
            ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            fe = new RegExp(ae),
            pe = new RegExp("^" + re + "$"),
            he = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + oe),
                PSEUDO: new RegExp("^" + ae),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            me = /^(?:input|select|textarea|button)$/i,
            ge = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            be = /[+~]/,
            xe = /'|\\/g,
            we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            Te = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            ke = function() {
                L()
            };
        try {
            K.apply(J = Z.call(R.childNodes), R.childNodes), J[R.childNodes.length].nodeType
        } catch (e) {
            K = {
                apply: J.length ? function(e, t) {
                    G.apply(e, Z.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        w = t.support = {}, C = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, L = t.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : R;
            return i !== H && 9 === i.nodeType && i.documentElement ? (H = i, _ = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", ke, !1) : n.attachEvent && n.attachEvent("onunload", ke)), M = !C(i), w.attributes = r(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), w.getElementsByTagName = r(function(e) {
                return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = ve.test(i.getElementsByClassName), w.getById = r(function(e) {
                return _.appendChild(e).id = F, !i.getElementsByName || !i.getElementsByName(F).length
            }), w.getById ? (T.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && M) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, T.filter.ID = function(e) {
                var t = e.replace(we, Te);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete T.find.ID, T.filter.ID = function(e) {
                var t = e.replace(we, Te);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), T.find.TAG = w.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, i = [],
                    r = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, T.find.CLASS = w.getElementsByClassName && function(e, t) {
                return M ? t.getElementsByClassName(e) : void 0
            }, q = [], O = [], (w.qsa = ve.test(i.querySelectorAll)) && (r(function(e) {
                _.appendChild(e).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || O.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + F + "-]").length || O.push("~="), e.querySelectorAll(":checked").length || O.push(":checked"), e.querySelectorAll("a#" + F + "+*").length || O.push(".#.+[+~]")
            }), r(function(e) {
                var t = i.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && O.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), O.push(",.*:")
            })), (w.matchesSelector = ve.test(P = _.matches || _.webkitMatchesSelector || _.mozMatchesSelector || _.oMatchesSelector || _.msMatchesSelector)) && r(function(e) {
                w.disconnectedMatch = P.call(e, "div"), P.call(e, "[s!='']:x"), q.push("!=", ae)
            }), O = O.length && new RegExp(O.join("|")), q = q.length && new RegExp(q.join("|")), t = ve.test(_.compareDocumentPosition), B = t || ve.test(_.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, V = t ? function(e, t) {
                if (e === t) return D = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === R && B(R, e) ? -1 : t === i || t.ownerDocument === R && B(R, t) ? 1 : A ? ee(A, e) - ee(A, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return D = !0, 0;
                var n, r = 0,
                    o = e.parentNode,
                    s = t.parentNode,
                    l = [e],
                    u = [t];
                if (!o || !s) return e === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : A ? ee(A, e) - ee(A, t) : 0;
                if (o === s) return a(e, t);
                for (n = e; n = n.parentNode;) l.unshift(n);
                for (n = t; n = n.parentNode;) u.unshift(n);
                for (; l[r] === u[r];) r++;
                return r ? a(l[r], u[r]) : l[r] === R ? -1 : u[r] === R ? 1 : 0
            }, i) : H
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== H && L(e), n = n.replace(de, "='$1']"), !(!w.matchesSelector || !M || q && q.test(n) || O && O.test(n))) try {
                var i = P.call(e, n);
                if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (e) {}
            return t(n, H, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== H && L(e), B(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== H && L(e);
            var n = T.attrHandle[t.toLowerCase()],
                i = n && Y.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !M) : void 0;
            return void 0 !== i ? i : w.attributes || !M ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                i = 0,
                r = 0;
            if (D = !w.detectDuplicates, A = !w.sortStable && e.slice(0), e.sort(V), D) {
                for (; t = e[r++];) t === e[r] && (i = n.push(r));
                for (; i--;) e.splice(n[i], 1)
            }
            return A = null, e
        }, k = t.getText = function(e) {
            var t, n = "",
                i = 0,
                r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += k(e)
                } else if (3 === r || 4 === r) return e.nodeValue
            } else
                for (; t = e[i++];) n += k(t);
            return n
        }, T = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: he,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(we, Te), e[3] = (e[3] || e[4] || e[5] || "").replace(we, Te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(we, Te).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = $[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && $(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, i) {
                    return function(r) {
                        var o = t.attr(r, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === i && 0 === r ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var u, c, d, f, p, h, m = o !== a ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            y = !l && !s;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (d = t; d = d[m];)
                                        if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                for (c = g[F] || (g[F] = {}), u = c[e] || [], p = u[0] === I && u[1], f = u[0] === I && u[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (f = p = 0) || h.pop();)
                                    if (1 === d.nodeType && ++f && d === t) {
                                        c[e] = [I, p, f];
                                        break
                                    }
                            } else if (y && (u = (t[F] || (t[F] = {}))[e]) && u[0] === I) f = u[1];
                            else
                                for (;
                                    (d = ++p && d && d[m] || (f = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[F] || (d[F] = {}))[e] = [I, f]), d !== t)););
                            return f -= r, f === i || f % i === 0 && f / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var r, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[F] ? o(n) : o.length > 1 ? (r = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, r = o(e, n), a = r.length; a--;) i = ee(e, r[a]), e[i] = !(t[i] = r[a])
                    }) : function(e) {
                        return o(e, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [],
                        n = [],
                        r = N(e.replace(le, "$1"));
                    return r[F] ? i(function(e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, i, o) {
                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function(e) {
                    return e = e.replace(we, Te),
                        function(t) {
                            return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                        }
                }),
                lang: i(function(e) {
                    return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, Te).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = M ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === _
                },
                focus: function(e) {
                    return e === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !T.pseudos.empty(e)
                },
                header: function(e) {
                    return ge.test(e.nodeName)
                },
                input: function(e) {
                    return me.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(e, t) {
                    return [t - 1]
                }),
                eq: u(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: u(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: u(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: u(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: u(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }, T.pseudos.nth = T.pseudos.eq;
        for (x in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) T.pseudos[x] = s(x);
        for (x in {
                submit: !0,
                reset: !0
            }) T.pseudos[x] = l(x);
        return d.prototype = T.filters = T.pseudos, T.setFilters = new d, E = t.tokenize = function(e, n) {
            var i, r, o, a, s, l, u, c = z[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = e, l = [], u = T.preFilter; s;) {
                (!i || (r = ue.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(o = [])), i = !1, (r = ce.exec(s)) && (i = r.shift(), o.push({
                    value: i,
                    type: r[0].replace(le, " ")
                }), s = s.slice(i.length));
                for (a in T.filter) !(r = he[a].exec(s)) || u[a] && !(r = u[a](r)) || (i = r.shift(),
                    o.push({
                        value: i,
                        type: a,
                        matches: r
                    }), s = s.slice(i.length));
                if (!i) break
            }
            return n ? s.length : s ? t.error(e) : z(e, l).slice(0)
        }, N = t.compile = function(e, t) {
            var n, i = [],
                r = [],
                o = X[e + " "];
            if (!o) {
                for (t || (t = E(e)), n = t.length; n--;) o = y(t[n]), o[F] ? i.push(o) : r.push(o);
                o = X(e, b(r, i)), o.selector = e
            }
            return o
        }, S = t.select = function(e, t, n, i) {
            var r, o, a, s, l, u = "function" == typeof e && e,
                d = !i && E(e = u.selector || e);
            if (n = n || [], 1 === d.length) {
                if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && M && T.relative[o[1].type]) {
                    if (t = (T.find.ID(a.matches[0].replace(we, Te), t) || [])[0], !t) return n;
                    u && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (r = he.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !T.relative[s = a.type]);)
                    if ((l = T.find[s]) && (i = l(a.matches[0].replace(we, Te), be.test(o[0].type) && c(t.parentNode) || t))) {
                        if (o.splice(r, 1), e = i.length && f(o), !e) return K.apply(n, i), n;
                        break
                    }
            }
            return (u || N(e, d))(i, t, !M, n, be.test(e) && c(t.parentNode) || t), n
        }, w.sortStable = F.split("").sort(V).join("") === F, w.detectDuplicates = !!D, L(), w.sortDetached = r(function(e) {
            return 1 & e.compareDocumentPosition(H.createElement("div"))
        }), r(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), w.attributes && r(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), r(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(te, function(e, t, n) {
            var i;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    re.find = ue, re.expr = ue.selectors, re.expr[":"] = re.expr.pseudos, re.unique = ue.uniqueSort, re.text = ue.getText, re.isXMLDoc = ue.isXML, re.contains = ue.contains;
    var ce = re.expr.match.needsContext,
        de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        fe = /^.[^:#\[\.,]*$/;
    re.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? re.find.matchesSelector(i, e) ? [i] : [] : re.find.matches(e, re.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, re.fn.extend({
        find: function(e) {
            var t, n = [],
                i = this,
                r = i.length;
            if ("string" != typeof e) return this.pushStack(re(e).filter(function() {
                for (t = 0; r > t; t++)
                    if (re.contains(i[t], this)) return !0
            }));
            for (t = 0; r > t; t++) re.find(e, i[t], n);
            return n = this.pushStack(r > 1 ? re.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) {
            return this.pushStack(i(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(i(this, e || [], !0))
        },
        is: function(e) {
            return !!i(this, "string" == typeof e && ce.test(e) ? re(e) : e || [], !1).length
        }
    });
    var pe, he = e.document,
        me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ge = re.fn.init = function(e, t) {
            var n, i;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : me.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || pe).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof re ? t[0] : t, re.merge(this, re.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : he, !0)), de.test(n[1]) && re.isPlainObject(t))
                        for (n in t) re.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                if (i = he.getElementById(n[2]), i && i.parentNode) {
                    if (i.id !== n[2]) return pe.find(e);
                    this.length = 1, this[0] = i
                }
                return this.context = he, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : re.isFunction(e) ? "undefined" != typeof pe.ready ? pe.ready(e) : e(re) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), re.makeArray(e, this))
        };
    ge.prototype = re.fn, pe = re(he);
    var ve = /^(?:parents|prev(?:Until|All))/,
        ye = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    re.extend({
        dir: function(e, t, n) {
            for (var i = [], r = e[t]; r && 9 !== r.nodeType && (void 0 === n || 1 !== r.nodeType || !re(r).is(n));) 1 === r.nodeType && i.push(r), r = r[t];
            return i
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), re.fn.extend({
        has: function(e) {
            var t, n = re(e, this),
                i = n.length;
            return this.filter(function() {
                for (t = 0; i > t; t++)
                    if (re.contains(this, n[t])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, i = 0, r = this.length, o = [], a = ce.test(e) || "string" != typeof e ? re(e, t || this.context) : 0; r > i; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && re.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? re.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? re.inArray(this[0], re(e)) : re.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(re.unique(re.merge(this.get(), re(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), re.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return re.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return re.dir(e, "parentNode", n)
        },
        next: function(e) {
            return r(e, "nextSibling")
        },
        prev: function(e) {
            return r(e, "previousSibling")
        },
        nextAll: function(e) {
            return re.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return re.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return re.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return re.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return re.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return re.sibling(e.firstChild)
        },
        contents: function(e) {
            return re.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : re.merge([], e.childNodes)
        }
    }, function(e, t) {
        re.fn[e] = function(n, i) {
            var r = re.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = re.filter(i, r)), this.length > 1 && (ye[e] || (r = re.unique(r)), ve.test(e) && (r = r.reverse())), this.pushStack(r)
        }
    });
    var be = /\S+/g,
        xe = {};
    re.Callbacks = function(e) {
        e = "string" == typeof e ? xe[e] || o(e) : re.extend({}, e);
        var t, n, i, r, a, s, l = [],
            u = !e.once && [],
            c = function(o) {
                for (n = e.memory && o, i = !0, a = s || 0, s = 0, r = l.length, t = !0; l && r > a; a++)
                    if (l[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                        n = !1;
                        break
                    }
                t = !1, l && (u ? u.length && c(u.shift()) : n ? l = [] : d.disable())
            },
            d = {
                add: function() {
                    if (l) {
                        var i = l.length;
                        ! function t(n) {
                            re.each(n, function(n, i) {
                                var r = re.type(i);
                                "function" === r ? e.unique && d.has(i) || l.push(i) : i && i.length && "string" !== r && t(i)
                            })
                        }(arguments), t ? r = l.length : n && (s = i, c(n))
                    }
                    return this
                },
                remove: function() {
                    return l && re.each(arguments, function(e, n) {
                        for (var i;
                            (i = re.inArray(n, l, i)) > -1;) l.splice(i, 1), t && (r >= i && r--, a >= i && a--)
                    }), this
                },
                has: function(e) {
                    return e ? re.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], r = 0, this
                },
                disable: function() {
                    return l = u = n = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return u = void 0, n || d.disable(), this
                },
                locked: function() {
                    return !u
                },
                fireWith: function(e, n) {
                    return !l || i && !u || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? u.push(n) : c(n)), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return d
    }, re.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", re.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", re.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", re.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return re.Deferred(function(n) {
                            re.each(t, function(t, o) {
                                var a = re.isFunction(e[t]) && e[t];
                                r[o[1]](function() {
                                    var e = a && a.apply(this, arguments);
                                    e && re.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? re.extend(e, i) : i
                    }
                },
                r = {};
            return i.pipe = i.then, re.each(t, function(e, o) {
                var a = o[2],
                    s = o[3];
                i[o[1]] = a.add, s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function() {
                    return r[o[0] + "With"](this === r ? i : this, arguments), this
                }, r[o[0] + "With"] = a.fireWith
            }), i.promise(r), e && e.call(r, r), r
        },
        when: function(e) {
            var t, n, i, r = 0,
                o = J.call(arguments),
                a = o.length,
                s = 1 !== a || e && re.isFunction(e.promise) ? a : 0,
                l = 1 === s ? e : re.Deferred(),
                u = function(e, n, i) {
                    return function(r) {
                        n[e] = this, i[e] = arguments.length > 1 ? J.call(arguments) : r, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                    }
                };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), i = new Array(a); a > r; r++) o[r] && re.isFunction(o[r].promise) ? o[r].promise().done(u(r, i, o)).fail(l.reject).progress(u(r, n, t)) : --s;
            return s || l.resolveWith(i, o), l.promise()
        }
    });
    var we;
    re.fn.ready = function(e) {
        return re.ready.promise().done(e), this
    }, re.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? re.readyWait++ : re.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--re.readyWait : !re.isReady) {
                if (!he.body) return setTimeout(re.ready);
                re.isReady = !0, e !== !0 && --re.readyWait > 0 || (we.resolveWith(he, [re]), re.fn.triggerHandler && (re(he).triggerHandler("ready"), re(he).off("ready")))
            }
        }
    }), re.ready.promise = function(t) {
        if (!we)
            if (we = re.Deferred(), "complete" === he.readyState) setTimeout(re.ready);
            else if (he.addEventListener) he.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1);
        else {
            he.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
            var n = !1;
            try {
                n = null == e.frameElement && he.documentElement
            } catch (e) {}
            n && n.doScroll && ! function e() {
                if (!re.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (t) {
                        return setTimeout(e, 50)
                    }
                    a(), re.ready()
                }
            }()
        }
        return we.promise(t)
    };
    var Te, ke = "undefined";
    for (Te in re(ne)) break;
    ne.ownLast = "0" !== Te, ne.inlineBlockNeedsLayout = !1, re(function() {
            var e, t, n, i;
            n = he.getElementsByTagName("body")[0], n && n.style && (t = he.createElement("div"), i = he.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== ke && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ne.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
        }),
        function() {
            var e = he.createElement("div");
            if (null == ne.deleteExpando) {
                ne.deleteExpando = !0;
                try {
                    delete e.test
                } catch (e) {
                    ne.deleteExpando = !1
                }
            }
            e = null
        }(), re.acceptData = function(e) {
            var t = re.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return (1 === n || 9 === n) && (!t || t !== !0 && e.getAttribute("classid") === t)
        };
    var Ce = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ee = /([A-Z])/g;
    re.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? re.cache[e[re.expando]] : e[re.expando], !!e && !u(e)
        },
        data: function(e, t, n) {
            return c(e, t, n)
        },
        removeData: function(e, t) {
            return d(e, t)
        },
        _data: function(e, t, n) {
            return c(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return d(e, t, !0)
        }
    }), re.fn.extend({
        data: function(e, t) {
            var n, i, r, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = re.data(o), 1 === o.nodeType && !re._data(o, "parsedAttrs"))) {
                    for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = re.camelCase(i.slice(5)), l(o, i, r[i])));
                    re._data(o, "parsedAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function() {
                re.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                re.data(this, e, t)
            }) : o ? l(o, e, re.data(o, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                re.removeData(this, e)
            })
        }
    }), re.extend({
        queue: function(e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = re._data(e, t), n && (!i || re.isArray(n) ? i = re._data(e, t, re.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = re.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = re._queueHooks(e, t),
                a = function() {
                    re.dequeue(e, t)
                };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return re._data(e, n) || re._data(e, n, {
                empty: re.Callbacks("once memory").add(function() {
                    re._removeData(e, t + "queue"), re._removeData(e, n)
                })
            })
        }
    }), re.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? re.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = re.queue(this, e, t);
                re._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && re.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                re.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                r = re.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = re._data(o[a], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
            return s(), r.promise(t)
        }
    });
    var Ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Se = ["Top", "Right", "Bottom", "Left"],
        je = function(e, t) {
            return e = t || e, "none" === re.css(e, "display") || !re.contains(e.ownerDocument, e)
        },
        Ae = re.access = function(e, t, n, i, r, o, a) {
            var s = 0,
                l = e.length,
                u = null == n;
            if ("object" === re.type(n)) {
                r = !0;
                for (s in n) re.access(e, t, s, n[s], !0, o, a)
            } else if (void 0 !== i && (r = !0, re.isFunction(i) || (a = !0), u && (a ? (t.call(e, i), t = null) : (u = t, t = function(e, t, n) {
                    return u.call(re(e), n)
                })), t))
                for (; l > s; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
            return r ? e : u ? t.call(e) : l ? t(e[0], n) : o
        },
        De = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = he.createElement("input"),
            t = he.createElement("div"),
            n = he.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ne.leadingWhitespace = 3 === t.firstChild.nodeType, ne.tbody = !t.getElementsByTagName("tbody").length, ne.htmlSerialize = !!t.getElementsByTagName("link").length, ne.html5Clone = "<:nav></:nav>" !== he.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), ne.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", ne.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ne.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
                ne.noCloneEvent = !1
            }), t.cloneNode(!0).click()), null == ne.deleteExpando) {
            ne.deleteExpando = !0;
            try {
                delete t.test
            } catch (e) {
                ne.deleteExpando = !1
            }
        }
    }(),
    function() {
        var t, n, i = he.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + t, (ne[t + "Bubbles"] = n in e) || (i.setAttribute(n, "t"), ne[t + "Bubbles"] = i.attributes[n].expando === !1);
        i = null
    }();
    var Le = /^(?:input|select|textarea)$/i,
        He = /^key/,
        _e = /^(?:mouse|pointer|contextmenu)|click/,
        Me = /^(?:focusinfocus|focusoutblur)$/,
        Oe = /^([^.]*)(?:\.(.+)|)$/;
    re.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var o, a, s, l, u, c, d, f, p, h, m, g = re._data(e);
            if (g) {
                for (n.handler && (l = n, n = l.handler, r = l.selector), n.guid || (n.guid = re.guid++), (a = g.events) || (a = g.events = {}), (c = g.handle) || (c = g.handle = function(e) {
                        return typeof re === ke || e && re.event.triggered === e.type ? void 0 : re.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = e), t = (t || "").match(be) || [""], s = t.length; s--;) o = Oe.exec(t[s]) || [], p = m = o[1], h = (o[2] || "").split(".").sort(), p && (u = re.event.special[p] || {}, p = (r ? u.delegateType : u.bindType) || p, u = re.event.special[p] || {}, d = re.extend({
                    type: p,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && re.expr.match.needsContext.test(r),
                    namespace: h.join(".")
                }, l), (f = a[p]) || (f = a[p] = [], f.delegateCount = 0, u.setup && u.setup.call(e, i, h, c) !== !1 || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, d) : f.push(d), re.event.global[p] = !0);
                e = null
            }
        },
        remove: function(e, t, n, i, r) {
            var o, a, s, l, u, c, d, f, p, h, m, g = re.hasData(e) && re._data(e);
            if (g && (c = g.events)) {
                for (t = (t || "").match(be) || [""], u = t.length; u--;)
                    if (s = Oe.exec(t[u]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (d = re.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, f = c[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length; o--;) a = f[o], !r && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
                        l && !f.length && (d.teardown && d.teardown.call(e, h, g.handle) !== !1 || re.removeEvent(e, p, g.handle), delete c[p])
                    } else
                        for (p in c) re.event.remove(e, p + t[u], n, i, !0);
                re.isEmptyObject(c) && (delete g.handle, re._removeData(e, "events"))
            }
        },
        trigger: function(t, n, i, r) {
            var o, a, s, l, u, c, d, f = [i || he],
                p = te.call(t, "type") ? t.type : t,
                h = te.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = c = i = i || he, 3 !== i.nodeType && 8 !== i.nodeType && !Me.test(p + re.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()), a = p.indexOf(":") < 0 && "on" + p, t = t[re.expando] ? t : new re.Event(p, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : re.makeArray(n, [t]), u = re.event.special[p] || {}, r || !u.trigger || u.trigger.apply(i, n) !== !1)) {
                if (!r && !u.noBubble && !re.isWindow(i)) {
                    for (l = u.delegateType || p, Me.test(l + p) || (s = s.parentNode); s; s = s.parentNode) f.push(s), c = s;
                    c === (i.ownerDocument || he) && f.push(c.defaultView || c.parentWindow || e)
                }
                for (d = 0;
                    (s = f[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? l : u.bindType || p, o = (re._data(s, "events") || {})[t.type] && re._data(s, "handle"), o && o.apply(s, n), o = a && s[a], o && o.apply && re.acceptData(s) && (t.result = o.apply(s, n), t.result === !1 && t.preventDefault());
                if (t.type = p, !r && !t.isDefaultPrevented() && (!u._default || u._default.apply(f.pop(), n) === !1) && re.acceptData(i) && a && i[p] && !re.isWindow(i)) {
                    c = i[a], c && (i[a] = null), re.event.triggered = p;
                    try {
                        i[p]()
                    } catch (e) {}
                    re.event.triggered = void 0, c && (i[a] = c)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = re.event.fix(e);
            var t, n, i, r, o, a = [],
                s = J.call(arguments),
                l = (re._data(this, "events") || {})[e.type] || [],
                u = re.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                for (a = re.event.handlers.call(this, e, l), t = 0;
                    (r = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = r.elem, o = 0;
                        (i = r.handlers[o++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, n = ((re.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, a = [],
                s = t.delegateCount,
                l = e.target;
            if (s && l.nodeType && (!e.button || "click" !== e.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (r = [], o = 0; s > o; o++) i = t[o], n = i.selector + " ", void 0 === r[n] && (r[n] = i.needsContext ? re(n, this).index(l) >= 0 : re.find(n, this, null, [l]).length), r[n] && r.push(i);
                        r.length && a.push({
                            elem: l,
                            handlers: r
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        fix: function(e) {
            if (e[re.expando]) return e;
            var t, n, i, r = e.type,
                o = e,
                a = this.fixHooks[r];
            for (a || (this.fixHooks[r] = a = _e.test(r) ? this.mouseHooks : He.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new re.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || he), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, r, o = t.button,
                    a = t.fromElement;
                return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || he, r = i.documentElement, n = i.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== h() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === h() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return re.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return re.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, i) {
            var r = re.extend(new re.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? re.event.trigger(r, null, t) : re.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
        }
    }, re.removeEvent = he.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var i = "on" + t;
        e.detachEvent && (typeof e[i] === ke && (e[i] = null), e.detachEvent(i, n))
    }, re.Event = function(e, t) {
        return this instanceof re.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? f : p) : this.type = e, t && re.extend(this, t), this.timeStamp = e && e.timeStamp || re.now(), void(this[re.expando] = !0)) : new re.Event(e, t)
    }, re.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = f, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = f, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = f, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, re.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        re.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this,
                    r = e.relatedTarget,
                    o = e.handleObj;
                return (!r || r !== i && !re.contains(i, r)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), ne.submitBubbles || (re.event.special.submit = {
        setup: function() {
            return !re.nodeName(this, "form") && void re.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = re.nodeName(t, "input") || re.nodeName(t, "button") ? t.form : void 0;
                n && !re._data(n, "submitBubbles") && (re.event.add(n, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), re._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && re.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return !re.nodeName(this, "form") && void re.event.remove(this, "._submit")
        }
    }), ne.changeBubbles || (re.event.special.change = {
        setup: function() {
            return Le.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (re.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), re.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), re.event.simulate("change", this, e, !0)
            })), !1) : void re.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Le.test(t.nodeName) && !re._data(t, "changeBubbles") && (re.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || re.event.simulate("change", this.parentNode, e, !0)
                }), re._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return re.event.remove(this, "._change"), !Le.test(this.nodeName)
        }
    }), ne.focusinBubbles || re.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            re.event.simulate(t, e.target, re.event.fix(e), !0)
        };
        re.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    r = re._data(i, t);
                r || i.addEventListener(e, n, !0), re._data(i, t, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    r = re._data(i, t) - 1;
                r ? re._data(i, t, r) : (i.removeEventListener(e, n, !0), re._removeData(i, t))
            }
        }
    }), re.fn.extend({
        on: function(e, t, n, i, r) {
            var o, a;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (o in e) this.on(o, t, n, e[o], r);
                return this
            }
            if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1) i = p;
            else if (!i) return this;
            return 1 === r && (a = i, i = function(e) {
                return re().off(e), a.apply(this, arguments)
            }, i.guid = a.guid || (a.guid = re.guid++)), this.each(function() {
                re.event.add(this, e, i, n, t)
            })
        },
        one: function(e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, re(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = p), this.each(function() {
                re.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                re.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? re.event.trigger(e, t, n, !0) : void 0
        }
    });
    var qe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Pe = / jQuery\d+="(?:null|\d+)"/g,
        Be = new RegExp("<(?:" + qe + ")[\\s/>]", "i"),
        Fe = /^\s+/,
        Re = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Ie = /<([\w:]+)/,
        We = /<tbody/i,
        $e = /<|&#?\w+;/,
        ze = /<(?:script|style|link)/i,
        Xe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ve = /^$|\/(?:java|ecma)script/i,
        Ue = /^true\/(.*)/,
        Ye = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Je = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Qe = m(he),
        Ge = Qe.appendChild(he.createElement("div"));
    Je.optgroup = Je.option, Je.tbody = Je.tfoot = Je.colgroup = Je.caption = Je.thead, Je.th = Je.td, re.extend({
        clone: function(e, t, n) {
            var i, r, o, a, s, l = re.contains(e.ownerDocument, e);
            if (ne.html5Clone || re.isXMLDoc(e) || !Be.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Ge.innerHTML = e.outerHTML, Ge.removeChild(o = Ge.firstChild)), !(ne.noCloneEvent && ne.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || re.isXMLDoc(e)))
                for (i = g(o), s = g(e), a = 0; null != (r = s[a]); ++a) i[a] && k(r, i[a]);
            if (t)
                if (n)
                    for (s = s || g(e), i = i || g(o), a = 0; null != (r = s[a]); a++) T(r, i[a]);
                else T(e, o);
            return i = g(o, "script"), i.length > 0 && w(i, !l && g(e, "script")), i = s = r = null, o
        },
        buildFragment: function(e, t, n, i) {
            for (var r, o, a, s, l, u, c, d = e.length, f = m(t), p = [], h = 0; d > h; h++)
                if (o = e[h], o || 0 === o)
                    if ("object" === re.type(o)) re.merge(p, o.nodeType ? [o] : o);
                    else if ($e.test(o)) {
                for (s = s || f.appendChild(t.createElement("div")), l = (Ie.exec(o) || ["", ""])[1].toLowerCase(), c = Je[l] || Je._default, s.innerHTML = c[1] + o.replace(Re, "<$1></$2>") + c[2], r = c[0]; r--;) s = s.lastChild;
                if (!ne.leadingWhitespace && Fe.test(o) && p.push(t.createTextNode(Fe.exec(o)[0])), !ne.tbody)
                    for (o = "table" !== l || We.test(o) ? "<table>" !== c[1] || We.test(o) ? 0 : s : s.firstChild, r = o && o.childNodes.length; r--;) re.nodeName(u = o.childNodes[r], "tbody") && !u.childNodes.length && o.removeChild(u);
                for (re.merge(p, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = f.lastChild
            } else p.push(t.createTextNode(o));
            for (s && f.removeChild(s), ne.appendChecked || re.grep(g(p, "input"), v), h = 0; o = p[h++];)
                if ((!i || -1 === re.inArray(o, i)) && (a = re.contains(o.ownerDocument, o), s = g(f.appendChild(o), "script"), a && w(s), n))
                    for (r = 0; o = s[r++];) Ve.test(o.type || "") && n.push(o);
            return s = null, f
        },
        cleanData: function(e, t) {
            for (var n, i, r, o, a = 0, s = re.expando, l = re.cache, u = ne.deleteExpando, c = re.event.special; null != (n = e[a]); a++)
                if ((t || re.acceptData(n)) && (r = n[s], o = r && l[r])) {
                    if (o.events)
                        for (i in o.events) c[i] ? re.event.remove(n, i) : re.removeEvent(n, i, o.handle);
                    l[r] && (delete l[r], u ? delete n[s] : typeof n.removeAttribute !== ke ? n.removeAttribute(s) : n[s] = null, Y.push(r))
                }
        }
    }), re.fn.extend({
        text: function(e) {
            return Ae(this, function(e) {
                return void 0 === e ? re.text(this) : this.empty().append((this[0] && this[0].ownerDocument || he).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, i = e ? re.filter(e, this) : this, r = 0; null != (n = i[r]); r++) t || 1 !== n.nodeType || re.cleanData(g(n)), n.parentNode && (t && re.contains(n.ownerDocument, n) && w(g(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && re.cleanData(g(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && re.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return re.clone(this, e, t)
            })
        },
        html: function(e) {
            return Ae(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Pe, "") : void 0;
                if (!("string" != typeof e || ze.test(e) || !ne.htmlSerialize && Be.test(e) || !ne.leadingWhitespace && Fe.test(e) || Je[(Ie.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Re, "<$1></$2>");
                    try {
                        for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (re.cleanData(g(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, re.cleanData(g(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = Q.apply([], e);
            var n, i, r, o, a, s, l = 0,
                u = this.length,
                c = this,
                d = u - 1,
                f = e[0],
                p = re.isFunction(f);
            if (p || u > 1 && "string" == typeof f && !ne.checkClone && Xe.test(f)) return this.each(function(n) {
                var i = c.eq(n);
                p && (e[0] = f.call(this, n, i.html())), i.domManip(e, t)
            });
            if (u && (s = re.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                for (o = re.map(g(s, "script"), b), r = o.length; u > l; l++) i = s, l !== d && (i = re.clone(i, !0, !0), r && re.merge(o, g(i, "script"))), t.call(this[l], i, l);
                if (r)
                    for (a = o[o.length - 1].ownerDocument, re.map(o, x), l = 0; r > l; l++) i = o[l], Ve.test(i.type || "") && !re._data(i, "globalEval") && re.contains(a, i) && (i.src ? re._evalUrl && re._evalUrl(i.src) : re.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Ye, "")));
                s = n = null
            }
            return this
        }
    }), re.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        re.fn[e] = function(e) {
            for (var n, i = 0, r = [], o = re(e), a = o.length - 1; a >= i; i++) n = i === a ? this : this.clone(!0), re(o[i])[t](n), G.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Ke, Ze = {};
    ! function() {
        var e;
        ne.shrinkWrapBlocks = function() {
            if (null != e) return e;
            e = !1;
            var t, n, i;
            return n = he.getElementsByTagName("body")[0], n && n.style ? (t = he.createElement("div"), i = he.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== ke && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(he.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0
        }
    }();
    var et, tt, nt = /^margin/,
        it = new RegExp("^(" + Ne + ")(?!px)[a-z%]+$", "i"),
        rt = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (et = function(t) {
        return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
    }, tt = function(e, t, n) {
        var i, r, o, a, s = e.style;
        return n = n || et(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || re.contains(e.ownerDocument, e) || (a = re.style(e, t)), it.test(a) && nt.test(t) && (i = s.width, r = s.minWidth,
            o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 === a ? a : a + ""
    }) : he.documentElement.currentStyle && (et = function(e) {
        return e.currentStyle
    }, tt = function(e, t, n) {
        var i, r, o, a, s = e.style;
        return n = n || et(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), it.test(a) && !rt.test(t) && (i = s.left, r = e.runtimeStyle, o = r && r.left, o && (r.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = i, o && (r.left = o)), void 0 === a ? a : a + "" || "auto"
    }), ! function() {
        function t() {
            var t, n, i, r;
            n = he.getElementsByTagName("body")[0], n && n.style && (t = he.createElement("div"), i = he.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = a = !1, l = !0, e.getComputedStyle && (o = "1%" !== (e.getComputedStyle(t, null) || {}).top, a = "4px" === (e.getComputedStyle(t, null) || {
                width: "4px"
            }).width, r = t.appendChild(he.createElement("div")), r.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", r.style.marginRight = r.style.width = "0", t.style.width = "1px", l = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight), t.removeChild(r)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = t.getElementsByTagName("td"), r[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === r[0].offsetHeight, s && (r[0].style.display = "", r[1].style.display = "none", s = 0 === r[0].offsetHeight), n.removeChild(i))
        }
        var n, i, r, o, a, s, l;
        n = he.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = n.getElementsByTagName("a")[0], (i = r && r.style) && (i.cssText = "float:left;opacity:.5", ne.opacity = "0.5" === i.opacity, ne.cssFloat = !!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === n.style.backgroundClip, ne.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, re.extend(ne, {
            reliableHiddenOffsets: function() {
                return null == s && t(), s
            },
            boxSizingReliable: function() {
                return null == a && t(), a
            },
            pixelPosition: function() {
                return null == o && t(), o
            },
            reliableMarginRight: function() {
                return null == l && t(), l
            }
        }))
    }(), re.swap = function(e, t, n, i) {
        var r, o, a = {};
        for (o in t) a[o] = e.style[o], e.style[o] = t[o];
        r = n.apply(e, i || []);
        for (o in t) e.style[o] = a[o];
        return r
    };
    var ot = /alpha\([^)]*\)/i,
        at = /opacity\s*=\s*([^)]*)/,
        st = /^(none|table(?!-c[ea]).+)/,
        lt = new RegExp("^(" + Ne + ")(.*)$", "i"),
        ut = new RegExp("^([+-])=(" + Ne + ")", "i"),
        ct = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        dt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        ft = ["Webkit", "O", "Moz", "ms"];
    re.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = tt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: ne.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, a, s = re.camelCase(t),
                    l = e.style;
                if (t = re.cssProps[s] || (re.cssProps[s] = S(l, s)), a = re.cssHooks[t] || re.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : l[t];
                if (o = typeof n, "string" === o && (r = ut.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(re.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || re.cssNumber[s] || (n += "px"), ne.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, i))))) try {
                    l[t] = n
                } catch (e) {}
            }
        },
        css: function(e, t, n, i) {
            var r, o, a, s = re.camelCase(t);
            return t = re.cssProps[s] || (re.cssProps[s] = S(e.style, s)), a = re.cssHooks[t] || re.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = tt(e, t, i)), "normal" === o && t in dt && (o = dt[t]), "" === n || n ? (r = parseFloat(o), n === !0 || re.isNumeric(r) ? r || 0 : o) : o
        }
    }), re.each(["height", "width"], function(e, t) {
        re.cssHooks[t] = {
            get: function(e, n, i) {
                return n ? st.test(re.css(e, "display")) && 0 === e.offsetWidth ? re.swap(e, ct, function() {
                    return L(e, t, i)
                }) : L(e, t, i) : void 0
            },
            set: function(e, n, i) {
                var r = i && et(e);
                return A(e, n, i ? D(e, t, i, ne.boxSizing && "border-box" === re.css(e, "boxSizing", !1, r), r) : 0)
            }
        }
    }), ne.opacity || (re.cssHooks.opacity = {
        get: function(e, t) {
            return at.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                i = e.currentStyle,
                r = re.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = i && i.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === re.trim(o.replace(ot, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = ot.test(o) ? o.replace(ot, r) : o + " " + r)
        }
    }), re.cssHooks.marginRight = N(ne.reliableMarginRight, function(e, t) {
        return t ? re.swap(e, {
            display: "inline-block"
        }, tt, [e, "marginRight"]) : void 0
    }), re.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        re.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[e + Se[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, nt.test(e) || (re.cssHooks[e + t].set = A)
    }), re.fn.extend({
        css: function(e, t) {
            return Ae(this, function(e, t, n) {
                var i, r, o = {},
                    a = 0;
                if (re.isArray(t)) {
                    for (i = et(e), r = t.length; r > a; a++) o[t[a]] = re.css(e, t[a], !1, i);
                    return o
                }
                return void 0 !== n ? re.style(e, t, n) : re.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return j(this, !0)
        },
        hide: function() {
            return j(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                je(this) ? re(this).show() : re(this).hide()
            })
        }
    }), re.Tween = H, H.prototype = {
        constructor: H,
        init: function(e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (re.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = H.propHooks[this.prop];
            return e && e.get ? e.get(this) : H.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = H.propHooks[this.prop];
            return this.options.duration ? this.pos = t = re.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : H.propHooks._default.set(this), this
        }
    }, H.prototype.init.prototype = H.prototype, H.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = re.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                re.fx.step[e.prop] ? re.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[re.cssProps[e.prop]] || re.cssHooks[e.prop]) ? re.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, re.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, re.fx = H.prototype.init, re.fx.step = {};
    var pt, ht, mt = /^(?:toggle|show|hide)$/,
        gt = new RegExp("^(?:([+-])=|)(" + Ne + ")([a-z%]*)$", "i"),
        vt = /queueHooks$/,
        yt = [q],
        bt = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    i = n.cur(),
                    r = gt.exec(t),
                    o = r && r[3] || (re.cssNumber[e] ? "" : "px"),
                    a = (re.cssNumber[e] || "px" !== o && +i) && gt.exec(re.css(n.elem, e)),
                    s = 1,
                    l = 20;
                if (a && a[3] !== o) {
                    o = o || a[3], r = r || [], a = +i || 1;
                    do s = s || ".5", a /= s, re.style(n.elem, e, a + o); while (s !== (s = n.cur() / i) && 1 !== s && --l)
                }
                return r && (a = n.start = +a || +i || 0, n.unit = o, n.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2]), n
            }]
        };
    re.Animation = re.extend(B, {
            tweener: function(e, t) {
                re.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, i = 0, r = e.length; r > i; i++) n = e[i], bt[n] = bt[n] || [], bt[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? yt.unshift(e) : yt.push(e)
            }
        }), re.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? re.extend({}, e) : {
                complete: n || !n && t || re.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !re.isFunction(t) && t
            };
            return i.duration = re.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in re.fx.speeds ? re.fx.speeds[i.duration] : re.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                re.isFunction(i.old) && i.old.call(this), i.queue && re.dequeue(this, i.queue)
            }, i
        }, re.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(je).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var r = re.isEmptyObject(e),
                    o = re.speed(t, n, i),
                    a = function() {
                        var t = B(this, re.extend({}, e), o);
                        (r || re._data(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        r = null != e && e + "queueHooks",
                        o = re.timers,
                        a = re._data(this);
                    if (r) a[r] && a[r].stop && i(a[r]);
                    else
                        for (r in a) a[r] && a[r].stop && vt.test(r) && i(a[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                    (t || !n) && re.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = re._data(this),
                        i = n[e + "queue"],
                        r = n[e + "queueHooks"],
                        o = re.timers,
                        a = i ? i.length : 0;
                    for (n.finish = !0, re.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; a > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), re.each(["toggle", "show", "hide"], function(e, t) {
            var n = re.fn[t];
            re.fn[t] = function(e, i, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(M(t, !0), e, i, r)
            }
        }), re.each({
            slideDown: M("show"),
            slideUp: M("hide"),
            slideToggle: M("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            re.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), re.timers = [], re.fx.tick = function() {
            var e, t = re.timers,
                n = 0;
            for (pt = re.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
            t.length || re.fx.stop(), pt = void 0
        }, re.fx.timer = function(e) {
            re.timers.push(e), e() ? re.fx.start() : re.timers.pop()
        }, re.fx.interval = 13, re.fx.start = function() {
            ht || (ht = setInterval(re.fx.tick, re.fx.interval))
        }, re.fx.stop = function() {
            clearInterval(ht), ht = null
        }, re.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, re.fn.delay = function(e, t) {
            return e = re.fx ? re.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var i = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(i)
                }
            })
        },
        function() {
            var e, t, n, i, r;
            t = he.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = t.getElementsByTagName("a")[0], n = he.createElement("select"), r = n.appendChild(he.createElement("option")), e = t.getElementsByTagName("input")[0], i.style.cssText = "top:1px", ne.getSetAttribute = "t" !== t.className, ne.style = /top/.test(i.getAttribute("style")), ne.hrefNormalized = "/a" === i.getAttribute("href"), ne.checkOn = !!e.value, ne.optSelected = r.selected, ne.enctype = !!he.createElement("form").enctype, n.disabled = !0, ne.optDisabled = !r.disabled, e = he.createElement("input"), e.setAttribute("value", ""), ne.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ne.radioValue = "t" === e.value
        }();
    var xt = /\r/g;
    re.fn.extend({
        val: function(e) {
            var t, n, i, r = this[0];
            return arguments.length ? (i = re.isFunction(e), this.each(function(n) {
                var r;
                1 === this.nodeType && (r = i ? e.call(this, n, re(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : re.isArray(r) && (r = re.map(r, function(e) {
                    return null == e ? "" : e + ""
                })), t = re.valHooks[this.type] || re.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            })) : r ? (t = re.valHooks[r.type] || re.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(xt, "") : null == n ? "" : n)) : void 0
        }
    }), re.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = re.find.attr(e, "value");
                    return null != t ? t : re.trim(re.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, a = o ? null : [], s = o ? r + 1 : i.length, l = 0 > r ? s : o ? r : 0; s > l; l++)
                        if (n = i[l], !(!n.selected && l !== r || (ne.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && re.nodeName(n.parentNode, "optgroup"))) {
                            if (t = re(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = re.makeArray(t), a = r.length; a--;)
                        if (i = r[a], re.inArray(re.valHooks.option.get(i), o) >= 0) try {
                            i.selected = n = !0
                        } catch (e) {
                            i.scrollHeight
                        } else i.selected = !1;
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }), re.each(["radio", "checkbox"], function() {
        re.valHooks[this] = {
            set: function(e, t) {
                return re.isArray(t) ? e.checked = re.inArray(re(e).val(), t) >= 0 : void 0
            }
        }, ne.checkOn || (re.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var wt, Tt, kt = re.expr.attrHandle,
        Ct = /^(?:checked|selected)$/i,
        Et = ne.getSetAttribute,
        Nt = ne.input;
    re.fn.extend({
        attr: function(e, t) {
            return Ae(this, re.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                re.removeAttr(this, e)
            })
        }
    }), re.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === ke ? re.prop(e, t, n) : (1 === o && re.isXMLDoc(e) || (t = t.toLowerCase(), i = re.attrHooks[t] || (re.expr.match.bool.test(t) ? Tt : wt)), void 0 === n ? i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = re.find.attr(e, t), null == r ? void 0 : r) : null !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : void re.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, i, r = 0,
                o = t && t.match(be);
            if (o && 1 === e.nodeType)
                for (; n = o[r++];) i = re.propFix[n] || n, re.expr.match.bool.test(n) ? Nt && Et || !Ct.test(n) ? e[i] = !1 : e[re.camelCase("default-" + n)] = e[i] = !1 : re.attr(e, n, ""), e.removeAttribute(Et ? n : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ne.radioValue && "radio" === t && re.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), Tt = {
        set: function(e, t, n) {
            return t === !1 ? re.removeAttr(e, n) : Nt && Et || !Ct.test(n) ? e.setAttribute(!Et && re.propFix[n] || n, n) : e[re.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, re.each(re.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = kt[t] || re.find.attr;
        kt[t] = Nt && Et || !Ct.test(t) ? function(e, t, i) {
            var r, o;
            return i || (o = kt[t], kt[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, kt[t] = o), r
        } : function(e, t, n) {
            return n ? void 0 : e[re.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), Nt && Et || (re.attrHooks.value = {
        set: function(e, t, n) {
            return re.nodeName(e, "input") ? void(e.defaultValue = t) : wt && wt.set(e, t, n)
        }
    }), Et || (wt = {
        set: function(e, t, n) {
            var i = e.getAttributeNode(n);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    }, kt.id = kt.name = kt.coords = function(e, t, n) {
        var i;
        return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
    }, re.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },
        set: wt.set
    }, re.attrHooks.contenteditable = {
        set: function(e, t, n) {
            wt.set(e, "" !== t && t, n)
        }
    }, re.each(["width", "height"], function(e, t) {
        re.attrHooks[t] = {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })), ne.style || (re.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var St = /^(?:input|select|textarea|button|object)$/i,
        jt = /^(?:a|area)$/i;
    re.fn.extend({
        prop: function(e, t) {
            return Ae(this, re.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = re.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0, delete this[e]
                } catch (e) {}
            })
        }
    }), re.extend({
        propFix: {
            for: "htmlFor",
            class: "className"
        },
        prop: function(e, t, n) {
            var i, r, o, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !re.isXMLDoc(e), o && (t = re.propFix[t] || t, r = re.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = re.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : St.test(e.nodeName) || jt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), ne.hrefNormalized || re.each(["href", "src"], function(e, t) {
        re.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), ne.optSelected || (re.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), re.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        re.propFix[this.toLowerCase()] = this
    }), ne.enctype || (re.propFix.enctype = "encoding");
    var At = /[\t\r\n\f]/g;
    re.fn.extend({
        addClass: function(e) {
            var t, n, i, r, o, a, s = 0,
                l = this.length,
                u = "string" == typeof e && e;
            if (re.isFunction(e)) return this.each(function(t) {
                re(this).addClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(be) || []; l > s; s++)
                    if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(At, " ") : " ")) {
                        for (o = 0; r = t[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        a = re.trim(i), n.className !== a && (n.className = a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, r, o, a, s = 0,
                l = this.length,
                u = 0 === arguments.length || "string" == typeof e && e;
            if (re.isFunction(e)) return this.each(function(t) {
                re(this).removeClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(be) || []; l > s; s++)
                    if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(At, " ") : "")) {
                        for (o = 0; r = t[o++];)
                            for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
                        a = e ? re.trim(i) : "", n.className !== a && (n.className = a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(re.isFunction(e) ? function(n) {
                re(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function() {
                if ("string" === n)
                    for (var t, i = 0, r = re(this), o = e.match(be) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else(n === ke || "boolean" === n) && (this.className && re._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : re._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(At, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    }), re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        re.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), re.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var Dt = re.now(),
        Lt = /\?/,
        Ht = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    re.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, i = null,
            r = re.trim(t + "");
        return r && !re.trim(r.replace(Ht, function(e, t, r, o) {
            return n && t && (i = 0), 0 === i ? e : (n = r || t, i += !o - !r, "")
        })) ? Function("return " + r)() : re.error("Invalid JSON: " + t)
    }, re.parseXML = function(t) {
        var n, i;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (i = new DOMParser, n = i.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (e) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || re.error("Invalid XML: " + t), n
    };
    var _t, Mt, Ot = /#.*$/,
        qt = /([?&])_=[^&]*/,
        Pt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Bt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Ft = /^(?:GET|HEAD)$/,
        Rt = /^\/\//,
        It = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Wt = {},
        $t = {},
        zt = "*/".concat("*");
    try {
        Mt = location.href
    } catch (e) {
        Mt = he.createElement("a"), Mt.href = "", Mt = Mt.href
    }
    _t = It.exec(Mt.toLowerCase()) || [], re.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Mt,
            type: "GET",
            isLocal: Bt.test(_t[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": zt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": re.parseJSON,
                "text xml": re.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? I(I(e, re.ajaxSettings), t) : I(re.ajaxSettings, e)
        },
        ajaxPrefilter: F(Wt),
        ajaxTransport: F($t),
        ajax: function(e, t) {
            function n(e, t, n, i) {
                var r, c, v, y, x, T = t;
                2 !== b && (b = 2, s && clearTimeout(s), u = void 0, a = i || "", w.readyState = e > 0 ? 4 : 0, r = e >= 200 && 300 > e || 304 === e, n && (y = W(d, w, n)), y = $(d, y, w, r), r ? (d.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (re.lastModified[o] = x), x = w.getResponseHeader("etag"), x && (re.etag[o] = x)), 204 === e || "HEAD" === d.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state, c = y.data, v = y.error, r = !v)) : (v = T, (e || !T) && (T = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || T) + "", r ? h.resolveWith(f, [c, T, w]) : h.rejectWith(f, [w, T, v]), w.statusCode(g), g = void 0, l && p.trigger(r ? "ajaxSuccess" : "ajaxError", [w, d, r ? c : v]), m.fireWith(f, [w, T]), l && (p.trigger("ajaxComplete", [w, d]), --re.active || re.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var i, r, o, a, s, l, u, c, d = re.ajaxSetup({}, t),
                f = d.context || d,
                p = d.context && (f.nodeType || f.jquery) ? re(f) : re.event,
                h = re.Deferred(),
                m = re.Callbacks("once memory"),
                g = d.statusCode || {},
                v = {},
                y = {},
                b = 0,
                x = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!c)
                                for (c = {}; t = Pt.exec(a);) c[t[1].toLowerCase()] = t[2];
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = y[n] = y[n] || e, v[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (d.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) g[t] = [g[t], e[t]];
                            else w.always(e[w.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || x;
                        return u && u.abort(t), n(0, t), this
                    }
                };
            if (h.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, d.url = ((e || d.url || Mt) + "").replace(Ot, "").replace(Rt, _t[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = re.trim(d.dataType || "*").toLowerCase().match(be) || [""], null == d.crossDomain && (i = It.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === _t[1] && i[2] === _t[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (_t[3] || ("http:" === _t[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = re.param(d.data, d.traditional)), R(Wt, d, t, w), 2 === b) return w;
            l = re.event && d.global, l && 0 === re.active++ && re.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Ft.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (Lt.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = qt.test(o) ? o.replace(qt, "$1_=" + Dt++) : o + (Lt.test(o) ? "&" : "?") + "_=" + Dt++)), d.ifModified && (re.lastModified[o] && w.setRequestHeader("If-Modified-Since", re.lastModified[o]), re.etag[o] && w.setRequestHeader("If-None-Match", re.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", d.contentType), w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : d.accepts["*"]);
            for (r in d.headers) w.setRequestHeader(r, d.headers[r]);
            if (d.beforeSend && (d.beforeSend.call(f, w, d) === !1 || 2 === b)) return w.abort();
            x = "abort";
            for (r in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[r](d[r]);
            if (u = R($t, d, t, w)) {
                w.readyState = 1, l && p.trigger("ajaxSend", [w, d]), d.async && d.timeout > 0 && (s = setTimeout(function() {
                    w.abort("timeout")
                }, d.timeout));
                try {
                    b = 1, u.send(v, n)
                } catch (e) {
                    if (!(2 > b)) throw e;
                    n(-1, e)
                }
            } else n(-1, "No Transport");
            return w
        },
        getJSON: function(e, t, n) {
            return re.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return re.get(e, void 0, t, "script")
        }
    }), re.each(["get", "post"], function(e, t) {
        re[t] = function(e, n, i, r) {
            return re.isFunction(n) && (r = r || i, i = n, n = void 0), re.ajax({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            })
        }
    }), re._evalUrl = function(e) {
        return re.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, re.fn.extend({
        wrapAll: function(e) {
            if (re.isFunction(e)) return this.each(function(t) {
                re(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = re(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return this.each(re.isFunction(e) ? function(t) {
                re(this).wrapInner(e.call(this, t))
            } : function() {
                var t = re(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = re.isFunction(e);
            return this.each(function(n) {
                re(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                re.nodeName(this, "body") || re(this).replaceWith(this.childNodes)
            }).end()
        }
    }), re.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ne.reliableHiddenOffsets() && "none" === (e.style && e.style.display || re.css(e, "display"))
    }, re.expr.filters.visible = function(e) {
        return !re.expr.filters.hidden(e)
    };
    var Xt = /%20/g,
        Vt = /\[\]$/,
        Ut = /\r?\n/g,
        Yt = /^(?:submit|button|image|reset|file)$/i,
        Jt = /^(?:input|select|textarea|keygen)/i;
    re.param = function(e, t) {
        var n, i = [],
            r = function(e, t) {
                t = re.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = re.ajaxSettings && re.ajaxSettings.traditional), re.isArray(e) || e.jquery && !re.isPlainObject(e)) re.each(e, function() {
            r(this.name, this.value)
        });
        else
            for (n in e) z(n, e[n], t, r);
        return i.join("&").replace(Xt, "+")
    }, re.fn.extend({
        serialize: function() {
            return re.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = re.prop(this, "elements");
                return e ? re.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !re(this).is(":disabled") && Jt.test(this.nodeName) && !Yt.test(e) && (this.checked || !De.test(e))
            }).map(function(e, t) {
                var n = re(this).val();
                return null == n ? null : re.isArray(n) ? re.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Ut, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Ut, "\r\n")
                }
            }).get()
        }
    }), re.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && X() || V()
    } : X;
    var Qt = 0,
        Gt = {},
        Kt = re.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in Gt) Gt[e](void 0, !0)
    }), ne.cors = !!Kt && "withCredentials" in Kt, Kt = ne.ajax = !!Kt, Kt && re.ajaxTransport(function(e) {
        if (!e.crossDomain || ne.cors) {
            var t;
            return {
                send: function(n, i) {
                    var r, o = e.xhr(),
                        a = ++Qt;
                    if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (r in e.xhrFields) o[r] = e.xhrFields[r];
                    e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (r in n) void 0 !== n[r] && o.setRequestHeader(r, n[r] + "");
                    o.send(e.hasContent && e.data || null), t = function(n, r) {
                        var s, l, u;
                        if (t && (r || 4 === o.readyState))
                            if (delete Gt[a], t = void 0, o.onreadystatechange = re.noop, r) 4 !== o.readyState && o.abort();
                            else {
                                u = {}, s = o.status, "string" == typeof o.responseText && (u.text = o.responseText);
                                try {
                                    l = o.statusText
                                } catch (e) {
                                    l = ""
                                }
                                s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = u.text ? 200 : 404
                            }
                        u && i(s, l, u, o.getAllResponseHeaders())
                    }, e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = Gt[a] = t : t()
                },
                abort: function() {
                    t && t(void 0, !0)
                }
            }
        }
    }), re.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return re.globalEval(e), e
            }
        }
    }), re.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), re.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = he.head || re("head")[0] || he.documentElement;
            return {
                send: function(i, r) {
                    t = he.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || r(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var Zt = [],
        en = /(=)\?(?=&|$)|\?\?/;
    re.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Zt.pop() || re.expando + "_" + Dt++;
            return this[e] = !0, e
        }
    }), re.ajaxPrefilter("json jsonp", function(t, n, i) {
        var r, o, a, s = t.jsonp !== !1 && (en.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && en.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = re.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(en, "$1" + r) : t.jsonp !== !1 && (t.url += (Lt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
            return a || re.error(r + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
            a = arguments
        }, i.always(function() {
            e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, Zt.push(r)), a && re.isFunction(o) && o(a[0]), a = o = void 0
        }), "script") : void 0
    }), re.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || he;
        var i = de.exec(e),
            r = !n && [];
        return i ? [t.createElement(i[1])] : (i = re.buildFragment([e], t, r), r && r.length && re(r).remove(), re.merge([], i.childNodes))
    };
    var tn = re.fn.load;
    re.fn.load = function(e, t, n) {
        if ("string" != typeof e && tn) return tn.apply(this, arguments);
        var i, r, o, a = this,
            s = e.indexOf(" ");
        return s >= 0 && (i = re.trim(e.slice(s, e.length)), e = e.slice(0, s)), re.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && re.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments, a.html(i ? re("<div>").append(re.parseHTML(e)).find(i) : e)
        }).complete(n && function(e, t) {
            a.each(n, r || [e.responseText, t, e])
        }), this
    }, re.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        re.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), re.expr.filters.animated = function(e) {
        return re.grep(re.timers, function(t) {
            return e === t.elem
        }).length
    };
    var nn = e.document.documentElement;
    re.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, a, s, l, u, c = re.css(e, "position"),
                d = re(e),
                f = {};
            "static" === c && (e.style.position = "relative"), s = d.offset(), o = re.css(e, "top"), l = re.css(e, "left"), u = ("absolute" === c || "fixed" === c) && re.inArray("auto", [o, l]) > -1, u ? (i = d.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), re.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + r), "using" in t ? t.using.call(e, f) : d.css(f)
        }
    }, re.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                re.offset.setOffset(this, e, t)
            });
            var t, n, i = {
                    top: 0,
                    left: 0
                },
                r = this[0],
                o = r && r.ownerDocument;
            return o ? (t = o.documentElement, re.contains(t, r) ? (typeof r.getBoundingClientRect !== ke && (i = r.getBoundingClientRect()), n = U(o), {
                top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : i) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    i = this[0];
                return "fixed" === re.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), re.nodeName(e[0], "html") || (n = e.offset()), n.top += re.css(e[0], "borderTopWidth", !0), n.left += re.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - re.css(i, "marginTop", !0),
                    left: t.left - n.left - re.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || nn; e && !re.nodeName(e, "html") && "static" === re.css(e, "position");) e = e.offsetParent;
                return e || nn
            })
        }
    }), re.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = /Y/.test(t);
        re.fn[e] = function(i) {
            return Ae(this, function(e, i, r) {
                var o = U(e);
                return void 0 === r ? o ? t in o ? o[t] : o.document.documentElement[i] : e[i] : void(o ? o.scrollTo(n ? re(o).scrollLeft() : r, n ? r : re(o).scrollTop()) : e[i] = r)
            }, e, i, arguments.length, null)
        }
    }), re.each(["top", "left"], function(e, t) {
        re.cssHooks[t] = N(ne.pixelPosition, function(e, n) {
            return n ? (n = tt(e, t), it.test(n) ? re(e).position()[t] + "px" : n) : void 0
        })
    }), re.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        re.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            re.fn[i] = function(i, r) {
                var o = arguments.length && (n || "boolean" != typeof i),
                    a = n || (i === !0 || r === !0 ? "margin" : "border");
                return Ae(this, function(t, n, i) {
                    var r;
                    return re.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? re.css(t, n, a) : re.style(t, n, i, a)
                }, t, o ? i : void 0, o, null)
            }
        })
    }), re.fn.size = function() {
        return this.length
    }, re.fn.andSelf = re.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return re
    });
    var rn = e.jQuery,
        on = e.$;
    return re.noConflict = function(t) {
        return e.$ === re && (e.$ = on), t && e.jQuery === re && (e.jQuery = rn), re
    }, typeof t === ke && (e.jQuery = e.$ = re), re
});
var skel = function() {
    "use strict";
    var e = {
        breakpointIds: null,
        events: {},
        isInit: !1,
        obj: {
            attachments: {},
            breakpoints: {},
            head: null,
            states: {}
        },
        sd: "/",
        state: null,
        stateHandlers: {},
        stateId: "",
        vars: {},
        DOMReady: null,
        indexOf: null,
        isArray: null,
        iterate: null,
        matchesMedia: null,
        extend: function(t, n) {
            e.iterate(n, function(i) {
                e.isArray(n[i]) ? (e.isArray(t[i]) || (t[i] = []), e.extend(t[i], n[i])) : "object" == typeof n[i] ? ("object" != typeof t[i] && (t[i] = {}), e.extend(t[i], n[i])) : t[i] = n[i]
            })
        },
        newStyle: function(e) {
            var t = document.createElement("style");
            return t.type = "text/css", t.innerHTML = e, t
        },
        _canUse: null,
        canUse: function(t) {
            e._canUse || (e._canUse = document.createElement("div"));
            var n = e._canUse.style,
                i = t.charAt(0).toUpperCase() + t.slice(1);
            return t in n || "Moz" + i in n || "Webkit" + i in n || "O" + i in n || "ms" + i in n
        },
        on: function(t, n) {
            var i = t.split(/[\s]+/);
            return e.iterate(i, function(t) {
                var r = i[t];
                if (e.isInit) {
                    if ("init" == r) return void n();
                    if ("change" == r) n();
                    else {
                        var o = r.charAt(0);
                        if ("+" == o || "!" == o) {
                            var a = r.substring(1);
                            if (a in e.obj.breakpoints)
                                if ("+" == o && e.obj.breakpoints[a].active) n();
                                else if ("!" == o && !e.obj.breakpoints[a].active) return void n()
                        }
                    }
                }
                e.events[r] || (e.events[r] = []), e.events[r].push(n)
            }), e
        },
        trigger: function(t) {
            return e.events[t] && 0 != e.events[t].length ? (e.iterate(e.events[t], function(n) {
                e.events[t][n]()
            }), e) : void 0
        },
        breakpoint: function(t) {
            return e.obj.breakpoints[t]
        },
        breakpoints: function(t) {
            function n(e, t) {
                this.name = this.id = e, this.media = t, this.active = !1, this.wasActive = !1
            }
            return n.prototype.matches = function() {
                return e.matchesMedia(this.media)
            }, n.prototype.sync = function() {
                this.wasActive = this.active, this.active = this.matches()
            }, e.iterate(t, function(i) {
                e.obj.breakpoints[i] = new n(i, t[i])
            }), window.setTimeout(function() {
                e.poll()
            }, 0), e
        },
        addStateHandler: function(t, n) {
            e.stateHandlers[t] = n
        },
        callStateHandler: function(t) {
            var n = e.stateHandlers[t]();
            e.iterate(n, function(t) {
                e.state.attachments.push(n[t])
            })
        },
        changeState: function(t) {
            e.iterate(e.obj.breakpoints, function(t) {
                e.obj.breakpoints[t].sync()
            }), e.vars.lastStateId = e.stateId, e.stateId = t, e.breakpointIds = e.stateId === e.sd ? [] : e.stateId.substring(1).split(e.sd), e.obj.states[e.stateId] ? e.state = e.obj.states[e.stateId] : (e.obj.states[e.stateId] = {
                attachments: []
            }, e.state = e.obj.states[e.stateId], e.iterate(e.stateHandlers, e.callStateHandler)), e.detachAll(e.state.attachments), e.attachAll(e.state.attachments), e.vars.stateId = e.stateId, e.vars.state = e.state, e.trigger("change"), e.iterate(e.obj.breakpoints, function(t) {
                e.obj.breakpoints[t].active ? e.obj.breakpoints[t].wasActive || e.trigger("+" + t) : e.obj.breakpoints[t].wasActive && e.trigger("-" + t)
            })
        },
        generateStateConfig: function(t, n) {
            var i = {};
            return e.extend(i, t), e.iterate(e.breakpointIds, function(t) {
                e.extend(i, n[e.breakpointIds[t]])
            }), i
        },
        getStateId: function() {
            var t = "";
            return e.iterate(e.obj.breakpoints, function(n) {
                var i = e.obj.breakpoints[n];
                i.matches() && (t += e.sd + i.id)
            }), t
        },
        poll: function() {
            var t = "";
            t = e.getStateId(), "" === t && (t = e.sd), t !== e.stateId && e.changeState(t)
        },
        _attach: null,
        attach: function(t) {
            var n = e.obj.head,
                i = t.element;
            return (!i.parentNode || !i.parentNode.tagName) && (e._attach || (e._attach = n.firstChild), n.insertBefore(i, e._attach.nextSibling), t.permanent && (e._attach = i), !0)
        },
        attachAll: function(t) {
            var n = [];
            e.iterate(t, function(e) {
                n[t[e].priority] || (n[t[e].priority] = []), n[t[e].priority].push(t[e])
            }), n.reverse(), e.iterate(n, function(t) {
                e.iterate(n[t], function(i) {
                    e.attach(n[t][i])
                })
            })
        },
        detach: function(e) {
            var t = e.element;
            return !(e.permanent || !t.parentNode || t.parentNode && !t.parentNode.tagName) && (t.parentNode.removeChild(t), !0)
        },
        detachAll: function(t) {
            var n = {};
            e.iterate(t, function(e) {
                n[t[e].id] = !0
            }), e.iterate(e.obj.attachments, function(t) {
                t in n || e.detach(e.obj.attachments[t])
            })
        },
        attachment: function(t) {
            return t in e.obj.attachments ? e.obj.attachments[t] : null
        },
        newAttachment: function(t, n, i, r) {
            return e.obj.attachments[t] = {
                id: t,
                element: n,
                priority: i,
                permanent: r
            }
        },
        init: function() {
            e.initMethods(), e.initVars(), e.initEvents(), e.obj.head = document.getElementsByTagName("head")[0], e.isInit = !0, e.trigger("init")
        },
        initEvents: function() {
            e.on("resize", function() {
                e.poll()
            }), e.on("orientationChange", function() {
                e.poll()
            }), e.DOMReady(function() {
                e.trigger("ready")
            }), window.onload && e.on("load", window.onload), window.onload = function() {
                e.trigger("load")
            }, window.onresize && e.on("resize", window.onresize), window.onresize = function() {
                e.trigger("resize")
            }, window.onorientationchange && e.on("orientationChange", window.onorientationchange), window.onorientationchange = function() {
                e.trigger("orientationChange")
            }
        },
        initMethods: function() {
            document.addEventListener ? ! function(t, n) {
                e.DOMReady = n()
            }("domready", function() {
                function e(e) {
                    for (o = 1; e = n.shift();) e()
                }
                var t, n = [],
                    i = document,
                    r = "DOMContentLoaded",
                    o = /^loaded|^c/.test(i.readyState);
                return i.addEventListener(r, t = function() {
                        i.removeEventListener(r, t), e()
                    }),
                    function(e) {
                        o ? e() : n.push(e)
                    }
            }) : ! function(t, n) {
                e.DOMReady = n()
            }("domready", function(e) {
                function t(e) {
                    for (p = 1; e = i.shift();) e()
                }
                var n, i = [],
                    r = !1,
                    o = document,
                    a = o.documentElement,
                    s = a.doScroll,
                    l = "DOMContentLoaded",
                    u = "addEventListener",
                    c = "onreadystatechange",
                    d = "readyState",
                    f = s ? /^loaded|^c/ : /^loaded|c/,
                    p = f.test(o[d]);
                return o[u] && o[u](l, n = function() {
                    o.removeEventListener(l, n, r), t()
                }, r), s && o.attachEvent(c, n = function() {
                    /^c/.test(o[d]) && (o.detachEvent(c, n), t())
                }), e = s ? function(t) {
                    self != top ? p ? t() : i.push(t) : function() {
                        try {
                            a.doScroll("left")
                        } catch (n) {
                            return setTimeout(function() {
                                e(t)
                            }, 50)
                        }
                        t()
                    }()
                } : function(e) {
                    p ? e() : i.push(e)
                }
            }), Array.prototype.indexOf ? e.indexOf = function(e, t) {
                return e.indexOf(t)
            } : e.indexOf = function(e, t) {
                if ("string" == typeof e) return e.indexOf(t);
                var n, i, r = t ? t : 0;
                if (!this) throw new TypeError;
                if (i = this.length, 0 === i || r >= i) return -1;
                for (0 > r && (r = i - Math.abs(r)), n = r; i > n; n++)
                    if (this[n] === e) return n;
                return -1
            }, Array.isArray ? e.isArray = function(e) {
                return Array.isArray(e)
            } : e.isArray = function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }, Object.keys ? e.iterate = function(e, t) {
                if (!e) return [];
                var n, i = Object.keys(e);
                for (n = 0; i[n] && t(i[n], e[i[n]]) !== !1; n++);
            } : e.iterate = function(e, t) {
                if (!e) return [];
                var n;
                for (n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n) && t(n, e[n]) === !1) break
            }, window.matchMedia ? e.matchesMedia = function(e) {
                return "" == e || window.matchMedia(e).matches
            } : window.styleMedia || window.media ? e.matchesMedia = function(e) {
                if ("" == e) return !0;
                var t = window.styleMedia || window.media;
                return t.matchMedium(e || "all")
            } : window.getComputedStyle ? e.matchesMedia = function(e) {
                if ("" == e) return !0;
                var t = document.createElement("style"),
                    n = document.getElementsByTagName("script")[0],
                    i = null;
                t.type = "text/css", t.id = "matchmediajs-test", n.parentNode.insertBefore(t, n), i = "getComputedStyle" in window && window.getComputedStyle(t, null) || t.currentStyle;
                var r = "@media " + e + "{ #matchmediajs-test { width: 1px; } }";
                return t.styleSheet ? t.styleSheet.cssText = r : t.textContent = r, "1px" === i.width
            } : e.matchesMedia = function(e) {
                if ("" == e) return !0;
                var t, n, i, r, o = {
                        "min-width": null,
                        "max-width": null
                    },
                    a = !1;
                for (i = e.split(/\s+and\s+/), t = 0; t < i.length; t++) n = i[t], "(" == n.charAt(0) && (n = n.substring(1, n.length - 1), r = n.split(/:\s+/), 2 == r.length && (o[r[0].replace(/^\s+|\s+$/g, "")] = parseInt(r[1]), a = !0));
                if (!a) return !1;
                var s = document.documentElement.clientWidth,
                    l = document.documentElement.clientHeight;
                return !(null !== o["min-width"] && s < o["min-width"] || null !== o["max-width"] && s > o["max-width"] || null !== o["min-height"] && l < o["min-height"] || null !== o["max-height"] && l > o["max-height"])
            }, navigator.userAgent.match(/MSIE ([0-9]+)/) && RegExp.$1 < 9 && (e.newStyle = function(e) {
                var t = document.createElement("span");
                return t.innerHTML = '&nbsp;<style type="text/css">' + e + "</style>", t
            })
        },
        initVars: function() {
            var t, n, i, r = navigator.userAgent;
            t = "other", n = 0, i = [
                ["firefox", /Firefox\/([0-9\.]+)/],
                ["bb", /BlackBerry.+Version\/([0-9\.]+)/],
                ["bb", /BB[0-9]+.+Version\/([0-9\.]+)/],
                ["opera", /OPR\/([0-9\.]+)/],
                ["opera", /Opera\/([0-9\.]+)/],
                ["edge", /Edge\/([0-9\.]+)/],
                ["safari", /Version\/([0-9\.]+).+Safari/],
                ["chrome", /Chrome\/([0-9\.]+)/],
                ["ie", /MSIE ([0-9]+)/],
                ["ie", /Trident\/.+rv:([0-9]+)/]
            ], e.iterate(i, function(e, i) {
                return r.match(i[1]) ? (t = i[0], n = parseFloat(RegExp.$1), !1) : void 0
            }), e.vars.browser = t, e.vars.browserVersion = n, t = "other", n = 0, i = [
                ["ios", /([0-9_]+) like Mac OS X/, function(e) {
                    return e.replace("_", ".").replace("_", "")
                }],
                ["ios", /CPU like Mac OS X/, function(e) {
                    return 0
                }],
                ["android", /Android ([0-9\.]+)/, null],
                ["mac", /Macintosh.+Mac OS X ([0-9_]+)/, function(e) {
                    return e.replace("_", ".").replace("_", "")
                }],
                ["wp", /Windows Phone ([0-9\.]+)/, null],
                ["windows", /Windows NT ([0-9\.]+)/, null],
                ["bb", /BlackBerry.+Version\/([0-9\.]+)/, null],
                ["bb", /BB[0-9]+.+Version\/([0-9\.]+)/, null]
            ], e.iterate(i, function(e, i) {
                return r.match(i[1]) ? (t = i[0], n = parseFloat(i[2] ? i[2](RegExp.$1) : RegExp.$1), !1) : void 0
            }), e.vars.os = t, e.vars.osVersion = n, e.vars.IEVersion = "ie" == e.vars.browser ? e.vars.browserVersion : 99, e.vars.touch = "wp" == e.vars.os ? navigator.msMaxTouchPoints > 0 : !!("ontouchstart" in window), e.vars.mobile = "wp" == e.vars.os || "android" == e.vars.os || "ios" == e.vars.os || "bb" == e.vars.os
        }
    };
    return e.init(), e
}();
! function(e, t) {
    "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? module.exports = t() : e.skel = t()
}(this, function() {
    return skel
}),
function(e) {
    var t, n, i, r, o, a, s = e(window);
    skel.breakpoints({
        xxlarge: "(max-width: 1920px)",
        xlarge: "(max-width: 1680px)",
        large: "(max-width: 1280px)",
        medium: "(max-width: 960px)",
        xmedium: "(max-width: 920px)",
        small: "(max-width: 768px)",
        xsmall: "(max-width: 736px)",
        xxsmall: "(max-width: 480px)"
    }), e.fn.disableSelection = function() {
        return e(this).css("user-select", "none").css("-khtml-user-select", "none").css("-moz-user-select", "none").css("-o-user-select", "none").css("-webkit-user-select", "none")
    }, e.fn.panel = function(t) {
        if (0 == this.length) return r;
        if (this.length > 1) {
            for (var n = 0; n < this.length; n++) e(this[n]).panel(t);
            return r
        }
        var i, r = e(this),
            o = e("body"),
            a = e(window),
            s = r.attr("id");
        return i = e.extend({
            delay: 0,
            hideOnClick: !1,
            hideOnEscape: !1,
            hideOnSwipe: !1,
            resetScroll: !1,
            resetForms: !1,
            side: null,
            target: r,
            visibleClass: "visible"
        }, t), "jQuery" != typeof i.target && (i.target = e(i.target)), r._hide = function(e) {
            i.target.hasClass(i.visibleClass) && (e && (e.preventDefault(), e.stopPropagation()), i.target.removeClass(i.visibleClass), window.setTimeout(function() {
                i.resetScroll && r.scrollTop(0), i.resetForms && r.find("form").each(function() {
                    this.reset()
                })
            }, i.delay))
        }, r.css("-ms-overflow-style", "-ms-autohiding-scrollbar").css("-webkit-overflow-scrolling", "touch"), i.hideOnClick && (r.find("a").css("-webkit-tap-highlight-color", "rgba(0,0,0,0)"), r.on("click", "a", function(t) {
            var n = e(this),
                o = n.attr("href"),
                a = n.attr("target");
            o && "#" != o && "" != o && o != "#" + s && (t.preventDefault(), t.stopPropagation(), r._hide(), window.setTimeout(function() {
                "_blank" == a ? window.open(o) : window.location.href = o
            }, i.delay + 10))
        })), r.on("touchstart", function(e) {
            r.touchPosX = e.originalEvent.touches[0].pageX, r.touchPosY = e.originalEvent.touches[0].pageY
        }), r.on("touchmove", function(e) {
            if (null !== r.touchPosX && null !== r.touchPosY) {
                var t = r.touchPosX - e.originalEvent.touches[0].pageX,
                    n = r.touchPosY - e.originalEvent.touches[0].pageY,
                    o = r.outerHeight(),
                    a = r.get(0).scrollHeight - r.scrollTop();
                if (i.hideOnSwipe) {
                    var s = !1,
                        l = 20,
                        u = 50;
                    switch (i.side) {
                        case "left":
                            s = n < l && n > -1 * l && t > u;
                            break;
                        case "right":
                            s = n < l && n > -1 * l && t < -1 * u;
                            break;
                        case "top":
                            s = t < l && t > -1 * l && n > u;
                            break;
                        case "bottom":
                            s = t < l && t > -1 * l && n < -1 * u
                    }
                    if (s) return r.touchPosX = null, r.touchPosY = null, r._hide(), !1
                }(r.scrollTop() < 0 && n < 0 || a > o - 2 && a < o + 2 && n > 0) && (e.preventDefault(), e.stopPropagation())
            }
        }), r.on("click touchend touchstart touchmove", function(e) {
            e.stopPropagation()
        }), r.on("click", 'a[href="#' + s + '"]', function(e) {
            e.preventDefault(), e.stopPropagation(), i.target.removeClass(i.visibleClass)
        }), o.on("click touchend", function(e) {
            r._hide(e)
        }), o.on("click", 'a[href="#' + s + '"]', function(e) {
            e.preventDefault(), e.stopPropagation(), i.target.toggleClass(i.visibleClass)
        }), i.hideOnEscape && a.on("keydown", function(e) {
            27 == e.keyCode && r._hide(e)
        }), r
    }, e(function() {
        if (t = e("body"), n = e("#header"), i = e("#footer"), r = n.add(i), o = e("#main"), a = e(".item"), t.addClass("is-loading"), "ie" == skel.vars.browser && t.addClass("is-ie"), t.hasClass("is-demo")) {
            var o = e("#demo-main"),
                l = e("#demo-iframe"),
                u = e(".button.download.free"),
                c = skel.vars.mobile;
            if (c) {
                if (1 != l.data("responsive")) {
                    var d, f;
                    d = e('<div id="demo-iframe-alt"><div class="inner"><ul class="actions"><li><span class="button">Open in New Window</a></li></ul></div><div class="bg" style="background-image: url(\'' + l.data("thumbnail") + "')\"></div></div>").insertAfter(l), f = d.find(".button"), f.on("click", function(e) {
                        e.preventDefault(), e.stopPropagation(), window.open(l.attr("src"))
                    }), l.remove()
                }
                o.css("top", 0).css("position", "relative").css("width", "100%").css("height", "100vh")
            }
            var p, h, m = e('<div id="demo-modal"><section><h2>Downloading</h2><p>Like what we\'re doing here? Show your support!</p><ul class="actions vertical"><li><ul class="social"><li class="facebook"><div class="fb-like" data-href="http://templated.co" data-send="false" data-layout="button" data-width="100" data-show-faces="true"></div></li><li class="twitter"><a href="https://twitter.com/share" class="twitter-share-button" data-url="https://templated.co" data-text="TEMPLATED = awesome CSS, HTML5, and responsive site template freebies." data-count="horizontal">Tweet</a><script async src="https://platform.twitter.com/widgets.js"></script></li><li class="google-plus"><div class="g-plusone" data-size="medium" data-annotation="none" data-href="https://templated.co"></div></li></ul></li><li><a href="http://twitter.com/templatedco" class="button offsite">Follow @templatedco</a></li></ul><hr /><h3>Looking for more templates?</h3><p>Check out <strong><a href="https://pixelarity.com/?ref=4096128534" class="offsite">Pixelarity</a></strong>, a collection of <strong>90+</strong> premium responsive site templates with an <strong>attribution-free license</strong> and support for just <strong>$19</strong>!</p><ul class="actions vertical"><li><a href="https://pixelarity.com/?ref=4096128534" class="button special offsite">Visit Pixelarity</a></li></ul><div class="closer">&nbsp;</div></section></div>'),
                g = m.find("section"),
                v = m.find(".closer");
            m.hide().appendTo(t).disableSelection().on("click", function() {
                return m._close(), !0
            }), g.on("click", function(e) {
                e.stopPropagation()
            }), m.on("click", function(e) {
                return m._close(), !1
            }), v.on("click", function(e) {
                return m._close(), !1
            }), m._open = function(e) {
                window.clearTimeout(p), h = !0, m.fadeTo("fast", 1, function() {
                    "undefined" != typeof FB && "undefined" != typeof FB.XFBML && FB.XFBML.parse(), h = !1, p = window.setTimeout(function() {
                        "undefined" != typeof e && (window.location.href = e)
                    }, 1500)
                })
            }, m._close = function() {
                return !!m.is(":visible") && (window.clearTimeout(p), h = !0, void m.fadeTo("fast", 0, function() {
                    m.hide(), h = !1
                }))
            }, u.on("click", function(t) {
                if (!c) return m._open(e(this).attr("href")), !1
            }), s.on("keydown", function(e) {
                27 == e.keyCode && m._close()
            })
        } else {
            e('<div id="sidebarPanel"><a href="#sidebarPanel" class="closer"></a></div>').appendTo(t).panel({
                delay: 500,
                side: "left",
                target: t,
                hideOnSwipe: !0,
                hideOnClick: !0,
                resetScroll: !0,
                visibleClass: "is-sidebarPanel-visible"
            }), e('<div id="titleBar"><a href="#sidebarPanel" class="toggle"></a><span class="logo">TEMPLATED</span></div>').appendTo(t);
            var y = e("#sidebarPanel");
            skel.on("+medium", function() {
                    n.appendTo(y), i.appendTo(y)
                }).on("-medium", function() {
                    n.insertBefore(o), i.insertAfter(o)
                }), a.css("cursor", "pointer").on("click", function(t) {
                    return window.location.href = e(this).find("a").first().attr("href"), !1
                }), e(".featured-item").each(function() {
                    var t = e(this);
                    $image = t.find(".image"), $img = $image.children("img"), $img.clone().appendTo($image).attr("class", "bg")
                }),
                function() {
                    var t, n = e(window),
                        i = [],
                        r = 0,
                        o = -250,
                        a = function() {
                            var e, t, r = i.length,
                                a = n.scrollTop() + n.height() - o;
                            for (e = 0; e < r; e++) t = i[e], !t.state && a > t.o.offset().top && (t.state = !0, t.fn())
                        };
                    n.on("load", function() {
                        var i, o = e(".item .image");
                        n.on("scroll resize", function() {
                            window.clearTimeout(t), t = window.setTimeout(function() {
                                a()
                            }, r), i = o.first().width(), o.css("min-height", i - 1 + "px")
                        }).trigger("resize")
                    }), e.fn.onVisible = function(t, n) {
                        i.push({
                            o: e(this),
                            fn: t,
                            pad: n ? n : o,
                            state: !1
                        })
                    }
                }(), "wp" == skel.vars.os ? e(".item .image").each(function() {
                    var t = e(this);
                    $p = t.children(".placeholder"), src = $p.data("src"), $p.attr("src", src), t.addClass("is-cached")
                }) : e(".item .image").each(function() {
                    var t = e(this),
                        n = t.children(".placeholder"),
                        i = e('<img src="" class="placeholder" alt="" />'),
                        r = n.data("src");
                    t.onVisible(function() {
                        n.replaceWith(i.appendTo(t).attr("src", r)), i.on("load", function() {
                            t.addClass("is-loaded")
                        })
                    })
                })
        }
        e("a.offsite").attr("target", "_blank"),
            function(e, t, n) {
                var i, r = e.getElementsByTagName(t)[0];
                e.getElementById(n) || (i = e.createElement(t), i.id = n, i.src = "https://connect.facebook.net/en_US/all.js#xfbml=1", r.parentNode.insertBefore(i, r))
            }(document, "script", "facebook-jssdk"),
            function() {
                var e = document.createElement("script");
                e.type = "text/javascript", e.async = !0, e.src = "https://apis.google.com/js/plusone.js";
                var t = document.getElementsByTagName("script")[0];
                t.parentNode.insertBefore(e, t)
            }()
    }), s.on("load", function() {
        t.removeClass("is-loading")
    }), s.on("load", function() {
        var t, n;
        o = e("#main"), 1 == s.scrollTop() && s.scrollTop(0), s.on("scroll", function() {
            var e, i;
            return skel.breakpoint("medium").active || skel.vars.mobile ? void r.data("fixed", 0).css("position", "absolute").css("top", 0) : (e = Math.max(t - n, 0), i = Math.max(0, s.scrollTop() - e), void(1 == r.data("fixed") ? i <= 0 && r.data("fixed", 0).css("position", "absolute").css("top", 0) : i > 0 && r.data("fixed", 1).css("position", "fixed").css("top", -1 * e)))
        }).on("resize", function() {
            t = i.outerHeight(), n = s.height(), o.css("min-height", t + 10 + "px"), s.trigger("scroll")
        }).trigger("resize"), setTimeout(function() {
            s.trigger("resize")
        }, 500)
    })
}(jQuery);
