(function() {
   try {
       (function() {
           function Yg(a, c, b) {
               function d(q) {
                   return function() {
                       var r = b.o("scip", "") + q;
                       b.C("scip", r)
                   }
               }
               var e, f = Yc(a, "ci");
               f = zb(a, f);
               var g = bf(a)
                 , h = ca(a)(hb)
                 , k = ["sync.cook.int"]
                 , l = gl(g.o("sci"));
               if (!l || 1440 < h - l) {
                   b.C("scip", "0");
                   var m = d("a")
                     , p = cf(a, c);
                   return f({
                       na: k,
                       G: (e = {},
                       e.duid = p,
                       e.hid = "" + Vb(a),
                       e)
                   }, ["https://an.yandex.ru/sync_cookie"], {
                       tb: 1500,
                       jd: !0
                   }).then(function(q) {
                       q = n(q.Qb, "CookieMatchUrls");
                       da(q) || (q = []);
                       La(q) ? d("1")() : m();
                       var r = Yc(a, "c")
                         , u = zb(a, r);
                       q = z(function(x, J) {
                           var M = "" + x + (jc(x, "?") ? "&" : "?") + "duid=" + p;
                           return u({
                               na: k
                           }, ["https://" + M], {
                               tb: 1500
                           }).then(B, t(d("b"), d("" + J)))
                       }, W(Ga, q));
                       return K.all(q)
                   }, m).then(function() {
                       var q = b.o("scip");
                       !q || jc(q, "a") || jc(q, "b") || (g.C("sci", h),
                       d("2")())
                   }, B)
               }
               return K.resolve()
           }
           function hl(a, c, b) {
               var d, e, f = Aa(a, c);
               f && (nb(b) ? La(ea(b)) ? (a = Zg(b)) && La(a) && f.params((d = {},
               d.__ym = (e = {},
               e.fpmh = a,
               e),
               d)) : Ab(a, c, "First party params error. Empty object.")() : Ab(a, c, "First party params error. Not an object.")())
           }
           function Zg(a) {
               a = Ba(a);
               return L(function(c, b) {
                   var d = b[0]
                     , e = b[1]
                     , f = nb(e);
                   if (!Ga(e) && !f)
                       return c;
                   e = f ? Zg(e) : e;
                   La(e) && c.push([d, e]);
                   return c
               }, [], a)
           }
           function $g(a, c, b) {
               void 0 === b && (b = 0);
               c = Ba(c);
               c = L(function(d, e) {
                   var f = e[0]
                     , g = e[1]
                     , h = nb(g);
                   if (!Ga(g) && !h)
                       return d;
                   h ? g = $g(a, g, b + 1) : b || "yandex_cid" !== f ? ("phone_number" === f ? g = il(g) : "email" === f && (g = jl(g)),
                   g = ah(a, g)) : g = K.resolve(g);
                   d.push(g.then(function(k) {
                       return [f, k]
                   }));
                   return d
               }, [], c);
               return K.all(c)
           }
           function jl(a) {
               var c = ob(a).toLowerCase().split("@")
                 , b = c[0];
               c = c[1];
               if (!c)
                   return a;
               c = c.replace("googlemail.com", "gmail.com");
               bh(c) && (c = "yandex.ru");
               "yandex.ru" === c ? b = b.replace(df, "-") : "gmail.com" === c && (b = b.replace(df, ""));
               a = ef(b, "+");
               -1 !== a && (b = b.slice(0, a));
               return b + "@" + c
           }
           function il(a) {
               a = Kb(a);
               return "8" === a[0] ? "7" + a.slice(1) : a
           }
           function ah(a, c) {
               return new K(function(b, d) {
                   var e = (new a.TextEncoder).encode(c);
                   a.crypto.subtle.digest("SHA-256", e).then(function(f) {
                       f = new a.Blob([f],{
                           type: "application/octet-binary"
                       });
                       var g = new a.FileReader;
                       g.onload = function(h) {
                           h = n(h, "target.result");
                           var k = (h || "").indexOf(",");
                           -1 !== k ? b(h.substring(k + 1)) : d(Cc("fpm.i"))
                       }
                       ;
                       g.readAsDataURL(f)
                   }, d)
               }
               )
           }
           function kl(a, c) {
               function b() {
                   m.hidden ? y(g.style, Zc(["top", "right", "left", "background"], "initial")) : y(g.style, Zc(["top", "right", "left"], "0"), {
                       background: "rgba(0, 0, 0, .3)"
                   });
                   r.parentNode || (p.appendChild(k),
                   p.appendChild(r));
                   m.hidden = !m.hidden;
                   p.hidden = !p.hidden;
                   q.hidden = !q.hidden
               }
               function d(M) {
                   var Z = f("div");
                   y(Z.style, kc("2px", "18px"), Dc, {
                       left: "15px",
                       top: "7px",
                       background: "#2f3747",
                       borderRadius: "2px"
                   });
                   Z.style.transform = "rotate(" + M + "deg)";
                   return Z
               }
               function e(M, Z, ma, db, Wb) {
                   var Ec = f("div");
                   y(Ec.style, kc(Z + "px", ma + "px"), Dc, {
                       left: M + "px",
                       bottom: 0,
                       background: db,
                       borderTopLeftRadius: Wb
                   });
                   return Ec
               }
               var f = Va(a);
               if (!f)
                   return B;
               var g = f("div");
               g.classList.add("__ym_wv_ign");
               y(g.style, ch, {
                   bottom: "0",
                   width: "100%",
                   zIndex: "999999999"
               });
               var h = f("div");
               y(h.style, kc("24px"), Dc, ff, {
                   top: "12px",
                   right: "10px",
                   background: "#3367dc",
                   overflow: "hidden"
               });
               var k = f("div");
               y(k.style, {
                   border: "2px solid transparent",
                   animation: "__ym_wv_ign-spinner-animation 1s 0.21s infinite linear"
               }, ff, Dc, kc("48px"), Zc(["top", "left"], "calc(50% - 24px)"), Zc(["borderTopColor", "borderLeftColor"], "#fc0"));
               var l = f("style");
               l.textContent = "@keyframes __ym_wv_ign-spinner-animation {to {transform: rotate(360deg);}}";
               k.appendChild(l);
               var m = f("div");
               m.id = "__ym_wv_ign__opener";
               y(m.style, kc("46px", "48px"), ch, {
                   right: "0",
                   bottom: "60px",
                   cursor: "pointer",
                   background: "#fff",
                   borderRadius: "16px 0 0 16px",
                   boxShadow: "0px 0px 1px rgba(67, 68, 69, 0.3), 0px 1px 2px rgba(67, 68, 69, 0.3)"
               });
               var p = f("div");
               y(p.style, Dc, Zc(["top", "right", "bottom"], "0"), {
                   width: "600px",
                   background: "#fff"
               });
               var q = f("div");
               q.id = "__ym_wv_ign__closer";
               y(q.style, kc("32px"), Dc, ff, {
                   top: "12px",
                   right: "612px",
                   cursor: "pointer",
                   background: "#fff"
               });
               l = f("iframe");
               l.src = "https://metrika.yandex.ru/widget/iframe-check";
               var r = f("iframe");
               y(r.style, kc("100%"), {
                   border: "none"
               });
               r.src = "https://metrika.yandex.ru/widget/dashboard?id=" + c;
               p.hidden = !0;
               q.hidden = !0;
               q.appendChild(d(45));
               q.appendChild(d(-45));
               p.appendChild(l);
               h.appendChild(e(0, 8, 9, "linear-gradient(0deg, #ff324f, #ff324f), linear-gradient(158.67deg, #ff455c 12.6%, #ff1139 96.76%)"));
               h.appendChild(e(8, 9, 16, "#04acff", "3px"));
               h.appendChild(e(17, 7, 24, "#ffdd13"));
               m.appendChild(h);
               g.appendChild(p);
               g.appendChild(q);
               var u = ["click", "touchstart"];
               h = ia(a);
               var x = a.document.body;
               l = [h.D(m, u, b), h.D(q, u, b), h.D(l, ["load"], F([Ha, [C(p.removeChild, p, l), C(g.appendChild, g, m)]], A)), h.D(r, ["load"], C(p.removeChild, p, k)), C(x.removeChild, x, g)];
               var J = F([Ha, l], A);
               l.push(h.D(a, ["securitypolicyviolation"], function(M) {
                   (M = n(M, "blockedURI")) && 0 <= M.indexOf("https://metrika.yandex.ru") && J()
               }));
               x.appendChild(g);
               return J
           }
           function Zc(a, c) {
               return L(function(b, d) {
                   b[d] = c;
                   return b
               }, {}, a)
           }
           function kc(a, c) {
               var b;
               return b = {},
               b.width = a,
               b.height = c || a,
               b
           }
           function ll(a, c, b, d) {
               d = n(d, "target");
               (d = Xb("button,input", a, d)) && "submit" === d.type && (d = dh(a, d)) && (b.push(d),
               X(a, F([!1, a, c, b, d], eh), 300))
           }
           function eh(a, c, b, d, e) {
               var f = Lb(c)(e, d)
                 , g = -1 !== f;
               if (a || g)
                   g && d.splice(f, 1),
                   a = fh(c, e),
                   a = "?" + $c(a),
                   d = F([c, b, "Form goal. Counter " + b.id + ". Form: " + a + "."], gh),
                   Nd(c, b, "form", d)(a)
           }
           function gh(a, c, b) {
               return ml(a, c).then(function(d) {
                   d && Ab(a, c, b)()
               })
           }
           function nl(a) {
               a = ol(a);
               return da(a) ? I("x", a) : a
           }
           function pl(a) {
               return I("x", ql(a) || [])
           }
           function ql(a) {
               var c = n(a, "speechSynthesis.getVoices");
               if (!c)
                   return "";
               a = C(c, a.speechSynthesis);
               return lc(function(b) {
                   return z(w(b, n), rl)
               }, a())
           }
           function sl(a) {
               if (a = tl(a))
                   try {
                       for (var c = [], b = 0; b < hh.length; b += 1) {
                           var d = a(hh[b]);
                           c.push(d)
                       }
                       var e = c
                   } catch (f) {
                       e = []
                   }
               else
                   e = [];
               return e ? I("x", e) : ""
           }
           function ul(a) {
               return (a = vl(a)) ? t(wl, Fc(N), eb(F(["", ["matches", "media"]], xl)), w("x", I))(a) : ""
           }
           function xl(a, c, b) {
               return I("x", z(t(N, na("concat", "" + a), w(b, n)), c))
           }
           function yl(a, c) {
               var b = c.jh;
               if (!zl(a, b))
                   return "";
               var d = [];
               a: {
                   var e = Al(a, b);
                   try {
                       var f = F(e, t)()();
                       break a
                   } catch (J) {
                       if ("ccf" === J.message) {
                           f = null;
                           break a
                       }
                       pb(J)
                   }
                   f = void 0
               }
               if (Na(f))
                   var g = "";
               else
                   try {
                       g = f.toDataURL()
                   } catch (J) {
                       g = ""
                   }
               (f = g) && d.push(f);
               var h = b.getContextAttributes();
               try {
                   var k = Ia(b.getSupportedExtensions, "getSupportedExtensions") ? b.getSupportedExtensions() || [] : []
               } catch (J) {
                   k = []
               }
               k = I(";", k);
               f = gf(b.getParameter(b.ALIASED_LINE_WIDTH_RANGE), b);
               e = gf(b.getParameter(b.ALIASED_POINT_SIZE_RANGE), b);
               g = b.getParameter(b.ALPHA_BITS);
               h = h && h.antialias ? "yes" : "no";
               var l = b.getParameter(b.BLUE_BITS)
                 , m = b.getParameter(b.DEPTH_BITS)
                 , p = b.getParameter(b.GREEN_BITS)
                 , q = b.getExtension("EXT_texture_filter_anisotropic") || b.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || b.getExtension("MOZ_EXT_texture_filter_anisotropic");
               if (q) {
                   var r = b.getParameter(q.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                   0 === r && (r = 2)
               }
               r = {
                   pk: k,
                   "webgl aliased line width range": f,
                   "webgl aliased point size range": e,
                   "webgl alpha bits": g,
                   "webgl antialiasing": h,
                   "webgl blue bits": l,
                   "webgl depth bits": m,
                   "webgl green bits": p,
                   "webgl max anisotropy": q ? r : null,
                   "webgl max combined texture image units": b.getParameter(b.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
                   "webgl max cube map texture size": b.getParameter(b.MAX_CUBE_MAP_TEXTURE_SIZE),
                   "webgl max fragment uniform vectors": b.getParameter(b.MAX_FRAGMENT_UNIFORM_VECTORS),
                   "webgl max render buffer size": b.getParameter(b.MAX_RENDERBUFFER_SIZE),
                   "webgl max texture image units": b.getParameter(b.MAX_TEXTURE_IMAGE_UNITS),
                   "webgl max texture size": b.getParameter(b.MAX_TEXTURE_SIZE),
                   "webgl max varying vectors": b.getParameter(b.MAX_VARYING_VECTORS),
                   "webgl max vertex attribs": b.getParameter(b.MAX_VERTEX_ATTRIBS),
                   "webgl max vertex texture image units": b.getParameter(b.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
                   "webgl max vertex uniform vectors": b.getParameter(b.MAX_VERTEX_UNIFORM_VECTORS),
                   "webgl max viewport dims": gf(b.getParameter(b.MAX_VIEWPORT_DIMS), b),
                   "webgl red bits": b.getParameter(b.RED_BITS),
                   "webgl renderer": b.getParameter(b.RENDERER),
                   "webgl shading language version": b.getParameter(b.SHADING_LANGUAGE_VERSION),
                   "webgl stencil bits": b.getParameter(b.STENCIL_BITS),
                   "webgl vendor": b.getParameter(b.VENDOR),
                   "webgl version": b.getParameter(b.VERSION)
               };
               hf(d, r, ": ");
               a: {
                   try {
                       var u = b.getExtension("WEBGL_debug_renderer_info");
                       if (u) {
                           var x = {
                               "webgl unmasked vendor": b.getParameter(u.UNMASKED_VENDOR_WEBGL),
                               "webgl unmasked renderer": b.getParameter(u.UNMASKED_RENDERER_WEBGL)
                           };
                           break a
                       }
                   } catch (J) {}
                   x = {}
               }
               hf(d, x);
               if (!b.getShaderPrecisionFormat)
                   return I("~", d);
               hf(d, Bl(b));
               return I("~", d)
           }
           function hf(a, c, b) {
               void 0 === b && (b = ":");
               A(function(d) {
                   return a.push("" + d[0] + b + d[1])
               }, Ba(c))
           }
           function Cl(a) {
               var c = n(a, "ApplePaySession")
                 , b = R(a).protocol;
               a = c && "https:" === b && !Mb(a) ? c : void 0;
               c = "";
               if (!a)
                   return c;
               try {
                   c = "" + a.canMakePayments();
                   b = "";
                   var d = a.supportsVersion;
                   if (T(d))
                       for (var e = 1; 20 >= e; e += 1)
                           b += d.call(a, e) ? "" + e : "0";
                   return b + c
               } catch (f) {
                   return c
               }
           }
           function Dl(a, c) {
               var b = a.document;
               if (G(b.readyState, ["interactive", "complete"]))
                   Nb(a, c);
               else {
                   var d = ia(a)
                     , e = d.D
                     , f = d.Wb
                     , g = function() {
                       f(b, ["DOMContentLoaded"], g);
                       f(a, ["load"], g);
                       c()
                   };
                   e(b, ["DOMContentLoaded"], g);
                   e(a, ["load"], g)
               }
           }
           function El(a, c) {
               var b = Fl(a)
                 , d = ta(a, "r", c)
                 , e = D(a, "rts.p");
               return oa(a, c, C(L, null, function(f, g) {
                   var h = {
                       id: g.rh,
                       $: g.$
                   };
                   h = d({
                       ba: g.fj,
                       J: xa(g.fh),
                       G: g.O,
                       Rb: g.Rb
                   }, h, g.lj)["catch"](e);
                   return f.then(w(h, N))
               }, K.resolve(""), b))["catch"](e)
           }
           function ih(a, c, b) {
               c = Gc(a, void 0, c);
               c = jh(a, c.o("phc_settings") || "");
               var d = n(c, "clientId")
                 , e = n(c, "orderId")
                 , f = n(c, "service_id")
                 , g = n(c, "phones") || [];
               return d && e && g ? Gl(a, b.hc, {
                   Ag: Hl
               }).ag(g).then(function(h) {
                   return Il(b, {
                       Bb: d,
                       Lb: e,
                       qg: f
                   }, h.ia, g, h.ta)
               })["catch"](function() {}) : K.resolve()
           }
           function Hl(a, c, b) {
               a = Jl(b.Wc);
               if ("href" === b.ze) {
                   var d = b.pb;
                   c = d.href;
                   b = c.replace(a, b.Sa);
                   if (c !== b)
                       return d.href = b,
                       !0
               } else if ((a = null === (d = b.pb.textContent) || void 0 === d ? void 0 : d.replace(a, b.Sa)) && a !== b.pb.textContent)
                   return b.pb.textContent = a,
                   !0;
               return !1
           }
           function Il(a, c, b, d, e) {
               var f;
               c.Bb && c.Lb && (c.Bb === a.Bb && c.Lb === a.Lb || y(a, c, {
                   ia: {},
                   ab: !0
               }),
               0 < e && Wa(a.ta, [e]),
               A(function(g) {
                   var h, k, l = g[0];
                   g = g[1];
                   var m = +(a.ia[l] && a.ia[l][g] ? a.ia[l][g] : 0);
                   y(a.ia, (h = {},
                   h[l] = (k = {},
                   k[g] = m,
                   k),
                   h))
               }, d),
               A(function(g) {
                   var h, k, l = g[0];
                   g = g[1];
                   var m = 1 + (a.ia[l] ? a.ia[l][g] : 0);
                   y(a.ia, (h = {},
                   h[l] = (k = {},
                   k[g] = m,
                   k),
                   h))
               }, b),
               a.Lf && (a.ab || b.length) && ((c = Aa(a.l, a.hc)) && c.params("__ym", "phc", (f = {},
               f.clientId = a.Bb,
               f.orderId = a.Lb,
               f.service_id = a.qg,
               f.phones = a.ia,
               f.performance = a.ta,
               f)),
               a.ab = !1))
           }
           function Kl(a, c) {
               try {
                   var b = c.origin
               } catch (e) {}
               if (b) {
                   var d = Ma(t(Oa, ua(b)), [/^http:\/\/([\w\-.]+\.)?webvisor\.com\/?$/, /^https:\/\/([\w\-.]+\.)?metri[kc]a\.yandex\.(ru|ua|by|kz|com|com\.tr)\/?$/]);
                   b = G(b.replace(/\/?$/, "/"), Ll);
                   if (d || b)
                       d = Bb(a, c.data),
                       "appendremote" === n(d, "action") && Ml(a, c, d)
               }
           }
           function kh(a, c) {
               var b, d, e, f, g = c.data;
               g = void 0 === g ? "" : g;
               var h = c.id;
               h = void 0 === h ? "" : h;
               var k = O(a)
                 , l = {};
               l.getCachedTags = lh;
               l.form = (b = {},
               b.closest = w(a, dh),
               b.select = Nl,
               b.getData = w(a, fh),
               b);
               l.button = (d = {},
               d.closest = w(a, mh),
               d.select = nh,
               d.getData = w(a, oh),
               d);
               l.phone = (e = {},
               e.hidePhones = F([a, null, [g]], ph),
               e);
               l.status = (f = {},
               f.checkStatus = F([a, Ca(h)], Ol),
               f);
               k.C("_u", l);
               b = c.lang;
               b = void 0 === b ? "" : b;
               d = c.appVersion;
               d = void 0 === d ? "" : d;
               e = c.fileId;
               e = void 0 === e ? "" : e;
               f = c.beta;
               f = void 0 === f ? !1 : f;
               d = I(".", t(eb(t(N, Ca)), Fc(Boolean))(d.split(".")));
               G(e, Pl) && G(b, ["ru", "en", "tr"]) ? (b = (f ? "https://s3.mds.yandex.net/internal-metrika-betas" : "https://yastatic.net/s3/metrika") + (d ? "/" + d : "") + "/form-selector/" + (e + "_" + b + ".js"),
               b = qh(b) ? b : "") : b = "";
               b && Hc(a, {
                   src: b
               })
           }
           function Ql(a, c) {
               var b = Va(a);
               if (b) {
                   b = b("div");
                   var d = Yb(a);
                   if (d) {
                       b.innerHTML = '<iframe name="RemoteIframe" allowtransparency="true" style="position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"></iframe>';
                       var e = b.firstChild;
                       e.onload = function() {
                           Hc(e.contentWindow, {
                               src: c
                           })
                       }
                       ;
                       a._ym__remoteIframeEl = e;
                       d.appendChild(b);
                       b.removeChild(e);
                       var f = null;
                       b.attachShadow ? f = b.attachShadow({
                           mode: "open"
                       }) : b.createShadowRoot ? f = b.createShadowRoot() : b.webkitCreateShadowRoot && (f = b.webkitCreateShadowRoot());
                       f ? f.appendChild(e) : (d.appendChild(e),
                       a._ym__remoteIframeContainer = e)
                   }
               }
           }
           function Ol(a) {
               var c, b = rh(a);
               a = O(a).o("getCounters", Od)();
               a = z(U("id"), a);
               return c = {
                   id: b
               },
               c.counterFound = !!b && G(b, a),
               c
           }
           function ph(a, c, b) {
               var d;
               c = sh(a, c, {
                   Ag: Rl,
                   Ni: (d = {},
                   d.href = !0,
                   d)
               });
               b = W(Boolean, z(function(f) {
                   return "*" === f ? f : Kb(f)
               }, b));
               var e = z(t(N, na("concat", [""]), Sl("reverse"), Ha), b);
               b = ad(a);
               d = th(a, b, 1E3);
               c = C(c.ag, c, e, !1);
               d.D(c);
               Tl(a, b);
               uh(a, b);
               c()
           }
           function Rl(a, c, b) {
               var d = Va(a)
                 , e = b.pb
                 , f = b.Wc
                 , g = e.parentNode
                 , h = e.textContent;
               if ("text" === b.ze && h && d && g) {
                   b = d("small");
                   vh(b);
                   var k = h.split("")
                     , l = wh(h).length;
                   A(na("appendChild", b), L(function(m, p) {
                       var q = m.ha
                         , r = m.Hg
                         , u = d("small");
                       u.innerHTML = p;
                       var x = Ul.test(p);
                       vh(u);
                       x && (u.style.opacity = "" + (l - r - 1) / l);
                       q.push(u);
                       return {
                           ha: q,
                           Hg: r + (x ? 1 : 0)
                       }
                   }, {
                       ha: [],
                       Hg: 0
                   }, k).ha);
                   Vl(a, c, b, f);
                   g.insertBefore(b, e);
                   e.textContent = "";
                   return !0
               }
               return !1
           }
           function Vl(a, c, b, d) {
               function e() {
                   A(w(["style", "opacity", ""], Ic), pa(b.childNodes));
                   if (c) {
                       var k = Aa(a, c);
                       k && k.extLink("tel:" + d, {})
                   }
                   g();
                   h()
               }
               var f = ia(a)
                 , g = B
                 , h = B;
               g = f.D(b, ["mouseenter"], function(k) {
                   if (k.target === b) {
                       var l = X(a, e, 200, "ph.h.e");
                       (h || B)();
                       h = f.D(b, ["mouseleave"], function(m) {
                           m.target === b && ja(a, l)
                       })
                   }
               })
           }
           function uh(a, c) {
               mc(a)(Xa(B, function() {
                   var b, d = a.document.body, e = (b = {},
                   b.attributes = !0,
                   b.childList = !0,
                   b.subtree = !0,
                   b);
                   Da("MutationObserver", a.MutationObserver) && (new MutationObserver(c.R)).observe(d, e)
               }))
           }
           function Tl(a, c) {
               return ia(a).D(a, ["load"], c.R)
           }
           function sh(a, c, b) {
               function d(k) {
                   var l;
                   return f(a, c, k) ? null === (l = h[k.Wc]) || void 0 === l ? void 0 : l.fd : null
               }
               var e, f = b.Ag;
               b = b.Ni;
               var g = void 0 === b ? (e = {},
               e.href = !0,
               e.text = !0,
               e) : b, h;
               return {
                   ag: function(k) {
                       return new K(function(l, m) {
                           k && k.length || m();
                           h = xh()(k);
                           mc(a)(Xa(w({
                               ia: [],
                               ta: 0
                           }, l), function() {
                               var p = ca(a)
                                 , q = p(Y)
                                 , r = g.href ? Wl(a, h) : []
                                 , u = g.text ? yh(a, h) : [];
                               l({
                                   ia: W(da, W(Boolean, z(d, r.concat(u)))),
                                   ta: p(Y) - q
                               })
                           }))
                       }
                       )
                   }
               }
           }
           function Wl(a, c) {
               var b = a.document.body;
               if (!b)
                   return [];
               var d = zh(c);
               return L(function(e, f) {
                   var g = n(f, "href");
                   try {
                       var h = decodeURI(g || "")
                   } catch (p) {
                       h = ""
                   }
                   if ("tel:" === h.slice(0, 4)) {
                       var k = (d.exec(h) || [])[0]
                         , l = k ? Kb(k) : ""
                         , m = c[l];
                       V(m) || !l && "*" !== m.fd[0] || (e.push({
                           ze: "href",
                           pb: f,
                           Wc: l,
                           Sa: Ah(k, c[l].Sa),
                           Aj: g
                       }),
                       g = Kb(h.slice(4)),
                       l = xh()([l ? m.fd : [g, ""]]),
                       e.push.apply(e, yh(a, l, f)))
                   }
                   return e
               }, [], pa(b.querySelectorAll("a")))
           }
           function yh(a, c, b) {
               void 0 === b && (b = a.document.body);
               if (!b)
                   return [];
               var d = []
                 , e = zh(c);
               jf(a, b, function(f) {
                   if (f !== b && "script" !== (n(f, "parentNode.nodeName") || "").toLowerCase()) {
                       var g = W(Boolean, e.exec(f.textContent || "") || []);
                       A(function(h) {
                           var k = Kb(h);
                           V(c[k]) || d.push({
                               ze: "text",
                               pb: f,
                               Wc: k,
                               Sa: Ah(h, c[k].Sa),
                               Aj: f.textContent || ""
                           })
                       }, g)
                   }
               }, function(f) {
                   return e.test(f.textContent || "") ? 1 : 0
               }, a.NodeFilter.SHOW_TEXT);
               return d
           }
           function xh() {
               return bd(function(a, c) {
                   var b = z(Kb, c)
                     , d = b[0];
                   b = b[1];
                   a[d] = {
                       Sa: b,
                       fd: c
                   };
                   var e = Bh(d);
                   e !== d && (a[e] = {
                       Sa: Bh(b),
                       fd: c
                   });
                   return a
               }, {})
           }
           function Ah(a, c) {
               for (var b = [], d = a.split(""), e = c.split(""), f = 0, g = 0; g < a.length && !(f >= e.length); g += 1) {
                   var h = d[g];
                   "0" <= h && "9" >= h ? (b.push(e[f]),
                   f += 1) : b.push(d[g])
               }
               return I("", b) + c.slice(f + 1)
           }
           function Bh(a) {
               var c = {
                   7: "8",
                   8: "7"
               };
               return 11 === a.length && c[a[0]] ? "" + c[a[0]] + a.slice(1) : a
           }
           function zh(a) {
               return new RegExp("(?:" + I("|", z(Ch, ea(a))) + ")")
           }
           function fh(a, c, b) {
               return Dh(a, c, ["i", "n", "p"], void 0, b)
           }
           function Xl(a, c) {
               var b = Eh(a)
                 , d = P(c)
                 , e = b[d];
               e || (e = {},
               b[d] = e);
               e.vi = !0;
               if (b = e.rg)
                   d = Fh(a),
                   A(d, b)
           }
           function Yl(a, c, b, d) {
               var e;
               if (a = Aa(a, b)) {
                   var f = d.data;
                   b = "" + b.id;
                   var g = d.sended || [];
                   d.sended || (d.sended = g);
                   G(b, g) || !a.params || d.counter && "" + d.counter !== b || (a.params(f),
                   g.push(b),
                   d.parent && c.ng((e = {},
                   e.type = "params",
                   e.data = f,
                   e)))
               }
           }
           function Zl(a) {
               var c = B
                 , b = null
                 , d = a.length;
               if (0 !== a.length && a[0]) {
                   var e = a.slice(-1)[0];
                   T(e) && (c = e,
                   d = a.length + -1);
                   var f = a.slice(-2)[0];
                   T(f) && (c = f,
                   b = e,
                   d = a.length + -2);
                   d = a.slice(0, d);
                   return {
                       th: b,
                       Wa: c,
                       O: 1 === d.length ? a[0] : Ic(d)
                   }
               }
           }
           function $l(a, c, b) {
               var d, e = Gh(a, c), f = R(a);
               f = Pd(f.protocol + "//" + f.hostname + f.pathname);
               c = Qd(a, c);
               var g = "";
               do
                   g += Ra(a);
               while (g.length < c.length);
               g = g.slice(0, c.length);
               a = "";
               for (var h = 0; h < c.length; h += 1)
                   a += (c.charCodeAt(h) + g.charCodeAt(h) - 96) % 10;
               c = [g, a];
               a = c[0];
               c = c[1];
               return (d = {},
               d.mf = "https://adstat.yandex.ru/track?service=metrika&id=" + c + "&mask=" + a + "&ref=" + f,
               d.rt = "https://" + e + ".mc.yandex.ru/watch/3/1?browser-info=rt:1",
               d)[b]
           }
           function am(a, c, b, d) {
               a = n(d, "data");
               if (Ga(a)) {
                   var e = a.split("*");
                   a = e[0];
                   var f = e[1];
                   e = e[2];
                   "sc.frame" === a ? d.source.postMessage("sc.images*" + c, "*") : "sc.image" === a && f === c && b(e)
               }
           }
           function Jc(a, c, b) {
               return {
                   ca: function(d, e) {
                       Hh(d) ? e() : oa(a, b, function(f) {
                           var g;
                           if (f = n(f, "settings.hittoken"))
                               f = (g = {},
                               g.hittoken = f,
                               g),
                               d.G = y(d.G || {}, f);
                           e()
                       })
                   }
               }
           }
           function bm(a, c) {
               var b = Pa(a);
               if ("" !== b.o("cc"))
                   return 0;
               var d = w("cc", b.C);
               d(0);
               var e = ca(a)
                 , f = O(a);
               f = t(U(Sa({
                   Qb: 1
               }) + ".c"), cd(function(g) {
                   d(g + "&" + e(hb))
               }), w("cc", f.C));
               ta(a, "6", c)({}).then(f)["catch"](t(cd(function() {
                   var g = e(hb);
                   b.C("cc", "&" + g)
               }), D(a, "cc")))
           }
           function Rd(a, c) {
               if (!c)
                   return !1;
               var b = R(a);
               return (new RegExp(c)).test("" + b.pathname + b.hash + b.search)
           }
           function cm(a, c) {
               return oa(a, c, function(b) {
                   var d = n(b, "settings.dr");
                   return {
                       xh: dm(a, d),
                       isEnabled: n(b, "settings.auto_goals")
                   }
               })
           }
           function em(a, c, b, d, e) {
               b = kf(a.document.body, b);
               d = kf(a.document.body, d);
               G(e.target, [b, d]) && lf(a, c)
           }
           function Ih(a, c, b, d) {
               (b = fm(a, d, b)) && lf(a, c, b)
           }
           function Jh(a, c) {
               var b = Kh(a, c);
               return gm(a, b)
           }
           function Kh(a, c) {
               var b = kf(a.document.body, c);
               return b ? hm(a, b) : ""
           }
           function lf(a, c, b) {
               if (c = Aa(a, c))
                   a = Ic(["dr", b || "" + Ra(a, 10, 99)]),
                   c.params(Ic(["__ym", a]))
           }
           function kf(a, c) {
               var b = null;
               try {
                   b = c ? Kc(c, a) : b
               } catch (d) {}
               return b
           }
           function Lh(a) {
               a = pa(Mh(a));
               return z(function(c) {
                   c = c.charCodeAt(0).toString(2);
                   return Nh("0", 8, c)
               }, a)
           }
           function hm(a, c) {
               if (!c)
                   return "";
               var b = []
                 , d = n(a, "document");
               jf(a, c, function(e) {
                   if (e.nodeType === d.TEXT_NODE)
                       var f = e.textContent;
                   else
                       e instanceof a.HTMLImageElement ? f = e.alt : e instanceof a.HTMLInputElement && (f = e.value);
                   (f = f && f.trim()) && b.push(f)
               });
               return 0 === b.length ? "" : b.join(" ")
           }
           function im(a, c, b) {
               a = ya(b);
               b = a[1];
               "track" === a[0] && c({
                   version: "0",
                   rc: b
               })
           }
           function jm(a, c, b) {
               if (b) {
                   var d = b.version;
                   (b = n(km, d + "." + b.rc)) && (c && G(b, lm) || a("ym-" + b + "-" + d))
               }
           }
           function Sd(a, c, b) {
               return function(d) {
                   var e, f, g = Aa(c, b);
                   g && mm(a, d, c) && (g = C(g.params, g),
                   (d = mf(a, d, "goods")) && g && g((e = {},
                   e.__ym = (f = {},
                   f.ecommerce = [d],
                   f),
                   e)))
               }
           }
           function nm(a, c, b, d) {
               var e, f;
               c = n(d, "ecommerce") || {};
               var g = n(d, "event") || "";
               c = (g = Oh[g]) ? mf(g, c, "items") : void 0;
               if (!c)
                   a: {
                       c = d;
                       !da(d) && Td(a, La(d)) && (c = ya(c));
                       if (da(c) && (a = Oh[c[1]],
                       "event" === c[0] && a)) {
                           c = mf(a, c[2], "items");
                           break a
                       }
                       c = void 0
                   }
               (d = c || om(d)) && b && b((e = {},
               e.__ym = (f = {},
               f.ecommerce = [d],
               f),
               e))
           }
           function om(a) {
               var c = n(a, "ecommerce") || {};
               a = W(nc(pm), ea(c));
               a = L(function(b, d) {
                   b[d] = c[d];
                   return b
               }, {}, a);
               return ea(a).length ? a : void 0
           }
           function mm(a, c, b) {
               var d = !1
                 , e = "";
               if (!nb(c))
                   return qb(b, "", "Ecommerce data should be an object"),
                   d;
               var f = c.goods;
               switch (a) {
               case "detail":
               case "add":
               case "remove":
                   da(f) && f.length ? (d = nf(function(g) {
                       return nb(g) && (Ga(g.id) || Td(b, g.id) || Ga(g.name))
                   }, f)) || (e = "All items in 'goods' should be objects and contain 'id' or 'name' field") : e = "Ecommerce data should contain 'goods' non-empty array";
                   break;
               case "purchase":
                   Td(b, c.id) || Ga(c.id) ? d = !0 : e = "Purchase object should contain string or number 'id' field"
               }
               qb(b, "", e);
               return d
           }
           function mf(a, c, b) {
               var d, e;
               if (c) {
                   var f = c.purchase || c;
                   c = ea(f);
                   var g = f[b];
                   if (g) {
                       var h = (d = {},
                       d[a] = (e = {},
                       e.products = z(qm, g),
                       e),
                       d);
                       1 < c.length && (h[a].actionField = L(function(k, l) {
                           if (l === b)
                               return k;
                           if ("currency" === l)
                               return h.currencyCode = f.currency,
                               k;
                           k[of[l] || l] = f[l];
                           return k
                       }, {}, c));
                       return h
                   }
               }
           }
           function qm(a) {
               var c = {};
               A(function(b) {
                   var d = of[b] || b;
                   -1 !== b.indexOf("item_category") ? (d = of.item_category,
                   c[d] = c[d] ? c[d] + ("/" + a[b]) : a[b]) : c[d] = a[b]
               }, ea(a));
               return c
           }
           function rm(a, c) {
               var b = Pa(a)
                 , d = "wv2rf:" + P(c)
                 , e = c.zb
                 , f = Ud(a)
                 , g = b.o(d)
                 , h = c.Lj;
               return V(f) || Na(g) ? ua(function(k, l) {
                   oa(a, c, function(m) {
                       var p = n(m, "settings.webvisor.forms");
                       p = !n(m, "settings.x3") && p;
                       f = Ud(a) || n(m, "settings.eu");
                       b.C(d, dd(p));
                       l({
                           zb: e,
                           Jf: !!f,
                           Zf: p,
                           Cg: h
                       })
                   })
               }) : pf({
                   zb: e,
                   Jf: f,
                   Zf: !!Ca(g),
                   Cg: h
               })
           }
           function sm() {
               var a = L(function(c, b) {
                   c[b[0]] = {
                       pd: 0,
                       gh: 1 / b[1]
                   };
                   return c
               }, {}, [["blur", .0034], ["change", .0155], ["click", .01095], ["deviceRotation", 2E-4], ["focus", .0061], ["mousemove", .5132], ["scroll", .4795], ["selection", .0109], ["touchcancel", 2E-4], ["touchend", .0265], ["touchforcechange", .0233], ["touchmove", .1442], ["touchstart", .027], ["zoom", .0014]]);
               return {
                   Zg: function(c) {
                       if (c.length)
                           return {
                               type: "activity",
                               data: L(function(b, d) {
                                   var e = a[d];
                                   return Math.round(b + e.pd * e.gh)
                               }, 0, ea(a))
                           }
                   },
                   Ui: function(c) {
                       c && (c = a[c.data.type]) && (c.pd += 1)
                   }
               }
           }
           function tm(a) {
               if (a.type && a.event)
                   switch (a.type) {
                   case "page":
                       var c = a.data
                         , b = c.za
                         , d = c.cd
                         , e = c.content;
                       delete c.za;
                       delete c.cd;
                       delete c.content;
                       c = {
                           type: "page",
                           data: {
                               M: a.M || 0,
                               content: e,
                               za: b,
                               cd: d,
                               Z: c
                           }
                       };
                       a.L && (c.L = a.L);
                       return c;
                   case "event":
                       a: {
                           c = {
                               type: "event",
                               L: a.L,
                               data: {
                                   M: a.M,
                                   type: a.event,
                                   Z: {}
                               }
                           };
                           b = y({}, a.data);
                           switch (a.event) {
                           case "zoom":
                               c.data.Z = {
                                   Jg: {
                                       x: 0,
                                       y: 0,
                                       level: 0
                                   },
                                   Lg: b,
                                   duration: 1
                               };
                               break;
                           case "keystroke":
                               c.data.Z = b.Jc;
                               break;
                           case "deviceRotation":
                           case "resize":
                               c.data.Z = b;
                               break;
                           case "windowfocus":
                           case "windowblur":
                           case "focus":
                               c.data.target = b.target;
                               c.data.Z = null;
                               break;
                           case "touchmove":
                           case "touchstart":
                           case "touchend":
                           case "touchcancel":
                           case "touchforcechange":
                           case "scroll":
                           case "change":
                           case "click":
                           case "mousemove":
                           case "mousedown":
                           case "mouseup":
                           case "selection":
                           case "stylechange":
                               c.data.target = b.target;
                               delete b.target;
                               c.data.Z = b;
                               break;
                           case "srcset":
                               a = {
                                   type: "mutation",
                                   L: a.L,
                                   data: {
                                       M: a.M,
                                       Z: {
                                           Ca: [{
                                               od: [{
                                                   id: b.target,
                                                   yb: {
                                                       src: {
                                                           Nc: "",
                                                           n: b.value,
                                                           r: !1
                                                       }
                                                   },
                                                   xa: 0
                                               }]
                                           }],
                                           index: 0
                                       }
                                   }
                               };
                               break a
                           }
                           a = c
                       }
                       break;
                   case "mutation":
                       return um(a)
                   }
               return a
           }
           function um(a) {
               var c = y({}, a.data)
                 , b = [];
               switch (a.event) {
               case "tc":
                   b = [{
                       d: [{
                           id: c.target,
                           kc: {
                               Nc: "",
                               n: c.value
                           },
                           xa: c.index
                       }]
                   }];
                   break;
               case "ac":
                   b = [{
                       od: [{
                           id: c.target,
                           yb: L(function(d, e) {
                               var f = e[1];
                               d[e[0]] = {
                                   Nc: "",
                                   n: f,
                                   r: ka(f)
                               };
                               return d
                           }, {}, Ba(c.attributes)),
                           xa: c.index
                       }]
                   }];
                   break;
               case "re":
                   b = [{
                       Ve: z(function(d) {
                           return {
                               id: d,
                               xa: c.index
                           }
                       }, c.ha)
                   }];
                   break;
               case "ad":
                   b = [{
                       Ye: z(function(d) {
                           return {
                               id: d.id,
                               Rf: d.name,
                               Sf: d.Qf,
                               le: d.parent,
                               oe: d.qe,
                               de: d.next,
                               yb: d.attributes,
                               xa: c.index,
                               kc: d.content,
                               Ma: d.hidden
                           }
                       }, c.ha)
                   }]
               }
               return {
                   type: "mutation",
                   L: a.L,
                   data: {
                       M: a.M,
                       Z: {
                           Ca: b,
                           index: c.index
                       }
                   }
               }
           }
           function vm(a) {
               return {
                   Sh: function() {
                       var c = a.document.querySelector("base[href]");
                       return c ? c.getAttribute("href") : null
                   },
                   Uh: function() {
                       if (a.document.doctype) {
                           var c = y({
                               name: "html",
                               publicId: "",
                               systemId: ""
                           }, a.document.doctype)
                             , b = c.publicId
                             , d = c.systemId;
                           return "<!DOCTYPE " + I("", [c.name, b ? ' PUBLIC "' + b + '"' : "", !b && d ? " SYSTEM" : "", d ? ' "' + d + '"' : ""]) + ">"
                       }
                       return null
                   },
                   gi: function() {
                       try {
                           if (!a.sessionStorage)
                               return null;
                           var c = a.sessionStorage.getItem("__vw_tab_guid")
                             , b = !1;
                           try {
                               var d = a.opener ? a.opener.sessionStorage : null;
                               b = !!d && c === d.getItem("__vw_tab_guid")
                           } catch (e) {
                               b = !0
                           }
                           if (!c || b)
                               c = Ph(),
                               a.sessionStorage.setItem("__vw_tab_guid", c);
                           return c
                       } catch (e) {
                           return null
                       }
                   }
               }
           }
           function wm(a, c, b) {
               var d = ed(a)
                 , e = ia(a)
                 , f = Mb(a)
                 , g = c.Id()
                 , h = !n(a, "postMessage") || f && !n(a, "parent.postMessage")
                 , k = w(d, N);
               if (h) {
                   if (!g)
                       return X(a, C(d.R, d, "i", {
                           qa: !1
                       }), 10),
                       {
                           Hd: k,
                           kg: B,
                           stop: B
                       };
                   pb(Ya())
               }
               d.D(["sr"], function(r) {
                   var u, x = Qh(a, r.source);
                   x && qf(a, r.source, (u = {},
                   u.type = "\u043d",
                   u.frameId = c.oa().Y(x),
                   u))
               });
               d.D(["sd"], function(r) {
                   var u = r.data;
                   r = r.source;
                   (a === r || Qh(a, r)) && d.R("sdr", {
                       data: u.data,
                       M: u.frameId
                   })
               });
               if (f && !g) {
                   var l = !1
                     , m = 0
                     , p = function() {
                       var r;
                       qf(a, a.parent, (r = {},
                       r.type = "sr",
                       r));
                       m = X(a, p, 100, "if.i")
                   };
                   p();
                   var q = function(r) {
                       d.ea(["\u043d"], q);
                       ja(a, m);
                       var u = Lc(a, r.origin).host;
                       l || r.source !== a.parent || !r.data.frameId || "about:blank" !== R(a).host && !G(u, b) || (l = !0,
                       d.R("i", {
                           M: r.data.frameId,
                           qa: !0
                       }))
                   };
                   d.D(["\u043d"], q);
                   X(a, function() {
                       d.ea(["\u043d"], q);
                       ja(a, m);
                       l || (l = !0,
                       d.R("i", {
                           qa: !1
                       }))
                   }, 2E3, "if.r")
               }
               e = e.D(a, ["message"], function(r) {
                   var u = Bb(a, r.data);
                   u && u.type && G(u.type, xm) && d.R(u.type, {
                       data: u,
                       source: r.source,
                       origin: r.origin
                   })
               });
               return {
                   Hd: k,
                   kg: function(r) {
                       var u;
                       return qf(a, a.parent, (u = {},
                       u.frameId = c.Id(),
                       u.data = r,
                       u.type = "sd",
                       u))
                   },
                   stop: e
               }
           }
           function Qh(a, c) {
               try {
                   return Za(t(U("contentWindow"), la(c)), pa(a.document.querySelectorAll("iframe")))
               } catch (b) {
                   return null
               }
           }
           function qf(a, c, b) {
               a = ib(a, b);
               c.postMessage(a, "*")
           }
           function mc(a, c) {
               function b(e) {
                   n(c, d) ? e() : X(a, w(e, b), 100)
               }
               void 0 === c && (c = a);
               var d = (c.nodeType ? "contentWindow." : "") + "document.body";
               return ua(function(e, f) {
                   b(f)
               })
           }
           function Ph() {
               return Zb() + Zb() + "-" + Zb() + "-" + Zb() + "-" + Zb() + "-" + Zb() + Zb() + Zb()
           }
           function Zb() {
               return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
           }
           function zm(a, c) {
               if (Ga(c))
                   return c;
               var b = a.textContent;
               if (Ga(b))
                   return b;
               b = a.data;
               if (Ga(b))
                   return b;
               b = a.nodeValue;
               return Ga(b) ? b : ""
           }
           function Am(a, c, b, d, e) {
               void 0 === d && (d = {});
               void 0 === e && (e = Ea(c));
               var f = y(L(function(h, k) {
                   h[k.name] = k.value;
                   return h
               }, {}, pa(c.attributes)), d);
               y(f, Bm(c, e, f));
               var g = (d = L(function(h, k) {
                   var l = k[0]
                     , m = Vd(a, c, l, k[1], b, e)
                     , p = m.value;
                   ka(p) ? delete f[l] : f[l] = p;
                   return h || m.hb
               }, !1, Ba(f))) && fd(c);
               g && (f.width = g.width,
               f.height = g.height);
               return {
                   hb: d,
                   bh: f
               }
           }
           function Bm(a, c, b) {
               var d = {};
               rf(a) ? d.value = a.value || b.value : "IMG" !== c || b.src || (d.src = "");
               return d
           }
           function Vd(a, c, b, d, e, f) {
               void 0 === f && (f = Ea(c));
               var g = {
                   hb: !1,
                   value: d
               };
               if (rf(c))
                   "value" === b ? !ka(d) && "" !== d && (b = e.Jf,
                   f = e.Zf,
                   e = gd(a, c),
                   f ? (b = hd(a, c, b),
                   a = b.Td,
                   c = b.Dd,
                   b = b.kb,
                   g.hb = !c && (e || a)) : (g.hb = e,
                   b = !Wd(c)),
                   b || e) && (g.value = I("", z(w("\u2022", N), ("" + d).split("")))) : "checked" === b && G((c.getAttribute("type") || "").toLowerCase(), Cm) ? g.value = c.checked ? "checked" : null : Dm.test(b) && sf(a, c) && (g.value = null);
               else if ("IMG" === f && "src" === b)
                   (e = gd(a, c)) ? (g.hb = e,
                   g.value = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=") : g.value = (c.getAttribute("srcset") ? c.currentSrc : "") || c.src;
               else if ("A" === f && "href" === b)
                   g.value = d ? "#" : "";
               else if (G(b, ["srcset", "integrity", "crossorigin", "password"]) || 2 < b.length && 0 === ef(b, "on") || "IFRAME" === f && "src" === b || "SCRIPT" === f && G(b, ["src", "type"]))
                   g.value = null;
               return g
           }
           function tf(a, c, b, d) {
               void 0 === d && (d = "wv2");
               return {
                   H: function(e, f) {
                       return D(a, d + "." + b + "." + f, e, void 0, c)
                   }
               }
           }
           function Rh(a, c, b, d) {
               if (c) {
                   var e = [];
                   c && (a.document.documentElement.contains(c) ? jf(a, c, na("push", e), d) : Wa(e, Sh(a, c, d)));
                   A(b, e)
               }
           }
           function jf(a, c, b, d, e) {
               function f(g) {
                   return T(d) ? d(g) ? a.NodeFilter.FILTER_ACCEPT : a.NodeFilter.FILTER_REJECT : a.NodeFilter.FILTER_ACCEPT
               }
               void 0 === e && (e = -1);
               if (T(b) && f(c) === a.NodeFilter.FILTER_ACCEPT && (b(c),
               !uf(c)))
                   for (c = a.document.createTreeWalker(c, e, d ? {
                       acceptNode: f
                   } : null, !1); c.nextNode() && !1 !== b(c.currentNode); )
                       ;
           }
           function Sh(a, c, b) {
               var d = []
                 , e = t(N, na("push", d));
               T(b) ? (b = b(c),
               (ka(b) || b === a.NodeFilter.FILTER_ACCEPT) && e(c)) : e(c);
               if (c.childNodes && 0 < c.childNodes.length) {
                   c = c.childNodes;
                   b = 0;
                   for (var f = c.length; b < f; b += 1) {
                       var g = Sh(a, c[b]);
                       A(e, g)
                   }
               }
               return d
           }
           function Em(a, c, b, d, e) {
               function f() {
                   k && k.stop()
               }
               if (!c.vb)
                   return K.resolve(B);
               var g = ta(a, "4", c)
                 , h = {
                   G: {
                       "wv-type": "0"
                   },
                   J: xa()
               };
               b = new Fm(a,b,function(l, m, p) {
                   if (!g)
                       return K.resolve();
                   m = "wv-data=" + Th(l, !0);
                   for (var q = l.length, r = 0, u = 255, x = 255, J, M, Z; q; ) {
                       J = 21 < q ? 21 : q;
                       q -= J;
                       do
                           M = "string" === typeof l ? l.charCodeAt(r) : l[r],
                           r += 1,
                           255 < M && (Z = M >> 8,
                           M &= 255,
                           M ^= Z),
                           u += M,
                           x += u;
                       while (--J);
                       u = (u & 255) + (u >> 8);
                       x = (x & 255) + (x >> 8)
                   }
                   l = (u & 255) + (u >> 8) << 8 | (x & 255) + (x >> 8);
                   return g(y({}, h, {
                       ba: m,
                       G: {
                           "wv-check": 65535 === l ? 0 : l,
                           "wv-type": "0"
                       }
                   }), c, p)["catch"](D(a, "m.n.m.s"))
               }
               );
               var k = Gm(a, b, d, e);
               return oa(a, c, function(l) {
                   l && O(a).C("isEU", n(l, "settings.eu"));
                   !vf(a) && k && Uh(a, l) && k.start();
                   return f
               })
           }
           function Gm(a, c, b, d) {
               var e = a.document
                 , f = []
                 , g = ia(a)
                 , h = ":submit" + Math.random()
                 , k = []
                 , l = C(c.flush, c)
                 , m = ha(function(r, u) {
                   D(a, "hfv." + r, function() {
                       try {
                           var x = u.type
                       } catch (J) {
                           return
                       }
                       x = G(x, d);
                       c.push(u, {
                           type: r
                       });
                       x && l()
                   })()
               })
                 , p = D(a, "sfv", function() {
                   if (!wf(a)) {
                       var r = b(a)
                         , u = Hm(a);
                       A(function(x) {
                           f.push(g.D(x.target, [x.event], m(x.type)))
                       }, r);
                       A(function(x) {
                           f.push(g.D(x.target, [x.event], D(a, "hff." + x.type + "." + x.event, function(J) {
                               A(ua({
                                   l: a,
                                   ja: J,
                                   flush: l
                               }), x.N)
                           })))
                       }, u);
                       k = Vh(a, "form", e);
                       e.attachEvent && (r = Vh(a, "form *", e),
                       A(function(x) {
                           f.push(g.D(x, ["submit"], m("form")))
                       }, k),
                       A(function(x) {
                           xf(x) && f.push(g.D(x, ["change"], m("formInput")))
                       }, r));
                       A(function(x) {
                           var J = x.submit;
                           if (T(J) || "object" === typeof J && Im.test("" + J))
                               x[h] = J,
                               x.submit = D(a, "fv", function() {
                                   var M = {
                                       target: x,
                                       type: "submit"
                                   };
                                   m("document")(M);
                                   return x[h]()
                               })
                       }, k)
                   }
               })
                 , q = D(a, "ufv", function() {
                   A(Ha, f);
                   A(function(r) {
                       r && (r.submit = r[h])
                   }, k);
                   c.flush()
               });
               return {
                   start: p,
                   stop: q
               }
           }
           function Jm(a, c) {
               var b = W(function(e) {
                   return 0 < e.N.length
               }, c)
                 , d = Wh({
                   target: a.document,
                   type: "document"
               });
               return z(t(N, d, Km(a)), b)
           }
           function Xh(a, c) {
               var b = a.l
                 , d = []
                 , e = c.form;
               if (!c[Qa] && e) {
                   var f = e.elements;
                   e = e.length;
                   for (var g = 0; g < e; g += 1) {
                       var h = f[g];
                       Xd(h) && !h[Qa] && Wa(d, oc(b, h))
                   }
               } else
                   Wa(d, oc(b, c));
               return d
           }
           function yf(a) {
               if (id) {
                   id = !1;
                   var c = rb(a.l)
                     , b = [];
                   fb(a.l, b, 15) ? a = [] : (S(b, c),
                   a = b);
                   return a
               }
           }
           function Yh(a) {
               if (!id) {
                   id = !0;
                   a = rb(a.l);
                   var c = [];
                   Ob(c, 14);
                   S(c, a);
                   return c
               }
           }
           function Lm(a, c, b) {
               var d = c[Qa];
               if (d) {
                   a: {
                       var e = rb(a)
                         , f = c[Qa];
                       if (0 < f) {
                           var g = [];
                           c = zf(a, c);
                           var h = pc[f]
                             , k = c[0] + "x" + c[1]
                             , l = c[2] + "x" + c[3];
                           if (k !== h.Wf) {
                               h.Wf = k;
                               if (fb(a, g, 9)) {
                                   a = [];
                                   break a
                               }
                               S(g, e);
                               S(g, f);
                               S(g, c[0]);
                               S(g, c[1])
                           }
                           if (l !== h.size) {
                               h.size = l;
                               if (fb(a, g, 10)) {
                                   a = [];
                                   break a
                               }
                               S(g, e);
                               S(g, f);
                               S(g, c[2]);
                               S(g, c[3])
                           }
                           if (g.length) {
                               a = g;
                               break a
                           }
                       }
                       a = []
                   }
                   Wa(b, a)
               }
               return d
           }
           function hd(a, c, b) {
               void 0 === b && (b = !1);
               if ("button" === c.getAttribute("type"))
                   return {
                       kb: !1,
                       Dd: !1,
                       Td: !1
                   };
               var d = Wd(c)
                 , e = Af(c);
               a = Bf(a, c) || b && e;
               return {
                   kb: !(d || !a),
                   Dd: d,
                   Td: e
               }
           }
           function Bf(a, c) {
               return sf(a, c) || jd(a, c) ? !0 : gd(a, c)
           }
           function Af(a) {
               if (!a)
                   return !1;
               var c = a.placeholder
                 , b = a.type;
               a = W(Zh, [a.className, a.id, a.name]);
               return b && G(b, Mm) || Ma(Oa(Nm), a) || Zh(c) && Om.test(c)
           }
           function Zh(a) {
               return !!(a && 2 < a.length)
           }
           function rf(a) {
               try {
                   var c = Ea(a);
                   if (G(c, Cf)) {
                       if ("INPUT" === c) {
                           var b = a.type;
                           return !b || G(b.toLocaleLowerCase(), Pm)
                       }
                       return !0
                   }
               } catch (d) {}
               return !1
           }
           function $h(a, c) {
               return c && qc("(ym-disable-submit|-metrika-noform)", c)
           }
           function Wd(a) {
               return a && qc("ym-record-keys", a)
           }
           function Qm(a, c) {
               return I("", z(function(b) {
                   return a.isNaN(b) ? Rm.test(b) ? (b = b.toUpperCase() === b ? Sm : Tm,
                   String.fromCharCode(Ra(a, b[0], b[1]))) : b : "" + Ra(a, 0, 9)
               }, c.split("")))
           }
           function gd(a, c) {
               if (ka(c))
                   return !1;
               if (uf(c)) {
                   var b = c.parentNode;
                   return (ka(b) ? 0 : 11 === b.nodeType) ? !1 : gd(a, c.parentNode)
               }
               if (Um.test(c.className))
                   return !0;
               b = ai(a);
               if (!b)
                   return !1;
               var d = b.call(c, ".ym-hide-content *");
               return d && (Vm.test(c.className) || b.call(c, ".ym-hide-content .ym-show-content *")) ? !1 : d
           }
           function Uh(a, c) {
               var b = $b(a)
                 , d = b.o("visorc");
               G(d, ["w", "b"]) || (d = "");
               bi(a) && ci(a, Yd, "visorc") && !Wm.test(sb(a) || "") || (d = "b");
               var e = n(c, "settings.webvisor.recp");
               if (!a.isFinite(e) || 0 > e || 1 < e)
                   d = "w";
               d || (d = O(a).o("hitId") % 1E4 / 1E4 < e ? "w" : "b");
               b.C("visorc", d, 30);
               return "w" === d
           }
           function di(a) {
               return !!Za(function(c) {
                   return G(c.type, ["articleInfo", "publishersHeader"])
               }, a)
           }
           function ei(a) {
               var c = Df(a).isEnabled
                 , b = !1;
               try {
                   b = (b = 2 === (new a.Blob(["\u00e4"])).size) && 2 === (new a.Blob([new a.Uint8Array([1, 2])])).size
               } catch (d) {}
               return nf(Boolean, [!c, b, a.Uint8Array, n(a, "Uint8Array.prototype.slice")])
           }
           function Ef(a, c) {
               var b = c[1][3]
                 , d = 0
                 , e = new a.Uint8Array(c[0]);
               return rc([b], function(f, g) {
                   if (!f)
                       return e;
                   f[0](a, f[2], e, d);
                   d += f[1];
                   g.push(f[3]);
                   return e
               })
           }
           function Zd(a, c, b) {
               a = c(b);
               c = [B, 0, 0];
               var d = [0, c, c, void 0];
               return rc(a, function(e, f) {
                   var g = e[0]
                     , h = e[1]
                     , k = e[2];
                   if (0 === g)
                       return k(d, h),
                       d;
                   if (void 0 === h || null === h)
                       return d;
                   var l = g >> 3;
                   if (g & 1)
                       sc(d, jb(l)),
                       h = k(h),
                       l & 2 && sc(d, jb(h[1])),
                       sc(d, h);
                   else if (g & 4)
                       for (g = h.length - 1; 0 <= g; ) {
                           var m = k(h[g]);
                           m.push([0, 0, Ff]);
                           m.push([0, jb(l), sc]);
                           m.unshift([0, 0, Gf]);
                           f.push.apply(f, m);
                           --g
                       }
                   else if (g & 2) {
                       k = e[2];
                       var p = e[3]
                         , q = e[4]
                         , r = e[5]
                         , u = ea(h);
                       for (g = u.length - 1; 0 <= g; )
                           m = u[g],
                           m = [[0, 0, Gf], [q, h[m], r], [k, m, p], [0, 0, Ff], [0, jb(l), sc]],
                           f.push.apply(f, m),
                           --g
                   } else
                       m = k(h),
                       m.push([0, 0, Ff]),
                       m.push([0, jb(l), sc]),
                       m.unshift([0, 0, Gf]),
                       f.push.apply(f, m);
                   return d
               })
           }
           function Gf(a) {
               var c = a[1]
                 , b = a[0]
                 , d = a[2];
               a[3] ? (a[0] = a[3][0],
               a[1] = a[3][1],
               a[2] = a[3][2],
               a[3] = a[3][3]) : (a[0] = 0,
               a[1] = [B, 0, 0],
               a[2] = a[1]);
               sc(a, jb(b));
               b && (a[2][3] = c[3],
               a[2] = d,
               a[0] += b)
           }
           function Ff(a) {
               a[3] = [a[0], a[1], a[2], a[3]];
               a[1] = [B, 0, 0];
               a[2] = a[1];
               a[0] = 0
           }
           function sc(a, c) {
               a[0] += c[1];
               a[2][3] = c;
               a[2] = c
           }
           function Hf(a) {
               return [[385, a.Xg, jb], [336, a.ij, Xm], [272, a.$g, Ym], [208, a.event, Zm], [144, a.Li, $m], [80, a.page, an]]
           }
           function bn(a) {
               return [[321, a.end, Pb], [273, a.oh, cn], [193, a.page, H], [144, a.data, Hf], [65, a.L, H]]
           }
           function fi(a) {
               return [[84, a.buffer, bn]]
           }
           function dn(a) {
               return [[129, a.position, H], [81, a.name, Q]]
           }
           function en(a) {
               return [[81, a.name, Q]]
           }
           function fn(a) {
               return [[81, a.name, Q]]
           }
           function Ym(a) {
               return [[593, a.Pj, Q], [532, a.oj, dn], [449, a.af, H], [401, a.hj, Q], [340, a.Dj, en], [276, a.dh, fn], [209, a.dj, Q], [145, a.ej, Q], [65, a.id, jb]]
           }
           function gn(a) {
               return [[513, a.af, H], [489, a.Ii, kd], [385, a.gb, H], [321, a.height, H], [257, a.width, H], [193, a.y, H], [129, a.x, H], [65, a.id, jb]]
           }
           function Xm(a) {
               return [[129, a.gb, H], [84, a.ah, gn]]
           }
           function hn(a) {
               return [[81, a.hash, Q]]
           }
           function jn(a) {
               return [[209, a.stack, Q], [145, a.Ch, Q], [81, a.code, Q]]
           }
           function kn(a) {
               return [[193, a.orientation, H], [129, a.height, H], [65, a.width, H]]
           }
           function ln(a) {
               return [[84, a.Jc, mn]]
           }
           function mn(a) {
               return [[273, a.Kc, Q], [193, a.Kf, Pb], [145, a.key, Q], [65, a.id, H]]
           }
           function nn(a) {
               return [[145, a.value, Q], [81, a.Gk, Q]]
           }
           function on(a) {
               return [[149, a.$b, Q], [81, a.method, Q]]
           }
           function pn(a) {
               return [[257, a.mb, H], [193, a.ob, H], [129, a.height, H], [65, a.width, H]]
           }
           function qn(a) {
               return [[144, a.Lg, gi], [80, a.Jg, gi]]
           }
           function gi(a) {
               return [[193, a.y, H], [129, a.x, H], [105, a.level, kd]]
           }
           function rn(a) {
               return [[84, a.touches, sn]]
           }
           function sn(a) {
               return [[297, a.force, kd], [233, a.y, kd], [169, a.x, kd], [81, a.id, Q]]
           }
           function tn(a) {
               return [[193, a.hidden, Pb], [129, a.checked, Pb], [81, a.value, Q]]
           }
           function un(a) {
               return [[257, a.gf, H], [193, a.sg, H], [129, a.end, H], [65, a.start, H]]
           }
           function vn() {
               return []
           }
           function wn(a) {
               return [[193, a.page, Pb], [129, a.y, H], [65, a.x, H]]
           }
           function xn(a) {
               return [[129, a.y, H], [65, a.x, H]]
           }
           function yn(a) {
               return [[84, a.Ca, zn]]
           }
           function zn(a) {
               return [[257, a.index, H], [209, a.ke, Q], [145, a.style, Q], [65, a.target, H]]
           }
           function Zm(a) {
               return [[1168, a.wj, yn], [1104, a.ti, hn], [1040, a.Gh, jn], [976, a.vh, kn], [912, a.Fi, ln], [848, a.kj, pn], [784, a.Zj, qn], [720, a.Hk, nn], [656, a.Dk, on], [592, a.Ej, rn], [528, a.kh, tn], [464, a.rj, un], [400, a.Wj, vn], [336, a.pj, wn], [272, a.Ji, xn], [193, a.M, $d], [129, a.target, $d], [65, a.type, jb]]
           }
           function $m(a) {
               return [[257, a.M, $d], [208, a.Z, An], [129, a.L, H], [65, a.target, H]]
           }
           function An(a) {
               return [[148, a.Ca, Bn], [65, a.index, H]]
           }
           function Bn(a) {
               return [[276, a.d, Cn], [212, a.od, Dn], [148, a.Ye, En], [84, a.Ve, Fn]]
           }
           function Cn(a) {
               return [[193, a.xa, H], [144, a.kc, hi], [65, a.id, H]]
           }
           function Dn(a) {
               return [[193, a.xa, H], [146, a.yb, 81, Q, 144, hi], [65, a.id, H]]
           }
           function hi(a) {
               return [[193, a.r, Pb], [145, a.n, Q], [81, a.Nc, Q]]
           }
           function En(a) {
               return [[641, a.Ma, Pb], [577, a.xa, H], [513, a.de, H], [465, a.kc, Q], [402, a.yb, 81, Q, 145, Q], [321, a.oe, H], [273, a.Sf, Q], [193, a.le, H], [145, a.Rf, Q], [65, a.id, H]]
           }
           function Fn(a) {
               return [[321, a.xa, H], [257, a.le, H], [193, a.de, H], [129, a.oe, H], [65, a.id, H]]
           }
           function an(a) {
               return [[321, a.za, Gn], [273, a.cd, Q], [193, a.M, $d], [148, a.content, Hn], [80, a.Z, In]]
           }
           function Hn(a) {
               return [[513, a.hidden, Pb], [449, a.qe, H], [385, a.next, H], [337, a.content, Q], [257, a.parent, H], [210, a.attributes, 81, Q, 145, Q], [145, a.name, Q], [65, a.id, H]]
           }
           function In(a) {
               return [[724, a.zk, Jn], [656, a.location, Kn], [592, a.viewport, ii], [528, a.screen, ii], [449, a.Cf, Pb], [401, a.Ze, Q], [337, a.referrer, Q], [273, a.Dg, Q], [209, a.We, Q], [145, a.title, Q], [81, a.doctype, Q]]
           }
           function Jn(a) {
               return [[133, a.scroll, H], [65, a.target, H]]
           }
           function Kn(a) {
               return [[209, a.path, Q], [145, a.protocol, Q], [81, a.host, Q]]
           }
           function ii(a) {
               return [[129, a.height, H], [65, a.width, H]]
           }
           function Q(a) {
               var c = Ln({}, a, [], 0);
               return c ? [Mn, c, a] : [ji, 0, 0]
           }
           function cn(a) {
               return [Nn, a.length, a]
           }
           function Pb(a) {
               return [ji, 1, a ? 1 : 0]
           }
           function Gn(a) {
               a = ki(a);
               var c = a[0]
                 , b = a[1]
                 , d = (b >>> 28 | c << 4) >>> 0;
               c >>>= 24;
               return [li, 0 === c ? 0 === d ? 16384 > b ? 128 > b ? 1 : 2 : 2097152 > b ? 3 : 4 : 16384 > d ? 128 > d ? 5 : 6 : 2097152 > d ? 7 : 8 : 128 > c ? 9 : 10, a]
           }
           function kd(a) {
               return [On, 4, a]
           }
           function $d(a) {
               return jb((a << 1 ^ a >> 31) >>> 0)
           }
           function H(a) {
               return 0 > a ? [li, 10, ki(a)] : jb(a)
           }
           function jb(a) {
               return [Pn, 128 > a ? 1 : 16384 > a ? 2 : 2097152 > a ? 3 : 268435456 > a ? 4 : 5, a]
           }
           function Pn(a, c, b, d) {
               for (a = c; 127 < a; )
                   b[d++] = a & 127 | 128,
                   a >>>= 7;
               b[d] = a
           }
           function ji(a, c, b, d) {
               b[d] = c
           }
           function Nn(a, c, b, d) {
               for (a = 0; a < c.length; ++a)
                   b[d + a] = c[a]
           }
           function mi(a) {
               return function(c, b, d, e) {
                   for (var f, g = 0, h = 0; h < b.length; ++h)
                       if (c = b.charCodeAt(h),
                       128 > c)
                           a ? g += 1 : d[e++] = c;
                       else {
                           if (2048 > c) {
                               if (a) {
                                   g += 2;
                                   continue
                               }
                               d[e++] = c >> 6 | 192
                           } else {
                               if (55296 === (c & 64512) && 56320 === ((f = b.charCodeAt(h + 1)) & 64512)) {
                                   if (a) {
                                       g += 4;
                                       continue
                                   }
                                   c = 65536 + ((c & 1023) << 10) + (f & 1023);
                                   ++h;
                                   d[e++] = c >> 18 | 240;
                                   d[e++] = c >> 12 & 63 | 128
                               } else {
                                   if (a) {
                                       g += 3;
                                       continue
                                   }
                                   d[e++] = c >> 12 | 224
                               }
                               d[e++] = c >> 6 & 63 | 128
                           }
                           d[e++] = c & 63 | 128
                       }
                   return a ? g : e
               }
           }
           function On(a, c, b, d) {
               return Qn(a)(a, c, b, d)
           }
           function Rn(a, c, b, d) {
               var e = 0 > c ? 1 : 0;
               e && (c = -c);
               if (0 === c)
                   ld(0 < 1 / c ? 0 : 2147483648, b, d);
               else if (a.isNaN(c))
                   ld(2143289344, b, d);
               else if (3.4028234663852886E38 < c)
                   ld((e << 31 | 2139095040) >>> 0, b, d);
               else if (1.1754943508222875E-38 > c)
                   ld((e << 31 | a.Math.round(c / 1.401298464324817E-45)) >>> 0, b, d);
               else {
                   var f = a.Math.floor(a.Math.log(c) / Math.LN2);
                   ld((e << 31 | f + 127 << 23 | Math.round(c * a.Math.pow(2, -f) * 8388608) & 8388607) >>> 0, b, d)
               }
           }
           function ld(a, c, b) {
               c[b] = a & 255;
               c[b + 1] = a >>> 8 & 255;
               c[b + 2] = a >>> 16 & 255;
               c[b + 3] = a >>> 24
           }
           function li(a, c, b, d) {
               a = c[0];
               for (c = c[1]; a; )
                   b[d++] = c & 127 | 128,
                   c = (c >>> 7 | a << 25) >>> 0,
                   a >>>= 7;
               for (; 127 < c; )
                   b[d++] = c & 127 | 128,
                   c >>>= 7;
               b[d++] = c
           }
           function ki(a) {
               if (!a)
                   return [0, 0];
               var c = 0 > a;
               c && (a = -a);
               var b = a >>> 0;
               a = (a - b) / 4294967296 >>> 0;
               c && (a = ~a >>> 0,
               b = ~b >>> 0,
               4294967295 < ++b && (b = 0,
               4294967295 < ++a && (a = 0)));
               return [a, b]
           }
           function ae(a) {
               return da(a) ? z(ae, a) : ka(a) || "object" !== typeof a ? a : L(function(c, b) {
                   var d = b[0]
                     , e = b[1]
                     , f = Sn[d];
                   V(f) && (f = d);
                   e = G(f, Tn) ? e : ae(e);
                   f ? c[f] = e : c[d] = e;
                   return c
               }, {}, Ba(a))
           }
           function Un(a, c) {
               return oa(a, c, function(b) {
                   var d = O(a);
                   P(c);
                   if (!d.o("dSync", !1))
                       return d.C("dSync", !0),
                       ni(a, b, {
                           Xa: c,
                           Uc: "s",
                           Yd: "ds",
                           yj: function(e, f, g) {
                               var h = e.Qb;
                               e = e.host;
                               if (n(h, "settings"))
                                   return pb(Ya("ds.e"));
                               f = f(Y) - g;
                               g = e[1];
                               var k, l;
                               h = xa((k = {},
                               k.di = h,
                               k.dit = f,
                               k.dip = g,
                               k));
                               k = (l = {},
                               l["page-url"] = R(a).href,
                               l);
                               return ta(a, "S", oi)({
                                   J: h,
                                   G: k
                               }, oi)["catch"](D(a, "ds.rs"))
                           }
                       })
               })
           }
           function ni(a, c, b) {
               var d = b.Xa
                 , e = ca(a)
                 , f = Vn(a, c.userData, d)
                 , g = Wn(a);
               return g.length ? Xn(a, e, f, c, b).then(function() {
                   return Yn(a, g, f, e, b)
               }, B) : K.resolve()
           }
           function Wn(a) {
               var c = md(a);
               a = t(If, nc(["iPhone", "iPad"]))(a);
               return c ? Zn : a ? $n : []
           }
           function Yn(a, c, b, d, e) {
               var f = e.yj
                 , g = void 0 === f ? B : f
                 , h = e.Yd
                 , k = d(Y);
               return ao(a, c, e)(Xa(function(l) {
                   A(function(m) {
                       m && be(a, h + ".s", m)
                   }, l);
                   l = d(hb);
                   b.C(h, l)
               }, function(l) {
                   b.C(h, d(hb));
                   g(l, d, k)
               }))
           }
           function Xn(a, c, b, d, e) {
               var f = e.Yd
                 , g = e.Xa;
               return new K(function(h, k) {
                   var l = b.o(f, 0);
                   l = parseInt("" + l, 10);
                   return 60 >= c(hb) - l ? k() : bo(a) ? h(void 0) : pi(d) ? k() : h(co(a, g))
               }
               )
           }
           function ao(a, c, b) {
               var d = b.Uc
                 , e = b.data
                 , f = ta(a, d, b.Xa);
               a = y({}, qi);
               e && y(a.G, e);
               return eo(z(function(g) {
                   return fo(f(qi, z(function(h) {
                       var k = h[1]
                         , l = h[2];
                       h = I("", z(function(m) {
                           return String.fromCharCode(m.charCodeAt(0) + 10)
                       }, h[0].split("")));
                       return "http" + (l ? "s" : "") + "://" + h + ":" + k + "/" + go[d]
                   }, g), {
                       Ig: !1,
                       nj: !0
                   }).then(function(h) {
                       return y({}, h, {
                           host: g[h.Rj]
                       })
                   }))
               }, c))
           }
           function Vn(a, c, b) {
               var d = c || {}
                 , e = ta(a, "u", b)
                 , f = Pa(a);
               return {
                   o: function(g, h) {
                       return V(d[g]) ? f.o(g, h) : d[g]
                   },
                   C: function(g, h) {
                       var k, l = "" + h;
                       d[g] = l;
                       f.C(g, l);
                       return e({
                           G: (k = {},
                           k.key = g,
                           k.value = l,
                           k)
                       }, [ra.Ja + "//mc.yandex.ru/user_storage_set"], {})["catch"](D(a, "u.d.s.s"))
                   }
               }
           }
           function ri(a, c, b) {
               var d = n(a, "AppMetricaInitializer")
                 , e = n(d, "init");
               if (e)
                   try {
                       C(e, d)(ib(a, c))
                   } catch (f) {}
               else
                   si = X(a, F([a, c, 2 * b], ri), b, "ai.d");
               return function() {
                   return ja(a, si)
               }
           }
           function ho(a, c, b) {
               if (b && (b = mh(a, b),
               b = oh(a, b))) {
                   b = "?" + $c(b);
                   var d = Ab(a, c, "Button goal. Counter " + c.id + ". Button: " + b + ".");
                   Nd(a, c, "btn", d)(b)
               }
           }
           function io(a, c) {
               var b;
               a((b = {},
               b.clickmap = V(c) ? !0 : c,
               b))
           }
           function jo(a, c, b, d, e) {
               var f;
               c = {
                   J: xa(),
                   G: (f = {},
                   f["page-url"] = c,
                   f["pointer-click"] = b,
                   f)
               };
               d(c, e)["catch"](D(a, "c.s.c"))
           }
           function ko(a, c, b, d, e) {
               if (nd(a, "ymDisabledClickmap") || wf(a) || !c || !c.element)
                   return !1;
               a = Ea(c.element);
               if (e && !e(c.element, a) || G(c.button, [2, 3]) && "A" !== a || Ma(la(a), d))
                   return !1;
               d = c.element;
               if (c && b) {
                   if (50 > c.time - b.time)
                       return !1;
                   e = Math.abs(b.position.x - c.position.x);
                   a = Math.abs(b.position.y - c.position.y);
                   c = c.time - b.time;
                   if (b.element === d && 2 > e && 2 > a && 1E3 > c)
                       return !1
               }
               for (; d; ) {
                   if (lo(d))
                       return !1;
                   d = d.parentElement
               }
               return !0
           }
           function mo(a, c) {
               var b = null;
               try {
                   if (b = c.target || c.srcElement)
                       !b.ownerDocument && b.documentElement ? b = b.documentElement : b.ownerDocument !== a.document && (b = null)
               } catch (d) {}
               return b
           }
           function no(a) {
               var c = a.which;
               a = a.button;
               return c || void 0 === a ? c : 1 === a || 3 === a ? 1 : 2 === a ? 3 : 4 === a ? 2 : 0
           }
           function ti(a, c) {
               var b = Yb(a)
                 , d = Jf(a);
               return {
                   x: c.pageX || c.clientX + d.x - (b.clientLeft || 0) || 0,
                   y: c.pageY || c.clientY + d.y - (b.clientTop || 0) || 0
               }
           }
           function oo(a) {
               var c = D(a, "i.clch", po);
               ia(a).D(a.document, ["click"], C(c, null, a), {
                   passive: !1
               });
               return function(b) {
                   var d = ra.Ja
                     , e = a.Ya[ra.dc]
                     , f = !!e._informer;
                   e._informer = y({
                       domain: "informer.yandex.ru"
                   }, b);
                   f || Hc(a, {
                       src: d + "//informer.yandex.ru/metrika/informer.js"
                   })
               }
           }
           function qo(a) {
               var c = void 0;
               void 0 === c && (c = ro);
               var b = n(a, "navigator") || {};
               c = z(w(b, n), c);
               c = I("x", c);
               try {
                   var d = n(a, "navigator.getGamepads");
                   var e = Ia(d, "getGamepads") && a.navigator.getGamepads() || []
               } catch (f) {
                   e = []
               }
               return c + "x" + La(e)
           }
           function so(a) {
               try {
                   var c = La(a) ? a : [];
                   return I(",", [a.name, a.description, t(pa, Fc(Boolean), eb(to), od(","))(c)])
               } catch (b) {
                   return ""
               }
           }
           function to(a) {
               return I(",", [a.description, a.suffixes, a.type])
           }
           function Bl(a) {
               return L(function(c, b) {
                   var d = b[0]
                     , e = b[1];
                   c[d + " precision"] = n(e, "precision") || "n";
                   c[d + " precision rangeMin"] = n(e, "rangeMin") || "n";
                   c[d + " precision rangeMax"] = n(e, "rangeMax") || "n";
                   return c
               }, {}, [["webgl vertex shader high float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT)], ["webgl vertex shader medium", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT)], ["webgl vertex shader low float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT)], ["webgl fragment shader high float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT)], ["webgl fragment shader medium float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT)], ["webgl fragment shader low float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT)], ["webgl vertex shader high int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT)], ["webgl vertex shader medium int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT)], ["webgl vertex shader low int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT)], ["webgl fragment shader high int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT)], ["webgl fragment shader medium int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT)], ["webgl fragment shader low int precision", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT)]])
           }
           function Al(a, c) {
               return [function() {
                   var b = c.createBuffer();
                   b && c.getParameter && Da("getParameter", c.getParameter) || Kf();
                   c.bindBuffer(c.ARRAY_BUFFER, b);
                   var d = new a.Float32Array(uo);
                   c.bufferData(c.ARRAY_BUFFER, d, c.STATIC_DRAW);
                   b.Di = 3;
                   b.Ri = 3;
                   d = c.createProgram();
                   var e = c.createShader(c.VERTEX_SHADER);
                   d && e || Kf();
                   return {
                       xe: d,
                       Vj: e,
                       Uj: b
                   }
               }
               , function(b) {
                   var d = b.xe
                     , e = b.Vj;
                   c.shaderSource(e, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}");
                   c.compileShader(e);
                   c.attachShader(d, e);
                   (d = c.createShader(c.FRAGMENT_SHADER)) || Kf();
                   return y(b, {
                       Qh: d
                   })
               }
               , function(b) {
                   var d = b.xe
                     , e = b.Qh;
                   c.shaderSource(e, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}");
                   c.compileShader(e);
                   c.attachShader(d, e);
                   c.linkProgram(d);
                   c.useProgram(d);
                   return b
               }
               , function(b) {
                   var d = b.xe;
                   b = b.Uj;
                   d.Tj = c.getAttribLocation(d, "attrVertex");
                   d.Ti = c.getUniformLocation(d, "uniformOffset");
                   c.enableVertexAttribArray(d.Nk);
                   c.vertexAttribPointer(d.Tj, b.Di, c.FLOAT, !1, 0, 0);
                   c.uniform2f(d.Ti, 1, 1);
                   c.drawArrays(c.TRIANGLE_STRIP, 0, b.Ri);
                   return c.canvas
               }
               ]
           }
           function zl(a, c) {
               if (!T(a.Float32Array))
                   return !1;
               var b = n(c, "canvas");
               if (!b || !Da("toDataUrl", b.toDataURL))
                   return !1;
               try {
                   c.createBuffer()
               } catch (d) {
                   return !1
               }
               return !0
           }
           function gf(a, c) {
               c.clearColor(0, 0, 0, 1);
               c.enable(c.DEPTH_TEST);
               c.depthFunc(c.LEQUAL);
               c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT);
               return "[" + n(a, "0") + ", " + n(a, "1") + "]"
           }
           function vo(a) {
               a = n(a, "screen") || {};
               return I("x", z(w(a, n), wo))
           }
           function vl(a) {
               var c = n(a, "matchMedia");
               if (c && Da("matchMedia", c)) {
                   var b = na("matchMedia", a);
                   return L(function(d, e) {
                       d[e] = b("(" + e + ")");
                       return d
                   }, {}, xo)
               }
           }
           function ol(a) {
               a = Va(a);
               if (!a)
                   return "";
               a = a("video");
               try {
                   var c = na("canPlayType", a)
                     , b = lc(function(d) {
                       return z(t(N, na("concat", d + "; codecs=")), yo)
                   }, ui);
                   return z(c, [].concat(ui, b))
               } catch (d) {
                   return "canPlayType"
               }
           }
           function zo(a) {
               a = n(a, "navigator") || {};
               return a.doNotTrack || a.msDoNotTrack || "unknown"
           }
           function Ao(a, c) {
               if (a.Jj()) {
                   var b = vi(c);
                   if (b && !qc("ym-disable-tracklink", b)) {
                       var d = a.l
                         , e = a.sh
                         , f = a.Xa
                         , g = a.sender
                         , h = a.Hh
                         , k = f.vc
                         , l = b.href
                         , m = ob(b && b.innerHTML && b.innerHTML.replace(/<\/?[^>]+>/gi, ""));
                       m = l === m ? "" : m;
                       if (qc("ym-external-link", b))
                           ce(d, f, {
                               url: l,
                               Hb: !0,
                               title: m,
                               sender: g
                           });
                       else {
                           k = k ? Lc(d, k).hostname : R(d).hostname;
                           h = RegExp("\\.(" + I("|", z(Bo, h)) + ")$", "i");
                           var p = b.protocol + "//" + b.hostname + b.pathname;
                           h = wi.test(p) || wi.test(l) || h.test(l) || h.test(p);
                           b = b.hostname;
                           de(k) === de(b) ? h ? ce(d, f, {
                               url: l,
                               Gc: !0,
                               title: m,
                               sender: g
                           }) : m && e.C("il", ob(m).slice(0, 100)) : l && Co.test(l) || ce(d, f, {
                               url: l,
                               Lc: !0,
                               Hb: !0,
                               Gc: h,
                               title: m,
                               sender: g
                           })
                       }
                   }
               }
           }
           function ce(a, c, b, d) {
               var e, f = xa();
               b.Gc && f.C("dl", "1");
               b.Hb && f.C("ln", "1");
               f = {
                   J: f,
                   title: b.title,
                   Lc: !!b.Lc,
                   O: b.O,
                   G: (e = {},
                   e["page-url"] = b.url,
                   e["page-ref"] = c.vc || R(a).href,
                   e)
               };
               e = "Link";
               b.Gc ? e = b.Hb ? "Ext link - File" : "File" : b.Hb && (e = "Ext link");
               c = b.sender(f, c).then(d || B).then(Ab(a, c, e + ". Counter " + c.id + ". Url: " + b.url, b));
               return Mc(a, "cl.p.s", c, b.Wa || B, b.l)
           }
           function Do(a, c) {
               var b, d, e = (b = {},
               b.string = !0,
               b.object = !0,
               b["boolean"] = c,
               b)[typeof c] || !1;
               a((d = {},
               d.trackLinks = e,
               d))
           }
           function Eo(a, c, b, d) {
               var e = R(a)
                 , f = e.hostname;
               e = e.href;
               if (c = pd(c).url)
                   a = Lc(a, c),
                   f = a.hostname,
                   e = a.href;
               return [d + "://" + f + "/" + b, e || ""]
           }
           function ee(a, c) {
               return function(b) {
                   xi(a, c, b)
               }
           }
           function Fo(a, c) {
               Lf(a)(function(b) {
                   delete b[c]
               })
           }
           function xi(a, c, b) {
               Lf(a)(function(d) {
                   d[c] = y(d[c] || {}, b)
               })
           }
           function Lf(a) {
               a = O(a);
               var c = a.o("dsjf") || ua({});
               a.Ta("dsjf", c);
               return c
           }
           function Mc(a, c, b, d, e) {
               var f = C(Mf, null, a, d, e);
               return b.then(f, function(g) {
                   f();
                   be(a, c, g)
               })
           }
           function Ab(a, c, b, d) {
               return Nf(c) ? B : w(F(va([a, P(c)], d ? [b + ". Params:", d] : [b]), qb), Ha)
           }
           function qb() {
               var a = ya(arguments)
                 , c = a.slice(2);
               fe(a[0], a[1]).log.apply(qb, c)
           }
           function Df(a) {
               var c = "1" === $b(a).o("debug")
                 , b = -1 < R(a).href.indexOf("_ym_debug=1");
               a = a._ym_debug;
               return {
                   ri: c,
                   zi: a || b,
                   isEnabled: Ma(Boolean, [c, a, b])
               }
           }
           function Go(a, c, b) {
               var d;
               (d = tb[c]) || (d = Cb);
               d = z(Nc, d);
               d.unshift(Ho);
               d.unshift(Io);
               return z(t(Jo([a, c, b]), Ha), d)
           }
           function ba(a, c, b) {
               tb[a] || (tb[a] = []);
               c && !ka(b) && yi(tb[a], c, b)
           }
           function yi(a, c, b) {
               for (var d = [c, b], e = -1E4, f = 0; f < a.length; f += 1) {
                   var g = a[f]
                     , h = g[0];
                   g = g[1];
                   if (b === g && h === c)
                       return;
                   if (b < g && b >= e) {
                       a.splice(f, 0, d);
                       return
                   }
                   e = g
               }
               a.push(d)
           }
           function zi(a, c) {
               var b = R(a)
                 , d = b.href
                 , e = b.host
                 , f = -1;
               if (!Ga(c) || V(c))
                   return d;
               b = c.replace(Ai, "");
               if (-1 !== b.search(Ko))
                   return b;
               var g = b.charAt(0);
               if ("?" === g && (f = d.search(/\?/),
               -1 === f) || "#" === g && (f = d.search(/#/),
               -1 === f))
                   return d + b;
               if (-1 !== f)
                   return d.substr(0, f) + b;
               if ("/" === g) {
                   if (f = d.indexOf(e),
                   -1 !== f)
                       return d.substr(0, f + e.length) + b
               } else
                   return d = d.split("/"),
                   d[d.length - 1] = b,
                   I("/", d);
               return ""
           }
           function Bi(a) {
               return {
                   ca: function(c, b) {
                       if (!c.J)
                           return b();
                       var d = O(a).o("fid");
                       !Ci && d && (ge(c, "fid", d),
                       Ci = !0);
                       return b()
                   }
               }
           }
           function Di(a) {
               return {
                   ca: function(c, b) {
                       var d = c.J;
                       if (d) {
                           var e = O(a).o("adBlockEnabled");
                           e && d.C("adb", e)
                       }
                       b()
                   }
               }
           }
           function Io(a) {
               return {
                   ca: function(c, b) {
                       vf(a) || b()
                   }
               }
           }
           function Lo(a) {
               a = Mo(a);
               return No[a] || a
           }
           function Oo(a) {
               a = Ei(a);
               return Po[a] || "ru"
           }
           function Ho(a, c, b) {
               return {
                   ca: function(d, e) {
                       Qo(a, d, b, e)
                   }
               }
           }
           function Qo(a, c, b, d) {
               var e = c.J;
               if (b.Xj || !e)
                   d();
               else {
                   var f = he(a)
                     , g = Gc(a, "");
                   d = t(function() {
                       var r = Fi(f);
                       r = "" + r + Ro(r, g);
                       e.C("gdpr", r);
                       ge(c, "gdpr", r)
                   }, d);
                   if (3 === b.id)
                       d();
                   else {
                       var h = O(a)
                         , k = h.o("f1");
                       if (k)
                           k(d);
                       else if (k = (k = Fi(f)) ? z(w(ie, n), k.split(",")) : [],
                       Gi(k))
                           d();
                       else {
                           var l = je(a)
                             , m = R(a)
                             , p = l && (-1 !== m.href.indexOf("yagdprcheck=1") || g.o("yaGdprCheck"));
                           m = g.o("gdpr");
                           g.o("yandex_login") ? (k.push("13"),
                           g.C("gdpr", Oc, 525600)) : l ? G(m, ac) ? m === Of ? k.push("12") : k.push("3") : Pf(a) || qd(a) ? k.push("17") : So(a) && k.push("28") : k.push("14");
                           var q = w(f, To);
                           Gi(k) ? (A(q, k),
                           d()) : (ke.push(d),
                           h.C("f1", function(r, u) {
                               var x = 0;
                               if (u) {
                                   var J = ib(a, u) || "";
                                   x += J.length
                               }
                               ke.push(r);
                               1E6 >= x && ke.push(r)
                           }),
                           (0,
                           Qf[0])(a).then(U("params.eu")).then(function(r) {
                               if (r || p) {
                                   g.C("gdpr_popup", Of);
                                   Uo(a, b);
                                   if (Mb(a))
                                       return Vo(a, q, b);
                                   var u = Hi(a, f);
                                   if (u)
                                       return r = Wo(a, q, u, b),
                                       r.then(F([a, b], Xo)),
                                       r
                               }
                               r || q("8");
                               return K.resolve({
                                   value: Oc,
                                   Ud: !0
                               })
                           }).then(function(r) {
                               g.oc("gdpr_popup");
                               if (r) {
                                   var u = r.value;
                                   r = r.Ud;
                                   G(u, ac) && g.C("gdpr", u, r ? void 0 : 525600)
                               }
                               u = rc(ke, Ha);
                               tc(a, u, 20)(Xa(D(a, "gdr"), B));
                               h.C("f1", Ha)
                           })["catch"](D(a, "gdp.a")))
                       }
                   }
               }
           }
           function Xo(a, c) {
               if (je(a)) {
                   var b = he(a)
                     , d = Aa(a, c);
                   d = d && d.params;
                   b = z(w(Yo, n), Rf(b));
                   d && b.length && d("gdpr", W(Boolean, b))
               }
           }
           function Aa(a, c) {
               var b = O(a).o("counters", {})
                 , d = P(c);
               return b[d]
           }
           function Vo(a, c, b) {
               var d = le(a, b);
               return new K(function(e) {
                   var f;
                   if (d) {
                       var g = d.aa
                         , h = t(w("4", c), w(null, e))
                         , k = X(a, h, 2E3, "gdp.f.t");
                       d.ng((f = {},
                       f.type = "isYandex",
                       f)).then(function(l) {
                           l.isYandex ? (c("5"),
                           g.D(va(["GDPR-ok-view-default", "GDPR-ok-view-detailed"], Sf), function(m) {
                               e({
                                   value: Ii(m[1].type)
                               })
                           })) : (c("6"),
                           e(null))
                       })["catch"](h).then(F([a, k], ja))
                   } else
                       e({
                           value: Of,
                           Ud: !0
                       })
               }
               )
           }
           function Uo(a, c) {
               var b = le(a, c);
               b && b.aa.D(["isYandex"], function() {
                   var d;
                   return d = {
                       type: "isYandex"
                   },
                   d.isYandex = je(a),
                   d
               });
               return b
           }
           function Wo(a, c, b, d) {
               var e = Zo(a, d.Yj)
                 , f = le(a, d);
               if (!f)
                   return K.resolve({
                       value: Oc,
                       Ud: !0
                   });
               var g = Hc(a, {
                   src: "https://yastatic.net/s3/gdpr/popup/v2/" + e + "_inversed_buttons.js"
               });
               return new K(function(h, k) {
                   g ? (c("7"),
                   g.onerror = function() {
                       var l;
                       c("9");
                       f.mg((l = {},
                       l.type = "GDPR-ok-view-default",
                       l));
                       h(null)
                   }
                   ,
                   g.onload = function() {
                       c("10");
                       b.D(va(["GDPR-ok-view-default", "GDPR-ok-view-detailed"], Sf), function(l) {
                           var m;
                           l = l.type;
                           f.mg((m = {},
                           m.type = l,
                           m));
                           h({
                               value: Ii(l)
                           })
                       })
                   }
                   ) : (c("9"),
                   k(Ya("gdp.e")))
               }
               )
           }
           function Zo(a, c) {
               var b = c || Ei(a);
               return G(b, $o) ? b : "en"
           }
           function me() {
               return function(a, c, b) {
                   return {
                       ca: function(d, e) {
                           var f, g = d.J, h = d.Ua, k = d.G;
                           if (g && k) {
                               var l = G(k["wv-type"], ap);
                               if (!k["wv-type"] || l) {
                                   var m = ca(a);
                                   g.Tb("rqnl", 1);
                                   for (var p = rd(a), q = 1; p[q]; )
                                       q += 1;
                                   d.Rb = q;
                                   p[q] = (f = {},
                                   f.protocol = ra.Ja,
                                   f.host = "mc.yandex.ru",
                                   f.resource = l ? "webvisor" : "watch",
                                   f.postParams = d.ba,
                                   f.time = m(Y),
                                   f.counterType = b.$,
                                   f.params = k,
                                   f.browserInfo = g.l(),
                                   f.counterId = b.id,
                                   f.ghid = Vb(a),
                                   f);
                                   h && (h.Tb("rqnl", 1),
                                   p[q].telemetry = h.l());
                                   Tf(a)
                               }
                           }
                           e()
                       },
                       Ia: function(d, e) {
                           Ji(a, d);
                           e()
                       }
                   }
               }
           }
           function Ji(a, c) {
               var b = rd(a);
               c.J && !Na(b) && (delete b[c.Rb],
               Tf(a))
           }
           function Tf(a) {
               var c = rd(a);
               Pa(a).C("retryReqs", c)
           }
           function ne(a, c, b) {
               var d = oe(a, c, b);
               return function(e, f, g) {
                   var h;
                   e = y({
                       J: xa()
                   }, e);
                   e.G || (e.G = {});
                   var k = e.G;
                   k.wmode = "0";
                   k["wv-part"] = "" + g;
                   k["wv-hit"] = k["wv-hit"] || "" + Vb(a);
                   k["page-url"] = k["page-url"] || a.location.href;
                   k.rn = k.rn || "" + Ra(a);
                   if (!k["wv-type"]) {
                       g = e.bf;
                       var l = "4"
                         , m = "2";
                       e.If && (l = "5",
                       m = "3");
                       k["wv-type"] = g ? l : m
                   }
                   f = "webvisor/" + f.id;
                   return d(y(e, {
                       G: k
                   }), f, {
                       Ob: (h = {},
                       h["Content-Type"] = "text/plain",
                       h),
                       Gg: "POST"
                   })
               }
           }
           function bp(a, c, b, d) {
               c = d.o("cc");
               d = F(["cc", ""], d.C);
               if (c) {
                   var e = c.split("&");
                   c = e[0];
                   if ((e = (e = e[1]) && Ca(e)) && 1440 < ca(a)(hb) - e)
                       return d();
                   b.C("cc", c)
               } else
                   la(0)(c) || d()
           }
           function cp(a, c, b, d) {
               return oa(a, c, function(e) {
                   if ("0" === n(e, "settings.pcs") && !sd(a))
                       if (e = d.o("zzlc"),
                       V(e) || Na(e) || "na" === e) {
                           e = "ru";
                           var f = Ki(a, 68)
                             , g = Li(a, 79);
                           if (f || g)
                               e = "md";
                           if (f = Va(a)) {
                               var h = f("iframe");
                               y(h.style, {
                                   display: "none",
                                   width: "1px",
                                   height: "1px",
                                   visibility: "hidden"
                               });
                               h.src = "https://mc.yandex." + e + Mh("L21ldHJpa2EvenpsYy5odG1s");
                               if (e = Yb(a)) {
                                   e.appendChild(h);
                                   var k = 0
                                     , l = ia(a).D(a, ["message"], D(a, "zz.m", function(m) {
                                       (m = n(m, "data")) && m.substr && "__ym__zz" === m.substr(0, 8) && (uc(h),
                                       m = m.substr(8),
                                       d.C("zzlc", m),
                                       b.C("zzlc", m),
                                       l(),
                                       ja(a, k))
                                   }));
                                   k = X(a, t(l, w(h, uc)), 3E3)
                               }
                           }
                       } else
                           b.C("zzlc", e)
               })
           }
           function oa(a, c, b) {
               a = P(c);
               return Mi()(dp(a)).then(b)
           }
           function ep(a, c, b) {
               c = P(c);
               a = Uf(a);
               b = y({
                   Jh: a(Y)
               }, b);
               return Mi()(fp(c, b))
           }
           function fp(a, c) {
               return function(b) {
                   var d = b[a];
                   d ? (d.jj = c,
                   d.dg = !0,
                   d.cg ? d.cg(c) : d.Qa = K.resolve(c)) : b[a] = {
                       Qa: K.resolve(c),
                       jj: c,
                       dg: !0
                   }
               }
           }
           function gp(a, c, b) {
               var d, e;
               c = Za(w(a, n), hp);
               c = V(c) ? null : n(a, c);
               if (n(a, "navigator.onLine") && c && c && n(c, "prototype.constructor.name")) {
                   var f = new c((d = {},
                   d.iceServers = [],
                   d));
                   a = n(f, "createDataChannel");
                   T(a) && (C(a, f, "y.metrika")(),
                   a = n(f, "createOffer"),
                   T(a) && !a.length && (a = C(a, f)(),
                   d = n(a, "then"),
                   T(d) && C(d, a, function(g) {
                       var h = n(f, "setLocalDescription");
                       T(h) && C(h, f, g, B, B)()
                   })(),
                   y(f, (e = {},
                   e.onicecandidate = function() {
                       var g, h = n(f, "close");
                       if (T(h)) {
                           h = C(h, f);
                           try {
                               var k = (g = n(f, "localDescription.sdp")) && g.match(/c=IN\s[\w\d]+\s([\w\d:.]+)/)
                           } catch (l) {
                               f.onicecandidate = B;
                               "closed" !== f.iceConnectionState && h();
                               return
                           }
                           k && 0 < k.length && (g = vc(k[1]),
                           b.C("pp", g));
                           f.onicecandidate = B;
                           h()
                       }
                   }
                   ,
                   e))))
               }
           }
           function ip(a, c, b) {
               var d, e = Ni(a, c);
               if (e) {
                   e.aa.D(["gpu-get"], function() {
                       var h;
                       return h = {},
                       h.type = "gpu-get",
                       h.pu = b.o("pu"),
                       h
                   });
                   var f = n(a, "opener");
                   if (f) {
                       var g = X(a, F([a, c, b], Oi), 200, "pu.m");
                       e.Ce(f, (d = {},
                       d.type = "gpu-get",
                       d), function(h, k) {
                           var l = n(k, "pu");
                           l && (ja(a, g),
                           b.C("pu", l))
                       })
                   } else
                       Oi(a, c, b)
               }
           }
           function Oi(a, c, b) {
               var d = n(a, "location.host");
               a = Qd(a, c);
               b.C("pu", "" + vc(d) + a)
           }
           function Vf(a, c, b) {
               return {
                   ca: function(d, e) {
                       var f = d.J;
                       if (f && (!b || b.lg)) {
                           var g = a.document.title;
                           d.title && (g = d.title);
                           var h = bc("getElementsByTagName", a.document);
                           "string" !== typeof g && h && (g = h("title"),
                           g = (g = n(g, "0.innerHtml")) ? g : "");
                           g = g.slice(0, ra.Qg);
                           f.C("t", g)
                       }
                       e()
                   }
               }
           }
           function Qb(a) {
               void 0 === a && (a = jp);
               return function(c, b, d) {
                   return {
                       ca: function(e, f) {
                           var g = e.J
                             , h = e.G;
                           g && h && A(function(k) {
                               var l = Db[k]
                                 , m = "bi"
                                 , p = g;
                               l || (l = $a[k],
                               m = "tel",
                               p = ge(e));
                               l && (l = E(m + ":" + k, l, null)(c, d, e),
                               p.Tb(k, l))
                           }, a);
                           f()
                       }
                   }
               }
           }
           function kp(a, c, b, d, e, f, g, h) {
               var k = b.o(f);
               ka(k) && (b.C(f, g),
               e(a, c, b, d),
               k = b.o(f, g));
               V(h) || h.Tb(f, "" + k);
               return k
           }
           function lp(a, c) {
               if (td(a)) {
                   var b = sb(a).match(mp);
                   if (b && b.length)
                       return b[1] === c
               }
               return !1
           }
           function Ki(a, c) {
               if (ud(a) && c) {
                   var b = sb(a).match(np);
                   if (b && b.length)
                       return +b[1] >= c
               }
               return !1
           }
           function Li(a, c) {
               var b = sb(a);
               return b && (b = b.match(op)) && 1 < b.length ? Ca(b[1]) >= c : !1
           }
           function Th(a, c) {
               void 0 === c && (c = !1);
               for (var b = a.length, d = b - b % 3, e = [], f = 0; f < d; f += 3) {
                   var g = (a[f] << 16) + (a[f + 1] << 8) + a[f + 2];
                   e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g >> 18 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g & 63])
               }
               switch (b - d) {
               case 1:
                   b = a[d] << 4;
                   e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b & 63], "=", "=");
                   break;
               case 2:
                   b = (a[d] << 10) + (a[d + 1] << 2),
                   e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b & 63], "=")
               }
               e = e.join("");
               return c ? Pi(e, !0) : e
           }
           function Mh(a, c) {
               void 0 === c && (c = !1);
               var b = a
                 , d = ""
                 , e = 0;
               if (!b)
                   return "";
               for (c && (b = Pi(b)); b.length % 4; )
                   b += "=";
               do {
                   var f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++))
                     , g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++))
                     , h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++))
                     , k = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++));
                   if (0 > f || 0 > g || 0 > h || 0 > k)
                       return "";
                   var l = f << 18 | g << 12 | h << 6 | k;
                   f = l >> 16 & 255;
                   g = l >> 8 & 255;
                   l &= 255;
                   d = 64 === h ? d + String.fromCharCode(f) : 64 === k ? d + String.fromCharCode(f, g) : d + String.fromCharCode(f, g, l)
               } while (e < b.length);
               return d
           }
           function Pi(a, c) {
               void 0 === c && (c = !1);
               return a ? a.replace(c ? /[+/=]/g : /[-*_]/g, function(b) {
                   return pp[b] || b
               }) : ""
           }
           function qp(a, c) {
               var b = a.length ? z(function(d, e) {
                   var f = c[e];
                   return f === d ? null : f
               }, a) : c;
               a.length = 0;
               A(t(N, na("push", a)), c);
               return W(la(null), b).length === a.length ? null : b
           }
           function rp(a, c, b) {
               return z(function(d) {
                   var e = d[0]
                     , f = d[1];
                   if (T(e))
                       return e(a, c) || null;
                   if (T(f))
                       return null;
                   var g = !(!c[e] || !c[f]);
                   !g && 2 === d.length && (g = 0 === c[e] && 0 === c[f]) && (g = d[1],
                   g = !(Qi[d[0]] || Qi[g]));
                   return g ? (d = Math.round(c[e]) - Math.round(c[f]),
                   0 > d || 36E5 < d ? null : d) : 1 === d.length && c[e] ? Math.round(c[e]) : null
               }, b)
           }
           function vd(a, c, b) {
               return {
                   ca: function(d, e) {
                       var f = Ri(b)
                         , g = d.J;
                       g ? Hh(d) ? (f.pf = g,
                       e()) : f.Dc ? f.Dc.push(e) : e() : e()
                   },
                   Ia: function(d, e) {
                       var f = d.J
                         , g = d.mj
                         , h = Ri(b);
                       if (f) {
                           var k = h.Dc;
                           h.pf === f && k && (g && O(a).C("isEU", n(g, "settings.eu")),
                           A(Ha, k),
                           h.Dc = null)
                       }
                       e()
                   }
               }
           }
           function Hh(a) {
               return (a = a.J) && a.o("pv") && !a.o("ar")
           }
           function Si(a, c) {
               var b = Ni(a, c)
                 , d = []
                 , e = [];
               if (!b)
                   return null;
               var f = F([a, b.Ce], sp)
                 , g = w(f, tp);
               b.aa.D(["initToParent"], function(h) {
                   g(d, b.Ab[h[1].counterId])
               }).D(["parentConnect"], function(h) {
                   g(e, b.Nb[h[1].counterId])
               });
               return {
                   aa: b.aa,
                   Kk: function(h, k) {
                       return new K(function(l, m) {
                           b.Ce(h, k, function(p, q) {
                               l([p, q])
                           });
                           X(a, w(Ya(), m), 5100, "is.o")
                       }
                       )
                   },
                   mg: function(h) {
                       var k = {
                           pg: [],
                           Ne: [],
                           data: h
                       };
                       d.push(k);
                       return f(b.Ab, k, h)
                   },
                   ng: function(h) {
                       var k = {
                           pg: [],
                           Ne: [],
                           data: h
                       };
                       e.push(k);
                       return f(b.Nb, k, h)
                   }
               }
           }
           function tp(a, c, b) {
               c = W(function(d) {
                   return !G(b.info.counterId, d.Ne)
               }, c);
               A(function(d) {
                   var e;
                   b.info.counterId && a((e = {},
                   e[b.info.counterId] = b,
                   e), d, d.data)
               }, c)
           }
           function sp(a, c, b, d, e) {
               return (new K(function(f, g) {
                   var h = ea(b)
                     , k = t(d.resolve ? d.resolve : N, cd(f))
                     , l = t(d.reject ? d.reject : N, cd(g));
                   d.resolve = k;
                   d.reject = l;
                   A(function(m) {
                       var p;
                       d.Ne.push(m);
                       var q = b[m]
                         , r = X(a, w(Ya(), l), 5100, "is.m");
                       c(q.window, y(e, (p = {},
                       p.toCounter = Ca(m),
                       p)), function(u, x) {
                           ja(a, r);
                           d.pg.push(m);
                           d.resolve && d.resolve(x)
                       })
                   }, h)
               }
               ))["catch"](D(a, "if.b"))
           }
           function up(a, c) {
               var b = pe(a);
               c.D(["initToParent"], function(d) {
                   var e = d[1];
                   b.Ab[e.counterId] = {
                       info: e,
                       window: d[0].source
                   }
               }).D(["initToChild"], function(d) {
                   var e = d[0];
                   d = d[1];
                   e.source === a.parent && c.R("parentConnect", [e, d])
               }).D(["parentConnect"], function(d) {
                   var e = d[1];
                   e.counterId && (b.Nb[e.counterId] = {
                       info: e,
                       window: d[0].source
                   })
               })
           }
           function vp(a, c) {
               return function(b, d) {
                   var e, f = {
                       nc: ca(a)(Y),
                       key: a.Math.random(),
                       dir: 0
                   };
                   b.length && (f.nc = Ca(b[0]),
                   f.key = parseFloat(b[1]),
                   f.dir = Ca(b[2]));
                   y(d, c);
                   var g = (e = {
                       data: d
                   },
                   e.__yminfo = I(":", ["__yminfo", f.nc, f.key, f.dir]),
                   e);
                   return {
                       Z: f,
                       vg: ib(a, g) || ""
                   }
               }
           }
           function Vb(a) {
               var c = O(a)
                 , b = c.o("hitId");
               b || (b = Ra(a),
               c.C("hitId", b));
               return b
           }
           function vf(a) {
               var c;
               return c = (c = !!O(a).o("oo")) || wf(a)
           }
           function ge(a, c, b) {
               void 0 === b && (b = null);
               a.Ua || (a.Ua = Ti());
               c && a.Ua.Tb(c, b);
               return a.Ua
           }
           function Wf(a) {
               return {
                   ca: function(c, b) {
                       var d = a.document
                         , e = c.J;
                       if (e && Xf(a)) {
                           var f = ia(a)
                             , g = function(h) {
                               Xf(a) || (f.Wb(d, Ui, g),
                               b());
                               return h
                           };
                           f.D(d, Ui, g);
                           e.C("pr", "1")
                       } else
                           b()
                   }
               }
           }
           function ab(a, c, b) {
               var d = oe(a, c, b);
               return function(e, f) {
                   var g, h = y({
                       J: xa()
                   }, e), k = h.G, l = h.J;
                   k = (g = {},
                   g["page-url"] = k && k["page-url"] || "",
                   g.charset = "utf-8",
                   g);
                   "0" !== f.$ && (k["cnt-class"] = f.$);
                   g = y(h, {
                       G: y(h.G || {}, k)
                   });
                   h = "";
                   if (g.J) {
                       k = P(f);
                       k = Vi(f)[k] || {};
                       var m = k.status;
                       "rt" === k.Uc && m ? (1 === m && (h = Gh(a, f) + "."),
                       g.J.C("rt", m)) : h = ""
                   }
                   y(g, {
                       Df: h
                   });
                   return d(g, "watch/" + f.id, {
                       jd: !(!l.o("pv") || l.o("ar") || l.o("wh"))
                   })
               }
           }
           function oe(a, c, b) {
               var d = zb(a, c);
               return function(e, f, g) {
                   void 0 === g && (g = {});
                   var h = wp(a);
                   e.Df && (h = "" + e.Df + h);
                   f = [ra.Ja + "//" + (h || "mc.yandex.ru") + "/" + f];
                   return Yf(a, b, e, !0).then(F([e, f, g], d)).then(function(k) {
                       e.mj = k.Qb;
                       return Yf(a, b, e).then(w(k.Qb, N))
                   })
               }
           }
           function wp(a) {
               var c = "mc.yandex.ru"
                 , b = n(a, "document.referrer");
               if (!b)
                   return c;
               a = Lc(a, b).host;
               return c = "mc.yandex." + (bh(a) || "ru")
           }
           function xp(a, c) {
               return a && c ? Wi(a) === Wi(c) : a || c ? !1 : !0
           }
           function Wi(a) {
               return (a.split(":")[1] || "").replace(/^\/*/, "").replace(/^www\./, "").split("/")[0]
           }
           function Yf(a, c, b, d) {
               void 0 === d && (d = !1);
               return new K(function(e, f) {
                   function g(l, m) {
                       m();
                       e()
                   }
                   var h = c.slice();
                   h.push({
                       ca: g,
                       Ia: g
                   });
                   var k = rc(h, function(l, m) {
                       var p = d ? l.ca : l.Ia;
                       if (p)
                           try {
                               p(b, m)
                           } catch (q) {
                               k(yp),
                               f(q)
                           }
                       else
                           m()
                   });
                   k(Xi)
               }
               )
           }
           function Nb(a, c, b) {
               var d = b || "as";
               if (a.postMessage && !a.attachEvent) {
                   b = ia(a);
                   var e = "__ym__promise_" + Ra(a) + "_" + Ra(a)
                     , f = B;
                   d = D(a, d, function(g) {
                       try {
                           var h = g.data
                       } catch (k) {
                           return
                       }
                       h === e && (f(),
                       g.stopPropagation && g.stopPropagation(),
                       c())
                   });
                   f = b.D(a, ["message"], d);
                   a.postMessage(e, "*")
               } else
                   X(a, c, 0, d)
           }
           function Yi(a, c, b, d, e) {
               void 0 === d && (d = 1);
               void 0 === e && (e = "itc");
               c = rc(c, b);
               tc(a, c, d)(Xa(D(a, e), B))
           }
           function tc(a, c, b, d) {
               void 0 === b && (b = 1);
               void 0 === d && (d = Zi);
               Zf = Infinity === b;
               return ua(function(e, f) {
                   function g() {
                       try {
                           var k = c(d(a, b));
                           h = h.concat(k)
                       } catch (l) {
                           return e(l)
                       }
                       c(zp);
                       if (c(wd))
                           return f(h),
                           $i(a);
                       Zf ? (c(d(a, 1E4)),
                       f(h),
                       $i(a)) : X(a, g, 100)
                   }
                   var h = [];
                   Ap(g)
               })
           }
           function $i(a) {
               if ($f.length) {
                   var c = $f.shift();
                   Zf ? c() : X(a, c, 100)
               } else
                   ag = !1
           }
           function Ap(a) {
               ag ? $f.push(a) : (ag = !0,
               a())
           }
           function pf(a) {
               return ua(function(c, b) {
                   b(a)
               })
           }
           function fo(a) {
               return ua(function(c, b) {
                   a.then(b, c)
               })
           }
           function Bp(a) {
               var c = []
                 , b = 0;
               return ua(function(d, e) {
                   A(function(f, g) {
                       f(Xa(d, function(h) {
                           try {
                               c[g] = h,
                               b += 1,
                               b === a.length && e(c)
                           } catch (k) {
                               d(k)
                           }
                       }))
                   }, a)
               })
           }
           function eo(a) {
               var c = []
                 , b = !1;
               return ua(function(d, e) {
                   function f(g) {
                       c.push(g) === a.length && d(c)
                   }
                   A(function(g) {
                       g(Xa(f, function(h) {
                           if (!b)
                               try {
                                   e(h),
                                   b = !0
                               } catch (k) {
                                   f(k)
                               }
                       }))
                   }, a)
               })
           }
           function Xa(a, c) {
               return function(b) {
                   return b(a, c)
               }
           }
           function rc(a, c) {
               void 0 === c && (c = N);
               return ua({
                   Na: a,
                   Vd: c,
                   He: !1,
                   ra: 0
               })
           }
           function Xi(a) {
               function c() {
                   function d() {
                       b = !0;
                       a.ra += 1
                   }
                   b = !1;
                   a.Vd(a.Na[a.ra], function() {
                       d()
                   });
                   b || (a.ra += 1,
                   d = C(Xi, null, a))
               }
               for (var b = !0; !wd(a) && b; )
                   c()
           }
           function Zi(a, c) {
               return function(b) {
                   var d = ca(a)
                     , e = d(Y);
                   return aj(function(f, g) {
                       d(Y) - e >= c && g(bj)
                   })(b)
               }
           }
           function qe(a, c) {
               return function(b) {
                   var d = ca(a)
                     , e = d(Y);
                   return re(function(f) {
                       d(Y) - e >= c && bj(f)
                   })(b)
               }
           }
           function re(a) {
               return function(c) {
                   for (var b; c.Na.length && !wd(c); )
                       b = c.Na.pop(),
                       b = c.Vd(b, c.Na),
                       a(c);
                   return b
               }
           }
           function Cp(a) {
               wd(a) && pb(Cc("i"));
               var c = a.Vd(a.Na[a.ra]);
               a.ra += 1;
               return c
           }
           function zp(a) {
               a.He = !1
           }
           function bj(a) {
               a.He = !0
           }
           function yp(a) {
               a.ra = a.Na.length
           }
           function wd(a) {
               return a.He || a.Na.length <= a.ra
           }
           function zb(a, c) {
               return function(b, d, e) {
                   void 0 === e && (e = {});
                   return cj(a, c, d, b, y(e, {
                       na: b.na || [],
                       ba: e.ba || b.ba
                   }))
               }
           }
           function cj(a, c, b, d, e, f, g) {
               var h;
               void 0 === f && (f = 0);
               void 0 === g && (g = 0);
               var k = y({}, e)
                 , l = c[g]
                 , m = l[0];
               l = l[1];
               var p = y({}, d.G)
                 , q = ca(a);
               d.J && (p["browser-info"] = xa(d.J.l()).C("st", q(se)).Aa());
               !p.t && (q = d.Ua) && (q.C("ti", m),
               p.t = q.Aa());
               q = b[f];
               k.Ob && k.Ob["Content-Type"] || !k.ba || (k.Ob = y({}, k.Ob, (h = {},
               h["Content-Type"] = "application/x-www-form-urlencoded",
               h)),
               k.ba = "site-info=" + Pd(k.ba));
               k.Gg = k.ba ? "POST" : "GET";
               k.Pb = p;
               k.na.push(m);
               return l("" + q + (d.Oi ? "/1" : ""), k).then(function(r) {
                   return {
                       Qb: r,
                       Rj: f
                   }
               })["catch"](function(r) {
                   var u = g + 1 >= c.length
                     , x = f + 1 >= b.length;
                   u && x && pb(r);
                   return cj(a, c, b, d, e, !x && u ? f + 1 : f, u ? 0 : g + 1)
               })
           }
           function cf(a, c) {
               var b = c.Zd
                 , d = b || "uid";
               b = b ? a.location.hostname : void 0;
               var e = $b(a)
                 , f = Pa(a)
                 , g = ca(a)
                 , h = g(se)
                 , k = dj(a, c)
                 , l = k[0];
               k = k[1];
               var m = e.o("d");
               ej(a, c);
               var p = !1;
               !k && l && (k = l,
               p = !0);
               if (!k)
                   k = I("", [g(se), Ra(a)]),
                   p = !0;
               else if (!m || 15768E3 < h - Ca(m))
                   p = !0;
               p && !c.ib && (e.C(d, k, 525600, b),
               e.C("d", "" + h, 525600, b));
               f.C(d, k);
               return k
           }
           function dj(a, c) {
               var b = Pa(a)
                 , d = $b(a)
                 , e = c.Zd || "uid";
               return [b.o(e), d.o(e)]
           }
           function rb(a) {
               a = ca(a);
               return Math.round(a(bg) / 50)
           }
           function bg(a) {
               var c = a.ta
                 , b = c[1];
               a = c[0] && b ? b() : Y(a) - a.ui;
               return Math.round(a)
           }
           function se(a) {
               return Math.round(Y(a) / 1E3)
           }
           function hb(a) {
               return Math.floor(Y(a) / 1E3 / 60)
           }
           function Y(a) {
               var c = a.Pe;
               return 0 !== c ? c : cg(a.l, a.ta)
           }
           function Uf(a) {
               var c = ia(a)
                 , b = fj(a)
                 , d = {
                   l: a,
                   Pe: 0,
                   ta: b,
                   ui: cg(a, b)
               }
                 , e = b[1];
               b[0] && e || c.D(a, ["beforeunload", "unload"], function() {
                   0 === d.Pe && (d.Pe = cg(a, d.ta))
               });
               return ua(d)
           }
           function Dp(a) {
               return (10 > a ? "0" : "") + a
           }
           function bf(a, c, b) {
               void 0 === c && (c = "");
               void 0 === b && (b = "_ym");
               var d = "" + b + c + "_";
               return {
                   Sd: Ep(a),
                   o: function(e, f) {
                       var g = gj(a, "" + d + e);
                       return Na(g) && !V(f) ? f : g
                   },
                   C: function(e, f) {
                       hj(a, "" + d + e, f);
                       return this
                   },
                   oc: function(e) {
                       ij(a, "" + d + e);
                       return this
                   }
               }
           }
           function hj(a, c, b) {
               var d = dg(a);
               a = ib(a, b);
               if (!Na(a))
                   try {
                       d.setItem(c, a)
                   } catch (e) {}
           }
           function gj(a, c) {
               var b = dg(a);
               try {
                   return Bb(a, b.getItem(c))
               } catch (d) {}
               return null
           }
           function ij(a, c) {
               var b = dg(a);
               try {
                   b.removeItem(c)
               } catch (d) {}
           }
           function dg(a) {
               try {
                   return a.localStorage
               } catch (c) {}
               return null
           }
           function bi(a, c, b) {
               eg(a, "metrika_enabled", "1", 0, c, b, !0);
               var d = jj(a);
               (d = d && d.metrika_enabled) && kj(a, "metrika_enabled", c, b, !0);
               return !!d
           }
           function eg(a, c, b, d, e, f, g) {
               void 0 === g && (g = !1);
               if (ci(a, Yd, c)) {
                   var h = c + "=" + encodeURIComponent(b) + ";";
                   h += "" + Fp(a);
                   if (d) {
                       var k = new Date;
                       k.setTime(k.getTime() + 6E4 * d);
                       h += "expires=" + k.toUTCString() + ";"
                   }
                   e && (d = e.replace(Gp, ""),
                   h += "domain=" + d + ";");
                   try {
                       a.document.cookie = h + ("path=" + (f || "/")),
                       g || (lj(a)[c] = b)
                   } catch (l) {}
               }
           }
           function Yd(a, c) {
               var b = lj(a);
               return b ? b[c] || null : null
           }
           function jj(a) {
               try {
                   var c = a.document.cookie;
                   if (!ka(c)) {
                       var b = {};
                       A(function(d) {
                           d = d.split("=");
                           var e = d[1];
                           b[ob(d[0])] = ob(mj(e))
                       }, (c || "").split(";"));
                       return b
                   }
               } catch (d) {}
               return null
           }
           function ci(a, c, b) {
               G(b, ["gdpr", "gdpr_popup", "metrika_enabled", "_ym_debug_build"]) ? a = !0 : (b = he(a),
               b = Rf(b),
               a = c(a, "gdpr"),
               a = W(nc(Hp), b).length ? !0 : G(a, [Oc, Ip]));
               return a
           }
           function Ii(a) {
               if (G(a, ["GDPR-ok-view-default", "GDPR-ok-view-detailed"]))
                   return Oc;
               a = a.replace("GDPR-ok-view-detailed-", "");
               return G(a, ac) ? a : Oc
           }
           function Hi(a, c, b) {
               void 0 === b && (b = N);
               var d = ed(a);
               b(d);
               var e = w(d, Jp);
               te(a, c, function(f) {
                   f.sa.D(e)
               });
               return d
           }
           function Jp(a, c) {
               var b = n(c, "ymetrikaEvent");
               b && a.R(n(b, "type"), b)
           }
           function te(a, c, b, d) {
               void 0 === b && (b = B);
               void 0 === d && (d = !1);
               var e = ad(a);
               if (c && T(c.push)) {
                   var f = c.push;
                   c.push = function() {
                       var g = ya(arguments)
                         , h = g[0];
                       d && e.R(h);
                       g = f.apply(c, g);
                       d || e.R(h);
                       return g
                   }
                   ;
                   a = {
                       sa: e,
                       unsubscribe: function() {
                           c.push = f
                       }
                   };
                   b(a);
                   A(e.R, c);
                   return a
               }
           }
           function he(a) {
               a = O(a);
               var c = a.o("dataLayer", []);
               a.C("dataLayer", c);
               return c
           }
           function To(a, c) {
               var b, d;
               a.push((b = {},
               b.ymetrikaEvent = (d = {},
               d.type = c,
               d),
               b))
           }
           function th(a, c, b) {
               function d() {
                   f = 0;
                   g && (g = !1,
                   f = X(a, d, b),
                   e.R(h))
               }
               var e = ad(a), f, g = !1, h;
               c.D(function(k) {
                   g = !0;
                   h = k;
                   f || d();
                   return B
               });
               return e
           }
           function Kp(a, c) {
               return a.clearInterval(c)
           }
           function Lp(a, c, b, d) {
               return a.setInterval(D(a, "i.err." + (d || "def"), c), b)
           }
           function X(a, c, b, d) {
               return ue(a, D(a, "d.err." + (d || "def"), c), b)
           }
           function ed(a) {
               var c = {};
               return {
                   D: function(b, d) {
                       A(function(e) {
                           n(c, e) || (c[e] = ad(a));
                           c[e].D(d)
                       }, b);
                       return this
                   },
                   ea: function(b, d) {
                       A(function(e) {
                           n(c, e) && c[e].ea(d)
                       }, b);
                       return this
                   },
                   R: function(b, d) {
                       return n(c, b) ? D(a, "e." + d, c[b].R)(d) : []
                   }
               }
           }
           function ad(a) {
               var c = []
                 , b = {};
               b.Ck = c;
               b.D = t(na("push", c), w(b, N));
               b.ea = t(cc(Lb(a))(c), cc(na("splice", c))(1), w(b, N));
               b.R = t(N, cc(Ha), Mp(c));
               return b
           }
           function E(a, c, b) {
               return function() {
                   return D(arguments[0], a, c, b).apply(this, arguments)
               }
           }
           function D(a, c, b, d, e) {
               var f = pb
                 , g = b || f;
               return function() {
                   var h = d;
                   try {
                       h = g.apply(e || null, arguments)
                   } catch (k) {
                       be(a, c, k)
                   }
                   return h
               }
           }
           function cg(a, c) {
               var b = c || fj(a)
                 , d = b[0];
               b = b[1];
               return !isNaN(d) && T(b) ? Math.round(b() + d) : a.Date.now ? a.Date.now() : (new a.Date).getTime()
           }
           function fj(a) {
               a = nj(a);
               var c = n(a, "timing.navigationStart")
                 , b = n(a, "now");
               b && (b = C(b, a));
               return [c, b]
           }
           function nj(a) {
               return n(a, "performance") || n(a, "webkitPerformance")
           }
           function be(a, c, b) {
               var d, e, f, g, h;
               if (!(.01 >= a.Math.random())) {
                   var k = "u.a.e"
                     , l = "";
                   b && ("object" === typeof b ? (k = b.message,
                   l = "string" === typeof b.stack && b.stack.replace(/\n/g, "\\n") || "n.s.e.s") : k = "" + b);
                   if (!(Np(k) || Ma(t(na("indexOf", k), la(-1), Rb), Op) || Pp(k) && .1 <= a.Math.random())) {
                       c = (d = {},
                       d.jserrs = (e = {},
                       e[ra.Va] = (f = {},
                       f[k] = (g = {},
                       g[c] = (h = {},
                       h[a.location.href] = l,
                       h),
                       g),
                       f),
                       e),
                       d);
                       a: {
                           var m;
                           d = ra.Ja + "//mc.yandex.ru/watch/" + ra.Mg;
                           try {
                               var p = Yc(a, "er")[0];
                               var q = void 0 === p ? [] : p;
                               var r = q[1];
                               var u = void 0 === r ? null : r
                           } catch (x) {
                               break a
                           }
                           p = (m = {},
                           m["browser-info"] = "ar:1:pv:1:v:" + ra.Va + ":vf:" + xd.version,
                           m["page-url"] = a.location && "" + a.location.href,
                           m);
                           a = ib(a, c);
                           if (u && a)
                               u(d, {
                                   Pb: p,
                                   na: [],
                                   ba: "site-info=" + Pd(a)
                               })["catch"](B)
                       }
                   }
               }
           }
           function Eb(a) {
               return z(function(c) {
                   return !c || G(c, a) ? c : 0
               }, wc)
           }
           function oj(a) {
               return !qd(a) && pj(a)
           }
           function fg(a) {
               return Va(a) ? w(a, Qp) : !1
           }
           function pj(a) {
               var c = n(a, "navigator.sendBeacon");
               return c && Da("sendBeacon", c) ? F([a, C(c, n(a, "navigator"))], Rp) : !1
           }
           function Rp(a, c, b, d) {
               return new K(function(e, f) {
                   if (!n(a, "navigator.onLine"))
                       return f();
                   var g = y(d.Pb, {
                       "force-urlencoded": 1
                   });
                   g = b + "?" + $c(g) + (d.ba ? "&" + d.ba : "");
                   return 2E3 < g.length ? f(Ya("sb.tlq")) : c(g) ? e("") : f()
               }
               )
           }
           function Qp(a, c, b) {
               return new K(function(d, e) {
                   var f, g, h = "_ymjsp" + Ra(a), k = y((f = {},
                   f.callback = h,
                   f), b.Pb), l = F([a, h], Sp);
                   a[h] = function(p) {
                       try {
                           l(),
                           uc(m),
                           d(p)
                       } catch (q) {
                           e(q)
                       }
                   }
                   ;
                   k.wmode = "5";
                   var m = Hc(a, (g = {},
                   g.src = qj(c, b, k),
                   g));
                   if (!m)
                       return l(),
                       e(Cc("jp.s"));
                   f = w(m, uc);
                   f = t(f, w(Ya(b.na), e));
                   g = ue(a, f, b.tb || 1E4);
                   g = F([a, g], ja);
                   m.onload = g;
                   m.onerror = t(l, g, f)
               }
               )
           }
           function Sp(a, c) {
               try {
                   delete a[c]
               } catch (b) {
                   a[c] = void 0
               }
           }
           function yd(a) {
               var c = Va(a);
               return c ? F([a, c], Tp) : !1
           }
           function Tp(a, c, b, d) {
               return new K(function(e, f) {
                   var g = Yb(a)
                     , h = c("img")
                     , k = t(w(h, uc), w(Ya(d.na), f))
                     , l = ue(a, k, d.tb || 3E3);
                   h.onerror = k;
                   h.onload = t(w(h, uc), w(null, e), F([a, l], ja));
                   k = y({}, d.Pb);
                   delete k.wmode;
                   h.src = qj(b, d, k);
                   td(a) && (y(h.style, {
                       position: "absolute",
                       visibility: "hidden",
                       width: "0px",
                       height: "0px"
                   }),
                   g.appendChild(h))
               }
               )
           }
           function oh(a, c, b) {
               var d = Ea(c);
               return d && Dh(a, c, W(Boolean, ["p", Up[d], "c"]), nh, b)
           }
           function mh(a, c) {
               var b = Xb(gg, a, c);
               if (!b) {
                   var d = Xb("div", a, c);
                   d && (ub(gg + ",div", d).length || (b = d))
               }
               return b
           }
           function Dh(a, c, b, d, e) {
               return L(function(f, g) {
                   var h = null;
                   g in rj ? h = c.getAttribute && c.getAttribute(rj[g]) : g in Pc && (h = "p" === g ? Pc[g](a, c, e) : "c" === g ? Pc[g](a, c, d) : Pc[g](a, c));
                   h && (h = h.slice(0, sj[g] || 100),
                   f[g] = hg[g] ? "" + vc(h) : h);
                   return f
               }, {}, b)
           }
           function Vh(a, c, b) {
               if (zd(a))
                   return pa(b.querySelectorAll(c));
               var d = tj(c.split(" "), b);
               return W(function(e, f) {
                   return Lb(a)(e, d) === f
               }, d)
           }
           function tj(a, c) {
               var b = va(a)
                 , d = b.shift();
               if (!d)
                   return [];
               d = c.getElementsByTagName(d);
               return b.length ? lc(w(b, tj), pa(d)) : pa(d)
           }
           function Kc(a, c) {
               if (c.querySelector)
                   return c.querySelector(a);
               var b = ub(a, c);
               return b && b.length ? b[0] : null
           }
           function ub(a, c) {
               if (!c)
                   return [];
               var b = c.querySelectorAll(a);
               return b ? pa(b) : []
           }
           function vi(a) {
               var c = null;
               try {
                   c = a.target || a.srcElement
               } catch (b) {}
               if (c) {
                   3 === c.nodeType && (c = c.parentNode);
                   for (a = c && c.nodeName && ("" + c.nodeName).toLowerCase(); n(c, "parentNode.nodeName") && ("a" !== a && "area" !== a || !c.href && !c.getAttribute("xlink:href")); )
                       a = (c = c.parentNode) && c.nodeName && ("" + c.nodeName).toLowerCase();
                   return c.href ? c : null
               }
               return null
           }
           function Hc(a, c) {
               var b = a.document
                 , d = y({
                   type: "text/javascript",
                   charset: "utf-8",
                   async: !0
               }, c)
                 , e = Va(a);
               if (e) {
                   var f = e("script");
                   uj(Ba, eb(function(l) {
                       var m = l[0];
                       l = l[1];
                       "async" === m && l ? f.async = !0 : f[m] = l
                   }))(d);
                   try {
                       var g = bc("getElementsByTagName", b)
                         , h = g("head")[0];
                       if (!h) {
                           var k = g("html")[0];
                           h = e("head");
                           k && k.appendChild(h)
                       }
                       h.insertBefore(f, h.firstChild);
                       return f
                   } catch (l) {}
               }
           }
           function Vp(a, c, b) {
               var d = vj(c);
               G(b, d.lb) || d.lb.push(b);
               if (Na(d.bb)) {
                   b = Va(a);
                   if (!b)
                       return null;
                   b = b("iframe");
                   y(b.style, {
                       display: "none",
                       width: "1px",
                       height: "1px",
                       visibility: "hidden"
                   });
                   b.src = c;
                   a = Yb(a);
                   if (!a)
                       return null;
                   a.appendChild(b);
                   d.bb = b
               } else
                   (a = n(d.bb, "contentWindow")) && a.postMessage("frameReinit", "*");
               return d.bb
           }
           function Wp(a, c) {
               var b = da(a) ? a : [a];
               c = c || document;
               if (c.querySelectorAll) {
                   var d = I(", ", z(function(e) {
                       return "." + e
                   }, b));
                   return pa(c.querySelectorAll(d))
               }
               if (c.getElementsByClassName)
                   return lc(t(na("getElementsByClassName", c), pa), b);
               d = c.getElementsByTagName("*");
               b = "(" + I("|", b) + ")";
               return W(w(b, qc), pa(d))
           }
           function ig(a, c, b) {
               for (var d = "", e = lh(), f = Ea(c) || "*"; c && c.parentNode && !G(f, ["BODY", "HTML"]); )
                   d += e[f] || "*",
                   d += wj(a, c, b) || "",
                   c = c.parentElement,
                   f = Ea(c) || "*";
               return ob(d, 128)
           }
           function wj(a, c, b) {
               if (a = ve(a, c)) {
                   a = a.childNodes;
                   for (var d = c && c.nodeName, e = 0, f = 0; f < a.length; f += 1)
                       if (d === (a[f] && a[f].nodeName)) {
                           if (c === a[f])
                               return e;
                           b && a[f] === b || (e += 1)
                       }
               }
               return 0
           }
           function ve(a, c) {
               var b = n(a, "document");
               if (!c || c === b.documentElement)
                   return null;
               if (c === xc(a))
                   return b.documentElement;
               b = null;
               try {
                   b = c.parentNode
               } catch (d) {}
               return b
           }
           function zf(a, c) {
               var b = jg(a, c)
                 , d = b.left;
               b = b.top;
               var e = we(a, c);
               return [d, b, e[0], e[1]]
           }
           function we(a, c) {
               var b = n(a, "document");
               if (c === xc(a) || c === b.documentElement) {
                   b = Yb(a);
                   var d = Ad(a);
                   return [Math.max(b.scrollWidth, d[0]), Math.max(b.scrollHeight, d[1])]
               }
               return (b = fd(c)) ? [b.width, b.height] : [c.offsetWidth, c.offsetHeight]
           }
           function jg(a, c) {
               var b = c
                 , d = n(a, "document")
                 , e = Ea(b);
               if (!b || !b.ownerDocument || "PARAM" === e || b === xc(a) || b === d.documentElement)
                   return {
                       left: 0,
                       top: 0
                   };
               if (d = b.getBoundingClientRect && fd(b))
                   return b = Jf(a),
                   {
                       left: Math.round(d.left + b.x),
                       top: Math.round(d.top + b.y)
                   };
               for (e = d = 0; b; )
                   d += b.offsetLeft,
                   e += b.offsetTop,
                   b = b.offsetParent;
               return {
                   left: d,
                   top: e
               }
           }
           function Xb(a, c, b) {
               if (!(c && c.Element && c.Element.prototype && c.document && b))
                   return null;
               if (c.Element.prototype.closest && Da("closest", c.Element.prototype.closest) && b.closest)
                   return b.closest(a);
               var d = ai(c);
               if (d) {
                   for (; b && 1 === b.nodeType && !d.call(b, a); )
                       b = b.parentElement || b.parentNode;
                   return b && 1 === b.nodeType ? b : null
               }
               if (zd(c)) {
                   for (a = pa((c.document || c.ownerDocument).querySelectorAll(a)); b && 1 === b.nodeType && -1 === Lb(c)(b, a); )
                       b = b.parentElement || b.parentNode;
                   return b && 1 === b.nodeType ? b : null
               }
               return null
           }
           function zd(a) {
               return !(!Da("querySelectorAll", n(a, "Element.prototype.querySelectorAll")) || !a.document.querySelectorAll)
           }
           function xj(a) {
               return xe(a) && !Ma(la(a.type), Xp) ? ye(a) ? !a.checked : !a.value : Yp(a) ? !a.value : Zp(a) ? 0 > a.selectedIndex : !0
           }
           function Ea(a) {
               if (a)
                   try {
                       var c = a.nodeName;
                       if (Ga(c))
                           return c;
                       c = a.tagName;
                       if (Ga(c))
                           return c
                   } catch (b) {}
           }
           function yj(a, c) {
               var b = a.document.getElementsByTagName("form");
               return Lb(a)(c, pa(b))
           }
           function $p(a, c, b) {
               b = bc("dispatchEvent", b || a.document);
               var d = null
                 , e = n(a, "Event.prototype.constructor");
               if (e && (Da("(Event|Object|constructor)", e) || ze(a) && "[object Event]" === "" + e))
                   try {
                       d = new a.Event(c)
                   } catch (f) {
                       if ((a = bc("createEvent", n(a, "document"))) && T(a)) {
                           try {
                               d = a(c)
                           } catch (g) {}
                           d && d.initEvent && d.initEvent(c, !1, !1)
                       }
                   }
               d && b(d)
           }
           function fd(a) {
               try {
                   return a.getBoundingClientRect && a.getBoundingClientRect()
               } catch (c) {
                   return "object" === typeof c && null !== c && 16389 === (c.Tf && c.Tf & 65535) ? {
                       top: 0,
                       bottom: 0,
                       left: 0,
                       width: 0,
                       height: 0,
                       right: 0
                   } : null
               }
           }
           function Jf(a) {
               var c = xc(a)
                 , b = n(a, "document");
               return {
                   x: a.pageXOffset || b.documentElement && b.documentElement.scrollLeft || c && c.scrollLeft || 0,
                   y: a.pageYOffset || b.documentElement && b.documentElement.scrollTop || c && c.scrollTop || 0
               }
           }
           function Ad(a) {
               var c = kg(a);
               if (c) {
                   var b = c[2];
                   return [a.Math.round(c[0] * b), a.Math.round(c[1] * b)]
               }
               c = Yb(a);
               return [n(c, "clientWidth") || a.innerWidth, n(c, "clientHeight") || a.innerHeight]
           }
           function kg(a) {
               var c = n(a, "visualViewport.width")
                 , b = n(a, "visualViewport.height");
               a = n(a, "visualViewport.scale");
               return ka(c) || ka(b) ? null : [Math.floor(c), Math.floor(b), a]
           }
           function Yb(a) {
               var c = n(a, "document") || {}
                 , b = c.documentElement;
               return "CSS1Compat" === c.compatMode ? b : xc(a) || b
           }
           function xc(a) {
               a = n(a, "document");
               try {
                   return a.getElementsByTagName("body")[0]
               } catch (c) {
                   return null
               }
           }
           function qc(a, c) {
               try {
                   return (new RegExp("(?:^|\\s)" + a + "(?:\\s|$)")).test(c.className)
               } catch (b) {
                   return !1
               }
           }
           function yc(a) {
               var c;
               try {
                   if (c = a.target || a.srcElement)
                       !c.ownerDocument && c.documentElement ? c = c.documentElement : c.ownerDocument !== document && (c = null)
               } catch (b) {}
               return c
           }
           function uc(a) {
               var c = a && a.parentNode;
               c && c.removeChild(a)
           }
           function Sb(a) {
               return a ? a.innerText || "" : ""
           }
           function uf(a) {
               if (ka(a))
                   return !1;
               a = a.nodeType;
               return 3 === a || 8 === a
           }
           function ob(a, c) {
               if (a) {
                   var b = zj ? zj.call(a) : ("" + a).replace(Ai, "");
                   return c && b.length > c ? b.substring(0, c) : b
               }
               return ""
           }
           function Tb(a) {
               var c;
               if (c = n(a, "XMLHttpRequest"))
                   if (c = "withCredentials"in new a.XMLHttpRequest) {
                       a: {
                           if (aq.test(a.location.host) && a.opera && T(a.opera.version) && (c = a.opera.version(),
                           "string" === typeof c && "12" === c.split(".")[0])) {
                               c = !0;
                               break a
                           }
                           c = !1
                       }
                       c = !c
                   }
               return c ? w(a, bq) : !1
           }
           function bq(a, c, b) {
               var d, e = new a.XMLHttpRequest, f = b.ba, g = y(b.jd ? (d = {},
               d.wmode = "7",
               d) : {}, b.Pb);
               return new K(function(h, k) {
                   e.open(b.Gg || "GET", c + "?" + $c(g), !0);
                   e.withCredentials = !1 !== b.Ig;
                   b.tb && (e.timeout = b.tb);
                   uj(Ba, eb(function(m) {
                       e.setRequestHeader(m[0], m[1])
                   }))(b.Ob);
                   var l = F([a, e, Ya(b.na), b.jd, b.nj, h, k], cq);
                   e.onreadystatechange = l;
                   try {
                       e.send(f)
                   } catch (m) {}
               }
               )
           }
           function cq(a, c, b, d, e, f, g, h) {
               if (4 === c.readyState)
                   if (200 === c.status || e || g(b),
                   e)
                       200 === c.status ? f(c.responseText) : g(Cc("http." + c.status + ".st." + c.statusText + ".rt." + ("" + c.responseText).substring(0, 50)));
                   else {
                       e = null;
                       if (d)
                           try {
                               (e = Bb(a, c.responseText)) || g(b)
                           } catch (k) {
                               g(b)
                           }
                       f(e)
                   }
               return h
           }
           function qj(a, c, b) {
               (b = $c(b)) && (a += "?" + b);
               c.ba && (a += (b ? "&" : "?") + c.ba);
               return a
           }
           function ib(a, c, b) {
               try {
                   return a.JSON.stringify(c, null, b)
               } catch (d) {
                   return null
               }
           }
           function $c(a) {
               return a ? t(Ba, bd(function(c, b) {
                   var d = b[0]
                     , e = b[1];
                   V(e) || ka(e) || c.push(d + "=" + Pd(e));
                   return c
               }, []), od("&"))(a) : ""
           }
           function dq(a) {
               return a ? t(eb(function(c) {
                   c = c.split("=");
                   var b = c[1];
                   return [c[0], ka(b) ? void 0 : mj(b)]
               }), bd(function(c, b) {
                   c[b[0]] = b[1];
                   return c
               }, {}))(a.split("&")) : {}
           }
           function mj(a) {
               var c = "";
               try {
                   c = decodeURIComponent(a)
               } catch (b) {}
               return c
           }
           function Pd(a) {
               try {
                   return encodeURIComponent(a)
               } catch (c) {}
               a = I("", W(function(c) {
                   return 55296 >= c.charCodeAt(0)
               }, a.split("")));
               return encodeURIComponent(a)
           }
           function lg() {
               var a = ya(arguments);
               return pb(Ya(a))
           }
           function Ya(a) {
               var c = "";
               da(a) ? c = I(".", a) : Ga(a) && (c = a);
               return Cc("err.kn(" + ra.Va + ")" + c)
           }
           function eq(a) {
               this.message = a
           }
           function Aj(a, c, b, d, e) {
               var f = a.addEventListener && a.removeEventListener
                 , g = !f && a.attachEvent && a.detachEvent;
               if (f || g)
                   if (e = e ? f ? "removeEventListener" : "detachEvent" : f ? "addEventListener" : "attachEvent",
                   f)
                       a[e](c, b, d);
                   else
                       a[e]("on" + c, b)
           }
           function R(a) {
               return L(function(c, b) {
                   var d = n(a, "location." + b);
                   c[b] = d ? "" + d : "";
                   return c
               }, {}, fq)
           }
           function bh(a) {
               var c = a.match(Bj);
               if (c) {
                   a = c[1];
                   if (c = c[2])
                       return G(c, mg) ? c : !1;
                   if (a)
                       return mg[0]
               }
               return !1
           }
           function gq(a, c, b, d, e) {
               var f = "object" === typeof a ? a : {
                   id: a,
                   $: d,
                   fc: e,
                   O: b
               };
               a = L(function(g, h) {
                   var k = h[1]
                     , l = k.Pi;
                   k = f[k.Vf];
                   g[h[0]] = l ? l(k) : k;
                   return g
               }, {}, Ba(c));
               Cj(a, a.O || {});
               return a
           }
           function hq(a, c) {
               return L(function(b, d) {
                   b[c[d[0]].Vf] = d[1];
                   return b
               }, {}, Ba(a))
           }
           function Dj(a) {
               a = P(a);
               return dc[a] && dc[a].Gj
           }
           function Cj(a, c) {
               var b = P(a)
                 , d = n(c, "__ym.turbo_page")
                 , e = n(c, "__ym.turbo_page_id");
               dc[b] || (dc[b] = {});
               if (d || e)
                   dc[b].Gj = d,
                   dc[b].Hj = e
           }
           function Ej(a) {
               return Ae(a) || md(a) || /mobile/i.test(sb(a)) || !V(n(a, "orientation"))
           }
           function Xf(a) {
               return G("prerender", z(w(n(a, "document"), n), ["webkitVisibilityState", "visibilityState"]))
           }
           function Ra(a, c, b) {
               var d = V(b);
               V(c) && d ? (d = 1,
               c = 1073741824) : d ? d = 1 : (d = c,
               c = b);
               return a.Math.floor(a.Math.random() * (c - d)) + d
           }
           function gl(a) {
               try {
                   return parseInt(a, 10)
               } catch (c) {
                   return null
               }
           }
           function Td(a, c) {
               return a.isFinite(c) && !a.isNaN(c) && "[object Number]" === ng(c)
           }
           function iq(a) {
               for (var c = [], b = a.length - 1; 0 <= b; --b)
                   c[a.length - 1 - b] = a[b];
               return c
           }
           function Wa(a, c) {
               A(t(N, na("push", a)), c);
               return a
           }
           function og(a, c) {
               return Array.prototype.sort.call(c, a)
           }
           function pa(a) {
               return a ? da(a) ? a : Be ? Be(a) : "number" === typeof a.length && 0 <= a.length ? Fj(a) : [] : []
           }
           function pg(a, c, b) {
               return b ? a : c
           }
           function jq(a, c) {
               if (!ud(a))
                   return !0;
               try {
                   c.call({
                       0: !0,
                       length: -Math.pow(2, 32) + 1
                   }, function() {
                       throw 1;
                   })
               } catch (b) {
                   return !1
               }
               return !0
           }
           function kq(a, c) {
               for (var b = "", d = 0; d < c; d += 1)
                   b += a;
               return b
           }
           function lq(a, c) {
               for (var b = 0; b < c.length; b += 1)
                   if (a.call(c, c[b], b))
                       return c[b]
           }
           function Gj(a) {
               return V(a) ? [] : Bd(function(c, b) {
                   c.push([b, a[b]]);
                   return c
               }, [], Hj(a))
           }
           function mq(a, c) {
               return Bd(function(b, d, e) {
                   d = a(d, e);
                   return b.concat(da(d) ? d : [d])
               }, [], c)
           }
           function Ij(a, c) {
               return Bd(function(b, d, e) {
                   b.push(a(d, e));
                   return b
               }, [], c)
           }
           function nq() {
               var a = ya(arguments)
                 , c = a[0];
               for (a = a.slice(1); a.length; ) {
                   var b = a.shift(), d;
                   for (d in b)
                       nd(b, d) && (c[d] = b[d]);
                   nd(b, "toString") && (c.toString = b.toString)
               }
               return c
           }
           function Hj(a) {
               var c = [], b;
               for (b in a)
                   nd(a, b) && c.push(b);
               return c
           }
           function oq(a, c) {
               return 1 <= Jj(la(a), c).length
           }
           function Jj(a, c) {
               return Bd(function(b, d, e) {
                   a(d, e) && b.push(d);
                   return b
               }, [], c)
           }
           function da(a) {
               if (Cd)
                   return Cd(a);
               (Cd = Ia(Array.isArray, "isArray")) || (Cd = pq);
               return Cd(a)
           }
           function Mf(a, c, b) {
               try {
                   if (T(c)) {
                       var d = ya(arguments).slice(3);
                       ka(b) ? c.apply(void 0, d) : C.apply(void 0, va([c, b], d))()
                   }
               } catch (e) {
                   ue(a, w(e, pb), 0)
               }
           }
           function pb(a) {
               throw a;
           }
           function ue(a, c, b) {
               return bc("setTimeout", a)(c, b)
           }
           function ja(a, c) {
               return bc("clearTimeout", a)(c)
           }
           function Od() {
               return []
           }
           function Qc() {
               return {}
           }
           function bc(a, c) {
               var b = n(c, a)
                 , d = n(c, "constructor.prototype." + a) || b;
               try {
                   if (d && d.apply)
                       return function() {
                           return d.apply(c, arguments)
                       }
               } catch (e) {
                   return b
               }
               return d
           }
           function Fb(a, c) {
               return function() {
                   var b = ya(arguments)
                     , d = b[0];
                   b = b.slice(1);
                   var e = O(d)
                     , f = e.o("m882", {})
                     , g = n(f, a);
                   g || (g = v(c),
                   f[a] = g,
                   e.C("m882", f));
                   return g.apply(void 0, va([d], b))
               }
           }
           function Ic(a, c) {
               void 0 === c && (c = {});
               if (!a || 1 > a.length)
                   return c;
               L(function(b, d, e) {
                   if (e === a.length - 1)
                       return b;
                   e === a.length - 2 ? b[d] = a[e + 1] : b[d] || (b[d] = {});
                   return b[d]
               }, c, a);
               return c
           }
           function n(a, c) {
               return a ? L(function(b, d) {
                   if (ka(b))
                       return b;
                   try {
                       return b[d]
                   } catch (e) {}
                   return null
               }, a, c.split(".")) : null
           }
           function ec(a) {
               a = a.Ya = a.Ya || {};
               var c = a._metrika = a._metrika || {};
               return {
                   Ta: function(b, d) {
                       qg.call(c, b) || (c[b] = d);
                       return this
                   },
                   C: function(b, d) {
                       c[b] = d;
                       return this
                   },
                   o: function(b, d) {
                       var e = c[b];
                       return qg.call(c, b) || V(d) ? e : d
                   }
               }
           }
           function nd(a, c) {
               return ka(a) ? !1 : qg.call(a, c)
           }
           function v(a, c) {
               var b = []
                 , d = [];
               var e = c ? c : N;
               return function() {
                   var f = ya(arguments)
                     , g = e.apply(void 0, f)
                     , h = Kj(g, d);
                   if (-1 !== h)
                       return b[h];
                   f = a.apply(void 0, f);
                   b.push(f);
                   d.push(g);
                   return f
               }
           }
           function Lb(a) {
               if (rg)
                   return rg;
               var c = !1;
               try {
                   c = [].indexOf && 0 === [void 0].indexOf(void 0)
               } catch (d) {}
               var b = a.Array && a.Array.prototype && Ia(a.Array.prototype.indexOf, "indexOf");
               return rg = a = c && b ? function(d, e) {
                   return b.call(e, d)
               }
               : qq
           }
           function qq(a, c) {
               for (var b = 0; b < c.length; b += 1)
                   if (c[b] === a)
                       return b;
               return -1
           }
           function Ha(a, c) {
               return c ? a(c) : a()
           }
           function t() {
               var a = ya(arguments)
                 , c = a.shift();
               return function() {
                   var b = c.apply(void 0, arguments);
                   return L(Lj, b, a)
               }
           }
           function bd(a, c) {
               return F([a, c], L)
           }
           function Oa(a) {
               return na("test", a)
           }
           function na(a, c) {
               return C(c[a], c)
           }
           function w(a, c) {
               return F([a], c)
           }
           function F(a, c) {
               return C.apply(void 0, va([c, null], a))
           }
           function rq() {
               var a = ya(arguments)
                 , c = a[0]
                 , b = a[1]
                 , d = a.slice(2);
               return function() {
                   var e = va(d, ya(arguments));
                   if (Function.prototype.call)
                       return Function.prototype.call.apply(c, va([b], e));
                   if (b) {
                       for (var f = "_b"; b[f]; )
                           f += "_" + f.length;
                       b[f] = c;
                       e = b[f] && Mj(f, e, b);
                       delete b[f];
                       return e
                   }
                   return Mj(c, e)
               }
           }
           function Mj(a, c, b) {
               void 0 === c && (c = []);
               b = b || {};
               var d = c.length
                 , e = a;
               T(e) && (e = "d",
               b[e] = a);
               var f;
               d ? 1 === d ? f = b[e](c[0]) : 2 === d ? f = b[e](c[0], c[1]) : 3 === d ? f = b[e](c[0], c[1], c[2]) : 4 === d && (f = b[e](c[0], c[1], c[2], c[3])) : f = b[e]();
               return f
           }
           function nb(a) {
               return !Na(a) && !V(a) && "[object Object]" === ng(a)
           }
           function ka(a) {
               return V(a) || Na(a)
           }
           function T(a) {
               return "function" === typeof a
           }
           function cc(a) {
               return function(c) {
                   return function(b) {
                       return a(b, c)
                   }
               }
           }
           function ha(a) {
               return function(c) {
                   return function(b) {
                       return a(c, b)
                   }
               }
           }
           function Lj(a, c) {
               return c(a)
           }
           function sq(a, c) {
               for (var b = "", d = 0; d < c.length; d += 1)
                   b += "" + (d ? a : "") + c[d];
               return b
           }
           function Bo(a) {
               return a.replace(/\^/g, "\\^").replace(/\$/g, "\\$").replace(df, "\\.").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\|/g, "\\|").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\?/g, "\\?").replace(/\*/g, "\\*").replace(/\+/g, "\\+").replace(/\{/g, "\\{").replace(/\}/g, "\\}")
           }
           function jc(a, c) {
               return !(!a || -1 === ef(a, c))
           }
           function ef(a, c) {
               if (Nj)
                   var b = Nj.call(a, c);
               else
                   a: {
                       b = 0;
                       for (var d = a.length - c.length, e = 0; e < a.length; e += 1) {
                           b = a[e] === c[b] ? b + 1 : 0;
                           if (b === c.length) {
                               b = e - c.length + 1;
                               break a
                           }
                           if (!b && e > d)
                               break
                       }
                       b = -1
                   }
               return b
           }
           function Ga(a) {
               return "string" === typeof a
           }
           function ng(a) {
               return Object.prototype.toString.call(a)
           }
           function ya(a) {
               if (Be)
                   try {
                       return Be(a)
                   } catch (c) {}
               return Fj(a)
           }
           function Fj(a) {
               for (var c = a.length, b = [], d = 0; d < c; d += 1)
                   b.push(a[d]);
               return b
           }
           function sg(a, c) {
               sg = Object.setPrototypeOf || {
                   __proto__: []
               }instanceof Array && function(b, d) {
                   b.__proto__ = d
               }
               || function(b, d) {
                   for (var e in d)
                       d.hasOwnProperty(e) && (b[e] = d[e])
               }
               ;
               return sg(a, c)
           }
           function Bd(a, c, b) {
               for (var d = 0, e = b.length; d < e; )
                   c = a(c, b[d], d),
                   d += 1;
               return c
           }
           function Ia(a, c) {
               return Da(c, a) && a
           }
           function Da(a, c) {
               var b = Ce(a, c);
               c && !b && tg.push([a, c]);
               return b
           }
           function Ce(a, c) {
               if (!c || "function" !== typeof c)
                   return !1;
               try {
                   var b = "" + c
               } catch (h) {
                   return !1
               }
               var d = b.length;
               if (d > 35 + a.length)
                   return !1;
               for (var e = d - 13, f = 0, g = 8; g < d; g += 1) {
                   f = "[native code]"[f] === b[g] || 7 === f && "-" === b[g] ? f + 1 : 0;
                   if (12 === f)
                       return !0;
                   if (!f && g > e)
                       break
               }
               return !1
           }
           function B() {}
           function Rb(a) {
               return !a
           }
           function vb(a, c) {
               return c
           }
           function N(a) {
               return a
           }
           function Fa(a, c) {
               function b() {
                   this.constructor = a
               }
               sg(a, c);
               a.prototype = null === c ? Object.create(c) : (b.prototype = c.prototype,
               new b)
           }
           function va() {
               for (var a = 0, c = 0, b = arguments.length; c < b; c++)
                   a += arguments[c].length;
               a = Array(a);
               var d = 0;
               for (c = 0; c < b; c++)
                   for (var e = arguments[c], f = 0, g = e.length; f < g; f++,
                   d++)
                       a[d] = e[f];
               return a
           }
           function vc(a) {
               a = "" + a;
               for (var c = 2166136261, b = a.length, d = 0; d < b; d += 1)
                   c ^= a.charCodeAt(d),
                   c += (c << 1) + (c << 4) + (c << 7) + (c << 8) + (c << 24);
               return c >>> 0
           }
           function tq() {}
           function uq(a, c) {
               return function() {
                   a.apply(c, arguments)
               }
           }
           function za(a) {
               if (!(this instanceof za))
                   throw new TypeError("Promises must be constructed via new");
               if ("function" !== typeof a)
                   throw new TypeError("not a function");
               this.Ba = 0;
               this.Te = !1;
               this.Ha = void 0;
               this.wb = [];
               Oj(a, this)
           }
           function Pj(a, c) {
               for (; 3 === a.Ba; )
                   a = a.Ha;
               0 === a.Ba ? a.wb.push(c) : (a.Te = !0,
               za.Ue(function() {
                   var b = 1 === a.Ba ? c.Vi : c.Zi;
                   if (null === b)
                       (1 === a.Ba ? ug : Dd)(c.Qa, a.Ha);
                   else {
                       try {
                           var d = b(a.Ha)
                       } catch (e) {
                           Dd(c.Qa, e);
                           return
                       }
                       ug(c.Qa, d)
                   }
               }))
           }
           function ug(a, c) {
               try {
                   if (c === a)
                       throw new TypeError("A promise cannot be resolved with itself.");
                   if (c && ("object" === typeof c || "function" === typeof c)) {
                       var b = c.then;
                       if (c instanceof za) {
                           a.Ba = 3;
                           a.Ha = c;
                           vg(a);
                           return
                       }
                       if ("function" === typeof b) {
                           Oj(uq(b, c), a);
                           return
                       }
                   }
                   a.Ba = 1;
                   a.Ha = c;
                   vg(a)
               } catch (d) {
                   Dd(a, d)
               }
           }
           function Dd(a, c) {
               a.Ba = 2;
               a.Ha = c;
               vg(a)
           }
           function vg(a) {
               2 === a.Ba && 0 === a.wb.length && za.Ue(function() {
                   a.Te || za.Wg(a.Ha)
               });
               for (var c = 0, b = a.wb.length; c < b; c++)
                   Pj(a, a.wb[c]);
               a.wb = null
           }
           function vq(a, c, b) {
               this.Vi = "function" === typeof a ? a : null;
               this.Zi = "function" === typeof c ? c : null;
               this.Qa = b
           }
           function Oj(a, c) {
               var b = !1;
               try {
                   a(function(d) {
                       b || (b = !0,
                       ug(c, d))
                   }, function(d) {
                       b || (b = !0,
                       Dd(c, d))
                   })
               } catch (d) {
                   b || (b = !0,
                   Dd(c, d))
               }
           }
           function Bb(a, c) {
               if (!c)
                   return null;
               try {
                   return a.JSON.parse(c)
               } catch (b) {
                   return null
               }
           }
           function kj(a, c, b, d, e) {
               void 0 === e && (e = !1);
               return eg(a, c, "", -100, b, d, e)
           }
           function Gc(a, c, b) {
               void 0 === c && (c = "_ym_");
               void 0 === b && (b = "");
               var d = wq(a)
                 , e = 1 === (d || "").split(".").length ? d : "." + d
                 , f = b ? "_" + b : "";
               return {
                   oc: function(g, h, k) {
                       kj(a, "" + c + g + f, h || e, k);
                       return this
                   },
                   o: function(g) {
                       return Yd(a, "" + c + g + f)
                   },
                   C: function(g, h, k, l, m) {
                       eg(a, "" + c + g + f, h, k, l || e, m);
                       return this
                   }
               }
           }
           function Lc(a, c) {
               var b = xq(a);
               return b ? (b.href = c,
               {
                   protocol: b.protocol,
                   host: b.host,
                   port: b.port,
                   hostname: b.hostname,
                   hash: b.hash,
                   search: b.search,
                   query: b.search.replace(/^\?/, ""),
                   pathname: b.pathname || "/",
                   path: (b.pathname || "/") + b.search,
                   href: b.href
               }) : {}
           }
           function kb(a, c) {
               a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
               c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
               var b = [0, 0, 0, 0];
               b[3] += a[3] * c[3];
               b[2] += b[3] >>> 16;
               b[3] &= 65535;
               b[2] += a[2] * c[3];
               b[1] += b[2] >>> 16;
               b[2] &= 65535;
               b[2] += a[3] * c[2];
               b[1] += b[2] >>> 16;
               b[2] &= 65535;
               b[1] += a[1] * c[3];
               b[0] += b[1] >>> 16;
               b[1] &= 65535;
               b[1] += a[2] * c[2];
               b[0] += b[1] >>> 16;
               b[1] &= 65535;
               b[1] += a[3] * c[1];
               b[0] += b[1] >>> 16;
               b[1] &= 65535;
               b[0] += a[0] * c[3] + a[1] * c[2] + a[2] * c[1] + a[3] * c[0];
               b[0] &= 65535;
               return [b[0] << 16 | b[1], b[2] << 16 | b[3]]
           }
           function fc(a, c) {
               a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
               c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
               var b = [0, 0, 0, 0];
               b[3] += a[3] + c[3];
               b[2] += b[3] >>> 16;
               b[3] &= 65535;
               b[2] += a[2] + c[2];
               b[1] += b[2] >>> 16;
               b[2] &= 65535;
               b[1] += a[1] + c[1];
               b[0] += b[1] >>> 16;
               b[1] &= 65535;
               b[0] += a[0] + c[0];
               b[0] &= 65535;
               return [b[0] << 16 | b[1], b[2] << 16 | b[3]]
           }
           function Rc(a, c) {
               c %= 64;
               if (32 === c)
                   return [a[1], a[0]];
               if (32 > c)
                   return [a[0] << c | a[1] >>> 32 - c, a[1] << c | a[0] >>> 32 - c];
               c -= 32;
               return [a[1] << c | a[0] >>> 32 - c, a[0] << c | a[1] >>> 32 - c]
           }
           function gb(a, c) {
               c %= 64;
               return 0 === c ? a : 32 > c ? [a[0] << c | a[1] >>> 32 - c, a[1] << c] : [a[1] << c - 32, 0]
           }
           function qa(a, c) {
               return [a[0] ^ c[0], a[1] ^ c[1]]
           }
           function Qj(a) {
               a = qa(a, [0, a[0] >>> 1]);
               a = kb(a, [4283543511, 3981806797]);
               a = qa(a, [0, a[0] >>> 1]);
               a = kb(a, [3301882366, 444984403]);
               return a = qa(a, [0, a[0] >>> 1])
           }
           function yq(a, c) {
               void 0 === c && (c = 210);
               var b = a || ""
                 , d = c || 0
                 , e = b.length - b.length % 16;
               d = {
                   T: [0, d],
                   V: [0, d]
               };
               for (var f = 0; f < e; f += 16) {
                   var g = d
                     , h = [a.charCodeAt(f + 4) & 255 | (a.charCodeAt(f + 5) & 255) << 8 | (a.charCodeAt(f + 6) & 255) << 16 | (a.charCodeAt(f + 7) & 255) << 24, a.charCodeAt(f) & 255 | (a.charCodeAt(f + 1) & 255) << 8 | (a.charCodeAt(f + 2) & 255) << 16 | (a.charCodeAt(f + 3) & 255) << 24]
                     , k = [a.charCodeAt(f + 12) & 255 | (a.charCodeAt(f + 13) & 255) << 8 | (a.charCodeAt(f + 14) & 255) << 16 | (a.charCodeAt(f + 15) & 255) << 24, a.charCodeAt(f + 8) & 255 | (a.charCodeAt(f + 9) & 255) << 8 | (a.charCodeAt(f + 10) & 255) << 16 | (a.charCodeAt(f + 11) & 255) << 24];
                   h = kb(h, De);
                   h = Rc(h, 31);
                   h = kb(h, Ee);
                   g.T = qa(g.T, h);
                   g.T = Rc(g.T, 27);
                   g.T = fc(g.T, g.V);
                   g.T = fc(kb(g.T, [0, 5]), [0, 1390208809]);
                   k = kb(k, Ee);
                   k = Rc(k, 33);
                   k = kb(k, De);
                   g.V = qa(g.V, k);
                   g.V = Rc(g.V, 31);
                   g.V = fc(g.V, g.T);
                   g.V = fc(kb(g.V, [0, 5]), [0, 944331445])
               }
               e = b.length % 16;
               f = b.length - e;
               g = [0, 0];
               h = [0, 0];
               switch (e) {
               case 15:
                   h = qa(h, gb([0, b.charCodeAt(f + 14)], 48));
               case 14:
                   h = qa(h, gb([0, b.charCodeAt(f + 13)], 40));
               case 13:
                   h = qa(h, gb([0, b.charCodeAt(f + 12)], 32));
               case 12:
                   h = qa(h, gb([0, b.charCodeAt(f + 11)], 24));
               case 11:
                   h = qa(h, gb([0, b.charCodeAt(f + 10)], 16));
               case 10:
                   h = qa(h, gb([0, b.charCodeAt(f + 9)], 8));
               case 9:
                   h = qa(h, [0, b.charCodeAt(f + 8)]),
                   h = kb(h, Ee),
                   h = Rc(h, 33),
                   h = kb(h, De),
                   d.V = qa(d.V, h);
               case 8:
                   g = qa(g, gb([0, b.charCodeAt(f + 7)], 56));
               case 7:
                   g = qa(g, gb([0, b.charCodeAt(f + 6)], 48));
               case 6:
                   g = qa(g, gb([0, b.charCodeAt(f + 5)], 40));
               case 5:
                   g = qa(g, gb([0, b.charCodeAt(f + 4)], 32));
               case 4:
                   g = qa(g, gb([0, b.charCodeAt(f + 3)], 24));
               case 3:
                   g = qa(g, gb([0, b.charCodeAt(f + 2)], 16));
               case 2:
                   g = qa(g, gb([0, b.charCodeAt(f + 1)], 8));
               case 1:
                   g = qa(g, [0, b.charCodeAt(f)]),
                   g = kb(g, De),
                   g = Rc(g, 31),
                   g = kb(g, Ee),
                   d.T = qa(d.T, g)
               }
               d.T = qa(d.T, [0, b.length]);
               d.V = qa(d.V, [0, b.length]);
               d.T = fc(d.T, d.V);
               d.V = fc(d.V, d.T);
               d.T = Qj(d.T);
               d.V = Qj(d.V);
               d.T = fc(d.T, d.V);
               d.V = fc(d.V, d.T);
               return ("00000000" + (d.T[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.T[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.V[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.V[1] >>> 0).toString(16)).slice(-8)
           }
           function Rj(a) {
               return (a = R(a).hash.split("#")[1]) ? a.split("?")[0] : ""
           }
           function zq(a, c) {
               var b = Rj(a);
               Sj = Lp(a, function() {
                   var d = Rj(a);
                   d !== b && (c(),
                   b = d)
               }, 200, "t.h");
               return C(Kp, null, a, Sj)
           }
           function Aq(a, c, b) {
               var d, e, f = c.$, g = c.Qe, h = c.vc, k = O(a), l = xa((d = {},
               d.wh = "1",
               d.pv = "1",
               d));
               wg(f) && a.Vg && a.Vg.$j && l.C("ad", "1");
               g && l.C("ut", "1");
               f = k.o("lastReferrer");
               d = R(a).href;
               h = {
                   G: (e = {},
                   e["page-url"] = h || d,
                   e["page-ref"] = f,
                   e),
                   J: l
               };
               b(h, c)["catch"](D(a, "g.s"));
               k.C("lastReferrer", d)
           }
           function Bq(a, c) {
               if (ze(a))
                   return ja(a, c);
               xg[c] = !0;
               return ja(a, Fe[c] || 0)
           }
           function Cq(a, c, b) {
               function d() {
                   xg[u] = !0;
                   f(!1);
                   c()
               }
               function e() {
                   ja(a, Fe[u]);
                   if (xg[u])
                       f(!1);
                   else {
                       var J = Math.max(0, b - (m ? p : p + h(Y) - q));
                       J ? Fe[u] = X(a, d, J, "u.t.d.c") : d()
                   }
               }
               function f(J) {
                   A(function(M) {
                       var Z = M[0]
                         , ma = M[1];
                       M = M[2];
                       J ? r.D(Z, ma, M) : r.Wb(Z, ma, M)
                   }, x)
               }
               var g = w(!1, f);
               if (ze(a))
                   return {
                       id: X(a, c, b, "u.t.d"),
                       ef: g
                   };
               var h = ca(a)
                 , k = !1
                 , l = !1
                 , m = !0
                 , p = 0
                 , q = h(Y)
                 , r = ia(a)
                 , u = Tj;
               Tj += 1;
               Fe[u] = 0;
               var x = [[a, ["blur"], function() {
                   m = k = l = !0;
                   p += h(Y) - q;
                   q = h(Y);
                   e()
               }
               ], [a, ["focus"], function() {
                   k || l || (p = 0);
                   q = h(Y);
                   k = l = !0;
                   m = !1;
                   e()
               }
               ], [a.document, ["click", "mousemove", "keydown", "scroll"], function() {
                   l || (k = !0,
                   m = !1,
                   l = !0,
                   e())
               }
               ]];
               f(!0);
               e();
               return {
                   id: u,
                   ef: g
               }
           }
           function po(a, c) {
               var b, d = yc(c), e = ra.dc, f = ec(a);
               if (d && qc("ym-advanced-informer", d)) {
                   var g = f.o("ifc", 0) + 1;
                   f.C("ifc", g);
                   g = d.getAttribute("data-lang");
                   var h = Ca(d.getAttribute("data-cid") || "");
                   if (h || 0 === h)
                       (e = n(a, "Ya." + e + ".informer")) ? e((b = {},
                       b.i = d,
                       b.id = h,
                       b.lang = g,
                       b)) : f.C("ib", !0),
                       b = c || window.event,
                       b.preventDefault ? b.preventDefault() : b.returnValue = !1
               }
           }
           function Ge(a, c, b, d) {
               return function() {
                   var e = Aa(a, c)
                     , f = ya(arguments);
                   if (e)
                       return d.apply(void 0, f)
               }
           }
           function Dq(a, c, b, d) {
               var e = Eq[b];
               return e ? function() {
                   var f = ya(arguments);
                   try {
                       var g = d.apply(void 0, f);
                       var h = O(a);
                       h.Ta("mt", {});
                       var k = h.o("mt")
                         , l = k[e];
                       k[e] = l ? l + 1 : 1
                   } catch (m) {
                       pb(m)
                   }
                   return g
               }
               : d
           }
           function Ed(a, c, b) {
               var d = c.getAttribute("itemtype");
               b = ub('[itemprop~="' + b + '"]', c);
               return d ? W(function(e) {
                   return e.parentNode && Xb("[itemtype]", a, e.parentNode) === c
               }, b) : b
           }
           function bb(a, c, b) {
               return (a = Ed(a, c, b)) && a.length ? a[0] : null
           }
           function Ta(a) {
               if (!a)
                   return "";
               a = da(a) ? a : [a];
               return a.length ? a[0].getAttribute("content") || Sb(a[0]) : ""
           }
           function Uj(a) {
               return a ? a.attributes && a.getAttribute("datetime") ? a.getAttribute("datetime") : Ta(a) : ""
           }
           function jd(a, c, b) {
               a = c && (jc(c.className, "ym-disable-keys") || jc(c.className, "-metrika-nokeys"));
               return b && c ? a || !!Wp(["ym-disable-keys", "-metrika-nokeys"], c).length : a
           }
           function sf(a, c) {
               return xe(c) ? "password" === c.type || c.name && G(c.name.toLowerCase(), Vj) || c.id && G(c.id.toLowerCase(), Vj) : !1
           }
           function Wj(a, c) {
               var b = Math.max(0, Math.min(c, 65535));
               Wa(a, [b >> 8, b & 255])
           }
           function Ob(a, c) {
               Wa(a, [c & 255])
           }
           function fb(a, c, b) {
               return -1 !== Lb(a)(b, Fq) ? (Ob(c, b),
               !1) : !0
           }
           function S(a, c) {
               for (var b = Math.max(0, c | 0); 127 < b; )
                   Wa(a, [b & 127 | 128]),
                   b >>= 7;
               Wa(a, [b])
           }
           function yg(a, c) {
               S(a, c.length);
               for (var b = 0; b < c.length; b += 1)
                   S(a, c.charCodeAt(b))
           }
           function zg(a, c) {
               var b = c;
               255 < b.length && (b = b.substr(0, 255));
               a.push(b.length);
               for (var d = 0; d < b.length; d += 1)
                   Wj(a, b.charCodeAt(d))
           }
           function Gq(a, c) {
               var b = [];
               if (fb(a, b, 27))
                   return [];
               S(b, c);
               return b
           }
           function Hq(a, c) {
               var b = Ea(c);
               if (!b)
                   return c[Qa] = -1,
                   null;
               var d = +c[Qa];
               if (!isFinite(d) || 0 >= d)
                   return null;
               if (c.attributes)
                   for (var e = c; e; ) {
                       if (e.attributes.gk)
                           return null;
                       e = e.parentElement
                   }
               e = 64;
               var f = ve(a, c)
                 , g = f && f[Qa] ? f[Qa] : 0;
               0 > g && (g = 0);
               b = (b || "").toUpperCase();
               var h = Iq()[b];
               h || (e |= 2);
               var k = wj(a, c);
               k || (e |= 4);
               var l = zf(a, c);
               (f = f ? zf(a, f) : null) && l[0] === f[0] && l[1] === f[1] && l[2] === f[2] && l[3] === f[3] && (e |= 8);
               pc[d].Wf = l[0] + "x" + l[1];
               pc[d].size = l[2] + "x" + l[3];
               c.id && "string" === typeof c.id && (e |= 32);
               f = [];
               if (fb(a, f, 1))
                   return null;
               S(f, d);
               Ob(f, e);
               S(f, g);
               h ? Ob(f, h) : zg(f, b);
               k && S(f, k);
               e & 8 || (S(f, l[0]),
               S(f, l[1]),
               S(f, l[2]),
               S(f, l[3]));
               e & 32 && zg(f, c.id);
               Ob(f, 0);
               return f
           }
           function Jq(a, c) {
               var b = c[Qa];
               if (!b || 0 > b || !xf(c) || !c.form || $h(a, c.form))
                   return [];
               var d = yj(a, c.form);
               if (0 > d)
                   return [];
               if (xe(c)) {
                   var e = {
                       text: 0,
                       color: 0,
                       nc: 0,
                       nk: 0,
                       "datetime-local": 0,
                       email: 0,
                       Tf: 0,
                       Jk: 0,
                       search: 0,
                       Mk: 0,
                       time: 0,
                       url: 0,
                       month: 0,
                       Ok: 0,
                       password: 2,
                       Ik: 3,
                       jk: 4,
                       file: 6,
                       image: 7
                   };
                   e = e[c.type]
               } else {
                   e = {
                       dk: 1,
                       ek: 5
                   };
                   var f = Ea(c);
                   e = V(f) ? "" : e[f]
               }
               if ("number" !== typeof e)
                   return [];
               f = -1;
               for (var g = c.form.elements, h = g.length, k = 0, l = 0; k < h; k += 1)
                   if (g[k].name === c.name) {
                       if (g[k] === c) {
                           f = l;
                           break
                       }
                       l += 1
                   }
               if (0 > f)
                   return [];
               g = [];
               if (fb(a, g, 7))
                   return [];
               S(g, b);
               S(g, d);
               S(g, e);
               yg(g, c.name || "");
               S(g, f);
               return g
           }
           function Kq(a, c, b) {
               var d = yj(a, b);
               if (0 > d)
                   return [];
               var e = b.elements
                 , f = e.length;
               b = [];
               for (var g = 0; g < f; g += 1)
                   if (!xj(e[g])) {
                       var h = e[g][Qa];
                       h && 0 < h && b.push(h)
                   }
               e = [];
               if (fb(a, e, 11))
                   return [];
               S(e, c);
               S(e, d);
               S(e, b.length);
               for (a = 0; a < b.length; a += 1)
                   S(e, b[a]);
               return e
           }
           function oc(a, c, b) {
               void 0 === b && (b = []);
               for (var d = []; c && !Lm(a, c, b); c = ve(a, c))
                   d.push(c);
               A(function(e) {
                   pc.ud += 1;
                   var f = pc.ud;
                   e[Qa] = f;
                   pc[f] = {};
                   f = Hq(a, e);
                   e = Jq(a, e);
                   f && e && (Wa(b, f),
                   Wa(b, e))
               }, Lq(d));
               return b
           }
           function Mq(a) {
               var c = a.ja;
               if (!id || c && !c.fromElement)
                   return Yh(a)
           }
           function Nq(a) {
               var c = a.ja;
               if (c && !c.toElement)
                   return yf(a)
           }
           function Xj(a) {
               var c = yc(a.ja);
               if (c && Xd(c)) {
                   var b = Xh(a, c);
                   var d = rb(a.l)
                     , e = [];
                   fb(a.l, e, 17) ? a = [] : (S(e, d),
                   S(e, c[Qa]),
                   a = e);
                   return va(b, a)
               }
           }
           function Yj(a) {
               var c = a.l
                 , b = a.ja.target;
               if (b && Xd(b)) {
                   c = oc(c, b);
                   var d = rb(a.l)
                     , e = [];
                   fb(a.l, e, 18) ? a = [] : (S(e, d),
                   S(e, b[Qa]),
                   a = e);
                   return va(c, a)
               }
           }
           function Zj(a) {
               var c = a.l
                 , b = yc(a.ja);
               if (!b || sf(c, b) || jd(c, b))
                   return [];
               if (xf(b)) {
                   var d = O(c).o("isEU")
                     , e = hd(c, b, d)
                     , f = e.kb;
                   d = e.Td;
                   e = e.Dd;
                   if (ye(b))
                       var g = b.checked;
                   else
                       g = b.value,
                       g = f ? I("", ak(g.split(""))) : g;
                   c = oc(c, b);
                   f = rb(a.l);
                   d = d && !e;
                   e = [];
                   fb(a.l, e, 39) ? a = [] : (S(e, f),
                   S(e, b[Qa]),
                   zg(e, String(g)),
                   Ob(e, d ? 1 : 0),
                   a = e);
                   return va(c, a)
               }
           }
           function He(a) {
               var c = a.l
                 , b = a.ja
                 , d = yc(b);
               if (!d || "SCROLLBAR" === d.nodeName)
                   return [];
               var e = []
                 , f = w(e, Wa);
               d && Xd(d) ? f(Xh(a, d)) : f(oc(c, d));
               var g = ti(c, b);
               a = rb(a.l);
               f = b.type;
               var h = [g.x, g.y];
               g = b.which;
               b = b.button;
               var k;
               var l = we(c, d);
               var m = l[0];
               for (l = l[1]; d && (!m || !l); )
                   if (d = ve(c, d))
                       l = we(c, d),
                       m = l[0],
                       l = l[1];
               d ? (m = d[Qa],
               !m || 0 > m ? c = [] : (l = (k = {},
               k.mousemove = 2,
               k.click = 32,
               k.dblclick = 33,
               k.mousedown = 4,
               k.mouseup = 30,
               k.touch = 12,
               k)[f]) ? (k = [],
               d = jg(c, d),
               fb(c, k, l) ? c = [] : (S(k, a),
               S(k, m),
               S(k, Math.max(0, h[0] - d.left)),
               S(k, Math.max(0, h[1] - d.top)),
               /^mouse(up|down)|click$/.test(f) && (c = g || b,
               Ob(k, 2 > c ? 1 : c === (g ? 2 : 4) ? 4 : 2)),
               c = k)) : c = []) : c = [];
               return va(e, c)
           }
           function Oq(a) {
               var c = null
                 , b = a.l
                 , d = b.document;
               if (b.getSelection) {
                   d = void 0;
                   try {
                       d = b.getSelection()
                   } catch (g) {
                       return []
                   }
                   if (Na(d))
                       return [];
                   var e = "" + d;
                   c = d.anchorNode
               } else
                   d.selection && d.selection.createRange && (d = d.selection.createRange(),
                   e = d.text,
                   c = d.parentElement());
               if ("string" !== typeof e)
                   return [];
               try {
                   for (; c && 1 !== c.nodeType; )
                       c = c.parentNode
               } catch (g) {
                   return []
               }
               if (!c)
                   return [];
               d = hd(b, c).kb || jd(b, c, !0);
               c = c.getElementsByTagName("*");
               for (var f = 0; f < c.length && !d; )
                   d = c[f],
                   d = hd(b, d).kb || jd(b, d, !0),
                   f += 1;
               if (e !== Ag)
                   return Ag = e,
                   d = d ? I("", ak(e.split(""))) : e,
                   e = rb(a.l),
                   0 === d.length ? d = b = "" : 100 >= d.length ? (b = d,
                   d = "") : 200 >= d.length ? (b = d.substr(0, 100),
                   d = d.substr(100)) : (b = d.substr(0, 97),
                   d = d.substr(d.length - 97)),
                   c = [],
                   fb(a.l, c, 29) ? a = [] : (S(c, e),
                   yg(c, b),
                   yg(c, d),
                   a = c),
                   a
           }
           function Pq(a) {
               return va(He(a), Oq(a) || [])
           }
           function bk(a) {
               return (a.shiftKey ? 2 : 0) | (a.ctrlKey ? 4 : 0) | (a.altKey ? 1 : 0) | (a.metaKey ? 8 : 0) | (a.ctrlKey || a.altKey ? 16 : 0)
           }
           function ck(a) {
               var c = [];
               Bg || (Bg = !0,
               Ag && c.push.apply(c, Gq(a.l, rb(a.l))),
               Nb(a.l, function() {
                   Bg = !1
               }, "fv.c"));
               return c
           }
           function dk(a, c, b, d) {
               var e = yc(c);
               if (!e || Bf(a, e))
                   return [];
               var f = Wd(e)
                 , g = Af(e);
               c = hd(a, e).kb;
               var h = O(a);
               if (!f && (g && h.o("isEU") || jd(a, e)))
                   a = [];
               else {
                   f = oc(a, e);
                   h = rb(a);
                   g = [];
                   if (fb(a, g, 38))
                       a = [];
                   else {
                       S(g, h);
                       Wj(g, b);
                       Ob(g, d);
                       a = e[Qa];
                       if (!a || 0 > a)
                           a = 0;
                       S(g, a);
                       Ob(g, c ? 1 : 0);
                       a = g
                   }
                   a = va(f, a)
               }
               return a
           }
           function Qq(a) {
               var c = a.l
                 , b = a.ja
                 , d = b.keyCode
                 , e = bk(b)
                 , f = []
                 , g = w(f, Wa);
               if ({
                   3: 1,
                   8: 1,
                   9: 1,
                   13: 1,
                   16: 1,
                   17: 1,
                   18: 1,
                   19: 1,
                   20: 1,
                   27: 1,
                   33: 1,
                   34: 1,
                   35: 1,
                   36: 1,
                   37: 1,
                   38: 1,
                   39: 1,
                   40: 1,
                   45: 1,
                   46: 1,
                   91: 1,
                   92: 1,
                   93: 1,
                   106: 1,
                   110: 1,
                   111: 1,
                   144: 1,
                   145: 1
               }[d] || 112 <= d && 123 >= d || 96 <= d && 105 >= d || e & 16)
                   19 === d && 4 === (e & -17) && (d = 144),
                   g(dk(c, b, d, e | 16)),
                   Cg = !1,
                   Nb(c, function() {
                       Cg = !0
                   }, "fv.kd"),
                   !(67 === d && e & 4) || e & 1 || e & 2 || g(ck(a));
               return f
           }
           function Rq(a) {
               var c = a.l;
               a = a.ja;
               var b = [];
               Cg && !Dg && 0 !== a.which && (b.push.apply(b, dk(c, a, a.charCode || a.keyCode, bk(a))),
               Dg = !0,
               Nb(c, function() {
                   Dg = !1
               }, "fv.kp"));
               return b
           }
           function ek(a) {
               var c = a.l
                 , b = yc(a.ja);
               if (!b || $h(c, b))
                   return [];
               var d = [];
               if ("FORM" === b.nodeName) {
                   for (var e = b.elements, f = 0; f < e.length; f += 1)
                       xj(e[f]) || d.push.apply(d, oc(c, e[f]));
                   d.push.apply(d, Kq(c, rb(a.l), b))
               }
               return d
           }
           function Sq(a) {
               var c = a.flush;
               a = yc(a.ja);
               "BODY" === Ea(a) && c()
           }
           function fk(a, c, b, d) {
               return function() {
                   var e = Aa(a, c)
                     , f = ya(arguments);
                   d.apply(void 0, f);
                   return e
               }
           }
           function gk(a, c, b, d) {
               return D(a, "cm." + b, d)
           }
           function Tq(a, c, b, d, e) {
               return b.length && e ? F(L(function(f, g, h) {
                   return b[h] ? f.concat(F([a, c, d], g)) : f
               }, [], b), t)()(e) : e
           }
           var xd = {
               construct: "Metrika2",
               callbackPostfix: "2",
               version: "2ofv6mafcjh9urjbdp7e2g"
           }, tg = [], Be = Ia(Array.from, "from"), df = /\./g, Nj = Ia(String.prototype.indexOf, "indexOf"), hk = Ia(Array.prototype.join, "join"), I = hk ? function(a, c) {
               return hk.call(c, a)
           }
           : sq, la = ha(function(a, c) {
               return a === c
           }), cd = ha(function(a, c) {
               a(c);
               return c
           }), od = ha(I), ua = ha(Lj), Na = la(null), V = la(void 0), ik = Ia(Function.prototype.bind, "bind"), C = ik ? function() {
               var a = ya(arguments);
               return ik.apply(a[0], va([a[1]], a.slice(2)))
           }
           : rq, Jo = ha(F), Sl = ha(na), jk = Ia(Array.prototype.reduce, "reduce"), L = jk ? function(a, c, b) {
               return jk.call(b, a, c)
           }
           : Bd, uj = t, Uq = t(N, Ha), rg, Kj = Lb(window), Vq = cc(Kj), qg = Object.prototype.hasOwnProperty, O = v(ec), U = cc(n), La = U("length"), nf = Array.prototype.every ? function(a, c) {
               return Array.prototype.every.call(c, a)
           }
           : function(a, c) {
               return L(function(b, d) {
                   return b ? a(d) : !1
               }, !0, c)
           }
           , Cd, pq = t(ng, la("[object Array]")), Wq = t(Gj, w(U("1"), Ij)), kk = Ia(Array.prototype.filter, "filter"), W = kk ? function(a, c) {
               return kk.call(c, a)
           }
           : Jj, Fc = ha(W), Za = Da("find", Array.prototype.find) ? function(a, c) {
               return Array.prototype.find.call(c, a)
           }
           : lq, G = Array.prototype.includes ? function(a, c) {
               return Array.prototype.includes.call(c, a)
           }
           : oq, nc = cc(G), lk = v(function(a) {
               a = n(a, "navigator") || {};
               var c = n(a, "userAgent") || "";
               return {
                   Hf: -1 < (n(a, "vendor") || "").indexOf("Apple"),
                   Fg: c
               }
           }), ud = v(function(a) {
               var c = n(a, "document.documentElement.style");
               a = n(a, "InstallTrigger");
               return !(!(c && "MozAppearance"in c) || ka(a))
           }), mk = Ia(Array.prototype.map, "map"), z = mk && jq(window, Array.prototype.map) ? function(a, c) {
               return c && 0 < c.length ? mk.call(c, a) : []
           }
           : Ij, A = z, lc = Array.prototype.flatMap ? function(a, c) {
               return Array.prototype.flatMap.call(c, a)
           }
           : mq, eb = ha(z), Mp = cc(z), Ma = pg(function(a, c) {
               return Array.prototype.some.call(c, a)
           }, function(a, c) {
               for (var b = 0; b < c.length; b += 1)
                   if (b in c && a.call(c, c[b], b))
                       return !0;
               return !1
           }, Da("some", Array.prototype.some)), Ie = v(Lb), Nc = U("0"), Xq = ha(og), nk = Ia(Array.prototype.reverse, "reverse"), Lq = nk ? function(a) {
               return nk.call(a)
           }
           : iq, ok = cc(parseInt), Ca = ok(10), Eg = ok(2), Ba = Object.entries ? function(a) {
               return a ? Object.entries(a) : []
           }
           : Gj, ea = Object.keys ? Object.keys : Hj, wl = Object.values ? Object.values : Wq, y = Object.assign || nq, Wh = ha(function(a, c) {
               return y({}, a, c)
           }), sd = v(t(U("String.fromCharCode"), w("fromCharCode", Da), Rb)), sb = v(U("navigator.userAgent")), Ae = v(t(sb, Oa(/ipad|iphone|ipod/i))), If = v(function(a) {
               return n(a, "navigator.platform") || ""
           }), Yq = "FB_IAB FBAV OKApp GSA/ yandex yango uber EatsKit YKeyboard iOSAppUslugi".split(" "), Pf = v(function(a) {
               var c = lk(a);
               a = c.Hf;
               c = c.Fg;
               var b = na("indexOf", c);
               b = Ma(t(b, la(-1), Rb), Yq);
               var d = /YaBrowser\/[\d.]+\sSA\/3|CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/;
               return a && (!/Safari/.test(c) && /Mobile/.test(c) || d.test(c) || b)
           }), td = v(function(a) {
               a = lk(a);
               var c = a.Fg;
               return a.Hf && !c.match("CriOS")
           }), Zq = Oa(/Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]|Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*|; wv\).*Chrome\/[0-9][0-9.]*\sMobile/), $q = Oa(/; wv\)/), qd = v(function(a) {
               a = sb(a);
               return $q(a) || Zq(a)
           }), ar = /Chrome\/(\d+)\./, br = v(function(a) {
               return (a = (n(a, "navigator.userAgent") || "").match(ar)) && a.length ? 76 <= Ca(a[1]) : !1
           }), md = v(function(a) {
               var c = (sb(a) || "").toLowerCase();
               a = If(a);
               return !(-1 === c.indexOf("android") || -1 === c.indexOf(c, "mobile") || !/^android|linux armv/i.test(a))
           }), cr = "other none unknown wifi ethernet bluetooth cellular wimax mixed".split(" "), dr = v(function(a) {
               var c = n(a, "navigator.connection.type");
               if (V(c))
                   return null;
               a = Ie(a)(c, cr);
               return -1 === a ? c : "" + a
           }), ze = v(t(U("document.addEventListener"), Rb)), pk = v(function(a) {
               var c = n(a, "navigator") || {};
               return L(function(b, d) {
                   return b || n(c, d)
               }, "", ["language", "userLanguage", "browserLanguage", "systemLanguage"])
           }), Ei = v(function(a) {
               var c = n(a, "navigator") || {};
               a = pk(a);
               Ga(a) || (a = "",
               c = n(c, "languages.0"),
               Ga(c) && (a = c));
               return a.toLowerCase().split("-")[0]
           }), Mb = v(function(a) {
               var c = !1;
               try {
                   c = a.top !== a
               } catch (b) {}
               return c
           }), er = v(function(a) {
               var c = !1;
               try {
                   c = a.top.contentWindow
               } catch (b) {}
               return c
           }), fr = v(function(a) {
               var c = !1;
               try {
                   c = a.navigator.javaEnabled()
               } catch (b) {}
               return c
           }), gr = v(function(a) {
               var c = "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(" ")
                 , b = n(a, "external");
               b = -1 !== (n(b, "toString") ? "" + b.toString() : "").indexOf("Sequentum");
               var d = n(a, "document.documentElement")
                 , e = ["selenium", "webdriver", "driver"];
               return !!(Ma(w(a, n), ["_selenium", "callSelenium", "_Selenium_IDE_Recorder"]) || Ma(w(n(a, "document"), n), c) || b || d && Ma(C(d.getAttribute, d), e))
           }), hr = v(function(a) {
               return !!(Ma(w(a, n), ["_phantom", "__nightmare", "callPhantom"]) || /(PhantomJS)|(HeadlessChrome)/.test(sb(a)) || n(a, "navigator.webdriver") || n(a, "isChrome") && !n(a, "chrome"))
           }), ir = v(function(a) {
               return nf(w(a, n), ["ia_document.shareURL", "ia_document.referrer"])
           }), jr = v(function(a) {
               a = n(a, "navigator.plugins");
               return !!(a && La(a) && Ma(t(U("name"), Oa(/Chrome PDF Viewer/)), a))
           }), kr = new RegExp(I("|", "yandex.com/bots;Googlebot;APIs-Google;Mediapartners-Google;AdsBot-Google;FeedFetcher-Google;Google-Read-Aloud;DuplexWeb-Google;Google Favicon;googleweblight;Chrome-Lighthouse;Mail.RU_Bot;StackRambler;Slurp;msnbot;bingbot;www.baidu.com/search/spi_?der.htm".split(";")).replace(/[./]/g, "\\$&")), So = v(t(U("navigator.userAgent"), Oa(kr))), Je = v(function(a) {
               var c = sb(a) || ""
                 , b = c.match(/Mac OS X ([0-9]+)_([0-9]+)/);
               b = b ? [+b[1], +b[2]] : [0, 0];
               c = c.match(/iPhone OS ([1-9]+)_([0-9]+)/);
               return 14 <= (c ? +c[1] : 0) ? !0 : (Ae(a) || 10 < b[0] || 10 === b[0] && 13 <= b[1]) && td(a)
           }), lr = xd.construct, Fg = ze(window), ra = {
               Sg: 24226447,
               Mg: 26302566,
               Ug: 51533966,
               ak: 65446441,
               Ja: "https:",
               Va: "882",
               dc: lr,
               Rg: Fg ? 512 : 2048,
               Pg: Fg ? 512 : 2048,
               Qg: Fg ? 100 : 400,
               bk: 100,
               ck: "noindex"
           }, Ja = {
               id: "id",
               Qe: "ut",
               $: "type",
               Zd: "ldc",
               ib: "nck",
               vc: "url",
               Ph: "referrer"
           }, mr = /^\d+$/, Gb = {
               id: function(a) {
                   a = "" + (a || "0");
                   mr.test(a) || (a = "0");
                   try {
                       var c = Ca(a)
                   } catch (b) {
                       c = 0
                   }
                   return c
               },
               $: function(a) {
                   return "" + (a || 0 === a ? a : "0")
               },
               ib: Boolean,
               Qe: Boolean
           };
           Ja.fc = "defer";
           Gb.fc = Boolean;
           Ja.Xj = "yaDisableGDPR";
           Ja.Yj = "yaGDPRLang";
           Ja.exp = "experiments";
           Ja.pc = "ecommerce";
           Gb.pc = function(a) {
               if (a)
                   return !0 === a ? "dataLayer" : "" + a
           }
           ;
           Ja.O = "params";
           Gb.O = function(a) {
               return nb(a) || da(a) ? a : null
           }
           ;
           Ja.hd = "userParams";
           Ja.Zb = "accurateTrackBounce";
           Ja.Bg = "triggerEvent";
           Gb.Bg = Boolean;
           Ja.lg = "sendTitle";
           Gb.lg = function(a) {
               return !!a || V(a)
           }
           ;
           Ja.Me = "trackHash";
           Gb.Me = Boolean;
           Ja.ph = "clickmap";
           Ja.vb = "webvisor";
           Gb.vb = Boolean;
           Ja.Lj = "trustedDomains";
           Ja.zb = "childIframe";
           Gb.zb = Boolean;
           Ja.ed = "trackLinks";
           Ja.yh = "enableAll";
           Ja.ff = "disableFomAnalytics";
           Gb.ff = Boolean;
           var qk = L(function(a, c) {
               var b = c[0];
               a[b] = {
                   Vf: c[1],
                   Pi: Gb[b]
               };
               return a
           }, {}, Ba(Ja))
             , dc = {}
             , P = v(function(a) {
               return a.id + ":" + a.$
           })
             , wg = la("1")
             , rk = ha(function(a, c) {
               var b = c || {};
               return {
                   l: w(b, N),
                   o: function(d, e) {
                       var f = b[d];
                       return V(f) && !V(e) ? e : f
                   },
                   C: function(d, e) {
                       b[d] = e;
                       return this
                   },
                   Tb: function(d, e) {
                       return "" === e || ka(e) ? this : this.C(d, e)
                   },
                   Aa: w(b, a)
               }
           })
             , xa = rk(function(a) {
               var c = "";
               a = L(function(b, d) {
                   var e = d[0]
                     , f = "" + e + ":" + d[1];
                   "t" === e ? c = f : b.push(f);
                   return b
               }, [], Ba(a));
               c && a.push(c);
               return I(":", a)
           })
             , fq = "hash host hostname href pathname port protocol search".split(" ")
             , mg = "ru ua by kz az kg lv md tj tm uz ee fr lt com co.il com.ge com.am com.tr com.ua com.ru".split(" ")
             , Bj = /(?:^|\.)(?:(ya\.ru)|(?:yandex)\.(\w+|com?\.\w+))$/
             , sk = ra.Ja + "//mc.yandex.ru/metrika/metrika_match.html"
             , Mo = v(function(a) {
               a = R(a).hostname.split(".");
               return a[a.length - 1]
           })
             , tk = v(function(a) {
               return -1 !== R(a).hostname.search(/(?:^|\.)(?:ya|yandex|beru|kinopoisk|edadeal)\.(?:\w+|com?\.\w+)$/)
           })
             , de = v(function(a) {
               return (a ? a.replace(/^www\./, "") : "").toLowerCase()
           })
             , nr = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|(^|\w+\.)yango\.com|yastatic\.net|meteum\.ai|.*\.yandex|turbopages\.org|turbo\.site)$/
             , je = v(function(a) {
               a = R(a).hostname;
               var c = !1;
               a && (c = -1 !== a.search(nr));
               return c
           })
             , or = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|.*\.yandex|turbopages\.org|turbo\.site)$/
             , bo = v(function(a) {
               a = R(a).hostname;
               var c = !1;
               a && (c = -1 !== a.search(or));
               return c
           })
             , pr = v(function(a) {
               a = R(a).hostname;
               var c = !1;
               a && (c = -1 !== a.search(Bj));
               return c
           })
             , uk = t(R, U("protocol"), la("https:"))
             , Fp = v(function(a) {
               return br(a) && uk(a) ? "SameSite=None;Secure;" : ""
           })
             , qr = v(function(a) {
               var c = !1;
               if (!a.addEventListener)
                   return c;
               try {
                   var b = Object.defineProperty({}, "passive", {
                       get: function() {
                           c = !0;
                           return 1
                       }
                   });
                   a.addEventListener("test", B, b)
               } catch (d) {}
               return c
           })
             , rr = ha(function(a, c) {
               return a ? y({
                   capture: !0,
                   passive: !0
               }, c || {}) : !!c
           })
             , ia = v(function(a) {
               a = qr(a);
               var c = rr(a)
                 , b = {};
               return y(b, {
                   D: function(d, e, f, g) {
                       A(function(h) {
                           var k = c(g);
                           Aj(d, h, f, k, !1)
                       }, e);
                       return C(b.Wb, b, d, e, f, g)
                   },
                   Wb: function(d, e, f, g) {
                       A(function(h) {
                           var k = c(g);
                           Aj(d, h, f, k, !0)
                       }, e)
                   }
               })
           })
             , Qf = []
             , sr = setTimeout;
           za.prototype["catch"] = function(a) {
               return this.then(null, a)
           }
           ;
           za.prototype.then = function(a, c) {
               var b = new this.constructor(tq);
               Pj(this, new vq(a,c,b));
               return b
           }
           ;
           za.prototype["finally"] = function(a) {
               var c = this.constructor;
               return this.then(function(b) {
                   return c.resolve(a()).then(function() {
                       return b
                   })
               }, function(b) {
                   return c.resolve(a()).then(function() {
                       return c.reject(b)
                   })
               })
           }
           ;
           za.all = function(a) {
               return new za(function(c, b) {
                   function d(h, k) {
                       try {
                           if (k && ("object" === typeof k || "function" === typeof k)) {
                               var l = k.then;
                               if ("function" === typeof l) {
                                   l.call(k, function(m) {
                                       d(h, m)
                                   }, b);
                                   return
                               }
                           }
                           e[h] = k;
                           0 === --f && c(e)
                       } catch (m) {
                           b(m)
                       }
                   }
                   if (!a || "undefined" === typeof a.length)
                       return b(new TypeError("Promise.all accepts an array"));
                   var e = Array.prototype.slice.call(a);
                   if (0 === e.length)
                       return c([]);
                   for (var f = e.length, g = 0; g < e.length; g++)
                       d(g, e[g])
               }
               )
           }
           ;
           za.resolve = function(a) {
               return a && "object" === typeof a && a.constructor === za ? a : new za(function(c) {
                   c(a)
               }
               )
           }
           ;
           za.reject = function(a) {
               return new za(function(c, b) {
                   b(a)
               }
               )
           }
           ;
           za.race = function(a) {
               return new za(function(c, b) {
                   if (!a || "undefined" === typeof a.length)
                       return b(new TypeError("Promise.race accepts an array"));
                   for (var d = 0, e = a.length; d < e; d++)
                       za.resolve(a[d]).then(c, b)
               }
               )
           }
           ;
           za.Ue = "function" === typeof setImmediate && function(a) {
               setImmediate(a)
           }
           || function(a) {
               sr(a, 0)
           }
           ;
           za.Wg = function(a) {
               "undefined" !== typeof console && console && console.warn("Possible Unhandled Promise Rejection:", a)
           }
           ;
           var K = window.Promise
             , tr = Ia(K, "Promise")
             , vk = Ia(n(K, "resolve"), "resolve")
             , wk = Ia(n(K, "reject"), "reject")
             , xk = Ia(n(K, "all"), "all");
           if (G(!1, [tr, vk, wk, xk]))
               K = za;
           else {
               var Ke = function(a) {
                   return new Promise(a)
               };
               Ke.resolve = C(vk, K);
               Ke.reject = C(wk, K);
               Ke.all = C(xk, K);
               K = Ke
           }
           var Op = ["http.0.st..rt.", "network error occurred", "send beacon", "Content Security Policy", "DOM Exception 18"], Fd, Cc = function(a) {
               return function(c) {
                   if (Fd)
                       return new Fd(c);
                   if (Da("Error", a.Error))
                       return Fd = a.Error,
                       new a.Error(c);
                   Fd = eq;
                   return new Fd(c)
               }
           }(window), Pp = Oa(/^http./), Np = Oa(/^err.kn/), aq = /[^a-z0-9.:-]/, Ai = /^\s+|\s+$/g, zj = Ia(String.prototype.trim, "trim"), yk = ha(function(a, c) {
               return c.replace(a, "")
           }), wh = yk(/\s/g), Kb = yk(/\D/g), ur = v(function(a) {
               a = n(a, "document") || {};
               return ("" + (a.characterSet || a.charset || "")).toLowerCase()
           }), Va = v(t(U("document"), w("createElement", bc))), ai = v(function(a) {
               var c = n(a, "Element.prototype");
               return c ? (a = Za(function(b) {
                   return Da(b, c[b])
               }, ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"])) ? c[a] : null : null
           }), vr = la("INPUT"), xe = t(Ea, vr), wr = la("TEXTAREA"), Yp = t(Ea, wr), xr = la("SELECT"), Zp = t(Ea, xr), ye = t(U("type"), Oa(/^(checkbox|radio)$/)), xf = t(Ea, Oa(/^INPUT|SELECT|TEXTAREA$/)), Xd = t(Ea, Oa(/^INPUT|SELECT|TEXTAREA|BUTTON$/)), Cf = "INPUT CHECKBOX RADIO TEXTAREA SELECT PROGRESS".split(" "), Xp = ["submit", "image", "hidden"], zk = "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN svg circle clippath ellipse defs foreignobject g glyph glyphref image line lineargradient marker mask path pattern polygon polyline radialgradient rect set text textpath title".split(" "), lh = v(function() {
               for (var a = 59, c = {}, b = 0; b < zk.length; b += 1)
                   c[zk[b]] = String.fromCharCode(a),
                   a += 1;
               return c
           }), vj = v(function(a) {
               return {
                   rk: a,
                   bb: null,
                   lb: []
               }
           }), sj = {}, hg = {};
           sj.p = 500;
           var rj = {
               i: "id",
               n: "name",
               h: "href",
               ty: "type"
           };
           hg.h = !0;
           hg.c = !0;
           var Pc = {};
           Pc.p = ig;
           Pc.c = function(a, c, b) {
               (a = ob(n(c, "textContent"))) && b && (b = b(c),
               b.length && Ma(t(U("textContent"), ob, la(a)), b) && (a = ""));
               xe(c) && (a = ob(c.getAttribute && c.getAttribute("value") || a));
               return a
           }
           ;
           var Sc, gg = "button," + z(function(a) {
               return 'input[type="' + a + '"]'
           }, ["button", "submit", "reset", "file"]).join(",") + ",a", nh = w(gg, ub), Up = (Sc = {},
           Sc.A = "h",
           Sc.BUTTON = "i",
           Sc.DIV = "i",
           Sc.INPUT = "ty",
           Sc), Gd;
           var wc = [oj, 0, Tb, fg, yd];
           var Ak = [Tb];
           Ak.push(fg);
           var Bk = Eb(Ak)
             , Tc = Eb([yd])
             , yr = Eb([oj, yd])
             , Le = Eb([0, Tb, fg, yd])
             , sa = {};
           y(sa, (Gd = {},
           Gd.h = Bk,
           Gd.f = Bk,
           Gd.er = Tc,
           Gd));
           sa.d = Tc;
           sa.pi = Tc;
           sa.m = yr;
           sa["2"] = wc;
           sa.t = wc;
           sa.a = Le;
           sa.n = wc;
           sa.r = Le;
           sa["1"] = Le;
           sa.g = Le;
           sa.c = Tc;
           sa.ci = Eb([Tb]);
           sa.e = wc;
           sa.adb = Tc;
           sa["5"] = wc;
           var Yc = v(function(a, c) {
               var b;
               (b = c ? sa[c] : wc) || (b = []);
               b = L(function(d, e, f) {
                   (e = e && e(a)) && d.push([f, e]);
                   return d
               }, [], b);
               b.length || lg();
               return b
           }, vb), zr = nc([26812653]), Nf = v(t(U("id"), zr), P), ac = ["0", "1", "2", "3"], Oc = ac[0], Of = ac[1], Ip = ac[2], Sf = z(t(N, na("concat", "GDPR-ok-view-detailed-")), ac), ie = va("GDPR-ok GDPR-cross GDPR-cancel 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 GDPR-settings GDPR-ok-view-default GDPR-ok-view-detailed 21 22 23".split(" "), Sf, ["28", "29", "30"]), Hp = "3 13 14 15 16 17 28".split(" "), Rf = t(eb(U("ymetrikaEvent.type")), Fc(nc(ie))), lj = Fb("gsc", jj), Gp = /:\d+$/, wq = v(function(a) {
               var c = (R(a).host || "").split(".");
               return 1 === c.length ? c[0] : L(function(b, d, e) {
                   e += 1;
                   2 <= e && !b && (e = I(".", c.slice(-e)),
                   bi(a, e) && (b = e));
                   return b
               }, "", c)
           }), $b = v(Gc), Ep = v(function(a) {
               hj(a, "_ymBRC", "1");
               var c = "1" !== gj(a, "_ymBRC");
               c || ij(a, "_ymBRC");
               return c
           }), Pa = v(bf), Uc = v(bf, function(a, c, b) {
               return "" + c + b
           }), ca = v(Uf), ej = Fb("r", function(a, c) {
               var b = dj(a, c)
                 , d = b[0];
               return !b[1] && d
           }), Qd = v(cf, function(a, c) {
               return "{" + c.Zd + c.ib
           }), Vi = v(Qc, P), Gh = t(Qd, vc), aj = ha(function(a, c) {
               for (var b = []; !wd(c); ) {
                   var d = Cp(c);
                   a(d, function(e) {
                       return e(c)
                   });
                   b.push(d)
               }
               return b
           }), Gg = ha(function(a, c) {
               return ua(function(b, d) {
                   return c(b, function(e) {
                       try {
                           d(a(e))
                       } catch (f) {
                           b(f)
                       }
                   })
               })
           }), Me = ha(function(a, c) {
               return ua(function(b, d) {
                   return c(b, function(e) {
                       try {
                           a(e)(Xa(b, d))
                       } catch (f) {
                           b(f)
                       }
                   })
               })
           }), $f = [], ag = !1, Zf = !1, xq = v(function(a) {
               if (a = Va(a))
                   return a("a")
           }), Ui = ["webkitvisibilitychange", "visibilitychange"], Ti = rk(function(a) {
               a = Ba(a);
               return I("", z(function(c) {
                   var b = c[0];
                   c = c[1];
                   return Na(c) ? "" : b + "(" + c + ")"
               }, a))
           }), Hb = F([1, null], pg), dd = F([1, 0], pg), Co = /^ *(data|javascript):/i, wi = new RegExp(I("", ["\\.(" + I("|", "3gp 7z aac ac3 acs ai avi ape apk asf bmp bz2 cab cdr crc32 css csv cue divx dmg djvu? doc(x|m|b)? emf eps exe flac? flv iso swf gif t?gz jpe?g? js m3u8? m4a mp(3|4|e?g?) m4v md5 mkv mov msi ods og(g|m|v) psd rar rss rtf sea sfv sit sha1 svg tar tif?f torrent ts txt vob wave? wma wmv wmf webm ppt(x|m|b)? xls(x|m|b)? pdf phps png xpi g?zip".split(" ")) + ")$"]),"i"), Ka, Eq = (Ka = {},
           Ka.hit = "h",
           Ka.experiments = "ex",
           Ka.params = "p",
           Ka.reachGoal = "g",
           Ka.userParams = "up",
           Ka.trackHash = "th",
           Ka.accurateTrackBounce = "atb",
           Ka.notBounce = "nb",
           Ka.addFileExtension = "fe",
           Ka.extLink = "el",
           Ka.file = "fc",
           Ka.trackLinks = "tl",
           Ka.destruct = "d",
           Ka.setUserID = "ui",
           Ka.getClientID = "ci",
           Ka.clickmap = "cm",
           Ka.enableAll = "ea",
           Ka), Ar = Oa(/^.+\.mtproxy\.yandex\.net$/), wf = v(function(a) {
               if ("MetrikaPlayer" === a.name)
                   return !0;
               a = R(a).hostname;
               return Ar(a)
           }), pe = v(function() {
               return {
                   Nb: {},
                   pending: {},
                   Ab: {}
               }
           }), Hg = U("postMessage"), Br = E("s.f", function(a, c, b, d, e) {
               c = c(d);
               var f = pe(a)
                 , g = I(":", [c.Z.nc, c.Z.key]);
               if (Hg(b)) {
                   f.pending[g] = e;
                   try {
                       b.postMessage(c.vg, "*")
                   } catch (h) {
                       delete f.pending[g];
                       return
                   }
                   X(a, function() {
                       delete f.pending[g]
                   }, 5E3, "if.s")
               }
           }), Cr = E("s.fh", function(a, c, b, d, e, f) {
               var g = null
                 , h = null
                 , k = pe(a)
                 , l = null;
               try {
                   g = Bb(a, f.data),
                   h = g.__yminfo,
                   l = g.data
               } catch (m) {
                   return
               }
               if (!ka(h) && h.substring && "__yminfo" === h.substring(0, 8) && !ka(l) && (g = h.split(":"),
               4 === g.length))
                   if (h = c.id,
                   c = g[1],
                   a = g[2],
                   g = g[3],
                   !da(l) && l.type && "0" === g && l.counterId) {
                       if (!l.toCounter || l.toCounter == h) {
                           k = null;
                           try {
                               k = f.source
                           } catch (m) {}
                           !Na(k) && Hg(k) && (f = d.R(l.type, [f, l]),
                           e = z(t(N, Wh(e)), f.concat([{}])),
                           l = b([c, a, l.counterId], e),
                           k.postMessage(l.vg, "*"))
                       }
                   } else
                       g === "" + h && da(l) && W(function(m) {
                           return !(!m.hid || !m.counterId)
                       }, l).length === l.length && (b = k.pending[I(":", [c, a])]) && b.apply(null, [f].concat(l))
           }), Ni = v(function(a, c) {
               var b, d = bc("getElementsByTagName", n(a, "document")), e = pe(a), f = Hg(a), g = ed(a), h = ia(a);
               if (!d || !f)
                   return null;
               d = d.call(a.document, "iframe");
               f = (b = {},
               b.counterId = c.id,
               b.hid = "" + Vb(a),
               b);
               up(a, g);
               b = vp(a, f);
               var k = F([a, w([], b)], Br);
               A(function(l) {
                   var m = null;
                   try {
                       m = l.contentWindow
                   } catch (p) {}
                   m && k(m, {
                       type: "initToChild"
                   }, function(p, q) {
                       g.R("initToParent", [p, q])
                   })
               }, d);
               Mb(a) && k(a.parent, {
                   type: "initToParent"
               }, function(l, m) {
                   g.R("parentConnect", [l, m])
               });
               h.D(a, ["message"], F([a, c, b, g, f], Cr));
               return {
                   aa: g,
                   Nb: e.Nb,
                   Ab: e.Ab,
                   Ce: k
               }
           }, t(vb, P)), le = v(Si, t(vb, P)), Dr = E("pa.plgn", function(a, c) {
               var b = le(a, c);
               b && b.aa.D(["pluginInfo"], D(a, "c.plgn", function() {
                   var d = O(a);
                   d.C("cmc", d.o("cmc", 0) + 1);
                   return hq(c, qk)
               }))
           }), wb, zc, of = (wb = {},
           wb.transaction_id = "id",
           wb.item_id = "id",
           wb.item_name = "name",
           wb.item_brand = "brand",
           wb.promotion_name = "coupon",
           wb.index = "position",
           wb.item_variant = "variant",
           wb.value = "revenue",
           wb.item_category = "category",
           wb), Oh = (zc = {},
           zc.view_item = "detail",
           zc.add_to_cart = "add",
           zc.remove_from_cart = "remove",
           zc.begin_checkout = "checkout",
           zc.purchase = "purchase",
           zc), pm = "currencyCode add delete remove purchase checkout detail".split(" "), Ne = ha(function(a, c) {
               return O(c).o(a, null)
           }), Er = v(function() {
               var a = 0;
               return function() {
                   return a += 1
               }
           }), Fr = t(P, Er, Ha), $a = {
               mc: function(a) {
                   a = ec(a).o("mt", {});
                   a = Ba(a);
                   return a.length ? L(function(c, b, d) {
                       return "" + c + (d ? "-" : "") + b[0] + "-" + b[1]
                   }, "", a) : null
               }
           };
           $a.oo = Ne("oo");
           $a.pmc = Ne("cmc");
           $a.clc = function(a) {
               var c = O(a).o("cls", {
                   cc: 0,
                   x: 0,
                   y: 0
               })
                 , b = c.cc
                 , d = c.x;
               c = c.y;
               return b ? b + "-" + a.Math.floor(d / b) + "-" + a.Math.floor(c / b) : b + "-" + d + "-" + c
           }
           ;
           $a.lt = function(a) {
               var c = ec(a).o("lt", null);
               return c ? a.Math.round(100 * c) : c
           }
           ;
           $a.yu = function(a) {
               var c = R(a);
               return G(c.hostname, ["dzen.ru", "ya.ru"]) ? (Gc(a, "").o("yandexuid") || "").substring(0, 25) : null
           }
           ;
           $a.re = t(function(a, c) {
               return !c.ib && ej(a, c)
           }, Hb);
           $a.aw = function(a) {
               a = Za(t(ka, Rb), [a.document.hidden, a.document.msHidden, a.document.webkitHidden]);
               return ka(a) ? null : dd(!a)
           }
           ;
           $a.ifc = function(a) {
               return ec(a).o("ifc")
           }
           ;
           $a.ifb = function(a) {
               return ec(a).o("ifb")
           }
           ;
           $a.rqnt = function(a, c, b) {
               a = b.G;
               return !a || a.nohit ? null : Fr(c)
           }
           ;
           $a.ecs = function(a) {
               return ec(a).o("ecs")
           }
           ;
           $a.csi = Ne("scip");
           var Gr = ea($a), Ri = v(function() {
               return {
                   pf: null,
                   Dc: []
               }
           }, P), Hr = [["domainLookupEnd", "domainLookupStart"], ["connectEnd", "connectStart"], ["responseStart", "requestStart"], ["responseEnd", "responseStart"], ["fetchStart", "navigationStart"], ["redirectEnd", "redirectStart"], [function(a, c) {
               return n(c, "redirectCount") || n(a, "navigation.redirectCount")
           }
           ], ["domInteractive", "domLoading"], ["domContentLoadedEventEnd", "domContentLoadedEventStart"], ["domComplete", "navigationStart"], ["loadEventStart", "navigationStart"], ["loadEventEnd", "loadEventStart"], ["domContentLoadedEventStart", "navigationStart"]], lb, Ir = [["domainLookupEnd", "domainLookupStart"], ["connectEnd", "connectStart"], ["responseStart", "requestStart"], ["responseEnd", "responseStart"], ["fetchStart"], ["redirectEnd", "redirectStart"], ["redirectCount"], ["domInteractive", "responseEnd"], ["domContentLoadedEventEnd", "domContentLoadedEventStart"], ["domComplete"], ["loadEventStart"], ["loadEventEnd", "loadEventStart"], ["domContentLoadedEventStart"]], Qi = (lb = {},
           lb.responseEnd = 1,
           lb.domInteractive = 1,
           lb.domContentLoadedEventStart = 1,
           lb.domContentLoadedEventEnd = 1,
           lb.domComplete = 1,
           lb.loadEventStart = 1,
           lb.loadEventEnd = 1,
           lb.unloadEventStart = 1,
           lb.unloadEventEnd = 1,
           lb.secureConnectionStart = 1,
           lb), Jr = v(Od), pp = {
               "*": "+",
               "-": "/",
               fk: "=",
               "+": "*",
               "/": "-",
               "=": "_"
           }, Hd = v(function(a) {
               a = n(a, "console");
               var c = n(a, "log");
               c = Ce("log", c) ? C(c, a) : B;
               var b = n(a, "warn");
               b = Ce("warn", b) ? C(b, a) : c;
               var d = n(a, "error");
               a = Ce("error", d) ? C(d, a) : c;
               return {
                   log: c,
                   error: a,
                   warn: b
               }
           }), Kr = E("p.cd", function(a, c) {
               if (md(a) || Ae(a)) {
                   var b = Pa(a);
                   if (ka(b.o("jn"))) {
                       b.C("jn", !1);
                       var d = a.lk || td(a) ? function() {}
                       : /./
                         , e = Hd(a, P(c));
                       d.toString = function() {
                           b.C("jn", !0);
                           return "Yandex.Metrika counter is initialized"
                       }
                       ;
                       e.log("%c%s", "color: inherit", d)
                   }
               }
           }), np = /Firefox\/([0-9]+)/, mp = /([0-9\\.]+) Safari/, Lr = /\sYptp\/\d\.(\d+)\s/, op = /Edg\/(\d+)\./, Ck = v(function(a) {
               var c;
               a: {
                   if ((c = sb(a)) && (c = Lr.exec(c)) && 1 < c.length) {
                       c = Ca(c[1]);
                       break a
                   }
                   c = 0
               }
               return 50 <= c && 99 >= c || Li(a, 79) ? !1 : !Je(a) || Pf(a)
           }), hh = "monospace;sans-serif;serif;Andale Mono;Arial;Arial Black;Arial Hebrew;Arial MT;Arial Narrow;Arial Rounded MT Bold;Arial Unicode MS;Bitstream Vera Sans Mono;Book Antiqua;Bookman Old Style;Calibri;Cambria;Cambria Math;Century;Century Gothic;Century Schoolbook;Comic Sans;Comic Sans MS;Consolas;Courier;Courier New;Garamond;Geneva;Georgia;Helvetica;Helvetica Neue;Impact;Lucida Bright;Lucida Calligraphy;Lucida Console;Lucida Fax;LUCIDA GRANDE;Lucida Handwriting;Lucida Sans;Lucida Sans Typewriter;Lucida Sans Unicode;Microsoft Sans Serif;Monaco;Monotype Corsiva;MS Gothic;MS Outlook;MS PGothic;MS Reference Sans Serif;MS Sans Serif;MS Serif;MYRIAD;MYRIAD PRO;Palatino;Palatino Linotype;Segoe Print;Segoe Script;Segoe UI;Segoe UI Light;Segoe UI Semibold;Segoe UI Symbol;Tahoma;Times;Times New Roman;Times New Roman PS;Trebuchet MS;Verdana;Wingdings;Wingdings 2;Wingdings 3".split(";"), tl = v(function(a) {
               a = Va(a)("canvas");
               var c = n(a, "getContext");
               if (!c)
                   return null;
               try {
                   var b = C(c, a)("2d");
                   b.font = "72px mmmmmmmmmmlli";
                   var d = b.measureText("mmmmmmmmmmlli").width;
                   return function(e) {
                       b.font = "72px " + e;
                       return b.measureText("mmmmmmmmmmlli").width === d
                   }
               } catch (e) {
                   return null
               }
           }), Dk = Ia(String.prototype.repeat, "repeat"), Mr = Dk ? function(a, c) {
               return Dk.call(a, c)
           }
           : kq, Nh = w(!0, function(a, c, b, d) {
               b = c.length && (b - d.length) / c.length;
               if (0 >= b)
                   return d;
               c = Mr(c, b);
               return a ? c + d : d + c
           }), De = [2277735313, 289559509], Ee = [1291169091, 658871167], Ek = /\/$/, Nr = v(t(ca, ua(function(a) {
               return -(new a.l.Date).getTimezoneOffset()
           }))), Or = t(ca, ua(function(a) {
               a = new a.l.Date;
               return I("", z(Dp, [a.getFullYear(), a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()]))
           })), Pr = t(ca, ua(se)), Fk = v(t(ca, ua(function(a) {
               return a.ta[0]
           }))), Qr = v(Qc), Rr = v(Qc), Sr = v(function(a) {
               var c = n(a, "webkitRequestFileSystem");
               if (T(c) && !md(a))
                   return (new K(C(c, a, 0, 0))).then(function() {
                       var d = n(a, "navigator.storage") || {};
                       return d.estimate ? d.estimate() : {}
                   }).then(function(d) {
                       return (d = d.quota) && 12E7 > d ? !0 : !1
                   })["catch"](w(!0, N));
               if (ud(a))
                   return c = n(a, "navigator.serviceWorker"),
                   K.resolve(V(c));
               c = n(a, "openDatabase");
               if (td(a) && T(c)) {
                   var b = !1;
                   try {
                       c(null, null, null, null)
                   } catch (d) {
                       b = !0
                   }
                   return K.resolve(b)
               }
               return K.resolve(!n(a, "indexedDB") && (n(a, "PointerEvent") || n(a, "MSPointerEvent")))
           }), Tr = /(\?|&)turbo_uid=([\w\d]+)($|&)/, Ur = v(function(a, c) {
               var b = $b(a)
                 , d = R(a).search.match(Tr);
               return d && 2 <= d.length ? (d = d[2],
               c.ib || b.C("turbo_uid", d),
               d) : (b = b.o("turbo_uid")) ? b : ""
           }), Vr = v(function(a) {
               return T(n(a, "yandex.getSiteUid")) ? a.yandex.getSiteUid() : null
           }), fa, Ib, Wr = v(function(a) {
               a = O(a);
               var c = a.o("counterNum", 0) + 1;
               a.C("counterNum", c);
               return c
           }, t(vb, P)), Db = (fa = {},
           fa.vf = w(xd.version, N),
           fa.nt = dr,
           fa.fp = function(a, c, b) {
               if (b.G && b.G.nohit)
                   return null;
               c = P(c);
               b = Qr(a);
               if (b[c])
                   return null;
               a: {
                   var d = Fk(a)
                     , e = n(a, "performance.getEntriesByType");
                   if (T(e)) {
                       if (a = W(t(N, U("name"), la("first-contentful-paint")), e.call(a.performance, "paint")),
                       a.length) {
                           a = a[0].startTime;
                           break a
                       }
                   } else {
                       e = n(a, "chrome.loadTimes");
                       if (T(e) && (e = e.call(a.chrome),
                       e = n(e, "firstPaintTime"),
                       d && e)) {
                           a = 1E3 * e - d;
                           break a
                       }
                       if (a = n(a, "performance.timing.msFirstPaint")) {
                           a -= d;
                           break a
                       }
                   }
                   a = void 0
               }
               return a ? (b[c] = a,
               Math.round(a)) : null
           }
           ,
           fa.fu = function(a, c, b) {
               var d = b.G;
               if (!d)
                   return null;
               c = (n(a, "document.referrer") || "").replace(Ek, "");
               b = (d["page-ref"] || "").replace(Ek, "");
               d = d["page-url"];
               a = R(a).href !== d;
               c = c !== b;
               b = 0;
               a && c ? b = 3 : c ? b = 1 : a && (b = 2);
               return b
           }
           ,
           fa.en = ur,
           fa.la = pk,
           fa.ut = function(a, c, b) {
               var d = b.Lc;
               (b = b.G) && (pr(a) || c.Qe || d) && (b.ut = "noindex");
               return null
           }
           ,
           fa.v = w(ra.Va, N),
           fa.cn = Wr,
           fa.dp = function(a) {
               var c = O(a)
                 , b = c.o("bt", {});
               if (V(c.o("bt"))) {
                   var d = n(a, "navigator.getBattery");
                   try {
                       b.p = d && d.call(a.navigator)
                   } catch (e) {}
                   c.C("bt", b);
                   b.p && b.p.then && b.p.then(D(a, "bi:dp.p", function(e) {
                       b.Sj = n(e, "charging") && 0 === n(e, "chargingTime")
                   }))
               }
               return dd(b.Sj)
           }
           ,
           fa.ls = v(function(a, c) {
               var b = Uc(a, c.id)
                 , d = ca(a)
                 , e = b.o("lsid");
               return +e ? e : (d = Ra(a, 0, d(Y)),
               b.C("lsid", d),
               d)
           }, vb),
           fa.hid = Vb,
           fa.z = Nr,
           fa.i = Or,
           fa.et = Pr,
           fa.c = t(U("navigator.cookieEnabled"), Hb),
           fa.rn = t(N, Ra),
           fa.rqn = function(a, c, b) {
               b = b.G;
               if (!b || b.nohit)
                   return null;
               c = P(c);
               a = Uc(a, c);
               c = (a.o("reqNum", 0) || 0) + 1;
               a.C("reqNum", c);
               if (a.o("reqNum") === c)
                   return c;
               a.oc("reqNum");
               return null
           }
           ,
           fa.u = Qd,
           fa.tp = t(vb, Dj, Hb),
           fa.tpid = t(vb, function(a) {
               a = P(a);
               return dc[a] && dc[a].Hj || null
           }),
           fa.w = function(a) {
               a = Ad(a);
               return a[0] + "x" + a[1]
           }
           ,
           fa.s = function(a) {
               var c = n(a, "screen");
               if (c) {
                   a = n(c, "width");
                   var b = n(c, "height");
                   c = n(c, "colorDepth") || n(c, "pixelDepth");
                   return I("x", [a, b, c])
               }
               return null
           }
           ,
           fa.sk = U("devicePixelRatio"),
           fa.ifr = t(Mb, Hb),
           fa.j = t(fr, Hb),
           fa.sti = function(a) {
               return Mb(a) ? er(a) ? "1" : null : null
           }
           ,
           fa);
           Db.pri = function(a) {
               if (qd(a))
                   return null;
               var c = Rr(a)
                 , b = c.Yf;
               V(b) && (c.Yf = null,
               Sr(a).then(function(d) {
                   c.Yf = d
               }));
               return b ? 1 : null
           }
           ;
           y(Db, (Ib = {},
           Ib.iss = t(gr, Hb),
           Ib.hdl = t(hr, Hb),
           Ib.iia = t(ir, Hb),
           Ib.cpf = t(jr, Hb),
           Ib.ntf = v(function(a) {
               a: switch (n(a, "Notification.permission")) {
               case "denied":
                   a = !1;
                   break a;
               case "granted":
                   a = !0;
                   break a;
               default:
                   a = null
               }
               return Na(a) ? null : a ? 2 : 1
           }),
           Ib.eu = Ne("isEU"),
           Ib.ns = Fk,
           Ib.np = function(a) {
               if (Ra(a, 0, 100))
                   a = null;
               else {
                   a = ob(If(a), 100);
                   for (var c = [], b = 0; b < a.length; b++) {
                       var d = a.charCodeAt(b);
                       128 > d ? c.push(d) : (127 < d && 2048 > d ? c.push(d >> 6 | 192) : (c.push(d >> 12 | 224),
                       c.push(d >> 6 & 63 | 128)),
                       c.push(d & 63 | 128))
                   }
                   a = Th(c)
               }
               return a
           }
           ,
           Ib));
           Db.ds = function(a, c, b) {
               c = P(c);
               a = nj(a);
               b = b.G;
               if ((void 0 === b ? {} : b).nohit)
                   return null;
               var d = b = null;
               n(a, "getEntriesByType") && (d = n(a.getEntriesByType("navigation"), "0")) && (b = Ir);
               if (!b) {
                   var e = n(a, "timing");
                   e && (b = Hr,
                   d = e)
               }
               if (!b)
                   return null;
               a = rp(a, d, b);
               c = Jr(c);
               return (c = qp(c, a)) && I(",", c)
           }
           ;
           Db.bu = Vr;
           Db.td = Ur;
           Db.wv = w(2, N);
           Db.co = function(a) {
               return dd(O(a).o("jn"))
           }
           ;
           var Xr = ea(Db);
           Db.we = function(a, c) {
               return Hb(c.vb)
           }
           ;
           var jp = Xr.concat(Gr), hp = ["RTCPeerConnection", "mozRTCPeerConnection", "webkitRTCPeerConnection"], dp = ha(function(a, c) {
               if (!c[a]) {
                   var b, d = new K(function(e) {
                       b = e
                   }
                   );
                   c[a] = {
                       cg: b,
                       Qa: d,
                       dg: !1
                   }
               }
               return c[a].Qa
           }), Mi = v(t(Qc, ua)), pi = t(U("settings.pcs"), la("1")), Ig = v(function(a, c, b) {
               var d = O(a);
               c = Pa(a);
               var e = [];
               b = F([a, b, d, c], kp);
               qd(a) || lp(a, "14.1") || e.push(F([gp, "pp", ""], b));
               var f = Ck(a) && !Ki(a, 68);
               f || e.push(F([ip, "pu", ""], b));
               f || c.Sd || Je(a) || (e.push(F([cp, "zzlc", "na"], b)),
               e.push(F([bp, "cc", ""], b)));
               return e.length ? {
                   Ia: function(g, h) {
                       if (0 === d.o("isEU"))
                           try {
                               A(Uq, e)
                           } catch (k) {}
                       h()
                   },
                   ca: function(g, h) {
                       var k = g.J;
                       if (k && 0 === d.o("isEU"))
                           try {
                               A(ua(k), e)
                           } catch (l) {}
                       h()
                   }
               } : {}
           }, function(a, c, b) {
               return P(b)
           }), rd = Fb("retryReqs", function(a) {
               return Pa(a).o("retryReqs", {})
           }), ap = ["0"], Fl = E("g.r", function(a) {
               var c = ca(a)
                 , b = rd(a)
                 , d = c(Y)
                 , e = Vb(a);
               return L(function(f, g) {
                   var h = g[0]
                     , k = g[1];
                   k && !k.d && k.ghid && k.ghid !== e && k.time && 500 < d - k.time && k.time + 864E5 > d && 2 >= k.browserInfo.rqnl && (k.d = 1,
                   f.push({
                       protocol: k.protocol,
                       host: k.host,
                       lj: k.resource,
                       fj: k.postParams,
                       O: k.params,
                       fh: k.browserInfo,
                       Ua: k.telemetry,
                       wk: k.ghid,
                       time: k.time,
                       Rb: Ca(h),
                       rh: k.counterId,
                       $: k.counterType
                   }));
                   return f
               }, [], Ba(b))
           }), $o = "ru en et fi lt lv pl fr no sr".split(" "), Ub, Yo = (Ub = {},
           Ub["GDPR-ok"] = "ok",
           Ub["GDPR-ok-view-default"] = "ok-default",
           Ub["GDPR-ok-view-detailed"] = "ok-detailed",
           Ub["GDPR-ok-view-detailed-0"] = "ok-detailed-all",
           Ub["GDPR-ok-view-detailed-1"] = "ok-detailed-tech",
           Ub["GDPR-ok-view-detailed-2"] = "ok-detailed-tech-analytics",
           Ub["GDPR-ok-view-detailed-3"] = "ok-detailed-tech-other",
           Ub), ke = [], Fi = t(Rf, eb(Vq(ie)), od(",")), Gi = t(Fc(nc(ie)), La, Boolean), Ro = v(function(a, c) {
               var b = c.o("gdpr");
               return G(b, ac) ? "-" + b : ""
           }), mb, cb, No = (mb = {},
           mb.am = "com.am",
           mb.tr = "com.tr",
           mb.ge = "com.ge",
           mb.il = "co.il",
           mb["\u0440\u0444"] = "ru",
           mb["xn--p1ai"] = "ru",
           mb["\u0443\u043a\u0440"] = "ua",
           mb["xn--j1amh"] = "ua",
           mb["\u0431\u0435\u043b"] = "by",
           mb["xn--90ais"] = "by",
           mb), Gk = {
               "mc.edadeal.ru": /^([^/]+\.)?edadeal\.ru$/,
               "mc.yandexsport.ru": /^([^/]+\.)?yandexsport\.ru$/,
               "mc.kinopoisk.ru": /^([^/]+\.)?kinopoisk\.ru$/
           }, Po = (cb = {},
           cb.ka = "ge",
           cb.ro = "md",
           cb.tg = "tj",
           cb.tk = "tm",
           cb.et = "ee",
           cb.hy = "com.am",
           cb.he = "co.li",
           cb.ky = "kg",
           cb.uk = "ua",
           cb.be = "by",
           cb.tr = "com.tr",
           cb.kk = "kz",
           cb), Hk = v(Od), Yr = v(function() {
               var a = L(function(c, b) {
                   "ru" !== b && (c[b] = "mc.yandex." + b);
                   return c
               }, {}, mg);
               A(function(c) {
                   a[c] = c
               }, ea(Gk));
               return a
           }), Zr = v(function(a) {
               var c = R(a).hostname;
               return (a = Za(function(b) {
                   return b[1].test(c)
               }, Ba(Gk))) && a[0]
           }), $r = ha(function(a, c) {
               var b = Oo(c)
                 , d = [Zr(c) || Lo(c)];
               tk(c) && d.push(b);
               var e = ca(c);
               b = Pa(c);
               var f = b.o("synced", {});
               d = W(function(g) {
                   if (a[g]) {
                       var h = (f[g] || 1) + 1440 < e(hb);
                       h && delete f[g];
                       return h
                   }
               }, d);
               b.C("synced", f);
               return z(function(g) {
                   return {
                       zj: a[g],
                       Hi: g
                   }
               }, d)
           }), as = function(a, c) {
               return function(b, d, e) {
                   d = P(e);
                   d = Yr(d);
                   var f = $r(d);
                   return Je(b) || ud(b) ? {} : {
                       ca: function(g, h) {
                           var k = g.J
                             , l = O(b)
                             , m = tk(b)
                             , p = Mb(b);
                           k = !(k && k.o("pv"));
                           if (!m || p || k)
                               return h();
                           m = f(b);
                           if (!m.length)
                               return h();
                           if (l.o("startSync"))
                               Hk(b).push(h);
                           else {
                               l.C("startSync", !0);
                               l = F([b, m, B], a);
                               m = Qf[0];
                               if (!m)
                                   return h();
                               m(b).then(l).then(h, t(cd(h), D(b, c)))["catch"](B)
                           }
                       }
                   }
               }
           }(function(a, c) {
               var b = ca(a)
                 , d = O(a)
                 , e = Pa(a)
                 , f = Yc(a, "c")
                 , g = zb(a, f);
               return L(function(h, k) {
                   function l() {
                       var q = e.o("synced");
                       d.C("startSync", !1);
                       q && (q[k.Hi] = p,
                       e.C("synced", q));
                       A(Ha, Hk(a))
                   }
                   var m = g({
                       na: ["sync.cook"]
                   }, [ra.Ja + "//" + k.zj + "/sync_cookie_image_check"], {
                       tb: 1500
                   }), p;
                   m.then(function() {
                       p = b(hb);
                       l()
                   })["catch"](function() {
                       p = b(hb) - 1435;
                       l()
                   });
                   m = w(m, N);
                   return h.then(m)
               }, K.resolve(""), c)["catch"](D(a, "ctl"))
           }, "sy.c"), Ci = !1, Ko = /^[a-z][\w.+-]+:/i, Ik = {}, Jk = v(Od), Oe, Cb = [[Wf, 1], [vd, 2], [Qb(), 3], [Vf, 4]], Jb = w(Cb, yi);
           Jb(as, 5);
           Jb(function(a, c, b) {
               return {
                   Ia: function(d, e) {
                       var f = Aa(a, b);
                       (f = f && f.userParams) && d.hd && f(d.hd);
                       e()
                   }
               }
           }, 0);
           Jb(Di, 6);
           Jb(Bi, 7);
           Jb(Ig, 8);
           Jb(function(a) {
               return {
                   ca: function(c, b) {
                       var d = c.J
                         , e = Pa(a).o("fip");
                       e && d && (d.C("fip", e),
                       ge(c, "fip", dd(e)));
                       b()
                   }
               }
           }, 9);
           Jb(me(), 100);
           var tb = (Oe = {},
           Oe.h = Cb,
           Oe.er = [],
           Oe);
           ba("adb");
           ba("f", Qb(), 1);
           ba("f", Vf, 2);
           ba("f", Ig, 3);
           tb["2"] = Cb;
           Jb(function(a, c, b) {
               return {
                   ca: function(d, e) {
                       if (d.O && (Cj(b, d.O),
                       !d.ba && d.J && d.G)) {
                           var f = ib(a, d.O)
                             , g = Jk(a)
                             , h = d.J.o("pv");
                           f && !d.G.nohit && (h ? encodeURIComponent(f).length > ra.Pg ? g.push([d.J, d.O]) : d.G["site-info"] = f : (d.ba = f,
                           d.Oi = !0))
                       }
                       e()
                   },
                   Ia: function(d, e) {
                       var f = Jk(a)
                         , g = Aa(a, b)
                         , h = g && g.params;
                       h && (g = W(t(Nc, la(d.J)), f),
                       A(function(k) {
                           h(k[1]);
                           k = Ie(a)(k, f);
                           f.splice(k, 1)
                       }, g));
                       e()
                   }
               }
           }, -1);
           tb["1"] = W(t(Nc, la(Vf), Rb), Cb);
           Jb(function(a, c, b) {
               return {
                   ca: function(d, e) {
                       var f = d.J
                         , g = d.G;
                       if (!f || !g)
                           return e();
                       !Ik[b.id] && f.o("pv") && b.exp && !g.nohit && (g.exp = b.exp,
                       Ik[b.id] = !0);
                       f = g["page-ref"];
                       var h = g["page-url"];
                       f && h !== f ? g["page-ref"] = zi(a, f) : delete g["page-ref"];
                       g["page-url"] = zi(a, h).slice(0, ra.Rg);
                       return e()
                   }
               }
           }, -100);
           tb.a = Cb;
           tb.g = Cb;
           tb.e = Cb;
           ba("r", vd, 1);
           ba("r", function() {
               return function(a) {
                   return {
                       ca: function(c, b) {
                           var d = c.J
                             , e = void 0 === d ? xa() : d
                             , f = c.Rb
                             , g = c.Ua
                             , h = rd(a);
                           d = e.o("rqnl", 0) + 1;
                           e.C("rqnl", d);
                           var k = e = n(h, I(".", [f, "browserInfo"]));
                           e && (e.rqnl = d);
                           g && (g.C("rqnl", d),
                           f = n(h, I(".", [f, "telemetry"]))) && (f.rqnl = d,
                           k = k || e);
                           k && Tf(a);
                           b()
                       },
                       Ia: function(c, b) {
                           Ji(a, c);
                           b()
                       }
                   }
               }
           }(), 2);
           tb.t = Cb;
           ba("n", Wf, 1);
           ba("n", vd, 2);
           ba("n", Qb(), 3);
           ba("n", Di, 4);
           ba("n", Ig, 5);
           ba("n", Bi, 6);
           ba("n", me(), 100);
           ba("d", Qb(["hid", "u", "v", "vf"]), 1);
           ba("m", Qb(["u", "v", "vf"]), 1);
           ba("m", me(), 2);
           ba("pi");
           tb["5"] = W(t(Nc, nc([Wf, vd]), Rb), Cb);
           var Pe, Kk = C(K.reject, K, Ya()), wa = (Pe = {},
           Pe.h = ab,
           Pe.er = w(Kk, N),
           Pe);
           wa.a = ab;
           wa.f = ab;
           wa.n = ab;
           wa["1"] = ab;
           wa.c = zb;
           wa.g = ab;
           wa.e = ab;
           wa["2"] = ab;
           wa.r = function(a, c, b) {
               var d = ne(a, c, b)
                 , e = ab(a, c, b);
               return function(f, g, h) {
                   return "webvisor" === h ? d(f, g, f.G["wv-part"]) : e(f, g)
               }
           }
           ;
           wa.adb = oe;
           wa.pi = zb;
           wa.m = function(a, c, b) {
               return function(d, e) {
                   var f, g = d.G;
                   g = (f = {},
                   f["page-url"] = g && g["page-url"] || "",
                   f);
                   f = y(d, {
                       G: y(d.G || {}, g)
                   });
                   return oe(a, c, b)(f, "clmap/" + e.id)["catch"](D(a, "c.m"))
               }
           }
           ;
           wa.d = ab;
           wa.t = ab;
           wa["5"] = ab;
           var ta = E("g.sen", function(a, c, b) {
               var d = Yc(a, c);
               b = Go(a, c, b);
               var e = wa[c]
                 , f = e ? e(a, d, b) : ab(a, d, b);
               return function() {
                   var g = ya(arguments)
                     , h = g.slice(1);
                   g = y(g[0], {
                       na: [c]
                   });
                   return f.apply(void 0, va([g], h))
               }
           }, Kk), bs = E("dc.init", function(a, c) {
               var b = R(a)
                 , d = Hd(a, c)
                 , e = $b(a)
                 , f = Df(a)
                 , g = f.zi;
               f = f.ri;
               g && !f && e.C("debug", "1", void 0, b.host);
               return vf(a) || !g && !f ? {
                   log: B,
                   warn: B,
                   error: B
               } : d
           }), fe = v(bs, vb), cs = D(window, "h.p", function(a, c) {
               var b, d, e = ta(a, "h", c), f = c.vc || "" + R(a).href, g = c.Ph || a.document.referrer, h = {
                   J: xa((b = {},
                   b.pv = 1,
                   b)),
                   G: (d = {},
                   d["page-url"] = f,
                   d["page-ref"] = g,
                   d)
               };
               h.O = c.O;
               h.hd = c.hd;
               c.fc && h.G && (h.G.nohit = "1");
               return e(h, c).then(function(k) {
                   k && (c.fc || Ab(a, c, "PageView. Counter " + c.id + ". URL: " + f + ". Referrer: " + g, c.O)(),
                   Nb(a, F([a, c, k], ep)))
               })["catch"](D(a, "h.g.s"))
           }), pd = v(Qc, P), ds = E("p.ar", function(a, c) {
               var b = ta(a, "a", c);
               return function(d, e, f, g, h, k) {
                   var l, m, p = {
                       G: {},
                       J: xa((l = {},
                       l.pv = 1,
                       l.ar = 1,
                       l))
                   };
                   if (d)
                       return e = nb(e) ? {
                           title: e.title,
                           $f: e.referer,
                           O: e.params,
                           Wa: e.callback,
                           l: e.ctx
                       } : {
                           title: e,
                           $f: f,
                           O: g,
                           Wa: h,
                           l: k
                       },
                       f = pd(c),
                       f.url !== d && (f.ref = f.url,
                       f.url = d),
                       d = d || R(a).href,
                       f = e.$f || f.ref || a.document.referrer,
                       g = Ab(a, c, "PageView. Counter " + c.id + ". URL: " + d + ". Referrer: " + f, e.O),
                       p = b(y(p, {
                           O: e.O,
                           title: e.title,
                           G: y(p.G, (m = {},
                           m["page-url"] = d,
                           m["page-ref"] = f,
                           m))
                       }), c).then(g),
                       Mc(a, "p.ar.s", p, e.Wa || B, e.l)
               }
           }), Qe = ha(function(a, c) {
               var b = {};
               Lf(a)(function(d) {
                   b = d[c] || {}
               });
               return b
           }), es = E("c.c.cc", function(a) {
               var c = O(a)
                 , b = t(Qe(a), function(d) {
                   var e;
                   return y({}, d, (e = {},
                   e.oldCode = !!a.ya_cid,
                   e.clickmap = !!d.clickmap,
                   e))
               });
               return D(a, "g.c.cc", t(C(c.o, c, "counters", {}), ea, eb(b)))
           }), fs = E("gt.c.rs", function(a, c) {
               var b, d = P(c), e = c.id, f = c.$, g = c.ph, h = c.vb, k = c.Me, l = F([a, d], Fo);
               xi(a, d, (b = {},
               b.id = e,
               b.type = +f,
               b.clickmap = g,
               b.webvisor = !!h,
               b.trackHash = !!k,
               b));
               return l
           }), Sj, gs = E("th.e", function(a, c) {
               function b() {
                   f || (h = nd(a, "onhashchange") ? ia(a).D(a, ["hashchange"], g) : zq(a, g))
               }
               var d = ta(a, "t", c)
                 , e = ee(a, P(c))
                 , f = !1
                 , g = D(a, "h.h.ch", C(Aq, null, a, c, d))
                 , h = B;
               c.Me && (b(),
               f = !0);
               return {
                   Ij: D(a, "tr.hs.h", function(k) {
                       var l;
                       k ? b() : h();
                       f = !!k;
                       e((l = {},
                       l.trackHash = f,
                       l))
                   }),
                   unsubscribe: h
               }
           }), Lk = {
               1882689622: 1,
               2318205080: 1,
               3115871109: 1,
               3604875100: 1,
               339366994: 1,
               2890452365: 1,
               849340123: 1,
               173872646: 1,
               2343947156: 1,
               655012937: 1,
               3724710748: 1,
               3364370932: 1,
               1996539654: 1,
               2065498185: 1,
               823651274: 1,
               12282461: 1,
               1555719328: 1,
               1417229093: 1,
               138396985: 1
           }, hs = v(function() {
               return L(function(a, c) {
                   var b = vc(c + "/tag.js");
                   Lk[b] || (a[b] = 1);
                   return a
               }, {}, ["mc.yandex.ru", "mc.yandex.com", "cdn.jsdelivr.net/npm/yandex-metrica-watch"])
           }), Tj = 1, xg = {}, Fe = {}, js = E("nb.p", function(a, c) {
               function b(J) {
                   k() || (J = "number" === typeof J ? J : 15E3,
                   J = Cq(a, d(!1), J),
                   r = J.id,
                   x = J.ef,
                   l())
               }
               function d(J) {
                   return function(M) {
                       var Z, ma, db;
                       void 0 === M && (M = (Z = {},
                       Z.ctx = {},
                       Z.callback = B,
                       Z));
                       if (J || !q && !h.Sd) {
                           q = !0;
                           l();
                           r && Bq(a, r);
                           var Wb = m(Y);
                           Z = (Ca(h.o("lastHit")) || 0) < Wb - 18E5;
                           var Ec = .1 > Math.random();
                           h.C("lastHit", Wb);
                           Wb = xa((ma = {},
                           ma.nb = "1",
                           ma.cl = u,
                           ma.ar = "1",
                           ma));
                           ma = pd(c);
                           ma = {
                               G: (db = {},
                               db["page-url"] = ma.url || R(a).href,
                               db),
                               J: Wb
                           };
                           db = Hd(a, P(c)).warn;
                           !M.callback && M.ctx && db('"callback" argument missing');
                           if (J || Z || Ec || !xp(a.location.href, a.document.referrer))
                               return db = f(ma, c).then(function() {
                                   if (!J) {
                                       var gc = .002, hc = c.id === ra.Sg ? 1 : .002, ic, Vc, Jg, Re, Kg;
                                       void 0 === gc && (gc = 1);
                                       void 0 === hc && (hc = 1);
                                       var Id = a.performance;
                                       if (Id && T(Id.getEntriesByType) && (gc = Math.random() > gc,
                                       hc = Math.random() > hc,
                                       !gc || !hc)) {
                                           Id = a.performance.getEntriesByType("resource");
                                           for (var Se = {}, Lg = {}, Te = {}, is = hs(a), Mg = 0; Mg < Id.length; Mg += 1) {
                                               var xb = Id[Mg]
                                                 , Ue = xb.name.replace(/^https?:\/\//, "").split("?")[0]
                                                 , Mk = vc(Ue)
                                                 , Nk = (ic = {},
                                               ic.dns = Math.round(xb.domainLookupEnd - xb.domainLookupStart),
                                               ic.tcp = Math.round(xb.connectEnd - xb.connectStart),
                                               ic.duration = Math.round(xb.duration),
                                               ic.response = Math.round(xb.responseEnd - xb.requestStart),
                                               ic);
                                               "script" !== xb.initiatorType || gc || (Lg[Ue] = y(Nk, (Vc = {},
                                               Vc.name = xb.name,
                                               Vc.decodedBodySize = xb.decodedBodySize,
                                               Vc)));
                                               !Lk[Mk] && !is[Mk] || Se[Ue] || hc || (Se[Ue] = y(Nk, (Jg = {},
                                               Jg.pages = a.location.href,
                                               Jg)))
                                           }
                                           ea(Se).length && (Te.timings8 = Se);
                                           ea(Lg).length && (Te.scripts = Lg);
                                           if (ea(Te).length)
                                               ta(a, "d", c)({
                                                   J: xa((Re = {},
                                                   Re.ar = "1",
                                                   Re.pv = "1",
                                                   Re)),
                                                   ba: ib(a, Te) || void 0,
                                                   G: (Kg = {},
                                                   Kg["page-url"] = a.location && "" + a.location.href,
                                                   Kg)
                                               }, {
                                                   id: ra.Ug,
                                                   $: "0"
                                               })["catch"](D(a, "r.tim.ng2"))
                                       }
                                   }
                               }),
                               Mc(a, "l.o.l", db, M.callback, M.ctx)
                       }
                       return null
                   }
               }
               var e, f = ta(a, "n", c), g = P(c), h = Uc(a, c.id), k = w(w(g, Qe(a)), t(Ha, U("accurateTrackBounce"))), l = w((e = {},
               e.accurateTrackBounce = !0,
               e), ee(a, g)), m = ca(a), p = m(Y), q = !1, r = 0, u = 0, x;
               oa(a, c, function(J) {
                   u = J.Jh - p
               });
               c.Zb && b(c.Zb);
               return {
                   Qi: d(!0),
                   Zb: b,
                   zd: x
               }
           }), Ng = ["yandex_metrika_callback" + xd.callbackPostfix, "yandex_metrika_callbacks" + xd.callbackPostfix], ks = E("cb.i", function(a) {
               var c = Ng[0]
                 , b = Ng[1];
               if (T(a[c]))
                   a[c]();
               "object" === typeof a[b] && A(function(d, e) {
                   a[b][e] = null;
                   Mf(a, d)
               }, a[b]);
               A(function(d) {
                   try {
                       delete a[d]
                   } catch (e) {
                       a[d] = void 0
                   }
               }, Ng)
           }), Ok = {
               xk: Oa(/[/&=?#]/)
           }, Nd = E("go.in", function(a, c, b, d) {
               void 0 === b && (b = "goal");
               return function(e, f, g, h) {
                   var k, l;
                   if (!e || Ok[b] && Ok[b](e))
                       return null;
                   var m = f
                     , p = g || B;
                   T(f) && (p = f,
                   m = void 0,
                   h = g);
                   var q = Ab(a, c, "Reach goal. Counter: " + c.id + ". Goal id: " + e, m)
                     , r = "goal" === b;
                   f = ta(a, "g", c);
                   g = Eo(a, c, e, b);
                   e = g[0];
                   g = g[1];
                   m = f({
                       O: m,
                       J: xa((k = {},
                       k.ar = 1,
                       k)),
                       G: (l = {},
                       l["page-url"] = e,
                       l["page-ref"] = g,
                       l)
                   }, c).then(function() {
                       r && q();
                       d && d()
                   });
                   return Mc(a, "g.s", m, p, h)
               }
           }), ls = ha(function(a, c) {
               Ga(c) ? a.push(c) : A(t(N, na("push", a)), c)
           }), ms = E("cl.p", function(a, c) {
               function b(m, p, q, r) {
                   void 0 === r && (r = {});
                   q ? ce(a, c, {
                       url: q,
                       Hb: !0,
                       Gc: m,
                       Lc: p,
                       sender: d,
                       l: r.ctx,
                       Wa: r.callback,
                       title: r.title,
                       O: r.params
                   }) : f.warn("Empty link")
               }
               var d = ta(a, "2", c)
                 , e = []
                 , f = Hd(a, P(c))
                 , g = P(c)
                 , h = D(a, "s.s.tr", w(ee(a, g), Do));
               g = {
                   l: a,
                   Xa: c,
                   Hh: e,
                   sender: d,
                   globalStorage: O(a),
                   sh: Uc(a, c.id),
                   yk: Vb(a),
                   Jj: w(w(g, Qe(a)), t(Ha, U("trackLinks")))
               };
               g = D(a, "cl.p.c", w(g, Ao));
               g = ia(a).D(a, ["click"], g);
               c.ed && h(c.ed);
               var k = D(a, "file.clc", F([!0, !1], b))
                 , l = D(a, "e.l.l.clc", F([!1, !0], b));
               e = D(a, "add.f.e.clc", ls(e));
               return {
                   file: k,
                   Dh: l,
                   Yg: e,
                   ed: h,
                   zd: g
               }
           }), ns = v(t(U("performance.memory.jsHeapSizeLimit"), na("concat", ""))), ui = "video/ogg video/mp4 video/webm audio/x-aiff audio/x-m4a audio/mpeg audio/aac audio/wav audio/ogg audio/mp4".split(" "), yo = "theora vorbis 1 avc1.4D401E mp4a.40.2 vp8.0 mp4a.40.5".split(" "), xo = "prefers-reduced-motion;prefers-reduced-transparency;prefers-color-scheme: dark;prefers-color-scheme: light;pointer: none;pointer: coarse;pointer: fine;any-pointer: none;any-pointer: coarse;any-pointer: fine;scan: interlace;scan: progressive;color-gamut: srgb;color-gamut: p3;color-gamut: rec2020;update: fast;update: slow;update: none;grid: 0;grid: 2;hover: hover;inverted-colors: inverted;inverted-colors: none".split(";"), wo = ["availWidth", "availHeight", "availTop"], os = ["webgl", "experimental-webgl"], uo = [-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0], Kf = w(Ya("ccf"), pb), ro = "appName vendor deviceMemory hardwareConcurrency maxTouchPoints appVersion productSub appCodeName vendorSub".split(" "), lo = ha(qc)("(ym-disable-clickmap|ym-clickmap-ignore)"), ps = E("clm.p", function(a, c) {
               if (sd(a))
                   return B;
               var b = ta(a, "m", c), d = P(c), e = ca(a), f = e(Y), g = w(w(d, Qe(a)), t(Ha, U("clickmap"))), h, k = null;
               d = D(a, "clm.p.c", function(l) {
                   var m = g();
                   if (m) {
                       var p = O(a)
                         , q = p.o("cls", {
                           cc: 0,
                           x: 0,
                           y: 0
                       });
                       p.C("cls", {
                           cc: q.cc + 1,
                           x: q.x + l.clientX,
                           y: q.y + l.clientY
                       });
                       p = "object" === typeof m ? m : {};
                       q = p.filter;
                       m = p.isTrackHash || !1;
                       var r = z(function(x) {
                           return ("" + x).toUpperCase()
                       }, p.ignoreTags || []);
                       V(h) && (h = p.quota || null);
                       var u = !!p.quota;
                       l = {
                           element: mo(a, l),
                           position: ti(a, l),
                           button: no(l),
                           time: e(Y)
                       };
                       p = R(a).href;
                       if (ko(a, l, k, r, q)) {
                           if (u) {
                               if (!h)
                                   return;
                               --h
                           }
                           r = we(a, l.element);
                           q = r[0];
                           r = r[1];
                           u = jg(a, l.element);
                           q = ["rn", Ra(a), "x", Math.floor(65535 * (l.position.x - u.left) / (q || 1)), "y", Math.floor(65535 * (l.position.y - u.top) / (r || 1)), "t", Math.floor((l.time - f) / 100), "p", ig(a, l.element), "X", l.position.x, "Y", l.position.y];
                           q = I(":", q);
                           m && (q += ":wh:1");
                           jo(a, p, q, b, c);
                           k = l
                       }
                   }
               });
               return ia(a).D(n(a, "document"), ["click"], d)
           }), qs = v(function(a) {
               var c = O(a)
                 , b = c.o("isEU");
               if (V(b)) {
                   var d = Ca(Yd(a, "is_gdpr") || "");
                   if (G(d, [0, 1]))
                       c.C("isEU", d),
                       b = !!d;
                   else if (a = Pa(a).o("wasSynced"),
                   a = n(a, "params.eu"))
                       c.C("isEU", a),
                       b = !!a
               }
               return b
           }, function(a) {
               return O(a).o("isEU")
           }), Ud = E("i.e", qs), rs = E("pr.p", function(a, c) {
               var b, d;
               if (Xf(a)) {
                   var e = ta(a, "5", c)
                     , f = xa((b = {},
                   b.pq = 1,
                   b.ar = 1,
                   b));
                   e({
                       J: f,
                       G: (d = {},
                       d["page-url"] = R(a).href,
                       d["page-ref"] = n(a, "document.referrer") || "",
                       d)
                   }, c)["catch"](D(a, "pr.p.s"))
               }
           }), Sa = t(ea, Nc), ss = E("c.m.p", function(a, c) {
               var b = P(c);
               return w(ee(a, b), io)
           }), ts = E("e.a.p", function(a, c) {
               var b = Aa(a, c);
               b = F([t(N, ua(!0)), W(Boolean, z(w(b, n), ["clickmap", "trackLinks", "accurateTrackBounce"]))], z);
               c.yh && b();
               return b
           }), us = E("s.f.i", function(a, c) {
               return oa(a, c, function(b) {
                   if (n(b, "settings.button_goals") || -1 !== R(a).href.indexOf("yagoalsbuttons=1"))
                       ia(a).D(a, ["click"], D(a, "c.t.c", t(U("target"), F([a, c], Ge(a, c, "", ho))))),
                       Ab(a, c, "Button goal. Counter " + c.id + ". Init.")()
               })
           }), si, vs = E("p.ai", function(a, c) {
               return new K(function(b) {
                   (qd(a) || Pf(a)) && b(oa(a, c, function(d) {
                       var e;
                       return (d = n(d, "settings.sbp")) ? ri(a, y({}, d, (e = {},
                       e.c = c.id,
                       e)), 10) : B
                   }));
                   b(B)
               }
               )
           }), Ve = [], Ac = [], Jd = [], Zn = [[["'(-$&$&$'", 30102, 0], ["'(-$&$&$'", 29009, 0]], [["oWdZ[nc[jh_YW$Yec", 30103, 1], ["oWdZ[nc[jh_YW$Yec", 29010, 1]]], $n = [[["oWdZ[nc[jh_YW$Yec", 30103, 1]], [["oWdZ[nc[jh_YW$Yec", 29010, 1]]], qi = {
               G: {
                   t: 'UV|L7,!"T[rwe&D_>ZIb\\aW#98Y.PC6k'
               }
           }, oi = {
               id: 42822899,
               $: "0"
           }, We, go = (We = {},
           We.s = "p",
           We["8"] = "i",
           We), co = Fb("csp", function(a, c) {
               return ta(a, "s", c)({}, ["https://ymetrica1.com/watch/3/1"])
           }), Xe = "et w v z i u vf".split(" ");
           Xe.push("we");
           var Sn = {
               L: "stamp",
               M: "frameId",
               Z: "meta",
               Ze: "base",
               Cf: "hasBase",
               We: "address",
               Dg: "ua",
               qe: "prev",
               Qf: "namespace",
               Jc: "keystrokes",
               Kf: "isMeta",
               Kc: "modifier",
               ob: "pageWidth",
               mb: "pageHeight",
               sg: "startNode",
               gf: "endNode",
               Jg: "zoomFrom",
               Lg: "zoomTo",
               level: "level",
               duration: "duration",
               xa: "i",
               Nc: "o",
               n: "n",
               r: "r",
               kc: "ct",
               yb: "at",
               Rf: "nm",
               Sf: "ns",
               le: "pa",
               oe: "pr",
               de: "nx",
               Ma: "h",
               Ca: "changes",
               Ve: "a",
               Ye: "b",
               od: "c",
               ke: "op"
           }, Tn = ["attributes", "attrs"], Ye = function() {
               function a(c) {
                   this.l = c
               }
               a.prototype.Aa = function(c) {
                   var b = ae(c);
                   c = z(C(this.Fa, this), b);
                   return pf(ib(this.l, z(function(d, e) {
                       var f;
                       return y({}, b[e], (f = {},
                       f.data = d,
                       f))
                   }, c)))
               }
               ;
               a.prototype.Fa = function(c) {
                   var b = c.data;
                   "string" !== typeof b && (b = ib(this.l, ae(c.data)));
                   return b
               }
               ;
               a.prototype.La = function(c) {
                   return encodeURIComponent(c).length
               }
               ;
               a.prototype.bd = function(c, b) {
                   for (var d = Math.ceil(c.length / b), e = [], f = 0; f < b; f += 1)
                       e.push(c.slice(f * d, d * (f + 1)));
                   return e
               }
               ;
               a.prototype.isEnabled = function() {
                   return !!this.l.JSON
               }
               ;
               return a
           }(), Qn = v(function(a) {
               function c(f, g, h, k) {
                   d[0] = g;
                   h[k] = e[3];
                   h[k + 1] = e[2];
                   h[k + 2] = e[1];
                   h[k + 3] = e[0]
               }
               function b(f, g, h, k) {
                   d[0] = g;
                   h[k] = e[0];
                   h[k + 1] = e[1];
                   h[k + 2] = e[2];
                   h[k + 3] = e[3]
               }
               if ("undefined" === typeof a.Float32Array || "undefined" === typeof a.Uint8Array)
                   return Rn;
               var d = new Float32Array([-0])
                 , e = new Uint8Array(d.buffer);
               return 128 === e[3] ? b : c
           }), Mn = mi(!1), Ln = mi(!0), ws = {
               Dj: "topics",
               hj: "publicationDate",
               ej: "pageUrlCanonical",
               Pj: "updateDate",
               dh: "authors",
               $g: "articleInfo",
               oj: "rubric",
               ij: "publishersHeader",
               gb: "involvedTime",
               dj: "pageTitle",
               Ii: "maxScrolled",
               af: "chars",
               ah: "articleMeta"
           }, xs = function() {
               function a(c) {
                   this.l = c;
                   this.Ib = t(Ba, bd(function(b, d) {
                       b[d[1]] = d[0];
                       return b
                   }, {}))(ws)
               }
               a.prototype.xg = function(c) {
                   var b, d = this.pe(c.data);
                   return {
                       L: ca(this.l)(bg),
                       data: (b = {},
                       b[this.Ib[c.type]] = d,
                       b)
                   }
               }
               ;
               a.prototype.pe = function(c) {
                   var b = this;
                   return da(c) ? z(C(this.pe, this), c) : nb(c) ? t(Ba, bd(function(d, e) {
                       var f = e[0];
                       d[b.Ib[f] || f] = b.pe(e[1]);
                       return d
                   }, {}))(c) : c
               }
               ;
               a.prototype.Fa = function(c) {
                   return Zd(this.l, Hf, this.xg(c))(re(B))
               }
               ;
               a.prototype.La = function(c) {
                   return c[0]
               }
               ;
               a.prototype.bd = function(c) {
                   return [c]
               }
               ;
               a.prototype.Aa = function(c) {
                   var b = this;
                   c = Zd(this.l, fi, {
                       buffer: z(C(this.xg, this), c)
                   });
                   return tc(this.l, c, 20, qe)(Me(function(d) {
                       d = Ef(b.l, d.slice(-4));
                       return tc(b.l, d, 20, qe)
                   }))(Gg(function(d) {
                       return d[d.length - 1]
                   }))
               }
               ;
               a.prototype.isEnabled = function() {
                   return ei(this.l)
               }
               ;
               return a
           }(), Pk = function() {
               function a(c, b, d) {
                   this.df = 0;
                   this.ne = 1;
                   this.kd = 5E3;
                   this.l = c;
                   this.ua = b;
                   this.De = d
               }
               a.prototype.ad = function() {
                   this.df = X(this.l, t(C(this.flush, this), C(this.ad, this)), this.kd, "b.f")
               }
               ;
               a.prototype.send = function(c, b) {
                   var d = this.De(c, b || [], this.ne);
                   this.ne += 1;
                   return d
               }
               ;
               a.prototype.push = function() {}
               ;
               a.prototype.flush = function() {}
               ;
               return a
           }(), Og, Pg = (Og = function(a) {
               function c(b, d, e, f) {
                   void 0 === f && (f = 0);
                   d = a.call(this, b, d, e) || this;
                   d.Le = 0;
                   d.xb = 0;
                   d.Ke = 0;
                   d.buffer = [];
                   d.kd = 2E3;
                   d.aa = ed(b);
                   d.ad();
                   d.Ke = f;
                   return d
               }
               Fa(c, a);
               c.prototype.tf = function(b) {
                   return W(Boolean, this.aa.R("ag", b))
               }
               ;
               c.prototype.sf = function(b, d) {
                   var e = this;
                   b(Xa(D(this.l, "wv2.b.st"), function(f) {
                       e.send(f, d)
                   }))
               }
               ;
               c.prototype.vj = function(b, d) {
                   var e = this;
                   ja(this.l, this.df);
                   var f = Math.ceil(this.ua.La(d) / 63E4)
                     , g = this.ua.bd(d, f);
                   A(function(h, k) {
                       var l, m = y({}, b, (l = {},
                       l.data = h,
                       l.partNum = k + 1,
                       l.end = k + 1 === f,
                       l));
                       l = e.ua.Aa([m], !1);
                       e.sf(l, [m])
                   }, g);
                   this.ad()
               }
               ;
               c.prototype.send = function(b, d) {
                   var e = this;
                   this.aa.R("se", d);
                   return a.prototype.send.call(this, b, d).then(N, function() {
                       e.aa.R("see", d)
                   })
               }
               ;
               c.Gd = function(b, d, e, f, g) {
                   c.md["" + b + d] || (this.md[d] = new c(g,f,e,"m" === d ? 31457280 : 0));
                   return this.md[d]
               }
               ;
               c.prototype.Ci = function() {
                   return this.Ke && this.Le >= this.Ke
               }
               ;
               c.prototype.push = function(b) {
                   var d = this;
                   if (!this.Ci()) {
                       this.aa.R("p", b);
                       var e = this.ua.Fa(b)
                         , f = this.ua.La(e);
                       7E5 < f ? this.vj(b, e) : (e = this.tf(this.buffer.concat([b])),
                       e = L(function(g, h) {
                           return g + d.ua.La(d.ua.Fa(h))
                       }, 0, e),
                       this.xb + e + f >= 7E5 * .7 && this.flush(),
                       this.buffer.push(b),
                       this.xb += f)
                   }
               }
               ;
               c.prototype.D = function(b, d) {
                   this.aa.D([b], d)
               }
               ;
               c.prototype.ea = function(b, d) {
                   this.aa.ea([b], d)
               }
               ;
               c.prototype.flush = function() {
                   var b = this.buffer.concat(this.tf(this.buffer));
                   if (b.length) {
                       this.buffer = [];
                       this.Le += this.xb;
                       this.xb = 0;
                       var d = this.ua.Aa(b);
                       this.sf(d, b)
                   }
               }
               ;
               return c
           }(Pk),
           Og.md = {},
           Og), Kd, Qg = (Kd = {},
           Kd[1] = 500,
           Kd[2] = 500,
           Kd[3] = 0,
           Kd), Rg = function() {
               function a(c, b) {
                   var d, e = this;
                   this.id = "a";
                   this.Rd = !1;
                   this.Db = {};
                   this.qb = {
                       "schema.org": "Article NewsArticle Movie BlogPosting Review Recipe Answer".split(" "),
                       Uf: ["article"]
                   };
                   this.Oe = (d = {},
                   d.Answer = 3,
                   d.Review = 2,
                   d);
                   this.qh = v(function(f, g) {
                       qb(e.l, e.Ka, "Warning: content has only " + g.chars + " chars. Required " + Qg[g.type], g)
                   });
                   this.l = c;
                   this.root = Yb(c);
                   this.Ka = b
               }
               a.prototype.Da = function(c) {
                   return c.element
               }
               ;
               a.prototype.uf = function(c, b) {
                   var d = this, e;
                   D(this.l, "P.s." + b, function() {
                       e = d.Db[b].call(d, c)
                   })();
                   return e
               }
               ;
               a.prototype.gj = function(c) {
                   var b = y({}, c);
                   this.Rd && !b.id && G(c.type, [3, 2]) && (c = I(", ", z(U("name"), b.authors || [])),
                   b.pageTitle = c + ": " + b.pageTitle);
                   b.pageTitle || (b.pageTitle = this.hi(b.ec));
                   b.pageUrlCanonical || (c = b.id,
                   b.pageUrlCanonical = ("string" !== typeof c ? 0 : /^(https?:)\/\//.test(c)) ? b.id : this.bi());
                   b.id || (b.id = b.pageTitle || b.pageUrlCanonical);
                   return b
               }
               ;
               a.prototype.wa = function(c) {
                   var b = this
                     , d = {}
                     , e = this.Da(c);
                   if (!e)
                       return null;
                   d.type = c.type;
                   A(function(g) {
                       d[g] = b.uf(c, g)
                   }, ea(this.Db));
                   var f = ca(this.l);
                   d.stamp = f(bg);
                   d.element = c.element;
                   d.ec = e;
                   d = this.gj(d);
                   d.id = d.id ? vc(d.id) : 1;
                   d.update = function(g) {
                       return b.Da(c) ? b.uf(c, g) : void 0
                   }
                   ;
                   return d
               }
               ;
               a.prototype.hi = function(c) {
                   for (var b = 1; 5 >= b; b += 1) {
                       var d = Ta(Kc("h" + b, c));
                       if (d)
                           return d
                   }
               }
               ;
               a.prototype.bi = function() {
                   var c = Kc('[rel="canonical"]', this.root);
                   if (c)
                       return c.href
               }
               ;
               a.prototype.Af = function() {
                   return 1
               }
               ;
               a.prototype.uc = function() {
                   return []
               }
               ;
               a.prototype.Ih = function() {
                   var c = this
                     , b = this.uc()
                     , d = 1;
                   return L(function(e, f) {
                       var g = c.wa({
                           element: f,
                           type: c.Af(f)
                       }) || [];
                       da(g) || (g = [g]);
                       g = L(function(h, k) {
                           var l = h.values
                             , m = h.Ef;
                           k && k.chars > Qg[k.type] && !G(k.id, m) ? (l.push(k),
                           m.push(k.id)) : k && k.chars <= Qg[k.type] && c.qh(k.id, k);
                           return {
                               values: l,
                               Ef: m
                           }
                       }, {
                           values: [],
                           Ef: z(U("id"), e)
                       }, g).values;
                       return e.concat(z(function(h) {
                           var k;
                           h = y((k = {
                               index: d,
                               og: !1
                           },
                           k.involvedTime = 0,
                           k), h);
                           d += 1;
                           return h
                       }, g))
                   }, [], b)
               }
               ;
               return a
           }(), Qk = function(a) {
               function c() {
                   var b, d = null !== a && a.apply(this, arguments) || this;
                   d.id = "j";
                   d.Rd = !0;
                   d.cf = I(",", ['script[type="application/ld+json"]', 'script[type="application/json+ld"]', 'script[type="ld+json"]', 'script[type="json+ld"]']);
                   d.Db = (b = {},
                   b.id = function(e) {
                       var f = e.data["@id"];
                       e = e.data.mainEntity || e.data.mainEntityOfPage;
                       !f && e && (f = e["@id"]);
                       return f
                   }
                   ,
                   b.chars = function(e) {
                       return "string" === typeof e.data.text ? e.data.text.length : Sb(this.Da(e)).length
                   }
                   ,
                   b.authors = function(e) {
                       var f = [];
                       f = f.concat(this.tc(e.data, "author"));
                       f = f.concat(this.tc(e.data.mainEntity, "author"));
                       return f.concat(this.tc(e.data.mainEntityOfPage, "author"))
                   }
                   ,
                   b.pageTitle = function(e) {
                       var f = e.data.headline || "";
                       e.data.hk && (f += " " + e.data.alternativeHeadline);
                       "" === f && (e.data.name ? f = e.data.name : e.data.itemReviewed && (f = e.data.itemReviewed));
                       3 === e.type && e.data.parentItem && (f = e.data.parentItem.text);
                       return f
                   }
                   ,
                   b.updateDate = function(e) {
                       return e.data.dateModified || ""
                   }
                   ,
                   b.publicationDate = function(e) {
                       return e.data.datePublished || ""
                   }
                   ,
                   b.pageUrlCanonical = function(e) {
                       return e.data.url
                   }
                   ,
                   b.topics = function(e) {
                       return this.tc(e.data, "about", ["name", "alternateName"])
                   }
                   ,
                   b.rubric = function(e) {
                       var f = this
                         , g = this.Da(e);
                       e = W(Boolean, z(function(h) {
                           if (h = Bb(f.l, Sb(h))) {
                               var k = f.wf(h);
                               if (k)
                                   return L(function(l, m) {
                                       return l ? l : "BreadcrumbList" === m["@type"] ? m : l
                                   }, null, k);
                               if ("BreadcrumbList" === h["@type"])
                                   return h
                           }
                           return null
                       }, [e.element].concat(ub(this.cf, document.body === g ? document.documentElement : g))));
                       return e.length && (e = e[0].itemListElement,
                       da(e)) ? W(Boolean, z(function(h) {
                           return h.item && !f.l.isNaN(h.position) ? {
                               name: h.item.name || h.name,
                               position: h.position
                           } : null
                       }, e)) : []
                   }
                   ,
                   b);
                   return d
               }
               Fa(c, a);
               c.prototype.tc = function(b, d, e) {
                   void 0 === e && (e = ["name"]);
                   if (!b || !b[d])
                       return [];
                   b = da(b[d]) ? b[d] : [b[d]];
                   b = W(N, z(function(f) {
                       return f ? "string" === typeof f ? f : L(function(g, h) {
                           return g || "" + f[h]
                       }, "", e) : null
                   }, b));
                   return z(function(f) {
                       var g;
                       return g = {},
                       g.name = f,
                       g
                   }, b)
               }
               ;
               c.prototype.Da = function(b) {
                   var d = b.element
                     , e = b.data["@id"]
                     , f = b.data.url;
                   b = null;
                   f && "string" === typeof f && (b = this.nf(f));
                   !b && e && "string" === typeof e && (b = this.nf(e));
                   b || (b = e = d.parentNode,
                   !Xb("head", this.l, d) && e && 0 !== Sb(e).length) || (b = this.l.document.body);
                   return b
               }
               ;
               c.prototype.nf = function(b) {
                   try {
                       var d = Lc(this.l, b).hash;
                       if (d) {
                           var e = Kc(d, this.l.document.body);
                           if (e)
                               return e
                       }
                   } catch (f) {}
                   return null
               }
               ;
               c.prototype.me = function(b) {
                   return this.Oe[b["@type"]] || 1
               }
               ;
               c.prototype.wa = function(b) {
                   var d = this
                     , e = b.element;
                   if (!b.data && (b.data = Bb(this.l, Sb(e)),
                   !b.data || !/schema\.org/.test(b.data["@context"]) && !da(b.data)))
                       return null;
                   var f = this.wf(b.data);
                   if (f)
                       return z(function(h) {
                           if (!G(h["@type"], d.qb["schema.org"]))
                               return null;
                           h = {
                               element: e,
                               data: h,
                               type: d.me(h)
                           };
                           return a.prototype.wa.call(d, h)
                       }, f);
                   if ("QAPage" === b.data["@type"]) {
                       var g = b.data.mainEntity || b.data.mainEntityOfPage;
                       if (!g)
                           return null
                   }
                   "Question" === b.data["@type"] && (g = b.data);
                   return g ? (b = lc(w(g, n), ["acceptedAnswer", "suggestedAnswer"]),
                   z(function(h) {
                       var k;
                       if (!h || !G(h["@type"], d.qb["schema.org"]))
                           return null;
                       h = {
                           element: e,
                           type: d.me(h),
                           data: y((k = {},
                           k.parentItem = g,
                           k), h)
                       };
                       return a.prototype.wa.call(d, h)
                   }, b)) : G(b.data["@type"], this.qb["schema.org"]) ? a.prototype.wa.call(this, y(b, {
                       type: this.me(b.data)
                   })) : null
               }
               ;
               c.prototype.uc = function() {
                   return ub(this.cf, this.root)
               }
               ;
               c.prototype.wf = function(b) {
                   return da(b) && b || b && da(b["@graph"]) && b["@graph"]
               }
               ;
               return c
           }(Rg), Sg = function(a) {
               function c() {
                   var b, d = null !== a && a.apply(this, arguments) || this;
                   d.id = "s";
                   d.Rd = !0;
                   d.Mj = na("exec", new RegExp("schema.org\\/(" + I("|", ea(d.Oe)) + ")$"));
                   d.Db = (b = {},
                   b.id = function(e) {
                       e = e.element;
                       var f = bb(this.l, e, "identifier");
                       return f ? Ta(f) : (f = bb(this.l, e, "mainEntityOfPage")) && f.getAttribute("itemid") ? f.getAttribute("itemid") : null
                   }
                   ,
                   b.chars = function(e) {
                       var f = 0;
                       e = e.element;
                       for (var g = ["articleBody", "reviewBody", "recipeInstructions", "description", "text"], h = 0; h < g.length; h += 1) {
                           var k = bb(this.l, e, g[h]);
                           if (k) {
                               f = Ta(k).length;
                               break
                           }
                       }
                       e = Sb(e);
                       0 === f && e && (f += e.length);
                       return f
                   }
                   ,
                   b.topics = function(e) {
                       var f = this
                         , g = Ed(this.l, e.element, "about");
                       return z(function(h) {
                           var k = {
                               name: Ta(h)
                           };
                           if (g = bb(f.l, h, "name"))
                               k.name = Ta(g);
                           return k
                       }, g)
                   }
                   ,
                   b.rubric = function(e) {
                       var f = this;
                       (e = Kc('[itemtype$="schema.org/BreadcrumbList"]', e.element)) || (e = Kc('[itemtype$="schema.org/BreadcrumbList"]', this.root));
                       return e ? z(function(g) {
                           return {
                               name: Ta(bb(f.l, g, "name")),
                               position: Ta(bb(f.l, g, "position"))
                           }
                       }, Ed(this.l, e, "itemListElement")) : []
                   }
                   ,
                   b.updateDate = function(e) {
                       return (e = bb(this.l, e.element, "dateModified")) ? Uj(e) : ""
                   }
                   ,
                   b.publicationDate = function(e) {
                       return (e = bb(this.l, e.element, "datePublished")) ? Uj(e) : ""
                   }
                   ,
                   b.pageUrlCanonical = function(e) {
                       e = Ed(this.l, e.element, "url");
                       if (e.length) {
                           var f = e[0];
                           return f.href ? f.href : Ta(e)
                       }
                       return null
                   }
                   ,
                   b.pageTitle = function(e) {
                       var f = ""
                         , g = e.element
                         , h = bb(this.l, g, "headline");
                       h && (f += Ta(h));
                       (h = bb(this.l, g, "alternativeHeadline")) && (f += " " + Ta(h));
                       "" === f && ((h = bb(this.l, g, "name")) || (h = bb(this.l, g, "itemReviewed")),
                       h && (f += Ta(h)));
                       3 === e.type && (e = Xb('[itemtype$="schema.org/Question"]', this.l, g)) && (e = bb(this.l, e, "text")) && (f += Ta(e));
                       return f
                   }
                   ,
                   b.authors = function(e) {
                       var f = this;
                       e = Ed(this.l, e.element, "author");
                       return z(function(g) {
                           var h, k = (h = {},
                           h.name = "",
                           h);
                           /.+schema.org\/(Person|Organization)/.test(g.getAttribute("itemtype") || "") && (h = bb(f.l, g, "name")) && (k.name = Ta(h));
                           k.name || (k.name = g.getAttribute("content") || Sb(g) || g.getAttribute("href"));
                           return k
                       }, e)
                   }
                   ,
                   b);
                   return d
               }
               Fa(c, a);
               c.prototype.Af = function(b) {
                   b = b.getAttribute("itemtype") || "";
                   return (b = this.Mj(b)) ? this.Oe[b[1]] : 1
               }
               ;
               c.prototype.wa = function(b) {
                   return b.element && Sb(b.element).length ? a.prototype.wa.call(this, b) : null
               }
               ;
               c.prototype.uc = function() {
                   var b = I(",", z(function(d) {
                       return '[itemtype$="schema.org/' + d + '"]'
                   }, this.qb["schema.org"]));
                   return ub(b, this.root)
               }
               ;
               return c
           }(Rg), Rk = function(a) {
               function c(b, d) {
                   var e, f = a.call(this, b, d) || this;
                   f.id = "o";
                   f.Db = (e = {},
                   e.chars = function(g) {
                       g = this.Da(g);
                       return Sb(g).length
                   }
                   ,
                   e.authors = function(g) {
                       return this.Fd(g.data.author)
                   }
                   ,
                   e.pageTitle = function(g) {
                       return this.Ac(g.data.title) || ""
                   }
                   ,
                   e.updateDate = function(g) {
                       return this.Ac(g.data.modified_time)
                   }
                   ,
                   e.publicationDate = function(g) {
                       return this.Ac(g.data.published_time)
                   }
                   ,
                   e.pageUrlCanonical = function(g) {
                       return this.Ac(g.data.url)
                   }
                   ,
                   e.rubric = function(g) {
                       return this.Fd(g.data.section)
                   }
                   ,
                   e.topics = function(g) {
                       return this.Fd(g.data.tag)
                   }
                   ,
                   e);
                   f.zh = new RegExp("^(og:)?((" + I("|", f.qb.Uf) + "):)?");
                   return f
               }
               Fa(c, a);
               c.prototype.Fd = function(b) {
                   var d;
                   return b ? da(b) ? z(function(e) {
                       var f;
                       return f = {},
                       f.name = e,
                       f
                   }, b) : [(d = {},
                   d.name = b,
                   d)] : []
               }
               ;
               c.prototype.Ac = function(b) {
                   return da(b) ? b.length ? b[0] : null : b
               }
               ;
               c.prototype.uc = function() {
                   var b = ub('meta[property="og:type"]', this.l.document.body);
                   return [this.l.document.head].concat(b)
               }
               ;
               c.prototype.Vh = function(b) {
                   var d = this
                     , e = b.element
                     , f = {}
                     , g = this.Da(b);
                   e = ub("meta[property]", e === this.l.document.head ? e : g);
                   if (e.length)
                       A(function(h) {
                           try {
                               if (h.parentNode === g || h.parentNode === d.l.document.head) {
                                   var k = h.getAttribute("property").replace(d.zh, "")
                                     , l = Ta(h);
                                   f[k] ? da(f[k]) ? f[k].push(l) : f[k] = [f[k], l] : f[k] = l
                               }
                           } catch (m) {
                               be(d.l, "og.ed", m)
                           }
                       }, e);
                   else
                       return null;
                   return G(f.type, this.qb.Uf) ? y(b, {
                       data: f
                   }) : null
               }
               ;
               c.prototype.Da = function(b) {
                   b = b.element;
                   var d = this.l.document;
                   return b === d.head ? d.body : b.parentNode
               }
               ;
               c.prototype.wa = function(b) {
                   return (b = this.Vh(b)) ? a.prototype.wa.call(this, b) : null
               }
               ;
               return c
           }(Rg), Sk = "resize scroll mousemove mousedown click windowfocus keydown orientationchange change focus touchmove touchstart".split(" "), ys = "id pageTitle stamp chars authors updateDate publicationDate pageUrlCanonical topics rubric".split(" "), zs = function() {
               function a(c, b, d, e) {
                   this.Hc = !1;
                   this.Z = {};
                   this.scroll = {
                       x: 0,
                       y: 0
                   };
                   this.gb = this.Of = 0;
                   this.ae = this.Xf = "";
                   this.fa = [];
                   this.Ga = 0;
                   this.ub = {
                       Ma: 0,
                       Re: 0
                   };
                   this.Ng = ys;
                   this.buffer = d;
                   this.Yb = C(this.Yb, this);
                   this.wc = C(this.wc, this);
                   this.Oc = C(this.Oc, this);
                   this.l = c;
                   this.Ka = e;
                   this.Yc = b;
                   this.Wd = "pai" + b.id;
                   this.Eb();
                   this.jf = ia(this.l);
                   this.time = ca(this.l);
                   this.Eg();
                   this.Md = O(this.l)
               }
               a.prototype.start = function() {
                   var c = this;
                   if (!this.Hc) {
                       this.buffer.D("ag", this.wc);
                       this.buffer.D("se", this.Oc);
                       this.xj();
                       var b = this.Md.o(this.Wd, [])
                         , d = !b.length;
                       b.push(C(this.Ei, this));
                       this.Md.Ta(this.Wd, b);
                       d && this.fg();
                       var e = function(f, g) {
                           return (f.Ae || 0) <= (g.Ae || 0) ? g : f
                       };
                       ia(this.l).D(this.l, ["click"], function(f) {
                           if (c.fa.length) {
                               f = vi(f);
                               var g = R(c.l).hostname, h;
                               if (h = f)
                                   h = de(f.hostname) === de(g);
                               h && (f = L(e, c.fa[0], c.fa).id,
                               g = Vb(c.l),
                               Uc(c.l, c.Ka.split(":")[0]).C("pai", f + "-" + g))
                           }
                       });
                       this.Yb({
                           type: "page",
                           target: this.l
                       })
                   }
               }
               ;
               a.prototype.stop = function() {
                   this.buffer.ea("se", this.Oc);
                   this.buffer.ea("ag", this.wc);
                   this.Nj();
                   this.Hc = !0
               }
               ;
               a.prototype.Mf = function(c) {
                   return Xb("html", this.l, c) !== this.l.document.documentElement
               }
               ;
               a.prototype.fg = function() {
                   var c = this;
                   D(this.l, "p.ic" + this.Yc.id, function() {
                       if (!c.Hc) {
                           var b = c.Md.o(c.Wd)
                             , d = c.Yc.Ih();
                           A(function(e) {
                               var f = z(function(g) {
                                   return y({}, g)
                               }, d);
                               T(e) && e(f)
                           }, b);
                           c.Ga = X(c.l, C(c.fg, c), 1E3, "p")
                       }
                   })()
               }
               ;
               a.prototype.Ei = function(c) {
                   this.Hc || (this.Oj(c),
                   this.Qj(),
                   this.sj())
               }
               ;
               a.prototype.Yb = function(c) {
                   var b = this;
                   D(this.l, "p.ec." + this.Yc.id, function() {
                       try {
                           var d = c.type;
                           var e = c.target
                       } catch (l) {
                           return
                       }
                       var f = "page" === d;
                       if ("scroll" === d || f) {
                           var g = [b.l, b.l.document, b.l.document.documentElement, xc(b.l)];
                           G(e, g) && b.Eb()
                       }
                       ("resize" === d || f) && b.Eg();
                       d = b.time(Y);
                       var h = Math.min(d - b.Of, 5E3);
                       b.gb += Math.round(h);
                       b.Of = d;
                       if (b.Z && b.scroll && b.ub) {
                           var k = b.ub.Ma * b.ub.Re;
                           b.fa = z(function(l) {
                               var m = y({}, l)
                                 , p = b.Z[m.id]
                                 , q = fd(l.ec);
                               if (!p || b.Mf(m.element) || !q)
                                   return m;
                               l = b.l.Math;
                               p = l.max((b.scroll.y + b.ub.Ma - p.y) / p.height, 0);
                               var r = q.height * q.width;
                               q = b.hh(q);
                               m.Ae = q / k;
                               m.visibility = q / r;
                               if (.9 <= m.visibility || .1 <= m.Ae)
                                   m.involvedTime += h;
                               m.maxScrolled = l.round(1E4 * p) / 1E4;
                               return m
                           }, b.fa)
                       }
                   })()
               }
               ;
               a.prototype.hh = function(c) {
                   var b = c.top
                     , d = c.bottom
                     , e = c.left
                     , f = this.ub
                     , g = f.Re;
                   f = f.Ma;
                   var h = this.l.Math;
                   c = h.min(h.max(c.right, 0), g) - h.min(h.max(e, 0), g);
                   return (h.min(h.max(d, 0), f) - h.min(h.max(b, 0), f)) * c
               }
               ;
               a.prototype.Oj = function(c) {
                   var b = z(function(d) {
                       return d.id
                   }, this.fa);
                   this.fa = this.fa.concat(W(function(d) {
                       return !G(d.id, b)
                   }, c))
               }
               ;
               a.prototype.Eg = function() {
                   var c = kg(this.l) || Ad(this.l);
                   this.ub = {
                       Re: c[0],
                       Ma: c[1]
                   }
               }
               ;
               a.prototype.Qj = function() {
                   var c = this;
                   D(this.l, "p.um." + this.Yc.id, function() {
                       var b = [];
                       c.Eb();
                       c.Z = L(function(d, e) {
                           var f;
                           if (c.Mf(e.element))
                               b.push(e),
                               delete d[e.id];
                           else {
                               var g = (f = {},
                               f.id = e.id,
                               f.involvedTime = Math.max(e.involvedTime, 0),
                               f.maxScrolled = e.maxScrolled || 0,
                               f.chars = e.update ? e.update("chars") || 0 : 0,
                               f);
                               e.ec && (f = fd(e.ec)) && (g.x = Math.max(Math.round(f.left) + c.scroll.x, 0),
                               g.y = Math.max(Math.round(f.top) + c.scroll.y, 0),
                               g.width = Math.round(f.width),
                               g.height = Math.round(f.height));
                               d[e.id] = g
                           }
                           return d
                       }, {}, c.fa);
                       A(function(d) {
                           d = Ie(c.l)(d, c.fa);
                           c.fa.splice(d, 1)
                       }, b)
                   })()
               }
               ;
               a.prototype.Oc = function() {
                   this.Xf = this.ae
               }
               ;
               a.prototype.wc = function() {
                   var c, b, d = z(w(this.Z, n), ea(this.Z));
                   return d.length && (this.ae = ib(this.l, d),
                   this.Xf !== this.ae) ? (c = {},
                   c.type = "publishersHeader",
                   c.data = (b = {},
                   b.articleMeta = d || [],
                   b.involvedTime = this.gb,
                   b),
                   c) : null
               }
               ;
               a.prototype.sj = function() {
                   var c = this;
                   if (this.fa.length) {
                       var b = W(function(d) {
                           return !d.og
                       }, this.fa);
                       A(function(d) {
                           var e, f = L(function(g, h) {
                               d[h] && (g[h] = d[h]);
                               return g
                           }, {}, c.Ng);
                           c.buffer.push((e = {},
                           e.type = "articleInfo",
                           e.stamp = f.stamp,
                           e.data = f,
                           e));
                           d.og = !0
                       }, b);
                       b.length && qb(this.l, this.Ka, "Publisher content info found: ", b)
                   }
               }
               ;
               a.prototype.xj = function() {
                   this.jf.D(this.l, Sk, this.Yb)
               }
               ;
               a.prototype.Nj = function() {
                   this.jf.Wb(this.l, Sk, this.Yb)
               }
               ;
               a.prototype.Eb = function() {
                   this.scroll = {
                       x: this.l.pageXOffset || n(this.l, "document.documentElement.scrollLeft") || 0,
                       y: this.l.pageYOffset || n(this.l, "document.documentElement.scrollLeft") || 0
                   }
               }
               ;
               return a
           }(), Ld = {};
           Qk && (Ld.json_ld = Qk);
           Sg && (Ld.schema = Sg,
           Ld.microdata = Sg);
           Rk && (Ld.opengraph = Rk);
           var As = E("p.p", function(a, c) {
               function b(l, m, p) {
                   return e(y({}, k, {
                       ba: l,
                       bf: di(m)
                   }), c, p)["catch"](D(a, "s.ww.p"))
               }
               if (!Da("querySelectorAll", a.document.querySelectorAll))
                   return K.resolve();
               var d = [new Ye(a)];
               d.unshift(new xs(a));
               var e = ta(a, "p", c)
                 , f = Za(function(l) {
                   return l.isEnabled()
               }, d);
               d = xa();
               var g = Uc(a, c.id)
                 , h = g.o("pai");
               h && (g.oc("pai"),
               d.C("pai", h));
               var k = {
                   G: {},
                   J: d,
                   If: !(f instanceof Ye)
               };
               return oa(a, c, D(a, "ps.s", function(l) {
                   if (l = n(l, "settings.publisher.schema")) {
                       l = Dj(c) ? "microdata" : l;
                       var m = Ld[l];
                       if (m && f) {
                           var p = P(c)
                             , q = Pg.Gd(p, "e", b, f, a);
                           m = new m(a,p);
                           (new zs(a,m,q,p)).start();
                           qb(a, p, 'Publishers analytics schema "' + l + '"')
                       }
                   }
               }))
           }), Bs = function() {
               function a(c, b) {
                   this.l = c;
                   this.Th = b
               }
               a.prototype.Aa = function(c) {
                   return pf(lc(C(this.Fa, this), c))
               }
               ;
               a.prototype.Fa = function(c, b) {
                   var d = this
                     , e = []
                     , f = this.Th(this.l, b && b.type, c.type);
                   f && (e = lc(function(g) {
                       return g({
                           l: d.l,
                           ja: c
                       }) || []
                   }, f));
                   return e
               }
               ;
               a.prototype.La = function(c) {
                   return c.length
               }
               ;
               a.prototype.bd = function(c) {
                   return [c]
               }
               ;
               a.prototype.isEnabled = function() {
                   return !0
               }
               ;
               return a
           }(), Fm = function(a) {
               function c(b, d, e) {
                   b = a.call(this, b, d, e) || this;
                   b.buffer = [];
                   b.Og = 7500;
                   b.kd = 3E4;
                   b.ad();
                   return b
               }
               Fa(c, a);
               c.prototype.push = function(b, d) {
                   var e = this.ua.Fa(b, d);
                   Wa(this.buffer, e);
                   this.ua.La(this.buffer) > this.Og && this.flush()
               }
               ;
               c.prototype.flush = function() {
                   var b = this.buffer;
                   b.length && (this.send(b),
                   this.buffer = [])
               }
               ;
               return c
           }(Pk), Wm = /opera mini/i, Tk = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state contact.*".split(" "), Mm = ["email", "tel"], Um = /ym-hide-content/, Vm = /ym-show-content/, Rm = /^[\w\u0410-\u042f\u0430-\u044f]$/, Sm = [65, 90], Tm = [97, 122], Pm = "color radio checkbox date datetime-local email month number password range search tel text time url week".split(" "), Nm = new RegExp("(" + I("|", Tk) + ")","i"), Vj = ["password", "passwd", "pswd"], Om = new RegExp("(" + I("|", Tk.concat("\u0438\u043c\u044f \u0444\u0430\u043c\u0438\u043b\u0438\u044f \u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0434\u0435\u043a\u0441 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0430\u0434\u0440\u0435\u0441 \u043f\u0430\u0441\u043f\u043e\u0440\u0442 \u043d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f(-|\\.|_|\\s){0,2}\u043f\u043e\u0447\u0442\u0430 \u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2}\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0434\u043e\u043c \u0443\u043b\u0438\u0446\u0430 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0433\u043e\u0440\u043e\u0434 \u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(" "))) + ")","i"), Qa = "metrikaId_" + Math.random(), pc = {
               ud: 0
           }, Iq = v(function() {
               var a;
               return a = {},
               a.A = 1,
               a.ABBR = 2,
               a.ACRONYM = 3,
               a.ADDRESS = 4,
               a.APPLET = 5,
               a.AREA = 6,
               a.B = 7,
               a.BASE = 8,
               a.BASEFONT = 9,
               a.BDO = 10,
               a.BIG = 11,
               a.BLOCKQUOTE = 12,
               a.BODY = 13,
               a.BR = 14,
               a.BUTTON = 15,
               a.CAPTION = 16,
               a.CENTER = 17,
               a.CITE = 18,
               a.CODE = 19,
               a.COL = 20,
               a.COLGROUP = 21,
               a.DD = 22,
               a.DEL = 23,
               a.DFN = 24,
               a.DIR = 25,
               a.DIV = 26,
               a.DL = 27,
               a.DT = 28,
               a.EM = 29,
               a.FIELDSET = 30,
               a.FONT = 31,
               a.FORM = 32,
               a.FRAME = 33,
               a.FRAMESET = 34,
               a.H1 = 35,
               a.H2 = 36,
               a.H3 = 37,
               a.H4 = 38,
               a.H5 = 39,
               a.H6 = 40,
               a.HEAD = 41,
               a.HR = 42,
               a.HTML = 43,
               a.I = 44,
               a.IFRAME = 45,
               a.IMG = 46,
               a.INPUT = 47,
               a.INS = 48,
               a.ISINDEX = 49,
               a.KBD = 50,
               a.LABEL = 51,
               a.LEGEND = 52,
               a.LI = 53,
               a.LINK = 54,
               a.MAP = 55,
               a.MENU = 56,
               a.META = 57,
               a.NOFRAMES = 58,
               a.NOSCRIPT = 59,
               a.OBJECT = 60,
               a.OL = 61,
               a.OPTGROUP = 62,
               a.OPTION = 63,
               a.P = 64,
               a.PARAM = 65,
               a.PRE = 66,
               a.Q = 67,
               a.S = 68,
               a.SAMP = 69,
               a.SCRIPT = 70,
               a.SELECT = 71,
               a.SMALL = 72,
               a.SPAN = 73,
               a.STRIKE = 74,
               a.STRONG = 75,
               a.STYLE = 76,
               a.SUB = 77,
               a.SUP = 78,
               a.TABLE = 79,
               a.TBODY = 80,
               a.TD = 81,
               a.TEXTAREA = 82,
               a.TFOOT = 83,
               a.TH = 84,
               a.THEAD = 85,
               a.TITLE = 86,
               a.TR = 87,
               a.TT = 88,
               a.U = 89,
               a.UL = 90,
               a.VAR = 91,
               a.NOINDEX = 100,
               a
           }), Fq = [17, 18, 38, 32, 39, 15, 11, 7, 1], Cs = function() {
               var a = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state".split(" ");
               return {
                   vk: new RegExp("(" + I("|", a) + ")","i"),
                   Fk: new RegExp("(" + I("|", a.concat("\u0438\u043c\u044f;\u0444\u0430\u043c\u0438\u043b\u0438\u044f;\u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e;\u0438\u043d\u0434\u0435\u043a\u0441;\u0442\u0435\u043b\u0435\u0444\u043e\u043d;\u0430\u0434\u0440\u0435\u0441;\u043f\u0430\u0441\u043f\u043e\u0440\u0442;\u041d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b;\u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2} \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f;\u0434\u043e\u043c;\u0443\u043b\u0438\u0446\u0430;\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430;\u0433\u043e\u0440\u043e\u0434;\u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(";"))) + ")","i"),
                   qk: /ym-record-keys/i,
                   Si: "\u2022",
                   Ek: 88
               }
           }(), ak = eb(w(Cs.Si, N)), id = !0, Ag = "", Bg = !1, Cg = !0, Dg = !1, Km = ha(function(a, c) {
               var b = F([a, "efv." + c.event], D);
               c.N = z(t(N, b), c.N);
               return c
           }), Uk = v(function(a) {
               var c = []
                 , b = []
                 , d = [];
               a.document.attachEvent && !a.opera && (c.push(yf),
               b.push(Mq),
               b.push(Nq));
               a.document.addEventListener ? c.push(Yj) : (b.push(Xj),
               d.push(Yj));
               c = va([{
                   target: a,
                   type: "window",
                   event: "beforeunload",
                   N: [B]
               }, {
                   target: a,
                   type: "window",
                   event: "unload",
                   N: [B]
               }, {
                   event: "click",
                   N: [He]
               }, {
                   event: "dblclick",
                   N: [He]
               }, {
                   event: "mousedown",
                   N: [He]
               }, {
                   event: "mouseup",
                   N: [Pq]
               }, {
                   event: "keydown",
                   N: [Qq]
               }, {
                   event: "keypress",
                   N: [Rq]
               }, {
                   event: "copy",
                   N: [ck]
               }, {
                   event: "blur",
                   N: c
               }, {
                   event: "focusin",
                   N: b
               }, {
                   event: "focusout",
                   N: d
               }], !a.document.attachEvent || a.opera ? [{
                   target: a,
                   type: "window",
                   event: "focus",
                   N: [Yh]
               }, {
                   target: a,
                   type: "window",
                   event: "blur",
                   N: [yf]
               }] : [], a.document.addEventListener ? [{
                   event: "focus",
                   N: [Xj]
               }, {
                   event: "change",
                   N: [Zj]
               }, {
                   event: "submit",
                   N: [ek]
               }] : [{
                   type: "formInput",
                   event: "change",
                   N: [Zj]
               }, {
                   type: "form",
                   event: "submit",
                   N: [ek]
               }]);
               return Jm(a, c)
           }), Hm = v(function(a) {
               return va(xc(a) ? [{
                   target: a,
                   type: "document",
                   event: "mouseleave",
                   N: [Sq]
               }] : [])
           }), Ds = ["submit", "beforeunload", "unload"], Es = v(function(a, c) {
               var b = c(a);
               return L(function(d, e) {
                   d[e.type + ":" + e.event] = e.N;
                   return d
               }, {}, b)
           }), Fs = w(Uk, function(a, c, b, d) {
               return Es(c, a)[b + ":" + d] || []
           }), Im = /^\s*function submit\(\)/, Gs = E("fw.p", function(a, c) {
               var b;
               if (!(b = c.ff || !c.vb)) {
                   var d = O(a)
                     , e = !1;
                   b = d.o("hitParam", {});
                   var f = P(c);
                   b[f] && (d = d.o("counters", {}),
                   e = !(!wg(c.$) || d[f]));
                   b[f] = 1;
                   b = e
               }
               if (b)
                   return K.resolve(B);
               b = new Bs(a,Fs);
               return Em(a, c, b, Uk, Ds)
           }), Ua = function() {
               function a(c, b, d) {
                   this.Gi = "wv2.c";
                   this.Kb = [];
                   this.ga = [];
                   this.l = c;
                   this.K = tf(c, this, d, this.Gi);
                   this.F = b;
                   this.Za = this.F.Xh();
                   this.start = this.K.H(this.start, "st");
                   this.stop = this.K.H(this.stop, "sp")
               }
               a.prototype.start = function() {
                   var c = this;
                   this.Kb = z(function(b) {
                       var d = b[0]
                         , e = b[2];
                       b = C(c.K.H(b[1], d[0]), c);
                       return c.Za.D(e || c.l, d, b)
                   }, this.ga)
               }
               ;
               a.prototype.stop = function() {
                   A(Ha, this.Kb)
               }
               ;
               a.prototype.Y = function(c) {
                   return this.F.oa().Y(c)
               }
               ;
               return a
           }(), Cm = ["checkbox", "radio"], Dm = /pwd|value|password/i, Tg = U("location.href"), Hs = function(a) {
               function c(b, d, e) {
                   d = a.call(this, b, d, e) || this;
                   d.ma = {
                       elements: [],
                       attributes: []
                   };
                   d.index = 0;
                   d.ee = d.K.H(d.ee, "o");
                   d.wd = d.K.H(d.wd, "io");
                   d.ld = d.K.H(d.ld, "ao");
                   d.ue = d.K.H(d.ue, "a");
                   d.se = d.K.H(d.se, "at");
                   d.ve = d.K.H(d.ve, "r");
                   d.te = d.K.H(d.te, "c");
                   d.sa = new b.MutationObserver(d.ee);
                   return d
               }
               Fa(c, a);
               c.prototype.start = function() {
                   this.sa.observe(this.l.document.documentElement, {
                       attributes: !0,
                       characterData: !0,
                       childList: !0,
                       subtree: !0,
                       attributeOldValue: !0,
                       characterDataOldValue: !0
                   })
               }
               ;
               c.prototype.stop = function() {
                   this.sa.disconnect()
               }
               ;
               c.prototype.ld = function(b) {
                   var d = b.target;
                   b = b.attributeName;
                   var e = this.ma.elements.indexOf(d);
                   -1 === e && (e = this.ma.elements.push(d) - 1,
                   this.ma.attributes[e] = {});
                   this.ma.attributes[e] || (this.ma.attributes[e] = {});
                   e = this.ma.attributes[e];
                   var f = d.getAttribute(b);
                   e[b] = Vd(this.l, d, b, f, this.F.yc()).value
               }
               ;
               c.prototype.wd = function(b) {
                   function d(k) {
                       var l = Lb(e.l)(k, f);
                       return -1 === l ? (f.push(k),
                       k = {
                           Cd: {}
                       },
                       g.push(k),
                       k) : g[l]
                   }
                   var e = this
                     , f = []
                     , g = [];
                   A(function(k) {
                       var l = k.attributeName
                         , m = k.removedNodes
                         , p = k.oldValue
                         , q = k.target
                         , r = k.nextSibling
                         , u = k.previousSibling;
                       switch (k.type) {
                       case "attributes":
                           e.ld(k);
                           var x = d(q);
                           x.Cd[l] || (x.Cd[l] = Vd(e.l, q, l, p, e.F.yc()).value);
                           break;
                       case "childList":
                           m && A(function(J) {
                               x = d(J);
                               x.qf || y(x, {
                                   qf: q,
                                   Nh: r ? r : void 0,
                                   Oh: u ? u : void 0
                               })
                           }, pa(m));
                           break;
                       case "characterData":
                           x = d(q),
                           x.rf || (x.rf = p)
                       }
                   }, b);
                   var h = this.F.oa();
                   A(function(k, l) {
                       h.Ee(k, g[l])
                   }, f)
               }
               ;
               c.prototype.ee = function(b) {
                   var d = this;
                   if (Tg(this.l)) {
                       var e = this.F.L();
                       this.wd(b);
                       A(function(f) {
                           var g = f.addedNodes
                             , h = f.removedNodes
                             , k = f.target;
                           switch (f.type) {
                           case "childList":
                               h && h.length && d.ve(pa(h), e);
                               g && g.length && d.ue(pa(g), e);
                               break;
                           case "characterData":
                               d.te(k, e)
                           }
                       }, b);
                       this.se(e)
                   } else
                       this.stop()
               }
               ;
               c.prototype.se = function(b) {
                   var d = this;
                   A(function(e, f) {
                       var g = d.xc();
                       d.F.X("mutation", {
                           index: g,
                           attributes: d.ma.attributes[f],
                           target: d.Y(e)
                       }, "ac", b)
                   }, this.ma.elements);
                   this.ma.elements = [];
                   this.ma.attributes = []
               }
               ;
               c.prototype.ue = function(b, d) {
                   var e = this
                     , f = this.xc();
                   this.F.oa().Cc({
                       ha: b,
                       $c: function(g) {
                           g = z(function(h) {
                               h = y({}, h);
                               delete h.node;
                               return h
                           }, g);
                           e.F.X("mutation", {
                               index: f,
                               ha: g
                           }, "ad", d)
                       }
                   })
               }
               ;
               c.prototype.ve = function(b, d) {
                   var e = this
                     , f = this.xc()
                     , g = this.F.oa()
                     , h = z(function(k) {
                       var l = g.removeNode(k);
                       Rh(e.l, k, function(m) {
                           g.removeNode(m)
                       });
                       return l
                   }, b);
                   this.F.X("mutation", {
                       index: f,
                       ha: h
                   }, "re", d)
               }
               ;
               c.prototype.te = function(b, d) {
                   var e = this.xc();
                   this.F.X("mutation", {
                       value: b.textContent,
                       target: this.Y(b),
                       index: e
                   }, "tc", d)
               }
               ;
               c.prototype.xc = function() {
                   var b = this.index;
                   this.index += 1;
                   return b
               }
               ;
               return c
           }(Ua), Is = function() {
               function a(c, b) {
                   var d = this;
                   this.sc = [];
                   this.$a = [];
                   this.ce = 1;
                   this.Ga = 0;
                   this.jb = {};
                   this.Fc = {};
                   this.Od = function(f) {
                       return d.$a.length ? G(f, d.$a) : !1
                   }
                   ;
                   this.removeNode = function(f) {
                       var g = d.Y(f)
                         , h = Ea(f);
                       if (h)
                           return h = "NR:" + h.toLowerCase(),
                           d.Od(h) && d.aa.R(h, {
                               data: {
                                   node: f,
                                   id: g
                               }
                           }),
                           g
                   }
                   ;
                   this.eb = function(f) {
                       var g = Ea(f);
                       if (g) {
                           var h = f.__ym_indexer;
                           h || (h = d.ce,
                           f.__ym_indexer = h,
                           d.ce += 1,
                           g = "NA:" + g.toLowerCase(),
                           d.Od(g) && d.aa.R(g, {
                               data: {
                                   node: f,
                                   id: h
                               }
                           }));
                           return h
                       }
                       return null
                   }
                   ;
                   this.l = c;
                   var e = tf(c, this, "i");
                   this.aa = ed(c);
                   this.options = b;
                   this.start = e.H(this.start, "st");
                   this.stop = e.H(this.stop, "sp");
                   this.Y = e.H(this.Y, "i");
                   this.Ee = e.H(this.Ee, "o");
                   this.Cc = e.H(this.Cc, "a");
                   this.removeNode = e.H(this.removeNode, "r");
                   this.da = e.H(this.da, "s")
               }
               a.prototype.Ee = function(c, b) {
                   var d = this.eb(c);
                   Na(d) || (this.Fc[d] && this.Y(c),
                   this.Fc[d] = b)
               }
               ;
               a.prototype.D = function(c, b, d) {
                   c = "" + b + c;
                   this.$a.push(c);
                   this.Od(c) || this.$a.push(c);
                   this.aa.D([c], d)
               }
               ;
               a.prototype.ea = function(c, b, d) {
                   var e = "" + b + c;
                   this.$a = W(function(f) {
                       return f !== e
                   }, this.$a);
                   this.aa.ea([e], d)
               }
               ;
               a.prototype.start = function() {
                   this.Ga = X(this.l, t(C(this.da, this, !1), this.start), 50, "i.s")
               }
               ;
               a.prototype.stop = function() {
                   this.flush();
                   ja(this.l, this.Ga);
                   this.sc = []
               }
               ;
               a.prototype.Cc = function(c) {
                   var b = this
                     , d = []
                     , e = 0
                     , f = {
                       $c: c.$c,
                       result: [],
                       Ec: 0,
                       ha: d
                   };
                   this.sc.push(f);
                   A(function(g) {
                       Rh(b.l, g, function(h) {
                           var k = b.eb(h);
                           Na(k) || (d.push(h),
                           b.jb[k] && b.Y(h),
                           b.jb[k] = {
                               node: h,
                               event: f,
                               Kj: e
                           },
                           e += 1)
                       })
                   }, c.ha)
               }
               ;
               a.prototype.Y = function(c) {
                   if (c === this.l)
                       return 0;
                   var b = this.eb(c)
                     , d = this.jb[b]
                     , e = this.Rh(b)
                     , f = e.qf
                     , g = e.Cd
                     , h = e.rf
                     , k = e.Nh
                     , l = e.Oh;
                   if (d) {
                       e = d.event;
                       d = d.Kj;
                       var m = this.l.document.documentElement === c;
                       k = k || c.nextSibling;
                       var p = l || c.previousSibling;
                       l = !m && k ? this.eb(k) : null;
                       p = !m && p ? this.eb(p) : null;
                       m = this.l;
                       k = this.options;
                       f = this.eb(f || c.parentNode || c.parentElement) || 0;
                       var q = g
                         , r = void 0;
                       void 0 === p && (p = null);
                       void 0 === l && (l = null);
                       void 0 === q && (q = {});
                       void 0 === r && (r = Ea(c));
                       if (V(r))
                           c = void 0;
                       else {
                           g = {
                               id: b,
                               qe: p !== f ? p : null,
                               next: l !== f ? l : null,
                               parent: f,
                               name: r.toLowerCase(),
                               node: c
                           };
                           if (uf(c)) {
                               if (h = zm(c, h),
                               g.attributes = {},
                               g.content = h)
                                   if (c = gd(m, c))
                                       g.content = "" !== h.trim() ? Qm(m, h) : h,
                                       g.hidden = c
                           } else
                               h = Am(m, c, k, q, r),
                               m = h.hb,
                               g.attributes = h.bh,
                               m && (g.hidden = m),
                               c.namespaceURI && jc(c.namespaceURI, "svg") && (g.Qf = c.namespaceURI);
                           c = g
                       }
                       if (V(c))
                           return;
                       delete this.jb[b];
                       e.result[d] = c;
                       e.Ec += 1;
                       e.ha.length === e.Ec && e.$c(e.result)
                   }
                   return b
               }
               ;
               a.prototype.flush = function() {
                   this.da(!0)
               }
               ;
               a.prototype.da = function(c) {
                   var b = this;
                   if (Tg(this.l)) {
                       var d = ea(this.jb);
                       d = z(function(e) {
                           return b.jb[e].node
                       }, d);
                       d = rc(d, this.Y);
                       c = c ? aj(B) : Zi(this.l, 20);
                       d(c);
                       this.sc = W(function(e) {
                           return e.Ec !== e.result.length
                       }, this.sc)
                   }
               }
               ;
               a.prototype.Rh = function(c) {
                   if (Na(c))
                       return {};
                   var b = this.Fc[c];
                   return b ? (delete this.Fc[c],
                   b) : {}
               }
               ;
               return a
           }(), Js = ["input", "change", "keyup", "paste", "cut"], Ks = function(a) {
               function c(b, d, e) {
                   b = a.call(this, b, d, e) || this;
                   b.inputs = {};
                   b.yd = !1;
                   b.Pc = b.K.H(b.Pc, "ii");
                   b.Qc = b.K.H(b.Qc, "ir");
                   b.Vc = b.K.H(b.Vc, "ri");
                   b.gd = b.K.H(b.gd, "ur");
                   b.Nd = b.K.H(b.Nd, "ce");
                   b.Bc = b.K.H(b.Bc, "vc");
                   return b
               }
               Fa(c, a);
               c.prototype.start = function() {
                   var b = this
                     , d = this.F.oa();
                   this.yd = this.lh();
                   A(function(e) {
                       e = e.toLowerCase();
                       d.D(e, "NA:", C(b.Pc, b));
                       d.D(e, "NR:", C(b.Qc, b))
                   }, Cf);
                   this.Kb = [this.Za.D(this.l.document, Js, C(this.Nd, this)), function() {
                       A(function(e) {
                           e = e.toLowerCase();
                           d.ea(e, "NA:", b.Pc);
                           d.ea(e, "NR:", b.Qc)
                       }, Cf);
                       A(b.gd, ea(b.inputs))
                   }
                   ]
               }
               ;
               c.prototype.gd = function(b) {
                   if (this.yd) {
                       var d = this.inputs[b];
                       d && (b = d.bj,
                       d = d.element,
                       b && this.l.Object.defineProperty(d, this.zc(d), b))
                   }
               }
               ;
               c.prototype.Qc = function(b) {
                   b && this.gd(b.data.id)
               }
               ;
               c.prototype.Pc = function(b) {
                   b && (b = b.data,
                   this.Vc(b.node, b.id))
               }
               ;
               c.prototype.zc = function(b) {
                   return ye(b) ? "checked" : "value"
               }
               ;
               c.prototype.Nd = function(b) {
                   if (b = b.target) {
                       var d = this.zc(b);
                       this.Bc(b[d], b)
                   }
               }
               ;
               c.prototype.Bc = function(b, d) {
                   var e = this.Y(d)
                     , f = this.inputs[e];
                   if (!f && (f = this.Vc(f, e),
                   !f))
                       return;
                   e = f.nh;
                   var g = f.value
                     , h = this.zc(d);
                   b && !G(typeof b, ["string", "boolean", "number"]) || b === g || (g = Vd(this.l, d, h, b, this.F.yc()).value,
                   e ? this.F.X("event", {
                       target: this.Y(d),
                       checked: !!b
                   }, "change") : (e = Wd(d),
                   h = Af(d),
                   this.F.X("event", {
                       value: g,
                       hidden: h && !e,
                       target: this.Y(d)
                   }, "change")),
                   f.value = b)
               }
               ;
               c.prototype.Vc = function(b, d) {
                   var e = this;
                   if (!rf(b) || "__ym_input_override_test" === b.getAttribute("class") || this.inputs[d])
                       return null;
                   var f = ye(b)
                     , g = this.zc(b)
                     , h = {
                       element: b,
                       nh: f,
                       value: b[g]
                   };
                   this.inputs[d] = h;
                   this.yd && Nb(this.l, function() {
                       var k = e.l.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(b), g) || {}
                         , l = e.l.Object.getOwnPropertyDescriptor(b, g) || {}
                         , m = y({}, k, l);
                       if (Da("((set)?(\\s?" + g + ")?)?", m.set)) {
                           try {
                               e.l.Object.defineProperty(b, g, y({}, m, {
                                   configurable: !0,
                                   set: function(p) {
                                       e.Bc(p, this);
                                       return m.set.call(this, p)
                                   }
                               }))
                           } catch (p) {}
                           h.bj = m
                       }
                   });
                   return h
               }
               ;
               c.prototype.lh = function() {
                   var b = !0
                     , d = Va(this.l)("input");
                   try {
                       d = Va(this.l)("input");
                       d.value = "INPUT_VALUE";
                       d.style.setProperty("display", "none", "important");
                       d.setAttribute("type", "text");
                       d.setAttribute("class", "__ym_input_override_test");
                       var e = this.l.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(d), "value") || {}
                         , f = this.l.Object.getOwnPropertyDescriptor(d, "value") || {}
                         , g = y({}, e, f);
                       this.l.Object.defineProperty(d, "value", y({}, g, {
                           configurable: !0,
                           set: function(h) {
                               return g.set.call(d, h)
                           }
                       }));
                       "INPUT_VALUE" !== d.value && (b = !1);
                       d.value = "INPUT_TEST";
                       "INPUT_TEST" !== d.value && (b = !1)
                   } catch (h) {
                       b = !1
                   }
                   return b
               }
               ;
               return c
           }(Ua), Ls = function(a) {
               function c(b, d, e) {
                   b = a.call(this, b, d, e) || this;
                   b.Pa = {
                       width: 0,
                       height: 0,
                       mb: 0,
                       ob: 0,
                       orientation: 0
                   };
                   b.ga.push([["resize"], b.$i]);
                   b.ga.push([["orientationchange"], b.Yi]);
                   return b
               }
               Fa(c, a);
               c.prototype.start = function() {
                   a.prototype.start.call(this);
                   this.ig()
               }
               ;
               c.prototype.$i = function() {
                   var b = this.Ld();
                   this.si(b) && (this.Pa = b,
                   this.jg(b))
               }
               ;
               c.prototype.Yi = function() {
                   var b = this.Ld();
                   this.Pa.orientation !== b.orientation && (this.Pa = b,
                   this.tj(b))
               }
               ;
               c.prototype.Nf = function(b) {
                   return !b.height || !b.width || !b.ob || !b.mb
               }
               ;
               c.prototype.si = function(b) {
                   return b.height !== this.Pa.height || b.width !== this.Pa.width
               }
               ;
               c.prototype.Ld = function() {
                   var b = this.F.cb()
                     , d = Ad(this.l)
                     , e = d[0];
                   d = d[1];
                   b = b.Kd();
                   return {
                       width: e,
                       height: d,
                       ob: b ? b.scrollWidth : 0,
                       mb: b ? b.scrollHeight : 0,
                       orientation: this.F.cb().Zh()
                   }
               }
               ;
               c.prototype.tj = function(b) {
                   var d;
                   void 0 === d && (d = this.F.L());
                   this.F.X("event", {
                       width: b.width,
                       height: b.height,
                       orientation: b.orientation
                   }, "deviceRotation", d)
               }
               ;
               c.prototype.jg = function(b, d) {
                   void 0 === d && (d = this.F.L());
                   this.F.X("event", {
                       width: b.width,
                       height: b.height,
                       ob: b.ob,
                       mb: b.mb
                   }, "resize", d)
               }
               ;
               c.prototype.ig = function() {
                   var b = this.Ld();
                   this.Nf(b) ? X(this.l, C(this.ig, this), 300) : (this.Nf(this.Pa) && (this.Pa = b),
                   this.jg(b, 0))
               }
               ;
               return c
           }(Ua), Ze = function() {
               function a(c) {
                   this.index = 0;
                   this.sb = {};
                   this.l = c
               }
               a.prototype.jc = function(c, b, d) {
                   void 0 === d && (d = {});
                   var e = ca(this.l)
                     , f = this.index;
                   this.index += 1;
                   this.sb[f] = {
                       Ga: 0,
                       Sb: !1,
                       Lh: c,
                       $b: [],
                       Xd: e(Y)
                   };
                   var g = this;
                   return function() {
                       var h = ya(arguments)
                         , k = d.ab && !g.sb[f].Sb
                         , l = g.sb[f];
                       ja(g.l, l.Ga);
                       l.$b = h;
                       l.Sb = !0;
                       var m = e(Y);
                       if (k || m - l.Xd >= b)
                           c.apply(void 0, h),
                           l.Xd = m;
                       l.Ga = X(g.l, function() {
                           k || (c.apply(void 0, h),
                           l.Xd = e(Y));
                           l.Sb = !1;
                           l.$b = []
                       }, b, "th")
                   }
               }
               ;
               a.prototype.flush = function() {
                   var c = this;
                   A(function(b) {
                       var d = c.sb[b]
                         , e = d.Ga
                         , f = d.Lh
                         , g = d.$b;
                       d.Sb && (c.sb[b].Sb = !1,
                       f.apply(void 0, g),
                       ja(c.l, e))
                   }, ea(this.sb))
               }
               ;
               return a
           }(), Ms = function(a) {
               function c(b, d, e) {
                   d = a.call(this, b, d, e) || this;
                   d.yg = [];
                   d.Se = {
                       x: 0,
                       y: 0
                   };
                   d.va = new Ze(b);
                   d.Tc = d.K.H(d.Tc, "o");
                   d.ga.push([["scroll"], d.aj]);
                   return d
               }
               Fa(c, a);
               c.prototype.start = function() {
                   a.prototype.start.call(this);
                   this.F.X("event", {
                       x: Math.max(this.l.scrollX, 0),
                       y: Math.max(this.l.scrollY, 0),
                       page: !0,
                       target: -1
                   }, "scroll", 0)
               }
               ;
               c.prototype.stop = function() {
                   a.prototype.stop.call(this);
                   this.va.flush()
               }
               ;
               c.prototype.aj = function(b) {
                   if (this.F.cb().Gf())
                       this.Tc(b);
                   else {
                       var d = b.target
                         , e = W(function(f) {
                           return f[0] === d
                       }, this.yg).pop();
                       e ? e = e[1] : (e = this.va.jc(C(this.Tc, this), 100, {
                           ab: !0
                       }),
                       this.yg.push([d, e]));
                       e(b)
                   }
               }
               ;
               c.prototype.Tc = function(b) {
                   var d = this.F.cb().Kd();
                   b = b.target;
                   var e = this.Eb(b);
                   d = Ma(la(b), [d, this.l, this.l.document]);
                   var f = Math.max(e.left, 0);
                   e = Math.max(e.top, 0);
                   if (d) {
                       if (this.Se.x === f && this.Se.y === e)
                           return;
                       this.Se = {
                           x: f,
                           y: e
                       }
                   }
                   this.F.X("event", {
                       x: f,
                       y: e,
                       page: d,
                       target: d ? -1 : this.Y(b)
                   }, "scroll")
               }
               ;
               c.prototype.Eb = function(b) {
                   var d = {
                       left: 0,
                       top: 0
                   };
                   if (!b)
                       return d;
                   if (b.window === b)
                       return {
                           top: b.scrollY || 0,
                           left: b.scrollX || 0
                       };
                   var e = b.ownerDocument || b
                     , f = b.documentElement
                     , g = e.defaultView || e.parentWindow
                     , h = e.body;
                   return b !== e || (b = this.F.cb().Kd(),
                   b) ? G(b, [f, h]) ? {
                       top: b.scrollTop || g.scrollY,
                       left: b.scrollLeft || g.scrollX
                   } : {
                       top: b.scrollTop || 0,
                       left: b.scrollLeft || 0
                   } : d
               }
               ;
               return c
           }(Ua), Ns = ["mousemove", "mousedown", "mouseup", "click"], Os = function(a) {
               function c(b, d, e) {
                   d = a.call(this, b, d, e) || this;
                   d.ga.push([Ns, d.Xi]);
                   d.va = new Ze(b);
                   d.Mc = d.K.H(d.Mc, "n");
                   d.Bj = d.K.H(d.va.jc(C(d.Mc, d), 100), "t");
                   return d
               }
               Fa(c, a);
               c.prototype.stop = function() {
                   a.prototype.stop.call(this);
                   this.va.flush()
               }
               ;
               c.prototype.Xi = function(b) {
                   var d = null;
                   try {
                       d = b.type
                   } catch (e) {
                       return
                   }
                   "mousemove" === d ? this.Bj(b) : this.Mc(b)
               }
               ;
               c.prototype.Mc = function(b) {
                   var d = b.type
                     , e = b.clientX;
                   e = void 0 === e ? null : e;
                   var f = b.clientY;
                   f = void 0 === f ? null : f;
                   b = b.target || this.l.document.elementFromPoint(e, f);
                   this.F.X("event", {
                       x: e || 0,
                       y: f || 0,
                       target: this.Y(b)
                   }, d)
               }
               ;
               return c
           }(Ua), Ps = ["focus", "blur"], Qs = function(a) {
               function c(b, d, e) {
                   b = a.call(this, b, d, e) || this;
                   b.ga.push([Ps, b.Mh]);
                   return b
               }
               Fa(c, a);
               c.prototype.Mh = function(b) {
                   var d = b.target;
                   b = b.type;
                   this.F.X("event", {
                       target: this.Y(d === this.l ? this.l.document.documentElement : d)
                   }, b)
               }
               ;
               return c
           }(Ua), Rs = v(function(a) {
               var c = Ia(a.getSelection, "getSelection");
               return c ? C(c, a) : B
           }), Ss = t(Rs, Ha), Ts = ["mousemove", "touchmove", "mousedown", "touchdown", "select"], Us = /text|search|password|tel|url/, Vs = function(a) {
               function c(b, d, e) {
                   b = a.call(this, b, d, e) || this;
                   b.Pd = !1;
                   b.ga.push([Ts, b.ni]);
                   return b
               }
               Fa(c, a);
               c.prototype.ni = function(b) {
                   var d = this.F
                     , e = b.type
                     , f = b.which;
                   b = b.target;
                   if ("mousemove" !== e || 1 === f)
                       (e = "select" === e ? this.ei(b) : this.ai()) && e.start !== e.end ? (this.Pd = !0,
                       d.X("event", e, "selection")) : this.Pd && (this.Pd = !1,
                       d.X("event", {
                           start: 0,
                           end: 0
                       }, "selection"))
               }
               ;
               c.prototype.ai = function() {
                   var b = Ss(this.l);
                   if (b && 0 < b.rangeCount) {
                       b = b.getRangeAt(0) || this.l.document.createRange();
                       var d = this.Y(b.startContainer)
                         , e = this.Y(b.endContainer);
                       if (!V(d) && !V(e))
                           return {
                               start: b.startOffset,
                               end: b.endOffset,
                               sg: d,
                               gf: e
                           }
                   }
               }
               ;
               c.prototype.ei = function(b) {
                   if (Us.test(b.type || "")) {
                       var d = this.Y(b);
                       if (!V(d))
                           return {
                               start: b.selectionStart,
                               end: b.selectionEnd,
                               target: d
                           }
                   }
               }
               ;
               return c
           }(Ua), Ws = {
               focus: "windowfocus",
               blur: "windowblur"
           }, Xs = function(a) {
               function c(b, d, e) {
                   b = a.call(this, b, d, e) || this;
                   b.visibility = null;
                   V(b.l.document.hidden) ? V(b.l.document.msHidden) ? V(b.l.document.webkitHidden) || (b.visibility = {
                       hidden: "webkitHidden",
                       event: "webkitvisibilitychange"
                   }) : b.visibility = {
                       hidden: "msHidden",
                       event: "msvisibilitychange"
                   } : b.visibility = {
                       hidden: "hidden",
                       event: "visibilitychange"
                   };
                   b.handleEvent = b.K.H(b.handleEvent, "e");
                   return b
               }
               Fa(c, a);
               c.prototype.start = function() {
                   this.Kb = [this.Za.D(this.l, this.visibility ? [this.visibility.event] : ["focus", "blur"], C(this.handleEvent, this))]
               }
               ;
               c.prototype.handleEvent = function(b) {
                   this.F.X("event", {}, Ws[this.visibility ? this.l.document[this.visibility.hidden] ? "blur" : "focus" : b.type])
               }
               ;
               return c
           }(Ua), Ys = ["touchmove", "touchstart", "touchend", "touchcancel", "touchforcechange"], Zs = function(a) {
               function c(b, d, e) {
                   d = a.call(this, b, d, e) || this;
                   d.dd = {};
                   d.scrolling = !1;
                   d.gg = 0;
                   d.ga.push([["scroll"], d.qj, d.l.document]);
                   d.ga.push([Ys, d.Fj, d.l.document]);
                   d.va = new Ze(b);
                   d.Jb = d.K.H(d.Jb, "nh");
                   d.Cj = d.K.H(d.va.jc(d.Jb, d.F.cb().Gf() ? 0 : 50, {
                       ab: !0
                   }), "th");
                   return d
               }
               Fa(c, a);
               c.prototype.qj = function() {
                   var b = this;
                   this.scrolling = !0;
                   ja(this.l, this.gg);
                   this.gg = X(this.l, function() {
                       b.scrolling = !1
                   }, 150)
               }
               ;
               c.prototype.Fj = function(b) {
                   var d = this
                     , e = "touchcancel" === b.type || "touchend" === b.type;
                   b.changedTouches && 0 < b.changedTouches.length && A(function(f) {
                       var g = d.ii(f);
                       f.__ym_touch_id = g;
                       e && delete d.dd[f.identifier]
                   }, pa(b.changedTouches));
                   "touchmove" === b.type ? this.scrolling ? this.Jb(b) : this.Cj(b, this.F.L()) : this.Jb(b)
               }
               ;
               c.prototype.ii = function(b) {
                   this.dd[b.identifier] || (this.dd[b.identifier] = Ph());
                   return this.dd[b.identifier]
               }
               ;
               c.prototype.Jb = function(b, d) {
                   void 0 === d && (d = this.F.L());
                   var e = b.type
                     , f = z(function(g) {
                       return {
                           id: g.__ym_touch_id,
                           x: Math.round(g.clientX),
                           y: Math.round(g.clientY),
                           force: g.force
                       }
                   }, pa(b.changedTouches));
                   0 < f.length && this.F.X("event", {
                       touches: f,
                       target: this.Y(b.target)
                   }, e, d)
               }
               ;
               return c
           }(Ua), $s = function(a) {
               function c(b, d, e) {
                   b = a.call(this, b, d, e) || this;
                   b.ga.push([["load"], b.Wi, b.l.document]);
                   return b
               }
               Fa(c, a);
               c.prototype.Wi = function(b) {
                   b = b.target;
                   "IMG" === Ea(b) && b.getAttribute("srcset") && this.F.X("event", {
                       target: this.Y(b),
                       value: b.currentSrc
                   }, "srcset")
               }
               ;
               return c
           }(Ua), at = function(a) {
               function c(b, d, e) {
                   d = a.call(this, b, d, e) || this;
                   d.Kg = 1;
                   d.va = new Ze(b);
                   d.bc = d.K.H(d.bc, "z");
                   return d
               }
               Fa(c, a);
               c.prototype.start = function() {
                   if (this.Bf()) {
                       a.prototype.start.call(this);
                       this.bc();
                       var b = this.Za.D(n(this.l, "visualViewport"), ["resize"], this.va.jc(this.bc, 10));
                       this.Kb.push(b)
                   }
               }
               ;
               c.prototype.stop = function() {
                   a.prototype.stop.call(this);
                   this.va.flush()
               }
               ;
               c.prototype.bc = function() {
                   var b = this.Bf();
                   b && b !== this.Kg && (this.Kg = b,
                   this.uj(b))
               }
               ;
               c.prototype.Bf = function() {
                   var b = kg(this.l);
                   return b ? b[2] : null
               }
               ;
               c.prototype.uj = function(b) {
                   var d = Jf(this.l);
                   this.F.X("event", {
                       x: d.x,
                       y: d.y,
                       level: b
                   }, "zoom")
               }
               ;
               return c
           }(Ua), Md, $e = {
               91: "super",
               93: "super",
               224: "super",
               18: "alt",
               17: "ctrl",
               16: "shift",
               9: "tab",
               8: "backspace",
               46: "delete"
           }, Vk = {
               "super": 1,
               mk: 2,
               alt: 3,
               shift: 4,
               Lk: 5,
               "delete": 6,
               ik: 6
           }, bt = [4, 9, 8, 32, 37, 38, 39, 40, 46], Wk = (Md = {},
           Md["1"] = {
               91: "&#8984;",
               93: "&#8984;",
               224: "&#8984;",
               18: "&#8997;",
               17: "&#8963;",
               16: "&#8679;",
               9: "&#8677;",
               8: "&#9003;",
               46: "&#9003;"
           },
           Md["2"] = {
               91: "&#xff;",
               93: "&#xff;",
               224: "&#xff;",
               18: "Alt",
               17: "Ctrl",
               16: "Shift",
               9: "Tab",
               8: "Backspace",
               46: "Delete"
           },
           Md.Ki = {
               32: "SPACEBAR",
               37: "&larr;",
               38: "&uarr;",
               39: "&rarr;",
               40: "&darr;",
               13: "Enter"
           },
           Md), ct = /flash/, dt = /ym-disable-keys/, et = /^&#/, ft = function(a) {
               function c(b, d, e) {
                   d = a.call(this, b, d, e) || this;
                   d.fb = {};
                   d.Ea = 0;
                   d.ya = [];
                   d.wg = [];
                   d.qc = 0;
                   d.bg = 0;
                   d.ga.push([["keydown"], d.ki]);
                   d.ga.push([["keyup"], d.li]);
                   d.Tg = -1 !== (n(b, "navigator.appVersion") || "").indexOf("Mac") ? "1" : "2";
                   d.Ic = d.K.H(d.Ic, "v");
                   d.Ad = d.K.H(d.Ad, "ec");
                   d.Zc = d.K.H(d.Zc, "sk");
                   d.Jd = d.K.H(d.Jd, "gk");
                   d.Fe = d.K.H(d.Fe, "sc");
                   d.ac = d.K.H(d.ac, "cc");
                   d.reset = d.K.H(d.reset, "r");
                   d.Xc = d.K.H(d.Xc, "rs");
                   return d
               }
               Fa(c, a);
               c.prototype.ki = function(b) {
                   if (this.Ic(b) && !this.Bi(b)) {
                       var d = b.keyCode;
                       b.repeat || this.fb[d] || (this.fb[b.keyCode] = !0,
                       $e[b.keyCode] && !this.Ea ? (this.Ea += 1,
                       this.Fe(b),
                       this.reset(300)) : this.Ea ? (this.ih(),
                       this.ye(b),
                       this.Ad()) : (this.reset(),
                       this.ye(b)))
                   }
               }
               ;
               c.prototype.li = function(b) {
                   if (this.Ic(b)) {
                       var d = b.keyCode
                         , e = $e[b.keyCode];
                       this.fb[b.keyCode] && (this.fb[d] = !1);
                       e && this.Ea && (this.Ea = 0,
                       this.fb = {});
                       1 === this.ya.length && (b = this.ya[0],
                       G(b.keyCode, bt) && (this.Zc([b], !0),
                       this.reset()));
                       this.ya = W(t(la(d), Rb), this.ya);
                       ja(this.l, this.qc)
                   }
               }
               ;
               c.prototype.Ic = function(b) {
                   var d = this.l.document.activeElement;
                   b = b.target;
                   return !Ma(Boolean, [d && "OBJECT" === d.nodeName && ct.test(d.getAttribute("type") || ""), "INPUT" === b.nodeName && "password" === b.getAttribute("type") && dt.test(b.className)])
               }
               ;
               c.prototype.Ad = function() {
                   this.wg = this.ya.slice(0);
                   ja(this.l, this.qc);
                   this.qc = X(this.l, w(this.wg, C(this.Zc, this)), 0, "e.c")
               }
               ;
               c.prototype.Zc = function(b, d) {
                   void 0 === d && (d = !1);
                   if (1 < b.length || d) {
                       var e = this.Jd(b);
                       this.F.X("event", {
                           Jc: e
                       }, "keystroke")
                   }
               }
               ;
               c.prototype.Jd = function(b) {
                   var d = this;
                   b = z(function(e) {
                       e = e.keyCode;
                       var f = $e[e]
                         , g = d.Yh(e);
                       return {
                           id: e,
                           key: g,
                           Kf: !!f && et.test(g),
                           Kc: f
                       }
                   }, b);
                   return og(function(e, f) {
                       return (Vk[e.Kc] || 100) - (Vk[f.Kc] || 100)
                   }, b)
               }
               ;
               c.prototype.Yh = function(b) {
                   return Wk[this.Tg][b] || Wk.Ki[b] || String.fromCharCode(b)
               }
               ;
               c.prototype.ye = function(b) {
                   G(b, this.ya) || this.ya.push(b)
               }
               ;
               c.prototype.Fe = function(b) {
                   this.ye(b);
                   this.ac()
               }
               ;
               c.prototype.ac = function() {
                   this.Ea ? X(this.l, this.ac, 100) : this.ya = []
               }
               ;
               c.prototype.ih = function() {
                   ja(this.l, this.bg)
               }
               ;
               c.prototype.reset = function(b) {
                   b ? this.bg = X(this.l, C(this.Xc, this), b) : this.Xc()
               }
               ;
               c.prototype.Xc = function() {
                   this.Ea = 0;
                   this.ya = [];
                   this.fb = {};
                   ja(this.l, this.qc)
               }
               ;
               c.prototype.Bi = function(b) {
                   return b.target && "INPUT" === b.target.nodeName ? b.shiftKey || 32 === b.keyCode || "shift" === $e[b.keyCode] : !1
               }
               ;
               return c
           }(Ua), xm = ["sr", "sd", "\u043d"], gt = /allow-same-origin/, ht = function(a) {
               function c(b, d, e) {
                   d = a.call(this, b, d, e) || this;
                   d.Ub = [];
                   d.Ed = {};
                   d.fe = d.K.H(d.fe, "fi");
                   d.ie = d.K.H(d.ie, "sd");
                   d.je = d.K.H(d.je, "src");
                   d.sa = new b.MutationObserver(d.je);
                   return d
               }
               Fa(c, a);
               c.prototype.start = function() {
                   a.prototype.start.call(this);
                   this.F.yc().zb && this.F.oa().D("iframe", "NA:", C(this.fe, this));
                   this.F.xf().Hd().D(["sdr"], C(this.ie, this))
               }
               ;
               c.prototype.stop = function() {
                   a.prototype.stop.call(this);
                   A(function(b) {
                       b.F.stop()
                   }, this.Ub)
               }
               ;
               c.prototype.je = function(b) {
                   var d = b.pop().target;
                   if (b = Za(function(f) {
                       return f.Ff === d
                   }, this.Ub)) {
                       this.Ub = W(function(f) {
                           return f.Ff !== d
                       }, this.Ub);
                       var e = b.F.Id();
                       try {
                           b.F.stop()
                       } catch (f) {}
                       this.ic(d, e)
                   }
               }
               ;
               c.prototype.fe = function(b) {
                   if (b) {
                       var d = b.data.node;
                       this.sa.observe(d, {
                           attributes: !0,
                           attributeFilter: ["src"]
                       });
                       this.ic(d, b.data.id)
                   }
               }
               ;
               c.prototype.ic = function(b, d) {
                   var e = this;
                   this.yi(b) && mc(this.l, b)(Xa(B, function() {
                       var f = e.F.ic(b.contentWindow, d);
                       e.Ub.push({
                           F: f,
                           Ff: b
                       })
                   }))
               }
               ;
               c.prototype.ie = function(b) {
                   var d = this
                     , e = b.M;
                   b = b.data;
                   this.Ed[e] || (this.Ed[e] = {
                       data: []
                   });
                   var f = this.Ed[e];
                   f.data = f.data.concat(b);
                   this.l.isNaN(f.xd) && A(function(g) {
                       "page" === g.type && (f.xd = g.data.za - d.F.yf())
                   }, f.data);
                   this.l.isNaN(f.xd) || (this.F.da(z(function(g) {
                       g.L += f.xd;
                       g.L = d.l.Math.max(0, g.L);
                       return g
                   }, f.data)),
                   f.data = [])
               }
               ;
               c.prototype.yi = function(b) {
                   var d = b.getAttribute("src")
                     , e = b.getAttribute("sandbox");
                   return b.getAttribute("_ym_ignore") || e && !e.match(gt) || d && "about:blank" !== d && (d = Lc(this.l, d).host) && R(this.l).host !== d ? !1 : n(b, "contentWindow.location.href")
               }
               ;
               return c
           }(Ua), it = function(a) {
               function c(b, d, e) {
                   b = a.call(this, b, d, e) || this;
                   b.Be = b.K.H(b.Be, "ps");
                   return b
               }
               Fa(c, a);
               c.prototype.start = function() {
                   this.F.oa().Cc({
                       ha: [this.l.document.documentElement],
                       $c: this.Be
                   })
               }
               ;
               c.prototype.Be = function(b) {
                   var d = this.F.$h()
                     , e = d.Sh()
                     , f = R(this.l)
                     , g = f.host
                     , h = f.protocol;
                   f = f.pathname;
                   var k = Ad(this.l)
                     , l = k[0];
                   k = k[1];
                   this.F.X("page", {
                       content: z(function(m) {
                           m = y({}, m);
                           delete m.node;
                           return m
                       }, b),
                       Ze: e || "",
                       Cf: !!e,
                       viewport: {
                           width: l,
                           height: k
                       },
                       title: this.l.document.title,
                       doctype: d.Uh() || "",
                       We: this.l.location.href,
                       Dg: this.l.navigator.userAgent,
                       referrer: this.l.document.referrer,
                       screen: {
                           width: this.l.screen.width,
                           height: this.l.screen.height
                       },
                       location: {
                           host: g,
                           protocol: h,
                           path: f
                       },
                       za: this.F.yf(),
                       cd: d.gi()
                   }, "page", 0)
               }
               ;
               return c
           }(Ua), jt = ["addRule", "removeRule", "insertRule", "deleteRule"], Ug = [[function(a) {
               function c(b, d, e) {
                   b = a.call(this, b, d, e) || this;
                   b.Ra = {};
                   b.Vb = {};
                   b.Xe = 0;
                   b.Rc = b.K.H(b.Rc, "a");
                   b.rb = b.K.H(b.rb, "sr");
                   b.Sc = b.K.H(b.Sc, "r");
                   b.da = b.K.H(b.da, "d");
                   return b
               }
               Fa(c, a);
               c.prototype.start = function() {
                   var b = this.F.oa();
                   b.D("style", "NA:", this.Rc);
                   b.D("style", "NR:", this.Sc);
                   this.da()
               }
               ;
               c.prototype.stop = function() {
                   var b = this;
                   a.prototype.stop.call(this);
                   var d = this.F.oa();
                   d.ea("style", "NA:", this.Rc);
                   d.ea("style", "NR:", this.Sc);
                   this.da();
                   ja(this.l, this.Xe);
                   A(function(e) {
                       b.Ra[e].sheet && b.eg(b.Ra[e].sheet)
                   }, ea(this.Ra));
                   this.Ra = {}
               }
               ;
               c.prototype.da = function() {
                   var b = this;
                   A(function(d) {
                       var e = d[0];
                       d = d[1];
                       if (d.length) {
                           for (var f = [], g = d[0].L, h = [], k = 0; k < d.length; k += 1) {
                               var l = d[k]
                                 , m = l.L;
                               delete l.L;
                               m <= g + 50 ? f.push(l) : (h.push(f),
                               g = m,
                               f = [l])
                           }
                           f.length && h.push(f);
                           h.length && A(function(p) {
                               b.F.X("event", {
                                   target: Ca(e),
                                   Ca: p
                               }, "stylechange", g)
                           }, h);
                           delete b.Vb[e]
                       }
                   }, Ba(this.Vb));
                   this.Xe = X(this.l, this.da, 100)
               }
               ;
               c.prototype.rb = function(b, d, e, f, g) {
                   void 0 === f && (f = "");
                   void 0 === g && (g = -1);
                   this.Vb[b] || (this.Vb[b] = []);
                   this.Vb[b].push({
                       ke: d,
                       style: f,
                       index: g,
                       L: e
                   })
               }
               ;
               c.prototype.cj = function(b, d) {
                   var e = this
                     , f = b.addRule
                     , g = b.removeRule
                     , h = b.insertRule
                     , k = b.deleteRule;
                   T(f) && (b.addRule = function(l, m, p) {
                       e.rb(d, "a", e.F.L(), l + "{" + m + "}", p);
                       return f.call(b, l, m, p)
                   }
                   );
                   T(g) && (b.removeRule = function(l) {
                       e.rb(d, "r", e.F.L(), "", l);
                       return g.call(b, l)
                   }
                   );
                   T(h) && (b.insertRule = function(l, m) {
                       e.rb(d, "a", e.F.L(), l, m);
                       return h.call(b, l, m)
                   }
                   );
                   T(k) && (b.deleteRule = function(l) {
                       e.rb(d, "r", e.F.L(), "", l);
                       return k.call(b, l)
                   }
                   )
               }
               ;
               c.prototype.eg = function(b) {
                   var d = this;
                   A(function(e) {
                       var f = d.l.CSSStyleSheet.prototype[e];
                       T(f) && (b[e] = C(f, b))
                   }, jt)
               }
               ;
               c.prototype.Eh = function(b) {
                   try {
                       return b.cssRules || b.rules
                   } catch (d) {
                       return null
                   }
               }
               ;
               c.prototype.Rc = function(b) {
                   var d = b.data;
                   b = d.id;
                   d = d.node;
                   if (d.sheet && !d.getAttribute("src") && !d.innerText) {
                       var e = d.sheet
                         , f = this.Eh(e);
                       if (f && f.length) {
                           for (var g = [], h = 0; h < f.length; h += 1)
                               g.push({
                                   style: f[h].cssText,
                                   index: h,
                                   ke: "a"
                               });
                           this.F.X("event", {
                               Ca: g,
                               target: b
                           }, "stylechange")
                       }
                       this.cj(e, b);
                       this.Ra[b] = d
                   }
               }
               ;
               c.prototype.Sc = function(b) {
                   b = b.data.id;
                   var d = this.Ra[b];
                   d && (delete this.Ra[b],
                   d.sheet && this.eg(d.sheet))
               }
               ;
               return c
           }(Ua), "ss"], [Ks, "in"], [Hs, "mu"], [Ls, "r"], [Ms, "sc"], [Os, "mo"], [Qs, "f"], [Vs, "se"], [Xs, "wf"], [Zs, "t"], [$s, "src"], [at, "z"], [ft, "ks"]];
           Ug.push([ht, "if"]);
           Ug.push([it, "pa"]);
           var kt = v(function(a) {
               var c = a.document;
               return {
                   Kd: function() {
                       if (c.scrollingElement)
                           return c.scrollingElement;
                       var b = 0 === c.compatMode.indexOf("CSS1") ? c.documentElement : c.body;
                       return n(c, "documentElement.scrollHeight") >= n(c, "body.scrollHeight") ? b : null
                   },
                   Zh: function() {
                       var b = a.screen;
                       if (!b)
                           return 0;
                       var d = Za(w(b, n), ["orientation", "mozOrientation", "msOrientation"]);
                       return n(b, d + ".angle") || 0
                   },
                   Bk: w(a, Mb),
                   Gf: w(a, md),
                   Ak: w(a, Ae)
               }
           }), lt = function() {
               function a(c, b) {
                   var d = this;
                   this.Gb = 0;
                   this.lc = [];
                   this.Fb = null;
                   this.qa = this.Xb = this.ug = !1;
                   this.za = 0;
                   this.$h = function() {
                       return d.page
                   }
                   ;
                   this.Id = function() {
                       return d.Gb
                   }
                   ;
                   this.yf = function() {
                       return d.za
                   }
                   ;
                   this.Xh = function() {
                       return d.Za
                   }
                   ;
                   this.xf = function() {
                       return d.Fb
                   }
                   ;
                   this.oa = function() {
                       return d.Qd
                   }
                   ;
                   this.L = function() {
                       return d.Je ? d.l.Math.max(d.Je(Y) - d.za, 0) : 0
                   }
                   ;
                   this.yc = function() {
                       return d.options
                   }
                   ;
                   this.cb = function() {
                       return d.eh
                   }
                   ;
                   this.X = function(f, g, h, k) {
                       void 0 === k && (k = d.L());
                       f = d.Wh(f, g, h, k);
                       d.da(f)
                   }
                   ;
                   this.Wh = function(f, g, h, k) {
                       void 0 === k && (k = d.L());
                       return {
                           type: f,
                           data: g,
                           L: k,
                           M: d.Gb,
                           event: h
                       }
                   }
                   ;
                   this.da = function(f) {
                       f = da(f) ? f : [f];
                       d.ug && !d.Xb ? d.qa ? (f = z(function(g) {
                           return g.M ? g : y(g, {
                               M: d.Gb
                           })
                       }, f),
                       d.xf().kg(f)) : (f = z(tm, f),
                       d.De(f)) : d.lc = d.lc.concat(f)
                   }
                   ;
                   this.l = c;
                   var e = tf(c, this, "R");
                   this.Ge = e.H(this.Ge, "s");
                   this.da = e.H(this.da, "sd");
                   e = O(c);
                   e.o("wv2e") && lg();
                   e.C("wv2e", !0);
                   this.options = b;
                   this.Za = ia(c);
                   this.Qd = new Is(this.l,b);
                   this.eh = kt(c);
                   this.$e = z(function(f) {
                       return new f[0](c,d,f[1])
                   }, Ug);
                   this.wi();
                   this.page = vm(this.l);
                   this.Ge()
               }
               a.prototype.start = function(c) {
                   this.ug = !0;
                   this.De = c;
                   this.hg()
               }
               ;
               a.prototype.stop = function() {
                   Tg(this.l) && (A(function(c) {
                       return c.stop()
                   }, this.$e),
                   this.Qd.stop(),
                   this.Fb && this.Fb.stop(),
                   this.qa || this.X("event", {}, "eof"))
               }
               ;
               a.prototype.ic = function(c, b) {
                   var d = new a(c,y({}, this.options, {
                       M: b
                   }));
                   d.start(B);
                   return d
               }
               ;
               a.prototype.wi = function() {
                   var c = this;
                   this.qa = !!this.options.M;
                   this.Gb = this.options.M || 0;
                   this.Xb = !this.qa;
                   var b = this.options.Cg || [];
                   b.push(R(this.l).host);
                   this.Fb = wm(this.l, this, b);
                   b = this.Fb.Hd();
                   Mb(this.l) ? this.Xb && b.D(["i"], function(d) {
                       c.qa = d.qa;
                       c.Xb = !1;
                       d.M && (c.Gb = d.M);
                       c.hg()
                   }) : this.Xb = this.qa = !1
               }
               ;
               a.prototype.hg = function() {
                   var c = this.lc.splice(0, this.lc.length);
                   this.da(c)
               }
               ;
               a.prototype.Ge = function() {
                   this.Je = Uf(this.l);
                   this.za = this.Je(Y);
                   A(function(c) {
                       c.start()
                   }, this.$e);
                   this.Qd.start()
               }
               ;
               return a
           }(), aa, mt = (aa = {},
           aa.mousemove = 0,
           aa.mouseup = 1,
           aa.mousedown = 2,
           aa.click = 3,
           aa.scroll = 4,
           aa.windowblur = 5,
           aa.windowfocus = 6,
           aa.focus = 7,
           aa.blur = 8,
           aa.eof = 9,
           aa.selection = 10,
           aa.change = 11,
           aa.input = 12,
           aa.touchmove = 13,
           aa.touchstart = 14,
           aa.touchend = 15,
           aa.touchcancel = 16,
           aa.touchforcechange = 17,
           aa.canvasMethod = 18,
           aa.canvasProperty = 19,
           aa.zoom = 20,
           aa.resize = 21,
           aa.mediaMethod = 22,
           aa.mediaProperty = 23,
           aa.keystroke = 24,
           aa.deviceRotation = 25,
           aa.fatalError = 26,
           aa.hashchange = 27,
           aa.stylechange = 28,
           aa), Vg = ha(function(a, c) {
               var b;
               return b = {},
               b[Sa(a)] = c,
               b
           }), nt = function() {
               function a(c) {
                   var b;
                   this.isSync = !1;
                   this.Cb = [];
                   this.kf = [];
                   this.l = c;
                   this.Ib = (b = {},
                   b.event = C(this.Ah, this),
                   b.page = Vg({
                       page: 1
                   }),
                   b.mutation = Vg({
                       Li: 1
                   }),
                   b.activity = Vg({
                       Xg: 1
                   }),
                   b);
                   this.kf = [[["scroll"], {
                       pj: 1
                   }], [["selection"], {
                       rj: 1
                   }], [["change", "input"], {
                       kh: 1
                   }], [["keystroke"], {
                       Fi: 1
                   }, {
                       Jc: 1
                   }], [["zoom"], {
                       Zj: 1
                   }], [["resize"], {
                       kj: 1
                   }], [["windowfocus", "windowblur", "focus", "blur", "eof"], {
                       Wj: 1
                   }], [["mousemove", "mouseup", "mousedown", "click"], {
                       Ji: 1
                   }], [["deviceRotation"], {
                       vh: 1
                   }], [["fatalError"], {
                       Gh: 1
                   }], [["touchmove", "touchstart", "touchend", "touchcancel", "touchforcechange"], {
                       Ej: 1
                   }, {
                       touches: 1
                   }, {
                       touches: 1
                   }], [["hashchange"], {
                       ti: 1
                   }], [["stylechange"], {
                       wj: 1
                   }, {
                       Ca: 1
                   }, {
                       Ca: 1
                   }]]
               }
               a.prototype.Ah = function(c) {
                   var b, d, e = c.type, f = Za(t(Nc, w(e, G)), this.kf);
                   f || pb(Cc("vem." + e));
                   "eof" === e && (this.isSync = !0);
                   var g = f[1]
                     , h = f[2];
                   f = f[3];
                   var k = c.Z;
                   return {
                       event: (b = {
                           type: mt[e],
                           target: c.target,
                           M: c.M
                       },
                       b[Sa(g)] = h ? (d = {},
                       d[Sa(h)] = f ? k[Sa(f)] : k,
                       d) : k,
                       b)
                   }
               }
               ;
               a.prototype.Aa = function(c, b) {
                   var d = this;
                   void 0 === b && (b = !1);
                   var e = rc(c, function(h) {
                       var k = !V(h.partNum);
                       return {
                           data: k ? void 0 : d.Ib[h.type](h.data),
                           oh: k ? h.data : void 0,
                           page: h.partNum,
                           end: h.end,
                           L: h.L
                       }
                   })
                     , f = this.isSync || b ? Infinity : 10;
                   e = tc(this.l, e, f);
                   var g = [e];
                   this.Cb.push(e);
                   return e(Me(function(h) {
                       h = Zd(d.l, fi, {
                           buffer: h
                       });
                       h = tc(d.l, h, f, qe);
                       g.push(h);
                       d.Cb.push(h);
                       return h
                   }))(Me(function(h) {
                       h = Ef(d.l, h.slice(-4));
                       h = tc(d.l, h, f, qe);
                       g.push(h);
                       d.Cb.push(h);
                       return h
                   }))(Gg(function(h) {
                       h = h[h.length - 1];
                       A(function(k) {
                           k = Ie(d.l)(k, d.Cb);
                           d.Cb.splice(k, 1)
                       }, g);
                       return h
                   }))
               }
               ;
               a.prototype.Fa = function(c) {
                   return Zd(this.l, Hf, this.Ib[c.type](c.data))(re(B))
               }
               ;
               a.prototype.La = function(c) {
                   return c[0]
               }
               ;
               a.prototype.bd = function(c, b) {
                   for (var d = Ef(this.l, c)(re(B)), e = Math.ceil(d.length / b), f = [], g = 0; g < b; g += 1)
                       f.push(d.slice(g * e, e * (g + 1)));
                   return f
               }
               ;
               a.prototype.isEnabled = function() {
                   return ei(this.l)
               }
               ;
               return a
           }(), ot = function() {
               return function(a, c, b, d) {
                   var e = this;
                   this.nd = this.Mb = !1;
                   this.Oa = [];
                   this.Pf = [];
                   this.hf = [];
                   this.send = function(f, g, h, k) {
                       f = e.sender(f, e.hc, g);
                       h && k && f.then(h, k);
                       return f
                   }
                   ;
                   this.Ie = function(f, g, h, k) {
                       return new K(function(l, m) {
                           f.push([g, h, l, m, k])
                       }
                       )
                   }
                   ;
                   this.oi = function() {
                       e.Oa = og(function(h, k) {
                           return h[4].partNum - k[4].partNum
                       }, e.Oa);
                       var f = L(function(h, k, l) {
                           k = k[4];
                           return h && l + 1 === k.partNum
                       }, !0, e.Oa)
                         , g = !!e.Oa[e.Oa.length - 1][4].end;
                       return f && g
                   }
                   ;
                   this.Bd = function(f) {
                       Yi(e.l, f.slice(), function(g) {
                           e.send(g[0], g[1], g[2], g[3])
                       }, 20, "s.w2.sf.fes");
                       f.splice(0, f.length)
                   }
                   ;
                   this.Kh = function() {
                       e.nd || (e.nd = !0,
                       e.Bd(e.Pf),
                       e.Bd(e.hf))
                   }
                   ;
                   this.mh = function(f) {
                       return L(function(g, h) {
                           var k = "page" === h.type && !h.M
                             , l = "eof" === h.data.type
                             , m = k && !!h.partNum;
                           return {
                               sd: g.sd || m,
                               rd: g.rd || k,
                               qd: g.qd || l
                           }
                       }, {
                           rd: !1,
                           qd: !1,
                           sd: !1
                       }, f)
                   }
                   ;
                   this.mi = function(f, g, h, k) {
                       k ? (f = e.Ie(e.Oa, f, g, h[0]),
                       e.oi() && (e.Bd(e.Oa),
                       e.Mb = !0)) : (e.Mb = !0,
                       f = e.send(f, g));
                       return f
                   }
                   ;
                   this.ji = function(f) {
                       var g;
                       return e.Ai ? (g = {},
                       g["wv-type"] = Ma(function(h) {
                           return "eof" === n(h, "data.type")
                       }, f) ? "2" : "8",
                       g) : {}
                   }
                   ;
                   this.zf = function(f, g, h) {
                       g = {
                           G: e.ji(h),
                           J: xa(),
                           ba: g,
                           bf: !f && di(h),
                           If: e.xi
                       };
                       f && g.J.C("bt", 1);
                       return g
                   }
                   ;
                   this.Bh = function(f, g, h) {
                       f = e.zf(!1, f, g);
                       return e.Mb ? e.send(f, h) : e.Ie(e.hf, f, h, g)
                   }
                   ;
                   this.Mi = function(f, g, h) {
                       f = e.zf(!0, f, g);
                       if (e.Mb)
                           return e.send(f, h);
                       var k = e.mh(g)
                         , l = k.rd
                         , m = k.qd;
                       k = k.sd;
                       var p;
                       l && (p = e.mi(f, h, g, k));
                       e.nd ? l || (p = e.send(f, h)) : (l || (p = e.Ie(e.Pf, f, h, g)),
                       (e.Mb || m) && e.Kh());
                       return p
                   }
                   ;
                   this.Ai = d;
                   this.l = a;
                   this.xi = b;
                   this.sender = ta(a, "W", c);
                   this.hc = c
               }
           }(), pt = E("w2", function(a, c) {
               function b() {
                   h = !0
               }
               var d = O(a)
                 , e = P(c);
               if (!c.vb || sd(a) || !a.MutationObserver || !Da("Element", a.Element))
                   return B;
               Da("MutationObserver", a.MutationObserver) || fe(a, e).warn("MutationObserver is overriden, webvisor is not guaranteed to work in this environment");
               var f = ua(function(k, l) {
                   oa(a, c, l)["catch"](k)
               })
                 , g = mc(a)(Me(F([a, c], rm)))(Gg(function(k) {
                   return new lt(a,k)
               }))
                 , h = !1;
               Bp([g, f])(Xa(D(a, "wv2.R.c"), function(k) {
                   var l = k[0];
                   k = k[1];
                   if (!h) {
                       b = function() {
                           h || (h = !0,
                           l && l.stop())
                       }
                       ;
                       var m = d.o("wv2Counter");
                       if (!Uh(a, k) || m)
                           b();
                       else if (ia(a).D(a, ["beforeunload", "unload"], b),
                       d.C("wv2Counter", e),
                       d.C("stopRecorder", b),
                       k = [new Ye(a)],
                       k.unshift(new nt(a)),
                       k = Za(function(u) {
                           return u.isEnabled()
                       }, k)) {
                           m = new ot(a,c,!(k instanceof Ye),0);
                           var p = Pg.Gd(e, "m", C(m.Mi, m), k, a)
                             , q = Pg.Gd(e, "e", C(m.Bh, m), k, a);
                           k = sm();
                           m = k.Ui;
                           q.D("ag", k.Zg);
                           q.D("p", m);
                           p.D("see", function(u) {
                               var x = !1;
                               A(function(J) {
                                   "page" === J.type && (x = !0)
                               }, u);
                               x && (h || q.push({
                                   type: "event",
                                   data: {
                                       type: "fatalError",
                                       Z: {
                                           code: "invalid-snapshot",
                                           Ch: "p.s.f",
                                           stack: ""
                                       }
                                   }
                               }),
                               b())
                           });
                           var r = eb(function(u) {
                               "eof" === n(u, "data.type") ? (q.push(u),
                               p.push(u),
                               q.flush(),
                               p.flush()) : ("event" === u.type ? q : p).push(u)
                           });
                           X(a, b, 864E5);
                           Nb(a, function() {
                               l.start(r)
                           })
                       }
                   }
               }));
               return function() {
                   return b()
               }
           }), af = E("dl.w", function(a, c, b) {
               var d = 0;
               te(a, a[c], b) || (d = X(a, function() {
                   af(a, c, b)
               }, 1E3, "ec.dl"));
               return function() {
                   return ja(a, d)
               }
           }), qt = E("p.e", function(a, c) {
               var b = Aa(a, c);
               if (b) {
                   var d = O(a);
                   b = C(b.params, b);
                   var e = D(a, "h.ee", F([a, P(c), b], nm)), f, g = function(k) {
                       f = k;
                       k.sa.D(e)
                   };
                   if (c.pc)
                       return d.C("ecs", 0),
                       af(a, c.pc, g);
                   var h = oa(a, c, function(k) {
                       k = n(k, "settings.ecommerce");
                       d.C("ecs", 1);
                       return k ? af(a, k, g) : B
                   });
                   return function() {
                       h.then(function(k) {
                           k();
                           f && f.unsubscribe()
                       })
                   }
               }
           }), Xk = E("fbq.o", function(a, c, b) {
               var d = n(a, "fbq");
               if (d && d.callMethod) {
                   var e = function() {
                       var g = ya(arguments)
                         , h = d.apply(void 0, g);
                       c(g);
                       return h
                   };
                   y(e, d);
                   b && A(c, b);
                   a.fbq = e
               } else
                   var f = X(a, F([a, c, va(pa(d && d.queue))], Xk), 1E3, "fbq.d");
               return C(ja, null, a, f)
           }), rt = E("ecm.a", w("add", Sd)), st = E("ecm.r", w("remove", Sd)), tt = E("ecm.d", w("detail", Sd)), ut = E("ecm.p", w("purchase", Sd)), Wc, yb, Xc, Wg = (Wc = {},
           Wc.add_to_wishlist = "add-to-wishlist",
           Wc.begin_checkout = "begin-checkout",
           Wc.generate_lead = "submit-lead",
           Wc.add_payment_info = "add-payment-info",
           Wc), Xg = (yb = {},
           yb.AddToCart = "add-to-cart",
           yb.Lead = "submit-lead",
           yb.InitiateCheckout = "begin-checkout",
           yb.Purchase = "purchase",
           yb.CompleteRegistration = "register",
           yb.Contact = "submit-contact",
           yb.AddPaymentInfo = "add-payment-info",
           yb.AddToWishlist = "add-to-wishlist",
           yb.Subscribe = "subscribe",
           yb), km = (Xc = {},
           Xc["1"] = Wg,
           Xc["2"] = Wg,
           Xc["3"] = Wg,
           Xc["0"] = Xg,
           Xc), lm = [Xg.AddToCart, Xg.Purchase], vt = ha(function(a, c) {
               var b = n(c, "ecommerce")
                 , d = n(c, "event") || "";
               if (!(b = b && d && {
                   version: "3",
                   rc: d
               }))
                   a: {
                       if (da(c) || La(c))
                           if (b = ya(c),
                           d = b[1],
                           "event" === b[0] && d) {
                               b = {
                                   version: "2",
                                   rc: d
                               };
                               break a
                           }
                       b = void 0
                   }
               b || (b = (b = n(c, "ecommerce")) && {
                   version: "1",
                   rc: I(",", ea(b))
               });
               b && a(b)
           }), wt = E("ag.e", function(a, c) {
               var b = []
                 , d = D(a, "ag.s", F([Ha, b], A));
               "0" === c.$ && oa(a, c, function(e) {
                   if (n(e, "settings.auto_goals") && Aa(a, c) && (e = Nd(a, c, "autogoal"))) {
                       e = F([e, c.pc], jm);
                       var f = vt(e);
                       e = F([a, e], im);
                       b.push(Xk(a, e));
                       b.push(af(a, "dataLayer", function(g) {
                           g.sa.D(f)
                       }))
                   }
               });
               return d
           }), xt = /[^\d.,]/g, yt = /[.,]$/, gm = E("ep.pp", function(a, c) {
               if (!c)
                   return 0;
               a: {
                   var b = c.replace(xt, "").replace(yt, "");
                   var d = "0" === b[b.length - 1];
                   for (var e = b.length; 0 < e && !(3 < b.length - e + 1 && d); --e) {
                       var f = b[e - 1];
                       if (G(f, [",", "."])) {
                           d = f;
                           break a
                       }
                   }
                   d = ""
               }
               b = d ? c.split(d) : [c];
               d = d ? b[1] : "00";
               b = parseFloat(Kb(b[0]) + "." + Kb(d));
               d = Math.pow(10, 8) - .01;
               a.isNaN(b) ? b = 0 : (b = a.Math.min(b, d),
               b = a.Math.max(b, 0));
               return b
           }), zt = [[["EUR", "\u20ac"], "978"], [["USD", "\u0423\\.\u0415\\.", "\\$"], "840"], [["UAH", "\u0413\u0420\u041d", "\u20b4"], "980"], ["\u0422\u0413 KZT \u20b8 \u0422\u04a2\u0413 TENGE \u0422\u0415\u041d\u0413\u0415".split(" "), "398"], [["GBP", "\u00a3", "UKL"], "826"], ["RUR RUB \u0420 \u0420\u0423\u0411 \u20bd P \u0420UB P\u0423\u0411 P\u0423B PY\u0411 \u0420Y\u0411 \u0420\u0423B P\u0423\u0411".split(" "), "643"]], At = v(function(a) {
               return new RegExp(a.join("|"),"i")
           }), Bt = E("ep.cp", function(a) {
               if (!a)
                   return "643";
               var c = wh(a);
               return (a = Za(function(b) {
                   return At(b[0]).test(c)
               }, zt)) ? a[1] : "643"
           }), Ct = v(function() {
               function a() {
                   var k = h + "0"
                     , l = h + "1";
                   f[k] ? f[l] ? (h = h.slice(0, -1),
                   --g) : (e[l] = b(8),
                   f[l] = 1) : (e[k] = b(8),
                   f[k] = 1)
               }
               function c() {
                   var k = h + "1";
                   f[h + "0"] ? f[k] ? (h = h.slice(0, -1),
                   --g) : (h += "1",
                   f[h] = 1) : (h += "0",
                   f[h] = 1)
               }
               function b(k) {
                   void 0 === k && (k = 1);
                   var l = d.slice(g, g + k);
                   g += k;
                   return l
               }
               for (var d = Lh("Cy2FcreLJLpYXW3BXFJqldVsGMwDcBw2BGnHL5uj1TKstzse3piMo3Osz+EqDotgqs1TIoZvKtMKDaSRFztgUS8qkqZcaETgKWM54tCpTXjV5vW5OrjBpC0jF4mspUBQGd95fNSfv+vz+g+Hze33Hg8by+Yen1PP6zsdl7PQCwX9mf+f7FMb9x/Pw+v2Pp8Xy74eTwuBwTt913u4On1XW6hxOO5nIzFam00tC218S0kaeugpqST+XliLOlMoTpRQkuewUxoy4CT3efWtdFjSAAm+1BkjIhyeU4vGOf13a6U8wzNY4bGo6DIUemE7N3SBojDr7ezXahpWF022y8mma1NuTnZbq8XZZlPStejfG/CsbPhV6/bSnA==").join(""), e = {}, f = {}, g = 1, h = ""; g < d.length - 1; )
                   ("0" === b() ? c : a)();
               return e
           }), dm = E("ep.dec", function(a, c) {
               if (!c || sd(a))
                   return [];
               var b = Lh(c)
                 , d = b[1]
                 , e = b[2]
                 , f = b.slice(3);
               if (2 !== Eg(b[0]))
                   return [];
               b = Ct();
               f = f.join("");
               e = Eg(d + e);
               var g = "";
               d = "";
               for (var h = 0; d.length < e && f[h]; )
                   g += f[h],
                   b[g] && (d += String.fromCharCode(Eg(b[g])),
                   g = ""),
                   h += 1;
               b = "";
               for (f = 0; f < d.length; )
                   e = d.charCodeAt(f),
                   128 > e ? (b += String.fromCharCode(e),
                   f++) : 191 < e && 224 > e ? (g = d.charCodeAt(f + 1),
                   b += String.fromCharCode((e & 31) << 6 | g & 63),
                   f += 2) : (g = d.charCodeAt(f + 1),
                   b += String.fromCharCode((e & 15) << 12 | (g & 63) << 6 | d.charCodeAt(f + 2) & 63),
                   f += 3);
               d = Bb(a, b);
               return da(d) ? d : []
           }), fm = E("ep.ent", function(a, c, b) {
               a = "" + Ra(a, 10, 99);
               b = "" + 100 * c + b + a;
               if (16 < La(b))
                   return "";
               b = Nh("0", 16, b);
               c = b.slice(0, 8);
               b = b.slice(-8);
               c = (+c ^ 92844).toString(35);
               b = (+b ^ 92844).toString(35);
               return "" + c + "z" + b
           }), Yk = t(Kh, Bt), Zk = E("ep.ctp", function(a, c, b, d) {
               var e = Yk(a, b)
                 , f = Jh(a, d);
               Ih(a, c, e, f);
               Da("MutationObserver", a.MutationObserver) && (new a.MutationObserver(function() {
                   var g = Yk(a, b)
                     , h = Jh(a, d);
                   if (e !== g || f !== h)
                       e = g,
                       f = h,
                       Ih(a, c, e, f)
               }
               )).observe(a.document.body, {
                   attributes: !0,
                   childList: !0,
                   subtree: !0,
                   characterData: !0
               })
           }), Dt = E("ep.chp", function(a, c, b, d, e) {
               b && lf(a, c);
               return d || e ? ia(a).D(a.document, ["click"], D(a, "ep.chp.cl", F([a, c, d, e], em))) : B
           }), Et = E("ep.i", function(a, c) {
               return zd(a) ? cm(a, c).then(function(b) {
                   var d = b.xh
                     , e = d[0]
                     , f = d[1]
                     , g = d[2]
                     , h = d[3]
                     , k = d[4]
                     , l = d[5]
                     , m = d[6]
                     , p = d[7]
                     , q = d[8]
                     , r = d[9]
                     , u = d[10]
                     , x = d[11]
                     , J = d[12]
                     , M = d[13]
                     , Z = d[14]
                     , ma = d[15];
                   if (!b.isEnabled)
                       return K.resolve(B);
                   var db = Rd(a, e)
                     , Wb = Rd(a, h)
                     , Ec = Rd(a, m)
                     , gc = Rd(a, q)
                     , hc = "" + e + f + g === "" + h + k + l;
                   return new K(function(ic, Vc) {
                       mc(a)(Xa(Vc, function() {
                           db && Zk(a, c, f, g, u, x, J);
                           Wb && !hc && Zk(a, c, k, l, M, Z, ma);
                           ic(Dt(a, c, Ec || gc, p, r))
                       }))
                   }
                   )
               }) : K.resolve(B)
           }), Ft = E("cc.i", function(a, c) {
               var b = F([a, c], bm);
               b = F([a, b, 300], X);
               oa(a, c, b)
           }), $k = B, Gt = Fb("isp.stat", function(a, c) {
               return new K(function(b, d) {
                   if (Vp(a, sk, "isp")) {
                       var e = function(f) {
                           ("1" === f ? b : d)();
                           $k();
                           f = vj(sk);
                           G("isp", f.lb) && (f.lb = W(t(la("isp"), Rb), f.lb),
                           f.lb.length || (uc(f.bb),
                           f.bb = null))
                       };
                       $k = ia(a).D(a, ["message"], F([a, c, e], am));
                       X(a, e, 1500)
                   } else
                       d()
               }
               )
           }), Ht = Fb("isp", function(a, c) {
               oa(a, c, function(b) {
                   var d = Za(function(h) {
                       return n(b, "settings." + h)
                   }, ["rt", "mf"]);
                   if (d && Je(a)) {
                       var e = pi(b) && !je(a)
                         , f = P(c)
                         , g = Vi(c);
                       g[f] = {
                           Uc: d,
                           status: e ? 3 : 4
                       };
                       if (!e)
                           return d = $l(a, c, d),
                           Gt(a, d).then(function() {
                               g[f].status = 1
                           })["catch"](function() {
                               g[f].status = 2
                           })
                   }
               })["catch"](D(a, "l.isp"))
           }), It = E("p.fh", function(a, c) {
               var b, d;
               void 0 === c && (c = !0);
               var e = Pa(a)
                 , f = ca(a)
                 , g = e.o("wasSynced")
                 , h = {
                   id: 3,
                   $: "0"
               };
               return c && g && g.time + 864E5 > f(Y) ? K.resolve(g) : ta(a, "f", h)({
                   J: xa((b = {},
                   b.pv = 1,
                   b)),
                   G: (d = {},
                   d["page-url"] = R(a).href,
                   d["page-ref"] = a.document.referrer,
                   d)
               }, h).then(function(k) {
                   var l;
                   k = (l = {},
                   l.time = f(Y),
                   l.params = n(k, "settings"),
                   l.bkParams = n(k, "userData"),
                   l);
                   e.C("wasSynced", k);
                   return k
               })["catch"](D(a, "f.h"))
           }), Jt = ["ecommerce", "user_id", "fpp"], Kt = E("pa.int", function(a, c) {
               return function() {
                   var b, d, e = ya(arguments), f = Zl(e);
                   if (!f)
                       return null;
                   e = f.th;
                   var g = f.O;
                   f = f.Wa;
                   if (!nb(g) && !da(g))
                       return null;
                   var h = ta(a, "1", c)
                     , k = pd(c).url
                     , l = n(g, "__ym.user_id")
                     , m = ea(g)
                     , p = G("__ymu", m)
                     , q = G("__ym", m) && l;
                   m = !Nf(c);
                   var r = g;
                   r.__ym && (r = y({}, g),
                   r.__ym = L(function(u, x) {
                       var J = n(g, "__ym." + x);
                       J && (u[x] = J);
                       return u
                   }, {}, Jt),
                   ea(r.__ym).length || delete r.__ym,
                   m = !!ea(r).length);
                   l = Ab(a, c, q ? "Set user id " + l : (p ? "User p" : "P") + "arams. Counter " + c.id, q ? void 0 : JSON.stringify(r));
                   h = h({
                       O: g,
                       J: xa((b = {},
                       b.pa = 1,
                       b.ar = 1,
                       b)),
                       G: (d = {},
                       d["page-url"] = k || R(a).href,
                       d)
                   }, c).then(m ? l : B);
                   return Mc(a, "p.s", h, f, e)
               }
           }), Lt = E("exps.int", function(a, c) {
               return function(b, d, e) {
                   var f, g;
                   void 0 === d && (d = B);
                   if (b && 0 < b.length) {
                       var h = ta(a, "e", c)
                         , k = pd(c).url;
                       b = h({
                           J: xa((f = {},
                           f.ex = 1,
                           f.ar = 1,
                           f)),
                           G: (g = {},
                           g["page-url"] = k || R(a).href,
                           g.exp = b,
                           g)
                       }, c);
                       return Mc(a, "exps.s", b, d, e)
                   }
               }
           }), Mt = E("y.p", function(a, c) {
               var b = Si(a, c);
               if (b) {
                   var d = he(a)
                     , e = F([a, b, c], Yl);
                   Hi(a, d, function(f) {
                       f.D(["params"], e)
                   });
                   b.aa.D(["params"], t(U("1"), e))
               }
           }), Nt = Fb("is", function(a) {
               var c = -1 < R(a).href.indexOf("_ym_debug=200500")
                 , b = $b(a)
                 , d = b.o("debug_build") === ra.Va;
               if (c || d)
                   return b.C("debug_build", ra.Va),
                   Hc(a, {
                       src: "https://mc.yandex.ru/metrika/tag_debug.js"
                   })
           }), Eh = v(Qc), Ot = t(na("exec", /counterID=(\d+)/), U("1")), Fh = ha(function(a, c) {
               var b = Eh(a)
                 , d = pa(c)
                 , e = d[0]
                 , f = d[1];
               d = d.slice(2);
               if (f) {
                   var g = "" + e;
                   var h = {
                       id: 1,
                       $: "0"
                   };
                   var k = Ot(g);
                   k ? h.id = k : -1 === g.indexOf(":") ? (g = Ca(g),
                   h.id = g) : (g = g.split(":"),
                   k = g[1],
                   h.id = Ca(g[0]),
                   h.$ = wg(k) ? "1" : "0");
                   h = [Aa(a, h), h];
                   g = h[0];
                   h = h[1];
                   k = P(h);
                   b[k] || (b[k] = {});
                   b = b[k];
                   if (!c.lf)
                       if ("init" === f)
                           if (c.lf = !0,
                           g)
                               qb(a, "" + e, "Duplicate counter " + e + " initialization");
                           else {
                               if (e = "1" === h.$,
                               f = Nf(h),
                               e || f || !Nt(a))
                                   a["yaCounter" + h.id] = new a.Ya[ra.dc](y({}, d[0], h))
                           }
                       else
                           g && g[f] && b.vi ? (g[f].apply(g, d),
                           c.lf = !0) : (h = b.rg,
                           h || (h = [],
                           b.rg = h),
                           h.push(va([e, f], d)))
               }
           }), Pt = E("fid", function(a) {
               var c, b = B;
               if (!T(a.PerformanceObserver))
                   return b;
               var d = O(a);
               if (d.o("fido"))
                   return b;
               d.C("fido", !0);
               var e = new a.PerformanceObserver(D(a, "fid", function(f) {
                   f = f.getEntries()[0];
                   d.C("fid", a.Math.round(100 * (f.processingStart - f.startTime)));
                   b()
               }));
               b = function() {
                   return e.disconnect()
               }
               ;
               try {
                   e.observe((c = {},
                   c.type = "first-input",
                   c.buffered = !0,
                   c))
               } catch (f) {}
               return b
           }), dh = w("form", Xb), Nl = w("form", ub), Ch = v(function(a) {
               return I("[^\\d<>]*", a.split(""))
           }), Jl = v(function(a) {
               return new RegExp(Ch(a),"g")
           }), Ul = /\S/, vh = w(["style", "display:inline;margin:0;padding:0;font-size:inherit;color:inherit;line-height:inherit"], Ic), al = v(function(a) {
               a = R(a);
               a = dq(a.search.substring(1));
               a["_ym_status-check"] = a["_ym_status-check"] || "";
               a._ym_lang = a._ym_lang || "ru";
               return a
           }), rh = t(al, U("_ym_status-check"), Ca), Qt = t(al, U("_ym_lang")), Ll = ["https://iframe-toloka.com/"], qh = Oa(/^https:\/\/(yastatic\.net\/s3\/metrika|s3\.mds\.yandex\.net\/internal-metrika-betas|[\w-]+\.dev\.webvisor\.com|[\w-]+\.dev\.metrika\.yandex\.ru)\/(\w|-|\/|(\.)(?!\.))+\.js$/), Pl = ["form", "button", "phone", "status"], Ml = v(function(a, c, b) {
               b.inline ? kh(a, b) : b.resource && qh(b.resource) && (a._ym__postMessageEvent = c,
               a._ym__inpageMode = b.inpageMode,
               a._ym__initMessage = b.initMessage,
               Ql(a, b.resource))
           }, function(a, c, b) {
               return b.id
           }), Rt = E("cs.init", function(a, c) {
               var b, d = rh(a);
               d && c.id === d && "0" === c.$ && (d = (b = {},
               b.lang = Qt(a),
               b.fileId = "status",
               b.id = "" + c.id,
               b),
               X(a, F([a, d], kh), 0, "cs"))
           }), bl = v(function(a) {
               return sd(a) || !zd(a)
           }), Gl = v(sh), jh = v(Bb, vb), St = E("phc.p", function(a, c) {
               return bl(a) ? B : oa(a, c, function(b) {
                   var d = c.id
                     , e = Gc(a, void 0, d)
                     , f = e.o("phc_settings") || "";
                   if (b = n(b, "settings.phchange")) {
                       var g = ib(a, b) || "";
                       g !== f && e.C("phc_settings", g)
                   } else
                       f && (b = jh(a, f));
                   e = n(b, "clientId");
                   f = n(b, "orderId");
                   b = n(b, "phones") || [];
                   e && f && b.length && (f = {
                       Bb: "",
                       Lb: "",
                       qg: 0,
                       ia: {},
                       ta: [],
                       Lf: !1,
                       ab: !0,
                       l: a,
                       hc: c
                   },
                   y(f, {
                       Lf: !0
                   }),
                   ih(a, d, f),
                   b = ad(a),
                   e = th(a, b, 1E3),
                   d = C(ih, null, a, d, f),
                   e.D(d),
                   uh(a, b))
               })
           }), Tt = E("phc.h", function(a, c) {
               return Ej(a) || bl(a) ? null : oa(a, c, function(b) {
                   if (!n(b, "settings.phchange")) {
                       var d = Gc(a, "").o("yaHidePhones");
                       d = d ? Bb(a, d) : "";
                       (b = n(b, "settings.phhide") || d) && ph(a, c, b)
                   }
               })
           }), Ut = E("up.int", function(a, c) {
               return D(a, "up.c", function(b, d, e) {
                   var f, g = Aa(a, c), h = fe(a, P(c)).warn;
                   g ? nb(b) ? (b = (f = {},
                   f.__ymu = b,
                   f),
                   (f = g.params) && f(b, d || B, e)) : h("Wrong user params") : h("No counter instance found")
               })
           }), Vt = E("trigger.in", function(a, c) {
               c.Bg && Nb(a, F([a, "yacounter" + c.id + "inited"], $p), "t.i")
           }), Wt = E("destruct.e", function(a, c, b) {
               return function() {
                   var d = O(a)
                     , e = c.id;
                   A(function(f, g) {
                       return T(f) && D(a, "dest.fr." + g, f)()
                   }, b);
                   delete d.o("counters")[P(c)];
                   delete a["yaCounter" + e]
               }
           }), Xt = E("fip", function(a, c) {
               if (!Ck(a) || ud(a)) {
                   var b = Pa(a);
                   if (!b.o("fip")) {
                       var d = t(eb(t(function(e, f) {
                           return E("fip." + f, e)(a)
                       }, C(yq, null))), od("-"))(c);
                       b.C("fip", d)
                   }
               }
           }), Yt = w("9-d5ve+.r%7", N), Zt = E("ad", function(a, c) {
               if (!c.ib) {
                   var b = O(a);
                   if (!b.o("adBlockEnabled")) {
                       var d = function(m) {
                           G(m, ["2", "1"]) && b.C("adBlockEnabled", m)
                       }
                         , e = $b(a)
                         , f = e.o("isad");
                       if (f)
                           d(f);
                       else {
                           var g = w("adStatus", b.C)
                             , h = function(m) {
                               m = m ? "1" : "2";
                               d(m);
                               g("complete");
                               e.C("isad", m, 1200);
                               return m
                           }
                             , k = ta(a, "adb", c);
                           if (!b.o("adStatus")) {
                               g("process");
                               var l = "metrika/a" + Yt().replace(/[^a-v]+/g, "") + "t.gif";
                               Dl(a, function() {
                                   return k({}, l).then(w(!1, h))["catch"](w(!0, h))
                               })
                           }
                       }
                   }
               }
           }), $t = E("suid.int", function(a, c) {
               return function(b, d, e) {
                   var f = Aa(a, c)
                     , g = Hd(a, P(c));
                   Ga(b) || Td(a, b) ? (b = Ic(["__ym", "user_id", b]),
                   f.params(b, d || B, e)) : g.error("Incorrect user ID")
               }
           }), au = E("guid.int", function(a, c) {
               return function(b) {
                   var d = cf(a, c);
                   b && Mf(a, b, null, d);
                   return d
               }
           }), bu = ha(function(a, c) {
               0 === parseFloat(n(c, "settings.c_recp")) && (a.$d.C("ymoo" + a.Ka, a.zg(hb)),
               a.vd && a.vd.destruct && a.vd.destruct())
           }), cu = E("wsa", function(a, c) {
               var b = {
                   Ka: P(c),
                   vd: Aa(a, c),
                   zg: ca(a),
                   $d: Pa(a)
               }
                 , d = b.zg(hb);
               if (b.$d.Sd)
                   return !1;
               var e = b.$d.o("ymoo" + b.Ka);
               if (e && 30 > d - e)
                   return !0;
               oa(a, c, bu(b))["catch"](D(a, "d.f"));
               return !1
           }), du = t(function(a) {
               a = n(a, "navigator.plugins") || [];
               return La(a) ? t(pa, Fc(Boolean), Xq(function(c, b) {
                   return c.name > b.name ? 1 : 2
               }), eb(so))(a) : ""
           }, od(",")), eu = function(a) {
               return function(c) {
                   var b = Va(c);
                   if (!b)
                       return "";
                   b = b("canvas");
                   var d = []
                     , e = a()
                     , f = e.Fh;
                   e = e.uh;
                   try {
                       var g = na("getContext", b);
                       d = z(t(N, g), e)
                   } catch (h) {
                       return ""
                   }
                   return (g = Za(N, d)) ? f(c, {
                       canvas: b,
                       jh: g
                   }) : ""
               }
           }(function() {
               return {
                   uh: os,
                   Fh: yl
               }
           }), rl = ["name", "lang", "localService", "voiceURI", "default"], ml = v(function(a, c) {
               return oa(a, c, U("settings.form_goals"))
           }, vb), fu = w(!0, eh), gu = E("s.f.i", function(a, c) {
               var b = [];
               ia(a).D(a, ["click"], D(a, "s.f.c", F([a, c, b], ll)));
               ia(a).D(a, ["submit"], D(a, "s.f.e", t(U("target"), F([a, c, b], fu))));
               gh(a, c, "Form goal. Counter " + c.id + ". Init.")
           }), hu = /[\*\.\?\(\)]/g, iu = v(function(a, c, b) {
               try {
                   var d = b.replace("\\s", " ").replace(hu, "");
                   fe(a, "").warn('Function "' + d + '" has been overriden, this may cause issues with Metrika counter')
               } catch (e) {}
           }, vb), ju = E("r.nn", function(a) {
               Df(a).isEnabled && te(a, tg, function(c) {
                   c.sa.D(function(b) {
                       iu(a, b[1], b[0]);
                       tg.splice(100)
                   })
               })
           }), ku = E("lt.p", Fb("lt.p", function(a) {
               var c;
               if (Da("PerformanceObserver", a.PerformanceObserver)) {
                   var b = 0
                     , d = new a.PerformanceObserver(D(a, "lt.o", function(e) {
                       e && e.getEntries && (e = e.getEntries(),
                       b = L(function(f, g) {
                           return f + g.duration
                       }, b, e),
                       ec(a).C("lt", b))
                   }));
                   try {
                       d.observe((c = {},
                       c.type = "longtask",
                       c.buffered = !0,
                       c))
                   } catch (e) {
                       return B
                   }
                   return function() {
                       return d.disconnect()
                   }
               }
               return B
           }));
           "function" == typeof Promise && Promise.resolve();
           var Dc = {
               position: "absolute"
           }
             , ch = {
               position: "fixed"
           }
             , ff = {
               borderRadius: "50%"
           }
             , lu = t(U("settings.sm"), la(1))
             , mu = Fb("siteStatistics", function(a, c) {
               return !Ej(a) && mc(a)(Xa(B, F([a, c, function(b) {
                   return lu(b) ? kl(a, c.id) : B
               }
               ], oa)))
           })
             , cl = v(function(a) {
               return n(a, "crypto.subtle.digest") && n(a, "TextEncoder") && n(a, "FileReader") && n(a, "Blob")
           })
             , nu = E("fpm", function(a, c) {
               if (!uk(a))
                   return B;
               var b = P(c);
               if (!cl(a))
                   return qb(a, b, "Not supported"),
                   B;
               var d = Aa(a, c);
               return d ? function(e) {
                   return (new K(function(f, g) {
                       return nb(e) ? ea(e).length ? f($g(a, e).then(function(h) {
                           var k, l;
                           h && h.length && d.params((k = {},
                           k.__ym = (l = {},
                           l.fpp = h,
                           l),
                           k))
                       }, B)) : g(Ya("fpm.l")) : g(Ya("fpm.o"))
                   }
                   ))["catch"](D(a, "fpm.en"))
               }
               : B
           })
             , ou = E("p.sci", function(a, c) {
               var b = O(a);
               return b.o("scip") ? K.resolve() : oa(a, c, N).then(function(d) {
                   d = n(d, "settings.ins");
                   return !b.o("scip") && d ? Yg(a, c, b) : null
               }, D(a, "ins.cs"))
           })
             , pu = Oa(/[a-z\u0430-\u044f,.]/gi)
             , qu = E("ice", function(a, c, b) {
               var d = Aa(a, c);
               if (d) {
                   var e = n(b, "target");
                   if (e && (c = n(e, "value"),
                   (c = ob(c)) && !(100 <= La(c)))) {
                       b = Kb(c);
                       var f = 0 < c.indexOf("@")
                         , g = "tel" === n(e, "type") || !f && La(b);
                       if (f || g) {
                           if (g) {
                               if (pu(c))
                                   return;
                               g = c[0];
                               var h = b[0];
                               if (g !== h && "+" !== g)
                                   return;
                               var k = c[1];
                               if ("+" === g && k !== h)
                                   return;
                               c = c[La(c) - 1];
                               g = b[La(b) - 1];
                               if (c !== g)
                                   return;
                               c = b
                           }
                           b = f ? 5 : 11;
                           g = f ? 100 : 16;
                           La(c) < b || La(c) > g || ah(a, c).then(function(l) {
                               var m, p, q, r = ig(a, e);
                               d.params((m = {},
                               m.__ym = (p = {},
                               p.fi = Ti((q = {},
                               q.a = f ? 1 : 0,
                               q.b = r,
                               q.c = l,
                               q)).Aa(),
                               p),
                               m))
                           }, D(a, "ice.s"))
                       }
                   }
               }
           })
             , ru = ["text", "email", "tel"]
             , su = ["cc-", "name", "shipping"]
             , tu = E("icei", function(a, c) {
               return zd(a) && cl(a) && mc(a)(Xa(B, F([a, c, function(b) {
                   var d = n(b, "settings.cf");
                   b = Ud(a) || n(b, "settings.eu");
                   if (d && !b) {
                       var e = ia(a);
                       d = ub("input", a.document.body);
                       A(function(f) {
                           Bf(a, f) || !G(f.type, ru) || Ma(N, z(w(f.autocomplete, jc), su)) || e.D(f, ["blur"], F([a, c], qu))
                       }, pa(d))
                   }
               }
               ], oa)))
           })
             , uu = Fb("gic", tu)
             , Bc = O(window);
           Bc.Ta("hitParam", {});
           Bc.Ta("lastReferrer", window.location.href);
           Bc.Ta("getCounters", es(window));
           Qf.push(It);
           (function() {
               var a, c, b = Eb([Tb]);
               y(sa, (a = {},
               a.s = b,
               a.S = b,
               a.u = Tc,
               a));
               y(wa, (c = {},
               c.s = zb,
               c.S = ab,
               c.u = zb,
               c));
               ba("s");
               ba("u");
               ba("S", Qb(["v", "hid", "u", "vf", "rn"]), 1);
               Ac.push(E("s", Un))
           }
           )();
           wa["8"] = zb;
           sa["8"] = [pj];
           Ac.push(function(a, c) {
               return oa(a, c, function(b) {
                   var d, e = n(b, "settings.sbp");
                   return e && ni(a, b, {
                       Xa: c,
                       Uc: "8",
                       data: y({}, e, (d = {},
                       d.c = c.id,
                       d)),
                       Yd: "cs"
                   })
               })
           });
           ba("p", Qb(Xe), 1);
           ba("p", me(), 100);
           wa.p = ne;
           sa.p = Eb([0, Tb]);
           Ve.push(As);
           ba("4", Qb(Xe), 1);
           wa["4"] = ne;
           sa["4"] = Eb([0, Tb, yd]);
           Ve.push(Gs);
           ba("W", Qb(Xe), 1);
           sa.W = Eb([0, Tb]);
           wa.W = ne;
           Ve.push(pt);
           Ac.push(qt);
           Jd.push(["ecommerceAdd", rt]);
           Jd.push(["ecommerceRemove", st]);
           Jd.push(["ecommerceDetail", tt]);
           Jd.push(["ecommercePurchase", ut]);
           Ac.push(wt);
           Ac.push(Et);
           sa["6"] = Eb([0, Tb]);
           wa["6"] = function(a, c, b) {
               var d = zb(a, c);
               return function(e) {
                   return Yf(a, b, e, !0).then(F([e, ["https://mc.yandex.md/cc"], {
                       jd: !0,
                       Ig: !1
                   }], d))
               }
           }
           ;
           ba("6", vd, 1);
           Ac.push(Ft);
           Jb(Jc, 20);
           ba("f", Jc, 20);
           ba("n", Jc, 20);
           ba("1", Jc, 20);
           ba("d", Jc, 20);
           ba("5", Jc, 20);
           var dl = function() {
               return function(a, c, b, d) {
                   var e = this;
                   return D(window, "c.i", function() {
                       (!window || isNaN(a) && !a) && lg();
                       var f = window
                         , g = gq(a, qk, c, b, d);
                       if (!window["disableYaCounter" + g.id]) {
                           var h = P(g);
                           g.id || qb(f, h, "Invalid Metrika id: " + g.id);
                           var k = Bc.o("counters", {})
                             , l = []
                             , m = [gk, Ge, fk];
                           m.unshift(Dq);
                           var p = function(M, Z) {
                               M && (T(M) ? l.push(M) : Z && l.push(M[Z]))
                           }
                             , q = function(M, Z) {
                               var ma = Ge(f, g, "", M)(f, g);
                               ma && (T(ma.then) ? ma.then(function(db) {
                                   return p(db, Z)
                               }) : p(ma, Z));
                               return ma
                           }
                             , r = t(N, q)
                             , u = z(N, Ve)
                             , x = function(M, Z, ma) {
                               e[Z] = Tq(f, g, ma || m, Z, M)
                           };
                           if (k[h])
                               return qb(f, h, "Duplicate counter " + h + " initialization"),
                               k[h];
                           k[h] = e;
                           Bc.C("counters", k);
                           Bc.Ta("counter", e);
                           q(mu);
                           var J = fs(window, g);
                           l.push(J);
                           Ud(window);
                           cu(window, g) && delete k[h];
                           q(Zt);
                           Xt(f, [eu, du, Cl, zo, sl, qo, ns, vo, pl, nl, ul]);
                           u.push(Kr);
                           u.push(ou);
                           q(cs);
                           u.push(El);
                           u.push(uu);
                           q(St);
                           q(Tt);
                           x(ds(f, g), "hit");
                           x(Kt(f, g), "params");
                           h = q(gs, Sa({
                               unsubscribe: 1
                           }));
                           e.trackHash = Ge(f, g, "", n(h, Sa({
                               Ij: 1
                           })));
                           x(Nd(f, g), "reachGoal");
                           x(Lt(f, g), "experiments");
                           q(Vt);
                           h = q(js, Sa({
                               zd: 1
                           }));
                           x(n(h, Sa({
                               Qi: 1
                           })), "notBounce");
                           k = q(nu);
                           x(k, "firstPartyParams");
                           x(F([f, g], hl), "firstPartyParamsHashed");
                           x(n(h, Sa({
                               Zb: 1
                           })), "accurateTrackBounce");
                           q(Mt);
                           h = q(ms, Sa({
                               zd: 1
                           }));
                           x(n(h, Sa({
                               Dh: 1
                           })), "extLink");
                           x(n(h, Sa({
                               Yg: 1
                           })), "addFileExtension");
                           x(n(h, Sa({
                               file: 1
                           })), "file");
                           x(n(h, Sa({
                               ed: 1
                           })), "trackLinks");
                           l.push(Pt(f));
                           h = q(Ut);
                           x(h || B, "userParams");
                           x(Wt(f, g, l), "destruct", [gk, fk]);
                           q(Dr);
                           h = q($t);
                           x(h || B, "setUserID");
                           e.getClientID = q(au) || B;
                           q(ps);
                           x(ss(f, g), "clickmap");
                           q(rs);
                           x(ts(f, g), "enableAll");
                           q(gu);
                           q(Ht);
                           q(us);
                           q(ku);
                           u.push(Rt);
                           (h = q(vs)) && h.then(na("push", l));
                           Nb(f, F([f, u, r, 1, "a.i"], Yi));
                           q(Xl);
                           ju(f);
                           A(function(M) {
                               var Z = M[0];
                               x((0,
                               M[1])(f, g), Z)
                           }, Jd);
                           A(r, Ac)
                       }
                   })()
               }
           }();
           (function(a) {
               var c = O(a);
               c.o("i") || (c.C("i", !0),
               ia(a).D(a, ["message"], w(a, Kl)))
           }
           )(window);
           if (window.Ya && dl) {
               var el = ra.dc;
               window.Ya[el] = dl;
               ks(window);
               var fl = window.Ya[el];
               fl.informer = oo(window);
               fl.counters = Bc.o("getCounters")
           }
           (function(a) {
               var c = n(a, "ym");
               if (c) {
                   var b = n(c, "a");
                   b || (c.a = [],
                   b = c.a);
                   var d = Fh(a);
                   te(a, b, function(e) {
                       e.sa.D(d)
                   }, !0)
               }
           }
           )(window)
       }
       )()
   } catch (Yg) {}
   ;
}
).call(this)
