function replaceConfig(e,key,val) {
  var newConfig = [
//    ["render_paths",true],
//    ["ally_bonus_timer_ms",0],
//    ["draw_debug_location",true],
//    ["light_color_alpha", "255,255,255"]
  ];
  /*
    all_seeing_lighting_multiplier 2.200000047683716 
    ally_bonus_timer_ms 3000
    alpha_team_color 50,255,100
    bravo_team_color 100,0,255
    fog_scale_y 0.25
    fog_scale_t 0.00031999999191612005
    light_color_alpha 50,255,100
    light_color_bravo 150,60,255
    light_map_debug  false
    notice_duration_ms 2000
    notice_offset_x 0
    notice_offset_y 0
    render_fog  true
    render_lighting  true
    render_map_layers_above_players  true
    render_paths  false
    speed_boost_trail_coefficient 0.009999999776482582
    sync_dt_threshold 0.20000000298023224
    sync_slip_time 0.10000000149011612
    sync_epsilon 1
    sync_coefficient 0.10000000149011612
    time_warning_duration_ms 2000
    zoom_out_per_collectible_held 0.5
    zoom_tween_time_ms 1000
  */
  for(y in newConfig) {
    for(x in e.o[6][1]) {
      if(e.o[6][1][x][0] == newConfig[y][0]) {
        console.log(e.o[6][1][x]);
        e.o[6][1][x][3] = newConfig[y][1]
      }
    }
  }
  console.log(e);
  return e;
}
(function() {
    var n, aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        p = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            return b ? b.call(a) : {
                next: aa(a)
            }
        },
        ba = function(a) {
            if (!(a instanceof Array)) {
                a = p(a);
                for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
                a = c
            }
            return a
        },
        da = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ea;
    if ("function" == typeof Object.setPrototypeOf) ea = Object.setPrototypeOf;
    else {
        var fa;
        a: {
            var ha = {
                    a: !0
                },
                ia = {};
            try {
                ia.__proto__ = ha;
                fa = ia.a;
                break a
            } catch (a) {}
            fa = !1
        }
        ea = fa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ja = ea,
        v = function(a, b) {
            a.prototype = da(b.prototype);
            a.prototype.constructor = a;
            if (ja) ja(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.Mb = b.prototype
        },
        ka = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            a != Array.prototype && a != Object.prototype && (a[b] = c.value)
        },
        la = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global :
        this,
        ma = function(a, b) {
            if (b) {
                for (var c = la, d = a.split("."), e = 0; e < d.length - 1; e++) {
                    var f = d[e];
                    f in c || (c[f] = {});
                    c = c[f]
                }
                d = d[d.length - 1];
                e = c[d];
                f = b(e);
                f != e && null != f && ka(c, d, {
                    configurable: !0,
                    writable: !0,
                    value: f
                })
            }
        };
    ma("String.prototype.startsWith", function(a) {
        return a ? a : function(a, c) {
            if (null == this) throw new TypeError("The 'this' value for String.prototype.startsWith must not be null or undefined");
            if (a instanceof RegExp) throw new TypeError("First argument to String.prototype.startsWith must not be a regular expression");
            var b = this + "";
            a += "";
            for (var e = b.length, f = a.length, g = Math.max(0, Math.min(c | 0, b.length)), h = 0; h < f && g < e;)
                if (b[g++] != a[h++]) return !1;
            return h >= f
        }
    });
    ma("Array.prototype.fill", function(a) {
        return a ? a : function(a, c, d) {
            var b = this.length || 0;
            0 > c && (c = Math.max(0, b + c));
            if (null == d || d > b) d = b;
            d = Number(d);
            0 > d && (d = Math.max(0, b + d));
            for (c = Number(c || 0); c < d; c++) this[c] = a;
            return this
        }
    });
    var na = function() {
            na = function() {};
            la.Symbol || (la.Symbol = oa)
        },
        oa = function() {
            var a = 0;
            return function(b) {
                return "jscomp_symbol_" + (b || "") + a++
            }
        }(),
        qa = function() {
            na();
            var a = la.Symbol.iterator;
            a || (a = la.Symbol.iterator = la.Symbol("iterator"));
            "function" != typeof Array.prototype[a] && ka(Array.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return pa(aa(this))
                }
            });
            qa = function() {}
        },
        pa = function(a) {
            qa();
            a = {
                next: a
            };
            a[la.Symbol.iterator] = function() {
                return this
            };
            return a
        },
        ra = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a,
                b)
        };
    ma("WeakMap", function(a) {
        function b() {}

        function c(a) {
            ra(a, e) || ka(a, e, {
                value: new b
            })
        }

        function d(a) {
            var d = Object[a];
            d && (Object[a] = function(a) {
                if (a instanceof b) return a;
                c(a);
                return d(a)
            })
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var b = Object.seal({}),
                        c = Object.seal({}),
                        d = new a([
                            [b, 2],
                            [c, 3]
                        ]);
                    if (2 != d.get(b) || 3 != d.get(c)) return !1;
                    d["delete"](b);
                    d.set(c, 4);
                    return !d.has(b) && 4 == d.get(c)
                } catch (m) {
                    return !1
                }
            }()) return a;
        var e = "$jscomp_hidden_" + Math.random();
        d("freeze");
        d("preventExtensions");
        d("seal");
        var f =
            0,
            g = function(a) {
                this.j = (f += Math.random() + 1).toString();
                if (a) {
                    a = p(a);
                    for (var b; !(b = a.next()).done;) b = b.value, this.set(b[0], b[1])
                }
            };
        g.prototype.set = function(a, b) {
            c(a);
            if (!ra(a, e)) throw Error("a`" + a);
            a[e][this.j] = b;
            return this
        };
        g.prototype.get = function(a) {
            return ra(a, e) ? a[e][this.j] : void 0
        };
        g.prototype.has = function(a) {
            return ra(a, e) && ra(a[e], this.j)
        };
        g.prototype["delete"] = function(a) {
            return ra(a, e) && ra(a[e], this.j) ? delete a[e][this.j] : !1
        };
        return g
    });
    ma("Map", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var b = Object.seal({
                            x: 4
                        }),
                        c = new a(p([
                            [b, "s"]
                        ]));
                    if ("s" != c.get(b) || 1 != c.size || c.get({
                            x: 4
                        }) || c.set({
                            x: 4
                        }, "t") != c || 2 != c.size) return !1;
                    var d = c.entries(),
                        e = d.next();
                    if (e.done || e.value[0] != b || "s" != e.value[1]) return !1;
                    e = d.next();
                    return e.done || 4 != e.value[0].x || "t" != e.value[1] || !d.next().done ? !1 : !0
                } catch (q) {
                    return !1
                }
            }()) return a;
        qa();
        var b = new WeakMap,
            c = function(a) {
                this.o = {};
                this.j =
                    f();
                this.size = 0;
                if (a) {
                    a = p(a);
                    for (var b; !(b = a.next()).done;) b = b.value, this.set(b[0], b[1])
                }
            };
        c.prototype.set = function(a, b) {
            a = 0 === a ? 0 : a;
            var c = d(this, a);
            c.list || (c.list = this.o[c.id] = []);
            c.Ib ? c.Ib.value = b : (c.Ib = {
                next: this.j,
                wb: this.j.wb,
                head: this.j,
                key: a,
                value: b
            }, c.list.push(c.Ib), this.j.wb.next = c.Ib, this.j.wb = c.Ib, this.size++);
            return this
        };
        c.prototype["delete"] = function(a) {
            a = d(this, a);
            return a.Ib && a.list ? (a.list.splice(a.index, 1), a.list.length || delete this.o[a.id], a.Ib.wb.next = a.Ib.next, a.Ib.next.wb =
                a.Ib.wb, a.Ib.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function() {
            this.o = {};
            this.j = this.j.wb = f();
            this.size = 0
        };
        c.prototype.has = function(a) {
            return !!d(this, a).Ib
        };
        c.prototype.get = function(a) {
            return (a = d(this, a).Ib) && a.value
        };
        c.prototype.entries = function() {
            return e(this, function(a) {
                return [a.key, a.value]
            })
        };
        c.prototype.keys = function() {
            return e(this, function(a) {
                return a.key
            })
        };
        c.prototype.values = function() {
            return e(this, function(a) {
                return a.value
            })
        };
        c.prototype.forEach = function(a, b) {
            for (var c = this.entries(),
                    d; !(d = c.next()).done;) d = d.value, a.call(b, d[1], d[0], this)
        };
        c.prototype[Symbol.iterator] = c.prototype.entries;
        var d = function(a, c) {
                var d = c && typeof c;
                "object" == d || "function" == d ? b.has(c) ? d = b.get(c) : (d = "" + ++g, b.set(c, d)) : d = "p_" + c;
                var e = a.o[d];
                if (e && ra(a.o, d))
                    for (var f = 0; f < e.length; f++) {
                        var h = e[f];
                        if (c !== c && h.key !== h.key || c === h.key) return {
                            id: d,
                            list: e,
                            index: f,
                            Ib: h
                        }
                    }
                return {
                    id: d,
                    list: e,
                    index: -1,
                    Ib: void 0
                }
            },
            e = function(a, b) {
                var c = a.j;
                return pa(function() {
                    if (c) {
                        for (; c.head != a.j;) c = c.wb;
                        for (; c.next != c.head;) return c =
                            c.next, {
                                done: !1,
                                value: b(c)
                            };
                        c = null
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                })
            },
            f = function() {
                var a = {};
                return a.wb = a.next = a.head = a
            },
            g = 0;
        return c
    });
    ma("Object.is", function(a) {
        return a ? a : function(a, c) {
            return a === c ? 0 !== a || 1 / a === 1 / c : a !== a && c !== c
        }
    });
    ma("Array.prototype.includes", function(a) {
        return a ? a : function(a, c) {
            var b = this;
            b instanceof String && (b = String(b));
            var e = b.length,
                f = c || 0;
            for (0 > f && (f = Math.max(f + e, 0)); f < e; f++) {
                var g = b[f];
                if (g === a || Object.is(g, a)) return !0
            }
            return !1
        }
    });
    ma("Promise", function(a) {
        function b() {
            this.j = null
        }

        function c(a) {
            return a instanceof e ? a : new e(function(b) {
                b(a)
            })
        }
        if (a) return a;
        b.prototype.o = function(a) {
            null == this.j && (this.j = [], this.H());
            this.j.push(a)
        };
        b.prototype.H = function() {
            var a = this;
            this.v(function() {
                a.S()
            })
        };
        var d = la.setTimeout;
        b.prototype.v = function(a) {
            d(a, 0)
        };
        b.prototype.S = function() {
            for (; this.j && this.j.length;) {
                var a = this.j;
                this.j = [];
                for (var b = 0; b < a.length; ++b) {
                    var c = a[b];
                    a[b] = null;
                    try {
                        c()
                    } catch (l) {
                        this.R(l)
                    }
                }
            }
            this.j = null
        };
        b.prototype.R =
            function(a) {
                this.v(function() {
                    throw a;
                })
            };
        var e = function(a) {
            this.o = 0;
            this.v = void 0;
            this.j = [];
            var b = this.H();
            try {
                a(b.resolve, b.reject)
            } catch (k) {
                b.reject(k)
            }
        };
        e.prototype.H = function() {
            function a(a) {
                return function(d) {
                    c || (c = !0, a.call(b, d))
                }
            }
            var b = this,
                c = !1;
            return {
                resolve: a(this.va),
                reject: a(this.R)
            }
        };
        e.prototype.va = function(a) {
            if (a === this) this.R(new TypeError("A Promise cannot resolve to itself"));
            else if (a instanceof e) this.ta(a);
            else {
                a: switch (typeof a) {
                    case "object":
                        var b = null != a;
                        break a;
                    case "function":
                        b = !0;
                        break a;
                    default:
                        b = !1
                }
                b ? this.W(a) : this.S(a)
            }
        };
        e.prototype.W = function(a) {
            var b = void 0;
            try {
                b = a.then
            } catch (k) {
                this.R(k);
                return
            }
            "function" == typeof b ? this.wa(b, a) : this.S(a)
        };
        e.prototype.R = function(a) {
            this.T(2, a)
        };
        e.prototype.S = function(a) {
            this.T(1, a)
        };
        e.prototype.T = function(a, b) {
            if (0 != this.o) throw Error("b`" + a + "`" + b + "`" + this.o);
            this.o = a;
            this.v = b;
            this.U()
        };
        e.prototype.U = function() {
            if (null != this.j) {
                for (var a = 0; a < this.j.length; ++a) f.o(this.j[a]);
                this.j = null
            }
        };
        var f = new b;
        e.prototype.ta = function(a) {
            var b =
                this.H();
            a.Cd(b.resolve, b.reject)
        };
        e.prototype.wa = function(a, b) {
            var c = this.H();
            try {
                a.call(b, c.resolve, c.reject)
            } catch (l) {
                c.reject(l)
            }
        };
        e.prototype.then = function(a, b) {
            function c(a, b) {
                return "function" == typeof a ? function(b) {
                    try {
                        d(a(b))
                    } catch (t) {
                        f(t)
                    }
                } : b
            }
            var d, f, g = new e(function(a, b) {
                d = a;
                f = b
            });
            this.Cd(c(a, d), c(b, f));
            return g
        };
        e.prototype["catch"] = function(a) {
            return this.then(void 0, a)
        };
        e.prototype.Cd = function(a, b) {
            function c() {
                switch (d.o) {
                    case 1:
                        a(d.v);
                        break;
                    case 2:
                        b(d.v);
                        break;
                    default:
                        throw Error("c`" +
                            d.o);
                }
            }
            var d = this;
            null == this.j ? f.o(c) : this.j.push(c)
        };
        e.resolve = c;
        e.reject = function(a) {
            return new e(function(b, c) {
                c(a)
            })
        };
        e.race = function(a) {
            return new e(function(b, d) {
                for (var e = p(a), f = e.next(); !f.done; f = e.next()) c(f.value).Cd(b, d)
            })
        };
        e.all = function(a) {
            var b = p(a),
                d = b.next();
            return d.done ? c([]) : new e(function(a, e) {
                function f(b) {
                    return function(c) {
                        g[b] = c;
                        h--;
                        0 == h && a(g)
                    }
                }
                var g = [],
                    h = 0;
                do g.push(void 0), h++, c(d.value).Cd(f(g.length - 1), e), d = b.next(); while (!d.done)
            })
        };
        return e
    });
    ma("Set", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var b = Object.seal({
                            x: 4
                        }),
                        d = new a(p([b]));
                    if (!d.has(b) || 1 != d.size || d.add(b) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != b || f.value[1] != b) return !1;
                    f = e.next();
                    return f.done || f.value[0] == b || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        qa();
        var b = function(a) {
            this.j = new Map;
            if (a) {
                a = p(a);
                for (var b; !(b = a.next()).done;) this.add(b.value)
            }
            this.size = this.j.size
        };
        b.prototype.add = function(a) {
            a = 0 === a ? 0 : a;
            this.j.set(a, a);
            this.size = this.j.size;
            return this
        };
        b.prototype["delete"] = function(a) {
            a = this.j["delete"](a);
            this.size = this.j.size;
            return a
        };
        b.prototype.clear = function() {
            this.j.clear();
            this.size = 0
        };
        b.prototype.has = function(a) {
            return this.j.has(a)
        };
        b.prototype.entries = function() {
            return this.j.entries()
        };
        b.prototype.values = function() {
            return this.j.values()
        };
        b.prototype.keys = b.prototype.values;
        b.prototype[Symbol.iterator] = b.prototype.values;
        b.prototype.forEach = function(a, b) {
            var c = this;
            this.j.forEach(function(d) {
                return a.call(b, d, d, c)
            })
        };
        return b
    });
    var sa = "function" == typeof Object.assign ? Object.assign : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) ra(d, e) && (a[e] = d[e])
        }
        return a
    };
    ma("Object.assign", function(a) {
        return a || sa
    });
    ma("Promise.prototype.finally", function(a) {
        return a ? a : function(a) {
            return this.then(function(b) {
                return Promise.resolve(a()).then(function() {
                    return b
                })
            }, function(b) {
                return Promise.resolve(a()).then(function() {
                    throw b;
                })
            })
        }
    });
    var ua = this,
        va = function(a) {
            return void 0 !== a
        },
        wa = function(a) {
            return "string" == typeof a
        },
        xa = function(a) {
            return "number" == typeof a
        },
        ya = function() {},
        za = function() {
            throw Error("d");
        },
        Aa = function(a) {
            a.Zd = void 0;
            a.Aa = function() {
                return a.Zd ? a.Zd : a.Zd = new a
            }
        },
        Ba = function(a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" == typeof a.length && "undefined" !=
                        typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
            else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        },
        Ca = function(a) {
            return "array" == Ba(a)
        },
        Da = function(a) {
            var b = Ba(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        },
        Ea = function(a) {
            return "function" ==
                Ba(a)
        },
        Fa = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        },
        Ga = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        Ha = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var c = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c, d);
                    return a.apply(b, c)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        Ia = function(a, b, c) {
            Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ?
                Ia = Ga : Ia = Ha;
            return Ia.apply(null, arguments)
        },
        Ja = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var b = c.slice();
                b.push.apply(b, arguments);
                return a.apply(this, b)
            }
        },
        Ka = Date.now || function() {
            return +new Date
        },
        La = function(a, b) {
            var c = a.split("."),
                d = ua;
            c[0] in d || "undefined" == typeof d.execScript || d.execScript("var " + c[0]);
            for (var e; c.length && (e = c.shift());) !c.length && va(b) ? d[e] = b : d[e] && d[e] !== Object.prototype[e] ? d = d[e] : d = d[e] = {}
        },
        z = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.Mb = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.tf = function(a, c, f) {
                for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
                return b.prototype[c].apply(a, d)
            }
        };
    var Oa = function(a) {
            var b = new Image,
                c = Ma,
                d = "";
            b.onerror = b.onload = b.onabort = function() {
                delete Na[c]
            };
            Na[c] = b; - 1 != a.search("&ei=") || (window.google && window.google.kEI ? d = "&ei=" + window.google.kEI : d = "&ei=");
            a = "/gen_204.php?atyp=i&ct=doodle&cad=" + a + d + "&zx=" + Ka();
            /^http:/i.test(a) && "https:" == window.location.protocol ? delete Na[c] : (b.src = a, Ma = c + 1)
        },
        Na = [],
        Ma = 0;
    var Pa = Array.prototype.indexOf ? function(a, b) {
            return Array.prototype.indexOf.call(a, b, void 0)
        } : function(a, b) {
            if (wa(a)) return wa(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        Qa = Array.prototype.forEach ? function(a, b, c) {
            Array.prototype.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = wa(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        Ra = Array.prototype.map ? function(a, b) {
            return Array.prototype.map.call(a, b, void 0)
        } : function(a, b) {
            for (var c =
                    a.length, d = Array(c), e = wa(a) ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
            return d
        },
        Sa = function(a, b) {
            var c = Pa(a, b),
                d;
            (d = 0 <= c) && Array.prototype.splice.call(a, c, 1);
            return d
        },
        Ta = function(a) {
            return Array.prototype.concat.apply([], arguments)
        },
        Ua = function(a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                return c
            }
            return []
        },
        Va = function(a, b, c) {
            return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
        };
    var Wa = RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]"),
        Xa = RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]"),
        Ya = /^http:\/\/.*/,
        Za = /\s+/,
        $a = /[\d\u06f0-\u06f9]/;
    var ab = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        bb = function(a, b) {
            return -1 != a.indexOf(b)
        },
        cb = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var db = function(a, b, c) {
        return a + c * (b - a)
    };
    var eb = function(a, b) {
        this.o = {};
        this.j = [];
        this.v = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("e");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof eb)
                for (c = a.wc(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
            else
                for (d in a) this.set(d, a[d])
    };
    eb.prototype.sc = function() {
        fb(this);
        for (var a = [], b = 0; b < this.j.length; b++) a.push(this.o[this.j[b]]);
        return a
    };
    eb.prototype.wc = function() {
        fb(this);
        return this.j.concat()
    };
    var fb = function(a) {
        if (a.v != a.j.length) {
            for (var b = 0, c = 0; b < a.j.length;) {
                var d = a.j[b];
                gb(a.o, d) && (a.j[c++] = d);
                b++
            }
            a.j.length = c
        }
        if (a.v != a.j.length) {
            var e = {};
            for (c = b = 0; b < a.j.length;) d = a.j[b], gb(e, d) || (a.j[c++] = d, e[d] = 1), b++;
            a.j.length = c
        }
    };
    eb.prototype.get = function(a, b) {
        return gb(this.o, a) ? this.o[a] : b
    };
    eb.prototype.set = function(a, b) {
        gb(this.o, a) || (this.v++, this.j.push(a));
        this.o[a] = b
    };
    eb.prototype.forEach = function(a, b) {
        for (var c = this.wc(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    var gb = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var hb = function(a, b, c) {
            for (var d in a) b.call(c, a[d], d, a)
        },
        ib = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        jb = function(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < ib.length; f++) c = ib[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        };
    var kb = function(a) {
            if (a.sc && "function" == typeof a.sc) return a.sc();
            if (wa(a)) return a.split("");
            if (Da(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            b = [];
            c = 0;
            for (d in a) b[c++] = a[d];
            return b
        },
        lb = function(a, b, c) {
            if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c);
            else if (Da(a) || wa(a)) Qa(a, b, c);
            else {
                if (a.wc && "function" == typeof a.wc) var d = a.wc();
                else if (a.sc && "function" == typeof a.sc) d = void 0;
                else if (Da(a) || wa(a)) {
                    d = [];
                    for (var e = a.length, f = 0; f < e; f++) d.push(f)
                } else
                    for (f in d = [], e = 0,
                        a) d[e++] = f;
                e = kb(a);
                f = e.length;
                for (var g = 0; g < f; g++) b.call(c, e[g], d && d[g], a)
            }
        };
    var mb = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
        nb = function(a, b) {
            if (a)
                for (var c = a.split("&"), d = 0; d < c.length; d++) {
                    var e = c[d].indexOf("="),
                        f = null;
                    if (0 <= e) {
                        var g = c[d].substring(0, e);
                        f = c[d].substring(e + 1)
                    } else g = c[d];
                    b(g, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "")
                }
        };
    var ob = function(a, b) {
        this.v = this.T = this.H = "";
        this.U = null;
        this.R = this.o = "";
        this.S = !1;
        var c;
        a instanceof ob ? (this.S = va(b) ? b : a.S, pb(this, a.H), this.T = a.T, this.v = a.v, qb(this, a.U), this.o = a.o, rb(this, sb(a.j)), this.R = a.R) : a && (c = String(a).match(mb)) ? (this.S = !!b, pb(this, c[1] || "", !0), this.T = tb(c[2] || ""), this.v = tb(c[3] || "", !0), qb(this, c[4]), this.o = tb(c[5] || "", !0), rb(this, c[6] || "", !0), this.R = tb(c[7] || "")) : (this.S = !!b, this.j = new ub(null, this.S))
    };
    ob.prototype.toString = function() {
        var a = [],
            b = this.H;
        b && a.push(vb(b, wb, !0), ":");
        var c = this.v;
        if (c || "file" == b) a.push("//"), (b = this.T) && a.push(vb(b, wb, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.U, null != c && a.push(":", String(c));
        if (c = this.o) this.v && "/" != c.charAt(0) && a.push("/"), a.push(vb(c, "/" == c.charAt(0) ? xb : yb, !0));
        (c = this.j.toString()) && a.push("?", c);
        (c = this.R) && a.push("#", vb(c, zb));
        return a.join("")
    };
    ob.prototype.resolve = function(a) {
        var b = new ob(this),
            c = !!a.H;
        c ? pb(b, a.H) : c = !!a.T;
        c ? b.T = a.T : c = !!a.v;
        c ? b.v = a.v : c = null != a.U;
        var d = a.o;
        if (c) qb(b, a.U);
        else if (c = !!a.o) {
            if ("/" != d.charAt(0))
                if (this.v && !this.o) d = "/" + d;
                else {
                    var e = b.o.lastIndexOf("/"); - 1 != e && (d = b.o.substr(0, e + 1) + d)
                } e = d;
            if (".." == e || "." == e) d = "";
            else if (bb(e, "./") || bb(e, "/.")) {
                d = 0 == e.lastIndexOf("/", 0);
                e = e.split("/");
                for (var f = [], g = 0; g < e.length;) {
                    var h = e[g++];
                    "." == h ? d && g == e.length && f.push("") : ".." == h ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(),
                        d && g == e.length && f.push("")) : (f.push(h), d = !0)
                }
                d = f.join("/")
            } else d = e
        }
        c ? b.o = d : c = "" !== a.j.toString();
        c ? rb(b, sb(a.j)) : c = !!a.R;
        c && (b.R = a.R);
        return b
    };
    var pb = function(a, b, c) {
            a.H = c ? tb(b, !0) : b;
            a.H && (a.H = a.H.replace(/:$/, ""))
        },
        qb = function(a, b) {
            if (b) {
                b = Number(b);
                if (isNaN(b) || 0 > b) throw Error("f`" + b);
                a.U = b
            } else a.U = null
        },
        rb = function(a, b, c) {
            b instanceof ub ? (a.j = b, Ab(a.j, a.S)) : (c || (b = vb(b, Bb)), a.j = new ub(b, a.S))
        },
        Cb = function(a) {
            return a instanceof ob ? new ob(a) : new ob(a, void 0)
        },
        tb = function(a, b) {
            return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
        },
        vb = function(a, b, c) {
            return wa(a) ? (a = encodeURI(a).replace(b, Db), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g,
                "%$1")), a) : null
        },
        Db = function(a) {
            a = a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
        },
        wb = /[#\/\?@]/g,
        yb = /[#\?:]/g,
        xb = /[#\?]/g,
        Bb = /[#\?@]/g,
        zb = /#/g,
        ub = function(a, b) {
            this.o = this.j = null;
            this.v = a || null;
            this.H = !!b
        },
        Eb = function(a) {
            a.j || (a.j = new eb, a.o = 0, a.v && nb(a.v, function(b, c) {
                a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
            }))
        };
    ub.prototype.add = function(a, b) {
        Eb(this);
        this.v = null;
        a = Fb(this, a);
        var c = this.j.get(a);
        c || this.j.set(a, c = []);
        c.push(b);
        this.o += 1;
        return this
    };
    var Gb = function(a, b) {
            Eb(a);
            b = Fb(a, b);
            if (gb(a.j.o, b)) {
                a.v = null;
                a.o -= a.j.get(b).length;
                var c = a.j,
                    d = b;
                gb(c.o, d) && (delete c.o[d], c.v--, c.j.length > 2 * c.v && fb(c))
            }
        },
        Hb = function(a, b) {
            Eb(a);
            b = Fb(a, b);
            return gb(a.j.o, b)
        };
    n = ub.prototype;
    n.forEach = function(a, b) {
        Eb(this);
        this.j.forEach(function(c, d) {
            Qa(c, function(c) {
                a.call(b, c, d, this)
            }, this)
        }, this)
    };
    n.wc = function() {
        Eb(this);
        for (var a = this.j.sc(), b = this.j.wc(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c
    };
    n.sc = function(a) {
        Eb(this);
        var b = [];
        if (wa(a)) Hb(this, a) && (b = Ta(b, this.j.get(Fb(this, a))));
        else {
            a = this.j.sc();
            for (var c = 0; c < a.length; c++) b = Ta(b, a[c])
        }
        return b
    };
    n.set = function(a, b) {
        Eb(this);
        this.v = null;
        a = Fb(this, a);
        Hb(this, a) && (this.o -= this.j.get(a).length);
        this.j.set(a, [b]);
        this.o += 1;
        return this
    };
    n.get = function(a, b) {
        if (!a) return b;
        var c = this.sc(a);
        return 0 < c.length ? String(c[0]) : b
    };
    n.toString = function() {
        if (this.v) return this.v;
        if (!this.j) return "";
        for (var a = [], b = this.j.wc(), c = 0; c < b.length; c++) {
            var d = b[c],
                e = encodeURIComponent(String(d));
            d = this.sc(d);
            for (var f = 0; f < d.length; f++) {
                var g = e;
                "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
                a.push(g)
            }
        }
        return this.v = a.join("&")
    };
    var sb = function(a) {
            var b = new ub;
            b.v = a.v;
            a.j && (b.j = new eb(a.j), b.o = a.o);
            return b
        },
        Fb = function(a, b) {
            var c = String(b);
            a.H && (c = c.toLowerCase());
            return c
        },
        Ab = function(a, b) {
            b && !a.H && (Eb(a), a.v = null, a.j.forEach(function(a, b) {
                var c = b.toLowerCase();
                b != c && (Gb(this, b), Gb(this, c), 0 < a.length && (this.v = null, this.j.set(Fb(this, c), Ua(a)), this.o += a.length))
            }, a));
            a.H = b
        };
    ub.prototype.extend = function(a) {
        for (var b = 0; b < arguments.length; b++) lb(arguments[b], function(a, b) {
            this.add(b, a)
        }, this)
    };
    var Ib, Jb, Kb = navigator.userAgent,
        Lb = window.location.href,
        Mb = bb(Kb, "iPad") || bb(Kb, "iPhone") || bb(Kb, "iPod"),
        Nb = bb(Kb.toLowerCase(), "gsa"),
        Ob = Mb && Nb,
        Pb = Nb && !Mb,
        E = Mb || bb(Kb, "Android") || bb(Kb, "Mobile") || bb(Kb, "Silk") || bb(Kb, "UCBrowser") || bb(Kb, "UCWEB"),
        Qb = bb(Kb, "Chrome") && bb(Kb, "Mobile") && bb(Kb, "wv"),
        Rb = 0 <= Kb.indexOf("MSIE");
    Rb && Kb.indexOf("MSIE 8.");
    bb(Kb, "GT-I9300") && bb(Kb, "Chrome");
    var Sb = bb(Lb, "/logos/") && bb(Lb, ".html"),
        Tb = function() {
            return !!document.getElementById("fkbx") && !E
        },
        Ub = function() {
            return 0 <= Lb.indexOf("ntp=1") && !E
        },
        Vb = function(a, b) {
            for (var c = 1; c < arguments.length; c += 2) {
                var d = arguments[c],
                    e = arguments[c + 1],
                    f = a.style;
                f && d in f ? f[d] = e : d in a ? a[d] = e : Rb && f && "opacity" == d && (a.zoom = 1, d = (f.filter || "").replace(/alpha\([^)]*\)/, ""), isNaN(parseFloat(e)) || (d += "alpha(opacity=" + 100 * e + ")"), f.filter = d)
            }
        },
        Wb = function() {
            return self.performance && self.performance.now ? self.performance.now() :
                Ka()
        },
        Yb = function(a) {
            var b = [Xb];
            window.WebFontConfig ? null != a && Ea(a) && a() : (La("WebFontConfig.google.families", b), null != a && Ea(a) && La("WebFontConfig.fontactive", a), a = document.createElement("script"), a.src = "/logos/doodles/2018/halloween18/rc5/webfont.js", a.type = "text/javascript", a.async = "true", (document.getElementById("xjsc") || document.body).appendChild(a))
        },
        Zb = ["Moz", "ms", "O", "webkit"],
        $b = function(a, b, c) {
            for (var d = 0, e; e = Zb[d++];) a.style[e +
                b] = c;
            a.style[b.charAt(0).toLowerCase() + b.substr(1)] = c
        },
        ac = ["", "moz", "ms", "o", "webkit"],
        bc = function(a, b) {
            if (!a) return null;
            for (var c = 0; c < ac.length; c++) {
                var d = ac[c],
                    e = b;
                0 < d.length && (e = b.charAt(0).toUpperCase() + b.substr(1));
                d += e;
                if ("undefined" != typeof a[d]) return d
            }
            return null
        },
        dc = function(a, b) {
            var c = window.google ? window.google.doodle : null;
            return c && void 0 != c[a] ? c[a] : b
        },
        ec = function(a, b) {
            var c = dc("doodle_args", {})[a];
            return null != c ? c : b
        },
        fc = function() {
            return !!ec("is_dogfood", !1)
        },
        gc = dc("hl", "en"),
        hc = function(a) {
            var b =
                void 0,
                c = dc("msgs", {});
            va(b) || (b = a);
            if (!(c = c[a])) {
                var d = dc("alltranslations", {});
                if (d)
                    if (c = d.messages, d = d.translations, c && d) {
                        for (var e = -1, f = 0; f < c.length; f++)
                            if (c[f] == a) {
                                e = f;
                                break
                            } c = -1 == e ? "" : (d[gc] || d.en).ALL[e]
                    } else c = "";
                else c = ""
            }
            a = c || b;
            c = b = 0;
            d = !1;
            e = a.split(Za);
            for (f = 0; f < e.length; f++) {
                var g = e[f];
                Xa.test(g) ? (b++, c++) : Ya.test(g) ? d = !0 : Wa.test(g) ? c++ : $a.test(g) && (d = !0)
            }
            b = 0 == c ? d ? 1 : 0 : .4 < b / c ? -1 : 1;
            return 1 == b ? "\u202a" + a + "\u202c" : -1 == b ? "\u202b" + a + "\u202c" : a
        },
        ic = function() {
            for (var a = ["requestAnimationFrame",
                    "mozRequestAnimationFrame", "msRequestAnimationFrame", "oRequestAnimationFrame", "webkitRequestAnimationFrame"
                ], b = 0; b < a.length; b++) {
                var c = window[a[b]];
                if (c) return function(a, b, d) {
                    return c(function(b) {
                        return a.call(d, b)
                    }, b)
                }
            }
            var d = 0,
                e = 33,
                f = 50;
            return function(a, b, c) {
                b && 0 > --f && (1.25 < b / e ? (d = 0, e = Math.min(66, ++e)) : 10 < ++d && (d = 0, e = Math.max(17, --e)));
                window.setTimeout(function(b) {
                    a.call(c, b)
                }, e)
            }
        },
        jc = function(a, b, c) {
            jc = ic();
            return jc(a, b, c)
        },
        lc = function(a, b, c) {
            var d = Math.max(0, c - 230) + (document.querySelector("div.og-pdp") ?
                36 : 12);
            Vb(a, "width", b + "px", "height", c + "px");
            kc(d)
        },
        kc = function(a) {
            a += "px";
            var b = document.getElementById("lga");
            b && Vb(b, "marginBottom", a);
            if (!Tb() && !Ub()) {
                b = document.getElementById("searchform");
                var c = document.getElementById("gb");
                b && (Vb(b, "transform", "translateY(" + a + ")"), Vb(c, "transform", "translateY(-" + a + ")"), Vb(c, "z-index", "1"));
                a = document.createEvent("UIEvents");
                a.initUIEvent("resize", !1, !1, window, 0);
                window.dispatchEvent(a)
            }
        },
        mc = function() {
            return window.google && window.google.kEI && window.google.kEI.length ?
                window.google.kEI : null
        },
        nc = function() {
            if (!Ib) {
                var a = document.getElementById("hplogoved");
                a && (Ib = a.getAttribute("data-ved"))
            }
            return Ib
        };
    var F = function(a, b) {
        this.x = va(a) ? a : 0;
        this.y = va(b) ? b : 0
    };
    F.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    F.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    F.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    F.prototype.scale = function(a, b) {
        var c = xa(b) ? b : a;
        this.x *= a;
        this.y *= c;
        return this
    };
    var oc = function(a, b, c, d) {
            this.j = a;
            this.v = b;
            this.o = c;
            this.H = d
        },
        pc = function(a, b) {
            if (0 == b) return 0;
            if (1 == b) return 1;
            var c = db(0, a.j, b),
                d = db(a.j, a.o, b),
                e = db(a.o, 1, b);
            c = db(c, d, b);
            d = db(d, e, b);
            return db(c, d, b)
        },
        qc = function(a, b) {
            if (0 == b) return 0;
            if (1 == b) return 1;
            var c = db(0, a.v, b),
                d = db(a.v, a.H, b),
                e = db(a.H, 1, b);
            c = db(c, d, b);
            d = db(d, e, b);
            return db(c, d, b)
        };
    oc.prototype.Db = function() {
        return new F(pc(this, void 0), qc(this, void 0))
    };
    var rc = function(a, b) {
        var c = b - 0;
        if (0 >= c) return 0;
        if (1 <= c) return 1;
        for (var d = 0, e = 1, f = 0, g = 0; 8 > g; g++) {
            f = pc(a, c);
            var h = (pc(a, c + 1E-6) - f) / 1E-6;
            if (1E-6 > Math.abs(f - b)) return c;
            if (1E-6 > Math.abs(h)) break;
            else f < b ? d = c : e = c, c -= (f - b) / h
        }
        for (g = 0; 1E-6 < Math.abs(f - b) && 8 > g; g++) f < b ? (d = c, c = (c + e) / 2) : (e = c, c = (c + d) / 2), f = pc(a, c);
        return c
    };
    var sc = function(a, b, c, d) {
            var e = new oc(a, b, c, d);
            return function(a) {
                return qc(e, rc(e, a))
            }
        },
        tc = function(a) {
            return a
        },
        uc = sc(.25, .1, .25, 1),
        vc = sc(.4, 0, 1, 1),
        wc = sc(0, 0, .6, 1),
        xc = sc(.175, .885, .32, 1.275),
        yc = sc(.6, 0, .4, 1),
        zc = sc(.6, -.28, .735, .045);
    var Ac = function(a, b, c, d, e) {
            this.S = a;
            this.U = b;
            this.W = {};
            this.duration = c;
            this.va = d || uc;
            this.H = e || Wb;
            this.j = null;
            this.o = !1
        },
        Cc = function(a) {
            var b = Math.min(Math.max(Bc(a) / a.duration, 0), 1);
            a.o && (b = 1 - b);
            for (var c in a.S)
                if (a.U.hasOwnProperty(c)) {
                    var d = a.W,
                        e = c;
                    var f = a.S[c];
                    var g = a.U[c];
                    f += (a.va || uc)(b) * (g - f);
                    d[e] = f
                } return a.W
        },
        Dc = function(a) {
            return Bc(a) >= a.duration
        },
        Bc = function(a) {
            return null === a.j ? 0 : a.H() - a.j
        };
    Ac.prototype.start = function() {
        this.j = this.H();
        this.o = !1
    };
    var Ec = function(a) {
        if (null !== a.j && !a.o) {
            var b = Math.min(a.duration, Bc(a));
            a.j = a.H() - (a.duration - b);
            a.o = !0
        }
    };
    Ac.prototype.reset = function() {
        this.j = null
    };
    var G = function(a, b, c, d, e, f) {
        d = void 0 === d ? uc : d;
        e = void 0 === e ? !1 : e;
        f = void 0 === f ? !1 : f;
        Ac.call(this, a, b, c, d, function() {
            return g.v
        });
        var g = this;
        this.v = 0;
        this.T = f;
        this.R = e
    };
    v(G, Ac);
    var Fc = function(a, b) {
        null !== a.j && (a.v += b, Dc(a) && (a.T && !a.o ? Ec(a) : a.R && a.o && (a.o = !1), a.T || a.R)) && (a.j = 0, a.v %= a.duration)
    };
    G.prototype.reset = function() {
        this.v = 0
    };
    var Gc = function() {
            this.o = this.v = !1
        },
        Hc = function(a, b) {
            a.v || (a.ze(), a.v = !0);
            a.Eb() ? a.o || (a.je(), a.o = !0) : a.md(b)
        };
    n = Gc.prototype;
    n.Eb = function() {
        return !0
    };
    n.ze = function() {};
    n.md = function() {};
    n.je = function() {};
    n.reset = function() {
        this.o = this.v = !1
    };
    var Ic = function(a) {
        Gc.call(this);
        this.j = a
    };
    v(Ic, Gc);
    Ic.prototype.je = function() {
        Gc.prototype.je.call(this);
        this.j()
    };
    var H = function(a, b) {
        Gc.call(this);
        this.j = a;
        this.H = b
    };
    v(H, Gc);
    H.prototype.ze = function() {
        this.j.start()
    };
    H.prototype.md = function(a) {
        Fc(this.j, a);
        this.H(Cc(this.j))
    };
    H.prototype.Eb = function() {
        return !this.j.R && Dc(this.j)
    };
    H.prototype.reset = function() {
        Gc.prototype.reset.call(this);
        this.j.reset()
    };
    var Jc = function(a) {
        Gc.call(this);
        this.H = a;
        this.j = 0
    };
    v(Jc, Gc);
    Jc.prototype.md = function(a) {
        this.j += a
    };
    Jc.prototype.Eb = function() {
        return this.j >= this.H
    };
    Jc.prototype.reset = function() {
        Gc.prototype.reset.call(this);
        this.j = 0
    };
    var Kc = function(a, b) {
        b = void 0 === b ? !1 : b;
        Gc.call(this);
        this.j = a;
        this.H = b;
        this.R = a.slice()
    };
    v(Kc, Gc);
    Kc.prototype.Eb = function() {
        return !this.j.length
    };
    Kc.prototype.md = function(a) {
        if (0 < this.j.length && 0 < a) {
            var b = this.j[0];
            Hc(b, a);
            b.Eb() && this.j.length && this.j[0] === b && this.j.shift()
        }
        this.Eb() && this.H && this.reset()
    };
    Kc.prototype.reset = function() {
        Gc.prototype.reset.call(this);
        this.j = this.R.slice();
        for (var a = p(this.j), b = a.next(); !b.done; b = a.next()) b.value.reset()
    };
    var Lc = function(a) {
        Gc.call(this);
        this.j = a
    };
    v(Lc, Gc);
    Lc.prototype.Eb = function() {
        for (var a = p(this.j), b = a.next(); !b.done; b = a.next())
            if (!b.value.Eb()) return !1;
        return !0
    };
    Lc.prototype.md = function(a) {
        if (!this.Eb())
            for (var b = p(this.j), c = b.next(); !c.done; c = b.next()) Hc(c.value, a)
    };
    Lc.prototype.reset = function() {
        Gc.prototype.reset.call(this);
        for (var a = p(this.j), b = a.next(); !b.done; b = a.next()) b.value.reset()
    };
    var Mc = function(a) {
            this.H = a;
            this.j = !1;
            this.nd = []
        },
        Nc = function(a) {
            if (!a.j) {
                a.j = !0;
                for (var b = 0, c; c = a.nd[b]; b++) c()
            }
        },
        Oc = function(a, b) {
            a.j ? b() : a.nd.push(b)
        },
        Pc = function(a) {
            Mc.call(this, a);
            this.image = new Image
        };
    z(Pc, Mc);
    Pc.prototype.preload = function() {
        if (!this.image.src) {
            var a = this;
            this.image.onload = function() {
                Nc(a)
            };
            this.image.src = this.H;
            (this.image.complete || "complete" == this.image.readyState) && Nc(this)
        }
    };
    var Qc = function(a, b) {
        for (var c = 0, d = 0, e; e = a[d]; d++) Oc(e, function() {
            c++;
            c == a.length && b()
        }), e.preload()
    };
    var Rc;
    a: {
        var Sc = ua.navigator;
        if (Sc) {
            var Tc = Sc.userAgent;
            if (Tc) {
                Rc = Tc;
                break a
            }
        }
        Rc = ""
    }
    var I = function(a) {
        return bb(Rc, a)
    };
    var Uc = function() {
        return (I("Chrome") || I("CriOS")) && !I("Edge")
    };
    var Vc = function() {
            return I("iPhone") && !I("iPod") && !I("iPad")
        },
        Wc = function() {
            Vc() || I("iPad") || I("iPod")
        };
    var Xc = function(a) {
        Xc[" "](a);
        return a
    };
    Xc[" "] = ya;
    var $c = function(a, b) {
        var c = Zc;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    var ad = I("Opera"),
        bd = I("Trident") || I("MSIE"),
        cd = I("Edge"),
        dd = I("Gecko") && !(bb(Rc.toLowerCase(), "webkit") && !I("Edge")) && !(I("Trident") || I("MSIE")) && !I("Edge"),
        ed = bb(Rc.toLowerCase(), "webkit") && !I("Edge");
    ed && I("Mobile");
    I("Macintosh");
    I("Windows");
    I("Linux") || I("CrOS");
    var fd = ua.navigator || null;
    fd && bb(fd.appVersion || "", "X11");
    I("Android");
    Vc();
    I("iPad");
    I("iPod");
    Wc();
    bb(Rc.toLowerCase(), "kaios");
    var gd = function() {
            var a = ua.document;
            return a ? a.documentMode : void 0
        },
        hd;
    a: {
        var id = "",
            jd = function() {
                var a = Rc;
                if (dd) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (cd) return /Edge\/([\d\.]+)/.exec(a);
                if (bd) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (ed) return /WebKit\/(\S+)/.exec(a);
                if (ad) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();jd && (id = jd ? jd[1] : "");
        if (bd) {
            var kd = gd();
            if (null != kd && kd > parseFloat(id)) {
                hd = String(kd);
                break a
            }
        }
        hd = id
    }
    var ld = hd,
        Zc = {},
        md = function(a) {
            return $c(a, function() {
                for (var b = 0, c = ab(String(ld)).split("."), d = ab(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                    var g = c[f] || "",
                        h = d[f] || "";
                    do {
                        g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                        h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                        if (0 == g[0].length && 0 == h[0].length) break;
                        b = cb(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || cb(0 == g[2].length, 0 == h[2].length) || cb(g[2], h[2]);
                        g = g[3];
                        h = h[3]
                    } while (0 == b)
                }
                return 0 <= b
            })
        },
        nd;
    var od = ua.document;
    nd = od && bd ? gd() || ("CSS1Compat" == od.compatMode ? parseInt(ld, 10) : 5) : void 0;
    var pd = !bd || 9 <= Number(nd),
        qd = bd && !md("9");
    !ed || md("528");
    dd && md("1.9b") || bd && md("8") || ad && md("9.5") || ed && md("528");
    dd && !md("8") || bd && md("9");
    var rd = function() {
        if (!ua.addEventListener || !Object.defineProperty) return !1;
        var a = !1,
            b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
        try {
            ua.addEventListener("test", ya, b), ua.removeEventListener("test", ya, b)
        } catch (c) {}
        return a
    }();
    var J = function() {
        this.Ca = this.Ca;
        this.va = this.va
    };
    J.prototype.Ca = !1;
    J.prototype.dispose = function() {
        this.Ca || (this.Ca = !0, this.Wa())
    };
    var td = function(a, b) {
        var c = Ja(sd, b);
        a.Ca ? va(void 0) ? c.call(void 0) : c() : (a.va || (a.va = []), a.va.push(va(void 0) ? Ia(c, void 0) : c))
    };
    J.prototype.Wa = function() {
        if (this.va)
            for (; this.va.length;) this.va.shift()()
    };
    var sd = function(a) {
        a && "function" == typeof a.dispose && a.dispose()
    };
    var ud = function(a, b) {
        this.type = a;
        this.o = this.target = b;
        this.v = !1;
        this.Be = !0
    };
    ud.prototype.stopPropagation = function() {
        this.v = !0
    };
    ud.prototype.preventDefault = function() {
        this.Be = !1
    };
    var wd = function(a, b) {
        ud.call(this, a ? a.type : "");
        this.relatedTarget = this.o = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.key = "";
        this.H = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.pointerId = 0;
        this.pointerType = "";
        this.j = null;
        if (a) {
            var c = this.type = a.type,
                d = a.changedTouches ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.o = b;
            var e = a.relatedTarget;
            if (e) {
                if (dd) {
                    a: {
                        try {
                            Xc(e.nodeName);
                            var f = !0;
                            break a
                        } catch (g) {}
                        f = !1
                    }
                    f || (e = null)
                }
            } else "mouseover" == c ? e = a.fromElement : "mouseout" == c && (e = a.toElement);
            this.relatedTarget = e;
            null === d ? (this.offsetX = ed || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = ed || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX ||
                0, this.screenY = d.screenY || 0);
            this.button = a.button;
            this.H = a.keyCode || 0;
            this.key = a.key || "";
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.pointerId = a.pointerId || 0;
            this.pointerType = wa(a.pointerType) ? a.pointerType : vd[a.pointerType] || "";
            this.j = a;
            a.defaultPrevented && this.preventDefault()
        }
    };
    z(wd, ud);
    var vd = {
        2: "touch",
        3: "pen",
        4: "mouse"
    };
    wd.prototype.stopPropagation = function() {
        wd.Mb.stopPropagation.call(this);
        this.j.stopPropagation ? this.j.stopPropagation() : this.j.cancelBubble = !0
    };
    wd.prototype.preventDefault = function() {
        wd.Mb.preventDefault.call(this);
        var a = this.j;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, qd) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    wd.prototype.R = function() {
        return this.j
    };
    var xd = "closure_listenable_" + (1E6 * Math.random() | 0),
        yd = 0;
    var zd = function(a, b, c, d, e) {
            this.listener = a;
            this.j = null;
            this.src = b;
            this.type = c;
            this.capture = !!d;
            this.Ed = e;
            this.key = ++yd;
            this.removed = this.Bd = !1
        },
        Ad = function(a) {
            a.removed = !0;
            a.listener = null;
            a.j = null;
            a.src = null;
            a.Ed = null
        };
    var Bd = function(a) {
        this.src = a;
        this.j = {};
        this.o = 0
    };
    Bd.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.j[f];
        a || (a = this.j[f] = [], this.o++);
        var g = Cd(a, b, d, e); - 1 < g ? (b = a[g], c || (b.Bd = !1)) : (b = new zd(b, this.src, f, !!d, e), b.Bd = c, a.push(b));
        return b
    };
    var Dd = function(a, b) {
            var c = b.type;
            c in a.j && Sa(a.j[c], b) && (Ad(b), 0 == a.j[c].length && (delete a.j[c], a.o--))
        },
        Cd = function(a, b, c, d) {
            for (var e = 0; e < a.length; ++e) {
                var f = a[e];
                if (!f.removed && f.listener == b && f.capture == !!c && f.Ed == d) return e
            }
            return -1
        };
    var Ed = "closure_lm_" + (1E6 * Math.random() | 0),
        Fd = {},
        Gd = 0,
        Id = function(a, b, c, d, e) {
            if (d && d.once) return Hd(a, b, c, d, e);
            if (Ca(b)) {
                for (var f = 0; f < b.length; f++) Id(a, b[f], c, d, e);
                return null
            }
            c = Jd(c);
            return a && a[xd] ? Kd(a, b, c, Fa(d) ? !!d.capture : !!d, e) : Ld(a, b, c, !1, d, e)
        },
        Ld = function(a, b, c, d, e, f) {
            if (!b) throw Error("h");
            var g = Fa(e) ? !!e.capture : !!e,
                h = Md(a);
            h || (a[Ed] = h = new Bd(a));
            c = h.add(b, c, d, g, f);
            if (c.j) return c;
            d = Nd();
            c.j = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener) rd || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(),
                d, e);
            else if (a.attachEvent) a.attachEvent(Od(b.toString()), d);
            else if (a.addListener && a.removeListener) a.addListener(d);
            else throw Error("i");
            Gd++;
            return c
        },
        Nd = function() {
            var a = Pd,
                b = pd ? function(c) {
                    return a.call(b.src, b.listener, c)
                } : function(c) {
                    c = a.call(b.src, b.listener, c);
                    if (!c) return c
                };
            return b
        },
        Hd = function(a, b, c, d, e) {
            if (Ca(b)) {
                for (var f = 0; f < b.length; f++) Hd(a, b[f], c, d, e);
                return null
            }
            c = Jd(c);
            return a && a[xd] ? a.j.add(String(b), c, !0, Fa(d) ? !!d.capture : !!d, e) : Ld(a, b, c, !0, d, e)
        },
        Qd = function(a, b, c, d, e) {
            if (Ca(b))
                for (var f =
                        0; f < b.length; f++) Qd(a, b[f], c, d, e);
            else(d = Fa(d) ? !!d.capture : !!d, c = Jd(c), a && a[xd]) ? (a = a.j, b = String(b).toString(), b in a.j && (f = a.j[b], c = Cd(f, c, d, e), -1 < c && (Ad(f[c]), Array.prototype.splice.call(f, c, 1), 0 == f.length && (delete a.j[b], a.o--)))) : a && (a = Md(a)) && (b = a.j[b.toString()], a = -1, b && (a = Cd(b, c, d, e)), (c = -1 < a ? b[a] : null) && Rd(c))
        },
        Rd = function(a) {
            if (!xa(a) && a && !a.removed) {
                var b = a.src;
                if (b && b[xd]) Dd(b.j, a);
                else {
                    var c = a.type,
                        d = a.j;
                    b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Od(c),
                        d) : b.addListener && b.removeListener && b.removeListener(d);
                    Gd--;
                    (c = Md(b)) ? (Dd(c, a), 0 == c.o && (c.src = null, b[Ed] = null)) : Ad(a)
                }
            }
        },
        Od = function(a) {
            return a in Fd ? Fd[a] : Fd[a] = "on" + a
        },
        Td = function(a, b, c, d) {
            var e = !0;
            if (a = Md(a))
                if (b = a.j[b.toString()])
                    for (b = b.concat(), a = 0; a < b.length; a++) {
                        var f = b[a];
                        f && f.capture == c && !f.removed && (f = Sd(f, d), e = e && !1 !== f)
                    }
            return e
        },
        Sd = function(a, b) {
            var c = a.listener,
                d = a.Ed || a.src;
            a.Bd && Rd(a);
            return c.call(d, b)
        },
        Pd = function(a, b) {
            if (a.removed) return !0;
            if (!pd) {
                var c;
                if (!(c = b)) a: {
                    c = ["window",
                        "event"
                    ];
                    for (var d = ua, e = 0; e < c.length; e++)
                        if (d = d[c[e]], null == d) {
                            c = null;
                            break a
                        } c = d
                }
                e = c;
                c = new wd(e, this);
                d = !0;
                if (!(0 > e.keyCode || void 0 != e.returnValue)) {
                    a: {
                        var f = !1;
                        if (0 == e.keyCode) try {
                            e.keyCode = -1;
                            break a
                        } catch (k) {
                            f = !0
                        }
                        if (f || void 0 == e.returnValue) e.returnValue = !0
                    }
                    e = [];
                    for (f = c.o; f; f = f.parentNode) e.push(f);f = a.type;
                    for (var g = e.length - 1; !c.v && 0 <= g; g--) {
                        c.o = e[g];
                        var h = Td(e[g], f, !0, c);
                        d = d && h
                    }
                    for (g = 0; !c.v && g < e.length; g++) c.o = e[g],
                    h = Td(e[g], f, !1, c),
                    d = d && h
                }
                return d
            }
            return Sd(a, new wd(b, this))
        },
        Md = function(a) {
            a =
                a[Ed];
            return a instanceof Bd ? a : null
        },
        Ud = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
        Jd = function(a) {
            if (Ea(a)) return a;
            a[Ud] || (a[Ud] = function(b) {
                return a.handleEvent(b)
            });
            return a[Ud]
        };
    var Vd = function() {
        J.call(this);
        this.j = new Bd(this);
        this.R = this;
        this.H = null
    };
    z(Vd, J);
    Vd.prototype[xd] = !0;
    Vd.prototype.removeEventListener = function(a, b, c, d) {
        Qd(this, a, b, c, d)
    };
    var Xd = function(a, b) {
        var c, d = a.H;
        if (d)
            for (c = []; d; d = d.H) c.push(d);
        d = a.R;
        var e = b,
            f = e.type || e;
        if (wa(e)) e = new ud(e, d);
        else if (e instanceof ud) e.target = e.target || d;
        else {
            var g = e;
            e = new ud(f, d);
            jb(e, g)
        }
        g = !0;
        if (c)
            for (var h = c.length - 1; !e.v && 0 <= h; h--) {
                var k = e.o = c[h];
                g = Wd(k, f, !0, e) && g
            }
        e.v || (k = e.o = d, g = Wd(k, f, !0, e) && g, e.v || (g = Wd(k, f, !1, e) && g));
        if (c)
            for (h = 0; !e.v && h < c.length; h++) k = e.o = c[h], g = Wd(k, f, !1, e) && g
    };
    Vd.prototype.Wa = function() {
        Vd.Mb.Wa.call(this);
        if (this.j) {
            var a = this.j,
                b = 0,
                c;
            for (c in a.j) {
                for (var d = a.j[c], e = 0; e < d.length; e++) ++b, Ad(d[e]);
                delete a.j[c];
                a.o--
            }
        }
        this.H = null
    };
    var Kd = function(a, b, c, d, e) {
            return a.j.add(String(b), c, !1, d, e)
        },
        Wd = function(a, b, c, d) {
            b = a.j.j[String(b)];
            if (!b) return !0;
            b = b.concat();
            for (var e = !0, f = 0; f < b.length; ++f) {
                var g = b[f];
                if (g && !g.removed && g.capture == c) {
                    var h = g.listener,
                        k = g.Ed || g.src;
                    g.Bd && Dd(a.j, g);
                    e = !1 !== h.call(k, d) && e
                }
            }
            return e && 0 != d.Be
        };
    var Yd = function(a, b) {
            this.H = a;
            this.v = b;
            this.S = this.j = null;
            this.U = this.R = !1;
            this.T = [];
            this.o = null
        },
        Zd = !(!window.AudioContext && !window.webkitAudioContext) && !!window.GainNode,
        ce = function(a) {
            var b = $d.Aa();
            if (Zd && !b.j) {
                b.j = new(window.AudioContext || window.webkitAudioContext);
                b.S = b.j.createGain();
                b.S.connect(b.j.destination);
                for (var c in b.H) b.H[c].v = b.j;
                for (c in b.v) ae(b.v[c], b.j, b.S);
                be(b);
                Hd(a, ["click", "pointerup", "mouseup", "touchend"], function() {
                    b.j.resume();
                    be(b)
                }, !0)
            }
        },
        de = function(a) {
            a.o = a.j.createBufferSource();
            a.o.buffer = a.j.createBuffer(1, 1, 22050);
            a.o.connect(a.j.destination);
            a.o.onended = function() {
                a.U = !0;
                for (var b = 0; b < a.T.length; b++) a.T[b]()
            };
            a.o.start(0)
        },
        be = function(a) {
            a.j && (null == a.o ? de(a) : va(a.o.playbackState) ? a.o.playbackState !== a.o.PLAYING_STATE && a.o.playbackState !== a.o.FINISHED_STATE && de(a) : de(a))
        };
    Yd.prototype.getContext = function() {
        return this.j
    };
    Yd.prototype.destroy = function() {
        this.j.close();
        this.j = null
    };
    Yd.prototype.reset = function() {
        for (var a in this.H) this.H[a].nd = [];
        for (var b in this.v) ee(this.v[b])
    };
    var fe = function(a, b, c) {
            this.S = a;
            this.T = b;
            this.H = c;
            this.v = {};
            this.R = this.j = this.o = null;
            this.U = 0
        },
        ae = function(a, b, c) {
            a.j = b;
            a.R = c
        };
    fe.prototype.getContext = function() {
        return this.j
    };
    var ge = document.createElement("audio"),
        he = Ea(ge.canPlayType) && "" != ge.canPlayType("audio/mpeg") ? ".mp3" : ".ogg",
        ie = function(a) {
            if (a.j) {
                var b = 1E3 * a.j.currentTime,
                    c;
                for (c in a.v) {
                    var d = a.v[c];
                    !d.af && d.Ae + a.H < b && delete a.v[c]
                }
            }
        },
        je = function(a) {
            !a.o && a.j.createGain && (a.o = a.j.createGain())
        };
    fe.prototype.play = function(a, b, c, d, e) {
        if (!this.j || !this.R) return -1;
        ie(this);
        a = this.j.currentTime + (a || 0) / 1E3;
        d || (d = this.j.createBufferSource(), d.playbackRate.setValueAtTime(1, this.j.currentTime));
        je(this);
        this.o ? (d.connect(this.o), this.o.connect(this.R)) : d.connect(this.R);
        d.loop = !!b;
        try {
            d.buffer = this.S.R
        } catch (h) {
            return -1
        }
        c = c || 0;
        var f = this.T / 1E3,
            g = this.H / 1E3 / d.playbackRate.value;
        b ? (d.loopStart = f + (e ? c / 1E3 : 0), d.loopEnd = f + g, d.start(a, f + c / 1E3)) : d.start(a, f + c / 1E3, g);
        e = this.U++;
        this.v[e] = {
            node: d,
            Ae: 1E3 *
                a - c,
            af: !!b
        };
        return e
    };
    var ee = function(a, b) {
            ie(a);
            if (va(b)) {
                if (a.v[b]) {
                    try {
                        a.v[b].node.stop(0)
                    } catch (e) {}
                    var c = (1E3 * a.j.currentTime - a.v[b].Ae) % a.H;
                    delete a.v[b];
                    return [c]
                }
                return []
            }
            c = [];
            for (var d in a.v) c = c.concat(ee(a, d));
            return c
        },
        ke = function(a, b) {
            Mc.call(this, a + b + he);
            this.v = this.R = null;
            this.o = 0
        };
    z(ke, Mc);
    ke.prototype.preload = function(a, b) {
        a && Oc(this, a);
        if (0 == this.o && this.v) {
            var c = this,
                d = new XMLHttpRequest;
            d.open("GET", this.H, !0);
            d.responseType = "arraybuffer";
            d.onload = function() {
                c.v.decodeAudioData(d.response, function(a) {
                    a && (c.R = a, c.o = 3, Nc(c))
                });
                c.o = 2
            };
            b && (d.onprogress = function(a) {
                a.lengthComputable && b(a.loaded / a.total)
            });
            d.send();
            this.o = 1
        }
    };
    var $d = function() {
        Yd.call(this, le, me)
    };
    z($d, Yd);
    var le = {
            nc: new ke("/logos/2018/halloween18/rc5/", "sfx"),
            Ad: new ke("/logos/2018/halloween18/rc5/", "tutorial"),
            yd: new ke("/logos/2018/halloween18/rc5/", "lobby"),
            Pd: new ke("/logos/2018/halloween18/rc5/", "outside"),
            xd: new ke("/logos/2018/halloween18/rc5/", "hurry_up"),
            Uc: new ke("/logos/2018/halloween18/rc5/", "postgame")
        },
        me = {
            Ge: new fe(le.nc, 0, 1541.156),
            He: new fe(le.nc, 2541.156, 1810.431),
            Ie: new fe(le.nc, 5351.587, 559.773),
            xd: new fe(le.xd, 0, 26250),
            yd: new fe(le.yd, 0, 17142.854),
            Je: new fe(le.Uc, 0, 16666.667),
            Ke: new fe(le.Uc, 17666.667, 5454.542),
            Pd: new fe(le.Pd, 0, 38540.146),
            Qd: new fe(le.nc, 6911.361, 1316.009),
            Le: new fe(le.nc, 9227.37, 1156.44),
            qe: new fe(le.nc, 11383.81, 3412.29),
            Me: new fe(le.nc, 15796.1, 1699.297),
            Ne: new fe(le.nc, 18495.397, 1830.454),
            Oe: new fe(le.nc, 21325.85, 1841.905),
            Pe: new fe(le.nc, 24167.755, 4530.68),
            Ad: new fe(le.Ad, 0, 40615.375),
            Se: new fe(le.Uc, 24121.208, 16E3),
            Te: new fe(le.Uc, 41121.208, 5818.187)
        };
    Aa($d);
    var ne = E ? 540 : 960,
        oe = E ? 960 : 540,
        pe = E ? 540 : Sb ? 960 : 510,
        qe = E ? 960 : Sb ? 540 : 220,
        re = 1E3 / 24,
        se = document.querySelector("#hplogo"),
        K = document.getElementById("hpcanvas"),
        te = K.getContext("2d"),
        ue = {
            87: !0,
            65: !0,
            83: !0,
            68: !0,
            32: !0,
            37: !0,
            38: !0,
            39: !0,
            40: !0,
            192: !1
        },
        ve = E ? 78 : 0,
        Xb = 0 <= "en en-US en-GB ko ko-KR ko-US".split(" ").indexOf(gc) ? "Poor Story" : "Noto Sans",
        we = Xb + ",sans-serif",
        xe = "true" == ec("disable_host", "false");
    var ze = function(a, b) {
            this.j = [];
            this.o = [];
            for (var c = 0, d; d = b[c]; c++) ye(this, new Pc(a + d.filename), d.size)
        },
        ye = function(a, b, c) {
            a.j.push(b);
            a.o.push(c);
            return a.j.length - 1
        };
    ze.prototype.preload = function(a, b) {
        var c = this.j[xa(a) ? a : a[0]];
        b && Oc(c, b);
        c.preload()
    };
    var Be = function(a, b) {
            function c() {
                0 == --e && b && b()
            }
            for (var d = Ae, e = a.length, f = 0; f < a.length; ++f) d.preload(a[f], c)
        },
        Ce = function(a, b, c, d, e, f, g, h, k) {
            var l = c[1],
                m = c[2],
                q = c[3],
                w = c[4];
            if (void 0 == d) {
                var r = l;
                var y = m;
                var t = q;
                var u = w;
                g = f = 0;
                d = q;
                e = w
            } else void 0 == f ? (r = l, y = m, t = q, u = w, g = f = 0) : (r = l + 0, y = m + 0, t = d, u = e, d = h, e = k);
            r < l && (k = l - r, r = l, t -= k, f += k, d -= k);
            y < m && (k = m - y, y = m, u -= k, g += k, e -= k);
            r + t > l + q && (k = r + t - (l + q), t -= k, d -= k);
            y + u > m + w && (k = y + u - (m + w), u -= k, e -= k);
            a = a.j[xa(c) ? c : c[0]];
            if (!a.j) throw Error("m");
            0 < t && 0 < u && b.drawImage(a.image,
                r, y, t, u, f, g, d, e)
        };
    ze.prototype.draw = function(a, b, c, d, e, f, g, h) {
        var k = a[3],
            l = a[4];
        e = void 0 != e ? e : 1;
        b.save();
        b.translate(c, d);
        b.scale(g ? -e : e, h ? -e : e);
        Ce(this, b, a, k, l, -k * (f ? .5 : g ? 1 : 0), -l * (f ? .5 : h ? 1 : 0), k, l);
        b.restore()
    };
    var Ee = function() {
        ze.call(this, "/logos/2018/halloween18/rc5/", De)
    };
    z(Ee, ze);
    var De = [{
            filename: "main-sprite.png",
            size: [2042, 565]
        }, {
            filename: "tutorial-sprite.png",
            size: [2044, 1615]
        }, {
            filename: "alpha-sprite.png",
            size: [2045, 1504]
        }, {
            filename: "bravo-sprite.png",
            size: [2047, 1557]
        }, {
            filename: "desktop-sprite.png",
            size: [3849, 1083]
        }, {
            filename: "initial-sprite.png",
            size: [1017, 412]
        }, {
            filename: "mobile-sprite.png",
            size: [3798, 960]
        }, {
            filename: "dogfood-sprite.png",
            size: [60, 60]
        }],
        Fe = [2, 390, 1404, 75, 75],
        Ge = [4, 0, 0, 960, 540],
        He = [6, 0, 0, 540, 960],
        Ie = [0, 951, 271, 306, 117],
        Je = [0, 951, 235, 32, 33],
        Ke = [4, 963,
            0, 960, 540
        ],
        Le = [6, 543, 0, 540, 960],
        Me = [0, 1795, 271, 166, 192],
        Ne = [5, 93, 0, 90, 97],
        Oe = [5, 0, 0, 90, 98],
        Pe = [1, 874, 718, 300, 100],
        Qe = [0, 459, 415, 96, 96],
        Re = [4, 1926, 0, 960, 540],
        Se = [6, 1086, 0, 540, 960],
        Te = [1, 0, 0, 512, 512],
        Ue = [1, 515, 0, 512, 512],
        Xe = [1, 1829, 718, 156, 76],
        Ye = [1, 874, 668, 56, 37],
        Ze = [1, 1177, 718, 275, 261],
        $e = [1, 1924, 0, 116, 116],
        af = [4, 0, 543, 960, 540],
        bf = [6, 2172, 0, 540, 960],
        cf = [4, 963, 543, 960, 540],
        df = [6, 2715, 0, 540, 960],
        ef = [1, 1455, 718, 205, 93],
        ff = [0, 1528, 271, 264, 202],
        gf = [0, 1260, 271, 265, 265],
        hf = [1, 447, 515, 424, 462],
        jf = [1, 1924,
            119, 100, 98
        ],
        kf = [1, 1030, 0, 444, 356],
        lf = [1, 1477, 0, 444, 356],
        mf = [1, 1477, 0, 444, 356],
        nf = [1, 1030, 359, 444, 356],
        of = [1, 1477, 359, 444, 356],
        pf = [1, 0, 515, 444, 356],
        qf = [0, 1964, 271, 77, 77],
        rf = [0, 0, 0, 640, 141],
        sf = [1, 1663, 718, 163, 75],
        tf = [1, 933, 668, 56, 37],
        uf = [4, 1926, 543, 960, 540],
        vf = [6, 3258, 0, 540, 960],
        wf = [
            [1, 874, 515, 150, 150],
            [1, 874, 515, 150, 150],
            [1, 1663, 796, 150, 150],
            [1, 1663, 796, 150, 150],
            [1, 1663, 796, 150, 150],
            [1, 1816, 797, 150, 150],
            [1, 1816, 797, 150, 150],
            [1, 1816, 797, 150, 150],
            [1, 1455, 814, 150, 150],
            [1, 1455, 814, 150, 150],
            [1, 1455, 814,
                150, 150
            ],
            [1, 874, 821, 150, 150],
            [1, 874, 821, 150, 150],
            [1, 874, 821, 150, 150],
            [1, 0, 874, 150, 150],
            [1, 153, 874, 150, 150],
            [1, 153, 874, 150, 150],
            [1, 153, 874, 150, 150],
            [1, 1608, 949, 150, 150],
            [1, 1608, 949, 150, 150],
            [1, 1761, 950, 150, 150],
            [1, 1761, 950, 150, 150],
            [1, 1761, 950, 150, 150],
            [1, 874, 515, 150, 150],
            [1, 1455, 967, 150, 150],
            [1, 874, 974, 150, 150],
            [1, 874, 974, 150, 150],
            [1, 306, 980, 150, 150],
            [1, 1816, 797, 150, 150],
            [1, 1816, 797, 150, 150],
            [1, 1816, 797, 150, 150],
            [1, 1455, 814, 150, 150],
            [1, 1455, 814, 150, 150],
            [1, 1455, 814, 150, 150],
            [1, 874, 821, 150, 150],
            [1,
                874, 821, 150, 150
            ],
            [1, 874, 821, 150, 150],
            [1, 0, 874, 150, 150],
            [1, 153, 874, 150, 150],
            [1, 153, 874, 150, 150],
            [1, 153, 874, 150, 150],
            [1, 1608, 949, 150, 150],
            [1, 1608, 949, 150, 150],
            [1, 1761, 950, 150, 150],
            [1, 1761, 950, 150, 150],
            [1, 1761, 950, 150, 150]
        ],
        xf = [
            [1, 1988, 688, 50, 50],
            [1, 1988, 688, 50, 50],
            [1, 1988, 741, 50, 50],
            [1, 1988, 741, 50, 50],
            [1, 1608, 814, 50, 50],
            [1, 1608, 814, 50, 50],
            [1, 1105, 821, 50, 50],
            [1, 1105, 821, 50, 50],
            [1, 1608, 867, 50, 50],
            [1, 1608, 867, 50, 50],
            [1, 384, 874, 50, 50],
            [1, 384, 874, 50, 50],
            [1, 1105, 874, 50, 50],
            [1, 1105, 874, 50, 50],
            [1, 1105, 927,
                50, 50
            ],
            [1, 1105, 927, 50, 50],
            [1, 1988, 688, 50, 50],
            [1, 1988, 688, 50, 50],
            [1, 1988, 741, 50, 50],
            [1, 1988, 741, 50, 50],
            [1, 1608, 814, 50, 50],
            [1, 1608, 814, 50, 50],
            [1, 1105, 821, 50, 50],
            [1, 1992, 953, 50, 50],
            [1, 1992, 1006, 50, 50],
            [1, 765, 1058, 50, 50],
            [1, 818, 1058, 50, 50],
            [1, 818, 1058, 50, 50],
            [1, 1992, 1059, 50, 50],
            [1, 1992, 1059, 50, 50],
            [1, 1333, 1060, 50, 50],
            [1, 1333, 1060, 50, 50],
            [1, 1386, 1060, 50, 50],
            [1, 1386, 1060, 50, 50],
            [1, 1992, 1112, 50, 50],
            [1, 1992, 1112, 50, 50],
            [1, 1486, 1198, 50, 50],
            [1, 1486, 1198, 50, 50],
            [1, 1539, 1198, 50, 50],
            [1, 1539, 1198, 50, 50],
            [1, 1224,
                1213, 50, 50
            ],
            [1, 1224, 1213, 50, 50],
            [1, 818, 1058, 50, 50],
            [1, 818, 1058, 50, 50],
            [1, 1992, 1059, 50, 50],
            [1, 1992, 1059, 50, 50],
            [1, 1333, 1060, 50, 50],
            [1, 1333, 1060, 50, 50],
            [1, 1386, 1060, 50, 50],
            [1, 1386, 1060, 50, 50],
            [1, 1992, 1112, 50, 50],
            [1, 1992, 1112, 50, 50],
            [1, 1486, 1198, 50, 50],
            [1, 1486, 1198, 50, 50],
            [1, 1277, 1213, 50, 50],
            [1, 1277, 1213, 50, 50],
            [1, 1149, 1288, 50, 50],
            [1, 1608, 867, 50, 50],
            [1, 384, 874, 50, 50],
            [1, 384, 874, 50, 50],
            [1, 1105, 874, 50, 50],
            [1, 1105, 874, 50, 50],
            [1, 1105, 927, 50, 50],
            [1, 1105, 927, 50, 50],
            [1, 1988, 688, 50, 50],
            [1, 1988, 688, 50, 50],
            [1,
                1988, 741, 50, 50
            ],
            [1, 1988, 741, 50, 50],
            [1, 1608, 814, 50, 50],
            [1, 1608, 814, 50, 50],
            [1, 1105, 821, 50, 50],
            [1, 1105, 821, 50, 50],
            [1, 234, 1333, 50, 50],
            [1, 234, 1333, 50, 50],
            [1, 1149, 1341, 50, 50],
            [1, 384, 874, 50, 50],
            [1, 1105, 874, 50, 50],
            [1, 1105, 874, 50, 50],
            [1, 1105, 927, 50, 50],
            [1, 1105, 927, 50, 50]
        ],
        yf = [
            [1, 1383, 1429, 50, 50],
            [1, 1383, 1429, 50, 50],
            [1, 702, 1439, 50, 50],
            [1, 702, 1439, 50, 50],
            [1, 1077, 1444, 50, 50],
            [1, 1077, 1444, 50, 50],
            [1, 702, 1492, 50, 50],
            [1, 702, 1492, 50, 50],
            [1, 1311, 1507, 50, 50],
            [1, 1311, 1507, 50, 50],
            [1, 755, 1511, 50, 50],
            [1, 755, 1511, 50, 50],
            [1, 234, 1517, 50, 50],
            [1, 234, 1517, 50, 50],
            [1, 287, 1517, 50, 50],
            [1, 287, 1517, 50, 50],
            [1, 1383, 1429, 50, 50],
            [1, 340, 1517, 50, 50],
            [1, 393, 1517, 50, 50],
            [1, 393, 1517, 50, 50],
            [1, 446, 1517, 50, 50],
            [1, 499, 1517, 50, 50],
            [1, 552, 1517, 50, 50],
            [1, 605, 1517, 50, 50],
            [1, 808, 1519, 50, 50],
            [1, 808, 1519, 50, 50],
            [1, 861, 1519, 50, 50],
            [1, 861, 1519, 50, 50],
            [1, 914, 1519, 50, 50],
            [1, 914, 1519, 50, 50],
            [1, 967, 1522, 50, 50],
            [1, 967, 1522, 50, 50],
            [1, 1020, 1522, 50, 50],
            [1, 1020, 1522, 50, 50],
            [1, 658, 1545, 50, 50],
            [1, 658, 1545, 50, 50],
            [1, 1311, 1560, 50, 50],
            [1, 1311, 1560, 50, 50],
            [1,
                605, 1517, 50, 50
            ],
            [1, 605, 1517, 50, 50],
            [1, 808, 1519, 50, 50],
            [1, 808, 1519, 50, 50],
            [1, 861, 1519, 50, 50],
            [1, 711, 1564, 50, 50],
            [1, 1364, 1564, 50, 50],
            [1, 1364, 1564, 50, 50],
            [1, 1417, 1564, 50, 50],
            [1, 1470, 1564, 50, 50],
            [1, 1383, 1429, 50, 50],
            [1, 1383, 1429, 50, 50],
            [1, 702, 1439, 50, 50],
            [1, 702, 1439, 50, 50],
            [1, 1077, 1444, 50, 50],
            [1, 1077, 1444, 50, 50],
            [1, 702, 1492, 50, 50],
            [1, 702, 1492, 50, 50],
            [1, 1311, 1507, 50, 50],
            [1, 1311, 1507, 50, 50],
            [1, 755, 1511, 50, 50],
            [1, 755, 1511, 50, 50],
            [1, 234, 1517, 50, 50],
            [1, 1523, 1565, 50, 50],
            [1, 1576, 1565, 50, 50],
            [1, 1576, 1565, 50, 50],
            [1, 1629, 1565, 50, 50],
            [1, 1383, 1429, 50, 50],
            [1, 702, 1439, 50, 50],
            [1, 702, 1439, 50, 50],
            [1, 1077, 1444, 50, 50],
            [1, 1077, 1444, 50, 50],
            [1, 702, 1492, 50, 50],
            [1, 702, 1492, 50, 50],
            [1, 1311, 1507, 50, 50],
            [1, 1311, 1507, 50, 50],
            [1, 755, 1511, 50, 50],
            [1, 755, 1511, 50, 50],
            [1, 234, 1517, 50, 50],
            [1, 234, 1517, 50, 50],
            [1, 287, 1517, 50, 50],
            [1, 287, 1517, 50, 50]
        ],
        zf = [
            [5, 966, 0, 50, 50],
            [5, 966, 0, 50, 50],
            [5, 966, 53, 50, 50],
            [5, 966, 53, 50, 50],
            [5, 966, 106, 50, 50],
            [5, 966, 106, 50, 50],
            [5, 966, 159, 50, 50],
            [5, 966, 159, 50, 50],
            [5, 702, 332, 50, 50],
            [5, 702, 332, 50, 50],
            [5, 755, 332, 50,
                50
            ],
            [5, 755, 332, 50, 50],
            [5, 808, 332, 50, 50],
            [5, 808, 332, 50, 50],
            [5, 861, 332, 50, 50],
            [5, 861, 332, 50, 50],
            [5, 914, 332, 50, 50],
            [5, 914, 332, 50, 50],
            [5, 967, 332, 50, 50],
            [5, 78, 349, 50, 50],
            [5, 966, 106, 50, 50],
            [5, 966, 106, 50, 50],
            [5, 966, 159, 50, 50],
            [5, 966, 159, 50, 50],
            [5, 702, 332, 50, 50],
            [5, 702, 332, 50, 50],
            [5, 755, 332, 50, 50],
            [5, 755, 332, 50, 50],
            [5, 808, 332, 50, 50],
            [5, 808, 332, 50, 50],
            [5, 861, 332, 50, 50],
            [5, 861, 332, 50, 50],
            [5, 966, 0, 50, 50],
            [5, 966, 0, 50, 50],
            [5, 966, 53, 50, 50],
            [5, 966, 53, 50, 50],
            [5, 966, 106, 50, 50],
            [5, 966, 106, 50, 50],
            [5, 966, 159, 50, 50],
            [5, 966, 159, 50, 50],
            [5, 702, 332, 50, 50],
            [5, 702, 332, 50, 50],
            [5, 755, 332, 50, 50],
            [5, 755, 332, 50, 50],
            [5, 808, 332, 50, 50],
            [5, 808, 332, 50, 50],
            [5, 861, 332, 50, 50],
            [5, 861, 332, 50, 50],
            [5, 966, 0, 50, 50],
            [5, 966, 0, 50, 50],
            [5, 966, 53, 50, 50],
            [5, 966, 53, 50, 50],
            [5, 966, 106, 50, 50],
            [5, 966, 106, 50, 50],
            [5, 966, 159, 50, 50],
            [5, 966, 159, 50, 50],
            [5, 702, 332, 50, 50],
            [5, 702, 332, 50, 50],
            [5, 755, 332, 50, 50],
            [5, 755, 332, 50, 50],
            [5, 808, 332, 50, 50],
            [5, 808, 332, 50, 50],
            [5, 861, 332, 50, 50],
            [5, 861, 332, 50, 50],
            [5, 966, 0, 50, 50],
            [5, 966, 0, 50, 50],
            [5, 966, 53, 50, 50],
            [5, 966, 53,
                50, 50
            ],
            [5, 966, 106, 50, 50],
            [5, 966, 106, 50, 50],
            [5, 966, 159, 50, 50],
            [5, 966, 159, 50, 50],
            [5, 702, 332, 50, 50],
            [5, 702, 332, 50, 50],
            [5, 755, 332, 50, 50],
            [5, 755, 332, 50, 50],
            [5, 808, 332, 50, 50],
            [5, 808, 332, 50, 50],
            [5, 861, 332, 50, 50],
            [5, 861, 332, 50, 50]
        ],
        Af = [
            [0, 1067, 0, 314, 268],
            [0, 1384, 0, 314, 268],
            [0, 1384, 0, 314, 268],
            [0, 1701, 0, 314, 268],
            [0, 0, 144, 314, 268],
            [0, 317, 144, 314, 268],
            [0, 317, 144, 314, 268],
            [0, 634, 235, 314, 268]
        ],
        Bf = [
            [0, 2018, 0, 24, 31],
            [0, 2018, 0, 24, 31],
            [0, 2018, 34, 24, 31],
            [0, 2018, 34, 24, 31],
            [0, 2018, 68, 24, 31],
            [0, 2018, 68, 24, 31],
            [0, 2018,
                102, 24, 31
            ],
            [0, 2018, 102, 24, 31],
            [0, 2018, 136, 24, 31],
            [0, 2018, 136, 24, 31]
        ],
        Cf = [
            [5, 186, 0, 75, 80],
            [5, 186, 0, 75, 80],
            [5, 264, 0, 75, 80],
            [5, 342, 0, 75, 80],
            [5, 420, 0, 75, 80],
            [5, 498, 0, 75, 80],
            [5, 576, 0, 75, 80],
            [5, 654, 0, 75, 80],
            [5, 732, 0, 75, 80],
            [5, 810, 0, 75, 80],
            [5, 810, 0, 75, 80],
            [5, 888, 0, 75, 80],
            [5, 186, 83, 75, 80],
            [5, 186, 83, 75, 80],
            [5, 264, 83, 75, 80],
            [5, 342, 83, 75, 80],
            [5, 420, 83, 75, 80],
            [5, 498, 83, 75, 80],
            [5, 576, 83, 75, 80],
            [5, 654, 83, 75, 80],
            [5, 732, 83, 75, 80],
            [5, 810, 83, 75, 80],
            [5, 888, 83, 75, 80],
            [5, 888, 83, 75, 80],
            [5, 186, 0, 75, 80],
            [5, 186, 0, 75, 80],
            [5, 186, 0, 75, 80],
            [5, 342, 0, 75, 80],
            [5, 93, 100, 75, 80],
            [5, 0, 101, 75, 80],
            [5, 171, 166, 75, 80],
            [5, 249, 166, 75, 80],
            [5, 327, 166, 75, 80],
            [5, 405, 166, 75, 80],
            [5, 483, 166, 75, 80],
            [5, 561, 166, 75, 80],
            [5, 888, 0, 75, 80],
            [5, 810, 0, 75, 80],
            [5, 186, 83, 75, 80],
            [5, 264, 83, 75, 80],
            [5, 639, 166, 75, 80],
            [5, 420, 83, 75, 80],
            [5, 498, 83, 75, 80],
            [5, 717, 166, 75, 80],
            [5, 654, 83, 75, 80],
            [5, 732, 83, 75, 80],
            [5, 795, 166, 75, 80],
            [5, 888, 83, 75, 80],
            [5, 888, 83, 75, 80],
            [5, 888, 83, 75, 80]
        ],
        Df = [
            [5, 873, 166, 75, 80],
            [5, 78, 183, 75, 80],
            [5, 0, 184, 75, 80],
            [5, 156, 249, 75, 80],
            [5, 234, 249, 75, 80],
            [5, 312, 249, 75, 80],
            [5, 390, 249, 75, 80],
            [5, 468, 249, 75, 80],
            [5, 546, 249, 75, 80],
            [5, 624, 249, 75, 80],
            [5, 702, 249, 75, 80],
            [5, 780, 249, 75, 80],
            [5, 858, 249, 75, 80],
            [5, 936, 249, 75, 80],
            [5, 78, 266, 75, 80],
            [5, 0, 267, 75, 80]
        ],
        Ef = [
            [5, 156, 332, 75, 80],
            [5, 234, 332, 75, 80],
            [5, 312, 332, 75, 80],
            [5, 312, 332, 75, 80],
            [5, 390, 332, 75, 80],
            [5, 390, 332, 75, 80],
            [5, 468, 332, 75, 80],
            [5, 468, 332, 75, 80],
            [5, 546, 332, 75, 80],
            [5, 546, 332, 75, 80],
            [5, 546, 332, 75, 80],
            [5, 624, 332, 75, 80],
            [5, 624, 332, 75, 80],
            [5, 624, 332, 75, 80]
        ],
        Ff = [
            [0, 951, 391, 150, 150],
            [0, 951, 391, 150, 150],
            [0, 951,
                391, 150, 150
            ],
            [0, 1104, 391, 150, 150],
            [0, 1104, 391, 150, 150],
            [0, 1104, 391, 150, 150],
            [0, 0, 415, 150, 150],
            [0, 0, 415, 150, 150],
            [0, 0, 415, 150, 150],
            [0, 153, 415, 150, 150],
            [0, 153, 415, 150, 150],
            [0, 153, 415, 150, 150]
        ];
    Aa(Ee);
    var Gf = function(a) {
        return Ra(a, function(a) {
            a = a.toString(16);
            return 1 < a.length ? a : "0" + a
        }).join("")
    };
    I("Firefox");
    Vc() || I("iPod");
    I("iPad");
    !I("Android") || Uc() || I("Firefox") || I("Opera") || I("Silk");
    Uc();
    !I("Safari") || Uc() || I("Coast") || I("Opera") || I("Edge") || I("Silk") || I("Android") || Wc();
    var Hf = null,
        If = null,
        Jf = null,
        Lf = function(a, b) {
            Kf();
            for (var c = b ? Jf : Hf, d = [], e = 0; e < a.length; e += 3) {
                var f = a[e],
                    g = e + 1 < a.length,
                    h = g ? a[e + 1] : 0,
                    k = e + 2 < a.length,
                    l = k ? a[e + 2] : 0,
                    m = f >> 2;
                f = (f & 3) << 4 | h >> 4;
                h = (h & 15) << 2 | l >> 6;
                l &= 63;
                k || (l = 64, g || (h = 64));
                d.push(c[m], c[f], c[h], c[l])
            }
            return d.join("")
        },
        Nf = function(a) {
            var b = a.length,
                c = 0;
            "=" === a[b - 2] ? c = 2 : "=" === a[b - 1] && (c = 1);
            var d = new Uint8Array(Math.ceil(3 * b / 4) - c),
                e = 0;
            Mf(a, function(a) {
                d[e++] = a
            });
            return d.subarray(0, e)
        },
        Mf = function(a, b) {
            function c(b) {
                for (; d < a.length;) {
                    var c = a.charAt(d++),
                        e = If[c];
                    if (null != e) return e;
                    if (!/^[\s\xa0]*$/.test(c)) throw Error("n`" + c);
                }
                return b
            }
            Kf();
            for (var d = 0;;) {
                var e = c(-1),
                    f = c(0),
                    g = c(64),
                    h = c(64);
                if (64 === h && -1 === e) break;
                b(e << 2 | f >> 4);
                64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
            }
        },
        Kf = function() {
            if (!Hf) {
                Hf = {};
                If = {};
                Jf = {};
                for (var a = 0; 65 > a; a++) Hf[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a), If[Hf[a]] = a, Jf[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a), 62 <= a && (If["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)] =
                    a)
            }
        };
    var Of = 0,
        Pf = 0;
    var Rf = function(a) {
            this.o = null;
            this.S = this.T = this.j = this.v = this.R = 0;
            this.U = !1;
            a && Qf(this, a)
        },
        Sf = [],
        Qf = function(a, b) {
            var c = b.constructor === Uint8Array ? b : b.constructor === ArrayBuffer ? new Uint8Array(b) : b.constructor === Array ? new Uint8Array(b) : b.constructor === String ? Nf(b) : new Uint8Array(0);
            a.o = c;
            a.R = va(void 0) ? void 0 : 0;
            a.v = va(void 0) ? a.R + void 0 : a.o.length;
            a.j = a.R
        };
    Rf.prototype.reset = function() {
        this.j = this.R
    };
    Rf.prototype.advance = function(a) {
        this.j += a
    };
    Rf.prototype.H = function() {
        var a = this.o;
        var b = a[this.j + 0];
        var c = b & 127;
        if (128 > b) return this.j += 1, c;
        b = a[this.j + 1];
        c |= (b & 127) << 7;
        if (128 > b) return this.j += 2, c;
        b = a[this.j + 2];
        c |= (b & 127) << 14;
        if (128 > b) return this.j += 3, c;
        b = a[this.j + 3];
        c |= (b & 127) << 21;
        if (128 > b) return this.j += 4, c;
        b = a[this.j + 4];
        c |= (b & 15) << 28;
        if (128 > b) return this.j += 5, c >>> 0;
        this.j += 5;
        128 <= a[this.j++] && 128 <= a[this.j++] && 128 <= a[this.j++] && 128 <= a[this.j++] && this.j++;
        return c
    };
    Rf.prototype.W = Rf.prototype.H;
    var Tf = function(a) {
        a: {
            for (var b, c = 0, d, e = 0; 4 > e; e++)
                if (b = a.o[a.j++], c |= (b & 127) << 7 * e, 128 > b) {
                    a.T = c >>> 0;
                    a.S = 0;
                    break a
                } b = a.o[a.j++];c |= (b & 127) << 28;d = 0 | (b & 127) >> 4;
            if (128 > b) a.T = c >>> 0,
            a.S = d >>> 0;
            else {
                for (e = 0; 5 > e; e++)
                    if (b = a.o[a.j++], d |= (b & 127) << 7 * e + 3, 128 > b) {
                        a.T = c >>> 0;
                        a.S = d >>> 0;
                        break a
                    } a.U = !0
            }
        }
        b = a.T;c = a.S;
        if (a = c & 2147483648) b = ~b + 1 >>> 0,
        c = ~c >>> 0,
        0 == b && (c = c + 1 >>> 0);b = 4294967296 * c + b;
        return a ? -b : b
    };
    var Uf = function(a) {
            if (Sf.length) {
                var b = Sf.pop();
                a && Qf(b, a);
                a = b
            } else a = new Rf(a);
            this.o = a;
            this.v = this.j = -1;
            this.H = !1
        },
        N = function(a) {
            return 4 == a.v
        };
    Uf.prototype.reset = function() {
        this.o.reset();
        this.v = this.j = -1
    };
    Uf.prototype.advance = function(a) {
        this.o.advance(a)
    };
    var O = function(a) {
            var b = a.o;
            (b = b.j == b.v) || (b = a.H) || (b = a.o, b = b.U || 0 > b.j || b.j > b.v);
            if (b) return !1;
            b = a.o.H();
            var c = b & 7;
            if (0 != c && 5 != c && 1 != c && 2 != c && 3 != c && 4 != c) return a.H = !0, !1;
            a.j = b >>> 3;
            a.v = c;
            return !0
        },
        Q = function(a) {
            switch (a.v) {
                case 0:
                    if (0 != a.v) Q(a);
                    else {
                        for (a = a.o; a.o[a.j] & 128;) a.j++;
                        a.j++
                    }
                    break;
                case 1:
                    1 != a.v ? Q(a) : a.o.advance(8);
                    break;
                case 2:
                    if (2 != a.v) Q(a);
                    else {
                        var b = a.o.H();
                        a.o.advance(b)
                    }
                    break;
                case 5:
                    5 != a.v ? Q(a) : a.o.advance(4);
                    break;
                case 3:
                    b = a.j;
                    do {
                        if (!O(a)) {
                            a.H = !0;
                            break
                        }
                        if (4 == a.v) {
                            a.j != b && (a.H = !0);
                            break
                        }
                        Q(a)
                    } while (1)
            }
        },
        R = function(a, b, c) {
            var d = a.o.v,
                e = a.o.H();
            e = a.o.j + e;
            a.o.v = e;
            c(b, a);
            a.o.j = e;
            a.o.v = d
        },
        Vf = function(a) {
            return a.o.W()
        },
        Wf = function(a) {
            a = a.o;
            var b = a.o[a.j + 0];
            var c = a.o[a.j + 1];
            var d = a.o[a.j + 2],
                e = a.o[a.j + 3];
            a.j += 4;
            c = (b << 0 | c << 8 | d << 16 | e << 24) >>> 0;
            a = 2 * (c >> 31) + 1;
            b = c >>> 23 & 255;
            c &= 8388607;
            return 255 == b ? c ? NaN : Infinity * a : 0 == b ? a * Math.pow(2, -149) * c : a * Math.pow(2, b - 150) * (c + Math.pow(2, 23))
        },
        Xf = function(a) {
            return !!a.o.H()
        },
        Yf = function(a) {
            return Tf(a.o)
        },
        Zf = function(a) {
            var b = a.o.H();
            a = a.o;
            var c = a.o,
                d = a.j,
                e = d + b,
                f = [];
            for (b =
                ""; d < e;) {
                var g = c[d++];
                if (128 > g) f.push(g);
                else if (192 > g) continue;
                else if (224 > g) {
                    var h = c[d++];
                    f.push((g & 31) << 6 | h & 63)
                } else if (240 > g) {
                    h = c[d++];
                    var k = c[d++];
                    f.push((g & 15) << 12 | (h & 63) << 6 | k & 63)
                } else if (248 > g) {
                    h = c[d++];
                    k = c[d++];
                    var l = c[d++];
                    g = (g & 7) << 18 | (h & 63) << 12 | (k & 63) << 6 | l & 63;
                    g -= 65536;
                    f.push((g >> 10 & 1023) + 55296, (g & 1023) + 56320)
                }
                8192 <= f.length && (b += String.fromCharCode.apply(null, f), f.length = 0)
            }
            if (8192 >= f.length) f = String.fromCharCode.apply(null, f);
            else {
                c = "";
                for (e = 0; e < f.length; e += 8192) c += String.fromCharCode.apply(null,
                    Va(f, e, e + 8192));
                f = c
            }
            a.j = d;
            return b + f
        };
    var $f = function() {
        this.j = []
    };
    $f.prototype.length = function() {
        return this.j.length
    };
    var ag = function(a) {
            var b = a.j;
            a.j = [];
            return b
        },
        bg = function(a, b) {
            for (; 127 < b;) a.j.push(b & 127 | 128), b >>>= 7;
            a.j.push(b)
        },
        cg = function(a, b) {
            if (0 <= b) bg(a, b);
            else {
                for (var c = 0; 9 > c; c++) a.j.push(b & 127 | 128), b >>= 7;
                a.j.push(1)
            }
        };
    var dg = function() {
            this.v = [];
            this.o = 0;
            this.j = new $f
        },
        eg = function(a, b) {
            bg(a.j, 8 * b + 2);
            var c = ag(a.j);
            a.v.push(c);
            a.o += c.length;
            c.push(a.o);
            return c
        },
        fg = function(a, b) {
            var c = b.pop();
            for (c = a.o + a.j.length() - c; 127 < c;) b.push(c & 127 | 128), c >>>= 7, a.o++;
            b.push(c);
            a.o++
        };
    dg.prototype.reset = function() {
        this.v = [];
        ag(this.j);
        this.o = 0
    };
    var gg = function(a) {
            for (var b = new Uint8Array(a.o + a.j.length()), c = a.v, d = c.length, e = 0, f = 0; f < d; f++) {
                var g = c[f];
                b.set(g, e);
                e += g.length
            }
            c = ag(a.j);
            b.set(c, e);
            a.v = [b];
            return b
        },
        hg = function(a, b, c) {
            if (null != c) {
                bg(a.j, 8 * b);
                a = a.j;
                var d = c;
                c = 0 > d;
                d = Math.abs(d);
                b = d >>> 0;
                d = Math.floor((d - b) / 4294967296);
                d >>>= 0;
                c && (d = ~d >>> 0, b = (~b >>> 0) + 1, 4294967295 < b && (b = 0, d++, 4294967295 < d && (d = 0)));
                Of = b;
                Pf = d;
                c = Of;
                for (b = Pf; 0 < b || 127 < c;) a.j.push(c & 127 | 128), c = (c >>> 7 | b << 25) >>> 0, b >>>= 7;
                a.j.push(c)
            }
        },
        ig = function(a, b, c) {
            null != c && null != c && (bg(a.j,
                8 * b), cg(a.j, c))
        },
        jg = function(a, b, c) {
            if (null != c) {
                bg(a.j, 8 * b + 5);
                a = a.j;
                var d = c;
                d = (c = 0 > d ? 1 : 0) ? -d : d;
                0 === d ? 0 < 1 / d ? Of = Pf = 0 : (Pf = 0, Of = 2147483648) : isNaN(d) ? (Pf = 0, Of = 2147483647) : 3.4028234663852886E38 < d ? (Pf = 0, Of = (c << 31 | 2139095040) >>> 0) : 1.1754943508222875E-38 > d ? (d = Math.round(d / Math.pow(2, -149)), Pf = 0, Of = (c << 31 | d) >>> 0) : (b = Math.floor(Math.log(d) / Math.LN2), d *= Math.pow(2, -b), d = Math.round(8388608 * d) & 8388607, Pf = 0, Of = (c << 31 | b + 127 << 23 | d) >>> 0);
                c = Of;
                a.j.push(c >>> 0 & 255);
                a.j.push(c >>> 8 & 255);
                a.j.push(c >>> 16 & 255);
                a.j.push(c >>>
                    24 & 255)
            }
        },
        kg = function(a, b, c) {
            null != c && (bg(a.j, 8 * b), a.j.j.push(c ? 1 : 0))
        },
        lg = function(a, b, c) {
            null != c && (bg(a.j, 8 * b), cg(a.j, c))
        },
        mg = function(a, b, c) {
            if (null != c) {
                b = eg(a, b);
                for (var d = a.j, e = 0; e < c.length; e++) {
                    var f = c.charCodeAt(e);
                    if (128 > f) d.j.push(f);
                    else if (2048 > f) d.j.push(f >> 6 | 192), d.j.push(f & 63 | 128);
                    else if (65536 > f)
                        if (55296 <= f && 56319 >= f && e + 1 < c.length) {
                            var g = c.charCodeAt(e + 1);
                            56320 <= g && 57343 >= g && (f = 1024 * (f - 55296) + g - 56320 + 65536, d.j.push(f >> 18 | 240), d.j.push(f >> 12 & 63 | 128), d.j.push(f >> 6 & 63 | 128), d.j.push(f & 63 |
                                128), e++)
                        } else d.j.push(f >> 12 | 224), d.j.push(f >> 6 & 63 | 128), d.j.push(f & 63 | 128)
                }
                fg(a, b)
            }
        },
        ng = function(a, b, c, d) {
            null != c && (b = eg(a, b), d(c, a), fg(a, b))
        },
        pg = function(a, b, c) {
            if (null != c)
                for (var d = 0; d < c.length; d++) {
                    var e = a,
                        f = c[d];
                    null != f && (bg(e.j, 8 * b), cg(e.j, f))
                }
        },
        qg = function(a, b, c, d) {
            if (null != c)
                for (var e = 0; e < c.length; e++) {
                    var f = eg(a, b);
                    d(c[e], a);
                    fg(a, f)
                }
        };
    var S = function() {},
        rg = "function" == typeof Uint8Array,
        T = function(a, b, c, d) {
            a.j = null;
            b || (b = []);
            a.U = void 0;
            a.H = -1;
            a.o = b;
            a: {
                if (b = a.o.length) {
                    --b;
                    var e = a.o[b];
                    if (!(null === e || "object" != typeof e || Ca(e) || rg && e instanceof Uint8Array)) {
                        a.R = b - a.H;
                        a.v = e;
                        break a
                    }
                }
                a.R = Number.MAX_VALUE
            }
            a.T = {};
            if (c)
                for (b = 0; b < c.length; b++) e = c[b], e < a.R ? (e += a.H, a.o[e] = a.o[e] || sg) : (tg(a), a.v[e] = a.v[e] || sg);
            if (d && d.length)
                for (b = 0; b < d.length; b++) ug(a, d[b])
        },
        sg = [],
        tg = function(a) {
            var b = a.R + a.H;
            a.o[b] || (a.v = a.o[b] = {})
        },
        U = function(a, b) {
            if (b <
                a.R) {
                var c = b + a.H,
                    d = a.o[c];
                return d === sg ? a.o[c] = [] : d
            }
            if (a.v) return d = a.v[b], d === sg ? a.v[b] = [] : d
        },
        vg = function(a, b) {
            if (b < a.R) {
                var c = b + a.H,
                    d = a.o[c];
                return d === sg ? a.o[c] = [] : d
            }
            d = a.v[b];
            return d === sg ? a.v[b] = [] : d
        },
        wg = function(a, b) {
            var c = U(a, b);
            return null == c ? c : +c
        },
        V = function(a, b, c) {
            a = U(a, b);
            return null == a ? c : a
        },
        W = function(a, b, c) {
            b < a.R ? a.o[b + a.H] = c : (tg(a), a.v[b] = c)
        },
        xg = function(a, b, c) {
            "" !== c ? W(a, b, c) : a.o[b + a.H] = null
        },
        yg = function(a, b, c, d) {
            (c = ug(a, c)) && c !== b && void 0 !== d && (a.j && c in a.j && (a.j[c] = void 0), W(a, c,
                void 0));
            W(a, b, d)
        },
        ug = function(a, b) {
            for (var c, d, e = 0; e < b.length; e++) {
                var f = b[e],
                    g = U(a, f);
                null != g && (c = f, d = g, W(a, f, void 0))
            }
            return c ? (W(a, c, d), c) : 0
        },
        X = function(a, b, c, d) {
            a.j || (a.j = {});
            if (!a.j[c]) {
                var e = U(a, c);
                if (d || e) a.j[c] = new b(e)
            }
            return a.j[c]
        },
        Ag = function(a, b, c) {
            zg(a, b, c);
            b = a.j[c];
            b == sg && (b = a.j[c] = []);
            return b
        },
        zg = function(a, b, c) {
            a.j || (a.j = {});
            if (!a.j[c]) {
                for (var d = vg(a, c), e = [], f = 0; f < d.length; f++) e[f] = new b(d[f]);
                a.j[c] = e
            }
        },
        Bg = function(a, b, c) {
            a.j || (a.j = {});
            var d = c ? c.toArray() : c;
            a.j[b] = c;
            W(a, b, d)
        },
        Dg = function(a, b, c) {
            var d = Cg[0];
            a.j || (a.j = {});
            var e = c ? c.toArray() : c;
            a.j[b] = c;
            yg(a, b, d, e)
        },
        Eg = function(a, b, c, d) {
            zg(a, d, b);
            var e = a.j[b];
            e || (e = a.j[b] = []);
            c = c ? c : new d;
            a = vg(a, b);
            e.push(c);
            a.push(c.toArray())
        },
        Fg = function(a) {
            if (a.j)
                for (var b in a.j) {
                    var c = a.j[b];
                    if (Ca(c))
                        for (var d = 0; d < c.length; d++) c[d] && c[d].toArray();
                    else c && c.toArray()
                }
        };
    S.prototype.toArray = function() {
        Fg(this);
        return this.o
    };
    S.prototype.S = rg ? function() {
        var a = Uint8Array.prototype.toJSON;
        Uint8Array.prototype.toJSON = function() {
            return Lf(this)
        };
        try {
            return JSON.stringify(this.o && this.toArray(), Gg)
        } finally {
            Uint8Array.prototype.toJSON = a
        }
    } : function() {
        return JSON.stringify(this.o && this.toArray(), Gg)
    };
    var Gg = function(a, b) {
        return xa(b) && (isNaN(b) || Infinity === b || -Infinity === b) ? String(b) : b
    };
    S.prototype.toString = function() {
        Fg(this);
        return this.o.toString()
    };
    var Ig = function(a, b) {
            a = a || {};
            b = b || {};
            var c = {},
                d;
            for (d in a) c[d] = 0;
            for (d in b) c[d] = 0;
            for (d in c)
                if (!Hg(a[d], b[d])) return !1;
            return !0
        },
        Hg = function(a, b) {
            if (a == b) return !0;
            if (!Fa(a) || !Fa(b)) return xa(a) && isNaN(a) || xa(b) && isNaN(b) ? String(a) == String(b) : !1;
            if (a.constructor != b.constructor) return !1;
            if (rg && a.constructor === Uint8Array) {
                if (a.length != b.length) return !1;
                for (var c = 0; c < a.length; c++)
                    if (a[c] != b[c]) return !1;
                return !0
            }
            if (a.constructor === Array) {
                var d = void 0,
                    e = void 0,
                    f = Math.max(a.length, b.length);
                for (c = 0; c <
                    f; c++) {
                    var g = a[c],
                        h = b[c];
                    g && g.constructor == Object && (d = g, g = void 0);
                    h && h.constructor == Object && (e = h, h = void 0);
                    if (!Hg(g, h)) return !1
                }
                return d || e ? (d = d || {}, e = e || {}, Ig(d, e)) : !0
            }
            if (a.constructor === Object) return Ig(a, b);
            throw Error("o");
        };
    var Kg = function(a) {
        T(this, a, Jg, null)
    };
    z(Kg, S);
    var Lg = function(a) {
        T(this, a, null, null)
    };
    z(Lg, S);
    var Mg = function(a) {
        T(this, a, null, null)
    };
    z(Mg, S);
    var Ng = function(a) {
        T(this, a, null, null)
    };
    z(Ng, S);
    var Og = function(a) {
        T(this, a, null, null)
    };
    z(Og, S);
    var Qg = function(a) {
        T(this, a, Pg, null)
    };
    z(Qg, S);
    var Sg = function(a) {
        T(this, a, Rg, null)
    };
    z(Sg, S);
    var Tg = function(a) {
        T(this, a, null, null)
    };
    z(Tg, S);
    var Ug = function(a) {
        T(this, a, null, null)
    };
    z(Ug, S);
    var Vg = function(a) {
        T(this, a, null, null)
    };
    z(Vg, S);
    var Wg = function(a) {
        T(this, a, null, null)
    };
    z(Wg, S);
    var Xg = function(a) {
        T(this, a, null, null)
    };
    z(Xg, S);
    var Yg = function(a) {
        T(this, a, null, null)
    };
    z(Yg, S);
    var Zg = function(a) {
        T(this, a, null, null)
    };
    z(Zg, S);
    var $g = function(a) {
        T(this, a, null, null)
    };
    z($g, S);
    var ah = function(a) {
        T(this, a, null, null)
    };
    z(ah, S);
    var ch = function(a) {
        T(this, a, bh, null)
    };
    z(ch, S);
    var dh = function(a) {
        T(this, a, null, null)
    };
    z(dh, S);
    var eh = function(a) {
        T(this, a, null, null)
    };
    z(eh, S);
    var fh = function(a) {
        T(this, a, null, null)
    };
    z(fh, S);
    var gh = function(a) {
        T(this, a, null, null)
    };
    z(gh, S);
    var hh = function(a) {
        T(this, a, null, null)
    };
    z(hh, S);
    var ih = function(a) {
        T(this, a, null, null)
    };
    z(ih, S);
    var kh = function(a) {
        T(this, a, jh, null)
    };
    z(kh, S);
    var lh = function(a) {
        T(this, a, null, null)
    };
    z(lh, S);
    var mh = function(a) {
        T(this, a, null, null)
    };
    z(mh, S);
    var oh = function(a) {
        T(this, a, null, nh)
    };
    z(oh, S);
    var qh = function(a) {
        T(this, a, ph, null)
    };
    z(qh, S);
    var rh = function(a) {
        T(this, a, null, null)
    };
    z(rh, S);
    var Jg = [1],
        Eh = function(a, b) {
            for (; O(b) && !N(b);) switch (b.j) {
                case 1:
                    var c = Yf(b);
                    W(a, 1, c);
                    break;
                case 2:
                    c = Vf(b);
                    W(a, 2, c);
                    break;
                case 3:
                    c = Xf(b);
                    W(a, 3, c);
                    break;
                case 4:
                    c = new Mg;
                    R(b, c, sh);
                    Bg(a, 4, c);
                    break;
                case 5:
                    c = new Ng;
                    R(b, c, th);
                    Bg(a, 5, c);
                    break;
                case 7:
                    c = new Qg;
                    R(b, c, uh);
                    Bg(a, 7, c);
                    break;
                case 8:
                    c = new Og;
                    R(b, c, vh);
                    Bg(a, 8, c);
                    break;
                case 9:
                    c = new Ug;
                    R(b, c, wh);
                    Bg(a, 9, c);
                    break;
                case 10:
                    c = new Vg;
                    R(b, c, xh);
                    Bg(a, 10, c);
                    break;
                case 11:
                    c = new Sg;
                    R(b, c, yh);
                    Bg(a, 11, c);
                    break;
                case 12:
                    c = new lh;
                    R(b, c, zh);
                    Bg(a, 12, c);
                    break;
                case 13:
                    c =
                        new ah;
                    R(b, c, Ah);
                    Bg(a, 13, c);
                    break;
                case 14:
                    c = new mh;
                    R(b, c, Bh);
                    Bg(a, 14, c);
                    break;
                case 15:
                    c = new qh;
                    R(b, c, Ch);
                    Bg(a, 15, c);
                    break;
                case 16:
                    c = new rh;
                    R(b, c, Dh);
                    Bg(a, 16, c);
                    break;
                default:
                    Q(b)
            }
            return a
        },
        Rh = function(a, b) {
            var c = U(a, 1);
            null != c && lg(b, 1, c);
            c = U(a, 2);
            null != c && ig(b, 2, c);
            c = U(a, 3);
            null != c && kg(b, 3, c);
            c = X(a, Mg, 4);
            null != c && ng(b, 4, c, Fh);
            c = X(a, Ng, 5);
            null != c && ng(b, 5, c, Gh);
            c = X(a, Qg, 7);
            null != c && ng(b, 7, c, Hh);
            c = X(a, Og, 8);
            null != c && ng(b, 8, c, Ih);
            c = X(a, Ug, 9);
            null != c && ng(b, 9, c, Jh);
            c = X(a, Vg, 10);
            null != c && ng(b, 10, c, Kh);
            c =
                X(a, Sg, 11);
            null != c && ng(b, 11, c, Lh);
            c = X(a, lh, 12);
            null != c && ng(b, 12, c, Mh);
            c = X(a, ah, 13);
            null != c && ng(b, 13, c, Nh);
            c = X(a, mh, 14);
            null != c && ng(b, 14, c, Oh);
            c = X(a, qh, 15);
            null != c && ng(b, 15, c, Ph);
            c = X(a, rh, 16);
            null != c && ng(b, 16, c, Qh)
        };
    Lg.prototype.Ka = function() {
        return U(this, 1)
    };
    var sh = function(a, b) {
            for (; O(b) && !N(b);) switch (b.j) {
                case 1:
                    var c = Zf(b);
                    W(a, 1, c);
                    break;
                case 2:
                    c = Tf(b.o);
                    W(a, 2, c);
                    break;
                case 3:
                    c = Tf(b.o);
                    W(a, 3, c);
                    break;
                default:
                    Q(b)
            }
            return a
        },
        Fh = function(a, b) {
            var c = U(a, 1);
            null != c && mg(b, 1, c);
            c = U(a, 2);
            null != c && null != c && hg(b, 2, c);
            c = U(a, 3);
            null != c && null != c && hg(b, 3, c)
        },
        th = function(a, b) {
            for (; O(b) && !N(b);) switch (b.j) {
                case 1:
                    var c = Vf(b);
                    W(a, 1, c);
                    break;
                case 2:
                    c = Zf(b);
                    W(a, 2, c);
                    break;
                case 3:
                    c = Tf(b.o);
                    W(a, 3, c);
                    break;
                case 4:
                    c = Zf(b);
                    W(a, 4, c);
                    break;
                default:
                    Q(b)
            }
            return a
        },
        Gh = function(a,
            b) {
            var c = U(a, 1);
            null != c && ig(b, 1, c);
            c = U(a, 2);
            null != c && mg(b, 2, c);
            c = U(a, 3);
            null != c && null != c && hg(b, 3, c);
            c = U(a, 4);
            null != c && mg(b, 4, c)
        },
        vh = function(a, b) {
            for (; O(b) && !N(b);) switch (b.j) {
                case 1:
                    var c = Vf(b);
                    W(a, 1, c);
                    break;
                default:
                    Q(b)
            }
            return a
        },
        Ih = function(a, b) {
            var c = U(a, 1);
            null != c && ig(b, 1, c)
        },
        Pg = [2],
        uh = function(a, b) {
            for (; O(b) && !N(b);) switch (b.j) {
                case 2:
                    var c = new oh;
                    R(b, c, Sh);
                    Eg(a, 2, c, oh);
                    break;
                case 3:
                    c = Zf(b);
                    W(a, 3, c);
                    break;
                case 4:
                    c = Zf(b);
                    W(a, 4, c);
                    break;
                default:
                    Q(b)
            }
            return a
        },
        Hh = function(a, b) {
            var c = Ag(a, oh, 2);
            0 < c.length && qg(b, 2, c, Th);
            c = U(a, 3);
            null != c && mg(b, 3, c);
            c = U(a, 4);
            null != c && mg(b, 4, c)
        },
        Rg = [10],
        yh = function(a, b) {
            for (; O(b) && !N(b);) switch (b.j) {
                case 3:
                    var c = Vf(b);
                    W(a, 3, c);
                    break;
                case 4:
                    c = Vf(b);
                    W(a, 4, c);
                    break;
                case 5:
                    c = Vf(b);
                    W(a, 5, c);
                    break;
                case 6:
                    c = Xf(b);
                    W(a, 6, c);
                    break;
                case 7:
                    c = Xf(b);
                    W(a, 7, c);
                    break;
                case 8:
                    c = Yf(b);
                    W(a, 8, c);
                    break;
                case 10:
                    c = new Tg;
                    R(b, c, Uh);
                    Eg(a, 10, c, Tg);
                    break;
                default:
                    Q(b)
            }
            return a
        },
        Lh = function(a, b) {
            var c = U(a, 3);
            null != c && ig(b, 3, c);
            c = U(a, 4);
            null != c && ig(b, 4, c);
            c = U(a, 5);
            null != c && ig(b, 5, c);
            c = U(a,
                6);
            null != c && kg(b, 6, c);
            c = U(a, 7);
            null != c && kg(b, 7, c);
            c = U(a, 8);
            null != c && lg(b, 8, c);
            c = Ag(a, Tg, 10);
            0 < c.length && qg(b, 10, c, Vh)
        },
        Uh = function(a, b) {
            for (; O(b) && !N(b);) switch (b.j) {
                case 1:
                    var c = Vf(b);
                    W(a, 1, c);
                    break;
                case 2:
                    c = Yf(b);
                    W(a, 2, c);
                    break;
                default:
                    Q(b)
            }
            return a
        },
        Vh = function(a, b) {
            var c = U(a, 1);
            null != c && ig(b, 1, c);
            c = U(a, 2);
            null != c && lg(b, 2, c)
        },
        wh = function(a, b) {
            for (; O(b) && !N(b);) switch (b.j) {
                case 1:
                    var c = new Wg;
                    R(b, c, Wh);
                    Bg(a, 1, c);
                    break;
                case 2:
                    c = new ah;
                    R(b, c, Ah);
                    Bg(a, 2, c);
                    break;
                default:
                    Q(b)
            }
            return a
        },
        Jh = function(a,
            b) {
            var c = Xh(a);
            null != c && ng(b, 1, c, Yh);
            c = X(a, ah, 2, 1);
            null != c && ng(b, 2, c, Nh)
        },
        Xh = function(a) {
            return X(a, Wg, 1, 1)
        },
        xh = function(a, b) {
            for (; O(b) && !N(b);) switch (b.j) {
                case 1:
                    var c = Vf(b);
                    W(a, 1, c);
                    break;
                default:
                    Q(b)
            }
            return a
        },
        Kh = function(a, b) {
            var c = U(a, 1);
            null != c && ig(b, 1, c)
        },
        Wh = function(a, b) {
            for (; O(b) && !N(b);) switch (b.j) {
                case 1:
                    var c = Vf(b);
                    Zh(a, c);
                    break;
                case 2:
                    c = Yf(b);
                    W(a, 2, c);
                    break;
                case 3:
                    c = Wf(b);
                    W(a, 3, c);
                    break;
                case 4:
                    c = Wf(b);
                    W(a, 4, c);
                    break;
                case 6:
                    c = new Xg;
                    R(b, c, $h);
                    Bg(a, 6, c);
                    break;
                case 7:
                    c = new Yg;
                    R(b, c, ai);
                    Bg(a, 7, c);
                    break;
                case 8:
                    c = new Zg;
                    R(b, c, bi);
                    Bg(a, 8, c);
                    break;
                case 9:
                    c = new $g;
                    R(b, c, ci);
                    Bg(a, 9, c);
                    break;
                default:
                    Q(b)
            }
            return a
        },
        Yh = function(a, b) {
            var c = U(a, 1);
            null != c && ig(b, 1, c);
            c = U(a, 2);
            null != c && lg(b, 2, c);
            c = U(a, 3);
            null != c && jg(b, 3, c);
            c = U(a, 4);
            null != c && jg(b, 4, c);
            c = X(a, Xg, 6);
            null != c && ng(b, 6, c, di);
            c = X(a, Yg, 7);
            null != c && ng(b, 7, c, ei);
            c = X(a, Zg, 8);
            null != c && ng(b, 8, c, fi);
            c = X(a, $g, 9);
            null != c && ng(b, 9, c, gi)
        },
        Zh = function(a, b) {
            W(a, 1, b)
        },
        $h = function(a, b) {
            for (; O(b) && !N(b);) switch (b.j) {
                case 2:
                    var c = Yf(b);
                    W(a, 2, c);
                    break;
                case 3:
                    c = Yf(b);
                    W(a, 3, c);
                    break;
                case 4:
                    c = Xf(b);
                    W(a, 4, c);
                    break;
                default:
                    Q(b)
            }
            return a
        },
        di = function(a, b) {
            var c = U(a, 2);
            null != c && lg(b, 2, c);
            c = U(a, 3);
            null != c && lg(b, 3, c);
            c = U(a, 4);
            null != c && kg(b, 4, c)
        };
    Xg.prototype.ab = function() {
        return U(this, 2)
    };
    var ai = function(a, b) {
            for (; O(b) && !N(b);) Q(b);
            return a
        },
        ei = function() {},
        bi = function(a, b) {
            for (; O(b) && !N(b);) switch (b.j) {
                case 1:
                    var c = Yf(b);
                    W(a, 1, c);
                    break;
                case 2:
                    c = Vf(b);
                    W(a, 2, c);
                    break;
                case 3:
                    c = Vf(b);
                    W(a, 3, c);
                    break;
                default:
                    Q(b)
            }
            return a
        },
        fi = function(a, b) {
            var c = U(a, 1);
            null != c && lg(b, 1, c);
            c = U(a, 2);
            null != c && ig(b, 2, c);
            c = U(a, 3);
            null != c && ig(b, 3, c)
        };
    Zg.prototype.ab = function() {
        return U(this, 1)
    };
    var ci = function(a, b) {
            for (; O(b) && !N(b);) Q(b);
            return a
        },
        gi = function() {},
        Ah = function(a, b) {
            for (; O(b) && !N(b);) switch (b.j) {
                case 1:
                    var c = Vf(b);
                    W(a, 1, c);
                    break;
                case 2:
                    c = Yf(b);
                    W(a, 2, c);
                    break;
                case 3:
                    c = new ch;
                    R(b, c, hi);
                    Bg(a, 3, c);
                    break;
                case 4:
                    c = new ih;
                    R(b, c, ii);
                    Bg(a, 4, c);
                    break;
                case 5:
                    c = new kh;
                    R(b, c, ji);
                    Bg(a, 5, c);
                    break;
                case 6:
                    c = new gh;
                    R(b, c, ki);
                    Bg(a, 6, c);
                    break;
                default:
                    Q(b)
            }
            return a
        },
        Nh = function(a, b) {
            var c = U(a, 1);
            null != c && ig(b, 1, c);
            c = U(a, 2);
            null != c && lg(b, 2, c);
            c = X(a, ch, 3);
            null != c && ng(b, 3, c, li);
            c = X(a, ih, 4);
            null !=
                c && ng(b, 4, c, mi);
            c = X(a, kh, 5);
            null != c && ng(b, 5, c, ni);
            c = X(a, gh, 6);
            null != c && ng(b, 6, c, oi)
        },
        bh = [7, 9, 13, 14, 15],
        hi = function(a, b) {
            for (; O(b) && !N(b);) switch (b.j) {
                case 1:
                    var c = Wf(b);
                    W(a, 1, c);
                    break;
                case 2:
                    c = Wf(b);
                    W(a, 2, c);
                    break;
                case 3:
                    c = Vf(b);
                    W(a, 3, c);
                    break;
                case 4:
                    c = Yf(b);
                    W(a, 4, c);
                    break;
                case 6:
                    c = Vf(b);
                    W(a, 6, c);
                    break;
                case 7:
                    c = new hh;
                    R(b, c, pi);
                    Eg(a, 7, c, hh);
                    break;
                case 8:
                    c = Xf(b);
                    W(a, 8, c);
                    break;
                case 9:
                    c = Vf(b);
                    vg(a, 9).push(c);
                    break;
                case 10:
                    c = Xf(b);
                    W(a, 10, c);
                    break;
                case 12:
                    c = Xf(b);
                    W(a, 12, c);
                    break;
                case 13:
                    c = new dh;
                    R(b,
                        c, qi);
                    Eg(a, 13, c, dh);
                    break;
                case 14:
                    c = new eh;
                    R(b, c, ri);
                    Eg(a, 14, c, eh);
                    break;
                case 15:
                    c = new fh;
                    R(b, c, si);
                    Eg(a, 15, c, fh);
                    break;
                case 16:
                    c = Xf(b);
                    W(a, 16, c);
                    break;
                default:
                    Q(b)
            }
            return a
        },
        li = function(a, b) {
            var c = U(a, 1);
            null != c && jg(b, 1, c);
            c = U(a, 2);
            null != c && jg(b, 2, c);
            c = U(a, 3);
            null != c && ig(b, 3, c);
            c = U(a, 4);
            null != c && lg(b, 4, c);
            c = U(a, 6);
            null != c && ig(b, 6, c);
            c = Ag(a, hh, 7);
            0 < c.length && qg(b, 7, c, ti);
            c = U(a, 8);
            null != c && kg(b, 8, c);
            c = vg(a, 9);
            0 < c.length && pg(b, 9, c);
            c = U(a, 10);
            null != c && kg(b, 10, c);
            c = U(a, 12);
            null != c && kg(b, 12, c);
            c = Ag(a,
                dh, 13);
            0 < c.length && qg(b, 13, c, ui);
            c = Ag(a, eh, 14);
            0 < c.length && qg(b, 14, c, vi);
            c = Ag(a, fh, 15);
            0 < c.length && qg(b, 15, c, wi);
            c = U(a, 16);
            null != c && kg(b, 16, c)
        };
    ch.prototype.Hc = function() {
        return U(this, 6)
    };
    var qi = function(a, b) {
            for (; O(b) && !N(b);) switch (b.j) {
                case 1:
                    var c = Yf(b);
                    W(a, 1, c);
                    break;
                case 2:
                    c = Yf(b);
                    W(a, 2, c);
                    break;
                default:
                    Q(b)
            }
            return a
        },
        ui = function(a, b) {
            var c = U(a, 1);
            null != c && lg(b, 1, c);
            c = U(a, 2);
            null != c && lg(b, 2, c)
        };
    dh.prototype.Ka = function() {
        return U(this, 1)
    };
    var ri = function(a, b) {
            for (; O(b) && !N(b);) switch (b.j) {
                case 1:
                    var c = Yf(b);
                    W(a, 1, c);
                    break;
                case 2:
                    c = Vf(b);
                    W(a, 2, c);
                    break;
                default:
                    Q(b)
            }
            return a
        },
        vi = function(a, b) {
            var c = U(a, 1);
            null != c && lg(b, 1, c);
            c = U(a, 2);
            null != c && ig(b, 2, c)
        };
    eh.prototype.Ka = function() {
        return U(this, 1)
    };
    var si = function(a, b) {
            for (; O(b) && !N(b);) switch (b.j) {
                case 1:
                    var c = Yf(b);
                    W(a, 1, c);
                    break;
                default:
                    Q(b)
            }
            return a
        },
        wi = function(a, b) {
            var c = U(a, 1);
            null != c && lg(b, 1, c)
        };
    fh.prototype.Ka = function() {
        return U(this, 1)
    };
    var ki = function(a, b) {
            for (; O(b) && !N(b);) switch (b.j) {
                case 1:
                    var c = Yf(b);
                    W(a, 1, c);
                    break;
                default:
                    Q(b)
            }
            return a
        },
        oi = function(a, b) {
            var c = U(a, 1);
            null != c && lg(b, 1, c)
        },
        pi = function(a, b) {
            for (; O(b) && !N(b);) switch (b.j) {
                case 1:
                    var c = Wf(b);
                    W(a, 1, c);
                    break;
                case 2:
                    c = Wf(b);
                    W(a, 2, c);
                    break;
                default:
                    Q(b)
            }
            return a
        },
        ti = function(a, b) {
            var c = U(a, 1);
            null != c && jg(b, 1, c);
            c = U(a, 2);
            null != c && jg(b, 2, c)
        },
        ii = function(a, b) {
            for (; O(b) && !N(b);) switch (b.j) {
                case 1:
                    var c = Yf(b);
                    W(a, 1, c);
                    break;
                case 2:
                    c = Xf(b);
                    W(a, 2, c);
                    break;
                case 3:
                    c = Vf(b);
                    a.Kc(c);
                    break;
                default:
                    Q(b)
            }
            return a
        },
        mi = function(a, b) {
            var c = U(a, 1);
            null != c && lg(b, 1, c);
            c = U(a, 2);
            null != c && kg(b, 2, c);
            c = U(a, 3);
            null != c && ig(b, 3, c)
        };
    ih.prototype.Kc = function(a) {
        W(this, 3, a)
    };
    var jh = [1],
        ji = function(a, b) {
            for (; O(b) && !N(b);) switch (b.j) {
                case 1:
                    var c = Vf(b);
                    vg(a, 1).push(c);
                    break;
                default:
                    Q(b)
            }
            return a
        },
        ni = function(a, b) {
            var c = vg(a, 1);
            0 < c.length && pg(b, 1, c)
        },
        zh = function(a, b) {
            for (; O(b) && !N(b);) switch (b.j) {
                case 1:
                    var c = Vf(b);
                    W(a, 1, c);
                    break;
                case 2:
                    c = Wf(b);
                    W(a, 2, c);
                    break;
                case 3:
                    c = Wf(b);
                    W(a, 3, c);
                    break;
                case 4:
                    c = Xf(b);
                    W(a, 4, c);
                    break;
                default:
                    Q(b)
            }
            return a
        },
        Mh = function(a, b) {
            var c = U(a, 1);
            null != c && ig(b, 1, c);
            c = U(a, 2);
            null != c && jg(b, 2, c);
            c = U(a, 3);
            null != c && jg(b, 3, c);
            c = U(a, 4);
            null != c && kg(b, 4, c)
        },
        Bh = function(a, b) {
            for (; O(b) && !N(b);) switch (b.j) {
                case 1:
                    var c = Vf(b);
                    W(a, 1, c);
                    break;
                case 2:
                    c = Wf(b);
                    W(a, 2, c);
                    break;
                case 3:
                    c = Wf(b);
                    W(a, 3, c);
                    break;
                case 4:
                    c = Wf(b);
                    W(a, 4, c);
                    break;
                case 5:
                    c = Wf(b);
                    W(a, 5, c);
                    break;
                case 6:
                    c = Xf(b);
                    W(a, 6, c);
                    break;
                default:
                    Q(b)
            }
            return a
        },
        Oh = function(a, b) {
            var c = U(a, 1);
            null != c && ig(b, 1, c);
            c = U(a, 2);
            null != c && jg(b, 2, c);
            c = U(a, 3);
            null != c && jg(b, 3, c);
            c = U(a, 4);
            null != c && jg(b, 4, c);
            c = U(a, 5);
            null != c && jg(b, 5, c);
            c = U(a, 6);
            null != c && kg(b, 6, c)
        },
        nh = [
            [2, 3, 4]
        ],
        Sh = function(a, b) {
            for (; O(b) && !N(b);) switch (b.j) {
                case 1:
                    var c =
                        Zf(b);
                    W(a, 1, c);
                    break;
                case 2:
                    c = Zf(b);
                    yg(a, 2, nh[0], c);
                    break;
                case 3:
                    c = Wf(b);
                    yg(a, 3, nh[0], c);
                    break;
                case 4:
                    c = Xf(b);
                    yg(a, 4, nh[0], c);
                    break;
                default:
                    Q(b)
            }
            return a
        },
        Th = function(a, b) {
            var c = U(a, 1);
            null != c && mg(b, 1, c);
            c = U(a, 2);
            null != c && mg(b, 2, c);
            c = U(a, 3);
            null != c && jg(b, 3, c);
            c = U(a, 4);
            null != c && kg(b, 4, c)
        },
        ph = [1],
        Ch = function(a, b) {
            for (; O(b) && !N(b);) switch (b.j) {
                case 1:
                    var c = new oh;
                    R(b, c, Sh);
                    Eg(a, 1, c, oh);
                    break;
                default:
                    Q(b)
            }
            return a
        },
        Ph = function(a, b) {
            var c = Ag(a, oh, 1);
            0 < c.length && qg(b, 1, c, Th)
        },
        Dh = function(a, b) {
            for (; O(b) &&
                !N(b);) Q(b);
            return a
        },
        Qh = function() {};
    var zi = function(a, b) {
            return void 0 !== b && xi.has(b) ? xi.get(b).get(a) : yi.get(a)
        },
        Ci = function(a, b) {
            var c = Ai[a - 1];
            return new Kc([new G({
                y: c.a.y
            }, {
                y: c.b.y
            }, c.b.f * Bi, yc), new G({
                y: c.b.y
            }, {
                y: c.c.y
            }, (c.c.f - c.b.f) * Bi, yc)].map(function(a) {
                return new H(a, b)
            }), !0)
        },
        Bi = 1E3 / 24,
        yi = new Map([
            [1, [Fe]],
            [2, [
                [2, 468, 1404, 75, 75]
            ]],
            [3, [
                [2, 843, 1404, 63, 75]
            ]],
            [4, [
                [2, 546, 1404, 75, 63]
            ]],
            [5, [
                [3, 624, 1480, 75, 75]
            ]],
            [6, [
                [3, 702, 1480, 75, 75]
            ]],
            [7, [
                [3, 780, 1480, 75, 75]
            ]],
            [8, [
                [3, 858, 1480, 75, 75]
            ]],
            [0, [Fe]]
        ]),
        xi = new Map([
            ["sleep", new Map([
                [1,
                    [
                        [1, 1611, 1409, 75, 75],
                        [1, 1611, 1409, 75, 75],
                        [1, 1689, 1409, 75, 75],
                        [1, 1689, 1409, 75, 75],
                        [1, 1767, 1409, 75, 75],
                        [1, 1767, 1409, 75, 75],
                        [1, 1845, 1409, 75, 75],
                        [1, 1845, 1409, 75, 75],
                        [1, 1845, 1409, 75, 75],
                        [1, 1845, 1409, 75, 75],
                        [1, 1845, 1409, 75, 75],
                        [1, 1845, 1409, 75, 75],
                        [1, 1845, 1409, 75, 75],
                        [1, 1845, 1409, 75, 75],
                        [1, 1845, 1409, 75, 75],
                        [1, 1845, 1409, 75, 75],
                        [1, 1845, 1409, 75, 75],
                        [1, 1845, 1409, 75, 75],
                        [1, 1845, 1409, 75, 75],
                        [1, 1845, 1409, 75, 75],
                        [1, 1845, 1409, 75, 75],
                        [1, 0, 1411, 75, 75],
                        [1, 0, 1411, 75, 75],
                        [1, 78, 1411, 75, 75],
                        [1, 78, 1411, 75, 75],
                        [1, 156, 1411,
                            75, 75
                        ],
                        [1, 156, 1411, 75, 75],
                        [1, 78, 1411, 75, 75],
                        [1, 78, 1411, 75, 75],
                        [1, 156, 1411, 75, 75],
                        [1, 156, 1411, 75, 75],
                        [1, 78, 1411, 75, 75],
                        [1, 78, 1411, 75, 75],
                        [1, 156, 1411, 75, 75],
                        [1, 156, 1411, 75, 75],
                        [1, 78, 1411, 75, 75]
                    ]
                ],
                [5, [
                    [1, 1929, 1499, 75, 75],
                    [1, 1929, 1499, 75, 75],
                    [1, 1929, 1499, 75, 75],
                    [1, 1929, 1499, 75, 75],
                    [1, 1929, 1499, 75, 75],
                    [1, 1929, 1499, 75, 75],
                    [1, 1929, 1499, 75, 75],
                    [1, 1929, 1499, 75, 75],
                    [1, 1929, 1499, 75, 75],
                    [1, 1929, 1499, 75, 75],
                    [1, 1929, 1499, 75, 75],
                    [1, 1929, 1499, 75, 75],
                    [1, 1929, 1499, 75, 75],
                    [1, 1929, 1499, 75, 75],
                    [1, 1929, 1499, 75, 75],
                    [1,
                        1929, 1499, 75, 75
                    ],
                    [1, 1077, 1504, 75, 75],
                    [1, 1077, 1504, 75, 75],
                    [1, 1155, 1504, 75, 75],
                    [1, 1155, 1504, 75, 75],
                    [1, 1155, 1504, 75, 75],
                    [1, 1155, 1504, 75, 75],
                    [1, 1155, 1504, 75, 75],
                    [1, 1155, 1504, 75, 75],
                    [1, 1155, 1504, 75, 75],
                    [1, 1155, 1504, 75, 75],
                    [1, 1155, 1504, 75, 75],
                    [1, 1155, 1504, 75, 75],
                    [1, 1155, 1504, 75, 75],
                    [1, 1155, 1504, 75, 75],
                    [1, 1155, 1504, 75, 75],
                    [1, 1155, 1504, 75, 75],
                    [1, 1155, 1504, 75, 75],
                    [1, 1155, 1504, 75, 75],
                    [1, 1233, 1507, 75, 75],
                    [1, 1233, 1507, 75, 75]
                ]],
                [0, wf]
            ])],
            ["idle", new Map([
                [1, wf],
                [2, [
                    [2, 0, 0, 150, 180],
                    [2, 0, 0, 150, 180],
                    [2, 153, 0, 150,
                        180
                    ],
                    [2, 153, 0, 150, 180],
                    [2, 153, 0, 150, 180],
                    [2, 153, 0, 150, 180],
                    [2, 306, 0, 150, 180],
                    [2, 459, 0, 150, 180],
                    [2, 612, 0, 150, 180],
                    [2, 765, 0, 150, 180],
                    [2, 918, 0, 150, 180],
                    [2, 1071, 0, 150, 180],
                    [2, 1071, 0, 150, 180],
                    [2, 1224, 0, 150, 180],
                    [2, 1377, 0, 150, 180],
                    [2, 1530, 0, 150, 180],
                    [2, 1530, 0, 150, 180],
                    [2, 1683, 0, 150, 180],
                    [2, 1836, 0, 150, 180],
                    [2, 1224, 0, 150, 180],
                    [2, 1377, 0, 150, 180],
                    [2, 0, 183, 150, 180],
                    [2, 0, 183, 150, 180],
                    [2, 153, 183, 150, 180],
                    [2, 306, 183, 150, 180],
                    [2, 459, 183, 150, 180],
                    [2, 612, 183, 150, 180],
                    [2, 765, 183, 150, 180],
                    [2, 765, 183, 150, 180],
                    [2, 918,
                        183, 150, 180
                    ],
                    [2, 1071, 183, 150, 180],
                    [2, 1224, 183, 150, 180],
                    [2, 1377, 183, 150, 180],
                    [2, 1530, 183, 150, 180],
                    [2, 1530, 183, 150, 180],
                    [2, 1683, 0, 150, 180],
                    [2, 1683, 183, 150, 180],
                    [2, 1836, 183, 150, 180],
                    [2, 1836, 183, 150, 180],
                    [2, 0, 366, 150, 180],
                    [2, 153, 366, 150, 180],
                    [2, 153, 366, 150, 180],
                    [2, 306, 366, 150, 180],
                    [2, 459, 366, 150, 180],
                    [2, 459, 366, 150, 180],
                    [2, 612, 366, 150, 180],
                    [2, 0, 0, 150, 180],
                    [2, 0, 0, 150, 180],
                    [2, 0, 0, 150, 180],
                    [2, 153, 0, 150, 180],
                    [2, 765, 366, 150, 180],
                    [2, 918, 366, 150, 180],
                    [2, 1071, 366, 150, 180],
                    [2, 1224, 366, 150, 180],
                    [2, 1377, 366, 150,
                        180
                    ],
                    [2, 1530, 366, 150, 180],
                    [2, 1683, 366, 150, 180],
                    [2, 1836, 366, 150, 180],
                    [2, 306, 0, 150, 180],
                    [2, 0, 549, 150, 180],
                    [2, 0, 549, 150, 180],
                    [2, 0, 549, 150, 180],
                    [2, 0, 549, 150, 180],
                    [2, 0, 549, 150, 180],
                    [2, 0, 549, 150, 180],
                    [2, 0, 549, 150, 180],
                    [2, 0, 549, 150, 180],
                    [2, 0, 549, 150, 180]
                ]],
                [3, [
                    [2, 153, 549, 150, 180],
                    [2, 153, 549, 150, 180],
                    [2, 153, 549, 150, 180],
                    [2, 153, 549, 150, 180],
                    [2, 153, 549, 150, 180],
                    [2, 153, 549, 150, 180],
                    [2, 306, 549, 150, 180],
                    [2, 306, 549, 150, 180],
                    [2, 306, 549, 150, 180],
                    [2, 306, 549, 150, 180],
                    [2, 306, 549, 150, 180],
                    [2, 306, 549, 150, 180],
                    [2, 459,
                        549, 150, 180
                    ],
                    [2, 459, 549, 150, 180],
                    [2, 459, 549, 150, 180],
                    [2, 459, 549, 150, 180],
                    [2, 612, 549, 150, 180],
                    [2, 612, 549, 150, 180],
                    [2, 612, 549, 150, 180],
                    [2, 612, 549, 150, 180],
                    [2, 765, 549, 150, 180],
                    [2, 765, 549, 150, 180],
                    [2, 765, 549, 150, 180],
                    [2, 765, 549, 150, 180],
                    [2, 153, 549, 150, 180],
                    [2, 153, 549, 150, 180],
                    [2, 153, 549, 150, 180],
                    [2, 153, 549, 150, 180],
                    [2, 153, 549, 150, 180],
                    [2, 153, 549, 150, 180],
                    [2, 306, 549, 150, 180],
                    [2, 306, 549, 150, 180],
                    [2, 306, 549, 150, 180],
                    [2, 918, 549, 150, 180],
                    [2, 918, 549, 150, 180],
                    [2, 1071, 549, 150, 180],
                    [2, 1224, 549, 150, 180],
                    [2, 1224,
                        549, 150, 180
                    ],
                    [2, 1224, 549, 150, 180],
                    [2, 1224, 549, 150, 180],
                    [2, 1377, 549, 150, 180],
                    [2, 1377, 549, 150, 180],
                    [2, 1377, 549, 150, 180],
                    [2, 1377, 549, 150, 180],
                    [2, 1530, 549, 150, 180],
                    [2, 1530, 549, 150, 180],
                    [2, 1530, 549, 150, 180],
                    [2, 1530, 549, 150, 180],
                    [2, 1683, 549, 150, 180],
                    [2, 1683, 549, 150, 180],
                    [2, 1683, 549, 150, 180],
                    [2, 1683, 549, 150, 180],
                    [2, 1836, 549, 150, 180],
                    [2, 0, 732, 150, 180],
                    [2, 153, 732, 150, 180],
                    [2, 153, 732, 150, 180],
                    [2, 153, 732, 150, 180],
                    [2, 153, 732, 150, 180],
                    [2, 153, 732, 150, 180],
                    [2, 153, 732, 150, 180],
                    [2, 306, 732, 150, 180],
                    [2, 306, 732, 150,
                        180
                    ],
                    [2, 306, 732, 150, 180],
                    [2, 306, 732, 150, 180],
                    [2, 459, 732, 150, 180],
                    [2, 459, 732, 150, 180],
                    [2, 459, 732, 150, 180],
                    [2, 459, 732, 150, 180],
                    [2, 612, 732, 150, 180],
                    [2, 765, 732, 150, 180],
                    [2, 765, 732, 150, 180],
                    [2, 918, 732, 150, 180]
                ]],
                [4, [
                    [2, 1071, 732, 150, 150],
                    [2, 1071, 732, 150, 150],
                    [2, 1224, 732, 150, 150],
                    [2, 1224, 732, 150, 150],
                    [2, 1377, 732, 150, 150],
                    [2, 1377, 732, 150, 150],
                    [2, 1530, 732, 150, 150],
                    [2, 1683, 732, 150, 150],
                    [2, 1836, 732, 150, 150],
                    [2, 1071, 885, 150, 150],
                    [2, 1224, 885, 150, 150],
                    [2, 1377, 885, 150, 150],
                    [2, 1377, 885, 150, 150],
                    [2, 1530, 885, 150, 150],
                    [2, 1683, 885, 150, 150],
                    [2, 1836, 885, 150, 150],
                    [2, 1836, 885, 150, 150],
                    [2, 0, 915, 150, 150]
                ]],
                [5, [
                    [1, 459, 980, 150, 150],
                    [1, 459, 980, 150, 150],
                    [1, 459, 980, 150, 150],
                    [1, 612, 980, 150, 150],
                    [1, 612, 980, 150, 150],
                    [1, 1027, 982, 150, 150],
                    [1, 1027, 982, 150, 150],
                    [1, 1180, 982, 150, 150],
                    [1, 1180, 982, 150, 150],
                    [1, 0, 1027, 150, 150],
                    [1, 0, 1027, 150, 150],
                    [1, 0, 1027, 150, 150],
                    [1, 1180, 982, 150, 150],
                    [1, 1180, 982, 150, 150],
                    [1, 153, 1027, 150, 150],
                    [1, 153, 1027, 150, 150],
                    [1, 1608, 1102, 150, 150],
                    [1, 1608, 1102, 150, 150],
                    [1, 459, 980, 150, 150],
                    [1, 459, 980, 150, 150],
                    [1, 459,
                        980, 150, 150
                    ],
                    [1, 612, 980, 150, 150],
                    [1, 612, 980, 150, 150],
                    [1, 1027, 982, 150, 150],
                    [1, 1027, 982, 150, 150],
                    [1, 1180, 982, 150, 150],
                    [1, 1180, 982, 150, 150],
                    [1, 0, 1027, 150, 150],
                    [1, 0, 1027, 150, 150],
                    [1, 1761, 1103, 150, 150],
                    [1, 1333, 1120, 150, 150],
                    [1, 1333, 1120, 150, 150],
                    [1, 765, 1127, 150, 150],
                    [1, 306, 1133, 150, 150],
                    [1, 459, 1133, 150, 150],
                    [1, 612, 1133, 150, 150],
                    [1, 918, 1135, 150, 150],
                    [1, 918, 1135, 150, 150],
                    [1, 918, 1135, 150, 150],
                    [1, 1071, 1135, 150, 150],
                    [1, 1071, 1135, 150, 150],
                    [1, 0, 1180, 150, 150],
                    [1, 0, 1180, 150, 150],
                    [1, 153, 1180, 150, 150],
                    [1, 153, 1180,
                        150, 150
                    ],
                    [1, 1486, 1255, 150, 150],
                    [1, 1486, 1255, 150, 150],
                    [1, 1486, 1255, 150, 150],
                    [1, 153, 1180, 150, 150],
                    [1, 153, 1180, 150, 150],
                    [1, 1639, 1256, 150, 150],
                    [1, 1639, 1256, 150, 150],
                    [1, 1792, 1256, 150, 150],
                    [1, 1792, 1256, 150, 150],
                    [1, 918, 1135, 150, 150],
                    [1, 918, 1135, 150, 150],
                    [1, 918, 1135, 150, 150],
                    [1, 1071, 1135, 150, 150],
                    [1, 1071, 1135, 150, 150],
                    [1, 0, 1180, 150, 150],
                    [1, 0, 1180, 150, 150],
                    [1, 153, 1180, 150, 150],
                    [1, 1224, 1273, 150, 150],
                    [1, 765, 1280, 150, 150],
                    [1, 765, 1280, 150, 150],
                    [1, 306, 1286, 150, 150],
                    [1, 459, 1286, 150, 150],
                    [1, 612, 1286, 150, 150],
                    [1,
                        918, 1288, 150, 150
                    ],
                    [1, 918, 1288, 150, 150],
                    [1, 1608, 1102, 150, 150],
                    [1, 1608, 1102, 150, 150]
                ]],
                [6, [
                    [3, 0, 0, 150, 150],
                    [3, 0, 0, 150, 150],
                    [3, 0, 0, 150, 150],
                    [3, 153, 0, 150, 150],
                    [3, 153, 0, 150, 150],
                    [3, 306, 0, 150, 150],
                    [3, 306, 0, 150, 150],
                    [3, 459, 0, 150, 150],
                    [3, 459, 0, 150, 150],
                    [3, 612, 0, 150, 150],
                    [3, 612, 0, 150, 150],
                    [3, 612, 0, 150, 150],
                    [3, 459, 0, 150, 150],
                    [3, 459, 0, 150, 150],
                    [3, 765, 0, 150, 150],
                    [3, 765, 0, 150, 150],
                    [3, 918, 0, 150, 150],
                    [3, 918, 0, 150, 150],
                    [3, 1071, 0, 150, 150],
                    [3, 1071, 0, 150, 150],
                    [3, 1224, 0, 150, 150],
                    [3, 1224, 0, 150, 150],
                    [3, 1377, 0, 150, 150],
                    [3, 1530, 0, 150, 150],
                    [3, 1683, 0, 150, 150],
                    [3, 1683, 0, 150, 150],
                    [3, 1683, 0, 150, 150],
                    [3, 1836, 0, 150, 150],
                    [3, 1836, 0, 150, 150],
                    [3, 0, 153, 150, 150],
                    [3, 0, 153, 150, 150],
                    [3, 153, 153, 150, 150],
                    [3, 153, 153, 150, 150],
                    [3, 153, 153, 150, 150],
                    [3, 1836, 0, 150, 150],
                    [3, 1836, 0, 150, 150],
                    [3, 306, 153, 150, 150],
                    [3, 306, 153, 150, 150],
                    [3, 1683, 0, 150, 150],
                    [3, 1683, 0, 150, 150],
                    [3, 1683, 0, 150, 150],
                    [3, 1836, 0, 150, 150],
                    [3, 459, 153, 150, 150],
                    [3, 612, 153, 150, 150],
                    [3, 765, 153, 150, 150],
                    [3, 918, 153, 150, 150],
                    [3, 1071, 153, 150, 150],
                    [3, 1071, 153, 150, 150],
                    [3, 1224, 153, 150,
                        150
                    ],
                    [3, 1224, 153, 150, 150],
                    [3, 1377, 153, 150, 150],
                    [3, 1530, 153, 150, 150],
                    [3, 1683, 153, 150, 150],
                    [3, 1836, 153, 150, 150],
                    [3, 1836, 153, 150, 150],
                    [3, 0, 306, 150, 150],
                    [3, 0, 306, 150, 150],
                    [3, 153, 306, 150, 150],
                    [3, 153, 306, 150, 150],
                    [3, 153, 306, 150, 150],
                    [3, 306, 306, 150, 150],
                    [3, 306, 306, 150, 150],
                    [3, 459, 306, 150, 150],
                    [3, 459, 306, 150, 150],
                    [3, 612, 306, 150, 150],
                    [3, 612, 306, 150, 150],
                    [3, 612, 306, 150, 150],
                    [3, 306, 306, 150, 150],
                    [3, 306, 306, 150, 150],
                    [3, 0, 306, 150, 150],
                    [3, 0, 306, 150, 150],
                    [3, 153, 306, 150, 150],
                    [3, 153, 306, 150, 150],
                    [3, 153, 306, 150, 150],
                    [3, 765, 306, 150, 150],
                    [3, 765, 306, 150, 150],
                    [3, 918, 306, 150, 150],
                    [3, 1071, 306, 150, 150],
                    [3, 1224, 306, 150, 150],
                    [3, 1377, 306, 150, 150],
                    [3, 1377, 306, 150, 150],
                    [3, 1530, 306, 150, 150],
                    [3, 1530, 306, 150, 150],
                    [3, 0, 0, 150, 150]
                ]],
                [7, [
                    [3, 1683, 306, 150, 150],
                    [3, 1683, 306, 150, 150],
                    [3, 1683, 306, 150, 150],
                    [3, 1836, 306, 150, 150],
                    [3, 1836, 306, 150, 150],
                    [3, 0, 459, 150, 150],
                    [3, 0, 459, 150, 150],
                    [3, 153, 459, 150, 150],
                    [3, 153, 459, 150, 150],
                    [3, 153, 459, 150, 150],
                    [3, 0, 459, 150, 150],
                    [3, 0, 459, 150, 150],
                    [3, 1836, 306, 150, 150],
                    [3, 1836, 306, 150, 150],
                    [3, 1683, 306, 150,
                        150
                    ],
                    [3, 1683, 306, 150, 150],
                    [3, 306, 459, 150, 150],
                    [3, 459, 459, 150, 150],
                    [3, 459, 459, 150, 150],
                    [3, 612, 459, 150, 150],
                    [3, 0, 459, 150, 150],
                    [3, 153, 459, 150, 150],
                    [3, 153, 459, 150, 150],
                    [3, 153, 459, 150, 150],
                    [3, 0, 459, 150, 150],
                    [3, 0, 459, 150, 150],
                    [3, 1836, 306, 150, 150],
                    [3, 1836, 306, 150, 150],
                    [3, 1683, 306, 150, 150],
                    [3, 1683, 306, 150, 150],
                    [3, 1683, 306, 150, 150],
                    [3, 1836, 306, 150, 150],
                    [3, 765, 459, 150, 150],
                    [3, 918, 459, 150, 150],
                    [3, 1071, 459, 150, 150],
                    [3, 1224, 459, 150, 150],
                    [3, 1224, 459, 150, 150],
                    [3, 1224, 459, 150, 150],
                    [3, 1071, 459, 150, 150],
                    [3, 1071, 459,
                        150, 150
                    ],
                    [3, 1377, 459, 150, 150],
                    [3, 1377, 459, 150, 150],
                    [3, 1530, 459, 150, 150],
                    [3, 1683, 459, 150, 150],
                    [3, 1836, 459, 150, 150],
                    [3, 0, 612, 150, 150],
                    [3, 153, 612, 150, 150],
                    [3, 306, 612, 150, 150],
                    [3, 306, 612, 150, 150],
                    [3, 459, 612, 150, 150],
                    [3, 459, 612, 150, 150],
                    [3, 459, 612, 150, 150],
                    [3, 306, 612, 150, 150],
                    [3, 306, 612, 150, 150],
                    [3, 153, 612, 150, 150],
                    [3, 153, 612, 150, 150],
                    [3, 612, 612, 150, 150],
                    [3, 612, 612, 150, 150],
                    [3, 612, 612, 150, 150],
                    [3, 765, 612, 150, 150],
                    [3, 918, 612, 150, 150],
                    [3, 1071, 612, 150, 150],
                    [3, 0, 459, 150, 150],
                    [3, 153, 459, 150, 150],
                    [3, 153, 459,
                        150, 150
                    ],
                    [3, 153, 459, 150, 150],
                    [3, 0, 459, 150, 150],
                    [3, 0, 459, 150, 150],
                    [3, 1836, 306, 150, 150],
                    [3, 1836, 306, 150, 150],
                    [3, 1683, 306, 150, 150],
                    [3, 1683, 306, 150, 150]
                ]],
                [8, [
                    [3, 1224, 612, 150, 150],
                    [3, 1224, 612, 150, 150],
                    [3, 1224, 612, 150, 150],
                    [3, 1377, 612, 150, 150],
                    [3, 1377, 612, 150, 150],
                    [3, 1530, 612, 150, 150],
                    [3, 1530, 612, 150, 150],
                    [3, 1683, 612, 150, 150],
                    [3, 1683, 612, 150, 150],
                    [3, 1683, 612, 150, 150],
                    [3, 1836, 612, 150, 150],
                    [3, 0, 765, 150, 150],
                    [3, 153, 765, 150, 150],
                    [3, 153, 765, 150, 150],
                    [3, 1224, 612, 150, 150],
                    [3, 1224, 612, 150, 150],
                    [3, 1224, 612, 150,
                        150
                    ],
                    [3, 1377, 612, 150, 150],
                    [3, 1377, 612, 150, 150],
                    [3, 1530, 612, 150, 150],
                    [3, 306, 765, 150, 150],
                    [3, 306, 765, 150, 150],
                    [3, 459, 765, 150, 150],
                    [3, 612, 765, 150, 150],
                    [3, 612, 765, 150, 150],
                    [3, 765, 765, 150, 150],
                    [3, 765, 765, 150, 150],
                    [3, 765, 765, 150, 150],
                    [3, 918, 765, 150, 150],
                    [3, 918, 765, 150, 150],
                    [3, 1071, 765, 150, 150],
                    [3, 1071, 765, 150, 150],
                    [3, 1071, 765, 150, 150],
                    [3, 1224, 765, 150, 150],
                    [3, 1224, 765, 150, 150],
                    [3, 1377, 765, 150, 150],
                    [3, 1377, 765, 150, 150],
                    [3, 1530, 765, 150, 150],
                    [3, 1530, 765, 150, 150],
                    [3, 1530, 765, 150, 150],
                    [3, 1683, 765, 150, 150],
                    [3,
                        1683, 765, 150, 150
                    ],
                    [3, 1836, 765, 150, 150],
                    [3, 1836, 765, 150, 150],
                    [3, 0, 918, 150, 150],
                    [3, 0, 918, 150, 150],
                    [3, 0, 918, 150, 150],
                    [3, 153, 918, 150, 150],
                    [3, 153, 918, 150, 150],
                    [3, 306, 918, 150, 150],
                    [3, 306, 918, 150, 150],
                    [3, 306, 918, 150, 150],
                    [3, 0, 918, 150, 150],
                    [3, 0, 918, 150, 150],
                    [3, 0, 918, 150, 150],
                    [3, 153, 918, 150, 150],
                    [3, 153, 918, 150, 150],
                    [3, 306, 918, 150, 150],
                    [3, 306, 918, 150, 150],
                    [3, 306, 918, 150, 150],
                    [3, 0, 918, 150, 150],
                    [3, 0, 918, 150, 150],
                    [3, 0, 918, 150, 150],
                    [3, 153, 918, 150, 150],
                    [3, 153, 918, 150, 150],
                    [3, 306, 918, 150, 150],
                    [3, 459, 918, 150, 150],
                    [3, 612, 918, 150, 150],
                    [3, 612, 918, 150, 150],
                    [3, 612, 918, 150, 150],
                    [3, 765, 918, 150, 150],
                    [3, 765, 918, 150, 150]
                ]],
                [0, wf]
            ])],
            ["move", new Map([
                [1, [
                    [1, 1224, 1135, 75, 75],
                    [1, 1224, 1135, 75, 75],
                    [1, 1224, 1135, 75, 75],
                    [1, 1945, 1187, 75, 75],
                    [1, 1945, 1187, 75, 75],
                    [1, 1945, 1187, 75, 75],
                    [1, 1945, 1265, 75, 75],
                    [1, 1945, 1265, 75, 75],
                    [1, 1945, 1265, 75, 75],
                    [1, 1377, 1273, 75, 75],
                    [1, 1377, 1273, 75, 75],
                    [1, 1377, 1273, 75, 75]
                ]],
                [2, [
                    [2, 393, 1140, 75, 90],
                    [2, 393, 1140, 75, 90],
                    [2, 471, 1140, 75, 90],
                    [2, 549, 1140, 75, 90],
                    [2, 627, 1140, 75, 90],
                    [2, 705, 1140, 75, 90],
                    [2, 783, 1140,
                        75, 90
                    ],
                    [2, 861, 1140, 75, 90],
                    [2, 939, 1140, 75, 90],
                    [2, 939, 1140, 75, 90],
                    [2, 939, 1140, 75, 90],
                    [2, 939, 1140, 75, 90],
                    [2, 0, 1149, 75, 90],
                    [2, 0, 1149, 75, 90],
                    [2, 1185, 1157, 75, 90],
                    [2, 1185, 1157, 75, 90],
                    [2, 1185, 1157, 75, 90]
                ]],
                [3, [
                    [2, 936, 1233, 75, 90],
                    [2, 936, 1233, 75, 90],
                    [2, 0, 1242, 75, 90],
                    [2, 0, 1242, 75, 90],
                    [2, 0, 1242, 75, 90],
                    [2, 0, 1242, 75, 90],
                    [2, 1173, 1250, 75, 90],
                    [2, 1173, 1250, 75, 90],
                    [2, 1173, 1250, 75, 90],
                    [2, 1014, 1275, 75, 90],
                    [2, 1014, 1275, 75, 90],
                    [2, 1014, 1275, 75, 90]
                ]],
                [4, [
                    [2, 936, 1326, 75, 75],
                    [2, 936, 1326, 75, 75],
                    [2, 0, 1335, 75, 75],
                    [2, 0, 1335, 75,
                        75
                    ],
                    [2, 0, 1335, 75, 75],
                    [2, 1170, 1343, 75, 75],
                    [2, 1170, 1343, 75, 75],
                    [2, 1170, 1343, 75, 75],
                    [2, 1170, 1343, 75, 75],
                    [2, 1014, 1368, 75, 75],
                    [2, 1014, 1368, 75, 75],
                    [2, 1014, 1368, 75, 75]
                ]],
                [5, [
                    [1, 999, 1444, 75, 75],
                    [1, 999, 1444, 75, 75],
                    [1, 999, 1444, 75, 75],
                    [1, 1383, 1486, 75, 75],
                    [1, 1383, 1486, 75, 75],
                    [1, 1383, 1486, 75, 75],
                    [1, 1461, 1486, 75, 75],
                    [1, 1461, 1486, 75, 75],
                    [1, 1461, 1486, 75, 75],
                    [1, 1539, 1487, 75, 75],
                    [1, 1539, 1487, 75, 75],
                    [1, 1539, 1487, 75, 75]
                ]],
                [6, [
                    [3, 1848, 1248, 75, 75],
                    [3, 1848, 1248, 75, 75],
                    [3, 1848, 1248, 75, 75],
                    [3, 1926, 1248, 75, 75],
                    [3, 1926, 1248,
                        75, 75
                    ],
                    [3, 1926, 1248, 75, 75],
                    [3, 0, 1276, 75, 75],
                    [3, 0, 1276, 75, 75],
                    [3, 0, 1276, 75, 75],
                    [3, 78, 1276, 75, 75],
                    [3, 78, 1276, 75, 75],
                    [3, 156, 1276, 75, 75],
                    [3, 156, 1276, 75, 75]
                ]],
                [7, [
                    [3, 1560, 1400, 75, 75],
                    [3, 1560, 1400, 75, 75],
                    [3, 1560, 1400, 75, 75],
                    [3, 1638, 1400, 75, 75],
                    [3, 1638, 1400, 75, 75],
                    [3, 1638, 1400, 75, 75],
                    [3, 1638, 1400, 75, 75],
                    [3, 1716, 1400, 75, 75],
                    [3, 1716, 1400, 75, 75],
                    [3, 624, 1402, 75, 75],
                    [3, 624, 1402, 75, 75],
                    [3, 624, 1402, 75, 75],
                    [3, 702, 1402, 75, 75],
                    [3, 702, 1402, 75, 75],
                    [3, 702, 1402, 75, 75]
                ]],
                [8, [
                    [3, 546, 1432, 75, 75],
                    [3, 546, 1432, 75, 75],
                    [3, 1092,
                        1478, 75, 75
                    ],
                    [3, 1092, 1478, 75, 75],
                    [3, 1170, 1478, 75, 75],
                    [3, 1170, 1478, 75, 75],
                    [3, 1170, 1478, 75, 75],
                    [3, 1170, 1478, 75, 75],
                    [3, 1248, 1478, 75, 75],
                    [3, 1326, 1478, 75, 75],
                    [3, 1326, 1478, 75, 75],
                    [3, 1326, 1478, 75, 75]
                ]],
                [0, wf]
            ])],
            ["happy", new Map([
                [1, [
                    [1, 1924, 220, 75, 75],
                    [1, 1924, 220, 75, 75],
                    [1, 1924, 298, 75, 75],
                    [1, 1924, 298, 75, 75],
                    [1, 1924, 376, 75, 75],
                    [1, 1924, 376, 75, 75],
                    [1, 1924, 454, 75, 75],
                    [1, 1924, 454, 75, 75],
                    [1, 1924, 532, 75, 75],
                    [1, 1924, 532, 75, 75],
                    [1, 1924, 610, 75, 75],
                    [1, 1969, 797, 75, 75],
                    [1, 1969, 797, 75, 75],
                    [1, 1027, 821, 75, 75],
                    [1, 1027, 821,
                        75, 75
                    ],
                    [1, 306, 874, 75, 75],
                    [1, 306, 874, 75, 75],
                    [1, 1969, 875, 75, 75],
                    [1, 1969, 875, 75, 75],
                    [1, 1969, 875, 75, 75],
                    [1, 1027, 899, 75, 75],
                    [1, 1027, 899, 75, 75],
                    [1, 1027, 899, 75, 75],
                    [1, 1027, 899, 75, 75],
                    [1, 1914, 953, 75, 75],
                    [1, 1914, 953, 75, 75],
                    [1, 1914, 953, 75, 75],
                    [1, 1914, 953, 75, 75],
                    [1, 765, 980, 75, 75],
                    [1, 765, 980, 75, 75],
                    [1, 1333, 982, 75, 75],
                    [1, 1914, 1031, 75, 75],
                    [1, 1914, 1031, 75, 75],
                    [1, 1914, 1109, 75, 75],
                    [1, 1914, 1109, 75, 75],
                    [1, 1486, 1120, 75, 75],
                    [1, 1486, 1120, 75, 75]
                ]],
                [2, [
                    [2, 1296, 1119, 75, 90],
                    [2, 1296, 1119, 75, 90],
                    [2, 1374, 1119, 75, 90],
                    [2, 1374,
                        1119, 75, 90
                    ],
                    [2, 1374, 1119, 75, 90],
                    [2, 1452, 1119, 75, 90],
                    [2, 1452, 1119, 75, 90],
                    [2, 1452, 1119, 75, 90],
                    [2, 1452, 1119, 75, 90],
                    [2, 1452, 1119, 75, 90],
                    [2, 1452, 1119, 75, 90],
                    [2, 1452, 1119, 75, 90],
                    [2, 1530, 1119, 75, 90],
                    [2, 1530, 1119, 75, 90],
                    [2, 1608, 1119, 75, 90],
                    [2, 1686, 1119, 75, 90],
                    [2, 1686, 1119, 75, 90],
                    [2, 1764, 1119, 75, 90],
                    [2, 1764, 1119, 75, 90],
                    [2, 1764, 1119, 75, 90],
                    [2, 1764, 1119, 75, 90],
                    [2, 1764, 1119, 75, 90],
                    [2, 1764, 1119, 75, 90],
                    [2, 1764, 1119, 75, 90],
                    [2, 1764, 1119, 75, 90],
                    [2, 1764, 1119, 75, 90],
                    [2, 1842, 1119, 75, 90],
                    [2, 1842, 1119, 75, 90],
                    [2, 1920, 1119,
                        75, 90
                    ],
                    [2, 1920, 1119, 75, 90],
                    [2, 1920, 1119, 75, 90],
                    [2, 81, 1140, 75, 90],
                    [2, 1764, 1119, 75, 90],
                    [2, 1764, 1119, 75, 90],
                    [2, 1764, 1119, 75, 90],
                    [2, 1764, 1119, 75, 90],
                    [2, 1764, 1119, 75, 90],
                    [2, 159, 1140, 75, 90],
                    [2, 159, 1140, 75, 90],
                    [2, 237, 1140, 75, 90],
                    [2, 237, 1140, 75, 90],
                    [2, 315, 1140, 75, 90],
                    [2, 315, 1140, 75, 90]
                ]],
                [3, [
                    [2, 78, 1233, 75, 90],
                    [2, 78, 1233, 75, 90],
                    [2, 156, 1233, 75, 90],
                    [2, 156, 1233, 75, 90],
                    [2, 234, 1233, 75, 90],
                    [2, 234, 1233, 75, 90],
                    [2, 312, 1233, 75, 90],
                    [2, 312, 1233, 75, 90],
                    [2, 390, 1233, 75, 90],
                    [2, 390, 1233, 75, 90],
                    [2, 468, 1233, 75, 90],
                    [2, 468, 1233,
                        75, 90
                    ],
                    [2, 546, 1233, 75, 90],
                    [2, 546, 1233, 75, 90],
                    [2, 546, 1233, 75, 90],
                    [2, 546, 1233, 75, 90],
                    [2, 624, 1233, 75, 90],
                    [2, 624, 1233, 75, 90],
                    [2, 624, 1233, 75, 90],
                    [2, 624, 1233, 75, 90],
                    [2, 624, 1233, 75, 90],
                    [2, 624, 1233, 75, 90],
                    [2, 624, 1233, 75, 90],
                    [2, 624, 1233, 75, 90],
                    [2, 624, 1233, 75, 90],
                    [2, 702, 1233, 75, 90],
                    [2, 780, 1233, 75, 90],
                    [2, 780, 1233, 75, 90],
                    [2, 858, 1233, 75, 90],
                    [2, 858, 1233, 75, 90]
                ]],
                [4, [
                    [2, 1797, 1305, 75, 75],
                    [2, 1797, 1305, 75, 75],
                    [2, 1875, 1305, 75, 75],
                    [2, 1875, 1305, 75, 75],
                    [2, 1953, 1305, 75, 75],
                    [2, 1953, 1305, 75, 75],
                    [2, 78, 1326, 75, 75],
                    [2, 78, 1326,
                        75, 75
                    ],
                    [2, 156, 1326, 75, 75],
                    [2, 234, 1326, 75, 75],
                    [2, 312, 1326, 75, 75],
                    [2, 312, 1326, 75, 75],
                    [2, 390, 1326, 75, 75],
                    [2, 390, 1326, 75, 75],
                    [2, 390, 1326, 75, 75],
                    [2, 390, 1326, 75, 75],
                    [2, 468, 1326, 75, 75],
                    [2, 468, 1326, 75, 75],
                    [2, 468, 1326, 75, 75],
                    [2, 468, 1326, 75, 75],
                    [2, 468, 1326, 75, 75],
                    [2, 468, 1326, 75, 75],
                    [2, 468, 1326, 75, 75],
                    [2, 546, 1326, 75, 75],
                    [2, 546, 1326, 75, 75],
                    [2, 546, 1326, 75, 75],
                    [2, 546, 1326, 75, 75],
                    [2, 624, 1326, 75, 75],
                    [2, 624, 1326, 75, 75],
                    [2, 702, 1326, 75, 75],
                    [2, 780, 1326, 75, 75],
                    [2, 858, 1326, 75, 75],
                    [2, 858, 1326, 75, 75]
                ]],
                [5, [
                    [1, 1923, 1421,
                        75, 75
                    ],
                    [1, 1923, 1421, 75, 75],
                    [1, 1149, 1426, 75, 75],
                    [1, 1149, 1426, 75, 75],
                    [1, 1227, 1426, 75, 75],
                    [1, 1227, 1426, 75, 75],
                    [1, 1305, 1429, 75, 75],
                    [1, 765, 1433, 75, 75],
                    [1, 765, 1433, 75, 75],
                    [1, 765, 1433, 75, 75],
                    [1, 765, 1433, 75, 75],
                    [1, 765, 1433, 75, 75],
                    [1, 765, 1433, 75, 75],
                    [1, 234, 1439, 75, 75],
                    [1, 234, 1439, 75, 75],
                    [1, 312, 1439, 75, 75],
                    [1, 312, 1439, 75, 75],
                    [1, 390, 1439, 75, 75],
                    [1, 390, 1439, 75, 75],
                    [1, 468, 1439, 75, 75],
                    [1, 468, 1439, 75, 75],
                    [1, 468, 1439, 75, 75],
                    [1, 468, 1439, 75, 75],
                    [1, 468, 1439, 75, 75],
                    [1, 468, 1439, 75, 75],
                    [1, 468, 1439, 75, 75],
                    [1, 468, 1439, 75,
                        75
                    ],
                    [1, 468, 1439, 75, 75],
                    [1, 468, 1439, 75, 75],
                    [1, 468, 1439, 75, 75],
                    [1, 468, 1439, 75, 75],
                    [1, 546, 1439, 75, 75],
                    [1, 546, 1439, 75, 75],
                    [1, 624, 1439, 75, 75],
                    [1, 624, 1439, 75, 75],
                    [1, 843, 1441, 75, 75],
                    [1, 843, 1441, 75, 75],
                    [1, 921, 1441, 75, 75],
                    [1, 921, 1441, 75, 75]
                ]],
                [6, [
                    [3, 1146, 1244, 75, 75],
                    [3, 1146, 1244, 75, 75],
                    [3, 1224, 1244, 75, 75],
                    [3, 1224, 1244, 75, 75],
                    [3, 1302, 1244, 75, 75],
                    [3, 1302, 1244, 75, 75],
                    [3, 1380, 1244, 75, 75],
                    [3, 1380, 1244, 75, 75],
                    [3, 1458, 1244, 75, 75],
                    [3, 1458, 1244, 75, 75],
                    [3, 1536, 1244, 75, 75],
                    [3, 1536, 1244, 75, 75],
                    [3, 1614, 1244, 75, 75],
                    [3,
                        1614, 1244, 75, 75
                    ],
                    [3, 1614, 1244, 75, 75],
                    [3, 1692, 1244, 75, 75],
                    [3, 1692, 1244, 75, 75],
                    [3, 1692, 1244, 75, 75],
                    [3, 1692, 1244, 75, 75],
                    [3, 1692, 1244, 75, 75],
                    [3, 1692, 1244, 75, 75],
                    [3, 1692, 1244, 75, 75],
                    [3, 1692, 1244, 75, 75],
                    [3, 1692, 1244, 75, 75],
                    [3, 1692, 1244, 75, 75],
                    [3, 1770, 1244, 75, 75],
                    [3, 1770, 1244, 75, 75],
                    [3, 632, 1246, 75, 75],
                    [3, 632, 1246, 75, 75],
                    [3, 710, 1246, 75, 75],
                    [3, 710, 1246, 75, 75],
                    [3, 788, 1246, 75, 75]
                ]],
                [7, [
                    [3, 1458, 1322, 75, 75],
                    [3, 1458, 1322, 75, 75],
                    [3, 1536, 1322, 75, 75],
                    [3, 1536, 1322, 75, 75],
                    [3, 1614, 1322, 75, 75],
                    [3, 1692, 1322, 75, 75],
                    [3,
                        1770, 1322, 75, 75
                    ],
                    [3, 624, 1324, 75, 75],
                    [3, 702, 1324, 75, 75],
                    [3, 780, 1324, 75, 75],
                    [3, 858, 1324, 75, 75],
                    [3, 936, 1324, 75, 75],
                    [3, 1014, 1324, 75, 75],
                    [3, 1848, 1326, 75, 75],
                    [3, 1926, 1326, 75, 75],
                    [3, 0, 1354, 75, 75],
                    [3, 78, 1354, 75, 75],
                    [3, 156, 1354, 75, 75],
                    [3, 234, 1354, 75, 75],
                    [3, 312, 1354, 75, 75],
                    [3, 312, 1354, 75, 75],
                    [3, 390, 1354, 75, 75],
                    [3, 468, 1354, 75, 75],
                    [3, 546, 1354, 75, 75],
                    [3, 1092, 1400, 75, 75],
                    [3, 1092, 1400, 75, 75],
                    [3, 1170, 1400, 75, 75],
                    [3, 1170, 1400, 75, 75],
                    [3, 1170, 1400, 75, 75],
                    [3, 1248, 1400, 75, 75],
                    [3, 1248, 1400, 75, 75],
                    [3, 1248, 1400, 75, 75],
                    [3,
                        1248, 1400, 75, 75
                    ],
                    [3, 1326, 1400, 75, 75],
                    [3, 1326, 1400, 75, 75],
                    [3, 1404, 1400, 75, 75],
                    [3, 1404, 1400, 75, 75],
                    [3, 1404, 1400, 75, 75],
                    [3, 1482, 1400, 75, 75],
                    [3, 1482, 1400, 75, 75]
                ]],
                [8, [
                    [3, 1872, 1404, 75, 75],
                    [3, 1872, 1404, 75, 75],
                    [3, 1950, 1404, 75, 75],
                    [3, 1950, 1404, 75, 75],
                    [3, 0, 1432, 75, 75],
                    [3, 0, 1432, 75, 75],
                    [3, 78, 1432, 75, 75],
                    [3, 78, 1432, 75, 75],
                    [3, 156, 1432, 75, 75],
                    [3, 156, 1432, 75, 75],
                    [3, 156, 1432, 75, 75],
                    [3, 0, 1432, 75, 75],
                    [3, 0, 1432, 75, 75],
                    [3, 78, 1432, 75, 75],
                    [3, 78, 1432, 75, 75],
                    [3, 156, 1432, 75, 75],
                    [3, 156, 1432, 75, 75],
                    [3, 156, 1432, 75, 75],
                    [3, 0,
                        1432, 75, 75
                    ],
                    [3, 0, 1432, 75, 75],
                    [3, 78, 1432, 75, 75],
                    [3, 78, 1432, 75, 75],
                    [3, 156, 1432, 75, 75],
                    [3, 156, 1432, 75, 75],
                    [3, 156, 1432, 75, 75],
                    [3, 0, 1432, 75, 75],
                    [3, 0, 1432, 75, 75],
                    [3, 234, 1432, 75, 75],
                    [3, 234, 1432, 75, 75],
                    [3, 312, 1432, 75, 75],
                    [3, 312, 1432, 75, 75],
                    [3, 390, 1432, 75, 75],
                    [3, 390, 1432, 75, 75],
                    [3, 468, 1432, 75, 75],
                    [3, 468, 1432, 75, 75]
                ]],
                [0, wf]
            ])],
            ["sad", new Map([
                [1, [
                    [1, 1071, 1288, 75, 75],
                    [1, 1071, 1288, 75, 75],
                    [1, 1071, 1288, 75, 75],
                    [1, 1071, 1288, 75, 75],
                    [1, 0, 1333, 75, 75],
                    [1, 0, 1333, 75, 75],
                    [1, 78, 1333, 75, 75],
                    [1, 156, 1333, 75, 75],
                    [1, 156, 1333,
                        75, 75
                    ],
                    [1, 1945, 1343, 75, 75],
                    [1, 1945, 1343, 75, 75],
                    [1, 1945, 1343, 75, 75],
                    [1, 1945, 1343, 75, 75],
                    [1, 1945, 1343, 75, 75],
                    [1, 1945, 1343, 75, 75],
                    [1, 1945, 1343, 75, 75],
                    [1, 1945, 1343, 75, 75],
                    [1, 1945, 1343, 75, 75],
                    [1, 1945, 1343, 75, 75],
                    [1, 1945, 1343, 75, 75],
                    [1, 1945, 1343, 75, 75],
                    [1, 1945, 1343, 75, 75],
                    [1, 1945, 1343, 75, 75],
                    [1, 1945, 1343, 75, 75],
                    [1, 1945, 1343, 75, 75],
                    [1, 1945, 1343, 75, 75],
                    [1, 1377, 1351, 75, 75],
                    [1, 1377, 1351, 75, 75],
                    [1, 1071, 1366, 75, 75],
                    [1, 1071, 1366, 75, 75],
                    [1, 1455, 1408, 75, 75],
                    [1, 1533, 1408, 75, 75],
                    [1, 1533, 1408, 75, 75],
                    [1, 1533, 1408, 75,
                        75
                    ],
                    [1, 1071, 1288, 75, 75]
                ]],
                [2, [
                    [2, 1017, 1182, 75, 90],
                    [2, 1017, 1182, 75, 90],
                    [2, 1095, 1182, 75, 90],
                    [2, 1095, 1182, 75, 90],
                    [2, 1263, 1212, 75, 90],
                    [2, 1341, 1212, 75, 90],
                    [2, 1419, 1212, 75, 90],
                    [2, 1497, 1212, 75, 90],
                    [2, 1575, 1212, 75, 90],
                    [2, 1653, 1212, 75, 90],
                    [2, 1653, 1212, 75, 90],
                    [2, 1575, 1212, 75, 90],
                    [2, 1575, 1212, 75, 90],
                    [2, 1731, 1212, 75, 90],
                    [2, 1731, 1212, 75, 90],
                    [2, 1575, 1212, 75, 90],
                    [2, 1575, 1212, 75, 90],
                    [2, 1731, 1212, 75, 90],
                    [2, 1731, 1212, 75, 90],
                    [2, 1575, 1212, 75, 90],
                    [2, 1575, 1212, 75, 90],
                    [2, 1731, 1212, 75, 90],
                    [2, 1731, 1212, 75, 90],
                    [2, 1575, 1212,
                        75, 90
                    ],
                    [2, 1575, 1212, 75, 90],
                    [2, 1731, 1212, 75, 90],
                    [2, 1731, 1212, 75, 90],
                    [2, 1575, 1212, 75, 90],
                    [2, 1575, 1212, 75, 90],
                    [2, 1731, 1212, 75, 90],
                    [2, 1731, 1212, 75, 90],
                    [2, 1575, 1212, 75, 90],
                    [2, 1575, 1212, 75, 90],
                    [2, 1731, 1212, 75, 90],
                    [2, 1731, 1212, 75, 90],
                    [2, 1575, 1212, 75, 90],
                    [2, 1809, 1212, 75, 90],
                    [2, 1887, 1212, 75, 90],
                    [2, 1887, 1212, 75, 90],
                    [2, 1017, 1182, 75, 90],
                    [2, 1017, 1182, 75, 90],
                    [2, 1965, 1212, 75, 90],
                    [2, 1965, 1212, 75, 90]
                ]],
                [3, [
                    [2, 1092, 1275, 75, 90],
                    [2, 1092, 1275, 75, 90],
                    [2, 1251, 1305, 75, 90],
                    [2, 1251, 1305, 75, 90],
                    [2, 1329, 1305, 75, 90],
                    [2, 1329,
                        1305, 75, 90
                    ],
                    [2, 1407, 1305, 75, 90],
                    [2, 1485, 1305, 75, 90],
                    [2, 1485, 1305, 75, 90],
                    [2, 1563, 1305, 75, 90],
                    [2, 1563, 1305, 75, 90],
                    [2, 1563, 1305, 75, 90],
                    [2, 1563, 1305, 75, 90],
                    [2, 1563, 1305, 75, 90],
                    [2, 1563, 1305, 75, 90],
                    [2, 1563, 1305, 75, 90],
                    [2, 1563, 1305, 75, 90],
                    [2, 1563, 1305, 75, 90],
                    [2, 1563, 1305, 75, 90],
                    [2, 1563, 1305, 75, 90],
                    [2, 1563, 1305, 75, 90],
                    [2, 1563, 1305, 75, 90],
                    [2, 1563, 1305, 75, 90],
                    [2, 1563, 1305, 75, 90],
                    [2, 1641, 1305, 75, 90],
                    [2, 1641, 1305, 75, 90],
                    [2, 1719, 1305, 75, 90],
                    [2, 1719, 1305, 75, 90]
                ]],
                [4, [
                    [2, 1092, 1368, 75, 75],
                    [2, 1797, 1383, 75, 75],
                    [2,
                        1797, 1383, 75, 75
                    ],
                    [2, 1875, 1383, 75, 75],
                    [2, 1875, 1383, 75, 75],
                    [2, 1953, 1383, 75, 75],
                    [2, 1953, 1383, 75, 75],
                    [2, 1248, 1398, 75, 75],
                    [2, 1248, 1398, 75, 75],
                    [2, 1248, 1398, 75, 75],
                    [2, 1326, 1398, 75, 75],
                    [2, 1326, 1398, 75, 75],
                    [2, 1404, 1398, 75, 75],
                    [2, 1404, 1398, 75, 75],
                    [2, 1482, 1398, 75, 75],
                    [2, 1482, 1398, 75, 75],
                    [2, 1560, 1398, 75, 75],
                    [2, 1560, 1398, 75, 75],
                    [2, 1560, 1398, 75, 75],
                    [2, 1560, 1398, 75, 75],
                    [2, 1560, 1398, 75, 75],
                    [2, 1560, 1398, 75, 75],
                    [2, 1560, 1398, 75, 75],
                    [2, 1638, 1398, 75, 75],
                    [2, 1638, 1398, 75, 75],
                    [2, 1716, 1398, 75, 75],
                    [2, 1716, 1398, 75, 75],
                    [2, 78,
                        1404, 75, 75
                    ],
                    [2, 78, 1404, 75, 75],
                    [2, 156, 1404, 75, 75],
                    [2, 156, 1404, 75, 75],
                    [2, 234, 1404, 75, 75],
                    [2, 234, 1404, 75, 75],
                    [2, 312, 1404, 75, 75]
                ]],
                [5, [
                    [1, 1617, 1487, 75, 75],
                    [1, 1617, 1487, 75, 75],
                    [1, 1695, 1487, 75, 75],
                    [1, 1773, 1487, 75, 75],
                    [1, 0, 1489, 75, 75],
                    [1, 78, 1489, 75, 75],
                    [1, 1773, 1487, 75, 75],
                    [1, 0, 1489, 75, 75],
                    [1, 78, 1489, 75, 75],
                    [1, 1773, 1487, 75, 75],
                    [1, 0, 1489, 75, 75],
                    [1, 78, 1489, 75, 75],
                    [1, 1773, 1487, 75, 75],
                    [1, 0, 1489, 75, 75],
                    [1, 78, 1489, 75, 75],
                    [1, 1773, 1487, 75, 75],
                    [1, 0, 1489, 75, 75],
                    [1, 78, 1489, 75, 75],
                    [1, 1773, 1487, 75, 75],
                    [1, 0, 1489, 75, 75],
                    [1, 156, 1489, 75, 75],
                    [1, 156, 1489, 75, 75],
                    [1, 1851, 1499, 75, 75],
                    [1, 1851, 1499, 75, 75]
                ]],
                [6, [
                    [3, 234, 1276, 75, 75],
                    [3, 234, 1276, 75, 75],
                    [3, 312, 1276, 75, 75],
                    [3, 312, 1276, 75, 75],
                    [3, 390, 1276, 75, 75],
                    [3, 390, 1276, 75, 75],
                    [3, 468, 1276, 75, 75],
                    [3, 468, 1276, 75, 75],
                    [3, 546, 1276, 75, 75],
                    [3, 546, 1276, 75, 75],
                    [3, 468, 1276, 75, 75],
                    [3, 468, 1276, 75, 75],
                    [3, 546, 1276, 75, 75],
                    [3, 546, 1276, 75, 75],
                    [3, 468, 1276, 75, 75],
                    [3, 468, 1276, 75, 75],
                    [3, 546, 1276, 75, 75],
                    [3, 1146, 1322, 75, 75],
                    [3, 1224, 1322, 75, 75],
                    [3, 1302, 1322, 75, 75],
                    [3, 1302, 1322, 75, 75],
                    [3, 1380, 1322, 75,
                        75
                    ],
                    [3, 1380, 1322, 75, 75]
                ]],
                [7, [
                    [3, 1458, 1322, 75, 75],
                    [3, 1458, 1322, 75, 75],
                    [3, 780, 1402, 75, 75],
                    [3, 780, 1402, 75, 75],
                    [3, 858, 1402, 75, 75],
                    [3, 936, 1402, 75, 75],
                    [3, 936, 1402, 75, 75],
                    [3, 1014, 1402, 75, 75],
                    [3, 1014, 1402, 75, 75],
                    [3, 1794, 1404, 75, 75],
                    [3, 1794, 1404, 75, 75],
                    [3, 1794, 1404, 75, 75],
                    [3, 1794, 1404, 75, 75],
                    [3, 1794, 1404, 75, 75],
                    [3, 1794, 1404, 75, 75],
                    [3, 1794, 1404, 75, 75],
                    [3, 1794, 1404, 75, 75],
                    [3, 1794, 1404, 75, 75],
                    [3, 1794, 1404, 75, 75],
                    [3, 1794, 1404, 75, 75],
                    [3, 1794, 1404, 75, 75],
                    [3, 1794, 1404, 75, 75],
                    [3, 1794, 1404, 75, 75],
                    [3, 1794, 1404, 75,
                        75
                    ],
                    [3, 1794, 1404, 75, 75],
                    [3, 1794, 1404, 75, 75],
                    [3, 1794, 1404, 75, 75],
                    [3, 1794, 1404, 75, 75],
                    [3, 1794, 1404, 75, 75],
                    [3, 1794, 1404, 75, 75],
                    [3, 1794, 1404, 75, 75],
                    [3, 1794, 1404, 75, 75],
                    [3, 1794, 1404, 75, 75],
                    [3, 1794, 1404, 75, 75],
                    [3, 1794, 1404, 75, 75],
                    [3, 1404, 1400, 75, 75],
                    [3, 1404, 1400, 75, 75],
                    [3, 1404, 1400, 75, 75],
                    [3, 1482, 1400, 75, 75],
                    [3, 1482, 1400, 75, 75]
                ]],
                [8, [
                    [3, 1404, 1478, 75, 75],
                    [3, 1404, 1478, 75, 75],
                    [3, 1950, 1404, 75, 75],
                    [3, 1950, 1404, 75, 75],
                    [3, 1482, 1478, 75, 75],
                    [3, 1482, 1478, 75, 75],
                    [3, 1560, 1478, 75, 75],
                    [3, 1560, 1478, 75, 75],
                    [3, 1638, 1478,
                        75, 75
                    ],
                    [3, 1638, 1478, 75, 75],
                    [3, 1638, 1478, 75, 75],
                    [3, 1482, 1478, 75, 75],
                    [3, 1482, 1478, 75, 75],
                    [3, 1560, 1478, 75, 75],
                    [3, 1560, 1478, 75, 75],
                    [3, 1638, 1478, 75, 75],
                    [3, 1638, 1478, 75, 75],
                    [3, 1638, 1478, 75, 75],
                    [3, 1482, 1478, 75, 75],
                    [3, 1482, 1478, 75, 75],
                    [3, 1560, 1478, 75, 75],
                    [3, 1560, 1478, 75, 75],
                    [3, 1638, 1478, 75, 75],
                    [3, 1638, 1478, 75, 75],
                    [3, 1638, 1478, 75, 75],
                    [3, 1482, 1478, 75, 75],
                    [3, 1482, 1478, 75, 75],
                    [3, 1716, 1478, 75, 75],
                    [3, 1716, 1478, 75, 75],
                    [3, 312, 1432, 75, 75],
                    [3, 312, 1432, 75, 75],
                    [3, 390, 1432, 75, 75],
                    [3, 390, 1432, 75, 75],
                    [3, 468, 1432, 75, 75],
                    [3, 468, 1432, 75, 75]
                ]],
                [0, wf]
            ])],
            ["lobby", new Map([
                [1, [
                    [2, 1989, 0, 56, 68]
                ]],
                [2, [
                    [2, 1296, 1038, 78, 78],
                    [2, 1377, 1038, 78, 78],
                    [2, 1458, 1038, 78, 78],
                    [2, 1539, 1038, 78, 78],
                    [2, 1620, 1038, 78, 78],
                    [2, 1701, 1038, 78, 78],
                    [2, 1782, 1038, 78, 78],
                    [2, 1863, 1038, 78, 78],
                    [2, 1944, 1038, 78, 78],
                    [2, 1944, 1038, 78, 78],
                    [2, 1944, 1038, 78, 78],
                    [2, 1944, 1038, 78, 78],
                    [2, 1944, 1038, 78, 78],
                    [2, 1944, 1038, 78, 78],
                    [2, 1944, 1038, 78, 78],
                    [2, 1944, 1038, 78, 78],
                    [2, 1944, 1038, 78, 78],
                    [2, 1944, 1038, 78, 78],
                    [2, 1944, 1038, 78, 78],
                    [2, 1944, 1038, 78, 78],
                    [2, 1944, 1038, 78, 78],
                    [2, 1944,
                        1038, 78, 78
                    ],
                    [2, 1944, 1038, 78, 78],
                    [2, 1944, 1038, 78, 78],
                    [2, 1944, 1038, 78, 78],
                    [2, 153, 1059, 78, 78],
                    [2, 153, 1059, 78, 78],
                    [2, 234, 1059, 78, 78],
                    [2, 234, 1059, 78, 78],
                    [2, 234, 1059, 78, 78],
                    [2, 234, 1059, 78, 78],
                    [2, 234, 1059, 78, 78],
                    [2, 234, 1059, 78, 78],
                    [2, 234, 1059, 78, 78],
                    [2, 234, 1059, 78, 78],
                    [2, 234, 1059, 78, 78],
                    [2, 234, 1059, 78, 78],
                    [2, 234, 1059, 78, 78],
                    [2, 234, 1059, 78, 78],
                    [2, 234, 1059, 78, 78],
                    [2, 234, 1059, 78, 78],
                    [2, 234, 1059, 78, 78],
                    [2, 234, 1059, 78, 78],
                    [2, 234, 1059, 78, 78],
                    [2, 234, 1059, 78, 78],
                    [2, 234, 1059, 78, 78],
                    [2, 234, 1059, 78, 78],
                    [2, 234, 1059,
                        78, 78
                    ],
                    [2, 315, 1059, 78, 78],
                    [2, 396, 1059, 78, 78],
                    [2, 477, 1059, 78, 78],
                    [2, 558, 1059, 78, 78],
                    [2, 639, 1059, 78, 78],
                    [2, 720, 1059, 78, 78],
                    [2, 801, 1059, 78, 78],
                    [2, 882, 1059, 78, 78],
                    [2, 963, 1059, 78, 78],
                    [2, 0, 1068, 78, 78],
                    [2, 1296, 1038, 78, 78],
                    [2, 1296, 1038, 78, 78]
                ]],
                [3, [
                    [2, 153, 915, 126, 141],
                    [2, 153, 915, 126, 141],
                    [2, 153, 915, 126, 141],
                    [2, 282, 915, 126, 141],
                    [2, 282, 915, 126, 141],
                    [2, 282, 915, 126, 141],
                    [2, 282, 915, 126, 141],
                    [2, 411, 915, 126, 141],
                    [2, 411, 915, 126, 141],
                    [2, 540, 915, 126, 141],
                    [2, 540, 915, 126, 141],
                    [2, 669, 915, 126, 141],
                    [2, 669, 915, 126, 141],
                    [2, 798, 915, 126, 141],
                    [2, 798, 915, 126, 141],
                    [2, 927, 915, 126, 141],
                    [2, 927, 915, 126, 141],
                    [2, 1056, 1038, 126, 141]
                ]],
                [4, [
                    [2, 909, 1404, 62, 91],
                    [2, 909, 1404, 62, 91],
                    [2, 909, 1404, 62, 91],
                    [2, 909, 1404, 62, 91],
                    [2, 909, 1404, 62, 91],
                    [2, 909, 1404, 62, 91],
                    [2, 909, 1404, 62, 91],
                    [2, 909, 1404, 62, 91],
                    [2, 909, 1404, 62, 91],
                    [2, 909, 1404, 62, 91],
                    [2, 0, 1413, 62, 91],
                    [2, 0, 1413, 62, 91],
                    [2, 0, 1413, 62, 91],
                    [2, 0, 1413, 62, 91],
                    [2, 0, 1413, 62, 91],
                    [2, 0, 1413, 62, 91],
                    [2, 0, 1413, 62, 91],
                    [2, 0, 1413, 62, 91],
                    [2, 0, 1413, 62, 91],
                    [2, 0, 1413, 62, 91],
                    [2, 0, 1413, 62, 91]
                ]],
                [5, [
                    [3, 672, 1071,
                        78, 92
                    ],
                    [3, 672, 1071, 78, 92],
                    [3, 672, 1071, 78, 92],
                    [3, 753, 1071, 78, 92],
                    [3, 753, 1071, 78, 92],
                    [3, 753, 1071, 78, 92],
                    [3, 834, 1071, 78, 92],
                    [3, 834, 1071, 78, 92],
                    [3, 834, 1071, 78, 92]
                ]],
                [6, [
                    [3, 915, 1164, 76, 77],
                    [3, 994, 1164, 76, 77],
                    [3, 1073, 1164, 76, 77],
                    [3, 1152, 1164, 76, 77],
                    [3, 1231, 1164, 76, 77],
                    [3, 1310, 1164, 76, 77],
                    [3, 1389, 1164, 76, 77],
                    [3, 1468, 1164, 76, 77],
                    [3, 1547, 1164, 76, 77],
                    [3, 1547, 1164, 76, 77],
                    [3, 1547, 1164, 76, 77],
                    [3, 1626, 1164, 76, 77],
                    [3, 1626, 1164, 76, 77],
                    [3, 1626, 1164, 76, 77],
                    [3, 1626, 1164, 76, 77],
                    [3, 1705, 1164, 76, 77],
                    [3, 1705, 1164, 76, 77],
                    [3, 1705, 1164, 76, 77],
                    [3, 1705, 1164, 76, 77],
                    [3, 1784, 1164, 76, 77],
                    [3, 1784, 1164, 76, 77],
                    [3, 1784, 1164, 76, 77],
                    [3, 1784, 1164, 76, 77],
                    [3, 672, 1166, 76, 77],
                    [3, 672, 1166, 76, 77],
                    [3, 672, 1166, 76, 77],
                    [3, 672, 1166, 76, 77],
                    [3, 751, 1166, 76, 77],
                    [3, 751, 1166, 76, 77],
                    [3, 751, 1166, 76, 77],
                    [3, 830, 1166, 76, 77],
                    [3, 830, 1166, 76, 77],
                    [3, 830, 1166, 76, 77],
                    [3, 830, 1166, 76, 77],
                    [3, 1547, 1164, 76, 77],
                    [3, 1547, 1164, 76, 77],
                    [3, 1547, 1164, 76, 77],
                    [3, 1547, 1164, 76, 77],
                    [3, 1626, 1164, 76, 77],
                    [3, 1626, 1164, 76, 77],
                    [3, 1626, 1164, 76, 77],
                    [3, 1863, 1168, 76, 77],
                    [3, 1942, 1168,
                        76, 77
                    ],
                    [3, 0, 1196, 76, 77],
                    [3, 79, 1196, 76, 77],
                    [3, 158, 1196, 76, 77],
                    [3, 237, 1196, 76, 77],
                    [3, 316, 1196, 76, 77],
                    [3, 395, 1196, 76, 77],
                    [3, 474, 1196, 76, 77],
                    [3, 553, 1196, 76, 77],
                    [3, 909, 1244, 76, 77],
                    [3, 988, 1244, 76, 77],
                    [3, 1067, 1244, 76, 77]
                ]],
                [7, [
                    [3, 1954, 918, 93, 122],
                    [3, 1954, 918, 93, 122],
                    [3, 918, 1039, 93, 122],
                    [3, 918, 1039, 93, 122],
                    [3, 918, 1039, 93, 122],
                    [3, 918, 1039, 93, 122],
                    [3, 1014, 1039, 93, 122],
                    [3, 1110, 1039, 93, 122],
                    [3, 1110, 1039, 93, 122],
                    [3, 1110, 1039, 93, 122],
                    [3, 1206, 1039, 93, 122],
                    [3, 1206, 1039, 93, 122],
                    [3, 1206, 1039, 93, 122],
                    [3, 1206, 1039, 93,
                        122
                    ],
                    [3, 1302, 1039, 93, 122],
                    [3, 1302, 1039, 93, 122],
                    [3, 1302, 1039, 93, 122],
                    [3, 1398, 1039, 93, 122],
                    [3, 1398, 1039, 93, 122],
                    [3, 1398, 1039, 93, 122],
                    [3, 1398, 1039, 93, 122],
                    [3, 1398, 1039, 93, 122],
                    [3, 1398, 1039, 93, 122],
                    [3, 1398, 1039, 93, 122],
                    [3, 1398, 1039, 93, 122],
                    [3, 1398, 1039, 93, 122],
                    [3, 1398, 1039, 93, 122],
                    [3, 1398, 1039, 93, 122],
                    [3, 1398, 1039, 93, 122],
                    [3, 1494, 1039, 93, 122],
                    [3, 1494, 1039, 93, 122],
                    [3, 1590, 1039, 93, 122],
                    [3, 1398, 1039, 93, 122],
                    [3, 1398, 1039, 93, 122],
                    [3, 1398, 1039, 93, 122],
                    [3, 1398, 1039, 93, 122],
                    [3, 1398, 1039, 93, 122],
                    [3, 1398, 1039,
                        93, 122
                    ],
                    [3, 1398, 1039, 93, 122],
                    [3, 1398, 1039, 93, 122],
                    [3, 1398, 1039, 93, 122],
                    [3, 1398, 1039, 93, 122],
                    [3, 1398, 1039, 93, 122],
                    [3, 1398, 1039, 93, 122],
                    [3, 1686, 1039, 93, 122],
                    [3, 1686, 1039, 93, 122],
                    [3, 1686, 1039, 93, 122],
                    [3, 1782, 1039, 93, 122],
                    [3, 1782, 1039, 93, 122],
                    [3, 1782, 1039, 93, 122],
                    [3, 1878, 1043, 93, 122],
                    [3, 1878, 1043, 93, 122],
                    [3, 1878, 1043, 93, 122],
                    [3, 1878, 1043, 93, 122],
                    [3, 1878, 1043, 93, 122],
                    [3, 0, 1071, 93, 122],
                    [3, 0, 1071, 93, 122],
                    [3, 0, 1071, 93, 122],
                    [3, 0, 1071, 93, 122],
                    [3, 96, 1071, 93, 122],
                    [3, 96, 1071, 93, 122],
                    [3, 192, 1071, 93, 122],
                    [3, 192,
                        1071, 93, 122
                    ],
                    [3, 288, 1071, 93, 122],
                    [3, 288, 1071, 93, 122],
                    [3, 384, 1071, 93, 122],
                    [3, 384, 1071, 93, 122],
                    [3, 480, 1071, 93, 122],
                    [3, 480, 1071, 93, 122],
                    [3, 576, 1071, 93, 122]
                ]],
                [8, [
                    [3, 918, 918, 145, 118],
                    [3, 918, 918, 145, 118],
                    [3, 918, 918, 145, 118],
                    [3, 1066, 918, 145, 118],
                    [3, 1066, 918, 145, 118],
                    [3, 1066, 918, 145, 118],
                    [3, 1214, 918, 145, 118],
                    [3, 1214, 918, 145, 118],
                    [3, 1362, 918, 145, 118],
                    [3, 1362, 918, 145, 118],
                    [3, 1362, 918, 145, 118],
                    [3, 1510, 918, 145, 118],
                    [3, 1510, 918, 145, 118],
                    [3, 1510, 918, 145, 118],
                    [3, 1658, 918, 145, 118],
                    [3, 1658, 918, 145, 118],
                    [3, 1806, 918,
                        145, 118
                    ],
                    [3, 1806, 918, 145, 118],
                    [3, 1806, 918, 145, 118]
                ]],
                [0, wf]
            ])],
            ["ready", new Map([
                [1, [
                    [2, 1185, 1038, 108, 116]
                ]],
                [2, [
                    [2, 624, 1404, 72, 75]
                ]],
                [3, [
                    [2, 774, 1404, 66, 75]
                ]],
                [4, [
                    [2, 699, 1404, 72, 75]
                ]],
                [5, [
                    [3, 1974, 1043, 70, 75]
                ]],
                [6, [
                    [3, 936, 1480, 66, 75]
                ]],
                [7, [
                    [3, 1794, 1482, 61, 75]
                ]],
                [8, [
                    [3, 1005, 1480, 62, 75]
                ]],
                [0, wf]
            ])]
        ]),
        Ai = [{
            a: {
                f: 1,
                y: 0
            },
            b: {
                f: 16,
                y: 7.7
            },
            c: {
                f: 24,
                y: 0
            }
        }, {
            a: {
                f: 1,
                y: 0
            },
            b: {
                f: 16,
                y: 7.7
            },
            c: {
                f: 24,
                y: 0
            }
        }, {
            a: {
                f: 1,
                y: 0
            },
            b: {
                f: 35,
                y: -16
            },
            c: {
                f: 72,
                y: 0
            }
        }, {
            a: {
                f: 1,
                y: 0
            },
            b: {
                f: 16,
                y: 5
            },
            c: {
                f: 24,
                y: 0
            }
        }, {
            a: {
                f: 1,
                y: 0
            },
            b: {
                f: 10,
                y: -8
            },
            c: {
                f: 18,
                y: 0
            }
        }, {
            a: {
                f: 1,
                y: 0
            },
            b: {
                f: 13,
                y: 5
            },
            c: {
                f: 24,
                y: 0
            }
        }, {
            a: {
                f: 1,
                y: 0
            },
            b: {
                f: 21,
                y: -5
            },
            c: {
                f: 42,
                y: 0
            }
        }, {
            a: {
                f: 1,
                y: 0
            },
            b: {
                f: 21,
                y: 8
            },
            c: {
                f: 42,
                y: 0
            }
        }, {
            a: {
                f: 1,
                y: 0
            },
            b: {
                f: 13,
                y: 5
            },
            c: {
                f: 24,
                y: 0
            }
        }, {
            a: {
                f: 1,
                y: 0
            },
            b: {
                f: 13,
                y: 5
            },
            c: {
                f: 24,
                y: 0
            }
        }];
    var Di = new Map([
        [16, 1],
        [1, 2],
        [2, 2]
    ]);
    var Gi = function() {
            var a = this;
            this.v = this.o = 0;
            this.j = 25;
            this.R = this.S = this.H = !1;
            this.T = {
                73: function() {
                    Ei(a, 1.5)
                },
                79: function() {
                    Ei(a, 1 / 1.5)
                },
                65: function() {
                    Fi(a, -100, 0);
                    a.H = !0
                },
                68: function() {
                    Fi(a, 100, 0);
                    a.H = !0
                },
                87: function() {
                    Fi(a, 0, -100);
                    a.H = !0
                },
                83: function() {
                    Fi(a, 0, 100);
                    a.H = !0
                },
                81: function() {
                    a.H = !1
                }
            }
        },
        Fi = function(a, b, c) {
            a.o += b / a.j;
            a.v += c / a.j
        },
        Hi = function(a, b, c, d, e) {
            d = void 0 === d ? K.width / 2 : d;
            e = void 0 === e ? K.height : e;
            e /= a.j;
            a.o = b - d / a.j;
            a.v = c - e
        },
        Ei = function(a, b) {
            var c = K.width / 2,
                d = K.height / 2,
                e = a.o + c / a.j,
                f = a.v + d / a.j;
            a.j *= b;
            a.o = e - c / a.j;
            a.v = f - d / a.j
        },
        Ii = function(a, b) {
            a.j = b
        },
        Ji = function(a, b) {
            var c = (b - a.o) * a.j;
            return c - 0 * (K.width / 2 - c)
        },
        Ki = function(a, b) {
            return (b - a.v) * a.j
        };
    Aa(Gi);
    var Mi = function() {
            console.log("Mi");
            var a = {};
            this.j = [
                ["match_size", 8, 1, 8],
                ["num_players", 8, 1, 8],
                ["match_duration", 120],
                ["match_ends_when_time_expires", !0],
                ["match_ends_when_lobby_empties", !0],
                ["lobby_ttl_sec", 0],
                ["player_join_ttl_sec", 0],
                ["init_ttl_sec", 10],
                ["match_fps", 24],
                ["countdown_timer", 5],
                ["use_pathfinding", !1],
                ["render_paths", !1],
                ["render_fog", !0],
                ["fog_intensity", 170],
                ["fog_scale_x", .125],
                ["fog_scale_y", .25],
                ["fog_scale_t", 3.2E-4],
                ["render_lighting", !0],
                ["render_map_layers_above_players", !0],
                ["alpha_team_color",
                    "50,255,100"
                ],
                ["bravo_team_color", "100,0,255"],
                ["light_color_alpha", "50,255,100"],
                ["light_color_bravo", "150,60,255"],
                ["light_map_debug", !1],
                ["player_vision_radius", 10],
                ["player_base_speed", 15],
                ["powerup_speed_multiplier", 1.5],
                ["use_collectible_stealing", !0],
                ["max_collectibles_held", -1],
                ["collectible_trail_speed", 10],
                ["collectible_respawn", !0],
                ["collectible_respawn_timer_ms", 18E3],
                ["magnet_attraction_radius", 15],
                ["magnet_sensor_radius", 10],
                ["magnet_inversion_rate", .15],
                ["all_seeing_lighting_multiplier",
                    2.2
                ],
                ["use_dematerialization", !0],
                ["sonic_boom_timer_ms", 700],
                ["score_delta_timer_ms", 250],
                ["powerup_threshold_1", 15],
                ["powerup_threshold_2", 45],
                ["powerup_threshold_3", 105],
                ["powerup_threshold_4", 225],
                ["repel_smaller_collectible_holder", !0],
                ["ai_step_size", 7],
                ["ai_random_arc_range", Math.PI / 4],
                ["ai_action_timer_ms", 500],
                ["ai_seek_timer_ms", 3E3],
                ["steals_for_cooldown", 3],
                ["steal_delay_timer_ms", 1E3],
                ["steal_cooldown_timer_ms", 0],
                ["steal_speed_boost_time_ms", 1750],
                ["steal_speed_boost", 1.5],
                ["speed_boost_trail_coefficient",
                    .01
                ],
                ["use_ally_candle_bonus", !0],
                ["ally_candle_bonus_value", 5],
                ["ally_candle_bonus_cooldown_ms", 3E3],
                ["ally_bonus_timer_ms", 3E3],
                ["mega_flame_spawn_interval", 3E4],
                ["mega_flames_per_spawn", 2],
                ["mega_flame_movement_timer", 1E3],
                ["mega_flame_speed", 5],
                ["mega_flame_collectible_value", 10],
                ["mega_flame_flee_timer", 2500],
                ["mega_flame_flee_radius", 10],
                ["mega_flame_flee_speed", 20],
                ["sync_dt_threshold", .2],
                ["sync_slip_time", .1],
                ["sync_epsilon", 1],
                ["sync_coefficient", .1],
                ["client_broadcast_timeout", 50],
                ["draw_debug_location",
                    !1
                ],
                ["notice_duration_ms", 2E3],
                ["notice_offset_x", 0],
                ["notice_offset_y", 0],
                ["time_warning_duration_ms", 2E3],
                ["zoom_out_per_collectible_held", .5],
                ["zoom_tween_time_ms", 1E3]
            ];
            for (var b in a) this.j.push(["env_" + b, a[b]]);
            this.o = {};
            a = {};
            for (b = 0; b < this.j.length; ++b) {
                var c = this.j[b],
                    d = c[0],
                    e = a[d],
                    f = c[1],
                    g = typeof f;
                va(e) ? Li(this, d, g, e, c[2], c[3]) : Li(this, d, g, f, c[2], c[3])
            }
        },
        Li = function(a, b, c, d, e, f) {
            switch (c) {
                case "number":
                    d = Number(d);
                    va(e) && (d = Math.max(d, e));
                    va(f) && (d = Math.min(d, f));
                    break;
                case "boolean":
                    d = !!d
            }
            a.o[b] = d
        };
    Mi.prototype.get = function(a) {
        return this.o[a]
    };
    Mi.prototype.set = function(a, b) {
        this.o[a] = b
    };
    /*

     copyright (c) 2006-2007 Erin Catto http://www.gphysics.com

     This software is provided 'as-is', without any express or implied
     warranty.  In no event will the authors be held liable for any damages
     arising from the use of this software.
     Permission is granted to anyone to use this software for any purpose,
     including commercial applications, and to alter it and redistribute it
     freely, subject to the following restrictions:
     1. The origin of this software must not be misrepresented; you must not
     claim that you wrote the original software. If you use this software
     in a product, an acknowledgment in the product documentation would be
     appreciated but is not required.
     2. Altered source versions must be plainly marked as such, and must not be
     misrepresented as being the original software.
     3. This notice may not be removed or altered from any source distribution.
    */
    var Ni = function(a, b) {
            this.x = a;
            this.y = b
        },
        Oi = [],
        Y = function(a, b) {
            if (0 < Oi.length) {
                var c = Oi.pop();
                c.set(a, b);
                return c
            }
            return new Ni(a, b)
        },
        Z = function(a) {
            null != a && Oi.push(a)
        },
        Pi = function(a) {
            a.x = 0;
            a.y = 0
        };
    Ni.prototype.set = function(a, b) {
        this.x = a;
        this.y = b
    };
    Ni.prototype.Ba = function(a) {
        this.x = a.x;
        this.y = a.y
    };
    var Qi = function(a) {
            return Y(-a.x, -a.y)
        },
        Ri = function(a) {
            a.x = -a.x;
            a.y = -a.y
        },
        Si = function(a) {
            return Y(a.x, a.y)
        };
    Ni.prototype.add = function(a) {
        this.x += a.x;
        this.y += a.y
    };
    var Ti = function(a, b) {
        a.x *= b;
        a.y *= b
    };
    Ni.prototype.abs = function() {
        this.x = Math.abs(this.x);
        this.y = Math.abs(this.y)
    };
    Ni.prototype.length = function() {
        return Math.sqrt(Ui(this))
    };
    var Ui = function(a) {
            return a.x * a.x + a.y * a.y
        },
        Vi = function(a) {
            var b = a.length();
            b < Number.MIN_VALUE || (b = 1 / b, a.x *= b, a.y *= b)
        };
    var Wi = function() {
            this.$ = Y(0, 0);
            this.ha = Y(0, 0);
            this.$.set(1, 0);
            this.ha.set(0, 1)
        },
        Xi = [],
        Yi = function() {
            if (0 < Xi.length) {
                var a = Xi.pop();
                a.$.set(0, 0);
                a.ha.set(0, 0);
                return a
            }
            return new Wi
        };
    Wi.prototype.set = function(a) {
        var b = Math.cos(a);
        a = Math.sin(a);
        this.$.set(b, a);
        this.ha.set(-a, b)
    };
    Wi.prototype.abs = function() {
        this.$.abs();
        this.ha.abs()
    };
    var Zi = function(a, b) {
            return a.x * b.x + a.y * b.y
        },
        $i = function(a, b) {
            return a.x * b.y - a.y * b.x
        },
        aj = function(a) {
            return Y(1 * a.y, -1 * a.x)
        },
        bj = function(a, b) {
            return Y(a.$.x * b.x + a.ha.x * b.y, a.$.y * b.x + a.ha.y * b.y)
        },
        cj = function(a, b) {
            return Y(Zi(b, a.$), Zi(b, a.ha))
        },
        dj = function(a, b) {
            var c = bj(a.V, b);
            c.x += a.position.x;
            c.y += a.position.y;
            return c
        },
        ej = function(a, b) {
            return Y(a.x - b.x, a.y - b.y)
        },
        fj = function(a, b, c) {
            return a < b ? b : a > c ? c : a
        };
    var gj = function() {
        this.Fb = Y(0, 0);
        this.Cb = Y(0, 0);
        this.c = Y(0, 0);
        this.yb = this.a = this.qc = null
    };
    gj.prototype.set = function(a) {
        this.Fb.Ba(a.Fb);
        this.Cb.Ba(a.Cb);
        this.c.Ba(a.c);
        this.qc = a.qc;
        this.a = a.a;
        this.yb = a.yb
    };
    var hj = function(a, b, c) {
        void 0 === c && (c = 0);
        b.position.x = (1 - c) * a.Cb.x + c * a.c.x;
        b.position.y = (1 - c) * a.Cb.y + c * a.c.y;
        b.V.set((1 - c) * a.qc + c * a.a);
        c = b.V;
        b.position.x -= c.$.x * a.Fb.x + c.ha.x * a.Fb.y;
        b.position.y -= c.$.y * a.Fb.x + c.ha.y * a.Fb.y
    };
    gj.prototype.advance = function(a) {
        void 0 === a && (a = 0);
        if (this.yb < a && 1 - this.yb > Number.MIN_VALUE) {
            var b = (a - this.yb) / (1 - this.yb);
            this.Cb.x = (1 - b) * this.Cb.x + b * this.c.x;
            this.Cb.y = (1 - b) * this.Cb.y + b * this.c.y;
            this.qc = (1 - b) * this.qc + b * this.a;
            this.yb = a
        }
    };
    var ij = function() {
        this.position = Y(0, 0);
        this.V = Yi()
    };
    ij.prototype.set = function(a) {
        this.position.Ba(a.position);
        var b = this.V;
        a = a.V;
        b.$.Ba(a.$);
        b.ha.Ba(a.ha)
    };
    var jj = function(a) {
            if (!a) throw "Assertion Failed";
        },
        kj = .5 * Math.PI,
        lj = kj * kj,
        mj = 2 / 180 * Math.PI,
        nj = Number.MIN_VALUE * Number.MIN_VALUE;
    var oj = function() {
        this.position = Y(0, 0);
        this.W = Y(0, 0);
        this.v = this.U = this.H = this.angle = 0;
        this.R = this.o = !0;
        this.S = this.T = !1;
        this.type = 0;
        this.active = !0;
        this.j = 1
    };
    var pj = function(a) {
            this.tb = a;
            this.wb = this.next = null
        },
        qj = [];
    pj.prototype.Fc = function(a) {
        this.wb = a
    };
    pj.prototype.Ma = function() {
        return this.next
    };
    var sj = function() {
        this.o = [];
        for (var a = 0; a <= rj; a++) this.o[a] = null;
        this.v = [];
        for (a = 0; a <= rj; a++) this.v[a] = null;
        this.j = {}
    };
    sj.prototype.Oa = function(a) {
        return this.o[a]
    };
    var uj = function(a, b) {
            var c = b.v;
            if (null == a.j[c]) {
                a.j[c] = [];
                for (var d = 0; d <= rj; d++) a.j[c][d] = null;
                tj(a, b, c, rj)
            }
        },
        yj = function(a, b, c, d) {
            c ? tj(a, b, b.v, vj) : wj(a, b.v, vj);
            d ? tj(a, b, b.v, xj) : wj(a, b.v, xj)
        },
        zj = function(a, b) {
            var c = b.v;
            if (null != a.j[c]) {
                for (var d = 0; d <= rj; d++) wj(a, c, d);
                delete a.j[c]
            }
        },
        wj = function(a, b, c) {
            var d = a.j[b];
            if (null != d && (b = d[c], null != b)) {
                d[c] = null;
                d = b.wb;
                var e = b.Ma();
                null == d ? a.o[c] = e : d.next = e;
                null == e ? a.v[c] = d : e.Fc(d);
                qj.push(b)
            }
        },
        tj = function(a, b, c, d) {
            c = a.j[c];
            if (null == c[d]) {
                if (0 < qj.length) {
                    var e =
                        qj.pop();
                    e.next = null;
                    e.wb = null;
                    e.tb = b;
                    b = e
                } else b = new pj(b);
                c[d] = b;
                b = a.v[d];
                null != b ? (b.next = c[d], c[d].Fc(b)) : a.o[d] = c[d];
                a.v[d] = c[d]
            }
        },
        vj = 0,
        xj = 1,
        rj = 2;
    var Aj = function(a) {
        this.body = a;
        this.wb = this.next = null
    };
    Aj.prototype.Fc = function(a) {
        this.wb = a
    };
    Aj.prototype.Ma = function() {
        return this.next
    };
    var Cj = function() {
        this.o = [];
        for (var a = 0; a <= Bj; a++) this.o[a] = null;
        this.v = [];
        for (a = 0; a <= Bj; a++) this.v[a] = null;
        this.j = {}
    };
    Cj.prototype.Oa = function(a) {
        return this.o[a]
    };
    var Kj = function(a, b) {
            var c = b.Ka(),
                d = b.va,
                e = b.xc(),
                f = b.Cc;
            2 == c ? Dj(a, b, d, Ej) : Fj(a, d, Ej);
            0 != c ? Dj(a, b, d, Gj) : Fj(a, d, Gj);
            0 != c && f && e ? Dj(a, b, d, Hj) : Fj(a, d, Hj);
            e ? Dj(a, b, d, Ij) : Fj(a, d, Ij);
            f ? Dj(a, b, d, Jj) : Fj(a, d, Jj)
        },
        Fj = function(a, b, c) {
            var d = a.j[b];
            null != d && (b = d[c], null != b && (d[c] = null, d = b.wb, b = b.Ma(), null == d ? a.o[c] = b : d.next = b, null == b ? a.v[c] = d : b.Fc(d)))
        },
        Dj = function(a, b, c, d) {
            var e = a.j[c];
            if (null == e) {
                e = [];
                for (var f = 0; f <= Bj; f++) e[f] = null;
                a.j[c] = e
            }
            null == e[d] && (e[d] = new Aj(b), b = a.v[d], null != b ? b.next = e[d] : a.o[d] = e[d],
                e[d].Fc(b), a.v[d] = e[d])
        },
        Ej = 0,
        Gj = 1,
        Jj = 2,
        Hj = 3,
        Ij = 4,
        Bj = 5;
    var Lj = function() {};
    Lj.prototype.Oa = function() {
        return null
    };
    var Mj = function() {
            this.j = Y(0, 0);
            this.o = Y(0, 0)
        },
        Nj = [],
        Oj = function() {
            if (0 < Nj.length) {
                var a = Nj.pop();
                a.j.set(0, 0);
                a.o.set(0, 0);
                return a
            }
            return new Mj
        };
    Mj.prototype.contains = function(a) {
        var b;
        return b = (b = (b = (b = this.j.x <= a.j.x) && this.j.y <= a.j.y) && a.o.x <= this.o.x) && a.o.y <= this.o.y
    };
    Mj.prototype.vd = function(a) {
        return 0 < a.j.x - this.o.x || 0 < a.j.y - this.o.y || 0 < this.j.x - a.o.x ? !1 : 0 >= this.j.y - a.o.y
    };
    var Pj = function(a, b, c) {
        a.j.x = Math.min(b.j.x, c.j.x);
        a.j.y = Math.min(b.j.y, c.j.y);
        a.o.x = Math.max(b.o.x, c.o.x);
        a.o.y = Math.max(b.o.y, c.o.y)
    };
    var Qj = function() {
            this.o = 0;
            this.j = Y(0, 0);
            this.I = 0
        },
        Rj = [];
    Qj.prototype.Ba = function(a, b, c) {
        this.o = a;
        this.j.Ba(b);
        this.I = c
    };
    Qj.prototype.set = function(a, b, c, d) {
        this.o = a;
        this.j.set(b, c);
        this.I = d
    };
    var Sj = function() {
        this.o = 1;
        this.j = 65535;
        this.v = 0
    };
    var Uj = function(a, b) {
        this.T = "Fixture" + Tj++;
        var c = b.filter,
            d = new Sj;
        d.o = c.o;
        d.j = c.j;
        d.v = c.v;
        this.H = d;
        this.v = Oj();
        this.U = Oj();
        this.j = a;
        this.Qa = b.j.Td();
        this.S = b.v;
        this.W = b.W;
        this.va = b.va;
        this.R = b.o
    };
    Uj.prototype.destroy = function() {
        var a = this.v;
        null != a && Nj.push(a)
    };
    var Xj = function(a, b, c, d) {
            if (a.o) {
                a.Qa.$c(a.v, c);
                a.Qa.$c(a.U, d);
                Pj(a.v, a.v, a.U);
                c = ej(d.position, c.position);
                d = a.o;
                var e = b.R;
                a = a.v;
                jj(null === d.Hb);
                if (d.Ia.contains(a)) e = !1;
                else {
                    Vj(e, d);
                    var f = .1 + 2 * Math.abs(c.x),
                        g = .1 + 2 * Math.abs(c.y);
                    d.Ia.j.x = a.j.x - f;
                    d.Ia.j.y = a.j.y - g;
                    d.Ia.o.x = a.o.x + f;
                    d.Ia.o.y = a.o.y + g;
                    Wj(e, d);
                    e = !0
                }
                e && b.o.push(d);
                Z(c)
            }
        },
        Tj = 0;
    var Yj = function() {
        this.filter = new Sj;
        this.filter.o = 1;
        this.filter.j = 65535;
        this.filter.v = 0;
        this.j = null;
        this.W = .2;
        this.v = this.va = 0;
        this.o = !1
    };
    var Zj = function(a) {
        this.Jb = a;
        this.wb = this.next = null
    };
    Zj.prototype.Fc = function(a) {
        this.wb = a
    };
    Zj.prototype.Ma = function() {
        return this.next
    };
    var ak = function() {
        this.v = this.o = null;
        this.j = {}
    };
    ak.prototype.Oa = function() {
        return this.o
    };
    var bk = function(a, b) {
            var c = b.T;
            if (null == a.j[c]) {
                var d = new Zj(b),
                    e = a.v;
                null != e ? e.next = d : a.o = d;
                d.Fc(e);
                a.v = d;
                a.j[c] = d
            }
        },
        ck = function(a, b) {
            var c = b.T,
                d = a.j[c];
            if (null != d) {
                var e = d.wb;
                d = d.Ma();
                null == e ? a.o = d : e.next = d;
                null == d ? a.v = e : d.Fc(e);
                delete a.j[c]
            }
        };
    var ek = function(a, b) {
            this.va = "Body" + dk++;
            this.ra = new ij;
            this.ra.position.Ba(a.position);
            this.ra.V.set(a.angle);
            this.ka = new gj;
            Pi(this.ka.Fb);
            this.ka.yb = 1;
            this.ka.qc = this.ka.a = a.angle;
            this.ka.c.x = this.ra.V.$.x * this.ka.Fb.x + this.ra.V.ha.x * this.ka.Fb.y;
            this.ka.c.y = this.ra.V.$.y * this.ka.Fb.x + this.ra.V.ha.y * this.ka.Fb.y;
            this.ka.c.x += this.ra.position.x;
            this.ka.c.y += this.ra.position.y;
            this.ka.Cb.Ba(this.ka.c);
            this.ma = Si(a.W);
            this.W = Y(0, 0);
            this.R = a.S;
            this.Ja = a.T;
            this.wa = a.o;
            this.U = a.R;
            this.Cc = a.active;
            this.o =
                b;
            this.Qb = null;
            this.ub = new sj;
            this.nb = new Lj;
            this.ya = a.H;
            this.Na = a.U;
            this.Da = a.v;
            this.T = this.Sa = 0;
            this.j = a.type;
            this.Kb = 2 == this.j ? 1 : 0;
            this.La = 2 == this.j ? 1 : 0;
            this.Za = this.v = 0;
            this.rb = a.j;
            this.H = new ak;
            this.S = []
        },
        hk = function(a, b) {
            jj(!a.o.o);
            var c = new Uj(a, b);
            if (a.Cc) {
                var d = a.o.j.j;
                c.Qa.$c(c.v, a.ra);
                var e = c.v,
                    f = d.R,
                    g = fk(c);
                g.Ia.j.x = e.j.x - .1;
                g.Ia.j.y = e.j.y - .1;
                g.Ia.o.x = e.o.x + .1;
                g.Ia.o.y = e.o.y + .1;
                Wj(f, g);
                d.o.push(g);
                c.o = g
            }
            bk(a.H, c);
            c.j = a;
            0 < c.S && gk(a);
            a.o.S = !0;
            return c
        };
    ek.prototype.destroy = function() {
        Z(this.ma);
        Z(this.W)
    };
    var jk = function(a, b, c) {
            jj(!a.o.o);
            a.ra.V.set(c);
            a.ra.position.Ba(b);
            b = a.ra.V;
            var d = a.ka.Fb;
            a.ka.c.x = b.$.x * d.x + b.ha.x * d.y;
            a.ka.c.y = b.$.y * d.x + b.ha.y * d.y;
            a.ka.c.x += a.ra.position.x;
            a.ka.c.y += a.ra.position.y;
            a.ka.Cb.Ba(a.ka.c);
            a.ka.qc = a.ka.a = c;
            c = a.o.j.j;
            for (b = a.H.Oa(); b; b = b.Ma()) Xj(b.Jb, c, a.ra, a.ra);
            ik(a.o.j)
        },
        kk = function(a, b) {
            0 != a.j && a.ma.Ba(b)
        };
    ek.prototype.split = function(a) {
        var b = Si(this.ma),
            c = this.ya,
            d = this.ka.c,
            e = this.o,
            f = new oj;
        f.type = this.Ka();
        f.o = this.wa;
        f.angle = this.ka.a;
        f.v = this.Da;
        f.H = this.ya;
        f.T = this.Ja;
        f.S = this.R;
        f.active = this.Cc;
        f.R = this.U;
        f.U = this.Na;
        f.W.Ba(this.ma);
        f.position.Ba(this.ra.position);
        e = lk(e, f);
        for (f = this.H.Oa(); f; f = f.Ma()) {
            var g = f.Jb;
            a(g) && (ck(this.H, g), bk(e.H, g))
        }
        gk(this);
        gk(e);
        a = e.ka.c;
        g = ej(this.ka.c, d);
        f = Y(-c * g.y, c * g.x);
        Z(g);
        g = Y(b.x + f.x, b.y + f.y);
        Z(f);
        kk(this, g);
        Z(g);
        a = ej(a, d);
        d = Y(-c * a.y, c * a.x);
        Z(a);
        a = Y(b.x +
            d.x, b.y + d.y);
        Z(d);
        kk(e, a);
        Z(a);
        Z(b);
        0 != this.j && (this.ya = c);
        0 != e.j && (e.ya = c);
        mk(this);
        mk(e);
        return e
    };
    var gk = function(a) {
        a.Kb = 0;
        a.La = 0;
        a.v = 0;
        a.Za = 0;
        Pi(a.ka.Fb);
        if (0 != a.j && 1 != a.j) {
            for (var b = Y(0, 0), c = a.H.Oa(); c; c = c.Ma()) {
                var d = c.Jb;
                if (0 != d.S) {
                    var e = void 0;
                    0 < Rj.length ? (e = Rj.pop(), e.o = 0, Pi(e.j), e.I = 0) : e = new Qj;
                    d.Qa.Vd(e, d.S);
                    a.Kb += e.o;
                    b.x += e.j.x * e.o;
                    b.y += e.j.y * e.o;
                    a.v += e.I
                }
            }
            0 < a.Kb ? (a.La = 1 / a.Kb, b.x *= a.La, b.y *= a.La) : (a.Kb = 1, a.La = 1);
            0 < a.v && !a.Ja ? (a.v -= a.Kb * (b.x * b.x + b.y * b.y), a.v *= a.rb, jj(0 < a.v), a.Za = 1 / a.v) : (a.v = 0, a.Za = 0);
            c = Si(a.ka.c);
            a.ka.Fb.Ba(b);
            a.ka.Cb.Ba(dj(a.ra, a.ka.Fb));
            a.ka.c.Ba(a.ka.Cb);
            a.ma.x += a.ya *
                -(a.ka.c.y - c.y);
            a.ma.y += a.ya * +(a.ka.c.x - c.x);
            Z(b);
            Z(c)
        }
    };
    ek.prototype.Ka = function() {
        return this.j
    };
    var nk = function(a, b) {
        if (a.U != b) {
            a.U = b;
            a.T = 0;
            b || (Pi(a.ma), a.ya = 0, Pi(a.W), a.Sa = 0);
            for (var c = 0; c < a.S.length; c++) Kj(a.S[c], a)
        }
    };
    ek.prototype.xc = function() {
        return this.U
    };
    var ok = function(a) {
            var b;
            if (0 != a.Cc) {
                a.Cc = !1;
                var c = a.o.j.j;
                for (b = a.H.Oa(); b; b = b.Ma()) {
                    var d = b.Jb;
                    if (null != d.o) {
                        var e = c,
                            f = d.o;
                        Sa(e.o, f);
                        Vj(e.R, f);
                        f.destroy();
                        d.o = null
                    }
                }
                for (c = a.ub.Oa(rj); c; c = c.Ma()) a.o.j.destroy(c.tb);
                for (c = 0; c < a.S.length; c++) Kj(a.S[c], a)
            }
        },
        mk = function(a) {
            pk.V.set(a.ka.qc);
            var b = pk.V,
                c = a.ka.Fb;
            pk.position.x = a.ka.Cb.x - (b.$.x * c.x + b.ha.x * c.y);
            pk.position.y = a.ka.Cb.y - (b.$.y * c.x + b.ha.y * c.y);
            b = a.o.j.j;
            for (c = a.H.Oa(); c; c = c.Ma()) Xj(c.Jb, b, pk, a.ra)
        },
        qk = function(a) {
            a.ra.V.set(a.ka.a);
            var b = a.ra.V,
                c = a.ka.Fb;
            a.ra.position.x = a.ka.c.x - (b.$.x * c.x + b.ha.x * c.y);
            a.ra.position.y = a.ka.c.y - (b.$.y * c.x + b.ha.y * c.y)
        },
        rk = function(a, b) {
            if (2 != a.j && 2 != b.j) return !1;
            for (var c = a.Qb; c; c = c.next)
                if (c.tc == b && 0 == c.Ic.df) return !1;
            return !0
        };
    ek.prototype.advance = function(a) {
        this.ka.advance(a);
        this.ka.c.Ba(this.ka.Cb);
        this.ka.a = this.ka.qc;
        qk(this)
    };
    var dk = 0,
        pk = new ij;
    var sk = function(a, b, c) {
        this.v = U(a, 1);
        this.Tc = U(a, 2);
        this.va = b;
        this.Rd = c;
        this.$a = this.j = null;
        this.Ha = {
            x: +U(a, 3),
            y: +U(a, 4)
        };
        this.H = 0;
        this.mc = !1;
        this.Wc = null;
        this.Gc = !1;
        this.Na = null;
        this.kb = 1
    };
    n = sk.prototype;
    n.Ka = function() {
        return this.Tc
    };
    n.$d = function() {
        return !1
    };
    n.zc = function() {
        var a = this.j.ra.position;
        this.Ha.x = a.x;
        this.Ha.y = a.y
    };
    n.fe = function(a) {
        if (U(a, 6)) {
            var b = this.j,
                c = Y(+U(a, 2), +U(a, 3));
            jk(b, c, b.ka.a);
            kk(this.j, Y(+U(a, 4), +U(a, 5)))
        } else this.Wc = a, this.Na = {
            x: +U(a, 2),
            y: +U(a, 3),
            Nd: +U(a, 4),
            Od: +U(a, 5),
            t: (new Date).getTime()
        }, this.Gc = !1
    };
    n.he = function() {
        var a = tk(this),
            b = this.j.ma;
        b.x += a.x;
        b.y += a.y;
        kk(this.j, b);
        b.x && (this.H = Math.PI + Math.atan2(-b.x, b.y))
    };
    var tk = function(a) {
        var b = {
            x: 0,
            y: 0
        };
        if (a.Wc) {
            var c = a.Na,
                d = ((new Date).getTime() - c.t) / 1E3;
            if (d < uk(a, "sync_dt_threshold")) {
                var e = a.j.ra.position,
                    f = c.x + c.Nd * d,
                    g = c.y + c.Od * d,
                    h = uk(a, "sync_slip_time"),
                    k = Math.sqrt((f - e.x) * (f - e.x) + (g - e.y) * (g - e.y));
                c = Math.sqrt(c.Nd * c.Nd + c.Od * c.Od) * (h + d) + uk(a, "sync_epsilon");
                !a.Gc && k > c ? (d = a.j, e = Y(f + (e.x - f) * c / k, g + (e.y - g) * c / k), jk(d, e, d.ka.a)) : (d = uk(a, "sync_coefficient"), b.x = (f - e.x) * k / c * d, b.y = (g - e.y) * k / c * d)
            }
            a.Gc = !0
        }
        return b
    };
    n = sk.prototype;
    n.Nc = function() {
        return Di.get(this.Tc)
    };
    n.Gd = function() {
        return !0
    };
    n.Pc = function() {};
    n.le = function(a) {
        var b = this.j.ra.position,
            c = this.j.ma,
            d = new mh;
        W(d, 1, this.v);
        W(d, 2, b.x);
        W(d, 3, b.y);
        W(d, 4, c.x);
        W(d, 5, c.y);
        W(d, 6, !1);
        b = new Lg;
        W(b, 1, 11);
        W(b, 2, this.v);
        a ? (W(d, 6, !0), W(b, 3, !0), Bg(b, 14, d), this.va.j.sendMessage(b)) : (Bg(b, 14, d), this.va.v(b))
    };
    n.jd = function() {
        this.mc = !0
    };
    n.Ce = function() {
        return this.mc
    };
    n.dispose = function(a) {
        var b = this.j;
        b && vk(a.T, b)
    };
    var uk = function(a, b) {
        return a.Rd.get(b)
    };
    var wk = function() {
        this.Va = Y(0, 0);
        this.Ab = Y(0, 0);
        this.Ra = Y(0, 0);
        this.Ua = this.Ta = this.a = 0
    };
    wk.prototype.set = function(a) {
        this.Va.Ba(a.Va);
        this.Ab.Ba(a.Ab);
        this.Ra.Ba(a.Ra);
        this.a = a.a;
        this.Ta = a.Ta;
        this.Ua = a.Ua
    };
    var xk = function() {
            this.o = new wk;
            this.v = new wk;
            this.R = new wk;
            this.H = [this.o, this.v, this.R]
        },
        yk = [],
        zk = function(a) {
            if (1 == a.j) return 0;
            if (2 == a.j) {
                var b = ej(a.o.Ra, a.v.Ra);
                a = b.length();
                Z(b);
                return a
            }
            if (3 == a.j) {
                b = ej(a.v.Ra, a.o.Ra);
                var c = ej(a.R.Ra, a.o.Ra);
                a = $i(b, c);
                Z(b);
                Z(c);
                return a
            }
            jj(!1);
            return 0
        };
    var Ck = function(a, b, c) {
        if (0 < yk.length) {
            var d = yk.pop();
            for (var e = 0; e < d.H.length; e++) {
                var f = d.H[e];
                null != f.Va && f.Va.set(0, 0);
                null != f.Ab && f.Ab.set(0, 0);
                null != f.Ra && f.Ra.set(0, 0);
                f.Ta = 0;
                f.Ua = 0;
                f.a = 0
            }
        } else d = new xk;
        e = d;
        f = c.j;
        var g = c.v,
            h = c.o,
            k = c.H;
        jj(0 <= b.count && 3 >= b.count);
        e.j = b.count;
        for (var l = e.H, m = 0; m < e.j; m++) {
            var q = l[m];
            q.Ta = b.Ta[m];
            q.Ua = b.Ua[m];
            var w = Ak(f, q.Ta);
            var r = Ak(h, q.Ua);
            Z(q.Va);
            Z(q.Ab);
            Z(q.Ra);
            q.Va = dj(g, w);
            q.Ab = dj(k, r);
            q.Ra = ej(q.Ab, q.Va);
            q.a = 0
        }
        1 < e.j && (w = b.j, r = zk(e), r < .5 * w || 2 * w < r || r < Number.MIN_VALUE) &&
            (e.j = 0);
        0 == e.j && (q = l[0], q.Ta = 0, q.Ua = 0, w = Ak(f, 0), r = Ak(h, 0), Z(q.Va), Z(q.Ab), Z(q.Ra), q.Va = dj(g, w), q.Ab = dj(k, r), q.Ra = ej(q.Ab, q.Va), e.j = 1);
        (1 > d.j || 3 < d.j) && jj(!1);
        for (e = 0; 20 > e;) {
            f = [];
            for (g = 0; g < d.j; g++) f[g] = {}, f[g].Ta = d.H[g].Ta, f[g].Ua = d.H[g].Ua;
            if (2 == d.j) g = d, k = g.o.Ra, l = g.v.Ra, h = ej(l, k), k = -(k.x * h.x + k.y * h.y), 0 >= k ? (Z(h), g.o.a = 1, g.j = 1) : (l = l.x * h.x + l.y * h.y, Z(h), 0 >= l ? (g.v.a = 1, g.j = 1, g.o.set(g.v)) : (h = 1 / (l + k), g.o.a = l * h, g.v.a = k * h, g.j = 2));
            else if (3 == d.j) {
                g = d;
                w = g.o.Ra;
                r = g.v.Ra;
                q = g.R.Ra;
                var y = ej(r, w);
                h = Zi(r, y);
                k = -Zi(w,
                    y);
                var t = ej(q, w),
                    u = Zi(w, t);
                l = Zi(q, t);
                m = $i(y, t);
                Z(y);
                Z(t);
                y = -u;
                u = ej(q, r);
                var B = Zi(r, u);
                t = Zi(q, u);
                Z(u);
                u = -B;
                B = m * $i(r, q);
                q = m * $i(q, w);
                w = m * $i(w, r);
                0 >= k && 0 >= y ? (g.o.a = 1, g.j = 1) : 0 < h && 0 < k && 0 >= w ? (l = 1 / (h + k), g.o.a = h * l, g.v.a = k * l, g.j = 2) : 0 < l && 0 < y && 0 >= q ? (h = 1 / (l + y), g.o.a = l * h, g.R.a = y * h, g.j = 2, g.v.set(g.R)) : 0 >= h && 0 >= u ? (g.v.a = 1, g.j = 1, g.o.set(g.v)) : 0 >= l && 0 >= t ? (g.R.a = 1, g.j = 1, g.o.set(g.R)) : 0 < t && 0 < u && 0 >= B ? (h = 1 / (t + u), g.v.a = t * h, g.R.a = u * h, g.j = 2, g.o.set(g.R)) : (h = 1 / (B + q + w), g.o.a = B * h, g.v.a = q * h, g.R.a = w * h, g.j = 3)
            }
            if (3 == d.j) break;
            h =
                d;
            1 == h.j ? g = Qi(h.o.Ra) : 2 == h.j ? (g = ej(h.v.Ra, h.o.Ra), h = Qi(h.o.Ra), k = $i(g, h), Z(h), h = 0 < k ? Y(-1 * g.y, 1 * g.x) : aj(g), Z(g), g = h) : (jj(!1), g = Y(0, 0));
            if (Ui(g) < nj) {
                Z(g);
                break
            }
            Z(d.H[d.j].Va);
            Z(d.H[d.j].Ab);
            Z(d.H[d.j].Ra);
            h = Qi(g);
            k = cj(c.v.V, h);
            Z(h);
            d.H[d.j].Ta = Bk(c.j, k);
            Z(k);
            d.H[d.j].Va = dj(c.v, Ak(c.j, d.H[d.j].Ta));
            h = cj(c.H.V, g);
            Z(g);
            d.H[d.j].Ua = Bk(c.o, h);
            Z(h);
            d.H[d.j].Ab = dj(c.H, Ak(c.o, d.H[d.j].Ua));
            d.H[d.j].Ra = ej(d.H[d.j].Ab, d.H[d.j].Va);
            e++;
            h = !1;
            for (g = 0; g < f.length; g++)
                if (d.H[d.j].Ta == f[g].Ta && d.H[d.j].Ua == f[g].Ua) {
                    h = !0;
                    break
                } if (h) break;
            d.j++
        }
        e = d;
        f = a.j;
        g = a.o;
        1 == e.j ? (f.Ba(e.o.Va), g.Ba(e.o.Ab)) : 2 == e.j ? (f.x = e.o.a * e.o.Va.x + e.v.a * e.v.Va.x, f.y = e.o.a * e.o.Va.y + e.v.a * e.v.Va.y, g.x = e.o.a * e.o.Ab.x + e.v.a * e.v.Ab.x, g.y = e.o.a * e.o.Ab.y + e.v.a * e.v.Ab.y) : 3 == e.j ? (g.x = f.x = e.o.a * e.o.Va.x + e.v.a * e.v.Va.x + e.R.a * e.R.Va.x, g.y = f.y = e.o.a * e.o.Va.y + e.v.a * e.v.Va.y + e.R.a * e.R.Va.y) : jj(!1);
        e = ej(a.j, a.o);
        a.v = e.length();
        Z(e);
        e = d;
        b.j = zk(e);
        b.count = e.j;
        f = e.H;
        for (g = 0; g < e.j; g++) b.Ta[g] = f[g].Ta, b.Ua[g] = f[g].Ua;
        null != d && yk.push(d);
        c.R && (b = c.j.v, c = c.o.v,
            a.v > b + c && a.v > Number.MIN_VALUE ? (a.v -= b + c, d = ej(a.o, a.j), Vi(d), a.j.x += b * d.x, a.j.y += b * d.y, a.o.x -= c * d.x, a.o.y -= c * d.y, Z(d)) : (c = Y(0, 0), c.x = .5 * (a.j.x + a.o.x), c.y = .5 * (a.j.y + a.o.y), a.j.x = a.o.x = c.x, a.j.y = a.o.y = c.y, a.v = 0, Z(c)))
    };
    var Dk = function() {
        this.R = !1;
        this.H = this.v = this.o = this.j = null
    };
    var Ek = function() {
        this.j = Y(0, 0);
        this.o = Y(0, 0);
        this.v = 0
    };
    var Fk = function() {
        this.v = this.j = 0;
        this.o = []
    };
    Fk.prototype.set = function(a) {
        a.ne(this)
    };
    var Bk = function(a, b) {
            for (var c = 0, d = a.o[0].x * b.x + a.o[0].y * b.y, e = 1; e < a.j; e++) {
                var f = a.o[e].x * b.x + a.o[e].y * b.y;
                f > d && (c = e, d = f)
            }
            return c
        },
        Gk = function(a, b) {
            return a.o[Bk(a, b)]
        },
        Ak = function(a, b) {
            void 0 === b && (b = 0);
            jj(0 <= b && b < a.j);
            return a.o[b]
        };
    var Hk = function() {
        this.Ta = [0, 0, 0];
        this.Ua = [0, 0, 0]
    };
    var Ik = function() {
        this.v = .005
    };
    n = Ik.prototype;
    n.getTypeName = function() {
        return za()
    };
    n.Td = function() {
        return za()
    };
    n.set = function(a) {
        this.v = a.v
    };
    n.$c = function() {
        za()
    };
    n.Vd = function() {
        za()
    };
    n.ne = function() {
        za()
    };
    var Jk = function() {
        this.v = .005;
        this.R = Y(0, 0);
        this.j = [];
        this.o = []
    };
    z(Jk, Ik);
    Jk.prototype.getTypeName = function() {
        return "PolygonShape"
    };
    Jk.prototype.Td = function() {
        var a = new Jk;
        a.set(this);
        return a
    };
    Jk.prototype.set = function(a) {
        Jk.Mb.set.call(this, a);
        if (a instanceof Jk) {
            this.R.Ba(a.R);
            this.H = a.H;
            Kk(this, this.H);
            for (var b = 0; b < this.H; b++) this.j[b].Ba(a.j[b]), this.o[b].Ba(a.o[b])
        }
    };
    var Lk = function(a, b) {
            var c = new Jk;
            c.H = 4;
            Kk(c, 4);
            c.j[0].set(-a, -b);
            c.j[1].set(a, -b);
            c.j[2].set(a, b);
            c.j[3].set(-a, b);
            c.o[0].set(0, -1);
            c.o[1].set(1, 0);
            c.o[2].set(0, 1);
            c.o[3].set(-1, 0);
            Pi(c.R);
            return c
        },
        Mk = function(a, b) {
            var c = new Jk;
            c.H = 2;
            Kk(c, 2);
            c.j[0].Ba(a);
            c.j[1].Ba(b);
            c.R.x = .5 * (a.x + b.x);
            c.R.y = .5 * (a.y + b.y);
            var d = ej(b, a),
                e = aj(d);
            Z(d);
            c.o[0] = e;
            Vi(c.o[0]);
            c.o[1].x = -c.o[0].x;
            c.o[1].y = -c.o[0].y;
            return c
        };
    Jk.prototype.$c = function(a, b) {
        for (var c = b.V, d = this.j[0], e = b.position.x + (c.$.x * d.x + c.ha.x * d.y), f = b.position.y + (c.$.y * d.x + c.ha.y * d.y), g = e, h = f, k = 1; k < this.H; ++k) {
            d = this.j[k];
            var l = b.position.x + (c.$.x * d.x + c.ha.x * d.y);
            d = b.position.y + (c.$.y * d.x + c.ha.y * d.y);
            e = e < l ? e : l;
            f = f < d ? f : d;
            g = g > l ? g : l;
            h = h > d ? h : d
        }
        a.j.x = e - this.v;
        a.j.y = f - this.v;
        a.o.x = g + this.v;
        a.o.y = h + this.v
    };
    Jk.prototype.Vd = function(a, b) {
        if (2 == this.H) a.j.x = .5 * (this.j[0].x + this.j[1].x), a.j.y = .5 * (this.j[0].y + this.j[1].y), a.o = 0, a.I = 0;
        else {
            for (var c = 0, d = 0, e = 0, f = 0, g = 1 / 3, h = 0; h < this.H; ++h) {
                var k = this.j[h],
                    l = h + 1 < this.H ? this.j[h + 1] : this.j[0],
                    m = k.x - 0,
                    q = k.y - 0,
                    w = l.x - 0,
                    r = l.y - 0,
                    y = m * r - q * w,
                    t = .5 * y;
                e += t;
                c += t * g * (0 + k.x + l.x);
                d += t * g * (0 + k.y + l.y);
                k = m;
                f += y * (g * (.25 * (k * k + w * k + w * w) + (0 * k + 0 * w)) + g * (.25 * (q * q + r * q + r * r) + (0 * q + 0 * r)))
            }
            a.set(b * e, 1 / e * c, 1 / e * d, b * f)
        }
    };
    Jk.prototype.ne = function(a) {
        var b = this.v,
            c = this.j;
        a.j = this.H;
        a.v = b;
        a.o = c
    };
    var Kk = function(a, b) {
        for (var c = 0; c < a.j.length; c++) Z(a.j[c]), Z(a.o[c]);
        a.j = [];
        a.o = [];
        for (c = 0; c < b; c++) a.j[c] = Y(0, 0), a.o[c] = Y(0, 0)
    };
    Yi();
    var Nk = function(a, b, c, d) {
        sk.call(this, a, b, c);
        this.T = d;
        a = X(a, Zg, 8);
        this.U = a.ab();
        this.S = U(a, 2);
        this.R = U(a, 3);
        a = new oj;
        a.type = 0;
        a.position.set(this.Ha.x, this.Ha.y);
        this.j = lk(d.T, a);
        this.j.ta = this;
        d = new Yj;
        d.o = !0;
        d.j = Lk(this.S, this.R);
        d.filter.o = 4;
        d.filter.j = 3;
        hk(this.j, d);
        d.o = !1;
        d.filter.j = 1 == this.U ? 2 : 1;
        hk(this.j, d)
    };
    v(Nk, sk);
    Nk.prototype.ab = function() {
        return this.U
    };
    var Pk = function(a, b, c, d, e) {
        e = void 0 === e ? !0 : e;
        sk.call(this, a, b, c);
        this.Ca = d;
        e && (a = new oj, a.type = 2, a.position.set(this.Ha.x, this.Ha.y), this.j = lk(d.T, a), this.j.Ca = this, d = new Yj, d.o = !0, d.v = 1E-4, d.W = .1, d.j = Lk(1, 1), d.filter.o = 16, d.filter.j = 64, this.$a = hk(this.j, d));
        this.Zb = new ih;
        Ok(this, 1);
        W(this.Zb, 2, !0);
        this.Kc(null)
    };
    v(Pk, sk);
    Pk.prototype.ee = function(a) {
        (a = (this.Zb = a) && U(a, 3)) ? this.vc = this.Ca.H.get(a) || null: this.vc = null
    };
    var Ok = function(a, b) {
        U(a.Zb, 1) != b && W(a.Zb, 1, b)
    };
    n = Pk.prototype;
    n.Gd = function() {
        return 4 != U(this.Zb, 1)
    };
    n.Kc = function(a) {
        (this.vc = a) ? this.Zb.Kc(a.v): W(this.Zb, 3, void 0)
    };
    n.Md = function(a) {
        var b = this.j.ra.position,
            c = Si(a.j.ra.position);
        c.x -= b.x;
        c.y -= b.y;
        Ti(c, this.hd());
        kk(this.j, c);
        this.H = a.H
    };
    n.hd = function() {
        return uk(this, "collectible_trail_speed")
    };
    n.Qc = function() {};
    var Qk = function(a, b, c) {
        sk.call(this, a, b, c);
        this.Lc = !1;
        this.S = null
    };
    v(Qk, sk);
    Qk.prototype.$d = function() {
        return !0
    };
    Qk.prototype.he = function() {
        if (this.S) {
            this.Lc = !!U(this.S, 4);
            var a = +U(this.S, 2),
                b = +U(this.S, 3),
                c = tk(this);
            a += c.x;
            b += c.y;
            kk(this.j, Y(a, b));
            a && (this.H = Math.atan2(b, a))
        } else sk.prototype.he.call(this)
    };
    Qk.prototype.le = function(a) {
        sk.prototype.le.call(this, a);
        this.S && (a = new Lg, W(a, 1, 9), W(a, 2, this.v), Bg(a, 12, this.S), this.va.v(a))
    };
    var Tk = function(a, b, c, d) {
        Qk.call(this, a, b, c);
        a = X(a, Xg, 6);
        this.Ja = a.ab();
        this.nb = U(a, 3);
        this.Lb = U(a, 4);
        this.lb = [];
        this.ie = d;
        a = new oj;
        a.type = 2;
        a.position.set(this.Ha.x, this.Ha.y);
        a.angle = 0;
        a.j = 1;
        this.j = lk(d.T, a);
        this.j.$a = this;
        d = new Yj;
        d.j = new Rk(Math.sqrt(3));
        d.v = 1;
        d.W = 1;
        d.filter.o = 1 == this.Ja ? 1 : 2;
        this.$a = hk(this.j, d);
        this.$a.H.j = (1 == this.Ja ? 2 : 1) | (Sk(this, 4) ? 1024 : 1544) | 420;
        d.o = !0;
        d.filter.o = 64;
        hk(this.j, d)
    };
    v(Tk, Qk);
    Tk.prototype.ab = function() {
        return this.Ja
    };
    Tk.prototype.lc = function() {
        return !0
    };
    var Uk = function(a) {
        for (var b = a, c = 0; c < a.lb.length; c++) {
            var d = a.lb[c];
            d.Md(b, c + 1);
            b = d
        }
    };
    var Vk = function() {
        this.o = [];
        this.j = []
    };
    Vk.prototype.contains = function(a) {
        return 0 <= Pa(this.o, a) || 0 <= Pa(this.j, a)
    };
    Vk.prototype.sc = function() {
        for (var a = [], b = this.o.length - 1; 0 <= b; --b) a.push(this.o[b]);
        var c = this.j.length;
        for (b = 0; b < c; ++b) a.push(this.j[b]);
        return a
    };
    var Wk = function() {
            this.v = this.o = this.H = this.j = 0
        },
        Xk = function(a, b) {
            a.j = b;
            a.H = a.j & 255;
            a.o = (a.j & 65280) >> 8 & 255;
            a.v = (a.j & 16711680) >> 16 & 255;
            a.R = (a.j & 4278190080) >> 24 & 255
        };
    Wk.prototype.set = function(a) {
        Xk(this, a.j)
    };
    var Yk = function(a) {
            this.Ia = Oj();
            this.parent = this.uc = this.Hb = null;
            this.Jb = a
        },
        Zk = [],
        fk = function(a) {
            "undefined" == typeof a && (a = null);
            if (0 < Zk.length) {
                var b = Zk.pop();
                b.Jb = a;
                a = b.Ia;
                a.j.set(0, 0);
                a.o.set(0, 0);
                return b
            }
            return new Yk(a)
        };
    Yk.prototype.destroy = function() {
        this.Jb = this.parent = this.uc = this.Hb = null;
        Zk.push(this)
    };
    var $k = function() {
            this.j = null
        },
        Wj = function(a, b) {
            if (null === a.j) a.j = b, a.j.parent = null;
            else {
                var c = b.Ia;
                c = Y((c.j.x + c.o.x) / 2, (c.j.y + c.o.y) / 2);
                for (var d = a.j; null !== d.Hb;) {
                    var e = d.Hb;
                    d = d.uc;
                    d = Math.abs((e.Ia.j.x + e.Ia.o.x) / 2 - c.x) + Math.abs((e.Ia.j.y + e.Ia.o.y) / 2 - c.y) < Math.abs((d.Ia.j.x + d.Ia.o.x) / 2 - c.x) + Math.abs((d.Ia.j.y + d.Ia.o.y) / 2 - c.y) ? e : d
                }
                Z(c);
                c = d;
                e = c.parent;
                d = fk();
                d.parent = e;
                Pj(d.Ia, b.Ia, c.Ia);
                if (e)
                    for (c.parent.Hb == c ? e.Hb = d : e.uc = d, d.Hb = c, d.uc = b, c.parent = d, b.parent = d; e && !e.Ia.contains(d.Ia);) Pj(e.Ia, e.Hb.Ia,
                        e.uc.Ia), d = e, e = e.parent;
                else d.Hb = c, d.uc = b, c.parent = d, b.parent = d, a.j = d
            }
        },
        Vj = function(a, b) {
            if (b == a.j) a.j = null;
            else {
                var c = b.parent,
                    d = c.parent;
                var e = c.Hb == b ? c.uc : c.Hb;
                if (d)
                    for (d.Hb == c ? d.Hb = e : d.uc = e, e.parent = d; d;) {
                        e = d.Ia;
                        Pj(d.Ia, d.Hb.Ia, d.uc.Ia);
                        if (e.contains(d.Ia)) break;
                        d = d.parent
                    } else a.j = e, e.parent = null;
                c.destroy()
            }
        };
    var al = function() {
        this.R = new $k;
        this.o = [];
        this.j = this.S = this.H = this.v = null
    };
    al.prototype.vd = function(a, b) {
        return a.Ia.vd(b.Ia)
    };
    var bl = function(a, b) {
        a.v = null;
        a.H = null;
        for (a.S = b; 0 < a.o.length;) {
            a.j = a.o.pop();
            var c = a.R,
                d = a.T,
                e = a.j.Ia,
                f = a;
            if (null !== c.j) {
                var g = [];
                for (g.push(c.j); 0 < g.length;)
                    if (c = g.pop(), c.Ia.vd(e))
                        if (null === c.Hb) {
                            if (!d.call(f, c.Jb)) break
                        } else g.push(c.Hb), g.push(c.uc)
            }
        }
        a.v = null;
        a.H = null;
        a.S = null;
        a.j = null
    };
    al.prototype.T = function(a) {
        a == this.j.Jb || this.j.Jb == this.v && a == this.H || this.j.Jb == this.H && a == this.v || (this.S(this.j.Jb, a), this.v = this.j.Jb, this.H = a);
        return !0
    };
    var cl = function(a, b) {
        var c = a.H,
            d = b.H;
        return c.v == d.v && 0 != c.v ? 0 < c.v : 0 != (c.j & d.o) && 0 != (c.o & d.j)
    };
    var dl = function() {};
    dl.prototype.te = function() {};
    dl.prototype.Wd = function() {};
    var Rk = function(a) {
        this.v = a;
        this.o = a * a;
        this.j = Y(0, 0);
        this.H = [this.j]
    };
    z(Rk, Ik);
    n = Rk.prototype;
    n.getTypeName = function() {
        return "CircleShape"
    };
    n.Td = function() {
        var a = new Rk(this.v);
        a.set(this);
        return a
    };
    n.set = function(a) {
        Rk.Mb.set.call(this, a);
        a instanceof Rk && this.j.Ba(a.j)
    };
    n.$c = function(a, b) {
        var c = b.V,
            d = b.position.x + (c.$.x * this.j.x + c.ha.x * this.j.y);
        c = b.position.y + (c.$.y * this.j.x + c.ha.y * this.j.y);
        a.j.set(d - this.v, c - this.v);
        a.o.set(d + this.v, c + this.v)
    };
    n.Vd = function(a, b) {
        var c = b * Math.PI * this.o;
        a.Ba(c, this.j, c * (.5 * this.o + (this.j.x * this.j.x + this.j.y * this.j.y)))
    };
    n.ne = function(a) {
        var b = this.v,
            c = this.H;
        a.j = 1;
        a.v = b;
        a.o = c
    };
    var el = function() {
        this.j = Y(0, 0);
        this.id = new Wk
    };
    el.prototype.set = function(a) {
        this.j.Ba(a.j);
        this.id.set(a.id)
    };
    var fl = function() {
        this.Fa = Y(0, 0);
        this.yc = new Wk;
        this.Ec = this.Dc = 0
    };
    fl.prototype.reset = function() {
        Pi(this.Fa);
        this.Ec = this.Dc = 0;
        Xk(this.yc, 0)
    };
    fl.prototype.set = function(a) {
        this.Fa.Ba(a.Fa);
        this.Dc = a.Dc;
        this.Ec = a.Ec;
        this.yc.set(a.yc)
    };
    var gl = function() {
        this.j = this.o = 0;
        this.Ea = [];
        for (var a = 0; 2 > a; a++) this.Ea[a] = new fl;
        this.v = Y(0, 0);
        this.Fa = Y(0, 0)
    };
    gl.prototype.reset = function() {
        for (var a = 0; 2 > a; a++) this.Ea[a].reset();
        Pi(this.v);
        Pi(this.Fa);
        this.o = this.j = 0
    };
    gl.prototype.set = function(a) {
        this.o = a.o;
        for (var b = 0; 2 > b; b++) this.Ea[b].set(a.Ea[b]);
        this.v.Ba(a.v);
        this.Fa.Ba(a.Fa);
        this.j = a.j
    };
    var hl = function(a, b, c, d) {
            var e = 0,
                f = b[0].j,
                g = b[1].j,
                h = c.x * f.x + c.y * f.y - d;
            c = c.x * g.x + c.y * g.y - d;
            0 >= h && a[e++].set(b[0]);
            0 >= c && a[e++].set(b[1]);
            0 > h * c && (c = h / (h - c), d = a[e].j, d.x = f.x + c * (g.x - f.x), d.y = f.y + c * (g.y - f.y), a[e].id = 0 < h ? b[0].id : b[1].id, e++);
            return e
        },
        il = function(a, b, c, d, e) {
            for (var f = b.V.$.x * a.o[c].x + b.V.ha.x * a.o[c].y, g = b.V.$.y * a.o[c].x + b.V.ha.y * a.o[c].y, h = e.V.$.x * f + e.V.$.y * g, k = e.V.ha.x * f + e.V.ha.y * g, l = 0, m = Number.MAX_VALUE, q = 0; q < d.H; q++) {
                var w = d.j[q].x * h + d.j[q].y * k;
                w < m && (m = w, l = q)
            }
            return (e.position.x + (e.V.$.x *
                d.j[l].x + e.V.ha.x * d.j[l].y) - (b.position.x + (b.V.$.x * a.j[c].x + b.V.ha.x * a.j[c].y))) * f + (e.position.y + (e.V.$.y * d.j[l].x + e.V.ha.y * d.j[l].y) - (b.position.y + (b.V.$.y * a.j[c].x + b.V.ha.y * a.j[c].y))) * g
        },
        jl = function(a, b, c, d) {
            var e = d.position.x + (d.V.$.x * c.R.x + d.V.ha.x * c.R.y),
                f = d.position.y + (d.V.$.y * c.R.x + d.V.ha.y * c.R.y);
            e -= b.position.x + (b.V.$.x * a.R.x + b.V.ha.x * a.R.y);
            f -= b.position.y + (b.V.$.y * a.R.x + b.V.ha.y * a.R.y);
            var g = e * b.V.$.x + f * b.V.$.y;
            f = e * b.V.ha.x + f * b.V.ha.y;
            e = 0;
            for (var h = -Number.MAX_VALUE, k = 0; k < a.H; ++k) {
                var l =
                    a.o[k].x * g + a.o[k].y * f;
                l > h && (h = l, e = k)
            }
            g = il(a, b, e, c, d);
            k = e - 1;
            0 > k && (k = a.H - 1);
            f = il(a, b, k, c, d);
            l = e + 1;
            l >= a.H && (l = 0);
            h = il(a, b, l, c, d);
            if (f > g && f > h)
                for (;;)
                    if (e = k - 1, 0 > e && (e = a.H - 1), g = il(a, b, e, c, d), g > f) k = e, f = g;
                    else break;
            else if (h > g)
                for (k = l, f = h;;)
                    if (e = k + 1, e >= a.H && (e = 0), g = il(a, b, e, c, d), g > f) k = e, f = g;
                    else break;
            else k = e, f = g;
            return {
                ue: k,
                Id: f
            }
        },
        kl = [new el, new el],
        ll = [new el, new el],
        ml = [new el, new el],
        nl = Y(0, 0),
        ol = Y(0, 0),
        pl = Y(0, 0),
        ql = Y(0, 0),
        rl = Y(0, 0),
        sl = Y(0, 0),
        tl = Y(0, 0),
        ul = Y(0, 0);
    var yl = function() {
        var a = vl,
            b = wl,
            c = xl,
            d = 0;
        switch (a.j) {
            case 1:
                var e = cj(b.V, a.o),
                    f = Qi(a.o);
                d = cj(c.V, f);
                Z(f);
                var g = Gk(a.v, e);
                Z(e);
                e = Gk(a.H, d);
                Z(d);
                b = dj(b, g);
                c = dj(c, e);
                d = (c.x - b.x) * a.o.x + (c.y - b.y) * a.o.y;
                Z(b);
                Z(c);
                break;
            case 2:
                f = bj(b.V, a.o);
                g = Qi(f);
                d = cj(c.V, g);
                Z(g);
                e = Gk(a.H, d);
                Z(d);
                b = dj(b, a.Fa);
                c = dj(c, e);
                d = (c.x - b.x) * f.x + (c.y - b.y) * f.y;
                Z(f);
                Z(b);
                Z(c);
                break;
            case 4:
                f = bj(c.V, a.o);
                g = Qi(f);
                e = cj(b.V, g);
                Z(g);
                g = Gk(a.v, e);
                Z(e);
                b = dj(b, g);
                c = dj(c, a.Fa);
                d = (b.x - c.x) * f.x + (b.y - c.y) * f.y;
                Z(f);
                Z(b);
                Z(c);
                break;
            default:
                jj(!1)
        }
        return d
    };
    var zl = 0,
        Al = 0,
        Bl = 0,
        Cl = new Hk,
        Dl = new Dk,
        wl = new ij,
        xl = new ij,
        vl = new function() {
            this.Fa = Y(0, 0);
            this.o = Y(0, 0);
            this.H = this.v = null
        },
        El = new Ek;
    var Hl = function(a, b) {
        this.v = "Contact" + Fl++;
        this.j = new gl;
        this.S = new gl;
        this.o = !1;
        var c = a.j,
            d = b.j;
        this.wa = 2 != c.Ka() || c.R || 2 != d.Ka() || d.R;
        this.va = a.R || b.R;
        this.Dd = !1;
        this.Ya = a;
        this.Xa = b;
        this.W = !0;
        this.T = c.ub;
        this.U = d.ub;
        this.ta = d.o.ub;
        Gl(this)
    };
    Hl.prototype.reset = function(a, b) {
        this.j.reset();
        this.S.reset();
        this.o = !1;
        var c = a.j,
            d = b.j;
        this.wa = 2 != c.Ka() || c.R || 2 != d.Ka() || d.R;
        this.va = a.R || b.R;
        this.Dd = !1;
        this.Ya = a;
        this.Xa = b;
        this.W = !0;
        this.T = c.ub;
        this.U = d.ub;
        this.ta = d.o.ub;
        Gl(this)
    };
    var Gl = function(a) {
            uj(a.T, a);
            uj(a.U, a);
            uj(a.ta, a);
            Il(a)
        },
        Il = function(a) {
            var b = !1,
                c = !1;
            !a.va && a.W && (a.o && (b = !0), a.wa && (c = !0));
            yj(a.T, a, b, c);
            yj(a.U, a, b, c);
            yj(a.ta, a, b, c)
        },
        Jl = function(a, b) {
            var c = a.Ya.j;
            return c != b ? c : a.Xa.j
        },
        Kl = function(a, b) {
            var c = a.S;
            a.S = a.j;
            a.j = c;
            a.W = !0;
            var d = !1;
            c = a.o;
            var e = a.Ya.j,
                f = a.Xa.j,
                g = a.Ya.v.vd(a.Xa.v);
            if (a.va) {
                if (g) {
                    d = a.Ya.Qa;
                    e = e.ra;
                    g = a.Xa.Qa;
                    var h = f.ra;
                    f = new Dk;
                    f.j = new Fk;
                    f.j.set(d);
                    f.o = new Fk;
                    f.o.set(g);
                    f.v = e;
                    f.H = h;
                    f.R = !0;
                    e = new Hk;
                    e.count = 0;
                    d = new Ek;
                    Ck(d, e, f);
                    Z(d.j);
                    Z(d.o);
                    d = d.v < 10 * Number.MIN_VALUE
                }
                a.j.o = 0
            } else {
                a.wa = 2 != e.Ka() || e.R || 2 != f.Ka() || f.R;
                if (g)
                    for (a.H(), d = 0 < a.j.o, g = 0; g < a.j.o; g++) {
                        h = a.j.Ea[g];
                        h.Dc = 0;
                        for (var k = h.Ec = 0; k < a.S.o; k++) {
                            var l = a.S.Ea[k];
                            if (l.yc.j == h.yc.j) {
                                h.Dc = l.Dc;
                                h.Ec = l.Ec;
                                break
                            }
                        }
                    } else a.j.o = 0;
                d != c && (nk(e, !0), nk(f, !0))
            }
            a.o = d;
            d != c && Il(a);
            !c && d && b.te(a);
            c && !d && b.Wd(a)
        };
    Hl.prototype.H = function() {};
    var Ll = new function() {
            this.j = new Fk;
            this.o = new Fk;
            this.v = new gj;
            this.H = new gj
        },
        Fl = 0;
    var Ml = function(a, b) {
        Hl.call(this, a, b)
    };
    z(Ml, Hl);
    Ml.prototype.reset = function(a, b) {
        Ml.Mb.reset.call(this, a, b)
    };
    Ml.prototype.H = function() {
        var a = this.j,
            b = this.Ya.Qa,
            c = this.Ya.j.ra,
            d = this.Xa.Qa,
            e = this.Xa.j.ra;
        a.o = 0;
        var f = e.position.x + (e.V.$.x * d.j.x + e.V.ha.x * d.j.y) - (c.position.x + (c.V.$.x * b.j.x + c.V.ha.x * b.j.y));
        c = e.position.y + (e.V.$.y * d.j.x + e.V.ha.y * d.j.y) - (c.position.y + (c.V.$.y * b.j.x + c.V.ha.y * b.j.y));
        e = b.v + d.v;
        f * f + c * c > e * e || (a.j = 1, a.Fa.Ba(b.j), Pi(a.v), a.o = 1, a.Ea[0].Fa.Ba(d.j), Xk(a.Ea[0].yc, 0))
    };
    var Nl = function() {};
    var Ol = function(a, b) {
        Hl.call(this, a, b)
    };
    z(Ol, Hl);
    Ol.prototype.reset = function(a, b) {
        Ol.Mb.reset.call(this, a, b)
    };
    Ol.prototype.H = function() {};
    var Pl = function(a, b) {
        jj(a.Qa instanceof Jk);
        jj(b.Qa instanceof Rk);
        Hl.call(this, a, b)
    };
    z(Pl, Hl);
    Pl.prototype.reset = function(a, b) {
        jj(a.Qa instanceof Jk);
        jj(b.Qa instanceof Rk);
        Pl.Mb.reset.call(this, a, b)
    };
    Pl.prototype.H = function() {
        a: {
            var a = this.j,
                b = this.Ya.Qa,
                c = this.Ya.j.ra,
                d = this.Xa.Qa,
                e = this.Xa.j.ra;a.o = 0;
            var f = e.position.x + (e.V.$.x * d.j.x + e.V.ha.x * d.j.y) - c.position.x,
                g = e.position.y + (e.V.$.y * d.j.x + e.V.ha.y * d.j.y) - c.position.y;e = f * c.V.$.x + g * c.V.$.y;c = f * c.V.ha.x + g * c.V.ha.y;f = 0;g = -Number.MAX_VALUE;
            for (var h = b.v + d.v, k = 0; k < b.H; ++k) {
                var l = b.o[k].x * (e - b.j[k].x) + b.o[k].y * (c - b.j[k].y);
                if (l > h) break a;
                l > g && (g = l, f = k)
            }
            l = f + 1;l >= b.H && (l = 0);k = b.j[f];
            var m = b.j[l];
            if (g < Number.MIN_VALUE) a.o = 1,
            a.j = 2,
            a.v.Ba(b.o[f]),
            a.Fa.x =
            .5 * (k.x + m.x),
            a.Fa.y = .5 * (k.y + m.y);
            else if (0 >= (e - k.x) * (m.x - k.x) + (c - k.y) * (m.y - k.y)) {
                if ((e - k.x) * (e - k.x) + (c - k.y) * (c - k.y) > h * h) break a;
                a.o = 1;
                a.j = 2;
                a.v.x = e - k.x;
                a.v.y = c - k.y;
                Vi(a.v);
                a.Fa.Ba(k)
            } else if (0 >= (e - m.x) * (k.x - m.x) + (c - m.y) * (k.y - m.y)) {
                if ((e - m.x) * (e - m.x) + (c - m.y) * (c - m.y) > h * h) break a;
                a.o = 1;
                a.j = 2;
                a.v.x = e - m.x;
                a.v.y = c - m.y;
                Vi(a.v);
                a.Fa.Ba(m)
            } else {
                l = .5 * (k.x + m.x);
                k = .5 * (k.y + m.y);
                g = (e - l) * b.o[f].x + (c - k) * b.o[f].y;
                if (g > h) break a;
                a.o = 1;
                a.j = 2;
                a.v.x = b.o[f].x;
                a.v.y = b.o[f].y;
                Vi(a.v);
                a.Fa.set(l, k)
            }
            a.Ea[0].Fa.Ba(d.j);Xk(a.Ea[0].yc,
                0)
        }
    };
    var Ql = function(a, b) {
        jj(a.Qa instanceof Jk);
        jj(!1);
        Hl.call(this, a, b)
    };
    z(Ql, Hl);
    Ql.prototype.reset = function(a, b) {
        jj(a.Qa instanceof Jk);
        jj(!1);
        Ql.Mb.reset.call(this, a, b)
    };
    Ql.prototype.H = function() {};
    var Rl = function(a, b) {
        Hl.call(this, a, b)
    };
    z(Rl, Hl);
    Rl.prototype.reset = function(a, b) {
        Rl.Mb.reset.call(this, a, b)
    };
    Rl.prototype.H = function() {
        var a = this.j,
            b = this.Ya.Qa,
            c = this.Ya.j.ra,
            d = this.Xa.Qa,
            e = this.Xa.j.ra;
        a.o = 0;
        var f = b.v + d.v,
            g = jl(b, c, d, e);
        if (!(g.Id > f)) {
            var h = jl(d, e, b, c);
            if (!(h.Id > f)) {
                var k = b,
                    l = d,
                    m = c,
                    q = e,
                    w = 0,
                    r = g.ue;
                a.j = 2;
                h.Id > .98 * g.Id + .001 && (k = d, l = b, m = e, q = c, r = h.ue, a.j = 4, w = 1);
                b = r;
                c = q;
                e = m.V.$.x * k.o[b].x + m.V.ha.x * k.o[b].y;
                g = m.V.$.y * k.o[b].x + m.V.ha.y * k.o[b].y;
                d = c.V.$.x * e + c.V.$.y * g;
                g = c.V.ha.x * e + c.V.ha.y * g;
                e = d;
                d = 0;
                h = Number.MAX_VALUE;
                for (var y = 0; y < l.H; y++) {
                    var t = e * l.o[y].x + g * l.o[y].y;
                    t < h && (h = t, d = y)
                }
                e = d + 1;
                e >= l.H &&
                    (e = 0);
                kl[0].j.x = c.position.x + (c.V.$.x * l.j[d].x + c.V.ha.x * l.j[d].y);
                kl[0].j.y = c.position.y + (c.V.$.y * l.j[d].x + c.V.ha.y * l.j[d].y);
                g = kl[0].id;
                g.H = b;
                g.j = g.j & 4294967040 | g.H & 255;
                g = kl[0].id;
                g.o = d;
                g.j = g.j & 4294902015 | g.o << 8 & 65280;
                d = kl[0].id;
                d.v = 0;
                d.j = d.j & 4278255615 | d.v << 16 & 16711680;
                kl[1].j.x = c.position.x + (c.V.$.x * l.j[e].x + c.V.ha.x * l.j[e].y);
                kl[1].j.y = c.position.y + (c.V.$.y * l.j[e].x + c.V.ha.y * l.j[e].y);
                l = kl[1].id;
                l.H = b;
                l.j = l.j & 4294967040 | l.H & 255;
                b = kl[1].id;
                b.o = e;
                b.j = b.j & 4294902015 | b.o << 8 & 65280;
                b = kl[1].id;
                b.v = 1;
                b.j = b.j & 4278255615 | b.v << 16 & 16711680;
                b = k.j[r];
                k = r + 1 < k.H ? k.j[r + 1] : k.j[0];
                nl.set(k.x - b.x, k.y - b.y);
                Vi(nl);
                ol.x = nl.y;
                ol.y = -nl.x;
                pl.set(.5 * (b.x + k.x), .5 * (b.y + k.y));
                rl.x = m.V.$.x * nl.x + m.V.ha.x * nl.y;
                rl.y = m.V.$.y * nl.x + m.V.ha.y * nl.y;
                sl.x = -rl.x;
                sl.y = -rl.y;
                ql.x = rl.y;
                ql.y = -rl.x;
                tl.x = m.position.x + (m.V.$.x * b.x + m.V.ha.x * b.y);
                tl.y = m.position.y + (m.V.$.y * b.x + m.V.ha.y * b.y);
                ul.x = m.position.x + (m.V.$.x * k.x + m.V.ha.x * k.y);
                ul.y = m.position.y + (m.V.$.y * k.x + m.V.ha.y * k.y);
                if (!(2 > hl(ll, kl, sl, -rl.x * tl.x - rl.y * tl.y + f) || 2 > hl(ml, ll, rl,
                        rl.x * ul.x + rl.y * ul.y + f))) {
                    a.v.Ba(ol);
                    a.Fa.Ba(pl);
                    m = ql.x * tl.x + ql.y * tl.y;
                    for (r = k = 0; 2 > r; ++r) ql.x * ml[r].j.x + ql.y * ml[r].j.y - m <= f && (b = ml[r].j.x - q.position.x, l = ml[r].j.y - q.position.y, a.Ea[k].Fa.x = b * q.V.$.x + l * q.V.$.y, a.Ea[k].Fa.y = b * q.V.ha.x + l * q.V.ha.y, a.Ea[k].yc.set(ml[r].id), b = a.Ea[k].yc, b.R = w, b.j = b.j & 16777215 | b.R << 24 & 4278190080, k++);
                    a.o = k
                }
            }
        }
    };
    var Tl = function() {
            this.j = {};
            this.o = {};
            Sl(this, Ml, "CircleShape", "CircleShape");
            Sl(this, Pl, "PolygonShape", "CircleShape");
            Sl(this, Rl, "PolygonShape", "PolygonShape");
            Sl(this, Ol, "EdgeShape", "CircleShape");
            Sl(this, Ql, "PolygonShape", "EdgeShape")
        },
        Sl = function(a, b, c, d) {
            a.o[c] = a.o[c] || {};
            a.o[c][d] = a.o[c][d] || [];
            a.j[c] = a.j[c] || {};
            a.j[c][d] = new Nl;
            a.j[c][d].ve = b;
            a.j[c][d].primary = !0;
            c != d && (a.j[d] = a.j[d] || {}, a.j[d][c] = new Nl, a.j[d][c].ve = b, a.j[d][c].primary = !1)
        };
    Tl.prototype.create = function(a, b) {
        var c = a.Qa.getTypeName(),
            d = b.Qa.getTypeName(),
            e = this.j[c][d],
            f = e.ve;
        return null != f ? e.primary ? 0 < this.o[c][d].length ? (c = this.o[c][d].pop(), c.reset(a, b), c) : new f(a, b) : 0 < this.o[d][c].length ? (c = this.o[d][c].pop(), c.reset(b, a), c) : new f(b, a) : null
    };
    Tl.prototype.destroy = function(a) {
        var b = a.Ya.Qa.getTypeName(),
            c = a.Xa.Qa.getTypeName();
        this.o[b][c].push(a)
    };
    var Ul = function(a) {
            this.H = a;
            this.o = new dl;
            this.v = new Tl;
            this.j = new al
        },
        ik = function(a) {
            bl(a.j, function(b, c) {
                a: {
                    var d = b.j,
                        e = c.j;
                    if (d != e && rk(e, d) && cl(b, c)) {
                        for (d = e.ub.Oa(rj); d; d = d.Ma())
                            if (e = d.tb.Ya, e == b) {
                                if (e = d.tb.Xa, e == c) break a
                            } else if (e == c && (e = d.tb.Xa, e == b)) break a;
                        a.v.create(b, c)
                    }
                }
            })
        };
    Ul.prototype.destroy = function(a) {
        var b = a.Ya.j,
            c = a.Xa.j;
        a.o && this.o.Wd(a);
        0 < a.j.o && (nk(b, !0), nk(c, !0));
        zj(a.T, a);
        zj(a.U, a);
        zj(a.ta, a);
        this.v.destroy(a)
    };
    new function() {
        this.position = Y(0, 0);
        Y(0, 0);
        Y(0, 0);
        this.id = new Wk
    };
    var Vl = function() {
        this.R = Y(0, 0);
        this.o = Y(0, 0);
        this.v = Y(0, 0);
        this.H = this.j = 0
    };
    Vl.prototype.reset = function() {
        this.R.set(0, 0);
        this.o.set(0, 0);
        this.v.set(0, 0);
        this.H = this.j = 0
    };
    var Wl = function() {
        this.T = Y(0, 0);
        this.S = Y(0, 0);
        this.H = Y(0, 0);
        this.U = Yi();
        this.K = Yi();
        this.v = [];
        for (var a = 0; 2 > a; a++) this.v[a] = new Vl
    };
    var Xl = function() {
        this.j = Y(0, 0);
        this.o = [];
        this.Ea = [];
        for (var a = 0; 2 > a; a++) this.Ea[a] = Y(0, 0)
    };
    Xl.prototype.v = function(a) {
        var b = a.j.ra.V,
            c = a.S,
            d = a.j.ra.position.x + (b.$.x * c.x + b.ha.x * c.y),
            e = a.j.ra.position.y + (b.$.y * c.x + b.ha.y * c.y);
        b = a.o.ra.V;
        c = a.v[0].R;
        var f = a.o.ra.position.x + (b.$.x * c.x + b.ha.x * c.y);
        b = a.o.ra.position.y + (b.$.y * c.x + b.ha.y * c.y);
        c = f - d;
        var g = b - e,
            h = c * c + g * g;
        h > nj ? (h = Math.sqrt(h), this.j.x = c / h, this.j.y = g / h) : (this.j.x = 1, this.j.y = 0);
        this.Ea[0].x = .5 * (d + f);
        this.Ea[0].y = .5 * (e + b);
        this.o[0] = c * this.j.x + g * this.j.y - a.radius
    };
    Xl.prototype.H = function(a) {
        this.j.x = a.j.ra.V.$.x * a.T.x + a.j.ra.V.ha.x * a.T.y;
        this.j.y = a.j.ra.V.$.y * a.T.x + a.j.ra.V.ha.y * a.T.y;
        for (var b = a.j.ra.position.x + (a.j.ra.V.$.x * a.S.x + a.j.ra.V.ha.x * a.S.y), c = a.j.ra.position.y + (a.j.ra.V.$.y * a.S.x + a.j.ra.V.ha.y * a.S.y), d = 0; d < a.R; d++) {
            var e = a.o.ra.position.x + (a.o.ra.V.$.x * a.v[d].R.x + a.o.ra.V.ha.x * a.v[d].R.y),
                f = a.o.ra.position.y + (a.o.ra.V.$.y * a.v[d].R.x + a.o.ra.V.ha.y * a.v[d].R.y);
            this.o[d] = (e - b) * this.j.x + (f - c) * this.j.y - a.radius;
            this.Ea[d].x = e;
            this.Ea[d].y = f
        }
    };
    Xl.prototype.R = function(a) {
        this.j.x = a.o.ra.V.$.x * a.T.x + a.o.ra.V.ha.x * a.T.y;
        this.j.y = a.o.ra.V.$.y * a.T.x + a.o.ra.V.ha.y * a.T.y;
        for (var b = a.o.ra.position.x + (a.o.ra.V.$.x * a.S.x + a.o.ra.V.ha.x * a.S.y), c = a.o.ra.position.y + (a.o.ra.V.$.y * a.S.x + a.o.ra.V.ha.y * a.S.y), d = 0; d < a.R; d++) {
            var e = a.j.ra.position.x + (a.j.ra.V.$.x * a.v[d].R.x + a.j.ra.V.ha.x * a.v[d].R.y),
                f = a.j.ra.position.y + (a.j.ra.V.$.y * a.v[d].R.x + a.j.ra.V.ha.y * a.v[d].R.y);
            this.o[d] = (e - b) * this.j.x + (f - c) * this.j.y - a.radius;
            this.Ea[d].set(e, f)
        }
        this.j.x *= -1;
        this.j.y *=
            -1
    };
    var Yl = function() {
        this.reset(0, 0, 0, 0, !0)
    };
    Yl.prototype.reset = function(a, b, c, d, e) {
        this.dt = a;
        var f = 0;
        0 < a && (f = 1 / a);
        this.j = f;
        this.H = b;
        this.o = c;
        this.v = d;
        this.R = e
    };
    var Zl = function() {
            this.j = []
        },
        am = function(a, b, c) {
            for (a.o = c; a.j.length < a.o;) a.j[a.j.length] = new Wl;
            for (var d = 0; d < c; d++) {
                var e = b[d],
                    f = e.Ya,
                    g = e.Xa,
                    h = f.Qa.v,
                    k = g.Qa.v,
                    l = f.j,
                    m = g.j;
                e = e.j;
                var q = Math.sqrt(f.W * g.W);
                f = f.va;
                g = g.va;
                var w = f > g ? f : g;
                g = l.ma.x;
                f = l.ma.y;
                var r = m.ma.x,
                    y = m.ma.y,
                    t = l.ya,
                    u = m.ya;
                jj(0 < e.o);
                var B = e,
                    L = l.ra,
                    x = h,
                    M = m.ra,
                    C = k,
                    P = $l;
                if (0 != B.o) switch (B.j) {
                    case 1:
                        var A = L.V;
                        var D = B.Fa;
                        var ca = L.position.x + A.$.x * D.x + A.ha.x * D.y;
                        L = L.position.y + A.$.y * D.x + A.ha.y * D.y;
                        A = M.V;
                        D = B.Ea[0].Fa;
                        B = M.position.x + A.$.x * D.x +
                            A.ha.x * D.y;
                        M = M.position.y + A.$.y * D.x + A.ha.y * D.y;
                        A = B - ca;
                        D = M - L;
                        var ta = A * A + D * D;
                        ta > nj ? (ta = Math.sqrt(ta), P.j.x = A / ta, P.j.y = D / ta) : (P.j.x = 1, P.j.y = 0);
                        A = L + x * P.j.y;
                        M -= C * P.j.y;
                        P.Ea[0].x = .5 * (ca + x * P.j.x + (B - C * P.j.x));
                        P.Ea[0].y = .5 * (A + M);
                        break;
                    case 2:
                        A = L.V;
                        D = B.v;
                        ta = A.$.x * D.x + A.ha.x * D.y;
                        var cc = A.$.y * D.x + A.ha.y * D.y;
                        A = L.V;
                        D = B.Fa;
                        var Ve = L.position.x + A.$.x * D.x + A.ha.x * D.y;
                        var We = L.position.y + A.$.y * D.x + A.ha.y * D.y;
                        P.j.x = ta;
                        P.j.y = cc;
                        for (ca = 0; ca < B.o; ca++) {
                            A = M.V;
                            D = B.Ea[ca].Fa;
                            var Yc = M.position.x + A.$.x * D.x + A.ha.x * D.y;
                            A = M.position.y +
                                A.$.y * D.x + A.ha.y * D.y;
                            P.Ea[ca].x = Yc + .5 * (x - (Yc - Ve) * ta - (A - We) * cc - C) * ta;
                            P.Ea[ca].y = A + .5 * (x - (Yc - Ve) * ta - (A - We) * cc - C) * cc
                        }
                        break;
                    case 4:
                        for (A = M.V, D = B.v, ta = A.$.x * D.x + A.ha.x * D.y, cc = A.$.y * D.x + A.ha.y * D.y, A = M.V, D = B.Fa, Ve = M.position.x + A.$.x * D.x + A.ha.x * D.y, We = M.position.y + A.$.y * D.x + A.ha.y * D.y, P.j.x = -ta, P.j.y = -cc, ca = 0; ca < B.o; ca++) A = L.V, D = B.Ea[ca].Fa, Yc = L.position.x + A.$.x * D.x + A.ha.x * D.y, A = L.position.y + A.$.y * D.x + A.ha.y * D.y, P.Ea[ca].x = Yc + .5 * (C - (Yc - Ve) * ta - (A - We) * cc - x) * ta, P.Ea[ca].y = A + .5 * (C - (Yc - Ve) * ta - (A - We) * cc - x) * cc
                }
                C =
                    $l.j.x;
                P = $l.j.y;
                x = a.j[d];
                x.j = l;
                x.o = m;
                x.ta = e;
                x.H.x = C;
                x.H.y = P;
                x.R = e.o;
                x.W = q;
                x.va = w;
                x.T.x = e.v.x;
                x.T.y = e.v.y;
                x.S.x = e.Fa.x;
                x.S.y = e.Fa.y;
                x.radius = h + k;
                x.type = e.j;
                for (h = 0; h < x.R; ++h) q = e.Ea[h], k = x.v[h], k.j = q.Dc, k.H = q.Ec, k.R.Ba(q.Fa), q = k.o.x = $l.Ea[h].x - l.ka.c.x, w = k.o.y = $l.Ea[h].y - l.ka.c.y, M = k.v.x = $l.Ea[h].x - m.ka.c.x, ca = k.v.y = $l.Ea[h].y - m.ka.c.y, A = q * P - w * C, D = M * P - ca * C, A *= A, D *= D, k.U = 1 / (l.La + m.La + l.Za * A + m.Za * D), B = l.Kb * l.La + m.Kb * m.La, B += l.Kb * l.Za * A + m.Kb * m.Za * D, k.T = 1 / B, D = P, B = -C, A = q * B - w * D, D = M * B - ca * D, A *= A, D *= D, k.W = 1 /
                    (l.La + m.La + l.Za * A + m.Za * D), k.S = 0, q = x.H.x * (r + -u * ca - g - -t * w) + x.H.y * (y + u * M - f - t * q), -1 > q && (k.S += -x.va * q);
                2 == x.R && (y = x.v[0], r = x.v[1], e = l.La, l = l.Za, g = m.La, m = m.Za, f = y.o.x * P - y.o.y * C, y = y.v.x * P - y.v.y * C, t = r.o.x * P - r.o.y * C, h = r.v.x * P - r.v.y * C, r = e + g + l * f * f + m * y * y, u = e + g + l * t * t + m * h * h, m = e + g + l * f * t + m * y * h, r * r < 100 * (r * u - m * m) ? (x.K.$.set(r, m), x.K.ha.set(m, u), m = x.K, l = x.U, e = m.$.x * m.ha.y - m.ha.x * m.$.y, 0 !== e && (e = 1 / e), l.$.x = e * m.ha.y, l.ha.x = -e * m.ha.x, l.$.y = -e * m.$.y, l.ha.y = e * m.$.x) : x.R = 1)
            }
        },
        cm = function(a) {
            for (var b = 0; b < a.o; b++) {
                for (var c =
                        a.j[b], d = c.H.x, e = c.H.y, f = 0; f < c.R; f++) {
                    var g = c,
                        h = c.v[f],
                        k = g.H.y,
                        l = -g.H.x,
                        m = g.W * h.j;
                    m = fj(h.H - h.W * ((g.o.ma.x - g.o.ya * h.v.y - g.j.ma.x + g.j.ya * h.o.y) * k + (g.o.ma.y + g.o.ya * h.v.x - g.j.ma.y - g.j.ya * h.o.x) * l), -m, m);
                    var q = m - h.H;
                    k = q * k;
                    l *= q;
                    g.j.ma.x -= g.j.La * k;
                    g.j.ma.y -= g.j.La * l;
                    g.j.ya -= g.j.Za * (h.o.x * l - h.o.y * k);
                    g.o.ma.x += g.o.La * k;
                    g.o.ma.y += g.o.La * l;
                    g.o.ya += g.o.Za * (h.v.x * l - h.v.y * k);
                    h.H = m
                }
                if (1 == c.R) f = c.v[0], g = f.j - f.U * ((c.o.ma.x - c.o.ya * f.v.y - c.j.ma.x + c.j.ya * f.o.y) * d + (c.o.ma.y + c.o.ya * f.v.x - c.j.ma.y - c.j.ya * f.o.x) * e - f.S),
                    g = 0 < g ? g : 0, h = g - f.j, d = h * d, e = h * e, c.j.ma.x -= c.j.La * d, c.j.ma.y -= c.j.La * e, c.j.ya -= c.j.Za * (f.o.x * e - f.o.y * d), c.o.ma.x += c.o.La * d, c.o.ma.y += c.o.La * e, c.o.ya += c.o.Za * (f.v.x * e - f.v.y * d), f.j = g;
                else
                    for (f = c.v[0], g = c.v[1], h = f.j, l = g.j, m = (c.o.ma.x - c.o.ya * f.v.y - c.j.ma.x + c.j.ya * f.o.y) * d + (c.o.ma.y + c.o.ya * f.v.x - c.j.ma.y - c.j.ya * f.o.x) * e - f.S, e = (c.o.ma.x - c.o.ya * g.v.y - c.j.ma.x + c.j.ya * g.o.y) * d + (c.o.ma.y + c.o.ya * g.v.x - c.j.ma.y - c.j.ya * g.o.x) * e - g.S, m -= c.K.$.x * h + c.K.ha.x * l, e -= c.K.$.y * h + c.K.ha.y * l;;) {
                        d = -(c.U.$.x * m + c.U.ha.x * e);
                        if (0 <=
                            d && (k = -(c.U.$.y * m + c.U.ha.y * e), 0 <= k)) {
                            bm(c, f, g, d - h, k - l);
                            f.j = d;
                            g.j = k;
                            break
                        }
                        d = -f.U * m;
                        if (0 <= d && 0 <= c.K.$.y * d + e) {
                            bm(c, f, g, d - h, -l);
                            f.j = d;
                            g.j = 0;
                            break
                        }
                        d = -g.U * e;
                        if (0 <= d && 0 <= c.K.ha.x * d + m) {
                            bm(c, f, g, -h, d - l);
                            f.j = 0;
                            g.j = d;
                            break
                        }
                        if (0 <= m && 0 <= e) {
                            bm(c, f, g, -h, -l);
                            f.j = 0;
                            g.j = 0;
                            break
                        }
                        break
                    }
            }
        },
        bm = function(a, b, c, d, e) {
            var f = d * a.H.x;
            d *= a.H.y;
            var g = e * a.H.x;
            e *= a.H.y;
            a.j.ma.x -= a.j.La * (f + g);
            a.j.ma.y -= a.j.La * (d + e);
            a.j.ya -= a.j.Za * (b.o.x * d - b.o.y * f + c.o.x * e - c.o.y * g);
            a.o.ma.x += a.o.La * (f + g);
            a.o.ma.y += a.o.La * (d + e);
            a.o.ya += a.o.Za * (b.v.x *
                d - b.v.y * f + c.v.x * e - c.v.y * g);
            b.j = 0;
            c.j = 0
        },
        em = function(a, b) {
            void 0 === b && (b = 0);
            for (var c = 0, d = 0; d < a.o; d++) {
                var e = a.j[d],
                    f = e.j,
                    g = e.o,
                    h = f.Kb * f.La,
                    k = f.Kb * f.Za,
                    l = g.Kb * g.La,
                    m = g.Kb * g.Za,
                    q = e,
                    w = dm;
                jj(0 < q.R);
                switch (q.type) {
                    case 1:
                        w.v(q);
                        break;
                    case 2:
                        w.H(q);
                        break;
                    case 4:
                        w.R(q)
                }
                q = dm.j;
                for (w = 0; w < e.R; w++) {
                    var r = e.v[w],
                        y = dm.Ea[w],
                        t = dm.o[w],
                        u = y.x - f.ka.c.x,
                        B = y.y - f.ka.c.y,
                        L = y.x - g.ka.c.x;
                    y = y.y - g.ka.c.y;
                    c = c < t ? c : t;
                    t = -r.T * fj(b * (t + .005), -.2, 0);
                    r = t * q.x;
                    t *= q.y;
                    f.ka.c.x -= h * r;
                    f.ka.c.y -= h * t;
                    f.ka.a -= k * (u * t - B * r);
                    qk(f);
                    g.ka.c.x += l *
                        r;
                    g.ka.c.y += l * t;
                    g.ka.a += m * (L * t - y * r);
                    qk(g)
                }
            }
            return -.0075 < c
        },
        $l = new function() {
            this.j = Y(0, 0);
            this.Ea = [];
            for (var a = 0; 2 > a; a++) this.Ea[a] = Y(0, 0)
        },
        dm = new Xl;
    var fm = function() {
        this.j = [];
        this.o = []
    };
    fm.prototype.reset = function() {
        this.j = [];
        this.o = []
    };
    var gm = function(a, b) {
        this.U = a;
        this.H = b;
        this.v = [];
        this.S = [];
        this.R = [];
        this.o = [];
        this.j = [];
        this.T = new fm
    };
    gm.prototype.reset = function(a, b) {
        this.U = a;
        this.H = b
    };
    var hm = function(a) {
        a.v = [];
        a.S = [];
        a.R = [];
        a.o = [];
        a.j = []
    };
    n = gm.prototype;
    n.Ue = function(a, b) {
        for (var c = 0; c < this.S.length; c++) {
            var d = this.S[c];
            d.ma.x += a.dt * (b.x + d.La * d.W.x);
            d.ma.y += a.dt * (b.y + d.La * d.W.y);
            d.ya += a.dt * d.Za * d.Sa;
            Ti(d.ma, fj(1 - a.dt * d.Na, 0, 1));
            d.ya *= fj(1 - a.dt * d.Da, 0, 1)
        }
    };
    n.Xe = function(a) {
        for (var b = this.H, c = 0; c < b.o; ++c) {
            var d = b.j[c],
                e = d.j,
                f = d.o,
                g = e.La,
                h = e.Za,
                k = f.La,
                l = f.Za,
                m = d.H.x,
                q = d.H.y,
                w = q,
                r = -m,
                y;
            if (a.R) {
                var t = d.R;
                for (y = 0; y < t; ++y) {
                    var u = d.v[y];
                    u.j *= a.H;
                    u.H *= a.H;
                    var B = u.j * m + u.H * w,
                        L = u.j * q + u.H * r;
                    e.ya -= h * (u.o.x * L - u.o.y * B);
                    e.ma.x -= g * B;
                    e.ma.y -= g * L;
                    f.ya += l * (u.v.x * L - u.v.y * B);
                    f.ma.x += k * B;
                    f.ma.y += k * L
                }
            } else
                for (t = d.R, y = 0; y < t; ++y) e = d.v[y], e.j = 0, e.H = 0
        }
        for (b = 0; b < this.j.length; b++) this.j[b].v(a);
        for (b = 0; b < a.v; b++) {
            for (c = 0; c < this.j.length; c++) this.j[c].R(a);
            cm(this.H)
        }
        for (a = 0; a <
            this.j.length; a++) this.j[a].S();
        a = this.H;
        for (b = 0; b < a.o; ++b)
            for (c = a.j[b], d = c.ta, y = 0; y < c.R; ++y) t = d.Ea[y], e = c.v[y], t.Dc = e.j, t.Ec = e.H
    };
    n.Ve = function(a) {
        for (var b = 0; b < this.R.length; ++b) {
            var c = this.R[b],
                d = a.dt * c.ma.x,
                e = a.dt * c.ma.y;
            4 < d * d + e * e && (Vi(c.ma), c.ma.x = 2 * c.ma.x * a.j, c.ma.y = 2 * c.ma.y * a.j);
            d = a.dt * c.ya;
            d * d > lj && (c.ya = 0 > c.ya ? -kj * a.j : kj * a.j);
            c.ka.Cb.Ba(c.ka.c);
            c.ka.qc = c.ka.a;
            c.ka.c.x += a.dt * c.ma.x;
            c.ka.c.y += a.dt * c.ma.y;
            c.ka.a += a.dt * c.ya;
            qk(c)
        }
    };
    n.We = function(a) {
        for (var b = 0; b < a.o; b++) {
            for (var c = em(this.H, .2), d = !0, e = 0; e < this.j.length; e++) {
                var f = this.j[e].H(.2);
                d = d && f
            }
            if (c && d) break
        }
    };
    n.sf = function(a) {
        for (var b = Number.MAX_VALUE, c = 0; c < this.R.length; c++) {
            var d = this.R[c];
            !d.wa || Math.abs(d.ya) > mj || 1E-4 < Zi(d.ma, d.ma) ? b = d.T = 0 : (d.T += a.dt, b = Math.min(b, d.T))
        }
        if (.5 <= b)
            for (a = 0; a < this.v.length; a++) nk(this.v[a], !1)
    };
    n.report = function(a) {
        if (null != this.U)
            for (var b = 0; b < this.o.length; ++b) {
                var c = a[b];
                this.T.reset();
                for (var d = 0; d < c.R; ++d) this.T.j[d] = c.v[d].j, this.T.o[d] = c.v[d].H
            }
    };
    var im = function(a, b) {
        a.v.push(b);
        0 != b.Ka() && (a.R.push(b), 2 == b.Ka() && a.S.push(b))
    };
    var jm = function() {
            var a = Y(0, 0);
            this.j = new Ul(this);
            this.R = new Zl;
            this.S = this.o = !1;
            this.v = new Cj;
            this.ub = new sj;
            this.Qb = null;
            this.wa = new Lj;
            this.Ca = a;
            this.W = 0;
            lk(this, new oj);
            this.H = new Yl;
            this.U = new Yl;
            this.T = new gm(this.j.o, this.R)
        },
        km = 1 - 100 * Number.MIN_VALUE,
        lm = function(a, b) {
            a.j.o = b
        },
        lk = function(a, b) {
            jj(!a.o);
            var c = new ek(b, a),
                d = a.v,
                e = c.va;
            null == d.j[e] && (Dj(d, c, e, Bj), Kj(d, c), c.S.push(d));
            return c
        },
        vk = function(a, b) {
            jj(!a.o);
            for (var c = b.Qb; c;) {
                var d = c;
                c = c.next;
                var e = a;
                d = d.Ic;
                var f = d.df;
                d.ae && (d.ae.Oc =
                    d.Oc);
                d.Oc && (d.Oc.ae = d.ae);
                d == e.Qb && (e.Qb = d.Oc);
                e = d.T;
                var g = d.U;
                nk(e, !0);
                nk(g, !0);
                d.j.Ac && (d.j.Ac.next = d.j.next);
                d.j.next && (d.j.next.Ac = d.j.Ac);
                d.j == e.Qb && (e.Qb = d.j.next);
                d.j.Ac = null;
                d.j.next = null;
                d.o.Ac && (d.o.Ac.next = d.o.next);
                d.o.next && (d.o.next.Ac = d.o.Ac);
                d.o == g.Qb && (g.Qb = d.o.next);
                d.o.Ac = null;
                d.o.next = null;
                if (!f)
                    for (d = g.ub.Oa(rj); d; d = d.Ma()) Jl(d.tb, g) == e && (d.tb.Dd = !0)
            }
            for (c = b.nb.Oa(); c; c = c.Ma()) c.j.j(b);
            for (c = b.ub.Oa(rj); c; c = c.Ma()) a.j.destroy(c.tb);
            for (c = b.H.Oa(); c; c = c.Ma()) {
                d = b;
                f = c.Jb;
                jj(!d.o.o);
                ck(d.H, f);
                for (e = d.ub.Oa(rj); e; e = e.Ma()) f != e.tb.Ya && f != e.tb.Xa || d.o.j.destroy(e.tb);
                if (d.Cc && (e = f, null != e.o)) {
                    g = d.o.j.j;
                    var h = e.o;
                    Sa(g.o, h);
                    Vj(g.R, h);
                    h.destroy();
                    e.o = null
                }
                f.destroy();
                gk(d)
            }
            b.destroy();
            c = a.v;
            d = b.va;
            if (null != c.j[d]) {
                Sa(b.S, c);
                for (f = 0; f <= Bj; f++) Fj(c, d, f);
                delete c.j[d]
            }
        },
        om = function(a) {
            a.S && (ik(a.j), a.S = !1);
            a.o = !0;
            a.H.reset(.016, .016 * a.W, 10, 10, !0);
            for (var b = a.j, c = b.H.ub.Oa(rj); c; c = c.Ma()) {
                var d = c.tb,
                    e = d.Ya,
                    f = d.Xa,
                    g = e.j,
                    h = f.j;
                if (g.xc() || h.xc()) {
                    if (d.Dd) {
                        if (!rk(h, g)) {
                            b.destroy(d);
                            continue
                        }
                        if (!cl(e,
                                f)) {
                            b.destroy(d);
                            continue
                        }
                        d.Dd = !1
                    }
                    b.j.vd(e.o, f.o) ? Kl(d, b.o) : b.destroy(d)
                }
            }
            if (0 < a.H.dt) {
                b = a.H;
                for (c = a.wa.Oa(); c; c = c.Ma()) c.j.o(b);
                c = a.T;
                c.reset(a.j.o, a.R);
                for (d = a.v.Oa(Bj); d; d = d.Ma()) d.body.Pa = !1;
                for (f = a.ub.Oa(rj); f; f = f.Ma()) f.tb.Pa = !1;
                for (d = a.Qb; d; d = d.Oc) d.Pa = !1;
                for (d = a.v.Oa(Hj); d; d = d.Ma())
                    if (f = d.body, !f.Pa) {
                        hm(c);
                        e = [];
                        e.push(f);
                        for (f.Pa = !0; 0 < e.length;)
                            if (g = e.pop(), im(c, g), g.xc() || nk(g, !0), 0 != g.Ka()) {
                                for (f = g.ub.Oa(vj); f; f = f.Ma()) h = f.tb, h.Pa || (c.o.push(h), h.Pa = !0, h = Jl(h, g), h.Pa || (e.push(h), h.Pa = !0));
                                for (f = g.Qb; f; f = f.next) !f.Ic.Pa && f.tc.Cc && (c.j.push(f.Ic), f.Ic.Pa = !0, f.tc.Pa || (e.push(f.tc), f.tc.Pa = !0))
                            } e = c;
                        f = b;
                        e.Ue(f, a.Ca);
                        am(e.H, e.o, e.o.length);
                        e.Xe(f);
                        e.Ve(f);
                        e.We(f);
                        e.report(e.H.j)
                    } for (d = a.v.Oa(Hj); d; d = d.Ma()) mk(d.body);
                ik(a.j);
                b = a.H;
                c = a.T;
                c.reset(a.j.o, a.R);
                for (d = a.v.Oa(Bj); d; d = d.Ma()) f = d.body, f.Pa = !1, f.ka.yb = 0;
                for (g = a.ub.Oa(rj); g; g = g.Ma()) g.tb.Pa = !1, g.tb.R = null;
                for (d = a.Qb; d; d = d.Oc) d.Pa = !1;
                for (;;) {
                    d = a.va(b);
                    e = d.ff;
                    d = d.hf;
                    if (null === e || km < d) break;
                    g = e.Ya.j;
                    f = e.Xa.j;
                    mm.set(g.ka);
                    nm.set(f.ka);
                    g.advance(d);
                    f.advance(d);
                    Kl(e, a.j.o);
                    e.R = null;
                    if (e.va || !e.W) g.ka.set(mm), f.ka.set(nm), qk(g), qk(f);
                    else if (e.o) {
                        2 != g.Ka() && (g = f);
                        hm(c);
                        e = new Vk;
                        e.j.push(g);
                        for (g.Pa = !0; 0 < e.o.length + e.j.length;)
                            if (g = f = e, 0 == g.o.length && (g.o = g.j, g.o.reverse(), g.j = []), f = f.o.pop(), im(c, f), f.xc() || nk(f, !0), 2 == f.Ka()) {
                                for (g = f.ub.Oa(vj); g && 32 != c.o.length; g = g.Ma()) h = g.tb, h.Pa || (c.o.push(h), h.Pa = !0, h = Jl(h, f), h.Pa || (0 != h.Ka() && (h.advance(d), nk(h, !0), e.j.push(h)), h.Pa = !0));
                                for (f = f.Qb; f; f = f.next) 32 != c.j.length && !f.Ic.Pa && f.tc.Cc &&
                                    (c.j.push(f.Ic), f.Ic.Pa = !0, f.tc.Pa || (0 != f.tc.Ka() && (f.tc.advance(d), nk(f.tc, !0), e.j.push(f.tc)), f.tc.Pa = !0))
                            } a.U.reset((1 - d) * b.dt, 0, b.v, b.o, !1);
                        d = c;
                        e = a.U;
                        am(d.H, d.o, d.o.length);
                        g = d.H;
                        for (f = 0; f < d.j.length; ++f) d.j[f].v(e);
                        for (f = 0; f < e.v; ++f)
                            for (cm(g), h = 0; h < d.j.length; ++h) d.j[h].R(e);
                        for (f = 0; f < d.R.length; ++f) {
                            h = d.R[f];
                            var k = e.dt * h.ma.x,
                                l = e.dt * h.ma.y;
                            4 < k * k + l * l && (Vi(h.ma), h.ma.x = 2 * h.ma.x * e.j, h.ma.y = 2 * h.ma.y * e.j);
                            k = e.dt * h.ya;
                            k * k > lj && (h.ya = 0 > h.ya ? -kj * e.j : kj * e.j);
                            h.ka.Cb.Ba(h.ka.c);
                            h.ka.qc = h.ka.a;
                            h.ka.c.x +=
                                e.dt * h.ma.x;
                            h.ka.c.y += e.dt * h.ma.y;
                            h.ka.a += e.dt * h.ya;
                            qk(h)
                        }
                        for (f = 0; f < e.o; ++f) {
                            k = em(g, .75);
                            l = !0;
                            for (h = 0; h < d.j.length; ++h) {
                                var m = d.j[h].H(.2);
                                l = l && m
                            }
                            if (k && l) break
                        }
                        d.report(g.j);
                        for (d = 0; d < c.v.length; d++)
                            if (c.v[d].Pa = !1, c.v[d].xc() && 2 == c.v[d].Ka())
                                for (mk(c.v[d]), g = c.v[d].ub.Oa(rj); g; g = g.Ma()) g.tb.R = null;
                        for (d = 0; d < c.o.length; d++) c.o[d].Pa = !1, c.o[d].R = null;
                        for (d = 0; d < c.j.length; d++) c.j[d].Pa = !1;
                        ik(a.j)
                    }
                }
                a.W = a.H.j
            }
            a.o = !1
        };
    jm.prototype.va = function(a) {
        for (var b = null, c = 1, d = this.ub.Oa(xj); d; d = d.Ma()) {
            var e = d.tb;
            if (!this.ta(a, e)) {
                if (null != e.R) var f = e.R;
                else {
                    if (e.o) f = 1;
                    else {
                        var g = e.Ya.j,
                            h = e.Xa.j,
                            k = g.ka.yb;
                        g.ka.yb < h.ka.yb ? (k = h.ka.yb, g.ka.advance(k)) : h.ka.yb < g.ka.yb && (k = g.ka.yb, h.ka.advance(k));
                        f = e;
                        g = g.ka;
                        h = h.ka;
                        Ll.j.set(f.Ya.Qa);
                        Ll.o.set(f.Xa.Qa);
                        Ll.v = g;
                        Ll.H = h;
                        Ll.R = .005;
                        var l = Ll;
                        zl++;
                        f = l.j;
                        h = l.o;
                        g = l.v;
                        var m = l.H;
                        jj(g.yb == m.yb);
                        jj(1 - g.yb > Number.MIN_VALUE);
                        var q = f.v + h.v;
                        l = l.R;
                        var w = 0,
                            r = 0,
                            y = 0;
                        Cl.count = 0;
                        for (Dl.R = !1;;) {
                            hj(g, wl,
                                w);
                            hj(m, xl, w);
                            Dl.j = f;
                            Dl.o = h;
                            Dl.v = wl;
                            Dl.H = xl;
                            Ck(El, Cl, Dl);
                            if (0 >= El.v) {
                                w = 1;
                                break
                            }
                            var t = h;
                            var u = vl;
                            var B = Cl;
                            var L = wl;
                            var x = xl;
                            u.v = f;
                            u.H = t;
                            t = B.count;
                            jj(0 < t && 3 > t);
                            if (1 == t) {
                                u.j = 1;
                                var M = Ak(u.v, B.Ta[0]);
                                B = Ak(u.H, B.Ua[0]);
                                t = M;
                                var C = L.V;
                                M = L.position.x + (C.$.x * t.x + C.ha.x * t.y);
                                L = L.position.y + (C.$.y * t.x + C.ha.y * t.y);
                                t = B;
                                C = x.V;
                                B = x.position.x + (C.$.x * t.x + C.ha.x * t.y);
                                x = x.position.y + (C.$.y * t.x + C.ha.y * t.y);
                                u.o.x = B - M;
                                u.o.y = x - L;
                                Vi(u.o)
                            } else if (B.Ua[0] == B.Ua[1]) {
                                u.j = 2;
                                var P = Ak(u.v, B.Ta[0]);
                                var A = Ak(u.v, B.Ta[1]);
                                B = Ak(u.H,
                                    B.Ua[0]);
                                u.Fa.x = .5 * (P.x + A.x);
                                u.Fa.y = .5 * (P.y + A.y);
                                var D = ej(A, P);
                                Z(u.o);
                                u.o = aj(D);
                                Z(D);
                                Vi(u.o);
                                t = u.o;
                                C = L.V;
                                P = C.$.x * t.x + C.ha.x * t.y;
                                A = C.$.y * t.x + C.ha.y * t.y;
                                t = u.Fa;
                                C = L.V;
                                M = L.position.x + (C.$.x * t.x + C.ha.x * t.y);
                                L = L.position.y + (C.$.y * t.x + C.ha.y * t.y);
                                t = B;
                                C = x.V;
                                B = x.position.x + (C.$.x * t.x + C.ha.x * t.y);
                                x = x.position.y + (C.$.y * t.x + C.ha.y * t.y);
                                0 > (B - M) * P + (x - L) * A && Ri(u.o)
                            } else if (B.Ta[0] == B.Ta[0]) u.j = 4, C = Ak(u.H, B.Ua[0]), t = Ak(u.H, B.Ua[1]), M = Ak(u.v, B.Ta[0]), u.Fa.x = .5 * (C.x + t.x), u.Fa.y = .5 * (C.y + t.y), D = ej(t, C), Z(u.o), u.o = aj(D),
                                Z(D), Vi(u.o), t = u.o, C = x.V, P = C.$.x * t.x + C.ha.x * t.y, A = C.$.y * t.x + C.ha.y * t.y, t = u.Fa, C = x.V, B = x.position.x + (C.$.x * t.x + C.ha.x * t.y), x = x.position.y + (C.$.y * t.x + C.ha.y * t.y), t = M, C = L.V, M = L.position.x + (C.$.x * t.x + C.ha.x * t.y), L = L.position.y + (C.$.y * t.x + C.ha.y * t.y), 0 > (M - B) * P + (L - x) * A && Ri(u.o);
                            else {
                                P = Ak(u.v, B.Ta[0]);
                                A = Ak(u.v, B.Ta[1]);
                                C = Ak(u.H, B.Ua[0]);
                                t = Ak(u.H, B.Ua[1]);
                                D = ej(A, P);
                                var ca = bj(L.V, D);
                                Z(D);
                                D = ej(t, C);
                                x = bj(x.V, D);
                                Z(D);
                                L = ca.x * ca.x + ca.y * ca.y;
                                M = x.x * x.x + x.y * x.y;
                                var ta = ej(x, ca);
                                B = ca.x * ta.x + ca.y * ta.y;
                                D = x.x * ta.x + x.y *
                                    ta.y;
                                Z(ta);
                                ca = ca.x * x.x + ca.y * x.y;
                                ta = L * M - ca * ca;
                                x = 0;
                                0 != ta && (x = fj((ca * D - B * M) / ta, 0, 1));
                                0 > (ca * x + D) / M && (x = fj((ca - B) / L, 0, 1));
                                M = Y(0, 0);
                                M.x = P.x + x * (A.x - P.x);
                                M.y = P.y + x * (A.y - P.y);
                                B = Y(0, 0);
                                B.x = C.x + x * (t.x - C.x);
                                B.y = C.y + x * (t.y - C.y);
                                0 == x || 1 == x ? (u.j = 4, D = ej(t, C), Z(u.o), u.o = aj(D), Z(D), Vi(u.o), u.Fa = B) : (u.j = 2, D = ej(A, P), Z(u.o), u.o = aj(D), Z(D), u.Fa = M);
                                0 > x && Ri(u.o);
                                Z(M);
                                Z(B)
                            }
                            A = yl();
                            if (0 >= A) {
                                w = 1;
                                break
                            }
                            0 == r && (y = A > q ? Math.max(q - l, .75 * q) : Math.max(A - l, .02 * q));
                            if (A - y < .5 * l) {
                                if (0 == r) {
                                    w = 1;
                                    break
                                }
                                break
                            }
                            t = u = w;
                            C = 1;
                            hj(g, wl, C);
                            hj(m, xl, C);
                            P = yl();
                            if (P >= y) {
                                w = 1;
                                break
                            }
                            for (x = 0;;) {
                                L = x & 1 ? t + (y - A) * (C - t) / (P - A) : .5 * (t + C);
                                hj(g, wl, L);
                                hj(m, xl, L);
                                M = yl();
                                if (Math.abs(M - y) < .025 * l) {
                                    u = L;
                                    break
                                }
                                M > y ? (t = L, A = M) : (C = L, P = M);
                                x++;
                                Bl++;
                                if (50 == x) break
                            }
                            if (u < (1 + 100 * Number.MIN_VALUE) * w) break;
                            w = u;
                            r++;
                            Al++;
                            if (1E3 == r) break
                        }
                        f = w;
                        jj(0 <= f && 1 >= f);
                        0 < f && 1 > f && (f = (1 - f) * k + f)
                    }
                    e.R = f
                }
                Number.MIN_VALUE < f && f < c && (b = e, c = f)
            }
        }
        return {
            ff: b,
            hf: c
        }
    };
    jm.prototype.ta = function(a, b) {
        var c = b.Ya.j,
            d = b.Xa.j;
        return 2 == c.Ka() && c.xc() || 2 == d.Ka() && d.xc() ? !1 : !0
    };
    new ij;
    var mm = new gj,
        nm = new gj;
    var pm = function(a) {
            this.S = new Map;
            this.W = new Map;
            this.H = new Map;
            this.R = new Map;
            this.v = new Map;
            this.Ca = 1;
            this.T = a;
            this.o = this.U = 0;
            this.Ja = null
        },
        qm = function(a, b) {
            a.Ja = b
        },
        rm = function(a, b) {
            return a.S.get(b)
        };
    pm.prototype.Da = function(a) {
        this.U += a;
        for (this.o += a; 100 <= this.U && 16 <= this.o;) this.wa(100), om(this.T), this.ta(), this.U -= 100, this.o -= 16;
        for (; 16 <= this.o;) om(this.T), this.ta(), this.o -= 16
    };
    pm.prototype.wa = function(a) {
        sm(this, a);
        tm(this)
    };
    var sm = function(a, b) {
            for (var c = p(a.S.values()), d = c.next(); !d.done; d = c.next())
                if (d = d.value, d.Qc(b), d.Ce()) {
                    var e = a,
                        f = d.v,
                        g = d.Ka(),
                        h = e.S.get(f);
                    h.$d() && e.W["delete"](f);
                    switch (g) {
                        case 1:
                        case 2:
                            e.H["delete"](f);
                            break;
                        case 16:
                            e.R["delete"](f);
                            break;
                        case 4:
                            e.v["delete"](f)
                    }
                    e.S["delete"](f);
                    h.dispose(e);
                    e.Ja && e.Ja(f);
                    d.mc = !1
                }
        },
        tm = function(a) {
            a = p(a.W.values());
            for (var b = a.next(); !b.done; b = a.next()) b.value.he()
        };
    pm.prototype.ta = function() {
        for (var a = p(this.S.values()), b = a.next(); !b.done; b = a.next()) b.value.zc()
    };
    var um = function(a, b) {
        a.S.set(b.v, b);
        b.$d() && a.W.set(b.v, b);
        switch (b.Ka()) {
            case 1:
            case 2:
                a.H.set(b.v, b);
                break;
            case 16:
                a.R.set(b.v, b);
                break;
            case 4:
                a.v.set(b.v, b)
        }
    };
    pm.prototype.wake = function() {
        this.o = 0
    };
    var vm = function(a, b, c, d) {
        Nk.call(this, a, b, c, d);
        this.o = null;
        this.W = {
            radius: Math.sqrt(this.S * this.S + this.R * this.R) + 5,
            ke: 0,
            ud: this.ab(),
            Hd: null,
            Yd: !0,
            visible: !0
        }
    };
    v(vm, Nk);
    vm.prototype.Pc = function() {};
    vm.prototype.Qc = function() {
        if (this.o)
            for (var a = this, b = vg(this.o, 1), c = 0; c < b.length; c++) {
                var d = this.T.R.get(b[c]);
                d && (d.Md(a, c + 1), a = d)
            }
    };
    vm.prototype.zc = function() {
        if (this.o) {
            vg(this.o, 1);
            for (var a = p(vg(this.o, 1)), b = a.next(); !b.done; b = a.next())(b = this.T.R.get(b.value)) && b.zc()
        }
    };
    vm.prototype.Xd = function() {
        return this.W
    };
    var wm = function(a) {
        T(this, a, null, Cg)
    };
    z(wm, S);
    var xm = function(a) {
        T(this, a, null, null)
    };
    z(xm, S);
    var ym = function(a) {
        T(this, a, null, null)
    };
    z(ym, S);
    var zm = function(a) {
        T(this, a, null, null)
    };
    z(zm, S);
    var Am = function(a) {
        T(this, a, null, null)
    };
    z(Am, S);
    var Bm = function(a) {
        T(this, a, null, null)
    };
    z(Bm, S);
    var Cm = function(a) {
        T(this, a, null, null)
    };
    z(Cm, S);
    var Dm = function(a) {
        T(this, a, null, null)
    };
    z(Dm, S);
    var Cg = [
            [1, 2, 3, 4, 5, 6, 7]
        ],
        Em = function(a, b) {
            for (; O(b) && !N(b);) Q(b);
            return a
        },
        Fm = function() {},
        Gm = function(a, b) {
            for (; O(b) && !N(b);) switch (b.j) {
                case 1:
                    var c = Zf(b);
                    xg(a, 1, c);
                    break;
                case 3:
                    c = Zf(b);
                    xg(a, 3, c);
                    break;
                case 4:
                    c = Zf(b);
                    xg(a, 4, c);
                    break;
                default:
                    Q(b)
            }
            return a
        },
        Hm = function(a, b) {
            var c = V(a, 1, "");
            0 < c.length && mg(b, 1, c);
            c = V(a, 3, "");
            0 < c.length && mg(b, 3, c);
            c = V(a, 4, "");
            0 < c.length && mg(b, 4, c)
        },
        Im = function(a, b) {
            for (; O(b) && !N(b);) switch (b.j) {
                case 1:
                    var c = Zf(b);
                    xg(a, 1, c);
                    break;
                case 3:
                    c = Zf(b);
                    xg(a, 3, c);
                    break;
                default:
                    Q(b)
            }
            return a
        },
        Jm = function(a, b) {
            var c = V(a, 1, "");
            0 < c.length && mg(b, 1, c);
            c = V(a, 3, "");
            0 < c.length && mg(b, 3, c)
        },
        Km = function(a, b) {
            for (; O(b) && !N(b);) switch (b.j) {
                case 1:
                    var c = Zf(b);
                    xg(a, 1, c);
                    break;
                case 2:
                    c = Zf(b);
                    xg(a, 2, c);
                    break;
                case 3:
                    c = Vf(b);
                    var d = a;
                    0 !== c ? W(d, 3, c) : d.o[3 + d.H] = null;
                    break;
                default:
                    Q(b)
            }
            return a
        },
        Lm = function(a, b) {
            var c = V(a, 1, "");
            0 < c.length && mg(b, 1, c);
            c = V(a, 2, "");
            0 < c.length && mg(b, 2, c);
            c = V(a, 3, 0);
            0 !== c && ig(b, 3, c)
        },
        Mm = function(a, b) {
            for (; O(b) && !N(b);) switch (b.j) {
                case 1:
                    var c = Zf(b);
                    xg(a, 1, c);
                    break;
                case 2:
                    c = Zf(b);
                    xg(a, 2, c);
                    break;
                default:
                    Q(b)
            }
            return a
        },
        Nm = function(a, b) {
            var c = V(a, 1, "");
            0 < c.length && mg(b, 1, c);
            c = V(a, 2, "");
            0 < c.length && mg(b, 2, c)
        },
        Om = function(a, b) {
            for (; O(b) && !N(b);) switch (b.j) {
                case 1:
                    var c = Zf(b);
                    xg(a, 1, c);
                    break;
                default:
                    Q(b)
            }
            return a
        },
        Pm = function(a, b) {
            var c = V(a, 1, "");
            0 < c.length && mg(b, 1, c)
        },
        Qm = function(a, b) {
            for (; O(b) && !N(b);) switch (b.j) {
                case 1:
                    var c = Zf(b);
                    xg(a, 1, c);
                    break;
                default:
                    Q(b)
            }
            return a
        },
        Rm = function(a, b) {
            var c = V(a, 1, "");
            0 < c.length && mg(b, 1, c)
        };
    var Sm = function(a) {
        T(this, a, null, null)
    };
    z(Sm, S);
    var Tm, Um = {
            Xb: !0,
            Ob: !0,
            ac: !1,
            $b: !1,
            Rb: !1,
            Sb: !1,
            Tb: !1,
            jc: !1,
            bc: !1,
            kc: !1,
            Yb: !1,
            hc: !1,
            Pb: !1,
            name: 0
        },
        Vm = {
            Xb: !0,
            Ob: !0,
            ac: !1,
            $b: !1,
            Rb: !1,
            Sb: !1,
            Tb: !1,
            jc: !1,
            bc: !0,
            kc: !1,
            Yb: !1,
            hc: !1,
            Pb: !1,
            name: 1
        },
        Wm = {
            Xb: !0,
            Ob: !1,
            ac: !0,
            $b: !1,
            Rb: !0,
            Sb: !1,
            Tb: !1,
            jc: !1,
            bc: !1,
            kc: !1,
            Yb: !0,
            hc: !0,
            Pb: !0,
            name: 2
        },
        Xm = {
            Xb: !0,
            Ob: !1,
            ac: !1,
            $b: !0,
            Rb: !0,
            Sb: !0,
            Tb: !1,
            jc: !1,
            bc: !1,
            kc: !1,
            Yb: !0,
            hc: !0,
            Pb: !0,
            name: 3
        },
        Ym = {
            Xb: !0,
            Ob: !1,
            ac: !1,
            $b: !1,
            Rb: !0,
            Sb: !1,
            Tb: !1,
            jc: !0,
            bc: !1,
            kc: !0,
            Yb: !0,
            hc: !0,
            Pb: !0,
            name: 4
        },
        Zm = {
            Xb: !1,
            Ob: !0,
            ac: !1,
            $b: !1,
            Rb: !1,
            Sb: !1,
            Tb: !1,
            jc: !1,
            bc: !1,
            kc: !1,
            Yb: !1,
            hc: !1,
            Pb: !1,
            name: 6
        },
        $m = {
            Xb: !0,
            Ob: !1,
            ac: !1,
            $b: !1,
            Rb: !0,
            Sb: !0,
            Tb: !0,
            jc: !1,
            bc: !1,
            kc: !1,
            Yb: !0,
            hc: !0,
            Pb: !0,
            name: 7
        },
        an = {
            Xb: !0,
            Ob: !1,
            ac: !1,
            $b: !1,
            Rb: !0,
            Sb: !1,
            Tb: !1,
            jc: !1,
            bc: !1,
            kc: !0,
            Yb: !0,
            hc: !1,
            Pb: !1,
            name: 9
        },
        bn = {
            Xb: !0,
            Ob: !1,
            ac: !1,
            $b: !1,
            Rb: !0,
            Sb: !0,
            Tb: !0,
            jc: !1,
            bc: !1,
            kc: !0,
            Yb: !0,
            hc: !0,
            Pb: !0,
            name: 8
        },
        cn = {
            Xb: !0,
            Ob: !1,
            ac: !1,
            $b: !1,
            Rb: !0,
            Sb: !0,
            Tb: !1,
            jc: !1,
            bc: !1,
            kc: !0,
            Yb: !0,
            hc: !0,
            Pb: !0,
            name: 5
        },
        dn = {
            Xb: !0,
            Ob: !1,
            ac: !1,
            $b: !1,
            Rb: !0,
            Sb: !0,
            Tb: !0,
            jc: !1,
            bc: !1,
            kc: !1,
            Yb: !0,
            hc: !0,
            Pb: !0,
            name: 10
        },
        en = {
            Xb: !0,
            Ob: !0,
            ac: !1,
            $b: !1,
            Rb: !1,
            Sb: !1,
            Tb: !1,
            jc: !1,
            bc: !1,
            kc: !1,
            Yb: !1,
            hc: !1,
            Pb: !1,
            name: 11
        },
        fn = {
            Xb: !1,
            Ob: !0,
            ac: !1,
            $b: !1,
            Rb: !0,
            Sb: !1,
            Tb: !0,
            jc: !1,
            bc: !1,
            kc: !1,
            Yb: !1,
            hc: !1,
            Pb: !1,
            name: 12
        };
    var hn = function() {
            gn();
            return Tm.Ob
        },
        jn = function() {
            gn();
            return Tm.Pb
        },
        gn = function() {
            null == Tm && (Tm = Ob && !Sb ? Wm : Pb ? Xm : bb(Kb, "Gbot") ? Ym : Ub() ? fn : Tb() ? Zm : 0 <= Lb.indexOf("fpdoodle=1") && document.getElementById("fpdoodle") ? $m : document.querySelector("body.hp") ? E ? Vm : Um : Sb ? Qb ? cn : E ? bn : an : E ? dn : en)
        };
    !dd && !bd || bd && 9 <= Number(nd) || dd && md("1.9.1");
    bd && md("9");
    var ln = function() {
        this.j = "";
        this.o = kn
    };
    ln.prototype.v = !0;
    var mn = function(a) {
            if (a instanceof ln && a.constructor === ln && a.o === kn) return a.j;
            Ba(a);
            return "type_error:SafeUrl"
        },
        nn = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        kn = {},
        on = function(a) {
            var b = new ln;
            b.j = a;
            return b
        };
    on("about:blank");
    var pn = function(a) {
        a instanceof ln || a instanceof ln || (a = "object" == typeof a && a.v ? a.j : String(a), nn.test(a) || (a = "about:invalid#zClosurez"), a = on(a));
        window.open(mn(a), "", void 0, void 0)
    };
    var qn = function(a, b) {
        this.width = a;
        this.height = b
    };
    n = qn.prototype;
    n.aspectRatio = function() {
        return this.width / this.height
    };
    n.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    n.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    n.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    n.scale = function(a, b) {
        var c = xa(b) ? b : a;
        this.width *= a;
        this.height *= c;
        return this
    };
    var rn = [5, 6, 7, 8, 9, 11, 12, 16],
        sn = 0,
        tn = 0,
        un = !1,
        vn = {},
        wn = [],
        xn = function(a) {
            var b = Ka();
            vn.dt = b - tn;
            tn = b;
            0 == a && (sn = b);
            vn.e = a;
            vn.t = 0 == sn ? -1 : Math.floor(b - sn);
            vn.m = E ? 1 : 0;
            b = window.document;
            b = "CSS1Compat" == b.compatMode ? b.documentElement : b.body;
            b = new qn(b.clientWidth, b.clientHeight);
            vn.w = b.width > b.height ? 1 : 0;
            b = [];
            for (var c in vn) vn.hasOwnProperty(c) && b.push(c + ":" + vn[c]);
            c = b.join(",");
            b = 10 == a;
            var d = 0 <= rn.indexOf(a);
            (Tb() || Ub()) && (c += "&ntp=1");
            window.google && window.google.log ? (b ? (b = nc()) && (c += "&ved=" + b) : d && (Jb ||
                (b = document.getElementById("hplogoshareved")) && (Jb = b.getAttribute("data-ved")), (b = Jb) && (c += "&ved=" + b)), window.google.log("doodle", c)) : Oa(c);
            for (; 0 < wn.length;) delete vn[wn.pop()];
            un || 0 != a || jn() || (un = !0, xn(10))
        };
    var An = function() {
            var a = fc() || !1;
            tn = Ka();
            vn.d = "73509581";
            !un && jn() && (un = !0, xn(10));
            a && yn("d1", 1);
            zn(1)
        },
        zn = function(a) {
            vn.c = a;
            xn(1);
            switch (a) {
                case 12:
                    xn(0);
                    break;
                case 16:
                    xn(2)
            }
        },
        Bn = (new Map).set(PIXI.RENDERER_TYPE.UNKNOWN, "UNKNOWN").set(PIXI.RENDERER_TYPE.WEBGL, "WEBGL").set(PIXI.RENDERER_TYPE.CANVAS, "CANVAS"),
        Cn = (new Map).set(0, "UNDEFINED_CLIENT_TYPE").set(1, "PUBLIC").set(2, "PRIVATE_CLIENT").set(3, "PRIVATE_HOST"),
        yn = function(a, b) {
            vn[a] = b;
            switch (a) {
                case "d2":
                    Bn.get(b);
                    break;
                case "d3":
                    Cn.get(b)
            }
        },
        Dn =
        function(a) {
            void 0 === a ? delete vn.d4 : yn("d4", a)
        };
    /*

    Math.uuid.js (v1.4)
    http://www.broofa.com
    mailto:robert@broofa.com
    Copyright (c) 2010 Robert Kieffer
    Dual licensed under the MIT and GPL licenses.
    */
    var En = function() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
            var b = 16 * Math.random() | 0;
            return ("x" == a ? b : b & 3 | 8).toString(16)
        })
    };
    var Fn = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/,
        Gn = function(a) {
            return Fn.test(a)
        };
    var Hn = function() {
        this.o = -1
    };
    var In = function() {
        this.o = 64;
        this.j = Array(4);
        this.R = Array(this.o);
        this.H = this.v = 0;
        this.reset()
    };
    z(In, Hn);
    In.prototype.reset = function() {
        this.j[0] = 1732584193;
        this.j[1] = 4023233417;
        this.j[2] = 2562383102;
        this.j[3] = 271733878;
        this.H = this.v = 0
    };
    var Jn = function(a, b, c) {
            c || (c = 0);
            var d = Array(16);
            if (wa(b))
                for (var e = 0; 16 > e; ++e) d[e] = b.charCodeAt(c++) | b.charCodeAt(c++) << 8 | b.charCodeAt(c++) << 16 | b.charCodeAt(c++) << 24;
            else
                for (e = 0; 16 > e; ++e) d[e] = b[c++] | b[c++] << 8 | b[c++] << 16 | b[c++] << 24;
            b = a.j[0];
            c = a.j[1];
            e = a.j[2];
            var f = a.j[3];
            var g = b + (f ^ c & (e ^ f)) + d[0] + 3614090360 & 4294967295;
            b = c + (g << 7 & 4294967295 | g >>> 25);
            g = f + (e ^ b & (c ^ e)) + d[1] + 3905402710 & 4294967295;
            f = b + (g << 12 & 4294967295 | g >>> 20);
            g = e + (c ^ f & (b ^ c)) + d[2] + 606105819 & 4294967295;
            e = f + (g << 17 & 4294967295 | g >>> 15);
            g = c + (b ^ e &
                (f ^ b)) + d[3] + 3250441966 & 4294967295;
            c = e + (g << 22 & 4294967295 | g >>> 10);
            g = b + (f ^ c & (e ^ f)) + d[4] + 4118548399 & 4294967295;
            b = c + (g << 7 & 4294967295 | g >>> 25);
            g = f + (e ^ b & (c ^ e)) + d[5] + 1200080426 & 4294967295;
            f = b + (g << 12 & 4294967295 | g >>> 20);
            g = e + (c ^ f & (b ^ c)) + d[6] + 2821735955 & 4294967295;
            e = f + (g << 17 & 4294967295 | g >>> 15);
            g = c + (b ^ e & (f ^ b)) + d[7] + 4249261313 & 4294967295;
            c = e + (g << 22 & 4294967295 | g >>> 10);
            g = b + (f ^ c & (e ^ f)) + d[8] + 1770035416 & 4294967295;
            b = c + (g << 7 & 4294967295 | g >>> 25);
            g = f + (e ^ b & (c ^ e)) + d[9] + 2336552879 & 4294967295;
            f = b + (g << 12 & 4294967295 | g >>> 20);
            g =
                e + (c ^ f & (b ^ c)) + d[10] + 4294925233 & 4294967295;
            e = f + (g << 17 & 4294967295 | g >>> 15);
            g = c + (b ^ e & (f ^ b)) + d[11] + 2304563134 & 4294967295;
            c = e + (g << 22 & 4294967295 | g >>> 10);
            g = b + (f ^ c & (e ^ f)) + d[12] + 1804603682 & 4294967295;
            b = c + (g << 7 & 4294967295 | g >>> 25);
            g = f + (e ^ b & (c ^ e)) + d[13] + 4254626195 & 4294967295;
            f = b + (g << 12 & 4294967295 | g >>> 20);
            g = e + (c ^ f & (b ^ c)) + d[14] + 2792965006 & 4294967295;
            e = f + (g << 17 & 4294967295 | g >>> 15);
            g = c + (b ^ e & (f ^ b)) + d[15] + 1236535329 & 4294967295;
            c = e + (g << 22 & 4294967295 | g >>> 10);
            g = b + (e ^ f & (c ^ e)) + d[1] + 4129170786 & 4294967295;
            b = c + (g << 5 & 4294967295 |
                g >>> 27);
            g = f + (c ^ e & (b ^ c)) + d[6] + 3225465664 & 4294967295;
            f = b + (g << 9 & 4294967295 | g >>> 23);
            g = e + (b ^ c & (f ^ b)) + d[11] + 643717713 & 4294967295;
            e = f + (g << 14 & 4294967295 | g >>> 18);
            g = c + (f ^ b & (e ^ f)) + d[0] + 3921069994 & 4294967295;
            c = e + (g << 20 & 4294967295 | g >>> 12);
            g = b + (e ^ f & (c ^ e)) + d[5] + 3593408605 & 4294967295;
            b = c + (g << 5 & 4294967295 | g >>> 27);
            g = f + (c ^ e & (b ^ c)) + d[10] + 38016083 & 4294967295;
            f = b + (g << 9 & 4294967295 | g >>> 23);
            g = e + (b ^ c & (f ^ b)) + d[15] + 3634488961 & 4294967295;
            e = f + (g << 14 & 4294967295 | g >>> 18);
            g = c + (f ^ b & (e ^ f)) + d[4] + 3889429448 & 4294967295;
            c = e + (g << 20 & 4294967295 |
                g >>> 12);
            g = b + (e ^ f & (c ^ e)) + d[9] + 568446438 & 4294967295;
            b = c + (g << 5 & 4294967295 | g >>> 27);
            g = f + (c ^ e & (b ^ c)) + d[14] + 3275163606 & 4294967295;
            f = b + (g << 9 & 4294967295 | g >>> 23);
            g = e + (b ^ c & (f ^ b)) + d[3] + 4107603335 & 4294967295;
            e = f + (g << 14 & 4294967295 | g >>> 18);
            g = c + (f ^ b & (e ^ f)) + d[8] + 1163531501 & 4294967295;
            c = e + (g << 20 & 4294967295 | g >>> 12);
            g = b + (e ^ f & (c ^ e)) + d[13] + 2850285829 & 4294967295;
            b = c + (g << 5 & 4294967295 | g >>> 27);
            g = f + (c ^ e & (b ^ c)) + d[2] + 4243563512 & 4294967295;
            f = b + (g << 9 & 4294967295 | g >>> 23);
            g = e + (b ^ c & (f ^ b)) + d[7] + 1735328473 & 4294967295;
            e = f + (g << 14 & 4294967295 |
                g >>> 18);
            g = c + (f ^ b & (e ^ f)) + d[12] + 2368359562 & 4294967295;
            c = e + (g << 20 & 4294967295 | g >>> 12);
            g = b + (c ^ e ^ f) + d[5] + 4294588738 & 4294967295;
            b = c + (g << 4 & 4294967295 | g >>> 28);
            g = f + (b ^ c ^ e) + d[8] + 2272392833 & 4294967295;
            f = b + (g << 11 & 4294967295 | g >>> 21);
            g = e + (f ^ b ^ c) + d[11] + 1839030562 & 4294967295;
            e = f + (g << 16 & 4294967295 | g >>> 16);
            g = c + (e ^ f ^ b) + d[14] + 4259657740 & 4294967295;
            c = e + (g << 23 & 4294967295 | g >>> 9);
            g = b + (c ^ e ^ f) + d[1] + 2763975236 & 4294967295;
            b = c + (g << 4 & 4294967295 | g >>> 28);
            g = f + (b ^ c ^ e) + d[4] + 1272893353 & 4294967295;
            f = b + (g << 11 & 4294967295 | g >>> 21);
            g = e + (f ^
                b ^ c) + d[7] + 4139469664 & 4294967295;
            e = f + (g << 16 & 4294967295 | g >>> 16);
            g = c + (e ^ f ^ b) + d[10] + 3200236656 & 4294967295;
            c = e + (g << 23 & 4294967295 | g >>> 9);
            g = b + (c ^ e ^ f) + d[13] + 681279174 & 4294967295;
            b = c + (g << 4 & 4294967295 | g >>> 28);
            g = f + (b ^ c ^ e) + d[0] + 3936430074 & 4294967295;
            f = b + (g << 11 & 4294967295 | g >>> 21);
            g = e + (f ^ b ^ c) + d[3] + 3572445317 & 4294967295;
            e = f + (g << 16 & 4294967295 | g >>> 16);
            g = c + (e ^ f ^ b) + d[6] + 76029189 & 4294967295;
            c = e + (g << 23 & 4294967295 | g >>> 9);
            g = b + (c ^ e ^ f) + d[9] + 3654602809 & 4294967295;
            b = c + (g << 4 & 4294967295 | g >>> 28);
            g = f + (b ^ c ^ e) + d[12] + 3873151461 & 4294967295;
            f = b + (g << 11 & 4294967295 | g >>> 21);
            g = e + (f ^ b ^ c) + d[15] + 530742520 & 4294967295;
            e = f + (g << 16 & 4294967295 | g >>> 16);
            g = c + (e ^ f ^ b) + d[2] + 3299628645 & 4294967295;
            c = e + (g << 23 & 4294967295 | g >>> 9);
            g = b + (e ^ (c | ~f)) + d[0] + 4096336452 & 4294967295;
            b = c + (g << 6 & 4294967295 | g >>> 26);
            g = f + (c ^ (b | ~e)) + d[7] + 1126891415 & 4294967295;
            f = b + (g << 10 & 4294967295 | g >>> 22);
            g = e + (b ^ (f | ~c)) + d[14] + 2878612391 & 4294967295;
            e = f + (g << 15 & 4294967295 | g >>> 17);
            g = c + (f ^ (e | ~b)) + d[5] + 4237533241 & 4294967295;
            c = e + (g << 21 & 4294967295 | g >>> 11);
            g = b + (e ^ (c | ~f)) + d[12] + 1700485571 & 4294967295;
            b = c +
                (g << 6 & 4294967295 | g >>> 26);
            g = f + (c ^ (b | ~e)) + d[3] + 2399980690 & 4294967295;
            f = b + (g << 10 & 4294967295 | g >>> 22);
            g = e + (b ^ (f | ~c)) + d[10] + 4293915773 & 4294967295;
            e = f + (g << 15 & 4294967295 | g >>> 17);
            g = c + (f ^ (e | ~b)) + d[1] + 2240044497 & 4294967295;
            c = e + (g << 21 & 4294967295 | g >>> 11);
            g = b + (e ^ (c | ~f)) + d[8] + 1873313359 & 4294967295;
            b = c + (g << 6 & 4294967295 | g >>> 26);
            g = f + (c ^ (b | ~e)) + d[15] + 4264355552 & 4294967295;
            f = b + (g << 10 & 4294967295 | g >>> 22);
            g = e + (b ^ (f | ~c)) + d[6] + 2734768916 & 4294967295;
            e = f + (g << 15 & 4294967295 | g >>> 17);
            g = c + (f ^ (e | ~b)) + d[13] + 1309151649 & 4294967295;
            c = e + (g << 21 & 4294967295 | g >>> 11);
            g = b + (e ^ (c | ~f)) + d[4] + 4149444226 & 4294967295;
            b = c + (g << 6 & 4294967295 | g >>> 26);
            g = f + (c ^ (b | ~e)) + d[11] + 3174756917 & 4294967295;
            f = b + (g << 10 & 4294967295 | g >>> 22);
            g = e + (b ^ (f | ~c)) + d[2] + 718787259 & 4294967295;
            e = f + (g << 15 & 4294967295 | g >>> 17);
            g = c + (f ^ (e | ~b)) + d[9] + 3951481745 & 4294967295;
            a.j[0] = a.j[0] + b & 4294967295;
            a.j[1] = a.j[1] + (e + (g << 21 & 4294967295 | g >>> 11)) & 4294967295;
            a.j[2] = a.j[2] + e & 4294967295;
            a.j[3] = a.j[3] + f & 4294967295
        },
        Kn = function(a, b) {
            if (!va(c)) var c = b.length;
            for (var d = c - a.o, e = a.R, f = a.v, g = 0; g < c;) {
                if (0 ==
                    f)
                    for (; g <= d;) Jn(a, b, g), g += a.o;
                if (wa(b))
                    for (; g < c;) {
                        if (e[f++] = b.charCodeAt(g++), f == a.o) {
                            Jn(a, e);
                            f = 0;
                            break
                        }
                    } else
                        for (; g < c;)
                            if (e[f++] = b[g++], f == a.o) {
                                Jn(a, e);
                                f = 0;
                                break
                            }
            }
            a.v = f;
            a.H += c
        };
    var Ln = function(a, b) {
        this.top = this.left = 0;
        this.width = a;
        this.height = b
    };
    n = Ln.prototype;
    n.contains = function(a) {
        return a instanceof F ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    n.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    n.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    n.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    n.scale = function(a, b) {
        var c = xa(b) ? b : a;
        this.left *= a;
        this.width *= a;
        this.top *= c;
        this.height *= c;
        return this
    };
    var Ae = Ee.Aa(),
        Mn = function(a) {
            return ("/logos/2018/halloween18/rc5/" + a).toLowerCase()
        },
        Nn = null,
        On = function() {
            var a = [];
            a.push(new Promise(function(a) {
                Be([5], a)
            }));
            a.push(new Promise(function(a) {
                Yb(function() {
                    a()
                })
            }));
            return Promise.all(a)
        },
        Qn = function() {
            var a = [];
            a.push(new Promise(function(a) {
                Ae.preload(1, a)
            }));
            for (var b = {}, c = p([le.nc, le.Ad]), d = c.next(); !d.done; b = {
                    Sd: b.Sd
                }, d = c.next()) b.Sd = d.value, a.push(new Promise(function(a) {
                return function(b) {
                    a.Sd.preload(b)
                }
            }(b)));
            a.push(Pn("tutorial-map.json").then(function(a) {
                Nn =
                    a
            }));
            return Promise.all(a)
        },
        Rn = function() {
            var a = [];
            a.push(new Promise(function(a) {
                Be([0, 2, 3, E ? 6 : 4], a)
            }));
            a.push(new Promise(function(a) {
                le.yd.preload(a)
            }));
            return Promise.all(a)
        },
        Pn = function(a, b) {
            return Sn(Mn(a), b)["catch"](function(a) {
                xn(114);
                return Promise.reject(a)
            })
        },
        Sn = function(a, b) {
            return new Promise(function(c, d) {
                var e = new XMLHttpRequest;
                e.addEventListener("load", function() {
                    try {
                        if (200 != e.status) d(e.status + ": " + a);
                        else {
                            var f = JSON.parse(e.responseText);
                            if (void 0 !== b) {
                                var g = new In;
                                Kn(g, JSON.stringify(f));
                                var h = Array((56 > g.v ? g.o : 2 * g.o) - g.v);
                                h[0] = 128;
                                for (var k = 1; k < h.length - 8; ++k) h[k] = 0;
                                var l = 8 * g.H;
                                for (k = h.length - 8; k < h.length; ++k) h[k] = l & 255, l /= 256;
                                Kn(g, h);
                                var m = Array(16);
                                for (k = h = 0; 4 > k; ++k)
                                    for (l = 0; 32 > l; l += 8) m[h++] = g.j[k] >>> l & 255;
                                var q = Gf(m);
                                q != b && (xn(115), d("Hash mismatch: expected: " + b + " actual: " + q))
                            }
                            c(f)
                        }
                    } catch (w) {
                        d(w)
                    }
                });
                e.addEventListener("error", function(a) {
                    d(a)
                });
                e.addEventListener("abort", function(a) {
                    d(a)
                });
                e.open("GET", a, !0);
                e.send()
            })
        },
        Tn = function(a, b) {
            a.play(0, !1);
            a.play(a.H, !0, b, void 0, !0)
        },
        Un = function(a, b, c) {
            var d = a[3];
            a = a[4];
            void 0 === b && (b = d);
            void 0 === c && (c = a);
            return Math.min(b / d, c / a)
        },
        Vn = new Ln(0, 0),
        Wn = function(a) {
            var b = Math.min(a.width, a.height - ve);
            Vn.left = (a.width - b) / 2;
            Vn.top = ve;
            Vn.width = b;
            Vn.height = b
        },
        Xn = null,
        Yn = function(a) {
            var b = document.createRange();
            a.contentEditable = !0;
            a.readOnly = !1;
            b.selectNodeContents(a);
            var c = window.getSelection();
            c.removeAllRanges();
            c.addRange(b);
            a.setSelectionRange(0, a.value.length);
            a.contentEditable = !1;
            a.readOnly = !0
        },
        Zn = function(a, b) {
            if (navigator.j) return navigator.j.uf(b);
            if (!document.execCommand) return Promise.reject();
            Xn || (Xn = document.createElement("input"), Xn.readOnly = !0, Vb(Xn, "position", "absolute", "opacity", 0, "left", 0, "top", 0, "pointerEvents", "none"), se.appendChild(Xn));
            var c = Xn;
            c.value = b;
            c !== document.activeElement && c.focus();
            Yn(c);
            return new Promise(function(b, c) {
                var d = !1;
                try {
                    d = document.execCommand("copy")
                } catch (g) {
                    d = !1
                }
                window.getSelection().removeAllRanges();
                Xn.remove();
                Xn = null;
                a.focus();
                d ? b() : c()
            })
        },
        $n = function(a, b) {
            if (a) {
                var c = b ? "visible" : "hidden";
                a.classList.remove(b ?
                    "hidden" : "visible");
                a.classList.add(c)
            }
        };
    var ao = Gi.Aa(),
        bo = Ee.Aa(),
        co = [-.5, -1],
        eo = [0, 0],
        go = function() {
            J.call(this);
            this.v = PIXI.autoDetectRenderer(K.width, K.height, {
                antialias: !0,
                clearBeforeRender: !1,
                qf: "high-performance",
                preserveDrawingBuffer: !0,
                view: K
            }, !0);
            this.v.plugins.interaction.destroy();
            this.j = new PIXI.Container;
            this.R = [];
            this.H = [];
            fo(this, Te, PIXI.BLEND_MODES.SCREEN, .5, 1);
            fo(this, Ue, PIXI.BLEND_MODES.MULTIPLY, .15, 1.5);
            this.o = 0
        };
    v(go, J);
    go.prototype.Wa = function() {
        J.prototype.Wa.call(this);
        this.j.destroy(!0);
        this.v.destroy(!1)
    };
    var fo = function(a, b, c, d, e) {
            var f = b[3],
                g = b[4],
                h = document.createElement("canvas");
            h.width = f;
            h.height = g;
            var k = h.getContext("2d");
            Ce(bo, k, b);
            b = PIXI.extras.TilingSprite.from(h, Math.ceil(ne / (f * e * .5)) * f, Math.ceil(oe / (g * e * .5)) * g);
            b.blendMode = c;
            b.alpha = d;
            e /= 25;
            b.scale.set(e);
            a.R.push(f * e);
            a.H.push(g * e);
            a.j.addChild(b)
        },
        ho = function(a, b) {
            var c = a.j.children[b];
            c.tilePosition.set(25 * co[b] * a.o / 1E3, 25 * eo[b] * a.o / 1E3);
            var d = a.R[b],
                e = a.H[b];
            c.position.set(Math.floor(ao.o / d) * d, Math.floor(ao.v / e) * e)
        },
        io = function(a) {
            ho(a,
                0);
            ho(a, 1);
            a.j.scale.set(ao.j);
            a.j.position.set(Ji(ao, 0), Ki(ao, 0));
            a.v.render(a.j)
        };
    var jo = function() {
            this.o = new Map;
            this.j = new Kg
        },
        ko = function(a) {
            0 < Ag(a.j, Lg, 1).length && (a.sendMessage(a.j), a.j = new Kg)
        };
    var lo = function(a) {
        jo.call(this);
        this.v = a
    };
    v(lo, jo);
    lo.prototype.sendMessage = function(a) {
        var b = new dg;
        a = Ag(a, Lg, 1);
        0 < a.length && qg(b, 1, a, Rh);
        b = gg(b);
        this.v.send(b)
    };
    var no = function(a, b, c) {
            if (!mo) return b;
            try {
                var d = window.sessionStorage.getItem(a)
            } catch (e) {
                return b
            }
            if (null == d) return b;
            a = JSON.parse(d);
            return c && !c(a) ? b : a
        },
        oo = function(a, b, c) {
            if (mo && (!c || c(b))) try {
                window.sessionStorage.setItem(a, JSON.stringify(b))
            } catch (d) {}
        },
        po;
    try {
        po = !!self.sessionStorage
    } catch (a) {
        po = !1
    }
    var mo = po;
    var qo = function() {
        var a = no("ghostly.client.match_config", null);
        if (!a) return null;
        var b = a.timestamp;
        return !b || 15E4 < Ka() - b ? (oo("ghostly.client.match_config", null), null) : a.url ? a : null
    };
    var ro = function(a) {
            this.H = a;
            this.o = this.j = null
        },
        zo = function(a, b, c) {
            return new Promise(function(d, e) {
                var f = b ? null : qo();
                f && (b = f.url);
                a.j = new WebSocket(b, "candle");
                a.j.binaryType = "arraybuffer";
                a.o = new lo(a.j);
                a.v = !1;
                a.j.addEventListener("open", function() {
                    zn(11);
                    var b = new Mg;
                    f ? (W(b, 1, f.match), W(b, 2, f.player), W(b, 3, f.nonce)) : c && W(b, 1, c);
                    var d = new Lg;
                    W(d, 1, 1);
                    Bg(d, 4, b);
                    a.sendMessage(d);
                    ko(a.o)
                });
                a.j.addEventListener("error", function() {
                    b && xn(110)
                });
                a.j.addEventListener("close", function() {
                    a.v || (b && so(g),
                        e("Failed to connect to game server."))
                });
                var g = a.H;
                a.j.addEventListener("message", function(c) {
                    c = new Uf(c.data);
                    for (var e = new Kg; O(c) && !N(c);) switch (c.j) {
                        case 1:
                            var f = new Lg;
                            R(c, f, Eh);
                            Eg(e, 1, f, Lg);
                            break;
                        default:
                            Q(c)
                    }
                    c = p(Ag(e, Lg, 1));
                    for (e = c.next(); !e.done; e = c.next()) switch (e = e.value, e.Ka()) {
                        case 2:
                            e = X(e, Ng, 5);
                            f = U(e, 1);
                            var h = g.j;
                            to(h.j, f);
                            h.j.j.ab();
                            oo("ghostly.client.match_config", {
                                url: b,
                                player: f,
                                match: U(e, 2),
                                nonce: U(e, 3),
                                timestamp: Ka()
                            });
                            U(e, 4);
                            zn(12);
                            b || xn(112);
                            d();
                            break;
                        case 5:
                            e = X(e, Og, 8);
                            f = g.j;
                            f.rb = U(e, 1);
                            f.Gb || (zn(14), f.Gb = !0);
                            break;
                        case 4:
                            e = replaceConfig(e)
                            uo(g, X(e, Qg, 7));
                            break;
                        case 8:
                            U(X(e, Sg, 11), 7) && (a.v = !0);
                            f = X(e, Sg, 11);
                            e = g.j;
                            U(f, 6) && !e.R && (vo(e.Da), e.R = !0, zn(15));
                            e.H = 1E3 * U(f, 3);
                            e.$a = U(f, 4);
                            e.nb = U(f, 5);
                            U(f, 7) && !e.Lb && (zn(16), e.Lb = !0, e.Vb = U(f, 8), e.kb = Ag(f, Tg, 10), e.Bb());
                            break;
                        case 6:
                            e = X(e, Ug, 9);
                            wo(g.j, e);
                            break;
                        case 7:
                            e = X(e, Vg, 10);
                            rm(g.j.j, U(e, 1)).jd();
                            break;
                        case 10:
                            e = X(e, ah, 13);
                            xo(g.j.j, e);
                            break;
                        case 9:
                            e = X(e, lh, 12);
                            rm(g.j.j, U(e, 1)).S = e;
                            break;
                        case 11:
                            e = X(e, mh, 14);
                            (f = rm(g.j.j, U(e, 1))) ? f.fe(e): U(e, 1);
                            break;
                        case 12:
                            e = X(e, qh, 15);
                            yo(g.j, Ag(e, oh, 1));
                            break;
                        case 15:
                            xn(111), oo("ghostly.client.match_config", null)
                    }
                })
            })
        };
    ro.prototype.sendMessage = function(a) {
        var b = this.o;
        if (U(a, 3)) Eg(b.j, 1, a, Lg);
        else {
            var c = "" + a.Ka();
            U(a, 2) && (c += "_" + U(a, 2));
            var d = b.o.get(c);
            a == d || a && d && a instanceof d.constructor && Hg(a.toArray(), d.toArray()) || (b.o.set(c, a), Eg(b.j, 1, a, Lg))
        }
    };
    var Ao = function(a) {
        this.j = a
    };
    Ao.prototype.o = function(a) {
        this.j.sendMessage(a)
    };
    Ao.prototype.v = function(a) {
        this.j.sendMessage(a)
    };
    Ao.prototype.H = function() {
        ko(this.j.o)
    };
    var Bo = function() {
        this.j = void 0
    };
    v(Bo, Ao);
    Bo.prototype.o = function() {};
    Bo.prototype.v = function() {};
    Bo.prototype.H = function() {};
    var Go = function() {
            this.o = Cb(window.location.href).j.get("doodle");
            var a = Co();
            a = Do(a) && U(a, 3) == this.o ? a : null;
            a || (a = Eo(this), a || (a = new Sm, W(a, 1, 1)));
            this.j = a;
            Fo(this)
        },
        Do = function(a) {
            if (!a) return !1;
            switch (V(a, 1, 1)) {
                case 1:
                    return !0;
                case 2:
                case 3:
                    if ((a = X(a, ym, 2)) && Gn(V(a, 1, "") || "") && V(a, 4, "")) return !0
            }
            return !1
        },
        Co = function() {
            var a = no("ghostly.client.replay", null);
            if (!a) return null;
            try {
                var b = new Sm(a ? JSON.parse(a) : null)
            } catch (c) {
                return null
            }
            return Do(b) ? b : null
        },
        Eo = function(a) {
            if (!a.o) return null;
            var b =
                a.o.indexOf("_");
            if (0 > b) return null;
            a = a.o.substr(b + 1);
            if (!a) return null;
            try {
                var c = Nf(a),
                    d = new Uf(c),
                    e = new ym;
                var f = Gm(e, d)
            } catch (g) {
                return null
            }
            c = new Sm;
            W(c, 1, 2);
            Bg(c, 2, f);
            return Do(c) ? c : null
        },
        Fo = function(a) {
            W(a.j, 3, a.o);
            oo("ghostly.client.replay", a.j.S());
            yn("d3", V(a.j, 1, 1))
        };
    Go.prototype.set = function(a, b) {
        W(this.j, 1, a);
        Bg(this.j, 2, b);
        Fo(this)
    };
    var Io = function() {
        var a = Ho,
            b = new ym,
            c = V(X(a.j, ym, 2), 1, "");
        xg(b, 1, c);
        a = V(X(a.j, ym, 2), 4, "");
        xg(b, 4, a);
        a = new dg;
        Hm(b, a);
        b = gg(a);
        b = Lf(b, !0);
        a = Cb("http://192.168.0.166");
        a.j.set("doodle", "73509581_" + b);
        return a.toString()
    };
    Aa(Go);
    var Jo = function() {
        var a = void 0 === a ? 52 : a;
        var b = document.createElement("canvas");
        b.width = a;
        b.height = a;
        var c = b.getContext("2d");
        c.fillStyle = "rgba(255,255,255,.3)";
        c.arc(a / 2, a / 2, a / 2, 0, 2 * Math.PI);
        c.fill();
        c.strokeStyle = "#fff";
        c.lineWidth = a / 52 * 3.5;
        var d = a / 52 * 2;
        c.beginPath();
        c.moveTo(a / 4 + d, a / 4 + d);
        c.lineTo(3 * a / 4 - d, 3 * a / 4 - d);
        c.stroke();
        c.beginPath();
        c.moveTo(3 * a / 4 - d, a / 4 + d);
        c.lineTo(a / 4 + d, 3 * a / 4 - d);
        c.stroke();
        return b
    };
    var Ko = Ee.Aa(),
        Lo = Gi.Aa(),
        No = function(a, b, c, d, e, f, g, h, k, l) {
            l = void 0 === l ? Ko : l;
            b = Ji(Lo, b);
            c = Ki(Lo, c);
            Mo(a, b, c, Lo.j * d, void 0 === e ? 0 : e, void 0 === f ? !1 : f, void 0 === g ? 1 : g, void 0 === h ? 1 : h, k, l)
        },
        Mo = function(a, b, c, d, e, f, g, h, k, l) {
            e = void 0 === e ? 0 : e;
            f = void 0 === f ? !1 : f;
            g = void 0 === g ? 1 : g;
            h = void 0 === h ? 1 : h;
            l = void 0 === l ? Ko : l;
            te.save();
            void 0 !== k && (te.globalAlpha = k);
            te.translate(b, c);
            te.scale(g, h);
            f && te.rotate(e);
            b = a[3] / (a[5] || 1);
            c = a[4] / (a[5] || 1);
            void 0 !== d && (d /= c, te.scale(d, d));
            !f && 0 > Math.cos(e) && te.scale(-1, 1);
            l.draw(a,
                te, -(b / 2), -(c / 2));
            te.restore()
        },
        Oo = function(a, b, c, d, e, f) {
            if (!a) return 0;
            e = Un(a, e, f);
            Ko.draw(a, b, c, d, e, !0);
            return e
        },
        Po = function(a, b, c, d) {
            a = Ji(Lo, a);
            b = Ki(Lo, b);
            c *= Lo.j;
            d && (te.fillStyle = d);
            te.beginPath();
            te.arc(a, b, c, 0, 2 * Math.PI);
            d ? te.fill() : te.stroke()
        },
        Qo = function(a, b, c, d, e, f, g) {
            b = Ji(Lo, b);
            c = Ki(Lo, c);
            te.save();
            te.translate(b, c);
            va(f) && te.rotate(f);
            va(g) && te.scale(g, g);
            va(e) && (te.strokeStyle = e, te.strokeText(a, 0, 0));
            va(d) && (te.fillStyle = d, te.fillText(a, 0, 0));
            te.restore()
        },
        Ro = function(a) {
            a.save();
            a.setTransform(1,
                0, 0, 1, 0, 0);
            a.fillStyle = "rgba(0,0,0,0.6)";
            a.fillRect(0, 0, a.canvas.width, a.canvas.height);
            a.restore()
        };
    Ee.Aa();
    var So = function(a) {
        this.o = a;
        this.T = 0;
        this.S = !0;
        this.R = 0;
        this.H = this.U = !0;
        this.v = 0;
        this.j = new F(0, 0);
        this.hb = 1
    };
    So.prototype.Ga = function(a, b) {
        this.j.x = a;
        this.j.y = b
    };
    So.prototype.Db = function() {
        return this.j
    };
    var To = function(a, b) {
            a.S && 1 != a.o.length + a.v && (a.U || a.T != a.o.length + a.v + a.v - 1) && (a.R += b, a.T = Math.floor(a.R % (1E3 / 24 * (a.o.length + a.v)) / 1E3 * 24) % (a.o.length + a.v))
        },
        Vo = function(a, b, c, d, e, f, g, h, k) {
            b = void 0 === b ? 0 : b;
            c = void 0 === c ? 0 : c;
            e = void 0 === e ? 0 : e;
            f = void 0 === f ? !1 : f;
            g = void 0 === g ? 1 : g;
            k = void 0 !== k ? k : a.hb;
            var l = Uo(a);
            h = void 0 !== h ? h : g;
            a.H && void 0 !== d ? No(l, b + a.j.x, c + a.j.y, d, e, f, g, h, k) : Mo(l, b + a.j.x, c + a.j.y, d, e, f, g, h, k)
        },
        Uo = function(a) {
            return a.o[Math.min(a.o.length - 1, a.T)]
        };
    So.prototype.play = function() {
        this.S || (this.R = 0, this.S = !0)
    };
    var Wo = function(a, b) {
        a.o = b;
        a.T = 0;
        a.R = 0
    };
    var Xo = Ee.Aa(),
        Yo = function() {
            this.j = new So(zf);
            this.o = 1
        };
    var Zo = function() {
        for (var a = Array(256), b = 0; b < a.length; ++b) a[b] = b;
        for (b = a.length - 1; 0 < b; --b) {
            var c = Math.floor(Math.random() * a.length),
                d = a[b];
            a[b] = a[c];
            a[c] = d
        }
        this.j = a.concat(a)
    };
    Aa(Zo);
    var $o = function(a) {
            return a * a * a * (a * (6 * a - 15) + 10)
        },
        ap = function(a, b, c, d) {
            a &= 15;
            var e = 8 > a ? b : c;
            b = 4 > a ? c : 12 == a || 14 == a ? b : d;
            return (0 == (a & 1) ? e : -e) + (0 == (a & 2) ? b : -b)
        };
    var bp = function(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        Pk.call(this, a, b, c, d, e);
        var f = this;
        this.S = new Yo;
        this.U = 0;
        this.wa = 1;
        this.W = new Kc([new H(new G({
            opacity: 0
        }, {
            opacity: 1
        }, 242, vc), function(a) {
            f.U = a.opacity
        }), new Ic(function() {
            f.W = null
        })]);
        this.o = null;
        this.R = {
            x: 0,
            y: 0
        };
        this.ta = e;
        this.T = {
            radius: 7,
            ke: 0,
            ud: 1,
            Hd: 1E3 * Math.random(),
            Yd: !1,
            visible: !0
        }
    };
    v(bp, Pk);
    n = bp.prototype;
    n.jd = function() {
        var a = this;
        this.o = new Lc([new H(new G({
            opacity: 1
        }, {
            opacity: 0
        }, 750, wc), function(b) {
            a.U = b.opacity
        }), new H(new G({
            De: 1
        }, {
            De: 5
        }, 2E3, wc), function(b) {
            a.wa = b.De
        })])
    };
    n.Ce = function() {
        return this.o && this.o.Eb()
    };
    n.Qc = function(a) {
        this.o ? Hc(this.o, a) : this.W && Hc(this.W, a);
        var b = this.S,
            c = U(this.Zb, 1);
        if (b.o != c) {
            b.o = c;
            switch (c) {
                case 2:
                    Wo(b.j, xf);
                    break;
                case 3:
                    Wo(b.j, yf);
                    break;
                default:
                    Wo(b.j, zf)
            }
            b.j.play()
        }
        To(this.S.j, a)
    };
    n.Pc = function() {
        this.Gd() && No(Uo(this.S.j), this.Ha.x, this.Ha.y, 2, this.H, !1, 1, 1, this.U, Xo)
    };
    n.ee = function(a) {
        var b = this.vc;
        Pk.prototype.ee.call(this, a);
        (a = this.vc) && a.mb && (!b || !b.mb) && a.mb && a.W - a.Sc >= re && (me.Qd.play(), a.Sc = a.W)
    };
    n.Kc = function(a) {
        Pk.prototype.Kc.call(this, a);
        a && a.mb && me.Qd.play()
    };
    n.Md = function(a, b) {
        this.ta ? Pk.prototype.Md.call(this, a, b) : (this.R.x = this.hd() * (a.Ha.x - this.Ha.x), this.R.y = this.hd() * (a.Ha.y - this.Ha.y), this.H = a.H)
    };
    n.zc = function() {
        this.ta ? Pk.prototype.zc.call(this) : (this.Ha.x += 16 * this.R.x / 1E3, this.Ha.y += 16 * this.R.y / 1E3)
    };
    n.fe = function(a) {
        this.ta ? Pk.prototype.fe.call(this, a) : U(a, 6) && (this.Ha.x = +U(a, 2), this.Ha.y = +U(a, 3))
    };
    n.hd = function() {
        return this.wa * Pk.prototype.hd.call(this)
    };
    n.Xd = function() {
        this.T.ud = 2 == U(this.Zb, 1) ? 1 : 2;
        this.T.visible = 2 == U(this.Zb, 1) || 3 == U(this.Zb, 1);
        return this.T
    };
    var cp = function(a) {
            this.o = this.j = 0;
            this.v = a
        },
        ep = function(a, b, c) {
            a.v().then(function(a) {
                return b(a)
            }, function() {
                dp(a, b, c)
            })
        };
    cp.prototype.connect = function() {
        var a = this;
        return new Promise(function(b, c) {
            a.j = Ka();
            a.o = 0;
            ep(a, b, c)
        })
    };
    var dp = function(a, b, c) {
        if (5 > a.o) {
            var d = Math.max(3E3 - (Ka() - a.j), 0);
            window.setTimeout(function() {
                a.o++;
                a.j = Ka();
                ep(a, b, c)
            }, d)
        } else c("Cannot connect to server, giving up.")
    };
    var fp = function() {};
    var hp = function(a, b, c, d, e, f, g, h) {
            var k = a.font;
            h = h || "";
            a.font = h + " " + d + "px " + c;
            for (var l = gp(a, b, f); l.length > g && d > e;) d = Math.max(e, 1 < d ? d - 1 : d - .1), a.font = h + " " + d + "px " + c, l = gp(a, b, f);
            for (b = 0; b < l.length; b++)
                for (; a.measureText(l[b]).width > f && d > e;) d = Math.max(e, 1 < d ? d - 1 : d - .1), a.font = h + " " + d + "px " + c;
            a.font = k;
            return {
                lines: l,
                fontFamily: c,
                fontSize: d,
                fontStyle: h
            }
        },
        gp = function(a, b, c) {
            b = b.match(/[^\s-]+-?/g);
            if (!b || 1 > b.length) return [""];
            for (var d = b[0], e = [], f = 1; f < b.length; f++) {
                var g = d + ("-" == d[d.length - 1] ? "" : " ") + b[f];
                a.measureText(g).width > c ? (e.push(d), d = b[f]) : d = g
            }
            e.push(d);
            return e
        },
        ip = function(a, b, c, d, e, f) {
            var g = a.font;
            a.font = b.fontStyle + " " + b.fontSize + "px " + b.fontFamily;
            for (var h = 0; h < b.lines.length; h++) a.fillText(b.lines[h], c, d + h * e), f && a.strokeText(b.lines[h], c, d + h * e);
            a.font = g
        };
    var jp = function(a, b, c) {
        this.text = a;
        this.Ca = b;
        this.Da = c;
        this.va = 1
    };
    v(jp, fp);
    jp.prototype.v = function() {
        return -1
    };
    jp.prototype.cancel = function() {};
    jp.prototype.vb = function(a) {
        this.va = a.offsetX
    };
    jp.prototype.H = function(a) {
        Ee.Aa();
        var b = Pe[3];
        Ee.Aa();
        var c = this.T();
        Ee.Aa();
        var d = c[3];
        Ee.Aa();
        var e = c[4];
        var f = this.Ca - b / 2;
        f += this.va * f;
        var g = this.Da;
        a.save();
        Oo(Pe, a, f + b / 2, g);
        Oo(c, a, f, g, d / 2, e / 2);
        a.textAlign = "center";
        a.textBaseline = "middle";
        a.fillStyle = "#000";
        c = hp(a, this.text, we, 24, 16, b - d / 4, 2);
        d = 1.25 * c.fontSize;
        ip(a, c, f + b / 2 + 20, g - c.lines.length * d / 2 + d / 2, d);
        a.restore()
    };
    var lp = function(a, b, c, d) {
        jp.call(this, a, c, d);
        this.j = kp(this, b)
    };
    v(lp, jp);
    lp.prototype.kd = function() {
        return this.j.Eb()
    };
    lp.prototype.ld = function(a) {
        Hc(this.j, a)
    };
    var op = function(a, b, c) {
        jp.call(this, a, b, c);
        this.W = mp(this);
        this.U = np(this);
        this.R = !1
    };
    v(op, jp);
    op.prototype.kd = function() {
        return this.U.Eb()
    };
    op.prototype.ld = function(a) {
        this.W.Eb() ? this.R && !this.U.Eb() && Hc(this.U, a) : Hc(this.W, a)
    };
    var pp = function(a, b, c, d, e) {
        this.T = a;
        this.U = b;
        this.S = c;
        this.R = d;
        this.H = e;
        this.v = new oj;
        this.v.type = 0;
        this.v.position.set(a, b);
        this.o = new Yj;
        this.o.W = .1;
        this.o.v = 1E3;
        this.o.j = Lk(c, d);
        this.o.filter.o = 256;
        this.o.filter.j = 1
    };
    pp.prototype.close = function() {
        this.j || (this.j = lk(this.H, this.v), this.j.Bb = this, hk(this.j, this.o))
    };
    Ee.Aa();
    var rp = function() {
        this.j = new qp;
        this.v = !1;
        this.o = 1
    };
    rp.prototype.reset = function() {
        this.j.reset();
        this.v = !1
    };
    var sp = sc(.39, .575, .565, 1),
        qp = function() {
            this.j = {
                x: 0,
                y: 0
            };
            this.o = {
                x: 0,
                y: 0
            };
            this.v = Y(0, 0);
            this.H = 0;
            this.R = !1
        };
    qp.prototype.reset = function() {
        this.j = {
            x: 0,
            y: 0
        };
        this.o = {
            x: 0,
            y: 0
        };
        this.v = Y(0, 0);
        this.H = 0;
        this.R = !1
    };

    function tp(a) {
        var b = K.getBoundingClientRect();
        return window.innerHeight > window.innerWidth ? {
            x: a.clientX - b.left,
            y: a.clientY - b.top
        } : {
            x: a.clientY - b.top,
            y: b.left - a.clientX
        }
    };
    var up = function() {};
    up.prototype.re = function() {
        return !0
    };
    var yp = function(a, b, c) {
        J.call(this);
        this.U = a;
        this.wa = b;
        this.Da = c;
        this.T = Ka();
        this.W = bc(document, "hidden");
        this.o = (this.S = bc(document, "visibilityState")) ? this.S.replace(/state$/i, "change").toLowerCase() : null;
        this.v = vp(this);
        this.H = !1;
        this.j = this.v;
        wp(this);
        xp(this)
    };
    v(yp, J);
    var wp = function(a) {
            a.o ? zp(a) : Pb && Ap(a, function() {
                zp(a)
            })
        },
        zp = function(a) {
            a.Rc = function() {
                a.v = vp(a);
                a.v ? Bp(a) : Cp(a)
            };
            var b = window.agsa_ext;
            a.o ? document.addEventListener(a.o, a.Rc, !1) : b && b.registerPageVisibilityListener && (google.doodle || (google.doodle = {}), google.doodle.pvc = function() {
                this.Rc && this.Rc()
            }, b.registerPageVisibilityListener("google.doodle.pvc();"))
        },
        Ap = function(a, b) {
            window.agsa_ext ? b() : a.ta = window.setTimeout(function() {
                wp(a)
            }, 100)
        };
    yp.prototype.Wa = function() {
        window.clearTimeout(this.R);
        window.clearTimeout(this.ta);
        this.Rc && (this.o && document.removeEventListener ? document.removeEventListener(this.o, this.Rc, !1) : window.agsa_ext && window.agsa_ext.registerPageVisibilityListener && (this.Rc = null));
        J.prototype.Wa.call(this)
    };
    var vp = function(a) {
            if (!a.W && !a.S && window.agsa_ext && window.agsa_ext.getPageVisibility) return "hidden" == window.agsa_ext.getPageVisibility();
            var b = document[a.S];
            return document[a.W] || "hidden" == b
        },
        Bp = function(a) {
            var b = a.v || a.H;
            a.j && !b ? (a.j = !1, a.Da(), xp(a)) : !a.j && b && (a.j = !0, a.wa())
        };
    yp.prototype.xc = function() {
        return !this.j
    };
    var xp = function(a) {
            a.R && window.clearTimeout(a.R);
            var b = Math.max(100, a.U - Dp(a));
            a.R = window.setTimeout(function() {
                a.R = null;
                a.H = Dp(a) >= a.U;
                a.H || xp(a);
                Bp(a)
            }, b)
        },
        Dp = function(a) {
            return Ka() - a.T
        },
        Cp = function(a) {
            a.T = Ka();
            a.H = !1;
            Bp(a)
        };
    var Ep = function(a, b) {
            this.H = a;
            this.ta = void 0 === b ? null : b;
            this.o = [];
            this.j = null;
            this.S = this.R = 0;
            this.wa = this.T = !1;
            this.U = [];
            this.Ca = this.H.width / this.H.clientWidth;
            this.W = this.H.height / this.H.clientHeight;
            this.Da = [this.H];
            this.va = !1
        },
        Fp = function(a, b) {
            a.Ca = a.H.width / a.H.clientWidth;
            a.W = a.H.height / a.H.clientHeight;
            void 0 !== b && (a.va = b)
        },
        Hp = function(a, b, c) {
            a.o.push(new Gp(b, c))
        },
        Kp = function(a, b) {
            for (var c = a.o.length - 1; 0 <= c; c--) a.o[c].o === b && a.o.splice(c, 1);
            a.j && b === a.j.o && (a.j = null, Ip(a));
            a.v && b === a.v.o &&
                (a.v = null);
            Jp(a, "areamove", a.R, a.S)
        },
        Lp = function(a, b) {
            for (var c = null, d = 0; d < a.o.length; d++) a.o[d].o === b && (c = a.o[d]);
            c && (Sa(a.o, c), a.o.unshift(c))
        },
        Mp = function(a, b, c) {
            c = (b = (b = b.j) || window.event) ? (c = c || b.targetTouches && b.targetTouches[0] || b.changedTouches && b.changedTouches[0]) && void 0 !== c.pageX ? [c.pageX, c.pageY] : void 0 !== b.clientX ? [b.clientX + ("rtl" == document.dir ? -1 : 1) * (document.body.scrollLeft || document.documentElement.scrollLeft || 0), b.clientY + (document.body.scrollTop || document.documentElement.scrollTop ||
                0)] : void 0 !== b.pageX ? [b.pageX, b.pageY] : [0, 0] : [0, 0];
            b = a.H;
            var d = 0,
                e = 0;
            if (b) {
                do d += b.offsetLeft, e += b.offsetTop; while (b = b.offsetParent)
            }
            b = [d, e];
            c = [c[0] - b[0], c[1] - b[1]];
            c[0] *= a.Ca;
            c[1] *= a.W;
            a.va && (a = c[0], c[0] = c[1], c[1] = 0 - a);
            return c
        };
    Ep.prototype.handleEvent = function(a) {
        var b = Mp(this, a),
            c = b[0];
        b = b[1];
        this.ta && Cp(this.ta);
        this.R = c;
        this.S = b;
        c = a.type;
        this.wa && 0 == c.indexOf("mouse") || (b = {
            touchstart: "mousedown",
            touchend: "mouseup",
            touchmove: "mousemove"
        }, c in b && (this.wa = !0, c = b[c]), "mousedown" == c && a.preventDefault(), Jp(this, c, this.R, this.S))
    };
    var Jp = function(a, b, c, d) {
            if (!a.T && "mousedown" == b) {
                a.T = !0;
                for (var e = 0; e < a.U.length; e++) a.U[e]()
            }
            if ("mousedown" == b) {
                if (!a.v)
                    for (b = 0; b < a.o.length; b++)
                        if (e = a.o[b], e.o.contains(c, d)) {
                            a.v = e;
                            e.j("mousedown", c, d);
                            break
                        }
            } else if ("mouseup" == b) a.v ? (a.v.j("mouseup", c, d), a.v = null) : a.j && a.j.j("mouseup", c, d);
            else if ("mousemove" == b || "areamove" == b) {
                e = null;
                for (var f = 0; f < a.o.length; f++) {
                    var g = a.o[f];
                    if (g.o.contains(c, d)) {
                        e = g;
                        break
                    }
                }
                a.j != e && (a.j && a.j.j("mouseout", c, d), e && e.j("mouseover", c, d), a.j = e);
                if ("mousemove" == b)
                    for (a.v &&
                        a.v.j("mousemove", c, d), b = 0; b < a.o.length; b++) e = a.o[b], e != a.v && e.o.contains(c, d) && e.j("mousemove", c, d)
            } else "mouseout" == b ? (a.j && a.j.j("mouseout", c, d), a.v = null, a.j = null) : "contextmenu" == b && a.j && a.j.j("contextmenu", c, d);
            Ip(a)
        },
        Ip = function(a) {
            for (var b = a.j && a.j.o.re() ? "pointer" : "default", c = 0, d; d = a.Da[c]; c++) Vb(d, "cursor", b)
        },
        Gp = function(a, b) {
            this.o = a;
            this.j = b
        },
        Np = function() {
            var a = new up;
            a.contains = function() {
                return !0
            };
            a.re = function() {
                return !1
            };
            return a
        }();
    var Op = function(a, b) {
        this.v = a;
        this.R = b;
        this.o = {};
        this.j = document.getElementsByTagName("input")
    };
    Op.prototype.handleEvent = function(a) {
        var b;
        if (b = a && a.R && this.R(a) && !a.ctrlKey && !a.metaKey && !a.altKey) {
            a: {
                for (b = 0; b < this.j.length; b++)
                    if ("q" == this.j[b].name) {
                        b = this.j[b];
                        break a
                    } b = null
            }
            b = !(b && b == document.activeElement)
        }
        if (b && (!document.activeElement || !document.activeElement.tagName || "textarea" != document.activeElement.tagName.toLowerCase())) {
            this.H && Cp(this.H);
            b = a.j;
            var c = b.keyCode;
            c && ("keydown" == a.type ? this.o[c] || (this.v(a), this.o[c] = !0) : "keyup" == a.type && (this.v(a), this.o[c] = !1), b.preventDefault &&
                b.preventDefault(), b.stopPropagation && b.stopPropagation())
        }
    };
    var Qp = function(a, b, c) {
            this.H = a;
            this.S = b;
            this.o = new Map;
            this.U = [];
            this.R = Y(0, 0);
            this.T = 1;
            this.j = this.va = this.v = this.W = !1;
            E ? (Id(K, "touchstart", this.Ca, void 0, this), Id(K, "touchmove", this.wa, void 0, this), Id(K, "touchend", this.ta, void 0, this)) : Pp(this, c)
        },
        Rp = function() {
            document.activeElement && document.activeElement.blur();
            a: {
                var a = document.getElementsByTagName("INPUT");
                for (var b = 0, c; c = a[b++];)
                    if ("q" == c.name) {
                        a = c;
                        break a
                    } a = null
            }
            a && a.setAttribute("data-saf", !0)
        },
        Sp = function(a) {
            a.o.clear();
            a.U = [];
            a.R = Y(0,
                0);
            a.T = 1;
            a.W = !1;
            a.v = !1;
            a.va = !1
        },
        vo = function(a) {
            Sp(a);
            a.j = !0;
            document.activeElement && document.activeElement.blur()
        },
        Tp = function(a) {
            a.j = !1;
            Sp(a)
        },
        Pp = function(a, b) {
            Hp(a.H, Np, function(b, c, f) {
                switch (b) {
                    case "mousedown":
                        window != window.parent && window.focus();
                        a.j && (a.v = !0, Up(a, c, f));
                        break;
                    case "mousemove":
                        Up(a, c, f);
                        break;
                    case "mouseup":
                        Vp(a)
                }
            });
            var c = new Op(function(b) {
                if ("keydown" == b.type) {
                    if (a.j) {
                        a.o.set(b.H, !0);
                        Wp(a);
                        var c = Gi.Aa();
                        b = b.H;
                        192 == b ? (c.R && (c.S = !c.S), c.R = !0) : c.R = !1;
                        c.S && (c = c.T[b]) && c()
                    }
                } else "keyup" ==
                    b.type && Xp(a, b)
            }, function(a) {
                return !!a.H && ue[a.H]
            });
            c.H = b;
            Id(document, ["keydown", "keyup", "keypress"], function(a) {
                return c.handleEvent(a)
            }, !0)
        },
        Xp = function(a, b) {
            a.j && a.U.push(function() {
                a.o.set(b.H, !1);
                Wp(a)
            })
        },
        Wp = function(a) {
            var b = Y(0, 0);
            (a.o.get(37) || a.o.get(65)) && b.x--;
            (a.o.get(39) || a.o.get(68)) && b.x++;
            (a.o.get(38) || a.o.get(87)) && b.y--;
            (a.o.get(40) || a.o.get(83)) && b.y++;
            a.W = b.x || b.y;
            a.R = b;
            a.T = a.W ? 1 : 0
        },
        Up = function(a, b, c) {
            a.j && a.v && (a.R = Y(b - K.width / 2, c - K.height / 2), a.T = Ui(a.R) ? 1 : 0)
        },
        Vp = function(a) {
            a.j &&
                a.U.push(function() {
                    a.R = Y(0, 0);
                    a.v = !1;
                    a.T = 0
                })
        },
        Yp = function(a, b) {
            var c = b.j.changedTouches[0];
            if (!c) return null;
            c = Mp(a.H, b, c);
            return {
                x: c[0],
                y: c[1]
            }
        };
    Qp.prototype.Ca = function(a) {
        if (this.j && Yp(this, a)) {
            var b = this.S;
            b.v = !0;
            b = b.j;
            b.j = tp(a);
            b.o = b.j;
            this.v = b.R = !0
        }
    };
    Qp.prototype.wa = function(a) {
        if (this.j && Yp(this, a) && this.v) {
            var b = this.S;
            b.v && (b = b.j, b.o = tp(a), b.v = Y(b.o.x - b.j.x, b.o.y - b.j.y), b.H = sp(Math.min(1, Ui(b.v) / 5256.25)));
            this.R = this.S.j.v;
            this.T = this.S.j.H
        }
    };
    Qp.prototype.ta = function(a) {
        var b = this;
        this.j && Yp(this, a) && this.U.push(function() {
            var a = b.S,
                d = a.j;
            d.j = {
                x: 0,
                y: 0
            };
            d.o = {
                x: 0,
                y: 0
            };
            d.H = 0;
            d.R = !1;
            a.v = !1;
            b.R = Y(0, 0);
            b.T = 0;
            b.v = !1
        })
    };
    var Zp = Ee.Aa(),
        $p = function() {
            this.j = new So(Cf);
            this.o = 1
        };
    var aq = function(a, b, c, d) {
        Qk.call(this, a, b, c);
        a = new oj;
        a.type = 2;
        a.position.set(this.Ha.x, this.Ha.y);
        a.angle = 0;
        a.j = 1;
        this.j = lk(d.T, a);
        this.j.Gb = this;
        d = new Yj;
        d.v = 1;
        d.W = 1;
        d.j = new Rk(Math.sqrt(3));
        d.filter.o = 32;
        d.filter.j = 1035;
        hk(this.j, d)
    };
    v(aq, Qk);
    aq.prototype.Qc = function() {};
    var bq = function(a, b, c, d) {
        aq.call(this, a, b, c, d);
        var e = this;
        this.o = new $p;
        this.T = new gh;
        this.U = null;
        this.W = 0;
        this.R = new Kc([new H(new G({
            opacity: 0
        }, {
            opacity: 1
        }, 242, vc), function(a) {
            e.W = a.opacity
        }), new Ic(function() {
            e.R = null
        })])
    };
    v(bq, aq);
    bq.prototype.Qc = function(a) {
        this.U ? Hc(this.U, a) : this.R && Hc(this.R, a);
        var b = this.o,
            c = U(this.T, 1);
        if (b.o != c) {
            b.o = c;
            switch (c) {
                case 3:
                    Wo(b.j, Df);
                    break;
                case 4:
                    Wo(b.j, Ef);
                    break;
                default:
                    Wo(b.j, Cf)
            }
            b.j.play()
        }
        To(this.o.j, a)
    };
    bq.prototype.Pc = function() {
        No(Uo(this.o.j), this.Ha.x, this.Ha.y, 3, this.H, !1, 1, 1, this.W, Zp)
    };
    bq.prototype.jd = function() {
        var a = this;
        ok(this.j);
        W(this.T, 1, 4);
        this.U = new Kc([new Jc(1E3 * (Ef.length - 1) / 24), new Ic(function() {
            aq.prototype.jd.call(a)
        })])
    };
    var cq = function(a, b, c, d, e) {
        lp.call(this, b, c, d, e);
        this.o = a
    };
    v(cq, lp);
    var kp = function(a, b) {
        return new Kc([new H(new G({
            offsetX: 1
        }, {
            offsetX: 0
        }, 500, xc), function(b) {
            return a.vb(b)
        }), new H(new G({
            offsetX: 0
        }, {
            offsetX: 0
        }, b, vc), function(b) {
            return a.vb(b)
        }), new H(new G({
            offsetX: -.1
        }, {
            offsetX: 1
        }, 500, zc), function(b) {
            return a.vb(b)
        })])
    };
    cq.prototype.T = function() {
        return 1 == this.o ? lf : null
    };
    var dq = function(a, b) {
        this.text = a;
        this.scale = 0;
        this.j = this.ye(b)
    };
    v(dq, fp);
    n = dq.prototype;
    n.cancel = function() {};
    n.ye = function(a) {
        var b = this;
        return new Kc([new H(new G({
            scale: 0
        }, {
            scale: 1
        }, 218, vc), function(a) {
            return b.vb(a)
        }), new Jc(a), new H(new G({
            scale: 1
        }, {
            scale: 0
        }, 218, wc), function(a) {
            return b.vb(a)
        })])
    };
    n.kd = function() {
        return this.j.Eb()
    };
    n.ld = function(a) {
        Hc(this.j, a)
    };
    n.vb = function(a) {
        this.scale = a.scale
    };
    var eq = function(a, b) {
        dq.call(this, a, b)
    };
    v(eq, dq);
    eq.prototype.v = function() {
        return 4
    };
    eq.prototype.H = function(a, b, c) {
        b = void 0 === b ? 0 : b;
        c = void 0 === c ? 0 : c;
        a.save();
        a.fillStyle = "#000";
        a.textAlign = "center";
        a.font = "48px " + we;
        a.lineWidth = 4;
        Qo(this.text, b, c - 2, "#4B1", "#BF5", 0, this.scale);
        a.restore()
    };
    var fq = function(a, b, c, d) {
        dq.call(this, a, b);
        this.o = c;
        this.R = d
    };
    v(fq, dq);
    fq.prototype.v = function() {
        return 5
    };
    fq.prototype.ye = function(a) {
        var b = this;
        return new Kc([new H(new G({
            scale: 0
        }, {
            scale: 1
        }, 218, vc), function(a) {
            return b.vb(a)
        }), new Jc(a), new H(new G({
            scale: 1
        }, {
            scale: 2
        }, 128, wc), function(a) {
            return b.vb(a)
        })])
    };
    fq.prototype.H = function(a) {
        a.save();
        a.translate(this.o, this.R);
        a.scale(this.scale, this.scale);
        a.textAlign = "center";
        a.font = "60px " + we;
        a.fillStyle = "#700";
        a.fillText(this.text, 0, 0);
        a.strokeStyle = "#F93";
        a.strokeText(this.text, 0, 0);
        a.restore()
    };
    var gq = Gi.Aa(),
        hq = function(a) {
            var b = this;
            this.v = a;
            this.o = "idle";
            this.j = new So(zi(this.v, this.o));
            this.j.play();
            this.H = Ci(this.v, function(a) {
                b.j.Ga(0, a.y / gq.j)
            })
        };
    var iq = function(a, b) {
        this.j = a;
        this.scale = this.opacity = this.offsetY = 0;
        this.U = this.W(b)
    };
    v(iq, fp);
    iq.prototype.cancel = function() {
        this.U = this.R()
    };
    iq.prototype.kd = function() {
        return this.U.Eb()
    };
    iq.prototype.ld = function(a) {
        Hc(this.U, a)
    };
    iq.prototype.vb = function(a) {
        this.offsetY = a.offsetY;
        this.opacity = a.opacity;
        this.scale = a.scale
    };
    var jq = function(a) {
        iq.call(this, a, 1E3)
    };
    v(jq, iq);
    jq.prototype.v = function() {
        return 3
    };
    jq.prototype.W = function(a) {
        var b = this;
        return new Kc([new H(new G({
            offsetY: 0,
            opacity: 0,
            scale: 0
        }, {
            offsetY: -.5,
            opacity: 1,
            scale: 1.25
        }, 107, vc), function(a) {
            return b.vb(a)
        }), new H(new G({
            offsetY: -.5,
            opacity: 1,
            scale: 1.1
        }, {
            offsetY: -.5,
            opacity: 1,
            scale: 1
        }, a, vc), function(a) {
            return b.vb(a)
        }), new H(new G({
            offsetY: -.5,
            opacity: 1,
            scale: 1
        }, {
            offsetY: -.5,
            opacity: 1,
            scale: 1
        }, 218, vc), function(a) {
            return b.vb(a)
        }), this.R()])
    };
    jq.prototype.R = function() {
        var a = this;
        return new H(new G({
            offsetY: -.5,
            opacity: 1,
            scale: 1
        }, {
            offsetY: -.5,
            opacity: 0,
            scale: 1
        }, 107, vc), function(b) {
            return a.vb(b)
        })
    };
    jq.prototype.H = function(a, b, c) {
        b = void 0 === b ? 0 : b;
        c = void 0 === c ? 0 : c;
        var d = this.offsetY - 1.5;
        a.save();
        a.fillStyle = "#000";
        a.textAlign = "center";
        a.font = "48px " + we;
        a.lineWidth = 4;
        a.globalAlpha = this.opacity;
        Qo("+" + this.j + "!", b, c + d, "#4B1", "#BF5", 0, this.scale);
        a.restore()
    };
    var kq = function(a, b) {
        iq.call(this, a, b)
    };
    v(kq, iq);
    kq.prototype.v = function() {
        return 2
    };
    kq.prototype.W = function(a) {
        var b = this,
            c = this.o();
        return new Kc([new H(new G({
            offsetY: this.T(),
            opacity: 0
        }, {
            offsetY: c,
            opacity: 1
        }, 107, vc), function(a) {
            return b.vb(a)
        }), new H(new G({
            offsetY: c,
            opacity: 1
        }, {
            offsetY: c,
            opacity: 1
        }, a, vc), function(a) {
            return b.vb(a)
        }), this.R()])
    };
    kq.prototype.R = function() {
        var a = this,
            b = this.o();
        return new H(new G({
            offsetY: b,
            opacity: 1
        }, {
            offsetY: b,
            opacity: 0
        }, 107, vc), function(b) {
            return a.vb(b)
        })
    };
    kq.prototype.H = function(a, b, c) {
        b = void 0 === b ? 0 : b;
        c = void 0 === c ? 0 : c;
        var d = this.offsetY - 1.5;
        a.save();
        a.fillStyle = "#000";
        a.textAlign = "center";
        a.font = "32px " + we;
        a.lineWidth = 3;
        a.globalAlpha = this.opacity;
        this.S(a, b, c + d);
        a.restore()
    };
    var lq = function(a) {
        iq.call(this, a, 1E3)
    };
    v(lq, kq);
    lq.prototype.T = function() {
        return 0
    };
    lq.prototype.o = function() {
        return -.5
    };
    lq.prototype.S = function(a, b, c) {
        Qo("+" + this.j, b, c, "#59E", "#FFF")
    };
    var mq = function(a) {
        iq.call(this, a, 1E3)
    };
    v(mq, kq);
    mq.prototype.T = function() {
        return -.5
    };
    mq.prototype.o = function() {
        return 0
    };
    mq.prototype.S = function(a, b, c) {
        Qo("" + this.j, b, c, "#D67", "#000")
    };
    var nq = function(a, b, c) {
        iq.call(this, a, c);
        this.va = b
    };
    v(nq, kq);
    nq.prototype.v = function() {
        return 1
    };
    nq.prototype.T = function() {
        return 0
    };
    nq.prototype.o = function() {
        return -.5
    };
    nq.prototype.S = function(a, b, c) {
        var d = Gi.Aa();
        b = Ji(d, b);
        c = Ki(d, c);
        a.font = "32px " + we;
        a.textAlign = "center";
        a.textBaseline = "middle";
        a.fillStyle = "rgb(" + this.va + ")";
        a.strokeStyle = "#fff";
        a.lineWidth = 3;
        a.strokeText("+" + this.j, b, c - 40);
        a.fillText("+" + this.j, b, c - 40);
        a.lineWidth = .5;
        a.font = "12px " + we;
        d = hp(a, hc("buddy_bonus"), we, 12, 8, 50, 2);
        ip(a, d, b, c - 15, 1.25 * d.fontSize, !0)
    };
    var oq = function(a) {
        iq.call(this, a, 1E3)
    };
    v(oq, lq);
    oq.prototype.S = function(a, b, c) {
        Qo("+" + this.j, b, c, "#0AF", "#FFF")
    };
    var pq = Ee.Aa(),
        qq = function() {
            this.j = new So(Ff)
        };
    var rq = function(a, b, c, d, e) {
        Tk.call(this, a, b, c, d);
        var f = this;
        this.zd = e;
        this.mb = !1;
        this.ta = this.rb = this.T = this.U = 0;
        this.wa = this.R = null;
        this.Ca = !1;
        this.Gb = !0;
        this.Da = new hq(this.nb);
        this.Vc = new qq;
        this.Bb = !1;
        this.Sa = null;
        this.Sc = this.W = 0;
        this.Nb = {
            radius: this.mb ? U(this.o, 3) || 0 : 10,
            ke: 10,
            ud: this.ab(),
            Hd: 1E3 * Math.random(),
            Yd: !1,
            visible: !0
        };
        this.Vb = 0;
        this.Wb = new Kc([new H(new G({
            opacity: 0
        }, {
            opacity: 1
        }, 242, vc), function(a) {
            f.Vb = a.opacity
        }), new Ic(function() {
            f.Wb = null
        })])
    };
    v(rq, Tk);
    rq.prototype.Nc = function() {
        var a = Tk.prototype.Nc.call(this);
        return this.mb ? a + 1 : a
    };
    rq.prototype.lc = function() {
        return null != this.o
    };
    rq.prototype.Hc = function() {
        return this.o ? this.o.Hc() || 0 : 0
    };
    var Sk = function(a, b) {
            return a.o ? U(a.o, 4) >= b : !1
        },
        sq = function(a, b) {
            if (!a.R || a.R.v() <= b.v()) a.R && a.R.cancel(), a.R = b
        },
        tq = function(a) {
            switch (a) {
                case 1:
                    return hc("base_powerup_fast");
                case 2:
                    return hc("base_powerup_all_seeing");
                case 3:
                    return hc("base_powerup_magnetic");
                case 4:
                    return hc("base_powerup_dematerialized")
            }
            return ""
        },
        uq = function(a) {
            switch (a) {
                case 1:
                    return hc("powerup_fast");
                case 2:
                    return hc("powerup_all_seeing");
                case 3:
                    return hc("powerup_magnetic");
                case 4:
                    return hc("powerup_dematerialized")
            }
            return ""
        },
        vq = function(a) {
            a.U = uk(a, "sonic_boom_timer_ms");
            a.mb && me.Le.play()
        },
        wq = function(a, b) {
            a.T += b;
            a.rb = uk(a, "score_delta_timer_ms")
        },
        xq = function(a, b) {
            if (a.wa != b) {
                var c = zi(a.nb, 1 == b ? "happy" : "sad").length;
                a.wa = b;
                a.Sa = new Kc([new Jc(1E3 * c / 24), new Ic(function() {
                    a.wa = null;
                    a.Sa = null
                })])
            }
        };
    rq.prototype.Qc = function(a) {
        this.W += a;
        0 < this.U && (this.U -= a);
        0 < this.ta && (this.ta -= a);
        0 < this.rb ? this.rb -= a : this.mb && 0 != this.T && (sq(this, 0 < this.T ? new lq(this.T) : new mq(this.T)), (0 < this.T ? me.Ne : me.Oe).play(), this.T = 0);
        Uk(this);
        this.R && (this.R.ld(a), this.R.kd() && (this.R = null));
        this.Sa && Hc(this.Sa, a);
        var b = "idle";
        this.Ca ? b = "sleep" : 1 == this.wa ? b = "happy" : 2 == this.wa ? b = "sad" : this.Lc && (b = "move");
        var c = this.Da;
        b != c.o && (c.o = b, "idle" == c.o && c.H.reset(), c.j.U = "happy" != c.o && "sad" != c.o, c.j.Ga(0, 0), Wo(c.j, zi(c.v, c.o)),
            c.j.play());
        b = this.Da;
        "idle" == b.o && Hc(b.H, a);
        To(b.j, a);
        To(this.Vc.j, a);
        this.Wb && Hc(this.Wb, a)
    };
    rq.prototype.sendMessage = function(a) {
        this.va.o(a)
    };
    var yq = function(a) {
        for (var b = 0, c = 0, d = Number.MAX_VALUE, e = a.Ha, f = p(a.ie.v.values()), g = f.next(); !g.done; g = f.next())
            if (g = g.value, g.ab() == a.ab()) {
                var h = g.Ha;
                g = h.x - e.x;
                h = h.y - e.y;
                var k = g * g + h * h;
                k < d && (d = k, b = g, c = h)
            } return [b, c]
    };
    rq.prototype.Pc = function(a) {
        var b = this.Ha.x,
            c = this.Ha.y;
        if (uk(this, "draw_debug_location") && this.Na) {
            a.save();
            a.globalAlpha = .5;
            var d = this.Na,
                e = d.x,
                f = d.y,
                g = d.Nd;
            d = d.Od;
            var h = ((new Date).getTime() - this.Na.t) / 1E3;
            Po(e + g * h, f + d * h, 1.5, "yellow");
            Po(e, f, 1.5, "white");
            a.restore()
        }
        a.save();
        a.globalAlpha = this.kb;
        Sk(this, 4) && (a.save(), a.globalAlpha *= .1);
        if (U(this.o, 12))
            for (e = 0; 3 > e; e++) f = .1 + (3 - e) / 6, g = this.j.ma, d = uk(this, "speed_boost_trail_coefficient"), Vo(this.Da.j, b - g.x * d * (e + 1), c - g.y * d * (e + 1), 3, this.H, !1, 1, 1, a.globalAlpha *
                f);
        Vo(this.Da.j, b, c, 3, this.H, !1, 1, 1, 1 > this.Vb ? this.Vb : a.globalAlpha);
        if (0 < this.U)
            for (e = uk(this, "sonic_boom_timer_ms"), f = 0; 5 > f; f++) g = .1 + 3 * f * (e - this.U) / e, Vo(this.Da.j, b, c, 3, this.H, !1, g, g, a.globalAlpha * (.1 + (5 - f) / 12 - .1 * (e - this.U) / e));
        0 < this.ta && No(Uo(this.Vc.j), b, c, 3, this.H, !1, 1, 1, 1, pq);
        Sk(this, 4) && a.restore();
        if (Ag(this.o, hh, 7) && uk(this, "render_paths"))
            for (e = Gi.Aa(), a.strokeStyle = "#f00", a.lineWidth = 2, f = b, g = c, d = 0; d < Ag(this.o, hh, 7).length; ++d) h = Ag(this.o, hh, 7)[d], 0 < d && (a.beginPath(), a.moveTo(Ji(e, f), Ki(e,
                g)), a.lineTo(Ji(e, +U(h, 1)), Ki(e, +U(h, 2))), a.stroke()), Po(+U(h, 1), +U(h, 2), 3 * .1, "#f00"), f = +U(h, 1), g = +U(h, 2);
        U(this.o, 8) || this.Lb || No(Qe, b, c, 3, 0);
        this.Ca && (a.font = "32px " + we, a.lineWidth = 3, Math.floor(this.W / 500) % 2 ? Qo("Z z Z", b - .17, c - 1.8, "#4B1", "#BF5") : Qo("z Z z", b - .17, c - 1.8, "#4B1", "#BF5"));
        a.restore()
    };
    var zq = function(a, b) {
        if (a.mb && !a.Ca) {
            var c = Gi.Aa(),
                d = p(yq(a)),
                e = d.next().value,
                f = d.next().value;
            d = Math.atan2(f, e) % Math.PI + Math.PI;
            var g = K.width / c.j,
                h = K.height / c.j;
            if (a.zd.T) var k = a.Bb;
            else {
                k = a.lb.length + a.Hc();
                var l = (a.o ? U(a.o, 4) : 0) + 1;
                l = uk(a, "powerup_threshold_" + l) || 500;
                k = k >= l
            }
            if (k || g / 2 <= Math.abs(e) || h / 2 <= Math.abs(f)) {
                b.save();
                e = a.Ha;
                g = h = f = 1;
                k ? (g = 3, h = (Ka() & 511) / 512, b.globalAlpha = .9, f = 1.25, h = 1 + h) : b.globalAlpha = .25;
                k = E ? 42 : 32;
                b.fillStyle = "#fff";
                b.strokeStyle = "#000";
                for (l = 1; l <= g; l++) {
                    var m = e.x - 3 * Math.cos(d) *
                        h * l,
                        q = e.y - 3 * Math.sin(d) * h * l;
                    b.save();
                    b.translate(Ji(c, m), Ki(c, q));
                    b.scale(f, f);
                    b.rotate(d - Math.PI);
                    b.beginPath();
                    b.moveTo(-k / 2, -k / 2);
                    b.lineTo(k / 2, 0);
                    b.lineTo(-k / 2, k / 2);
                    b.closePath();
                    b.fill();
                    b.stroke();
                    b.restore()
                }
                b.restore()
            }
        }
        a.R && a.R.H(b, a.Ha.x, a.Ha.y)
    };
    rq.prototype.wake = function() {
        var a = new Lg;
        W(a, 1, 13);
        W(a, 2, this.v);
        W(a, 3, !0);
        this.va.o(a)
    };
    rq.prototype.Xd = function() {
        this.Nb.radius = this.mb ? U(this.o, 3) || 0 : 10;
        return this.Nb
    };
    var Aq = function(a, b) {
        pm.call(this, a);
        this.j = null;
        this.va = b
    };
    v(Aq, pm);
    var to = function(a, b) {
            var c = a.H.get(b);
            c && (a.j = c, c = a.j, c.mb = !0, c.Nb.Yd = !0)
        },
        xo = function(a, b) {
            switch (U(b, 2)) {
                case 1:
                case 2:
                    var c = U(b, 1);
                    c = a.H.get(c);
                    var d = X(b, ch, 3);
                    if (d) {
                        var e = c.o ? U(c.o, 4) : 0,
                            f = !(!c.o || !U(c.o, 12));
                        c.o = d;
                        if (c.o && null != U(c.o, 16)) {
                            var g = U(c.o, 16);
                            c.Lb = g
                        }
                        c.mb && !f && c.o && U(c.o, 12) && me.Me.play();
                        c.lb = [];
                        f = p(vg(d, 9));
                        for (g = f.next(); !g.done; g = f.next())(g = c.ie.R.get(g.value)) && c.lb.push(g);
                        f = p(Ag(d, eh, 14));
                        for (g = f.next(); !g.done; g = f.next()) {
                            var h = g.value;
                            switch (h.Ka()) {
                                case 1:
                                    wq(c, U(h, 2));
                                    break;
                                case 3:
                                    g = c;
                                    h = U(h, 2);
                                    var k = uk(g, 1 == g.Ja ? "light_color_alpha" : "light_color_bravo"),
                                        l = uk(g, "ally_bonus_timer_ms");
                                    sq(g, new nq(h, k, l));
                                    g.ta = l;
                                    g.mb && me.Ge.play();
                                    break;
                                case 2:
                                    g = c;
                                    h = U(h, 2);
                                    sq(g, new jq(h));
                                    g.mb && me.He.play();
                                    break;
                                case 4:
                                    g = c, h = U(h, 2), sq(g, new oq(h)), g.mb && me.Qd.play()
                            }
                        }
                        f = p(Ag(d, dh, 13));
                        for (g = f.next(); !g.done; g = f.next()) {
                            g = g.value;
                            h = null;
                            switch (g.Ka()) {
                                case 1:
                                    h = c;
                                    k = Vn.width / 2 + Vn.left + uk(h, "notice_offset_x");
                                    l = .75 * Vn.height + Vn.top + uk(h, "notice_offset_y");
                                    h = new cq(g.Ka(), tq(U(g, 2)), uk(h, "notice_duration_ms"),
                                        k, l);
                                    break;
                                case 2:
                                    h = new eq(uq(U(g, 2)), uk(c, "notice_duration_ms"))
                            }
                            h && sq(c, h)
                        }
                        d = Ag(d, fh, 15);
                        d.length && xq(c, d[d.length - 1].Ka());
                        (c.o ? U(c.o, 4) : 0) > e && (vq(c), c.$a.H.j = (1 == c.Ja ? 2 : 1) | (Sk(c, 4) ? 1024 : 1544) | 420)
                    }
                    break;
                case 16:
                    c = U(b, 1);
                    (c = a.R.get(c)) ? c.ee(X(b, ih, 4)): (U(b, 1), U(X(b, ih, 4), 1));
                    break;
                case 4:
                    c = U(b, 1);
                    c = a.v.get(c);
                    e = X(b, kh, 5);
                    c.o = e;
                    break;
                case 32:
                    c = rm(a, U(b, 1)), e = X(b, gh, 6), c.T = e
            }
        };
    Aq.prototype.wa = function() {
        tm(this);
        if (this.j && this.j.Gb) {
            var a = new lh;
            W(a, 1, this.j.v);
            W(a, 2, 0);
            W(a, 3, 0);
            W(a, 4, !1);
            var b = this.va.R;
            Ui(b) && (Vi(b), Ti(b, (wg(this.j.o, 2) || 0) * this.va.T), W(a, 2, b.x), W(a, 3, b.y), W(a, 4, !0));
            this.j.S = a;
            this.j.le()
        }
    };
    Aq.prototype.Da = function(a) {
        pm.prototype.Da.call(this, a);
        this.wa(a);
        sm(this, a);
        a = p(this.H.values());
        for (var b = a.next(); !b.done; b = a.next())
            if (b = b.value, b !== this.j) {
                b = p(b.lb);
                for (var c = b.next(); !c.done; c = b.next()) c.value.zc()
            } a = p(this.v.values());
        for (b = a.next(); !b.done; b = a.next()) b.value.zc();
        a = this.va;
        if (a.j) {
            c = a.S;
            if (navigator.getGamepads) {
                var d = navigator.getGamepads();
                b = !1;
                d = p(d);
                for (var e = d.next(); !e.done; e = d.next())
                    if ((e = e.value) && e.connected) {
                        e.axes && (d = e.axes[0], e = e.axes[1], .1 > Math.abs(d) && (d =
                            0), .1 > Math.abs(e) && (e = 0), b = 0 != d || 0 != e, c = c.j, c.R || (d *= 72.5, e *= 72.5, c.j = {
                            x: 0,
                            y: 0
                        }, c.o = {
                            x: d,
                            y: e
                        }, c.v = Y(d, e), c.H = sp(Math.min(1, Ui(c.v) / 5256.25))));
                        break
                    }
            } else b = void 0;
            if (b || a.va) a.v = b, a.R = a.S.j.v, a.T = a.S.j.H;
            a.va = b
        }
        b = p(a.U);
        for (c = b.next(); !c.done; c = b.next()) c = c.value, c();
        a.U = []
    };
    Aq.prototype.ta = function() {
        for (var a = p(this.W.values()), b = a.next(); !b.done; b = a.next()) b.value.zc();
        a = p(this.j.lb);
        for (b = a.next(); !b.done; b = a.next()) b.value.zc()
    };
    Aq.prototype.wake = function() {
        pm.prototype.wake.call(this);
        this.j.wake()
    };
    var Bq = function() {
            this.j = []
        },
        Cq = function(a, b) {
            a.j.push(b)
        };
    var Dq = function(a, b, c, d) {
        this.o = c;
        c = new oj;
        c.type = 0;
        c.position.set(a, b);
        this.j = lk(d, c);
        this.j.kb = this;
        a = new Yj;
        a.o = !0;
        a.j = Lk(1, 1);
        a.filter.o = 128;
        a.filter.j = 3;
        hk(this.j, a)
    };
    var Eq = function(a, b, c, d, e, f, g) {
        this.width = e;
        this.height = f;
        var h = new oj;
        h.type = 0;
        h.position.set(c, d);
        this.body = lk(g, h);
        this.body.Lb = this;
        c = new Yj;
        c.W = .1;
        c.v = 1E3;
        c.filter.o = b ? 1024 : 8;
        c.filter.j = 35;
        b = null;
        switch (a) {
            case 1:
                b = Lk(e, f);
                break;
            case 2:
            case 4:
                b = Mk(Y(-e, f), Y(e, -f));
                break;
            case 3:
            case 5:
                b = Mk(Y(-e, -f), Y(e, f))
        }
        c.j = b;
        hk(this.body, c)
    };
    var Fq = function(a) {
        Eq.apply(this, arguments)
    };
    v(Fq, Eq);
    var Gq = function() {
            this.j = null
        },
        Hq = function(a) {
            return {
                x: a.j.width,
                y: a.j.height
            }
        },
        Iq = function(a, b, c, d) {
            for (var e = a.j.Kd.tiles, f, g = p(a.j.layers), h = g.next(); !h.done; h = g.next()) h = h.value.tiles[d * a.j.width + c] & 536870911, 0 != h && (h = e[h].properties, b in h && (f = h[b]));
            return f
        },
        Jq = function(a, b, c, d, e) {
            for (var f = a.j.Kd.tiles, g = p(a.j.layers), h = g.next(); !h.done; h = g.next())
                if (h = h.value.tiles[e * a.j.width + d] & 536870911, 0 != h && (h = f[h].properties, b in h && h[b] == c)) return !0;
            return !1
        },
        Kq = function(a, b, c) {
            for (var d = a.j.Kd.tiles,
                    e, f = p(a.j.layers), g = f.next(); !g.done; g = f.next()) g = g.value.tiles[c * a.j.width + b] & 536870911, 0 != g && (g = d[g].objectgroup) && (e = g);
            return e
        },
        Lq = function(a, b, c) {
            a = Kq(a, b, c);
            if (!a) return null;
            c = a.objects;
            if (!c || !c.length) return null;
            b = [];
            c = p(c);
            for (var d = c.next(); !d.done; d = c.next()) {
                var e = d.value,
                    f = a.x + e.x,
                    g = a.y + e.y;
                d = [];
                var h = !1;
                if (e.polygon) {
                    h = p(e.polygon);
                    for (e = h.next(); !e.done; e = h.next()) e = e.value, d.push({
                        x: f + e.x,
                        y: g + e.y
                    });
                    h = !0
                } else if (e.polyline) {
                    var k = p(e.polyline);
                    for (e = k.next(); !e.done; e = k.next()) e =
                        e.value, d.push({
                            x: f + e.x,
                            y: g + e.y
                        })
                } else e.ellipse ? console.error("Unsupported elliptical shadow object") : (h = f, k = g, f += e.width, g += e.height, d.push({
                    x: h,
                    y: k
                }), d.push({
                    x: f,
                    y: k
                }), d.push({
                    x: f,
                    y: g
                }), d.push({
                    x: h,
                    y: g
                }), h = !0);
                for (g = 1; g < d.length; ++g) b.push([d[g - 1], d[g]]);
                h && b.push([d[d.length - 1], d[0]])
            }
            return b
        },
        Mq = function(a, b, c) {
            a = Iq(a, "wall", b, c);
            switch (a) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    return a;
                default:
                    return 0
            }
        };
    var Nq = function(a, b) {
            this.x = a;
            this.y = b;
            this.closed = this.o = this.j = !1;
            this.parent = null
        },
        Oq = function(a, b) {
            this.v = a;
            this.o = b;
            this.j = Array(b);
            for (var c = 0; c < b; c++) {
                this.j[c] = Array(a);
                for (var d = 0; d < a; d++) this.j[c][d] = new Nq(d, c)
            }
        };
    Oq.prototype.reset = function() {
        for (var a = 0; a < this.o; a++)
            for (var b = 0; b < this.v; b++) this.j[a][b].o = !1, this.j[a][b].closed = !1, this.j[a][b].parent = null
    };
    var Rq = function(a, b, c, d, e) {
            this.va = b;
            this.H = c;
            this.Ca = d;
            b = this.j = new Gq;
            c = {
                Jd: [],
                tiles: {}
            };
            for (var f = p(e.tilesets || []), g = f.next(); !g.done; g = f.next()) {
                g = g.value;
                c.Jd.push({
                    image: g.image,
                    width: g.imagewidth,
                    height: g.imageheight
                });
                for (var h = 0; h < g.tilecount; ++h) c.tiles[h + g.firstgid] = {
                    td: [c.Jd.length - 1, h % g.columns * (g.tilewidth + g.spacing), Math.floor(h / g.columns) * (g.tileheight + g.spacing), g.tilewidth, g.tileheight],
                    properties: g.tileproperties && g.tileproperties[h] ? g.tileproperties[h] : {},
                    objectgroup: g.tiles &&
                        g.tiles[h] && g.tiles[h].objectgroup
                }
            }
            f = [];
            g = 1;
            h = p(e.layers || []);
            for (var k = h.next(); !k.done; k = h.next()) k = k.value, "tilelayer" != k.type ? "players" == k.name && (g = 2) : k.Ye ? console.warn('Skipping map layer "' + k.name + '": ' + k.Ye + " compression not supported") : k.encoding && "csv" != k.encoding ? console.warn('Skipping map layer "' + k.name + '": ' + k.encoding + " encoding not supported") : f.push({
                group: g,
                properties: k.properties || {},
                tiles: k.data
            });
            b.j = {
                width: e.width,
                height: e.height,
                Fe: e.tilewidth,
                Ee: e.tileheight,
                Kd: c,
                layers: f,
                properties: e.properties || {}
            };
            d.get("use_pathfinding") || Pq(this, a);
            Qq(this, 2);
            Qq(this, 1)
        },
        Sq = function(a, b, c) {
            a = Hq(a.j);
            return {
                x: 2 * (b - .5) - a.x + 1,
                y: 2 * (c - .5) - a.y + 1
            }
        },
        Qq = function(a, b) {
            for (var c = Hq(a.j), d = new Oq(c.x, c.y), e = 0; e < c.y; e++)
                for (var f = 0; f < c.x; f++)
                    if (0 != Mq(a.j, f, e) || Jq(a.j, 1 == b ? "Alpha Base" : "Bravo Base", !0, f, e))
                        for (var g = -1; 1 >= g; g++)
                            for (var h = -1; 1 >= h; h++) f + g < c.x && 0 <= f + g && e + h < c.y && 0 <= e + h && (d.j[e + h][f + g].j = !0)
        },
        Tq = function(a, b) {
            for (var c = Hq(a.j), d = [], e = 0; e < c.y; e++)
                for (var f = -1, g = 0; g < c.x; g++)
                    if (b(g,
                            e) && 0 > f && (f = g), (!b(g, e) || g == c.x - 1) && 0 <= f) {
                        var h = g - f;
                        g == c.x - 1 && ++h;
                        d.push({
                            x: f,
                            y: e,
                            width: h,
                            height: 1
                        });
                        f = -1
                    } for (c = 0; c < d.length; ++c)
                for (e = d[c], f = c + 1; f < d.length; ++f) g = d[f], e.x == g.x && e.width == g.width && e.y + e.height == g.y && (e.height += g.height, d.splice(f, 1), f--);
            return d
        },
        Pq = function(a, b) {
            var c = [],
                d = function(d, e, f, g, h, r) {
                    f = Sq(a, f, g);
                    h = 2 * h / 2;
                    r = 2 * r / 2;
                    c.push(new Fq(d, e, f.x + h, f.y + r, h, r, b))
                },
                e = Tq(a, function(b, c) {
                    return 1 == Mq(a.j, b, c)
                });
            e = p(e);
            for (var f = e.next(); !f.done; f = e.next()) f = f.value, d(1, !1, f.x, f.y, f.width,
                f.height);
            e = Hq(a.j);
            for (f = 0; f < e.y; f++)
                for (var g = 0; g < e.x; g++) {
                    var h = Mq(a.j, g, f);
                    switch (h) {
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            d(h, !1, g, f, 1, 1)
                    }
                }
            e = Hq(a.j);
            d(1, !0, -1, -1, e.x + 2, 1);
            d(1, !0, -1, e.y, e.x + 2, 1);
            d(1, !0, -1, 0, 1, e.y);
            d(1, !0, e.x, 0, 1, e.y)
        },
        Vq = function(a) {
            var b = [],
                c = Tq(a, function(b, c) {
                    return Jq(a.j, "Alpha Base", !0, b, c)
                });
            c = p(c);
            for (var d = c.next(); !d.done; d = c.next()) {
                d = d.value;
                var e = Sq(a, d.x, d.y),
                    f = new Zg;
                W(f, 1, 1);
                W(f, 2, d.width);
                W(f, 3, d.height);
                var g = new Wg;
                Zh(g, a.H.Ca++);
                W(g, 2, 4);
                W(g, 3, e.x + d.width);
                W(g, 4, e.y +
                    d.height);
                Bg(g, 8, f);
                b.push(Uq(a, g))
            }
            return b
        },
        Xq = function(a) {
            for (var b = [], c = Hq(a.j), d = 0; d < c.y; d++)
                for (var e = 0; e < c.x; e++)
                    if (Jq(a.j, "Candle", !0, e, d)) {
                        var f = Sq(a, e, d),
                            g = new Wg;
                        Zh(g, a.H.Ca++);
                        W(g, 2, 16);
                        W(g, 3, f.x + 1);
                        W(g, 4, f.y + 1);
                        f = new Yg;
                        Bg(g, 7, f);
                        b.push(Wq(a, g))
                    }
        };
    var Yq = Ee.Aa(),
        dr = function(a, b, c, d, e, f) {
            Rq.call(this, a, b, c, d, e);
            var g = this;
            this.Na = f;
            this.ta = !1;
            this.Sa = [];
            this.o = new Map;
            this.U = new Map;
            f ? (Zq(this), [].concat(Vq(this)), Xq(this), $q(this, a), ar(this, a)) : Dn(this.j.j.properties.map);
            this.v = new Bq;
            E || br(this);
            this.Da = [];
            this.Ja = new Map;
            var h = [];
            a = this.j.j.Kd;
            for (b = 0; b < a.Jd.length; ++b) c = a.Jd[b], d = new Pc(Mn(c.image)), h.push(d), this.Da[b] = ye(Yq, d, [c.width, c.height]);
            for (var k in a.tiles) b = k & 536870911, c = a.tiles[b], d = [], d[0] = this.Da[c.td[0]], d[1] = c.td[1], d[2] =
                c.td[2], d[3] = c.td[3], d[4] = c.td[4], d[5] = 1, this.Ja.set(b, d);
            Qc(h, function() {
                cr(g);
                g.ta = !0;
                for (var a = p(h), b = a.next(); !b.done; b = a.next()) b.value.nd = []
            })
        };
    v(dr, Rq);
    var Uq = function(a, b) {
            var c = new vm(b, a.va, a.Ca, a.H);
            um(a.H, c);
            return c
        },
        Wq = function(a, b) {
            var c = new bp(b, a.va, a.Ca, a.H, a.Na);
            um(a.H, c);
            return c
        },
        Zq = function(a) {
            for (var b = Hq(a.j), c = 0; c < b.y; ++c)
                for (var d = 0; d < b.x; ++d) {
                    Jq(a.j, "character spawn", !0, d, c) && (a.T = Sq(a, d, c), a.T.x += 1, a.T.y += 1);
                    Jq(a.j, "enemy spawn", !0, d, c) && (a.S = Sq(a, d, c), a.S.x += 1, a.S.y += 1);
                    Jq(a.j, "circle_center", !0, d, c) && (a.R = Sq(a, d, c), a.R.x += 1, a.R.y += 1);
                    var e = Iq(a.j, "spider", d, c);
                    if (va(e)) {
                        var f = Sq(a, d, c);
                        f.x += 1;
                        f.y += 1;
                        a.o.set(e, f)
                    }
                }
        },
        $q = function(a,
            b) {
            for (var c = Hq(a.j), d = 0; d < c.y; ++d)
                for (var e = 0; e < c.x; ++e) {
                    var f = Iq(a.j, "trigger", e, d);
                    if (va(f)) {
                        var g = Sq(a, e, d);
                        g.x += 1;
                        g.y += 1;
                        a.Sa.push(new Dq(g.x, g.y, f, b))
                    }
                }
        },
        br = function(a) {
            var b = Tq(a, function(b, c) {
                var d = a.j,
                    e;
                if (e = 1 == Mq(d, b, c)) d = Kq(d, b, c), e = !(d && d.objects && d.objects.length);
                return e
            });
            b = p(b);
            for (var c = b.next(); !c.done; c = b.next()) {
                var d = c.value,
                    e = Sq(a, d.x, d.y);
                c = e.x;
                var f = e.x + 2 * d.width,
                    g = e.y;
                d = e.y + 2 * d.height;
                Cq(a.v, [c, g, f, g]);
                Cq(a.v, [f, g, f, d]);
                Cq(a.v, [f, d, c, d]);
                Cq(a.v, [c, d, c, g])
            }
            b = Hq(a.j);
            for (c =
                0; c < b.y; ++c)
                for (f = 0; f < b.x; ++f)
                    if (d = Lq(a.j, f, c))
                        for (g = Sq(a, f, c), d = p(d), e = d.next(); !e.done; e = d.next()) e = e.value, Cq(a.v, [e[0].x / 25 + g.x, e[0].y / 25 + g.y, e[1].x / 25 + g.x, e[1].y / 25 + g.y]);
                    else if (g = Mq(a.j, f, c), 2 <= g && 5 >= g) {
                var h = Sq(a, f, c);
                d = h.x;
                e = h.x + 2;
                var k = h.y;
                h = h.y + 2;
                switch (g) {
                    case 2:
                    case 4:
                        Cq(a.v, [d, h, e, k]);
                        break;
                    case 3:
                    case 5:
                        Cq(a.v, [d, k, e, h])
                }
            }
        },
        ar = function(a, b) {
            for (var c = 1; 3 > c; ++c) a.U.set(c, er(a, b, c))
        },
        er = function(a, b, c) {
            var d = [],
                e = Tq(a, function(b, d) {
                    return Jq(a.j, "door", c, b, d)
                });
            e = p(e);
            for (var f = e.next(); !f.done; f =
                e.next()) {
                f = f.value;
                var g = Sq(a, f.x, f.y);
                d.push(new pp(g.x + f.width, g.y + f.height, f.width, f.height, b))
            }
            return d
        },
        fr = function(a, b) {
            var c = a.U.get(b);
            if (c) {
                c = p(c);
                for (var d = c.next(); !d.done; d = c.next()) d = d.value, d.j && (vk(d.H, d.j), d.j = null)
            }
        },
        gr = function(a, b) {
            var c = a.U.get(b);
            if (c) {
                c = p(c);
                for (var d = c.next(); !d.done; d = c.next()) d.value.close()
            }
        },
        cr = function(a) {
            for (var b = Hq(a.j), c = function() {
                        var c = document.createElement("canvas");
                        c.width = a.j.j.Fe * b.x;
                        c.height = a.j.j.Ee * b.y;
                        return c
                    }, d = a.wa = c(), e = p(a.j.j.layers),
                    f = e.next(); !f.done; f = e.next())
                if (f = f.value, !f.properties.invisible) {
                    switch (f.group) {
                        case 1:
                            d = a.wa;
                            break;
                        case 2:
                            a.W || (a.W = c()), d = a.W
                    }
                    for (var g = d.getContext("2d"), h = 0; h < b.y; h++)
                        for (var k = 0; k < b.x; k++) hr(a, f, k, h, g)
                }
        },
        hr = function(a, b, c, d, e) {
            var f = b.tiles[d * a.j.j.width + c];
            if (f) {
                b = a.j.j.Fe;
                var g = a.j.j.Ee;
                e.save();
                e.translate((c + .5) * b, (d + .5) * g);
                f & 1073741824 && e.scale(1, -1);
                f & 2147483648 && e.scale(-1, 1);
                f & 536870912 && e.transform(0, 1, 1, 0, 0, 0);
                a = a.Ja.get(f & 536870911);
                Yq.draw(a, e, -b / 2, -g / 2);
                e.restore()
            }
        },
        ir = function(a) {
            if (!a) return !1;
            var b = a.height / 25;
            var c = Ji(Lo, 0);
            var d = Ki(Lo, 0);
            te.save();
            te.translate(c, d);
            c = a.width;
            d = a.height;
            b = Lo.j * b / d;
            te.scale(b, b);
            te.drawImage(a, -(c / 2), -(d / 2));
            te.restore();
            return !0
        },
        jr = function(a, b) {
            ir(a.W);
            for (var c = p(a.U.values()), d = c.next(); !d.done; d = c.next()) {
                d = p(d.value);
                for (var e = d.next(); !e.done; e = d.next()) {
                    var f = e.value;
                    e = b;
                    if (f.j) {
                        e.save();
                        e.fillStyle = "#000";
                        var g = f.T - f.S,
                            h = f.U - f.R,
                            k = 2 * f.S;
                        f = 2 * f.R;
                        g = Ji(Lo, g);
                        h = Ki(Lo, h);
                        k *= Lo.j;
                        f *= Lo.j;
                        te.fillRect(g, h, k, f);
                        e.restore()
                    }
                }
            }
        };
    var kr = !1,
        lr = function(a) {
            this.T = 1E3 / 60;
            this.j = Math.ceil(1E3 / this.T);
            this.v = Array(this.j);
            for (var b = 0; b < this.j; ++b) this.v[b] = 0;
            this.o = this.S = this.R = 0;
            this.H = a || null
        },
        mr = function(a) {
            if (!kr) {
                var b = Wb() - a.S,
                    c = a.R++ % a.j;
                a.o -= a.v[c];
                a.o += b;
                a.v[c] = b;
                !(a.R < 3 * a.j) && a.o / a.j > a.T && (kr = !0, xn(104), a.H && a.H())
            }
        };
    var or = function(a, b, c, d) {
            d = void 0 === d ? 1 : d;
            this.T = hc(a);
            this.S = b;
            this.W = we;
            this.ta = c;
            this.H = new F(0, 0);
            this.j = "#fff";
            this.R = null;
            this.v = "center";
            this.o = nr(this);
            this.U = 3;
            this.va = d
        },
        pr = function(a, b, c) {
            a.U = void 0 === c ? 3 : c;
            a.R = b
        };
    or.prototype.Ga = function(a, b) {
        this.H.x = a;
        this.H.y = b
    };
    var qr = function(a, b) {
            b.save();
            null != a.R && (b.strokeStyle = a.R, b.lineWidth = a.U);
            b.fillStyle = a.j;
            b.textAlign = a.v;
            b.textBaseline = "middle";
            ip(b, a.o, a.H.x, a.H.y - a.o.fontSize * (a.o.lines.length - 1) / 2, .85 * a.S, !!a.R);
            b.restore()
        },
        nr = function(a) {
            var b = K.getContext("2d");
            b.textAlign = a.v;
            b.textBaseline = "middle";
            return hp(b, a.T, a.W, a.S, Math.round(a.S / 4), a.ta, a.va, "")
        };
    var rr = function() {
        this.o = hc("times_up");
        this.j = new or(this.o, 64, .75 * ne, 3);
        this.j.Ga(0, 10);
        this.j.j = "#700";
        pr(this.j, "#F93");
        this.j.v = "center"
    };
    var tr = function(a, b, c) {
            c = void 0 === c ? 0 : c;
            this.j = new PIXI.Container;
            this.H = b;
            this.o = 1;
            var d = sr(a, b);
            this.j.addChild(d);
            0 < c && (a = sr(a, c), this.j.addChild(a));
            this.v = new Ln(2 * b, 2 * b)
        },
        sr = function(a, b) {
            var c = new PIXI.Sprite(a);
            c.blendMode = PIXI.BLEND_MODES.ADD;
            c.scale.set(2 * b / 256);
            c.anchor.set(.5);
            return c
        };
    var ur = Gi.Aa(),
        wr = function(a, b) {
            J.call(this);
            var c = this.v = PIXI.autoDetectRenderer(a, b, {
                antialias: !1,
                backgroundColor: 6579350,
                qf: "high-performance"
            }, !1);
            c.type != PIXI.RENDERER_TYPE.WEBGL && xn(103);
            yn("d2", c.type);
            this.v.plugins.interaction.destroy();
            this.j = new PIXI.Container;
            this.o = new Map;
            this.S = PIXI.Texture.fromCanvas(vr(), PIXI.SCALE_MODES.LINEAR);
            this.T = new Map;
            this.H = 0;
            this.R = !1
        };
    v(wr, J);
    wr.prototype.Wa = function() {
        J.prototype.Wa.call(this);
        this.T.clear();
        this.o.clear();
        this.j.destroy(!0);
        this.S.destroy(!0);
        this.v.destroy(!0)
    };
    var xr = function(a, b) {
            var c = a.o.get(b);
            c && (c = c.j, a.j.removeChild(c), a.o["delete"](b), c.destroy({
                children: !0
            }))
        },
        yr = function(a) {
            a.o.forEach(function(b, c) {
                xr(a, c)
            })
        },
        vr = function() {
            var a = document.createElement("canvas");
            a.width = 256;
            a.height = 256;
            var b = a.getContext("2d"),
                c = b.createRadialGradient(128, 128, 128, 128, 128, 0);
            c.addColorStop(0, "rgba(255,255,255,0)");
            c.addColorStop(.5, "rgba(255,255,255,1)");
            c.addColorStop(1, "rgba(255,255,255,1)");
            b.fillStyle = c;
            b.fillRect(0, 0, 256, 256);
            return a
        },
        Ar = function(a, b, c,
            d, e) {
            var f = ur.o,
                g = ur.v;
            var h = f + K.width / ur.j;
            var k = g + K.height / ur.j;
            var l = 1;
            Sk(c, 2) && (l = zr(e, "all_seeing_lighting_multiplier"), a.R || (xr(a, c.v), a.R = !0));
            c = c.ab();
            d = p(d);
            for (var m = d.next(); !m.done; m = d.next()) {
                var q = m.value,
                    w = q.Xd(),
                    r = w.ud == c;
                m = a;
                var y = q.v,
                    t = w.radius,
                    u = w.ke * (r ? l : 1);
                u = void 0 === u ? 0 : u;
                var B = m.o.get(y);
                B || (B = new tr(m.S, t, u), m.o.set(y, B), m.j.addChild(B.j));
                m = B;
                if (w.visible) {
                    y = 1 == w.ud ? 3342180 : 9846015;
                    t = p(m.j.children || []);
                    for (u = t.next(); !u.done; u = t.next()) u.value.tint = y;
                    m.j.alpha = q.kb * (r ? 1 :
                        .2);
                    r = q.Ha;
                    m.j.position.set(r.x, r.y);
                    m.v.left = r.x;
                    m.v.top = r.y;
                    q = r.x - Math.min(Math.max(r.x, f), h);
                    r = r.y - Math.min(Math.max(r.y, g), k);
                    m.j.visible = q * q + r * r < Math.pow(m.o * m.H, 2);
                    if (null != w.Hd) {
                        u = Zo.Aa();
                        w = w.Hd + .003 * a.H;
                        r = q = 0;
                        var L = Math.floor(w) & 255,
                            x = Math.floor(q) & 255,
                            M = Math.floor(r) & 255;
                        w -= Math.floor(w);
                        q -= Math.floor(q);
                        r -= Math.floor(r);
                        y = $o(w);
                        t = $o(q);
                        u = u.j;
                        var C = u[L] + x;
                        B = u[C] + M;
                        C = u[C + 1] + M;
                        x = u[L + 1] + x;
                        L = u[x] + M;
                        M = u[x + 1] + M;
                        x = 25 * m.H;
                        m.o = (x + ((db(db(db(ap(u[B], w, q, r), ap(u[L], w - 1, q, r), y), db(ap(u[C], w, q - 1, r), ap(u[M],
                            w - 1, q - 1, r), y), t), db(db(ap(u[B + 1], w, q, r - 1), ap(u[L + 1], w - 1, q, r - 1), y), db(ap(u[C + 1], w, q - 1, r - 1), ap(u[M + 1], w - 1, q - 1, r - 1), y), t), $o(r)) + 1) / 2 * 20 - 10)) / x;
                        m.j.scale.set(m.o);
                        m.v.width = 2 * m.H * m.o;
                        m.v.height = 2 * m.H * m.o
                    }
                } else m.j.visible = !1
            }
            a.j.scale.set(ur.j);
            a.j.position.set(Ji(ur, 0), Ki(ur, 0));
            a.v.render(a.j);
            b.save();
            zr(e, "light_map_debug") || (b.globalCompositeOperation = "multiply");
            b.drawImage(a.v.view, 0, 0);
            b.restore()
        };
    var Br = function() {
        var a = .6 * K.width;
        this.j = a;
        this.o = null;
        this.R = this.H = 0;
        this.v = new G({
            Xc: 0,
            Mc: a / 2,
            Yc: 0,
            Zc: a / 2
        }, {
            Xc: 0,
            Mc: a / 2,
            Yc: 0,
            Zc: a / 2
        }, 1)
    };
    var Cr = function() {
        J.call(this);
        this.v = new wr(K.width, K.height);
        td(this, this.v);
        this.H = new go;
        td(this, this.H);
        this.T = new Br;
        this.U = new rr;
        this.o = this.j = this.R = null;
        this.S = 25
    };
    v(Cr, J);
    var Gr = function(a, b, c) {
            var d = Dr;
            Wn(c.canvas);
            c.fillStyle = "#000";
            c.fillRect(0, 0, c.canvas.width, c.canvas.height);
            if (null !== b) {
                c.save();
                var e = b.Ja,
                    f = b.j.j;
                if (f) {
                    var g = f.Ha,
                        h = Math.max(25 - zr(b, "zoom_out_per_collectible_held") * f.lb.length, 12.5);
                    a.S != h && (a.o = new G({
                        zoom: d.j
                    }, {
                        zoom: h
                    }, zr(b, "zoom_tween_time_ms")), a.o.start(), a.S = h);
                    Ii(d, a.o ? Cc(a.o).zoom : a.S);
                    Hi(d, g.x, g.y, Vn.left + Vn.width / 2, Vn.top + Vn.height / 2)
                }
                g = b.o;
                if (f && f.lc() && ir(g.wa)) {
                    var k = [];
                    h = new Map;
                    var l = d.o,
                        m = d.v,
                        q = K.width / d.j;
                    d = K.height / d.j;
                    for (var w =
                            p(b.j.S.values()), r = w.next(); !r.done; r = w.next()) {
                        r = r.value;
                        var y = r.Ha;
                        y.x >= l - 1 && y.x < l + q + 1 && y.y >= m - 1 && y.y < m + d + 1 && (-1 === k.indexOf(r.Nc()) && (k.push(r.Nc()), h.set(r.Nc(), [])), h.get(r.Nc()).push(r))
                    }
                    k.sort(function(a, b) {
                        return a - b
                    });
                    k = p(k);
                    for (l = k.next(); !l.done; l = k.next())
                        for (l = p(h.get(l.value)), r = l.next(); !r.done; r = l.next()) m = r.value, m.Gd() && m.Pc(c);
                    zr(b, "render_map_layers_above_players") && jr(g, c);
                    1 > b.S && (c.fillStyle = "rgba(0, 0, 0, " + (1 - b.S) + ")", c.fillRect(0, 0, c.canvas.width, c.canvas.height), f.Pc(c),
                        e && Er(e, c, !0));
                    1 > b.S && (c.save(), c.globalAlpha = b.S);
                    zr(b, "render_fog") && 0 < b.S && io(a.H);
                    zr(b, "render_lighting") && (g = kr ? [f].concat(ba(b.j.v.values())) : [].concat(ba(b.j.H.values()), ba(b.j.R.values()), ba(b.j.v.values())), Ar(a.v, c, f, g, b));
                    e && Er(e, c, !1);
                    1 > b.S && c.restore();
                    f && f.lc() && zq(f, c)
                }
                a.j || (E ? (a.j = c.createLinearGradient(0, 0, 0, c.canvas.height), e = Vn.top / c.canvas.height, f = (Vn.top + Vn.height) / c.canvas.height) : (a.j = c.createLinearGradient(0, 0, c.canvas.width, 0), e = Vn.left / c.canvas.width, f = (Vn.left + Vn.width) /
                    c.canvas.width), a.j.addColorStop(0, "rgba(0,0,0,1)"), a.j.addColorStop(e, "rgba(0,0,0,0)"), a.j.addColorStop(f, "rgba(0,0,0,0)"), a.j.addColorStop(1, "rgba(0,0,0,1)"));
                c.fillStyle = a.j;
                c.fillRect(0, 0, c.canvas.width, c.canvas.height);
                c.restore();
                Fr(a, c, b)
            }
        },
        Fr = function(a, b, c) {
            b.setTransform(1, 0, 0, 1, 0, 0);
            if (!c.R && !c.T) {
                b.save();
                b.translate(b.canvas.width / 2, b.canvas.height / 4);
                var d = c.rb;
                b.save();
                0 > d ? (d = hc("countdown_get_ready"), b.textAlign = "center", b.font = "60px " + we, b.fillStyle = "#700", b.fillText(d, 0, 0), b.strokeStyle =
                    "#F93", b.strokeText(d, 0, 0)) : (Oo(Me, b, 0, 0), b.textAlign = "center", b.textBaseline = "middle", Ee.Aa(), b.font = .75 * Me[3] + "px " + we, b.fillStyle = "#000", b.fillText("" + d, 0, 0));
                b.restore();
                b.restore()
            }
            if (!c.T && 6E3 > c.H && c.R) {
                b.save();
                b.translate(b.canvas.width / 2, b.canvas.height / 4);
                d = a.U;
                var e = Math.floor(c.H / 1E3);
                b.save();
                if (0 >= e) {
                    Ee.Aa();
                    Ee.Aa();
                    e = Me[4];
                    Ee.Aa();
                    var f = pf[3];
                    Ee.Aa();
                    var g = pf[4];
                    Oo(Me, b, 0, e / 2);
                    Oo(pf, b, 0, e / 2, f / 2, g / 2);
                    b.translate(0, 0);
                    qr(d.j, b)
                } else b.translate(0, 0), b.textAlign = "center", b.font = "60px " +
                    we, b.fillStyle = "#700", b.fillText("" + e, 0, 0), b.strokeStyle = "#F93", b.strokeText("" + e, 0, 0);
                b.restore();
                b.restore()
            }
            if (c.R) {
                b.save();
                b.translate(b.canvas.width / 2, 70);
                d = a.T;
                g = c.$a;
                var h = c.nb;
                e = zr(c, "alpha_team_color");
                f = zr(c, "bravo_team_color");
                if (d.H != g || d.R != h) {
                    d.H = g;
                    d.R = h;
                    var k = g + h,
                        l = d.j * (0 == k ? .5 : g / k);
                    k = d.j * (0 == k ? .5 : h / k);
                    var m = Cc(d.v);
                    d.v = new G({
                        Xc: m.Xc,
                        Mc: m.Mc,
                        Yc: m.Yc,
                        Zc: m.Zc
                    }, {
                        Xc: g,
                        Mc: l,
                        Yc: h,
                        Zc: k
                    }, 250);
                    d.v.start()
                }
                g = Cc(d.v);
                h = -d.j / 2;
                l = g.Mc + h;
                b.save();
                d.o || (d.o = b.createLinearGradient(0, -4, 0, 20), d.o.addColorStop(0,
                    "rgba(76,92,92,0.5)"), d.o.addColorStop(1, "rgba(136,136,136,0.5)"));
                b.fillStyle = d.o;
                b.beginPath();
                b.moveTo(h, -4);
                b.lineTo(h + d.j, -4);
                b.arc(h + d.j, 6, 10, -Math.PI / 2, Math.PI / 2);
                b.lineTo(h, 16);
                b.arc(h, 6, 10, Math.PI / 2, 3 * Math.PI / 2);
                b.fill();
                b.fillStyle = "rgb(" + e + ")";
                b.fillRect(h, 0, g.Mc, 12);
                b.beginPath();
                b.arc(h, 6, 6, Math.PI / 2, 3 * Math.PI / 2);
                b.fill();
                b.fillStyle = "rgb(" + f + ")";
                b.fillRect(l, 0, g.Zc, 12);
                b.beginPath();
                b.arc(h + d.j, 6, 6, -Math.PI / 2, Math.PI / 2);
                b.fill();
                b.fillStyle = "#fff";
                b.fillRect(-2, -4, 4, 20);
                b.font = "30px " +
                    we;
                b.textAlign = "right";
                b.textBaseline = "middle";
                b.fillText("" + Math.floor(g.Xc), h - 6 - 12, 6);
                b.textAlign = "left";
                b.fillText("" + Math.floor(g.Yc), h + d.j + 6 + 12, 6);
                b.restore();
                b.restore()
            }
            b.save();
            d = c.H;
            c.R && (b.font = "50px " + we, b.globalAlpha = 1, b.fillStyle = "#fff", b.textAlign = "center", b.textBaseline = "middle", 0 >= d ? c = "0:00" : (c = Math.floor(d % 6E4 / 1E3), c = Math.floor(d / 6E4) + ":" + (10 > c ? "0" : "") + c), b.fillText(c, b.canvas.width / 2, 36));
            E && a.R && (a = a.R, b.save(), b.globalAlpha = a.o, e = a.j, a = K.width / 2, c = K.height - (K.height - (Vn.height +
                Vn.top)) / 2, d = e.o.x - e.j.x, e = e.o.y - e.j.y, b.save(), Mo(Ze, a - 2, c + 8), Mo($e, a + Math.min(Math.max(-72.5, d), 72.5), c + Math.min(Math.max(-72.5, e), 72.5)), b.restore(), b.restore());
            b.restore()
        };
    var Hr = function() {
            this.o = this.j = 0;
            this.H = !1;
            this.v = 0
        },
        Ir = function(a, b) {
            if (a.H = b) a.v = Ka()
        },
        Er = function(a, b, c) {
            b.save();
            var d = 0;
            a.H && (d = .25 * Math.sin(.025 * (Ka() - a.v)));
            var e = a.j;
            a = a.o + d;
            var f = Gi.Aa();
            d = Ji(f, e);
            f = Ki(f, a);
            b.strokeStyle = "#fff";
            b.beginPath();
            b.moveTo(d, 0);
            b.lineTo(d, f);
            b.stroke();
            (c = c ? Ye : tf) && No(c, e, a, .5);
            b.restore()
        };
    var Kr = function(a, b, c, d, e, f) {
        J.call(this);
        var g = this;
        this.U = new Cr;
        td(this, this.U);
        this.Da = b;
        Tp(this.Da);
        this.Na = new jm;
        d && lm(this.Na, Jr(this));
        this.j = new Aq(this.Na, b);
        qm(this.j, function(a) {
            xr(g.U.v, a)
        });
        this.ta = a;
        this.T = d;
        this.Nb = !1;
        this.Bb = e;
        this.lc = f;
        this.o = null;
        this.nb = this.$a = 0;
        this.W = new Mi;
        this.rb = -1;
        this.H = 0;
        this.Lb = this.R = !1;
        this.Vb = null;
        this.kb = [];
        this.Wb = !1;
        this.Ja = null;
        this.S = 1;
        this.v = null;
        this.Sa = new lr(function() {
            g.U && yr(g.U.v)
        });
        this.Gb = !1;
        this.wa = (new Promise(function(a) {
            return g.mc =
                a
        })).then(function() {
            return g.wa = null
        });
        c.reset();
        this.U.R = c
    };
    v(Kr, J);
    var Lr = function(a) {
        return a.wa ? a.wa : Promise.resolve()
    };
    Kr.prototype.Wa = function() {
        J.prototype.Wa.call(this);
        if (this.v) {
            ee(this.v);
            var a = this.v;
            je(a);
            a.o && a.o.gain.setValueAtTime(1, a.j.currentTime)
        }
        this.o = null
    };
    var Mr = function(a) {
            return !!(a.o && a.o.ta && a.v && a.v.S.j)
        },
        Or = function(a) {
            var b = Nr(a, 1, 1, 1, a.o.T);
            to(a.j, b.v);
            a.j.j.ab();
            return b
        },
        Pr = function(a) {
            return Nr(a, 5, 2, 2, a.o.S)
        },
        Nr = function(a, b, c, d, e) {
            var f = new Wg;
            Zh(f, a.j.Ca++);
            W(f, 2, d);
            W(f, 3, e.x);
            W(f, 4, e.y);
            e = new Xg;
            W(e, 2, c);
            W(e, 3, b);
            W(e, 4, !1);
            Bg(f, 6, e);
            b = new ah;
            W(b, 2, d);
            d = new ch;
            W(d, 1, 0);
            c = zr(a, "player_base_speed");
            W(d, 2, c);
            c = zr(a, "player_vision_radius");
            W(d, 3, c);
            W(d, 6, 0);
            W(d, 8, !0);
            Bg(b, 3, d);
            d = new Ug;
            Bg(d, 1, f);
            Bg(d, 2, b);
            return wo(a, d)
        },
        Qr = function(a) {
            a.Ja =
                new Hr;
            return a.Ja
        },
        zr = function(a, b) {
            var c = a.W.get(b);
            return "false" == c ? !1 : c
        },
        Rr = function(a, b) {
            a.o = new dr(a.Na, a.ta, a.j, a.W, b, a.T);
            a.v = a.T || !a.o.j.j.properties.outside ? me.Ad : me.Pd;
            a.v.S.preload();
            le.xd.preload();
            le.Uc.preload()
        },
        Jr = function(a) {
            var b = new dl;
            b.te = function(b) {
                var c = b.Ya.j,
                    e = b.Xa.j;
                b = c.$a || e.$a;
                var f = c.ta || e.ta,
                    g = c.Ca || e.Ca;
                c = c.kb || e.kb;
                if (b && f && b.mb) a.Nb && (vq(b), Tp(a.Da), a.Bb());
                else if (b && g) {
                    c = g.vc && b && g.vc.ab() == b.ab();
                    if (f = g.Gd() && g.vc != b) {
                        if (f = uk(g, "use_ally_candle_bonus") && c) {
                            f =
                                Number.MAX_VALUE;
                            e = b.Ha;
                            for (var h = p(b.ie.v.values()), k = h.next(); !k.done; k = h.next())
                                if (k = k.value, k.ab() == b.ab()) {
                                    var l = k.Ha;
                                    k = l.x - e.x;
                                    l = l.y - e.y;
                                    k = k * k + l * l;
                                    k < f && (f = k)
                                } f = 400 <= f
                        }
                        f = !f && uk(g, "use_collectible_stealing") && U(g.Zb, 2) && !c
                    }
                    if (f && (c = uk(g, "max_collectibles_held"), !(-1 != c && b.lb.length >= c))) {
                        g.vc ? (c = g.vc, f = c.lb.indexOf(g), c = c.lb.splice(f, 1), g = g.vc, Uk(g), wq(g, -1), xq(g, 2), wq(b, 1), xq(b, 1)) : c = [g];
                        g = p(c);
                        for (c = g.next(); !c.done; c = g.next()) c = c.value, c.Kc(b), 0 <= b.lb.indexOf(c) ? console.error("adding a collectible that is already in the list") :
                            Sk(b, 3) ? b.lb.unshift(c) : b.lb.push(c), f = b.ab(), 1 == f ? Ok(c, 2) : 2 == f && Ok(c, 3);
                        Uk(b)
                    }
                } else b && c && a.lc(b, c)
            };
            b.Wd = ya;
            return b
        },
        yo = function(a, b) {
            for (var c = p(b), d = c.next(); !d.done; d = c.next()) {
                d = d.value;
                var e = U(d, 1),
                    f = void 0;
                switch (ug(d, nh[0])) {
                    case 2:
                        f = U(d, 2);
                        break;
                    case 3:
                        f = wg(d, 3);
                        break;
                    case 4:
                        f = U(d, 4)
                }
                a.W.set(e, f)
            }
        },
        Sr = function(a, b) {
            for (var c = p(a.kb), d = c.next(); !d.done; d = c.next())
                if (d = d.value, U(d, 1) == b) return U(d, 2);
            return 0
        },
        wo = function(a, b) {
            var c = rm(a.j, U(Xh(b), 1));
            c || (c = Tr(a, b)) && um(a.j, c);
            var d = X(b,
                ah, 2, 1);
            W(d, 1, c.v);
            d = X(b, ah, 2, 1);
            xo(a.j, d);
            return c
        },
        Tr = function(a, b) {
            switch (U(Xh(b), 2)) {
                case 1:
                case 2:
                    return new rq(Xh(b), a.ta, a.W, a.j, a);
                case 16:
                    return new bp(Xh(b), a.ta, a.W, a.j);
                case 4:
                    return new vm(Xh(b), a.ta, a.W, a.j);
                case 32:
                    return new bq(Xh(b), a.ta, a.W, a.j)
            }
            return null
        };
    Kr.prototype.tick = function(a) {
        if (this.wa)
            if (Mr(this)) this.mc();
            else return;
        kr || (this.Sa.S = Wb());
        var b = this.H,
            c = this.U;
        c.o && Fc(c.o, a);
        var d = c.H;
        d.o += a;
        d = c.v;
        d.H += a;
        Fc(c.T.v, a);
        this.j.Da(a);
        this.H -= a;
        if (!this.T && 21E3 >= this.H && this.R && !this.Wb) {
            if (a = this.j.j) c = Vn.width / 2 + Vn.left, d = .3 * Vn.height + Vn.top, c = new fq(hc("time_warning"), uk(a, "time_warning_duration_ms"), c, d), sq(a, c), ee(this.v), this.v = me.xd, this.v.play();
            this.Wb = !0
        }!this.T && 1E3 > this.H && 1E3 <= b && this.R && me.qe.play()
    };
    var Ur = function(a) {
            var b = function() {
                a.ta.H();
                setTimeout(b, zr(a, "client_broadcast_timeout"))
            };
            b()
        },
        Vr = function(a) {
            a.v && (a.T ? Tn(a.v, 14769) : a.o.j.j.properties.outside ? Tn(a.v, 3503) : Tn(a.v, 14769))
        },
        Wr = function(a) {
            a.v && (a = a.v, je(a), a.o && (a.o.gain.setValueAtTime(a.o.gain.value, a.j.currentTime), a.o.gain.exponentialRampToValueAtTime(.01, a.j.currentTime + 3)))
        };
    Kr.prototype.wake = function() {
        this.j.wake()
    };
    var Xr = function(a, b, c, d) {
        this.j = a;
        this.o = b;
        this.v = Math.abs(c);
        this.H = d || !1;
        this.H || (this.j += this.v, this.o += this.v)
    };
    z(Xr, up);
    Xr.prototype.moveTo = function(a, b) {
        this.j = a;
        this.o = b;
        this.H || (this.j += this.v, this.o += this.v)
    };
    Xr.prototype.contains = function(a, b) {
        return Math.sqrt((this.j - a) * (this.j - a) + (this.o - b) * (this.o - b)) <= this.v
    };
    Xr.prototype.draw = function(a) {
        a.beginPath();
        a.arc(this.j, this.o, this.v, 0, 2 * Math.PI, !0);
        a.fill();
        a.stroke()
    };
    var Yr = function(a) {
        J.call(this);
        this.o = a;
        this.j = {}
    };
    z(Yr, J);
    var Zr = [],
        $r = function(a, b, c, d, e) {
            Ca(c) || (c && (Zr[0] = c.toString()), c = Zr);
            for (var f = 0; f < c.length; f++) {
                var g = Id(b, c[f], d || a.handleEvent, e || !1, a.o || a);
                if (!g) break;
                a.j[g.key] = g
            }
        },
        as = function(a) {
            hb(a.j, function(a, c) {
                this.j.hasOwnProperty(c) && Rd(a)
            }, a);
            a.j = {}
        };
    Yr.prototype.Wa = function() {
        Yr.Mb.Wa.call(this);
        as(this)
    };
    Yr.prototype.handleEvent = function() {
        throw Error("p");
    };
    var bs = function() {
        this.va = this.ta = this.wa = this.H = this.o = null;
        this.Ca = !1;
        this.S = null;
        this.T = this.R = !1;
        this.j = !0;
        this.U = this.W = !1;
        this.v = null
    };
    bs.prototype.reset = function() {
        this.va = this.ta = this.wa = this.H = this.o = null;
        this.Ca = !1;
        this.S = null;
        this.T = this.R = !1;
        this.j = !0;
        this.U = this.W = !1;
        this.v = null
    };
    var fs = function() {
            var a = cs;
            a.v = "portrait-primary";
            document[ds] && es(a)
        },
        es = function(a) {
            a.v && (window.screen.lockOrientation && window.screen.lockOrientation(a.v), window.screen.orientation && window.screen.orientation.lock && window.screen.orientation.lock(a.v)["catch"](ya))
        },
        hs = function(a) {
            a.R && (a.U ? (gs.call(document), a.U = !1) : (a.S.call(a.H), es(a)))
        },
        js = function(a, b, c, d) {
            var e = cs;
            d = void 0 === d ? ya : d;
            e.H = a;
            e.o = b;
            e.wa = d;
            e.S = a[bc(a, "requestFullscreen")];
            a = !!(document[bc(document, "fullscreenEnabled")] && e.S && gs);
            gn();
            e.R = Tm.Tb && a;
            gn();
            e.T = Tm.Rb;
            e.j = !0;
            if (e.R || e.T) Vb(document.body, "margin", "0"), Vb(e.H, "overflow", "visible", "width", "100%", "height", "100%"), document.body.scrollLeft = 0, c ? $r(c, window, "scroll", is) : Id(window, "scroll", is, !0)
        },
        ks = function(a) {
            var b = cs;
            b.o.push(a);
            b.j = !0
        };
    bs.prototype.close = function() {
        this.U = !0;
        hs(this)
    };
    Aa(bs);
    var ds = bc(document, "fullscreenElement"),
        gs = document[bc(document, "exitFullscreen")],
        is = function(a) {
            a.preventDefault();
            a.stopPropagation();
            return !1
        };
    var ls = function(a) {
        this.j = a
    };
    z(ls, up);
    var ms = function(a, b, c, d) {
        return new ls([a, b, a + c, b, a + c, b + d, a, b + d])
    };
    ls.prototype.contains = function(a, b) {
        var c = this.j;
        if (6 > c.length) return !1;
        for (var d = !1, e = 0, f = c.length - 2; e < c.length; f = e, e += 2) {
            var g = c[e],
                h = c[e + 1],
                k = c[f];
            f = c[f + 1];
            a < g != a < k && b > h + (a - g) * (f - h) / (k - g) && (d = !d)
        }
        return d
    };
    ls.prototype.draw = function(a) {
        a.beginPath();
        for (var b = 0; b < this.j.length; b += 2) a.lineTo(this.j[b], this.j[b + 1]);
        a.lineTo(this.j[0], this.j[1]);
        a.fill();
        a.stroke()
    };
    var ns = function(a, b, c) {
        b -= a.j[0];
        c -= a.j[1];
        if (0 != b || 0 != c)
            for (var d = 0; d < a.j.length - 1; d += 2) a.j[d] += b, a.j[d + 1] += c
    };
    var os = function(a) {
            return 0 == a.indexOf("//") ? "https:" + a : a
        },
        ps = function() {
            return null != window.agsa_ext && null != window.agsa_ext.share
        },
        qs = function(a, b) {
            var c = new ub;
            for (d in b) c.add(d, b[d]);
            var d = new ob(a);
            rb(d, c);
            return d.toString()
        };
    Ee.Aa();
    var rs = E ? 285 : 520,
        ss = E ? 93 : 47,
        ts = E ? 270 : 291,
        us = E ? 2 : 7,
        vs = E ? -128 : -140,
        ws = E ? 115 : 106,
        xs = E ? 100 : 105,
        ys = E ? 255 : 715,
        zs = E ? 642 : 125,
        As = E ? 101 : 615,
        Bs = E ? 834 : 353,
        Cs = (new Map).set(1, "#005c20").set(2, "#f6d4fb"),
        Ds = (new Map).set(1, "#8bffb5").set(2, "#dc6dfb"),
        Es = ne / 2,
        Fs = E ? 225 : 15,
        Gs = (new Map).set(0, E ? new Xr(425, 682, 50, !0) : new Xr(892, 165, 50, !0)).set(1, E ? new Xr(101, 811, 55, !0) : new Xr(615, 346, 55, !0)).set(2, E ? new Xr(247, 849, 68, !0) : new Xr(738, 438, 68, !0)).set(3, E ? new Xr(432, 811, 55, !0) : new Xr(852, 346, 55, !0)).set(4, ms(Es + 91, Fs + 96,
            122, 122)).set(5, ms(Es + 235, Fs + 96, 122, 122)).set(6, ms(Es + 91, Fs + 241, 122, 122)).set(7, ms(Es + 235, Fs + 241, 122, 122)).set(8, new Xr(Es + 382, Fs + 49, 51, !0)),
        Hs = (new Map).set(1, "most_spirits_collected").set(2, "least_spirits_collected").set(3, "most_spirits_held_at_once").set(4, "most_spirits_held_at_end").set(5, "stole_most").set(6, "most_stolen_from").set(7, "most_team_bonus").set(10, "most_mega_flames").set(11, "fastest_to_max_powerups").set(12, "fewest_powerups"),
        Is = (new Map).set(1, "most_spirits_collected_subtitle").set(2,
            "least_spirits_collected_subtitle").set(3, "most_spirits_held_at_once_subtitle").set(4, "most_spirits_held_at_end_subtitle").set(5, "stole_most_subtitle").set(6, "most_stolen_from_subtitle").set(7, "most_team_bonus_subtitle").set(10, "most_mega_flames_subtitle").set(11, "fastest_to_max_powerups_subtitle").set(12, "fewest_powerups_subtitle"),
        Ks = function(a, b) {
            J.call(this);
            this.H = a;
            this.W = b;
            this.S = this.v = 0;
            this.R = a.Vb;
            var c = this.R == a.j.j.ab();
            this.Ja = c ? me.Te : me.Ke;
            this.Da = c ? me.Se : me.Je;
            this.kb = c ? 4363 : 6E3;
            this.wa =
                new Map;
            this.rb = Js(this);
            this.Bb = 1 == this.R ? E ? He : Ge : 2 == this.R ? E ? Le : Ke : E ? vf : uf;
            if (1 == this.R) {
                var d = "alpha_team_wins";
                c = "#019d4b"
            } else 2 == this.R ? (d = "bravo_team_wins", c = "#9a00d6") : (d = "draw", c = "#2c2b8f");
            d = new or(d, 64, 360);
            d.Ga(rs, 264);
            d.j = c;
            this.Gb = d;
            this.U = new or("host_private_match", 40, 90, 2);
            this.U.j = "#3d4e93";
            this.U.Ga(As, Bs);
            this.Sa = hc(Hs.get(Sr(this.H, this.H.j.j.v)) || "undefined_award");
            this.Na = hc(Is.get(Sr(this.H, this.H.j.j.v)) || "undefined_award_subtitle");
            this.$a = E ? Se : Re;
            this.ta = !1;
            this.T = null;
            this.nb = document.getElementById("hplogofsdomroot");
            this.o = document.createElement("div");
            this.o.id = "hpofsharelinkcopied";
            this.o.style.font = "28px " + we;
            this.o.textContent = hc("share_link_copied");
            this.j = document.createElement("div");
            this.j.id = "hpofsharelinkcontainer";
            Vb(this.j, "width", "100%");
            this.j.appendChild(this.o);
            this.nb.appendChild(this.j);
            zn(16);
            this.Ja.play()
        };
    v(Ks, J);
    Ks.prototype.Wa = function() {
        J.prototype.Wa.call(this);
        ee(this.Ja);
        ee(this.Da);
        this.j && (this.j.remove(), this.j = null)
    };
    var Js = function(a) {
            var b = [].concat(ba(a.H.j.H.values()));
            b.sort(function(a, b) {
                return b.Hc() - a.Hc()
            });
            for (var c = p(b), d = c.next(); !d.done; d = c.next()) {
                d = d.value;
                var e = d.ab(),
                    f = d.Hc();
                d.mb && (vn.s = f);
                a.wa.set(e, (a.wa.get(e) || 0) + f)
            }
            return b
        },
        Ls = function(a, b, c) {
            if (b = Gs.get(b)) Hp(a.W, b, function(a) {
                "mouseup" == a && c()
            }), Lp(a.W, b)
        },
        Ms = function(a) {
            for (var b = p(Gs.values()), c = b.next(); !c.done; c = b.next()) Kp(a.W, c.value)
        },
        Rs = function(a) {
            Ls(a, 0, function() {
                if (ps()) {
                    var b = Ns(),
                        c = Os();
                    !fc() && ps() && (xn(15), window.agsa_ext.share(c +
                        " " + b, null))
                } else Ms(a), a.ta = !0, Ps(a)
            });
            Ls(a, 2, function() {
                Ms(a);
                Qs(a, 4);
                xn(4)
            });
            xe || Ls(a, 1, function() {
                Ms(a);
                Qs(a, 3);
                xn(113)
            });
            Ls(a, 3, function() {
                xn(3);
                var a = google.doodle ? google.doodle.url : "";
                if (a) {
                    var c = !Ob;
                    if (google.nav && google.nav.go) {
                        var d = a;
                        if (0 == a.indexOf("/search")) {
                            d = new ob(window.location);
                            d.o = "/search";
                            a = Cb(a).j;
                            for (var e = a.wc(), f = 0; f < e.length; f++) {
                                var g = e[f],
                                    h = d,
                                    k = g;
                                g = a.get(g);
                                h.j.set(k, g)
                            }
                            d = d.toString()
                        }
                        c ? window.open(d) : google.nav.go(d)
                    } else c ? window.open(a) : window.parent ? window.parent.location.assign(a) :
                        window.location.assign(a)
                }
            })
        },
        Ns = function() {
            var a = dc("shortlink", "https://www.google.com/?doodle=73509581");
            return 0 == a.indexOf("//") ? "https:" + a : a
        },
        Os = function() {
            return dc("share", "TODO(b/116542685): Default share message")
        },
        Ps = function(a) {
            var b = Ns(),
                c = Os(),
                d = Mn("share.png");
            Ls(a, 4, function() {
                xn(16);
                Zn(K, b).then(function() {
                    $n(a.o, !0);
                    setTimeout(function() {
                        return $n(a.o, !1)
                    }, 2E3)
                })
            });
            Ls(a, 5, function() {
                var a = b;
                fc() || (a = os(a), a = "text=" + encodeURIComponent(String(c + "\n" + a)), pn("http://twitter.com/intent/tweet?" +
                    a), xn(6))
            });
            Ls(a, 6, function() {
                var a = b;
                fc() || (a = os(a), a = qs("https://www.tumblr.com/widgets/share/tool", {
                    canonicalUrl: a,
                    posttype: "photo",
                    title: c,
                    content: d
                }), pn(a), xn(12))
            });
            Ls(a, 7, function() {
                var a = b;
                fc() || (a = os(a), a = qs("https://www.facebook.com/dialog/share", {
                    app_id: "738026486351791",
                    href: a,
                    hashtag: "#GoogleDoodle"
                }), pn(a), xn(5))
            });
            Ls(a, 8, function() {
                Ms(a);
                Rs(a);
                a.ta = !1
            })
        },
        Qs = function(a, b) {
            a.v = b;
            a.S = 0;
            switch (a.v) {
                case 1:
                    Rs(a), zn(17), Tn(a.Da, a.kb)
            }
        };
    Ks.prototype.tick = function(a) {
        this.S += a;
        switch (this.v) {
            case 0:
                3E3 <= this.S && Qs(this, 1)
        }
    };
    var Ss = function(a, b, c, d) {
        b.save();
        b.translate(c, 0);
        c = Cs.get(d);
        b.fillStyle = c;
        b.font = "56px " + we;
        b.fillText("" + (a.wa.get(d) || 0), 0, us);
        b.font = "48px " + we;
        var e = xs;
        a = p(a.rb);
        for (var f = a.next(); !f.done; f = a.next())
            if (f = f.value, f.ab() == d) {
                if (f.mb) {
                    b.fillStyle = Ds.get(d);
                    var g = e - 47.5,
                        h = g + 48,
                        k = e + 47.5,
                        l = k - 48;
                    b.beginPath();
                    b.moveTo(-49.5, g);
                    b.lineTo(49.5, g);
                    b.arc(49.5, h, 48, -Math.PI / 2, 0);
                    b.lineTo(97.5, l);
                    b.arc(49.5, l, 48, 0, Math.PI / 2);
                    b.lineTo(-49.5, k);
                    b.arc(-49.5, l, 48, Math.PI / 2, Math.PI);
                    b.lineTo(-97.5, h);
                    b.arc(-49.5,
                        h, 48, Math.PI, 3 * Math.PI / 2);
                    b.fill();
                    b.fillStyle = c
                }
                g = zi(f.nb)[0];
                Oo(g, b, -45, e, 90, 90);
                f.Lb && Oo(Je, b, -72, e + 26);
                b.fillText("" + f.Hc(), 45, e);
                e += 95
            } b.restore()
    };
    Ee.Aa();
    var Ts = function(a, b) {
            this.S = a;
            this.T = b;
            this.j = hf;
            this.o = this.v = this.R = this.H = null
        },
        Vs = function(a) {
            var b = Us(a);
            a.H = ms(K.width / 2 - b.width / 2, K.height / 2 - b.height / 2, b.width, b.height);
            Hp(a.S, a.H, function(b) {
                "mouseup" == b && (Kp(a.S, a.H), a.T())
            });
            Lp(a.S, a.H);
            var c = document.createElement("canvas").getContext("2d");
            a.R = hp(c, hc("error_eek"), we, 56, 20, .8 * b.width, 1);
            a.v = hp(c, hc("error_something_went_wrong"), we, 48, 20, .8 * b.width, 1);
            a.o = hp(c, hc("error_try_again"), we, 48, 20, b.width / 2, 1)
        },
        Ws = function(a) {
            return new qn(Math.min(a.j[3], .8 *
                ne), Math.min(a.j[4], .8 * oe))
        },
        Us = function(a) {
            var b = Ws(a);
            b = Un(a.j, b.width, b.height);
            return new qn(a.j[3] * b, a.j[4] * b)
        },
        Xs = function(a, b) {
            if (a.R && a.v && a.o) {
                b.save();
                Ro(b);
                b.translate(K.width / 2, K.height / 2);
                var c = Ws(a);
                c = Oo(a.j, b, 0, 0, c.width, c.height);
                b.scale(c, c);
                var d = a.j[4];
                Oo(ff, b, 0, 0);
                b.fillStyle = "#5977ab";
                b.textAlign = "center";
                b.textBaseline = "middle";
                ip(b, a.R, 0, -d / 2 + 50, a.R.fontSize);
                ip(b, a.v, 0, -d / 2 + 110, a.v.fontSize);
                ip(b, a.o, 0, 150, a.o.fontSize);
                d = qf[3];
                var e = qf[4],
                    f = a.o;
                b.font = f.fontStyle + " " + f.fontSize +
                    "px " + f.fontFamily;
                for (var g = 0, h = 0; h < f.lines.length; h++) g = Math.max(g, b.measureText(f.lines[h]).width);
                Oo(qf, b, g / 2 + 10 + c * d / 2, 150, c * d, c * e);
                b.restore()
            }
        };
    var Ys = function() {
            var a = new So(Cf);
            a.Ga(-100, 0);
            a.hb = 0;
            var b = new So(Cf);
            b.Ga(0, 0);
            b.hb = 0;
            var c = new So(Cf);
            c.Ga(100, 0);
            c.hb = 0;
            this.o = [a, b, c];
            this.v = new Kc([new H(new G({
                opacity: 0,
                y: 0
            }, {
                opacity: 1,
                y: -15
            }, 500), function(b) {
                a.hb = b.opacity;
                a.Ga(a.Db().x, b.y)
            }), new H(new G({
                opacity: 0,
                y: 0
            }, {
                opacity: 1,
                y: -15
            }, 500), function(c) {
                a.hb = 1 - c.opacity;
                a.Ga(a.Db().x, -15 - c.y);
                b.hb = c.opacity;
                b.Ga(b.Db().x, c.y)
            }), new H(new G({
                opacity: 0,
                y: 0
            }, {
                opacity: 1,
                y: -15
            }, 500), function(a) {
                b.hb = 1 - a.opacity;
                b.Ga(b.Db().x, -15 - a.y);
                c.hb =
                    a.opacity;
                c.Ga(c.Db().x, a.y)
            }), new H(new G({
                opacity: 1,
                y: -15
            }, {
                opacity: 0,
                y: 0
            }, 500), function(a) {
                c.hb = a.opacity;
                c.Ga(c.Db().x, a.y)
            })], !0);
            this.j = 0
        },
        Zs = function(a) {
            return 50 < a.j && 2E3 > a.j ? new Promise(function(b) {
                return setTimeout(b, 2E3 - a.j)
            }) : Promise.resolve()
        };
    Ys.prototype.tick = function(a) {
        Hc(this.v, a);
        for (var b = p(this.o), c = b.next(); !c.done; c = b.next()) To(c.value, a);
        this.j += a
    };
    var $s = function() {
        this.j = {};
        this.o = 0;
        this.v = document.body
    };
    Aa($s);
    var at = {};
    $s.prototype.reset = function() {
        for (var a in this.j) bt(this, a);
        this.j = {}
    };
    var bt = function(a, b) {
            var c = a.j[b];
            c && (c.Ld && window.clearTimeout(c.Ld), c.Bc && (c.Bc.parentNode && c.Bc.parentNode.removeChild(c.Bc), c.Bc = null), c.oe = null, c.ad = null)
        },
        ct = function(a, b, c) {
            var d = $s.Aa(),
                e = d.j[a];
            if (e) {
                if (e.rd) {
                    b && b(e.rd);
                    return
                }
                if (e.Ld) return
            } else e = {
                ad: c,
                $e: a,
                Bc: null,
                oe: b,
                Ld: 0,
                rd: null
            };
            e.Bc || (e.Bc = document.createElement("script"));
            b = "c" + ++d.o;
            at[b] = function(a) {
                var b = $s.Aa(),
                    c = e;
                c.rd = a.id;
                c.rd ? c.oe && c.oe(c.rd) : c.ad && c.ad();
                bt(b, c.$e)
            };
            b = "appspot.php?callback=google.doodle.lsc." +
                b + "&url=" + encodeURIComponent(a);
            e.Bc.src = b;
            e.Ld = window.setTimeout(function() {
                e.ad && e.ad();
                bt($s.Aa(), a)
            }, 2E3);
            d.v.appendChild(e.Bc);
            d.j[a] = e
        };
    La("google.doodle.lsc", at);
    var Ho = Go.Aa();
    Ee.Aa();
    var dt = E ? 130 : 86,
        et = function(a, b, c, d) {
            this.wa = a;
            this.o = document.createElement("div");
            this.o.id = "hpofsharelink";
            this.T = 48;
            this.ta = document.getElementById("hplogofsdomroot");
            this.v = rf;
            this.W = b;
            this.R = !1;
            this.S = 0;
            this.va = d;
            this.Ca = c;
            this.H = document.createElement("div");
            this.H.id = "hpofsharelinkcopied";
            this.H.style.font = "28px " + we;
            this.H.textContent = hc("share_link_copied");
            this.U = new or("share_invite_link", 24, .9 * ne);
            this.U.j = "#ff8c00"
        },
        ht = function(a) {
            a.o.readOnly = !0;
            Vb(a.o, "textAlign", "center", "border",
                "none", "padding", "0", "background", "none", "font", a.T + "px sans-serif", "pointerEvents", "auto");
            var b = ft();
            b.onclick = function() {
                Zn(b, a.o.textContent).then(function() {
                    $n(a.H, !0);
                    setTimeout(function() {
                        return $n(a.H, !1)
                    }, 2E3)
                })
            };
            a.j = document.createElement("div");
            a.j.id = "hpofsharelinkcontainer";
            a.ta.appendChild(a.j);
            a.j.appendChild(b);
            a.j.appendChild(a.o);
            a.j.appendChild(a.H);
            a.W && a.W.then(function(b) {
                Ho.set(a.Ca ? 3 : 2, b);
                var c = Io();
                a.R = !0;
                ct(c, function(b) {
                    a.R = !1;
                    a.o.textContent = b;
                    gt(a)
                }, function() {
                    a.R = !1;
                    a.o.textContent = c;
                    gt(a)
                })
            })
        };
    et.prototype.dispose = function() {
        Kp(this.wa, null);
        $s.Aa().reset();
        this.j && (this.j.remove(), this.j = null)
    };
    var gt = function(a) {
            var b = Un(a.v, .9 * ne, a.v[4]),
                c = b * (a.v[3] - 48),
                d = Math.floor(c / K.width * K.offsetWidth),
                e = b * (a.v[4] - 48);
            b = Math.floor(e / K.height * K.offsetHeight);
            e = p([Math.floor((a.va[3] - c) / 2 / K.width * K.offsetWidth + K.offsetLeft), Math.floor((dt - e / 2) / K.height * K.offsetHeight + K.offsetTop)]);
            c = e.next().value;
            e = e.next().value;
            var f;
            (f = E) || (gn(), f = 9 == Tm.name);
            f && (c -= a.j.offsetParent.offsetLeft, e -= a.j.offsetParent.offsetTop);
            !a.j || a.j.offsetLeft == c && a.j.offsetTop == e && a.j.offsetWidth == d && a.j.offsetHeight == b || (a.T =
                48, Vb(a.j, "left", c + "px", "top", e + "px", "width", d + "px", "height", b + "px"), Vb(a.o, "fontSize", a.T + "px"));
            d = K.getContext("2d");
            d = hp(d, a.o.textContent, "sans-serif", 48, 12, a.o.clientWidth, 1);
            Vb(a.o, "fontSize", d.fontSize + "px")
        },
        it = function(a, b) {
            var c = b.canvas.width,
                d = c / 2;
            c = Oo(a.v, b, d, dt, .9 * c, a.v[4]);
            a.U.Ga(d, dt + c * a.v[4] / 2 + 24);
            qr(a.U, b);
            gt(a);
            a.R && (b.save(), b.strokeStyle = "#333", b.lineWidth = 4, b.beginPath(), b.arc(d, dt, c * a.v[4] / 4, a.S, a.S + Math.PI / 3), b.stroke(), b.restore())
        },
        ft = function() {
            var a = document.createElementNS("http://www.w3.org/2000/svg",
                "svg");
            a.id = "hpofsharebutton";
            a.setAttribute("viewBox", "0 0 24 24");
            a.setAttribute("width", "24");
            a.setAttribute("height", "24");
            var b = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            b.setAttribute("cx", "12");
            b.setAttribute("cy", "12");
            b.setAttribute("r", "12");
            b.setAttribute("fill", "white");
            var c = document.createElementNS("http://www.w3.org/2000/svg", "path");
            c.setAttribute("transform", "translate(4, 4) scale(0.66)");
            c.setAttribute("d", "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z");
            a.appendChild(b);
            a.appendChild(c);
            return a
        };
    var jt = [{
            height: 86
        }, {
            height: 78,
            Fd: 12
        }, {
            height: 151,
            Fd: 12
        }, {
            height: 102
        }, {
            height: 106
        }, {
            height: 90,
            Fd: 18
        }, {
            height: 150,
            Fd: 6
        }, {
            height: 130
        }],
        kt = 1E3 / 24,
        lt = [function(a) {
            return new Lc([new H(new G({
                y: a.Db().y
            }, {
                y: a.Db().y - 8
            }, 12 * kt, tc, !0, !0), function(b) {
                return a.Ga(a.Db().x, b.y)
            }), new Kc([new H(new G({
                opacity: 0
            }, {
                opacity: 1
            }, 24 * kt, tc), function(b) {
                a.hb = b.opacity
            }), new Jc(16 * kt), new H(new G({
                opacity: 1
            }, {
                opacity: 0
            }, 11 * kt, tc), function(b) {
                a.hb = b.opacity
            }), new Jc(11 * kt)], !0)])
        }, null, function(a) {
            return new Kc([new H(new G({
                opacity: 0
            }, {
                opacity: 1
            }, 16 * kt, tc), function(b) {
                a.hb = b.opacity
            }), new Jc(1250), new H(new G({
                opacity: 1
            }, {
                opacity: 0
            }, 13 * kt, tc), function(b) {
                a.hb = b.opacity
            }), new Jc(13 * kt)], !0)
        }, function(a) {
            a.hb = 0;
            return new Kc([new Jc(10 * kt), new H(new G({
                opacity: 0
            }, {
                opacity: 1
            }, 16 * kt, tc), function(b) {
                a.hb = b.opacity
            }), new Jc(26 * kt), new H(new G({
                opacity: 1
            }, {
                opacity: 0
            }, 20 * kt, tc), function(b) {
                a.hb = b.opacity
            })], !0)
        }, function(a) {
            return new Lc([new Kc([new H(new G({
                    x: a.Db().x
                }, {
                    x: a.Db().x + 132
                }, 50 * kt, tc), function(b) {
                    return a.Ga(b.x, a.Db().y)
                }),
                new Jc(22 * kt)
            ], !0), new H(new G({
                y: a.Db().y
            }, {
                y: a.Db().y - 15
            }, 9 * kt, tc, !0, !0), function(b) {
                return a.Ga(a.Db().x, b.y)
            }), new Kc([new H(new G({
                opacity: 0
            }, {
                opacity: 1
            }, 8 * kt, tc), function(b) {
                a.hb = b.opacity
            }), new Jc(35 * kt), new H(new G({
                opacity: 1
            }, {
                opacity: 0
            }, 7 * kt, tc), function(b) {
                a.hb = b.opacity
            }), new Jc(22 * kt)], !0)])
        }, null, null, function(a) {
            return new Kc([new H(new G({
                    opacity: 0
                }, {
                    opacity: 1
                }, 16 * kt), function(b) {
                    a.hb = b.opacity
                }), new Jc(32 * kt), new H(new G({
                    opacity: 1
                }, {
                    opacity: 0
                }, 13 * kt), function(b) {
                    a.hb = b.opacity
                }),
                new Jc(11 * kt)
            ], !0)
        }],
        mt = (E ? [{
            position: new F(244, 193)
        }, {
            position: new F(405, 716)
        }, {
            position: new F(207, 648)
        }, {
            position: new F(401, 415)
        }, {
            position: new F(200, 480)
        }, {
            position: new F(151, 404)
        }, {
            position: new F(107, 209)
        }, {
            position: new F(100, 864)
        }] : [{
            position: new F(484, 168)
        }, {
            position: new F(362, 193),
            scale: new F(1, -1)
        }, {
            position: new F(456, 344)
        }, {
            position: new F(769, 419),
            rotation: 5 * Math.PI / 180
        }, {
            position: new F(635, 296)
        }, {
            position: new F(162, 308),
            rotation: -10 * Math.PI / 180
        }, {
            position: new F(97, 433),
            rotation: 60 * Math.PI /
                180,
            scale: new F(-1, 1)
        }, {
            position: new F(875, 390)
        }]).map(function(a, b) {
            return Object.assign(a, jt[b])
        }),
        nt = [{
            height: 116
        }, {
            height: 126
        }, {
            height: 136
        }, {
            height: 109
        }, {
            height: 113
        }, {
            height: 115
        }, {
            height: 129
        }, {
            height: 127
        }],
        ot = (E ? [{
            position: new F(216, 496)
        }, {
            position: new F(128, 372)
        }, {
            position: new F(140, 514)
        }, {
            position: new F(116, 638)
        }, {
            position: new F(368, 364)
        }, {
            position: new F(430, 532)
        }, {
            position: new F(326, 494)
        }, {
            position: new F(398, 675)
        }] : [{
                position: new F(414, 276)
            }, {
                position: new F(274, 174),
                rotation: -12 * Math.PI / 180
            },
            {
                position: new F(314, 316),
                rotation: -7 * Math.PI / 180
            }, {
                position: new F(216, 392)
            }, {
                position: new F(586, 282)
            }, {
                position: new F(682, 332),
                rotation: 15 * Math.PI / 180
            }, {
                position: new F(688, 206)
            }, {
                position: new F(798, 402),
                rotation: -14 * Math.PI / 180
            }
        ]).map(function(a, b) {
            return Object.assign(a, nt[b])
        }),
        pt = function(a) {
            var b = this;
            this.R = [1, 2, 3, 4, 5, 6, 7, 8].map(function(a, b) {
                var c = zi(a, "lobby");
                c = new So(c);
                c.H = !1;
                c.v = mt[b].Fd || 0;
                var d = mt[b].position;
                c.Ga(d.x, d.y);
                return c
            });
            this.U = [1, 2, 3, 4, 5, 6, 7, 8].map(function(a, b) {
                var c = zi(a,
                    "ready");
                c = new So(c);
                c.H = !1;
                var d = ot[b].position;
                c.Ga(d.x, d.y);
                return c
            });
            this.W = lt.map(function(a, d) {
                return a ? a(b.R[d]) : null
            });
            this.o = this.R;
            this.v = mt;
            this.T = a;
            a || (this.j = new So(Bf), a = mt[0].position, this.j.Ga(a.x + 23, a.y), this.H = new G({
                y: a.y
            }, {
                y: a.y - 8
            }, 12 * kt, tc, !0, !0), this.H.start());
            this.S = 0
        };
    var rt = function(a) {
            a: {
                var b = a.match(qt);
                if (b) {
                    var c = Number(b[1]);
                    var d = Number(b[2]);
                    b = Number(b[3]);
                    if (0 <= c && 255 >= c && 0 <= d && 255 >= d && 0 <= b && 255 >= b) {
                        c = [c, d, b];
                        break a
                    }
                }
                c = []
            }
            if (!c.length) throw Error("q`" + a);
            return c
        },
        tt = function(a) {
            var b = a[0],
                c = a[1];
            a = a[2];
            b = Number(b);
            c = Number(c);
            a = Number(a);
            if (b != (b & 255) || c != (c & 255) || a != (a & 255)) throw Error("r`" + b + "`" + c + "`" + a);
            b = st(b.toString(16));
            c = st(c.toString(16));
            a = st(a.toString(16));
            return "#" + b + c + a
        },
        qt = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i,
        st = function(a) {
            return 1 == a.length ? "0" + a : a
        },
        ut = function(a) {
            var b = [255, 255, 255];
            var c = Math.min(Math.max(.5, 0), 1);
            return [Math.round(c * b[0] + (1 - c) * a[0]), Math.round(c * b[1] + (1 - c) * a[1]), Math.round(c * b[2] + (1 - c) * a[2])]
        };
    var vt = function(a, b) {
        a = "rgb(" + a + ")";
        b = "rgb(" + b + ")";
        var c = E ? 80 : 60;
        this.v = new or("connected", 80, ne - 20);
        this.v.j = "#773903";
        pr(this.v, "#ff8d03", 6);
        this.v.Ga(ne / 2, c);
        this.H = new or("connected", 80, ne - 20);
        this.H.j = "#773903";
        this.H.Ga(ne / 2, c);
        c += 90;
        this.j = new or("team_alpha", 64, ne / 2 - 30);
        this.j.v = "right";
        this.j.Ga(ne / 2 - 50, c);
        this.j.j = a;
        pr(this.j, tt(ut(rt(a))));
        this.o = new or("team_bravo", 64, ne / 2 - 30);
        this.o.v = "left";
        this.o.Ga(ne / 2 + 50, c);
        this.o.j = b;
        pr(this.o, tt(ut(rt(b))));
        this.R = new or("versus", 48, 60);
        this.R.Ga(ne /
            2, c)
    };
    var wt = function(a, b) {
        this.R = hc(1 == a ? "team_alpha" : "team_bravo");
        this.v = "rgb(" + b + ")";
        this.H = tt(ut(rt(this.v)));
        this.S = new or("You are", 64, ne - 20);
        this.o = new or(this.R, E ? 120 : 100, ne - 20);
        this.o.j = this.v;
        pr(this.o, this.H);
        this.o.Ga(0, E ? 90 : 80);
        if (this.j = "en" == gc || "en-GB" == gc ? null : new or(1 == a ? "alpha_team" : "bravo_team", E ? 120 : 72, ne - 20)) this.j.j = this.v, pr(this.j, this.H), this.j.Ga(0, E ? 90 : 80)
    };
    Ee.Aa();
    Gi.Aa();
    var xt = E ? -11 : 15,
        yt = E ? 795 : 427,
        zt = E ? 120 : 83,
        At = E ? 150 : 267,
        Bt = E ? 2 : 1.5,
        Ct = E ? 829 : 429,
        Ft = function(a, b, c, d, e) {
            this.ta = a;
            this.nb = b;
            this.Lb = c;
            this.Vb = e;
            this.T = 0;
            this.o = E ? bf : af;
            this.v = b ? new et(a, d, c, this.o) : null;
            this.$a = Ie;
            this.va = new or("start_game", 48, .7 * this.$a[3]);
            this.va.j = "#f0f";
            this.va.Ga(ne / 2, Ct);
            this.Wb = hc("num_players_ready");
            this.Na = new or("num_players_ready", 24, .8 * ne);
            this.Na.j = "#fff";
            this.rb = new or("waiting_for_host", 48, .8 * ne);
            this.rb.j = "#fff";
            this.rb.Ga(ne / 2, Ct);
            this.Gb = Pe;
            Ee.Aa();
            this.Ca = new or("waiting_for_players",
                64, 1.6 * this.Gb[3] - 46);
            this.Ca.Ga(ne / 2, 70);
            this.Ca.j = "#000";
            this.Ja = me.yd;
            this.Da = new pt(b);
            this.S = new So(Af);
            this.S.H = !1;
            this.S.U = !1;
            this.Nb = b ? 1 : 8;
            Dt(this, this.Nb);
            Et(this, 0);
            this.nb ? this.Lb ? zn(6) : zn(5) : zn(4)
        },
        Et = function(a, b) {
            a.j = b;
            a.T = 0;
            var c = a.va;
            c.o = nr(c);
            c = a.Ca;
            c.o = nr(c);
            0 != b && a.v && (c = a.v, c.j && (c.j.remove(), c.j = null));
            switch (b) {
                case 0:
                    Tn(a.Ja, 3428);
                    a.o = E ? bf : af;
                    a.nb && ht(a.v);
                    break;
                case 7:
                    a.U = new G({
                        opacity: 0
                    }, {
                        opacity: 1
                    }, 250, vc);
                    a.U.start();
                    me.Pe.play();
                    ee(a.Ja);
                    break;
                case 1:
                    a.o = E ? df : cf;
                    c = a.Da;
                    c.o = c.U;
                    c.v = ot;
                    c.S = 1;
                    break;
                case 2:
                    a.H = new G({
                        scale: 1
                    }, {
                        scale: a.o[3] / At
                    }, 250, sc(.95, .05, .795, .035));
                    a.Sa = new G({
                        x: a.o[3] / 2,
                        y: a.o[4] / 2
                    }, {
                        x: K.width / 2 + xt,
                        y: yt + 70
                    }, 250, tc);
                    a.H.start();
                    a.Sa.start();
                    break;
                case 4:
                    a.S.play();
                    a.o = E ? df : cf;
                    a.wa = new G({
                        scale: .2
                    }, {
                        scale: 1
                    }, 250, sc(.95, .05, .795, .035));
                    a.wa.start();
                    break;
                case 5:
                    a.S.S = !1;
                case 6:
                    ee(a.Ja), a.v && a.v.dispose(), a.R && Kp(a.ta, a.R)
            }
        },
        Gt = function(a, b, c, d) {
            if (0 == a.j) {
                a.W = new So(zi(c, "idle"));
                a.W.H = !1;
                a.Bb = Ci(c, function(b) {
                    return a.W.Ga(0, b.y)
                });
                c = zr(b, "alpha_team_color");
                b = zr(b, "bravo_team_color");
                var e = 1 == d ? c : b;
                a.lc = new vt(c, b);
                a.mc = new wt(d, e);
                Et(a, 7)
            }
        },
        Ht = function(a) {
            Et(a, 6);
            a.kb || (a.kb = new Ts(a.ta, function() {
                document.location.reload()
            }));
            Vs(a.kb);
            me.Ie.play();
            ee(a.Ja)
        },
        Dt = function(a, b) {
            a.Nb = b;
            if (a.nb) {
                var c = a.Da;
                c.o = [];
                c.v = [];
                for (var d = 0; d < b; d++) {
                    var e = Math.floor(d % 2 ? d / 2 + 4 : d / 2);
                    c.o.push(c.U[e]);
                    c.v.push(ot[e])
                }
                c = a.Na;
                d = a.Wb.replace("[NUM]", "" + b);
                c.T = d;
                c.o = nr(c)
            }
        };
    Ft.prototype.tick = function(a) {
        if (this.v) {
            var b = this.v;
            b.S = (b.S + a / 150) % (2 * Math.PI)
        }
        this.T += a;
        b = this.Da;
        if (0 == b.S) {
            for (var c = p(b.R), d = c.next(); !d.done; d = c.next()) To(d.value, a);
            if (!b.T)
                for (Fc(b.H, a), To(b.j, a), b.j.Ga(b.j.Db().x, Cc(b.H).y), b = p(b.W), c = b.next(); !c.done; c = b.next())(c = c.value) && Hc(c, a)
        }
        this.U && Fc(this.U, a);
        this.H && Fc(this.H, a);
        this.Sa && Fc(this.Sa, a);
        this.wa && Fc(this.wa, a);
        this.Bb && Hc(this.Bb, a);
        switch (this.j) {
            case 7:
                Dc(this.U) && (Et(this, 1), Ec(this.U));
            case 1:
                1E3 <= this.T && Et(this, 2);
                break;
            case 2:
                Dc(this.H) && Et(this, 3);
                break;
            case 3:
                500 <= this.T && Et(this, 4);
                break;
            case 4:
                To(this.S, a), 3E3 <= this.T && Et(this, 5)
        }
        this.W && To(this.W, a)
    };
    var It = function(a, b) {
        var c = b.canvas.width / 2;
        it(a.v, b);
        var d = a.$a[3],
            e = a.$a[4],
            f = c - d / 2,
            g = Ct - e / 2,
            h = g + e + 24;
        a.Lb ? (Oo(a.$a, b, c, Ct), qr(a.va, b), a.R || (a.R = ms(f, g, d, e), Hp(a.ta, a.R, function(b) {
            if ("mousedown" == b) {
                Kp(a.ta, a.R);
                b = a.va;
                var c = hc("game_starting");
                b.T = c;
                b.o = nr(b);
                a.Vb()
            }
        }), Lp(a.ta, a.R))) : qr(a.rb, b);
        a.Na.Ga(c, h);
        qr(a.Na, b)
    };
    var Jt = function() {};
    Jt.prototype.S = function() {
        return Promise.reject("Not implemented")
    };
    Jt.prototype.R = function() {
        return Promise.reject("Not implemented")
    };
    Jt.prototype.T = function() {
        return Promise.reject("Not implemented")
    };
    Jt.prototype.v = function() {
        throw Error("s");
    };
    var Lt = function() {
        this.U = !0;
        this.T = !1;
        this.H = [];
        this.S = !1;
        this.j = this.R = this.o = 0;
        this.v = Kt
    };
    z(Lt, J);
    Aa(Lt);
    var Kt = 1E3 / 60,
        Mt = function(a) {
            var b = a.R(a.v);
            a.v++;
            a.j = Lt.Aa().o + a.o / Lt.Aa().v;
            !b && a.H && a.H();
            return b
        },
        Nt = function(a, b) {
            a.H.push(b);
            a.S = !0
        },
        Pt = function(a) {
            if (a.U) a.T = !1;
            else {
                a.T = !0;
                Ot(a);
                a.S && (a.H.sort(function(a, b) {
                    return a.j == b.j ? b.o - a.o : a.j - b.j
                }), a.S = !1);
                for (var b = 0, c = 0, d; d = a.H[c]; c++)
                    if (d.j <= a.o) Mt(d) && Nt(a, d), b++;
                    else break;
                a.H.splice(0, b);
                a.o++;
                jc(function() {
                    Pt(a)
                })
            }
        },
        Ot = function(a) {
            var b = (new Date).getTime();
            30 < a.o && a.R && (b - a.R >= 1.05 * a.v ? a.j++ : a.j >>= 1, 20 < a.j && (a.v = Math.min(50, 1.2 * a.v), a.j =
                0));
            a.R = b
        };
    Lt.prototype.start = function() {
        this.U = !1;
        this.T || Pt(this)
    };
    Lt.prototype.Wa = function() {
        this.reset();
        Lt.Mb.Wa.call(this)
    };
    Lt.prototype.reset = function() {
        this.U = !0;
        this.H = [];
        this.o = 0;
        this.S = !1;
        this.v = Kt;
        this.R = this.j = 0
    };
    var Qt = function(a) {
        return 3 * a * a - 2 * a * a * a
    };
    var Rt = function(a, b) {
        J.call(this);
        this.o = !1;
        this.j = a;
        this.H = b || null;
        this.v = function() {};
        hn() && (this.j.style.willChange = "width,height")
    };
    v(Rt, J);
    var St = function(a, b) {
        var c = void 0 === c ? 0 : c;
        if (a.j && hn() && !a.o) {
            var d = a.j;
            if (Ub()) window.parent.postMessage({
                cmd: "resizeDoodle",
                width: ne + "px",
                height: oe + "px",
                duration: "400ms"
            }, "chrome-search://local-ntp");
            else {
                Tb() && Vb(d.parentNode, "width", "100%");
                var e = d.offsetHeight,
                    f = d.offsetWidth;
                c = Math.min(ne, d.parentNode.clientWidth) - 2 * c;
                var g = c / (ne / oe);
                Lt.Aa();
                var h = Wb(),
                    k = new Ac({
                        height: e,
                        width: f
                    }, {
                        height: g,
                        width: c
                    }, 400, Qt, function() {
                        return h
                    });
                k.start();
                a.o = !0;
                a.v = function() {
                    h = Wb();
                    var c = Cc(k);
                    lc(d, Math.round(c.width),
                        Math.round(c.height));
                    a.H && Fp(a.H, !1);
                    Dc(k) && (b && b(), a.j.style.willChange = "unset", a.v = function() {})
                }
            }
        }
    };
    Rt.prototype.Wa = function() {
        J.prototype.Wa.call(this);
        this.reset();
        this.j = null
    };
    Rt.prototype.reset = function() {
        this.o && (Vb(this.j, "width", "", "height", ""), kc(0), this.j.style.width = "", this.j.style.height = "");
        this.o = !1
    };
    var Ut = function(a, b) {
            var c = this;
            this.S = function() {
                K.style.background = "#000";
                b()
            };
            this.R = a;
            this.U = 2 == V(Go.Aa().j, 1, 1);
            this.j = 1;
            this.H = ms(0, 0, ne, oe);
            this.v = new Ac({
                alpha: 0
            }, {
                alpha: 1
            }, 400);
            this.o = 0;
            this.T = !(Tb() || Ub());
            Hp(this.R, this.H, function(a) {
                "mousedown" == a && 1 == c.j && Tt(c, !1)
            })
        },
        Tt = function(a, b) {
            xn(b ? 102 : 101);
            se.removeAttribute("title");
            Kp(a.R, a.H);
            a.j = 2;
            a.v.start();
            a.S();
            window != window.parent && window.focus()
        };
    Ut.prototype.tick = function(a) {
        this.T && (this.o += a);
        switch (this.j) {
            case 1:
                this.U && Tt(this, !0);
                break;
            case 2:
                Dc(this.v) && this.S()
        }
    };
    Ee.Aa();
    var Zt = function(a, b, c, d) {
        J.call(this);
        var e = this;
        this.W = a;
        this.U = b;
        this.U.o = 0;
        this.Qe = d;
        this.Wc = !1;
        this.Gb = new Set;
        this.wa = -1;
        this.rb = 0;
        this.Sc = this.Bb = this.nb = this.Vc = !1;
        this.S = [];
        this.T = [];
        this.zd = !xe && 2 != V(Go.Aa().j, 1, 1);
        this.Tc = 0;
        this.Rd = hc("host_private_match");
        this.Re = hc("skip_tutorial");
        this.lc = !1;
        this.Wb = new or("host_private_match_dialog", 36, .8 * hf[3], 2);
        this.Wb.j = "#000";
        this.Gc = new or("host_private_match_dialog_yes_button", 36, .9 * ef[3]);
        this.Gc.j = "#000";
        this.Nb = new or("host_private_match_dialog_back_button", 36,
            .9 * ef[3]);
        this.Nb.j = "#000";
        this.mc = ms(0, 0, 223, 102);
        this.Lb = ms(0, 0, 223, 109);
        this.Vb = ms(0, 0, 106, 101);
        this.j = new Kr(new Bo, a, b, !0, function() {
            e.o.R = !0;
            e.T.push(new H(new G({
                alpha: 1
            }, {
                alpha: 0
            }, 250, wc), function(a) {
                e.U.o = a.alpha
            }));
            var a = new Vt(mf, hc("tutorial_6"), 1);
            e.S.push(a);
            e.H.Bb = !1;
            e.Da = !1;
            e.Sc = !0;
            zn(3);
            Wr(e.j);
            e.Tc = window.setTimeout(function() {
                Wt(e, !1)
            }, 3E3)
        }, function(a, b) {
            var c = b.o;
            if (!e.Gb.has(c)) switch (c) {
                case 1:
                    a.mb && (e.Gb.add(c), Xt(e.R, 0, zr(e.j, "player_base_speed")));
                    break;
                case 2:
                    a.mb || (e.Gb.add(c),
                        e.wa = 0)
            }
        });
        Rr(this.j, c);
        gr(this.j.o, 1);
        fr(this.j.o, 2);
        td(this, this.j);
        this.H = Or(this.j);
        this.R = Pr(this.j);
        this.v = Qr(this.j);
        this.ta = new G({
            alpha: this.R.kb
        }, {
            alpha: 0
        }, 1E3);
        this.kb = this.j.o.R;
        this.Da = !1;
        this.Lc = 0;
        this.o = null;
        Yt(this);
        Vr(this.j);
        zn(2)
    };
    v(Zt, J);
    Zt.prototype.load = function() {
        return Lr(this.j)
    };
    Zt.prototype.wake = function() {
        this.j.wake()
    };
    var Yt = function(a) {
            var b = a.j.o.o.get(1),
                c = a.j.o.o.get(2);
            a.j.S = 0;
            a.H.Ca = !0;
            a.T.push(new Kc([new Lc([new H(new G({
                brightness: 0
            }, {
                brightness: 1
            }, 1E3, vc), function(b) {
                return a.Lc = b.brightness
            }), new H(new G({
                x: b.x,
                y: b.y
            }, {
                x: c.x,
                y: c.y
            }, 3500, vc), function(b) {
                var c = a.v,
                    d = b.y;
                c.j = b.x;
                c.o = d
            })]), new Jc(700), new Ic(function() {
                Ir(a.v, !0);
                a.o = new Vt(pf, hc("tutorial_1"), 1);
                a.S.push(a.o);
                me.qe.play()
            }), new Jc(3E3), new Ic(function() {
                a.o.R = !0;
                Ir(a.v, !1);
                a.H.Ca = !1
            }), new H(new G({
                brightness: 0
            }, {
                brightness: 1
            }, 1E3, vc), function(b) {
                a.j.S =
                    b.brightness
            }), new Jc(1E3), new Ic(function() {
                Ir(a.v, !0);
                a.o = new Vt(nf, hc(E ? "tutorial_2_mobile" : "tutorial_2_desktop"), 2);
                a.S.push(a.o)
            }), new Jc(750), new H(new G({
                alpha: 0
            }, {
                alpha: 1
            }, 250, vc), function(b) {
                a.U.o = b.alpha
            }), new Ic(function() {
                $t(a)
            })]))
        },
        au = function(a) {
            var b = a.j.o.o.get(2),
                c = a.j.o.o.get(3);
            a.T.push(new Kc([new Ic(function() {
                a.o.R = !0;
                Ir(a.v, !1);
                a.Wc = !0
            }), new Jc(1250), new H(new G({
                alpha: 1
            }, {
                alpha: 0
            }, 250, wc), function(b) {
                a.U.o = b.alpha
            }), new Ic(function() {
                a.Da = !1;
                Xt(a.H, 0, 0);
                fr(a.j.o, 1)
            }), new H(new G({
                x: b.x,
                y: b.y
            }, {
                x: c.x,
                y: c.y
            }, 333, vc), function(b) {
                var c = a.v,
                    d = b.y;
                c.j = b.x;
                c.o = d
            }), new Ic(function() {
                a.o = new Vt(kf, hc("tutorial_3"), 1);
                a.S.push(a.o);
                Ir(a.v, !0)
            }), new Jc(750), new H(new G({
                alpha: 0
            }, {
                alpha: 1
            }, 250, vc), function(b) {
                a.U.o = b.alpha
            }), new Ic(function() {
                $t(a)
            })]))
        },
        bu = function(a) {
            var b = a.j.o.o.get(3),
                c = a.j.o.o.get(4);
            a.T.push(new Kc([new Ic(function() {
                a.Vc = !0
            }), new H(new G({
                x: b.x,
                y: b.y
            }, {
                x: c.x,
                y: c.y
            }, 2E3, vc), function(b) {
                var c = a.v,
                    d = b.y;
                c.j = b.x;
                c.o = d
            })]))
        },
        cu = function(a) {
            var b = a.j.o.o.get(4),
                c = a.j.o.o.get(5);
            a.T.push(new Kc([new Ic(function() {
                a.Da = !1;
                Xt(a.H, 0, 0);
                a.o.R = !0;
                a.nb = !0;
                a.H.Bb = !1;
                gr(a.j.o, 2)
            }), new Lc([new H(new G({
                alpha: 1
            }, {
                alpha: 0
            }, 250, wc), function(b) {
                a.U.o = b.alpha
            }), new H(new G({
                x: b.x,
                y: b.y
            }, {
                x: c.x,
                y: c.y
            }, 1E3, vc), function(b) {
                var c = a.v,
                    d = b.y;
                c.j = b.x;
                c.o = d
            })]), new Ic(function() {
                a.o = new Vt( of , hc("tutorial_4"), 1);
                a.S.push(a.o);
                Ir(a.v, !0)
            }), new Jc(750), new H(new G({
                alpha: 0
            }, {
                alpha: 1
            }, 250, vc), function(b) {
                a.U.o = b.alpha
            }), new Ic(function() {
                $t(a)
            })]))
        },
        du = function(a) {
            var b = a.j.o.o.get(5),
                c = a.j.o.o.get(6);
            a.T.push(new Kc([new Ic(function() {
                a.o.R = !0;
                Ir(a.v, !1);
                a.Bb = !0;
                a.H.Bb = !0;
                fr(a.j.o, 2);
                a.j.Nb = !0
            }), new Ic(function() {
                a.o = new Vt(lf, hc("tutorial_5"), 2);
                a.S.push(a.o);
                Ir(a.v, !0)
            }), new H(new G({
                x: b.x,
                y: b.y
            }, {
                x: c.x,
                y: c.y
            }, 4E3, vc), function(b) {
                var c = a.v,
                    d = b.y;
                c.j = b.x;
                c.o = d
            })]))
        },
        $t = function(a) {
            a.Da = !0;
            document.activeElement && document.activeElement.blur()
        },
        Xt = function(a, b, c) {
            var d = new lh;
            W(d, 1, a.v);
            W(d, 2, b);
            W(d, 3, c);
            W(d, 4, 0 != b || 0 != c);
            a.S = d
        },
        Wt = function(a, b) {
            window.clearTimeout(a.Tc);
            eu(a, !1);
            Tp(a.W);
            a.U.o =
                1;
            a.Qe(b)
        };
    Zt.prototype.tick = function(a) {
        this.H.Gb = this.Da && !this.lc;
        this.j.tick(a);
        if (Mr(this.j)) {
            this.rb = Math.max(this.rb, this.R.lb.length);
            var b;
            if (b = !this.Wc) b = this.W, b = b.W || b.v;
            b && this.H.Gb && au(this);
            !this.Vc && !this.nb && 0 < this.H.lb.length && bu(this);
            !this.nb && 0 < this.R.lb.length && cu(this);
            !this.Bb && this.R.lb.length < this.rb && 5 <= this.H.lb.length && du(this);
            Fc(this.ta, a);
            this.Bb && 0 == this.R.lb.length && null === this.ta.j && this.ta.start();
            null !== this.ta.j && (b = Cc(this.ta).alpha, this.R.kb = b);
            Dc(this.ta) && this.R.jd();
            if (this.kb) {
                if (0 <= this.wa) {
                    b = 36 * Math.PI;
                    var c = 2 * zr(this.j, "player_base_speed");
                    this.wa += a;
                    b = 2 * -(this.wa / 1E3 / (b / c)) * Math.PI + 1.5 * Math.PI;
                    c = this.R.Ha;
                    Xt(this.R, this.kb.x + 18 * Math.cos(b) - c.x, this.kb.y - 18 * Math.sin(b) - c.y)
                }
                if (this.Sc) {
                    b = this.H;
                    var d = p(yq(b));
                    c = d.next().value;
                    d = d.next().value;
                    var e = !0;
                    .1 > c && .1 > d && (d = c = 0, e = !1);
                    var f = new lh;
                    W(f, 1, b.v);
                    W(f, 2, c);
                    W(f, 3, d);
                    W(f, 4, e);
                    b.S = f
                }
                for (b = 0; b < this.S.length; b++) c = this.S[b], c.ld(a), c.kd() && this.S.splice(b--, 1);
                for (b = 0; b < this.T.length; b++) c = this.T[b], Hc(c, a),
                    c.Eb() && this.T.splice(b--, 1)
            }
        }
    };
    var fu = function(a, b, c) {
            a = a.W.H;
            Hp(a, b, c);
            Lp(a, b)
        },
        gu = function(a, b) {
            eu(a, !b);
            b ? (fu(a, a.mc, function(b) {
                "mouseup" == b && (gu(a, !1), xn(106), Wt(a, !0))
            }), fu(a, a.Lb, function(b) {
                "mouseup" == b && gu(a, !1)
            }), fu(a, a.Vb, function(b) {
                "mouseup" == b && gu(a, !1)
            })) : (Kp(a.W.H, a.mc), Kp(a.W.H, a.Lb), Kp(a.W.H, a.Vb));
            a.lc = b
        },
        hu = function(a, b) {
            a.zd && a.Na && (b ? fu(a, a.Na, function(b) {
                "mouseup" == b && (xn(105), gu(a, !0))
            }) : Kp(a.W.H, a.Na))
        },
        iu = function(a, b) {
            a.$a && (b ? fu(a, a.$a, function(b) {
                "mouseup" == b && (xn(107), Wt(a, !1))
            }) : Kp(a.W.H, a.$a))
        },
        eu = function(a, b) {
            hu(a, b);
            iu(a, b)
        },
        Vt = function(a, b, c) {
            op.call(this, b, 0, 0);
            this.ta = a;
            this.wa = E ? 2 : c;
            this.S = 0;
            a = document.createElement("canvas");
            b = this.T();
            a.width = 1.5 * Pe[3] + b[3] / 2;
            a.height = b[4] / 2;
            this.j = a;
            this.o = this.j.getContext("2d")
        };
    v(Vt, op);
    var mp = function(a) {
            return new H(new G({
                scale: 0
            }, {
                scale: .8
            }, 250, xc), function(b) {
                return a.vb(b)
            })
        },
        np = function(a) {
            return new H(new G({
                scale: .8
            }, {
                scale: 0
            }, 250, zc), function(b) {
                return a.vb(b)
            })
        };
    Vt.prototype.T = function() {
        return this.ta
    };
    Vt.prototype.vb = function(a) {
        this.S = a.scale
    };
    Vt.prototype.H = function(a) {
        var b = 1.5 * Pe[3],
            c = 1.5 * Pe[4],
            d = this.T(),
            e = d[3] / 2,
            f = d[4] / 2,
            g = Vn.width,
            h = Vn.left,
            k = (1 == this.wa ? .25 : .7) * Vn.height + Vn.top;
        this.o.clearRect(0, 0, this.j.width, this.j.height);
        Oo(Pe, this.o, (e + b) / 2, f / 2, b, c);
        Oo(d, this.o, e / 2, f / 2, e, f);
        this.o.textAlign = "center";
        this.o.textBaseline = "middle";
        this.o.fillStyle = "#000";
        d = hp(this.o, this.text, we, 36, 16, b - e / 2, 2);
        ip(this.o, d, (1.2 * e + b) / 2, c / 2 + (10 - 16.25 * (d.lines.length - 1)), 1.25 * d.fontSize);
        a.save();
        a.translate(h + g / 2, k);
        a.translate(this.S / 2 * -this.j.width,
            this.S / 2 * -this.j.height);
        a.drawImage(this.j, 0, 0, this.j.width * this.S, this.j.height * this.S);
        a.restore()
    };
    var ku = function(a, b) {
        Vd.call(this);
        "object" != typeof a && (a = {
            se: a,
            we: b
        });
        this.S = 0 != a.se;
        this.o = a.we || ju;
        this.T = a.binaryType || "blob";
        this.v = this.o(this.qd)
    };
    z(ku, Vd);
    n = ku.prototype;
    n.Ub = null;
    n.wd = null;
    n.od = void 0;
    n.Ud = !1;
    n.qd = 0;
    n.Jc = null;
    var ju = function(a) {
        return Math.min(1E3 * Math.pow(2, a), 6E4)
    };
    n = ku.prototype;
    n.xe = function(a, b) {
        null != this.Jc && ua.clearTimeout(this.Jc);
        this.Jc = null;
        this.wd = a;
        this.Ub = (this.od = b) ? new WebSocket(this.wd, this.od) : new WebSocket(this.wd);
        this.Ub.binaryType = this.T;
        this.Ub.onopen = Ia(this.nf, this);
        this.Ub.onclose = Ia(this.jf, this);
        this.Ub.onmessage = Ia(this.mf, this);
        this.Ub.onerror = Ia(this.kf, this)
    };
    n.close = function() {
        null != this.Jc && ua.clearTimeout(this.Jc);
        this.Jc = null;
        this.Ub && (this.Ud = !0, this.Ub.close(), this.Ub = null)
    };
    n.send = function(a) {
        this.Ub.send(a)
    };
    n.nf = function() {
        Xd(this, "d");
        this.qd = 0;
        this.v = this.o(this.qd)
    };
    n.jf = function() {
        Xd(this, "a");
        this.Ub = null;
        if (this.Ud) this.wd = null, this.od = void 0;
        else if (this.S) {
            var a = Ia(this.xe, this, this.wd, this.od),
                b = this.v;
            if (Ea(a)) this && (a = Ia(a, this));
            else if (a && "function" == typeof a.handleEvent) a = Ia(a.handleEvent, a);
            else throw Error("k");
            this.Jc = 2147483647 < Number(b) ? -1 : ua.setTimeout(a, b || 0);
            this.qd++;
            this.v = this.o(this.qd)
        }
        this.Ud = !1
    };
    n.mf = function(a) {
        Xd(this, new lu(a.data))
    };
    n.kf = function(a) {
        Xd(this, new mu(a.data))
    };
    n.Wa = function() {
        ku.Mb.Wa.call(this);
        this.close()
    };
    var lu = function(a) {
        ud.call(this, "c");
        this.message = a
    };
    z(lu, ud);
    var mu = function(a) {
        ud.call(this, "b");
        this.data = a
    };
    z(mu, ud);
    var nu = function(a) {
        a = Math.min(1E3 * Math.pow(2, a), 3E4);
        return a + a * Math.log(2) * Math.random()
    };
    var ou = function(a, b, c, d) {
        var e = this;
        this.j = new ku({
            se: !0,
            binaryType: "arraybuffer",
            we: nu
        });
        this.R = a;
        this.S = b;
        this.U = c;
        this.T = d;
        this.o = !0;
        this.v = this.H = !1;
        Kd(this.j, "d", function() {
            e.o = !1;
            e.v ? e.U() : (e.v = !0, e.S())
        });
        Kd(this.j, "c", function(a) {
            a = new Uf(a.message);
            for (var b = new wm; O(a) && !N(a);) switch (a.j) {
                case 1:
                    var c = new xm;
                    R(a, c, Em);
                    Dg(b, 1, c);
                    break;
                case 2:
                    c = new ym;
                    R(a, c, Gm);
                    Dg(b, 2, c);
                    break;
                case 3:
                    c = new zm;
                    R(a, c, Im);
                    Dg(b, 3, c);
                    break;
                case 4:
                    c = new Am;
                    R(a, c, Km);
                    Dg(b, 4, c);
                    break;
                case 5:
                    c = new Bm;
                    R(a, c, Mm);
                    Dg(b,
                        5, c);
                    break;
                case 6:
                    c = new Cm;
                    R(a, c, Om);
                    Dg(b, 6, c);
                    break;
                case 7:
                    c = new Dm;
                    R(a, c, Qm);
                    Dg(b, 7, c);
                    break;
                default:
                    Q(a)
            }
            e.T(b)
        });
        Kd(this.j, "b", function() {});
        Kd(this.j, "a", function() {
            e.H || e.o || (e.o = !0)
        });
        this.j.xe(a)
    };
    ou.prototype.close = function() {
        this.H = !0;
        this.j.close()
    };
    var qu = function() {
            var a = En();
            a = no("ghostly.client.player_id", a, Gn);
            oo("ghostly.client.player_id", a, Gn);
            var b = {};
            b = void 0 === b.Ze ? void 0 : b.Ze;
            this.U = this.T = this.R = this.S = null;
            this.W = a;
            this.j = b || null;
            this.va = this.H = null;
            this.v = pu(this);
            this.o = null
        },
        pu = function(a) {
            return new Promise(function(b, c) {
                a.H = b;
                a.va = c
            })
        },
        ru = function(a, b) {
            a.S = b
        },
        su = function(a, b) {
            a.R = b
        },
        tu = function(a, b) {
            a.U = b
        },
        uu = function(a, b) {
            a.T = b
        },
        wu = function(a) {
            var b = a.j && V(a.j, 4, "") ? "wss://" + V(a.j, 4, "") + "/ws" : "wss://cloud-doodles.h18.cloud.doodles.goog/ws";
            if (!a.o) return vu(a, b), a.v;
            if (b != a.o.R) return a.close(), vu(a, b), a.v;
            b = a.o.j;
            return b.Ub && 1 == b.Ub.readyState ? Promise.resolve() : a.v
        },
        vu = function(a, b) {
            a.o = new ou(b, function() {
                a.T && a.T();
                a.H && a.H();
                a.v = pu(a)
            }, function() {
                a.U && a.U();
                a.H && a.H();
                a.v = pu(a)
            }, function(b) {
                switch (ug(b, Cg[0])) {
                    case 2:
                        a.j = X(b, ym, 2);
                        a.R && a.j && a.R(a.j);
                        break;
                    case 4:
                        b = X(b, Am, 4);
                        a.S && b && a.S(b);
                        break;
                    case 7:
                        (b = X(b, Dm, 7)) && V(b, 1, "")
                }
            })
        },
        xu = function(a, b) {
            wu(a).then(function() {
                var c = new dg;
                var d = X(b, xm, 1);
                null != d && ng(c, 1, d, Fm);
                d = X(b, ym,
                    2);
                null != d && ng(c, 2, d, Hm);
                d = X(b, zm, 3);
                null != d && ng(c, 3, d, Jm);
                d = X(b, Am, 4);
                null != d && ng(c, 4, d, Lm);
                d = X(b, Bm, 5);
                null != d && ng(c, 5, d, Nm);
                d = X(b, Cm, 6);
                null != d && ng(c, 6, d, Pm);
                d = X(b, Dm, 7);
                null != d && ng(c, 7, d, Rm);
                c = gg(c);
                a.o.j.send(c)
            })["catch"](function() {})
        },
        yu = function(a) {
            wu(a).then(function() {
                var b = new xm,
                    c = new wm;
                Dg(c, 1, b);
                xu(a, c)
            })["catch"](function() {})
        },
        zu = function(a) {
            wu(a).then(function() {
                var b = new zm;
                xg(b, 1, a.W);
                if (a.j) {
                    var c = V(a.j, 1, "");
                    xg(b, 3, c)
                } else xg(b, 3, "publicpool");
                c = new wm;
                Dg(c, 3, b);
                xu(a, c)
            })["catch"](function() {})
        },
        Au = function(a) {
            wu(a).then(function() {
                if (a.j) {
                    var b = V(a.j, 3, "");
                    if (b) {
                        var c = V(a.j, 1, "");
                        if (c) {
                            var d = new Bm;
                            xg(d, 1, c);
                            xg(d, 2, b);
                            b = new wm;
                            Dg(b, 5, d);
                            xu(a, b)
                        }
                    }
                }
            })["catch"](function() {})
        };
    qu.prototype.close = function() {
        this.o && (this.o.close(), this.o = null)
    };
    var Bu = function() {
        var a = this;
        this.j = new qu;
        uu(this.j, function() {
            zn(7)
        });
        this.U = function() {};
        this.o = !1;
        this.H = function() {};
        this.W = new Promise(function(b) {
            a.H = b
        })
    };
    v(Bu, Jt);
    Bu.prototype.S = function() {
        var a = this;
        return new Promise(function(b) {
            ru(a.j, function(c) {
                return Cu(a, c, b)
            });
            var c = new ym;
            xg(c, 1, "publicpool");
            tu(a.j, function() {
                return zu(a.j)
            });
            a.j.j = c;
            zu(a.j)
        })
    };
    Bu.prototype.R = function(a, b) {
        var c = this;
        this.U = b;
        return new Promise(function(b) {
            ru(c.j, function(a) {
                return Cu(c, a, b)
            });
            tu(c.j, function() {
                return zu(c.j)
            });
            c.j.j = a;
            zu(c.j)
        })
    };
    Bu.prototype.T = function() {
        var a = this;
        return new Promise(function(b, c) {
            su(a.j, function(d) {
                V(d, 1, "") ? V(d, 4, "") ? V(d, 3, "") ? (zn(8), b(d), a.H()) : c("No admin token present in invitation") : c("No matchmaker address present in invitation") : c("No invite id present in invitation")
            });
            tu(a.j, function() {
                return yu(a.j)
            });
            yu(a.j)
        })
    };
    Bu.prototype.v = function() {
        var a = this;
        this.W.then(function() {
            Au(a.j);
            xn(108)
        })
    };
    var Cu = function(a, b, c) {
        a.o || (zn(9), a.o = !0);
        V(b, 3, 0) && a.U(V(b, 3, 0));
        if ("complete" == V(b, 1, "")) {
            a.j.close();
            a.o = !1;
            zn(10);
            a.j.close();
            var d = p(V(b, 2, "").split(":"));
            a = d.next().value;
            b = d.next().value;
            d = d.next().value;
            c(["wss://" + a + ":" + b + "/", d])
        }
    };
    var Dr = Gi.Aa(),
        Du = Go.Aa(),
        Fu = function(a, b, c) {
            J.call(this);
            var d = this;
            this.S = b;
            this.Na = c;
            this.H = 1;
            this.Ja = new Ut(this.S, function() {
                Eu(d)
            });
            this.R = this.T = this.j = this.o = null;
            this.wa = new rp;
            this.v = null;
            this.Da = new ro(this);
            this.W = new Qp(this.S, this.wa, a);
            this.U = new Bu;
            Hi(Gi.Aa(), 0, 0)
        };
    v(Fu, J);
    Fu.prototype.wake = function() {
        switch (this.H) {
            case 2:
                this.v.wake();
                break;
            case 4:
                this.j.wake()
        }
    };
    var Hu = function(a) {
            a.j = new Kr(new Ao(a.Da), a.W, a.wa, !1, function() {
                a.R = new Ks(a.j, a.S);
                Gu(a, 5);
                oo("ghostly.client.match_config", null)
            }, ya)
        },
        Eu = function(a) {
            Rp();
            var b = function() {
                K.width = ne;
                K.height = oe;
                Fp(a.S);
                Iu(a)
            };
            hn() ? St(a.Na, b) : b()
        },
        Iu = function(a) {
            qo() ? Ju(a) : Ku(a).then(function() {
                Lu(a)
            })
        },
        Lu = function(a) {
            var b = Nn;
            b ? (a.v = new Zt(a.W, a.wa, b, function(b) {
                return Mu(a, b)
            }), a.v.load().then(function() {
                Rn();
                Gu(a, 2);
                vo(a.W)
            })) : Mu(a, !1)
        },
        Mu = function(a, b) {
            Nu(a).then(function() {
                b ? Ou(a, !0) : 2 == V(Du.j, 1, 1) ? Pu(a) :
                    Qu(a)
            })
        },
        Ou = function(a, b) {
            var c = b ? a.U.T() : Promise.resolve(X(Du.j, ym, 2));
            a.o = new Ft(a.S, !0, !0, c, function() {
                return a.U.v()
            });
            Gu(a, 3);
            c.then(function(b) {
                return Ru(a, 3, b)
            })
        },
        Pu = function(a) {
            var b = X(Du.j, ym, 2);
            a.o = new Ft(a.S, !0, !1, Promise.resolve(b));
            Gu(a, 3);
            Ru(a, 2, b)
        },
        Qu = function(a) {
            a.o = new Ft(a.S, !1, !1);
            Gu(a, 3);
            Ru(a, 1)
        },
        Ru = function(a, b, c) {
            Du.set(b, c);
            var d = function(b) {
                    Dt(a.o, b)
                },
                e = null;
            switch (b) {
                case 1:
                    e = function() {
                        return a.U.S()
                    };
                    break;
                case 3:
                case 2:
                    e = function() {
                        return a.U.R(c, d)
                    }
            }
            e && e().then(function(b) {
                b =
                    p(b);
                var c = b.next().value,
                    d = b.next().value;
                (new cp(function() {
                    return Su(a, c, d)
                })).connect()
            }, function() {
                a.o && Ht(a.o)
            })
        },
        Ju = function(a) {
            Promise.all([Nu(a), Ku(a)]).then(function() {
                return Su(a, null, null)
            })["catch"](function() {
                return Lu(a)
            }).then(function() {
                return Lr(a.j)
            }).then(function() {
                Gu(a, 4);
                Ur(a.j);
                Vr(a.j)
            })
        },
        Su = function(a, b, c) {
            Hu(a);
            return zo(a.Da, b, c).then(function() {
                zn(11)
            }, function(b) {
                a.o && Ht(a.o);
                return Promise.reject(b)
            })
        },
        uo = function(a, b) {
            yo(a.j, Ag(b, oh, 2));
            var c = U(b, 3);
            c ? Pn(c, U(b, 4) || void 0).then(function(b) {
                Rr(a.j,
                    b);
                zn(13)
            })["catch"](function() {
                so(a)
            }) : so(a)
        },
        so = function(a) {
            3 == a.H && a.o ? Ht(a.o) : 4 == a.H && a.j && (Gu(a, 7), a.ta || (a.ta = new Ts(a.W.H, function() {
                document.location.reload()
            })), Vs(a.ta))
        },
        Tu = function(a) {
            6 != a.H && (Gu(a, 6), a.T = new Ys)
        },
        Nu = function(a) {
            Tu(a);
            return Rn().then(function() {
                return Zs(a.T)
            })
        },
        Ku = function(a) {
            Tu(a);
            return Qn().then(function() {
                return Zs(a.T)
            })
        },
        Gu = function(a, b) {
            switch (a.H) {
                case 2:
                    a.v.dispose();
                    a.v = null;
                    break;
                case 4:
                    a.j.dispose();
                    a.j = null;
                    break;
                case 5:
                    a.R.dispose();
                    a.R = null;
                    break;
                case 6:
                    a.T =
                        null
            }
            a.H = b
        };
    var Uu = function(a, b) {
        window.google && google.doodle && (b && La("google.doodle.cpDestroy", b), La("google.doodle.cpInit", function() {
            b && b();
            a()
        }))
    };
    var Vu = function() {
            this.j = 0
        },
        Yu = function(a, b, c) {
            c = void 0 === c ? function() {} : c;
            var d = new ob("/async/ddllog");
            rb(d, b);
            d = d.toString();
            a.j++;
            c(a.j);
            return Wu(d)["catch"](function(d) {
                return 1 > a.j ? Xu(500 * Math.pow(2, a.j - 1))["finally"](function() {
                    return Yu(a, b, c)
                }) : Promise.reject(d)
            })["finally"](function() {
                return a.j = 0
            })
        },
        Wu = function(a) {
            var b = new XMLHttpRequest;
            b.open("GET", a);
            return new Promise(function(a, d) {
                b.send();
                b.onreadystatechange = function() {
                    if (4 == b.readyState)
                        if (200 == b.status && b.responseText) a: {
                            var c =
                                b.responseText;c.startsWith(")]}'\n") && (c = c.substring(5));
                            var f = {};
                            try {
                                f = JSON.parse(c)
                            } catch (g) {
                                d(c);
                                break a
                            }
                            f.hasOwnProperty("ddllog") && (f = f.ddllog);f.hasOwnProperty("__err__") ? d(f.__err__) : a(f)
                        }
                    else d(b)
                }
            })
        },
        Xu = function(a) {
            return new Promise(function(b) {
                return setTimeout(b, a)
            })
        };
    var Zu = function(a) {
        T(this, a, null, null)
    };
    z(Zu, S);
    var $u = function() {
        var a = void 0 === a ? !1 : a;
        if (nc() && mc()) return Promise.resolve();
        var b = "_fmt:jspb,doodle:73509581,slot:0,type:3,cta:1";
        (Tb() || Ub()) && (b += ",ntp:1");
        if (nc() || a) b += ",impr:0";
        a = new ub;
        a.add("async", b);
        return Yu(new Vu, a).then(function(a) {
            a = new Zu(a);
            if (!nc() && U(a, 2)) {
                var b = U(a, 2);
                b = (new ob(b)).j.get("ved", "");
                var c = document.getElementById("hplogoved");
                c || (c = document.createElement("div"));
                c.setAttribute("data-ved", b)
            }!mc() && U(a, 3) && (a = U(a, 3), window.google || (window.google = {}), window.google.kEI =
                a)
        })["catch"](function() {
            return Promise.resolve()
        })
    };
    var av = function(a, b) {
        b = void 0 === b ? 50 : b;
        J.call(this);
        this.R = a;
        this.v = 0;
        this.o = this.j = !1;
        this.H = b
    };
    v(av, J);
    av.prototype.start = function() {
        this.v = Ka();
        var a = !this.o && !this.j;
        this.o = !1;
        this.j = !0;
        a && bv(this)
    };
    var bv = function(a) {
            a.o ? a.o = !1 : (requestAnimationFrame(function() {
                return bv(a)
            }), cv(a))
        },
        cv = function(a) {
            var b = Ka(),
                c = b - a.v;
            c = a.H ? Math.min(c, a.H) : c;
            a.v = b;
            a.R(c)
        };
    av.prototype.Wa = function() {
        this.j && (this.o = !0, this.j = !1);
        J.prototype.Wa.call(this)
    };
    var dv = Ee.Aa(),
        cs = bs.Aa(),
        ev = function(a, b) {
            J.call(this);
            var c = this;
            this.U = b.getContext("2d");
            this.T = new yp(3E5, function() {
                var a = c.R;
                a.j && (a.j = !1, a.o = !0);
                a = $d.Aa();
                a.R || a.j.suspend();
                a.R = !0
            }, function() {
                c.R.start();
                c.H.wake();
                var a = $d.Aa();
                a.R && a.j.resume();
                a.R = !1
            });
            td(this, this.T);
            this.v = new Ep(b, this.T);
            this.o = new Yr(this);
            td(this, this.o);
            $r(this.o, b, ["mousedown", "mouseout", "touchstart"], function(a) {
                c.v.handleEvent(a)
            }, !0);
            $r(this.o, document.body, ["mousemove", "mouseup", "touchend", "touchmove"], function(a) {
                    c.v.handleEvent(a)
                },
                !0);
            js(a, [b], this.o, function(a) {
                Fp(c.v, a)
            });
            E && $r(this.o, a, "touchend", function() {
                hs(cs)
            });
            fs();
            var d = document.createElement("div");
            d.style.pointerEvents = "none";
            d.style.position = "absolute";
            d.style.top = "0";
            d.style.left = "0";
            d.style.width = "100%";
            d.style.height = "100%";
            d.style.direction = "ltr";
            d.dataset.width = b.width;
            d.dataset.height = b.height;
            d.id = "hplogofsdomroot";
            a.appendChild(d);
            ks(d);
            this.j = Jo();
            this.j.style.top = "10px";
            this.j.style.right = "10px";
            this.j.style.cursor = "pointer";
            this.j.style.position = "absolute";
            this.j.style.pointerEvents = "all";
            this.j.style.display = "none";
            Id(this.j, "click", function() {
                return cs.close()
            });
            d.appendChild(this.j);
            this.S = new Rt(a, this.v);
            td(this, this.S);
            this.H = new Fu(this.T, this.v, this.S);
            td(this, this.H);
            this.R = new av(function(a) {
                c.S.v();
                var b = c.H;
                switch (b.H) {
                    case 1:
                        b.Ja.tick(a);
                        break;
                    case 6:
                        b.T.tick(a);
                        b.v ? b.v.tick(a) : b.j && b.j.tick(a);
                        break;
                    case 2:
                        b.v.tick(a);
                        break;
                    case 3:
                        if (0 == b.o.j && b.j) {
                            var d = b.j.j.j;
                            d && Gt(b.o, b.j, d.nb, d.ab())
                        }
                        b.o.tick(a);
                        if (5 == b.o.j && Mr(b.j)) {
                            if (a = b.j.j.j) d =
                                new Lg, W(d, 1, 14), W(d, 2, a.v), W(d, 3, !0), a.va.o(d);
                            Gu(b, 4);
                            Ur(b.j);
                            Vr(b.j)
                        }
                        break;
                    case 4:
                        b.j.tick(a);
                        break;
                    case 5:
                        if (b.R.tick(a), 3 == b.R.v) b.j = null, Ou(b, !0);
                        else if (4 == b.R.v) switch (b.j = null, V(Du.j, 1, 1)) {
                            case 3:
                                Ou(b, !1);
                                break;
                            case 2:
                                Pu(b);
                                break;
                            case 1:
                                Qu(b)
                        }
                }
                c.j.style.display = document[ds] ? "block" : "none";
                c.U.setTransform(1, 0, 0, 1, 0, 0);
                b = cs;
                if (b.R || b.T) {
                    a = !!document[ds];
                    d = window.innerWidth;
                    var e = window.innerHeight;
                    0 == window.scrollX && 0 == window.scrollY || window.scrollTo(0, 0);
                    if (d != b.ta || e != b.va || a != b.Ca || b.j) {
                        b.W =
                            d < e;
                        for (var k = !1, l = 0; l < b.o.length; ++l) {
                            var m = b.o[l],
                                q = m.width || m.dataset.width,
                                w = m.height || m.dataset.height;
                            gn();
                            Tm.Sb && 0 == l && (k = q < w != b.W);
                            var r = k ? Math.min(d / w, e / q) : Math.min(d / q, e / w);
                            q = r * q;
                            w = r * w;
                            if (k) {
                                r = (d - w) / 2 + w;
                                var y = (e - q) / 2;
                                var t = "rotate(90deg)"
                            } else r = (d - q) / 2, y = (e - w) / 2, t = "";
                            $b(m, "TransformOrigin", "0 0");
                            $b(m, "Transform", t);
                            Vb(m, "position", "absolute", "width", q + "px", "height", w + "px", "left", r + "px", "top", y + "px")
                        }
                        bb(Kb, "CriOS") || document.body.clientWidth > d && 0 < d && Vb(document.body, "width", d + "px");
                        Vb(b.H,
                            "height", "100%", "width", "100%");
                        b.wa(k);
                        b.ta = d;
                        b.va = e;
                        b.Ca = a;
                        b.j = !1
                    }
                }
                a = c.H;
                b = c.U;
                switch (a.H) {
                    case 1:
                        a = a.Ja;
                        b.clearRect(0, 0, b.canvas.width, b.canvas.height);
                        2 != a.j && (d = Ne, a.T && (d = Math.floor(a.o / 1500) % 2 ? Oe : Ne), Oo(d, b, .53 * b.canvas.width, .5 * b.canvas.height - .08 * b.canvas.width, .185 * b.canvas.width, .185 * b.canvas.width));
                        break;
                    case 6:
                        a = a.T;
                        b.setTransform(1, 0, 0, 1, 0, 0);
                        b.fillStyle = "#000";
                        b.fillRect(0, 0, b.canvas.width, b.canvas.height);
                        a = p(a.o);
                        for (d = a.next(); !d.done; d = a.next()) Vo(d.value, b.canvas.width / 2, b.canvas.height /
                            2);
                        break;
                    case 2:
                        a = a.v;
                        b.save();
                        d = a.j;
                        Gr(d.U, d, b);
                        mr(d.Sa);
                        1 > a.Lc && (b.save(), b.fillStyle = "rgba(0, 0, 0, " + (1 - a.Lc), b.fillRect(0, 0, b.canvas.width, b.canvas.height), b.restore());
                        b.textAlign = "center";
                        b.textBaseline = "middle";
                        e = sf[3];
                        k = sf[4];
                        m = b.canvas.width - 20 - e / 2;
                        l = E ? Vn.top + Vn.height : b.canvas.height - 20 - k / 2;
                        d = m - e / 2;
                        Oo(sf, b, m, l);
                        m = b.canvas.width - 20 - e + 74;
                        a.Ja || (a.Ja = hp(b, a.Re, we, 24, 12, 95, 2));
                        q = 1 * a.Ja.fontSize;
                        ip(b, a.Ja, m, l - q * (a.Ja.lines.length - 1) / 2, q);
                        a.$a || (a.$a = ms(d, l - k / 2, e, k), iu(a, !0));
                        a.zd && (e = Xe[3],
                            k = Xe[4], d = E ? 20 + e / 2 : d - 20 - e / 2, l = E ? Vn.top + Vn.height : b.canvas.height - 20 - k / 2, Oo(Xe, b, d, l), a.Sa || (a.Sa = hp(b, a.Rd, we, a.Ja.fontSize, 12, e - 30, 2)), m = 1 * a.Sa.fontSize, ip(b, a.Sa, d, l - m * (a.Sa.lines.length - 1) / 2, m), a.Na || (a.Na = ms(d - e / 2, l - k / 2, e, k), hu(a, !0)));
                        d = p(a.S);
                        for (e = d.next(); !e.done; e = d.next()) e.value.H(b);
                        a.lc && (Ro(b), d = b.canvas.width / 2, e = b.canvas.height / 2, Oo(hf, b, d, e), d -= hf[3] / 2, e -= hf[4] / 2, k = ne / 2, a.Wb.Ga(ne / 2, e + 140), qr(a.Wb, b), Oo(ef, b, k, e + 260), a.Gc.Ga(k, e + 260), qr(a.Gc, b), Oo(ef, b, k, e + 378), a.Nb.Ga(k, e + 378), qr(a.Nb,
                            b), ns(a.Vb, d + hf[3] - 118, e - 2), Oo(jf, b, d + hf[3] - 118 + jf[3] / 2, e - 2 + jf[4] / 2), ns(a.mc, d + 114, e + 206), ns(a.Lb, d + 114, e + 324));
                        b.restore();
                        break;
                    case 3:
                        a = a.o;
                        e = b.canvas.width;
                        k = b.canvas.height;
                        d = e / 2;
                        b.fillStyle = "#000";
                        b.fillRect(0, 0, e, k);
                        b.save();
                        k = 1;
                        a.H && null !== a.H.j && (k = Cc(a.H), e = Cc(a.Sa), k = k.scale, b.translate(e.x, e.y), b.scale(k, k), b.translate(-e.x, -e.y));
                        Oo(a.o, b, a.o[3] / 2, a.o[4] / 2);
                        Vo(a.S, d + xt, yt, zt);
                        if (4 == a.j || 5 == a.j) b.save(), b.translate(d + xt, yt + 20), k = Cc(a.wa).scale * Bt / k, Vo(a.W, 0, 0, 150, 0, !1, k), b.restore();
                        e =
                            a.Da;
                        for (k = 0; k < e.o.length; k++) l = e.v[k], Vo(e.o[k], void 0, void 0, l.height, l.rotation || 0, !0, void 0 !== l.scale ? l.scale.x : 1, void 0 !== l.scale ? l.scale.y : void 0);
                        e.T || 0 != e.S || Vo(e.j);
                        if (1 == a.j || 2 == a.j) e = a.lc, qr(e.v, b), qr(e.H, b), qr(e.j, b), qr(e.o, b), qr(e.R, b);
                        b.restore();
                        0 == a.j ? a.v ? It(a, b) : (Mo(a.Gb, d, 70, void 0, 0, !1, 1.6, 1, 1), qr(a.Ca, b)) : 4 == a.j || 5 == a.j ? (a = a.mc, d = b.canvas.width / 2, b.save(), b.translate(d, E ? 120 : 60), a.j ? qr(a.j, b) : (qr(a.S, b), qr(a.o, b)), b.restore()) : 6 == a.j ? Xs(a.kb, b) : 7 == a.j && (b.save(), b.setTransform(1,
                            0, 0, 1, 0, 0), b.fillStyle = "#fff", b.globalAlpha = Cc(a.U).opacity, b.fillRect(0, 0, b.canvas.width, b.canvas.height), b.restore());
                        break;
                    case 4:
                        a = a.j;
                        Gr(a.U, a, b);
                        mr(a.Sa);
                        break;
                    case 5:
                        a = a.R;
                        b.save();
                        b.fillStyle = "#000";
                        b.fillRect(0, 0, b.canvas.width, b.canvas.height);
                        switch (a.v) {
                            case 0:
                                Oo(a.Bb, b, ne / 2, oe / 2);
                                qr(a.Gb, b);
                                break;
                            default:
                                Oo(a.$a, b, ne / 2, oe / 2), b.textAlign = "center", b.textBaseline = "middle", b.save(), b.translate(ts, ss), Ss(a, b, vs, 2), Ss(a, b, ws, 1), b.restore(), xe || qr(a.U, b), b.fillStyle = "#fff", b.shadowColor = "#fff",
                                    b.shadowOffsetX = 0, b.shadowOffsetY = 0, b.shadowBlur = 15, d = hp(b, a.Sa, we, 50, 30, 200, 2), ip(b, d, ys, zs, 42), b.shadowColor = "rgba(0, 120,255, .85)", ip(b, d, ys, zs, 42), b.shadowBlur = 0, b.fillStyle = "#001630", e = hp(b, a.Na, we, 24, 12, 200, 2), ip(b, e, ys, zs + 40 * d.lines.length, 20), a.ta && (Ro(b), d = ne / 2, e = Fs + hf[4] / 2, Oo(hf, b, d, e), Oo(gf, b, d, e), ns(Gs.get(4), d - gf[3] / 2, e - gf[4] / 2), ns(Gs.get(5), d + 10, e - gf[4] / 2), ns(Gs.get(6), d - gf[3] / 2, e + 10), ns(Gs.get(7), d + 10, e + 10), d = d + hf[3] / 2 - jf[3] / 2, e = Fs + jf[4] / 2, Oo(jf, b, d, e), Gs.get(8).moveTo(d, e), b.fillStyle =
                                        "#5977ab", b.textAlign = "center", b.textBaseline = "middle", a.T || (a.T = hp(b, hc("share"), we, 48, 20, 320, 1)), ip(b, a.T, ne / 2, Fs + 416, a.T.fontSize))
                        }
                        b.restore();
                        break;
                    case 7:
                        Xs(a.ta, b)
                }
            }, 0);
            td(this, this.R);
            this.R.start()
        };
    v(ev, J);
    var fv = null;
    (function(a, b) {
        var c = function() {
            a();
            window.lol && window.lol()
        };
        Uu(c, b);
        c()
    })(function() {
        An();
        var a = document.getElementById("hplogo");
        if (a) {
            var b = document.getElementById("hpcanvas");
            if (b) {
                b.width = pe;
                b.height = qe;
                var c = $u();
                ce(a);
                Promise.all([On(), c]).then(function() {
                    a && b && (fv = new ev(a, b))
                })
            }
        }
    }, function() {
        for (var a = 0, b; b = dv.j[a]; a++) b.nd = [];
        sd(fv)
    });
}).call(this);
