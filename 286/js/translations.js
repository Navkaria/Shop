var app = {
   name: "FunPay",
   data: {}
};
var messageTimer = null;
var terminated = false;
var EPSILON = 1e-7;
var runner = new Runner();
var beacon = new Beacon();
RegExp.escape = function(a) {
   return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
}
;
app.getLocale = function() {
   return app.data.locale
}
;
app.getUserId = function() {
   var a = app.data.userId;
   return a && a > 0 ? a : 0
}
;
app.t = function(h, c) {
   var a = app.getLocale();
   var b = window.translations || {};
   var g = b.hasOwnProperty(a) ? b[a] : {};
   var f = g.hasOwnProperty(h) ? g[h] : h;
   if (c && "object" === typeof c) {
       for (var d in c) {
           if (!c.hasOwnProperty(d)) {
               continue
           }
           var e = c[d];
           if ("string" === typeof e || "number" === typeof e) {
               f = f.replace(new RegExp(RegExp.escape(d),"g"), e)
           }
       }
   }
   return f
}
;
app.loadScript = function(a) {
   var c = document.getElementsByTagName("script")[0];
   var b = document.createElement("script");
   b.async = true;
   b.src = a;
   c.parentNode.insertBefore(b, c)
}
;
app.loadData = function() {
   try {
       app.data = JSON.parse(document.body.getAttribute("data-app-data")) || {}
   } catch (a) {
       app.data = {}
   }
}
;
app.getCsrfToken = function() {
   return app.data["csrf-token"]
}
;
app.processRoute = function(b) {
   if (!b || 0 === b.indexOf("http")) {
       return b
   }
   var a = app.getLocale();
   var c = "ru" === a ? "/" : "/" + a + "/";
   return 0 === b.indexOf(c) ? b : c + b.replace(/^\/+/, "")
}
;
app.webPush = {
   appCode: null,
   pw: null,
   initialize: function() {
       var a = app.data.webpush || {};
       app.webPush.appCode = a.app;
       if (a.enabled) {
           app.webPush.enable(a["hwid-required"])
       }
   },
   enable: function(b) {
       if (window.Pushwoosh) {
           app.webPush.subscribe(b)
       } else {
           var a = [];
           a.push(["init", {
               logLevel: "error",
               applicationCode: app.webPush.appCode,
               defaultNotificationTitle: app.name,
               autoSubscribe: false
           }]);
           a.push(["onReady", function() {
               app.webPush.pw = window.Pushwoosh;
               app.webPush.subscribe(b)
           }
           ]);
           a.push(["onSubscribe", function() {
               app.webPush.updateHwid()
           }
           ]);
           window.Pushwoosh = a;
           app.loadScript("https://cdn.pushwoosh.com/webpush/v3/pushwoosh-web-notifications.js")
       }
   },
   subscribe: function(b) {
       var a = app.webPush.pw;
       if (!a) {
           return
       }
       a.isSubscribed().then(function(c) {
           if (c) {
               if (b) {
                   app.webPush.updateHwid()
               }
           } else {
               a.subscribe()
           }
       })
   },
   updateHwid: function() {
       var a = app.webPush.pw;
       if (!a) {
           return
       }
       a.getHWID().then(function(b) {
           if (b) {
               $.ajax({
                   type: "POST",
                   url: app.processRoute("/push/hwid"),
                   data: {
                       hwid: b
                   },
                   dataType: "json"
               })
           }
       })
   }
};
app.simpleAjax = function(c, a, b) {
   a = a || {};
   b = b || $();
   if (typeof a === "object") {
       a.csrf_token = app.getCsrfToken()
   }
   b.prop("disabled", true);
   closeMainAlert();
   $.ajax({
       type: "POST",
       url: app.processRoute(c),
       data: a,
       dataType: "json",
       error: onAjaxError,
       success: function(d) {
           if (d.msg) {
               showMessage(d.msg, d.error)
           }
           if (d.url) {
               window.location.href = d.url
           }
       },
       complete: function() {
           b.prop("disabled", false)
       }
   })
}
;
app.uploadFile = function(a, b) {
   var c = new FormData();
   c.append("file", b);
   return $.ajax({
       type: "POST",
       url: app.processRoute(a),
       data: c,
       dataType: "json",
       contentType: false,
       processData: false,
       error: onAjaxError
   })
}
;
app.createModalDeferred = function(a) {
   var b = new $.Deferred();
   a.one("shown.bs.modal", function() {
       b.resolve()
   });
   a.one("hide.bs.modal", function() {
       b.reject()
   });
   return b
}
;
app.showUploadPreview = function(c) {
   var e = $("<img/>", {
       "class": "preview",
       alt: ""
   });
   var f = new FileReader();
   f.onload = function() {
       e.attr("src", this.result)
   }
   ;
   f.readAsDataURL(c);
   var a = $("<button/>", {
       type: "button",
       "class": "btn btn-primary modal-autofocus",
       text: app.t("button.send")
   });
   var d = $("<button/>", {
       type: "button",
       "class": "btn btn-default",
       text: app.t("button.cancel"),
       "data-dismiss": "modal"
   });
   var h = $("<div/>", {
       "class": "margin-top"
   }).append(a, document.createTextNode(" "), d);
   var k = getModal("modal-upload-preview", {
       size: "sm",
       title: app.t("caption.preview")
   });
   var j = k.find(".modal-body");
   j.append(e, h);
   var b = new $.Deferred();
   var g = false;
   var i = "hidden.bs.modal.uploadPreview";
   a.click(function() {
       g = true;
       k.modal("hide")
   });
   k.off(i).one(i, function() {
       j.empty();
       if (g) {
           b.resolve()
       } else {
           b.reject()
       }
   });
   k.modal("show");
   return b
}
;
app.toggleOverflowAnchor = function(d) {
   var c = $("body");
   var e = "overflow-anchor";
   var a = e;
   var b = c.data(a);
   if (!b) {
       b = c.css(e);
       if (b) {
           c.data(a, b)
       }
   }
   if (b) {
       if (d) {
           setTimeout(function() {
               c.css(e, b)
           }, 100)
       } else {
           c.css(e, "none")
       }
   }
}
;
app.showFormErrors = function(a, d) {
   var c, b;
   a.find(".form-group.has-error").each(function() {
       c = $(this);
       c.removeClass("has-error")
   });
   if (!d) {
       return
   }
   for (b = 0; b < d.length; ++b) {
       c = a.find('[name="' + d[b][0] + '"]').closest(".form-group");
       if (c.length) {
           c.addClass("has-error")
       }
   }
}
;
var oldSSB = $.fn.modal.Constructor.prototype.setScrollbar;
$.fn.modal.Constructor.prototype.setScrollbar = function() {
   oldSSB.apply(this);
   var b = this.scrollbarWidth;
   if (this.bodyIsOverflowing && b) {
       var a = $(".main-footer");
       if (a.css("position") == "absolute") {
           a.css("padding-right", b)
       }
       getMessageBox().css("margin-right", b)
   }
}
;
var oldRSB = $.fn.modal.Constructor.prototype.resetScrollbar;
$.fn.modal.Constructor.prototype.resetScrollbar = function() {
   oldRSB.apply(this);
   $(".main-footer").css("padding-right", "");
   getMessageBox().css("margin-right", "")
}
;
if (window.addEventListener) {
   window.addEventListener("beforeunload", function() {
       terminated = true
   })
}
function closeMainAlert() {
   $(".alert.main-alert").alert("close")
}
jQuery.fn.simpleAjaxForm = function() {
   function b(f) {
       f.preventDefault();
       var e = $(this);
       var g, c, d;
       if (e.is("form")) {
           g = e.attr("action");
           c = e.serialize();
           d = e.find('input[type="submit"], button[type="submit"]')
       } else {
           g = e.data("action");
           c = e.data("fields");
           d = e
       }
       app.simpleAjax(g, c, d)
   }
   var a = this;
   a.filter("form").submit(b);
   a.filter("button, a").click(b)
}
;
jQuery.fn.removeClassesWithPrefix = function(b) {
   var a = new RegExp("(^|\\s)" + RegExp.escape(b) + "\\S+","g");
   return this.attr("class", function(d, e) {
       return e ? e.replace(a, "") : ""
   })
}
;
(function(a, b) {
   a.fn.serializeObject = function() {
       var c = {};
       a.each(this.serializeArray(), function(e, f) {
           var g = f.name
             , d = f.value;
           c[g] = c[g] === b ? d : a.isArray(c[g]) ? c[g].concat(d) : [c[g], d]
       });
       return c
   }
}
)(jQuery);
(function() {
   function a(b, c, d) {
       if (typeof d === "undefined" || +d === 0) {
           return Math[b](c)
       }
       c = +c;
       d = +d;
       if (isNaN(c) || !(typeof d === "number" && d % 1 === 0)) {
           return NaN
       }
       c = c.toString().split("e");
       c = Math[b](+(c[0] + "e" + (c[1] ? (+c[1] - d) : -d)));
       c = c.toString().split("e");
       return +(c[0] + "e" + (c[1] ? (+c[1] + d) : d))
   }
   if (!Math.round10) {
       Math.round10 = function(b, c) {
           return a("round", b, c)
       }
   }
   if (!Math.floor10) {
       Math.floor10 = function(b, c) {
           return a("floor", b, c)
       }
   }
   if (!Math.ceil10) {
       Math.ceil10 = function(b, c) {
           return a("ceil", b, c)
       }
   }
}
)();
function ceilEx(c, b) {
   if (typeof b == "undefined" || +b === 0) {
       return Math.ceil(c)
   }
   var a = Math.round10(c, -b);
   if (c - a < EPSILON) {
       return a
   } else {
       return Math.round10(a + Math.pow(10, -b), -b)
   }
}
function floorEx(c, b) {
   if (typeof b == "undefined" || +b === 0) {
       return Math.floor(c)
   }
   var a = Math.round10(c, -b);
   if (a - c < EPSILON) {
       return a
   } else {
       return Math.round10(a - Math.pow(10, -b), -b)
   }
}
function getMessageBox() {
   var b = "site-message";
   var a = $("#" + b);
   if (!a.length) {
       a = $("<div/>", {
           id: b,
           "class": "ajax-alert"
       });
       a.click(function() {
           hideMessage()
       }).mouseenter(function() {
           clearTimeout(messageTimer)
       }).mouseleave(function() {
           hideMessage(1000)
       });
       a.appendTo("body")
   }
   return a
}
function hideMessage(a) {
   clearTimeout(messageTimer);
   if (a) {
       messageTimer = setTimeout(function() {
           hideMessage()
       }, a)
   } else {
       getMessageBox().fadeOut("fast")
   }
}
function showMessage(h, b) {
   b = !!b;
   var e = getMessageBox();
   var a = $("#global-origin");
   var g = a.offset();
   var c = g.left;
   var f = 20;
   var d = Math.min(350, a.width());
   e.css({
       right: c + "px",
       top: f + "px",
       width: d + "px"
   });
   e.toggleClass("ajax-alert-info", !b).toggleClass("ajax-alert-danger", b);
   e.text(h).show();
   hideMessage(5000)
}
function numToStr(c) {
   var a = parseFloat(c);
   if (a < 10000) {
       return c
   }
   var b = a + "";
   return b.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")
}
function getAjaxError(b, g, f) {
   var a = false;
   try {
       var c = JSON.parse(b.responseText);
       if (c.msg) {
           a = c.msg
       }
   } catch (d) {}
   if (!a) {
       a = app.t("ajax.send.error")
   }
   return a
}
function onAjaxError() {
   showMessage(getAjaxError.apply(this, arguments), true)
}
function onAjaxErrorCallback(a) {
   return function() {
       onAjaxError.apply(this, arguments);
       a()
   }
}
function activateCombobox() {
   var a = $(".js-combobox .input-group-btn");
   a = a.filter(function() {
       return !$(this).find("ul").length
   });
   if (!a.length) {
       return
   }
   a.append('<ul class="dropdown-menu dropdown-menu-right" role="menu"></ul>');
   a.on("show.bs.dropdown", function() {
       var c = $(this);
       var f = c.find("ul");
       var d, g, b;
       f.empty();
       g = c.attr("data-list");
       var h = false;
       if (g) {
           try {
               h = $.parseJSON(g)
           } catch (j) {}
       }
       if (!(h instanceof Array)) {
           h = []
       }
       if (h.length < 1) {
           f.append('<li class="disabled"><a href="javascript:void(0)">' + app.t("list.empty.text") + "</a></li>")
       } else {
           for (d = 0; d < h.length; ++d) {
               b = $('<li><a href="javascript:void(0)"></a></li>');
               g = h[d];
               b.find("a").html(g).attr("data-value", g);
               f.append(b)
           }
       }
       f.find("a").click(function() {
           var e = $(this);
           if (!e.parent().hasClass("disabled")) {
               c.closest(".js-combobox").find("input").val(e.attr("data-value")).trigger("input").change()
           }
       })
   })
}
app.activateNoticeChannels = function() {
   var b = 2;
   var c = function() {
       var e = $(this);
       var f = e.data("channel");
       var h = e.data("active") != "1";
       var d = $(".notice-button-container");
       var g = {
           channel: f,
           active: h,
           csrf_token: app.getCsrfToken(),
           button_color: d.data("color")
       };
       e.prop("disabled", true);
       $.ajax({
           type: "POST",
           url: app.processRoute("/account/noticeChannel"),
           data: g,
           dataType: "json",
           error: onAjaxError,
           success: function(i) {
               if (i.msg) {
                   showMessage(i.msg, i.error)
               }
               if (!i.error) {
                   e.data("active", h ? "1" : "0");
                   e.text(app.t(h ? "button.off.label" : "button.on.label"));
                   e.toggleClass("btn-success", h).toggleClass("btn-gray", !h);
                   if (h && f == b) {
                       app.webPush.enable(true)
                   }
                   if (d.length) {
                       d.html($(i.button).html())
                   }
               }
           },
           complete: function() {
               e.prop("disabled", false)
           }
       })
   };
   var a = "click.noticeChannels";
   $(".btn-notice-channel").off(a).on(a, c)
}
;
function activatePhoneVerification() {
   var b = $("form.form-phone-verification");
   if (!b.length) {
       return
   }
   function a(d) {
       if (!d) {
           return
       }
       var c = b.find(".page-" + d);
       if (!c.length) {
           return
       }
       b.find(".page").addClass("hidden");
       c.removeClass("hidden");
       b.find('[name="mode"]').val(d);
       b.find('input[name="captcha"]').val("")
   }
   b.find(".btn-link").click(function() {
       a($(this).attr("data-mode"))
   });
   b.submit(function() {
       var d = b.serialize();
       var c = b.find('button[type="submit"]');
       var e = b.find('[name="mode"]').val();
       c.prop("disabled", true);
       $.ajax({
           type: "POST",
           url: app.processRoute(b.attr("action")),
           data: d,
           dataType: "json",
           error: onAjaxError,
           success: function(f) {
               var g;
               if (f.url) {
                   window.location.href = f.url;
                   return
               }
               if (f.mode) {
                   a(f.mode)
               }
               g = b.find("ul.form-messages");
               if (f.error) {
                   g.find("li").text(f.error)
               }
               g.toggleClass("hidden", !f.error);
               if (f.phone) {
                   b.find("p.phone").text(f.phone)
               }
               b.find(".page-phone .btn-link").toggleClass("hidden", !f.phone)
           },
           complete: function() {
               c.prop("disabled", false);
               if (e == "phone") {
                   updateCaptcha(b)
               }
           }
       });
       return false
   })
}
function getRandomTag() {
   var a = "";
   var c = "abcdefghijklmnopqrstuvwxyz0123456789";
   for (var b = 0; b < 10; b++) {
       a += c.charAt(Math.floor(Math.random() * c.length))
   }
   return a
}
function waitForPayment(a) {
   function b() {
       $.ajax({
           type: "GET",
           url: app.processRoute("/payments/waiting"),
           data: {
               payment: a,
               tag: getRandomTag()
           },
           dataType: "json",
           error: onAjaxErrorCallback(function() {
               waitForPayment(a)
           }),
           success: function(c) {
               if (c.url) {
                   window.location.href = c.url
               } else {
                   waitForPayment(a)
               }
           }
       })
   }
   setTimeout(b, 3000)
}
function activateDetailsForm() {
   var d = $("form.details");
   if (!d.length) {
       return
   }
   var a = d.find(".groups");
   var b = a.children().last().clone();
   a.on("click", ".delete", function() {
       $(this).closest(".form-group").remove()
   });
   function c() {
       var h = d.attr("data-n");
       var f = $(this).closest(".form-group");
       if (h != f.attr("data-n")) {
           return
       }
       if (f.find("select").val() == "" && f.find("input.data").val() == "") {
           return
       }
       ++h;
       var e = b.clone();
       e.attr("data-n", h);
       e.find("input, select").each(function() {
           var j = $(this);
           var g = j.attr("name");
           if (g) {
               var i = g.replace(/\[\d+]/g, "[" + h + "]");
               if (i != g) {
                   j.attr("name", i)
               }
           }
       });
       a.find(".delete").removeClass("hidden");
       e.appendTo(a);
       d.attr("data-n", h)
   }
   a.on("change", "select", function(f) {
       c.apply(this, f)
   });
   a.on("input", "input.data", function(f) {
       c.apply(this, f)
   });
   d.submit(function() {
       var e = d.find('button[type="submit"]');
       function f() {
           e.prop("disabled", false)
       }
       e.prop("disabled", true);
       d.find(".form-group.has-error").removeClass("has-error");
       d.find(".help-block").addClass("hidden");
       closeMainAlert();
       $.ajax({
           type: "POST",
           url: app.processRoute(d.attr("action")),
           data: d.serialize(),
           dataType: "json",
           error: onAjaxErrorCallback(f),
           success: function(h) {
               if (h.error) {
                   if (h.errors) {
                       var m = h.errors.length;
                       for (var g = 0; g < m; ++g) {
                           var l = h.errors[g][0];
                           var k = h.errors[g][1];
                           var j = d.find('.form-group[data-n="' + l + '"]');
                           j.addClass("has-error").find(".help-block").text(k).removeClass("hidden")
                       }
                   }
                   showMessage(h.msg, true);
                   f()
               } else {
                   window.location.href = h.url
               }
           }
       });
       return false
   })
}
function submitOnEnter(a) {
   a.keypress(function(b) {
       if (b.keyCode == 13 && !a.prop("readonly")) {
           if (b.shiftKey) {
               return true
           }
           a.closest("form").submit();
           return false
       }
   })
}
function Runner() {
   var k = {};
   var j = 0;
   var c = null;
   var l = 0;
   var i = !!document.hidden;
   var d = 30;
   var g = d;
   var e = d;
   var f = false;
   function b() {
       if (terminated) {
           return
       }
       if (!a()) {
           m(true)
       }
   }
   function m(o) {
       if (c != null) {
           clearTimeout(c);
           c = null
       }
       if (o) {
           var n = (i ? e : g) * 1000 * (f ? 2 : 1);
           c = setTimeout(b, n)
       }
   }
   function h() {
       var n = d;
       $.each(k, function(p, o) {
           $.each(o, function(s, r) {
               var q = r.interval;
               if (q && q < n) {
                   n = q
               }
           })
       });
       if (g != n) {
           g = n;
           m(true)
       }
   }
   function a(r) {
       var q, s, o, n, p;
       if (terminated || (!r && (l > 0 || !j))) {
           return false
       }
       m(false);
       l++;
       p = [];
       for (q in k) {
           if (k.hasOwnProperty(q)) {
               for (s in k[q]) {
                   if (k[q].hasOwnProperty(s)) {
                       o = k[q][s];
                       n = $.isFunction(o.data) ? o.data(q, s) : o.data;
                       p.push({
                           type: q,
                           id: s,
                           tag: o.tag,
                           data: n
                       })
                   }
               }
           }
       }
       $.ajax({
           type: "POST",
           url: app.processRoute("/runner/"),
           data: {
               objects: JSON.stringify(p),
               request: r ? JSON.stringify(r) : false,
               csrf_token: app.getCsrfToken()
           },
           dataType: "json",
           error: r ? onAjaxError : false,
           success: function(w) {
               var u, t, v, y, x;
               if (terminated || !w) {
                   return
               }
               if (w.response && r && r.callback_success) {
                   r.callback_success(w.response)
               }
               if (w.objects) {
                   t = w.objects.length;
                   for (u = 0; u < t; ++u) {
                       x = w.objects[u];
                       v = x.type;
                       y = x.id;
                       if (k[v] && k[v][y]) {
                           k[v][y]["tag"] = x.tag;
                           if (k[v][y]["callback"]) {
                               k[v][y]["callback"](v, y, x.data)
                           }
                       }
                   }
               }
           },
           complete: function(u) {
               l--;
               var t = u && u.status ? u.status : 0;
               f = !t || t == 429 || t == 502;
               m(true);
               if (r && r.callback_complete) {
                   r.callback_complete()
               }
           }
       });
       return true
   }
   this.addObject = function(p, s, n, o, q, r) {
       if (!k[p]) {
           k[p] = {}
       }
       k[p][s] = {
           tag: n,
           interval: o,
           data: q,
           callback: r
       };
       ++j;
       h()
   }
   ;
   this.updateObjectInterval = function(o, p, n) {
       if (k[o] && k[o][p]) {
           k[o][p]["interval"] = n;
           h()
       }
   }
   ;
   this.sendRequest = function(q, p, n, o) {
       a({
           action: q,
           data: p,
           callback_success: n,
           callback_complete: o
       })
   }
   ;
   $(document).on("visibilitychange", function() {
       if (i != this.hidden) {
           i = this.hidden;
           if (i) {
               m(true)
           } else {
               a()
           }
       }
   });
   m(true)
}
function Beacon() {
   var c = !!document.hidden;
   var a = null;
   var g = false;
   var d = false;
   var b = document.title;
   function f() {
       document.title = g ? b : d;
       g = !g
   }
   function e(h) {
       if (a != null) {
           clearInterval(a);
           a = null
       }
       if (h && c) {
           d = h;
           document.title = h;
           g = true;
           a = setInterval(f, 1000)
       } else {
           document.title = b
       }
   }
   this.setMessage = e;
   $(document).on("visibilitychange", function() {
       if (c != this.hidden) {
           c = this.hidden;
           if (!c) {
               e(false)
           }
       }
   })
}
function activateDynamicTables() {
   var a = $(".dyn-table");
   if (!a.length) {
       return
   }
   function b(t) {
       var c = $(t.data("form") || ".dyn-table-form");
       if (!c.length) {
           return
       }
       var m = $(t.data("continue") || ".dyn-table-continue");
       var n = $(t.data("filter") || ".dyn-table-filter");
       var r = 'input[name="continue"]';
       var h = c.find(r);
       var l = c.find('input[name="filter"]');
       var i = n.find(".btn");
       var o = i.find(".filter-text");
       var k = n.find("li a");
       var p = u(t);
       var j;
       function u(v) {
           return v.find(".dyn-table-body")
       }
       function d(w, v) {
           w = w || "";
           v = !!v;
           if (!j) {
               if (!w) {
                   return
               }
               j = $("<p/>", {
                   "class": "lead"
               });
               j.insertAfter(t)
           }
           j.text(w).toggleClass("text-danger", v).toggleClass("hidden", !w)
       }
       function f(v) {
           v = v || "";
           if (v == "0") {
               v = ""
           }
           h.val(v);
           m.toggleClass("hidden", !v)
       }
       function e(w, v) {
           l.val(w);
           o.html(v)
       }
       function s(v) {
           m.add(i).prop("disabled", !v)
       }
       function q() {
           var v = !p.children().length;
           t.toggleClass("hidden", v);
           d(v ? app.t("table.empty.text") : "");
           if (v) {
               f("")
           }
       }
       function g(x) {
           var v = x === "filter";
           var w = c.serializeObject();
           if (v) {
               w["continue"] = ""
           }
           s(false);
           $.ajax({
               type: "POST",
               url: app.processRoute(c.attr("action")),
               data: w,
               dataType: "html"
           }).done(function(z) {
               var B = $("<div/>").html(z);
               var A = u(B).children();
               var y = B.find(r).val();
               if (v) {
                   p.empty()
               }
               if (A.length) {
                   p.append(A);
                   t.trigger("appended.fp.dyntable")
               }
               f(y);
               q()
           }).fail(function() {
               if (v) {
                   p.empty();
                   q();
                   d(app.t("request.fail.error"), true)
               }
           }, onAjaxError).always(function() {
               s(true)
           })
       }
       m.click(function() {
           g("continue")
       });
       if (k.length) {
           n.on("show.bs.dropdown", function() {
               var v = l.val();
               k.parent().removeClass("active");
               k.filter('[data-value="' + v + '"]').parent().addClass("active")
           });
           k.click(function() {
               var v = $(this);
               e(v.data("value"), v.html());
               g("filter")
           })
       }
   }
   a.each(function() {
       b($(this))
   })
}
function activateAffix(j, b, e) {
   if (!j || !j.length) {
       return
   }
   var c = b || function() {
       return j.offset().top
   }
   ;
   var i = e || function() {
       return $("#footer").outerHeight(true) + 30
   }
   ;
   var g;
   var a;
   var h = false;
   var f = $(document);
   function d() {
       g = c();
       a = i();
       var l = f.outerHeight(true) - g - a;
       var k = l - j.outerHeight(true);
       if (k <= 10) {
           if (h) {
               j.removeData("bs.affix").removeClass("affix affix-top affix-bottom");
               h = false
           }
       } else {
           if (!h) {
               j.affix({
                   offset: {
                       top: function() {
                           return g
                       },
                       bottom: function() {
                           return a
                       }
                   }
               });
               h = true
           }
       }
   }
   $(window).resize(function() {
       d();
       if (h) {
           j.css("position", "");
           f.trigger("scroll")
       }
   });
   d();
   j.one("affixed.bs.affix", function() {
       f.trigger("scroll")
   })
}
function processChat() {
   var I = $(".chat");
   if (I.length != 1) {
       return
   }
   var p = "chat_node";
   var s = 5;
   var C = {
       nodeId: I.data("id"),
       nodeName: I.data("name"),
       userId: I.data("user"),
       hasHistory: I.data("history") == "1",
       offerId: I.data("offer"),
       sellerId: I.data("seller"),
       compact: I.data("compact"),
       show_avatar: I.data("show_avatar")
   };
   var D = I.find(".chat-message-list");
   var k = I.find(".chat-empty");
   var a = $(".chat-contacts");
   var E = I.find("form");
   var u = E.find('[name="content"]');
   var q = E.find("button");
   var l = E.find(".chat-btn-image");
   var H = F();
   var w = $(".a-toggle-chat");
   var b = $(".chat-promo");
   var r = $(".chat-full");
   var g = $(".chat-back");
   var d = r.find(".chat-detail");
   var K = d.find(".chat-panel");
   var t = r.find(".chat-panel-mobile");
   function e(P) {
       var Q = P ? (P.attr("id") || "") : "";
       var N = Q.split("-");
       var O = N && N.length == 2 ? N[1] : "";
       return Number(O) || 0
   }
   function F() {
       var N = D.children(".message");
       var O = e(N.first());
       var P = e(N.last());
       return {
           min: Math.min(O, P),
           max: Math.max(O, P)
       }
   }
   function J(ad) {
       if (terminated || !ad) {
           return
       }
       var S = ad.node;
       C.nodeId = S.id;
       if (!ad.hasHistory) {
           C.hasHistory = false
       }
       var Q = ad.messages.length;
       if (!Q) {
           return
       }
       var W = "";
       var N = "";
       var T = H.min;
       var X = H.max;
       var V = T;
       var aa = X;
       var R = false;
       for (var U = 0; U < Q; ++U) {
           var ac = ad.messages[U];
           var O = ac.id;
           if (!T || O < T) {
               T = O
           }
           if (O > X) {
               X = O
           }
           if (O < V) {
               W += ac.html
           } else {
               if (O > aa) {
                   N += ac.html;
                   if (ac.author != C.userId) {
                       R = true
                   }
               }
           }
       }
       H = {
           min: T,
           max: X
       };
       if (k.length && !k.hasClass("hidden")) {
           D.removeClass("hidden");
           k.addClass("hidden")
       }
       if (W) {
           var ab = D.prop("scrollHeight");
           var P = D.scrollTop();
           D.prepend(W);
           D.scrollTop(P + D.prop("scrollHeight") - ab)
       }
       if (N) {
           var Z = D.scrollTop() > D.prop("scrollHeight") - D.height() - 50;
           D.append(N);
           if (Z) {
               n()
           }
           if (R && !S["public"]) {
               onChatMessage(X, !document.hidden)
           }
       }
       if (!C.compact || !ad.promo || !b.length) {
           return
       }
       var Y = $("<div>" + ad.promo + "</div>");
       [".chat-promo-user", ".chat-promo-desc"].forEach(function(ae) {
           b.find(ae).html(Y.find(ae).html())
       })
   }
   function f(P) {
       if (!P) {
           return
       }
       setChatBadge(P.counter);
       onChatMessage(P.message);
       a.html(P.html);
       a.find('[data-id="' + C.nodeId + '"]').addClass("active");
       var Q = !a.find(".contact-item").length;
       var N = "chat-bookmarks-empty";
       var O = "chat-bookmarks-nonempty";
       if (!C.nodeName && !Q && r.hasClass(N)) {
           r.removeClass("moved")
       }
       r.toggleClass(N, Q).toggleClass(O, !Q)
   }
   function M() {
       var N = {
           node: C.nodeName,
           last_message: H.max,
           content: u.val(),
           compact: C.compact,
           show_avatar: C.show_avatar
       };
       if (C.offerId && C.sellerId) {
           $.extend(N, {
               offer_id: C.offerId,
               seller_id: C.sellerId
           })
       }
       return N
   }
   function z() {
       var N = D.get(0);
       var O = N && N.offsetWidth && N.clientWidth && N.offsetWidth === N.clientWidth;
       if (O) {
           D.addClass("scrollbar-invisible")
       }
   }
   function n() {
       D.scrollTop(D.prop("scrollHeight"))
   }
   function j() {
       I.find(".notice-button-container").click(function() {
           var N = getModal("modal-notices", {
               title: app.t("notices.modal.title"),
               size: "lg"
           });
           var O = showModalRemote("/account/notices", {}, N);
           O.done(function(P) {
               N.find(".modal-body").html(P.data);
               app.activateNoticeChannels();
               N.modal("handleUpdate")
           });
           return false
       })
   }
   function v() {
       var N = 0;
       var Q = D.prop("scrollHeight") < D.height() + 50;
       D.on("scroll", function() {
           var R = D.scrollTop();
           if (R != N) {
               if (R < N && R < 300) {
                   Q = true
               }
               N = R
           }
       });
       function P() {
           Q = false;
           setTimeout(O, 1000)
       }
       function O() {
           if (C.hasHistory && Q && !I.hasClass("hidden")) {
               $.ajax({
                   type: "GET",
                   url: app.processRoute("/chat/history"),
                   data: {
                       node: C.nodeName,
                       last_message: H.min,
                       show_avatar: C.show_avatar
                   },
                   dataType: "json",
                   error: onAjaxError,
                   success: function(R) {
                       J(R.chat)
                   },
                   complete: function() {
                       P()
                   }
               })
           } else {
               P()
           }
       }
       O()
   }
   function m() {
       if (!l.length) {
           return
       }
       var N = Number(l.data("size-max")) || 0;
       var Q = l.data("size-max-s");
       function P(S, R) {
           if (S.size > N) {
               showMessage(app.t("file.size.too_big", {
                   "%max%": Q
               }), true);
               return
           }
           o(false);
           if (!R) {
               app.showUploadPreview(S).done(function() {
                   P(S, true)
               }).fail(function() {
                   o(true)
               }).always(function() {
                   u.focus()
               });
               return
           }
           app.uploadFile("file/addChatImage", S).done(function(T) {
               var U = M();
               U.image_id = T.fileId;
               U.content = "";
               y(U, false)
           }).fail(function() {
               o(true)
           })
       }
       function O() {
           var R = "chat-input-image";
           var S = E.find("." + R);
           if (!S.length) {
               S = $("<input/>", {
                   type: "file",
                   "class": R + " hidden",
                   accept: "image/*"
               });
               S.change(function() {
                   var T;
                   var U = [];
                   for (T = 0; T < this.files.length; ++T) {
                       U.push(this.files[T])
                   }
                   this.value = "";
                   if (!U.length) {
                       return false
                   }
                   P(U[0]);
                   return false
               });
               E.append(S)
           }
           return S
       }
       l.click(function() {
           O().click()
       });
       u.on("paste", function(V) {
           if (l.prop("disabled")) {
               return
           }
           var W = V.originalEvent.clipboardData || false;
           if (!W) {
               return
           }
           var R = W.items || false;
           if (!R) {
               return
           }
           var T, U, S;
           for (T = 0; T < R.length; ++T) {
               U = R[T];
               if (U.type.indexOf("image/") === 0) {
                   S = U.getAsFile();
                   if (S) {
                       P(S);
                       return false
                   }
               }
           }
       })
   }
   function x(N, P, O) {
       J(O)
   }
   function i(N, P, O) {
       f(O)
   }
   function c(P, U, R) {
       var T, O, S;
       var N = !d.is(":visible");
       function Q() {
           return N && !t.hasClass("hidden") ? t.outerHeight() : 0
       }
       if (N) {
           T = D.scrollTop();
           O = Q()
       }
       $.each([["desktop", K], ["mobile", t]], function(W, Y) {
           var Z = Y[0];
           var V = Y[1];
           var X = R && R.html && R.html[Z] ? R.html[Z] : "";
           V.html(X).toggleClass("hidden", !X)
       });
       if (N) {
           S = Q() - O;
           if (Math.abs(S) > 0.1) {
               D.scrollTop(T + S)
           }
       }
   }
   function o(N) {
       N = !!N;
       u.prop("readonly", !N);
       q.prop("disabled", !N);
       l.prop("disabled", !N)
   }
   function y(Q, P) {
       o(false);
       function N(R) {
           if (R.url) {
               window.location.href = R.url
           } else {
               if (R.error) {
                   showMessage(R.error, true)
               } else {
                   if (P) {
                       u.val("").trigger("input")
                   }
               }
           }
       }
       function O() {
           o(true)
       }
       runner.sendRequest("chat_message", Q, N, O)
   }
   function B(N) {
       N.on("click", ".contact-item", function() {
           var O = $(this);
           O.siblings().removeClass("active");
           O.addClass("active");
           if (O.data("id") == C.nodeId && g.is(":visible")) {
               r.addClass("moved");
               return false
           }
       })
   }
   function A() {
       var N = I[0];
       var O = false;
       setInterval(function() {
           var Q = N.getBoundingClientRect();
           var P = Q.top < window.innerHeight;
           if (P != O) {
               O = P;
               runner.updateObjectInterval(p, C.nodeName, P ? s : null)
           }
       }, 3000)
   }
   E.submit(function() {
       y(M(), true);
       return false
   });
   if (C.nodeName) {
       var L = $("#content").hasClass("content-promo-index");
       runner.addObject(p, C.nodeName, I.attr("data-tag"), C.compact || L ? null : s, M, x);
       if (L) {
           A()
       }
   }
   if (a.length && C.userId) {
       B(a);
       runner.addObject("chat_bookmarks", C.userId, I.attr("data-bookmarks-tag"), null, false, i)
   }
   if (K.length) {
       runner.addObject(K.data("type"), K.data("id"), K.data("tag"), null, false, c)
   }
   if (w.length) {
       w.on("click", function() {
           $(".chat, .chat-promo").toggleClass("hidden");
           n();
           runner.updateObjectInterval(p, C.nodeName, I.hasClass("hidden") ? null : s);
           return false
       })
   }
   function h() {
       if (!I.hasClass("a-affix")) {
           return
       }
       activateAffix(I, function() {
           return $(".js-chat-top").offset().top - 13
       })
   }
   function G() {
       var N = $("<div/>", {
           "class": "hiddendiv"
       });
       N.insertAfter(u);
       u.on("input", function() {
           N.text(u.val() + "\n");
           var O = N.outerHeight();
           u.css("height", O);
           $().add(N).add(u).toggleClass("over", O > 136)
       })
   }
   if (r.length) {
       g.on("click", function() {
           r.removeClass("moved")
       })
   }
   z();
   n();
   submitOnEnter(u);
   j();
   v();
   m();
   h();
   G()
}
function strToFloat(a) {
   if ($.type(a) === "string") {
       a = a.replace(/\s+/g, "").replace(/,/g, ".")
   }
   var b = parseFloat(a);
   if (isNaN(b)) {
       b = 0
   }
   return b
}
function activateOfferForm() {
   var m = 7;
   var u = 11;
   var e = "changed.fp.calc";
   var c = $('select[name="method"]');
   var b = c.closest("form");
   var l = b.find('input[name="sum"]');
   var f = b.find('input[name="amount"]');
   var g = b.find(".js-order-prices");
   var n = g.find(".js-payment-unit");
   var j = g.find(".js-balance-unit");
   var s = g.find(".js-balance-total");
   var t = g.find(".js-balance-pay");
   var o = g.find(".js-discount");
   var w = o.closest(".js-price-row");
   var d = g.find(".js-payment-sum");
   var q = c.closest(".form-group").find(".js-card-switcher");
   var h = c.find('option[value="' + m + '"]');
   var i = c.find('option[value="' + u + '"]');
   var k;
   function p(A, C) {
       var z, B;
       var D = C.length;
       if (!A || !D) {
           return 0
       }
       B = ceilEx(A, 3);
       if (B < EPSILON || B >= 1000000000) {
           return 0
       }
       for (z = 0; z < D; ++z) {
           B = ceilEx(B * C[z], 2)
       }
       if (B < EPSILON) {
           return 0
       }
       return B
   }
   function x(B, E) {
       var A, D, z, C;
       var F = E.length;
       if (!B || !F) {
           return 0
       }
       B = floorEx(B, 2);
       if (B < EPSILON || B >= 1000000000) {
           return 0
       }
       D = B;
       for (A = F - 1; A >= 0; --A) {
           D = (D - 0.01) / E[A]
       }
       z = floorEx(D, 3);
       if (z > EPSILON) {
           D = B - p(z, E);
           for (A = 0; A < F; ++A) {
               D /= E[A]
           }
           C = D / 5;
           if (C > EPSILON) {
               for (A = 0; A < 10; ++A) {
                   D = ceilEx(z + C, 3);
                   if (p(D, E) > B) {
                       break
                   } else {
                       z = D
                   }
               }
           }
           for (A = 2; A >= 0; --A) {
               D = ceilEx(z, A);
               if (p(D, E) > B) {
                   break
               } else {
                   z = D
               }
           }
       }
       return z
   }
   function a() {
       if (!k) {
           return
       }
       var B, A;
       var z = c.find(":selected");
       var C = r(z);
       if (k.is(l)) {
           A = x(strToFloat(l.val()), C);
           f.val(A > EPSILON ? A : "").trigger(e)
       }
       if (k.is(f)) {
           B = p(strToFloat(f.val()), C);
           l.val(B > EPSILON ? B : "")
       }
       if (!C.length) {
           c.closest(".form-group").addClass("has-error")
       }
       y()
   }
   function r(A) {
       var B;
       var D = [];
       var C = A.attr("data-factors");
       if (C) {
           var z = C.split(",");
           for (B = 0; B < z.length; ++B) {
               D.push(parseFloat(z[B]))
           }
       }
       return D
   }
   function y() {
       var E = c.find(":selected");
       var I = r(E);
       var F = strToFloat(f.val());
       if (!I.length || ceilEx(F, 2) <= 0) {
           g.addClass("hidden");
           return
       }
       var G = p(F, I);
       if (G) {
           G = floorEx(G, 2);
           if (G < EPSILON || G >= 1000000000) {
               G = 0
           }
       } else {
           G = 0
       }
       var B = p(F, [I[0]]);
       var D = E.data("cy");
       var C = E.data("show-discount");
       var N = E.data("unit");
       var K = c.data("balance-unit-" + D);
       var M = c.data("balance-" + D);
       var A = c.data("balance-total-" + D);
       var z = Math.max(0, Math.round10(B - M, -2));
       var H = Math.max(0, Math.round10(B - z, -2));
       var J = z > 0 ? p(z, [I[1], I[2]]) : 0;
       var L = 0;
       if (C) {
           L = Math.max(0, ceilEx(G - H - J, 2))
       }
       n.text(N);
       j.text(K);
       s.text(A);
       t.text(H);
       o.text(L > 0 ? -L : 0);
       w.toggleClass("hidden", A <= 0 || !C);
       d.text(J);
       g.toggleClass("hidden", A < EPSILON)
   }
   function v(z) {
       if (!q.length) {
           return
       }
       q.closest("p").addClass("hidden");
       if (u == z) {
           h.addClass("hidden");
           i.removeClass("hidden")
       } else {
           if (m == z) {
               h.removeClass("hidden");
               i.addClass("hidden")
           } else {
               return
           }
       }
       q.filter('[data-method="' + z + '"]').closest("p").removeClass("hidden");
       c.selectpicker("refresh")
   }
   c.on("show.bs.select", function() {
       c.siblings(".dropdown-menu").find("a.hidden").closest("li").addClass("hidden")
   });
   if (q.length) {
       h.addClass("hidden");
       q.click(function() {
           c.selectpicker("val", $(this).data("method") === m ? u : m)
       })
   }
   c.change(function() {
       v(c.val());
       if (l.length) {
           var z = c.find(":selected");
           var A = z.attr("data-unit");
           l.siblings(".form-control-feedback").text(A ? A : "");
           a()
       } else {
           y()
       }
   });
   b.on("change input " + e, "input, select", function() {
       $(this).closest(".form-group").removeClass("has-error")
   });
   if (l.length) {
       l.add(f).on("input", function() {
           var z = $(this);
           if (z.is(":focus")) {
               k = z
           }
           a()
       })
   }
   b.submit(function() {
       if (b.hasClass("correct")) {
           return true
       }
       var A = b.serialize();
       var z = b.find('button[type="submit"]');
       z.prop("disabled", true);
       $.ajax({
           type: "POST",
           url: app.processRoute(b.attr("action")),
           data: A,
           dataType: "json",
           error: onAjaxError,
           success: function(B) {
               if (B.url) {
                   window.location.href = B.url
               } else {
                   if (B.error) {
                       showMessage(B.msg, B.error);
                       app.showFormErrors(b, B.errors)
                   } else {
                       b.addClass("correct");
                       b.submit()
                   }
               }
           },
           complete: function() {
               z.prop("disabled", false)
           }
       });
       return false
   });
   window.addEventListener("resize", function() {
       try {
           c.selectpicker("refresh")
       } catch (z) {}
   });
   setTimeout(function() {
       var z = c.val();
       if (z > 0) {
           c.change()
       }
   }, 0)
}
function showTransactionInfo(b) {
   var a = $(".modal-transaction");
   showModalRemote("/users/transaction", {
       id: b
   }, a).done(function(f) {
       var c = a.find(".modal-body");
       c.html(f.html);
       var g = $(".transactions .tc-item").filter('[data-transaction="' + b + '"]');
       var e = "transaction-status-";
       var d = e + f.status;
       if (!g.hasClass(d)) {
           g.removeClassesWithPrefix(e).addClass(d)
       }
       g.find(".transaction-status").text(f.status_text);
       a.modal("handleUpdate")
   })
}
function showModalRemote(c, f, e) {
   if (!c || !e || !e.length) {
       return
   }
   var a = e.find(".modal-body");
   a.html('<span class="text-muted">' + app.t("modal.loading.text") + "</span>");
   var d = app.createModalDeferred(e);
   var g = $.ajax({
       type: "GET",
       url: app.processRoute(c),
       data: f,
       dataType: "json",
       error: function() {
           var h = getAjaxError.apply(this, arguments);
           a.empty().append($("<span/>", {
               "class": "text-danger"
           }).text(h))
       }
   });
   var b = new $.Deferred();
   $.when(d, g).done(function(h, i) {
       b.resolve(i[0])
   }).fail(function() {
       b.reject()
   });
   e.modal("show");
   return b
}
function activateWithdraw() {
   var k = $(".withdraw-box");
   if (!k.length) {
       return
   }
   var B = k.data("data");
   var G = B.currencies;
   var u = B.extCurrencies;
   var A = k.find("form");
   var z = A.find('[name="preview"]');
   var v = A.find(".currency-box");
   var q = A.find('[name="currency_id"]');
   var x = A.find('[name="ext_currency_id"]');
   var n = A.find('[name="wallet"]');
   var a = n.closest(".js-combobox");
   var y = A.find('[name="amount_int"]');
   var C = A.find('[name="amount_ext"]');
   var d = A.find('button[type="submit"]');
   var l = A.find(".inputs");
   var g = A.find(".error");
   var p = A.find(".preview");
   var t = k.closest(".modal");
   var D, E, J, F, s;
   function e() {
       t.modal("handleUpdate")
   }
   function b(K) {
       K = !!K;
       z.val(K ? "" : "1");
       v.toggleClass("hidden", K);
       l.toggleClass("hidden", K);
       p.toggleClass("hidden", !K);
       s = K
   }
   function h(M) {
       if (D) {
           var K = D.channels;
           for (var L = 0; L < K.length; ++L) {
               var N = K[L];
               if (N.extCurrency == M) {
                   return N
               }
           }
       }
       return false
   }
   function o(K) {
       if (!$.isArray(K)) {
           K = []
       }
       var L = K.length > 0;
       a.toggleClass("input-group", L);
       a.find(".input-group-btn").toggleClass("hidden", !L).attr("data-list", JSON.stringify(K));
       n.val(L ? K[0] : "")
   }
   function w(M) {
       if (M.is(E)) {
           return
       }
       var K = M.is(y) ? C : y;
       var L = "slave";
       M.removeClass(L);
       K.addClass(L);
       E = M;
       J = K
   }
   function m() {
       var M = x.val();
       var N = h(M);
       var K = x.closest(".form-group").find(".help-block");
       if (N) {
           var L = u[M];
           o(L.wallets);
           y.val("");
           C.val("");
           p.find(".channel-name").text(N.name);
           K.text(N.feeInfo).css("white-space", "pre-line");
           A.find(".ext-cy-name").text(L.name);
           A.find(".ext-cy-unit").text(L.unit);
           A.find(".wallet-name").text(L.walletName);
           w(y);
           E.toggleClass("modal-autofocus", !!n.val())
       }
       n.add(y).add(C).closest(".form-group").add(K).toggleClass("hidden", !N);
       g.addClass("hidden")
   }
   function f(K) {
       x.empty().append($("<option/>", {
           value: ""
       }).html("&nbsp;"));
       x.data("size", K.length + 1);
       for (var M = 0; M < K.length; ++M) {
           var O = K[M];
           var L = $("<span/>", {
               "class": "payment"
           }).append($("<span/>", {
               "class": "payment-logo payment-method-" + O.extCurrency
           })).append($("<span/>", {
               "class": "payment-title"
           }).text(O.name));
           var N = $("<option/>", {
               value: O.extCurrency
           }).text(O.name).attr("data-content", L[0].outerHTML);
           if (O.selected || K.length == 1) {
               N.prop("selected", true)
           }
           x.append(N)
       }
       x.selectpicker("refresh");
       m()
   }
   function H() {
       var K = A.serializeObject();
       if (J && J.length) {
           delete K[J.attr("name")]
       }
       return K
   }
   function r(K) {
       return JSON.stringify(K)
   }
   function j() {
       if (!E.val()) {
           return
       }
       var K = H();
       var L = r(K);
       $.ajax({
           type: "POST",
           url: app.processRoute("/withdraw/calc"),
           data: K,
           dataType: "json",
           success: function(N) {
               if (r(H()) != L) {
                   return
               }
               var M = J.attr("name");
               J.val(N[M] || "")
           }
       })
   }
   function c() {
       J.val("");
       if (F) {
           clearTimeout(F)
       }
       F = setTimeout(j, 200)
   }
   function i() {
       var L;
       D = G[q.val()];
       var K = D ? D.channels : [];
       if (K.length > 0) {
           A.find(".cy-name").text(D.name);
           A.find(".cy-unit").text(D.unit);
           b(false);
           f(K);
           L = "main"
       } else {
           L = "error"
       }
       k.find(".page").addClass("hidden");
       k.find(".page-" + L).removeClass("hidden")
   }
   function I() {
       i();
       t.find(".modal-body").css("overflow-x", "unset");
       t.modal("show")
   }
   q.change(function() {
       i();
       e()
   });
   x.change(function() {
       m();
       e()
   });
   A.submit(function() {
       var K = H();
       d.prop("disabled", true);
       $.ajax({
           type: "POST",
           url: app.processRoute(A.attr("action")),
           data: K,
           dataType: "json",
           error: onAjaxError,
           success: function(M) {
               if (M.url) {
                   window.location.href = M.url
               } else {
                   var L = !!M.error;
                   if (L) {
                       g.text(M.msg).removeClass("hidden")
                   } else {
                       p.find(".wallet").text(M.wallet);
                       p.find(".amount-int").text(M.amount_int);
                       p.find(".amount-ext").text(M.amount_ext)
                   }
                   b(!L);
                   e()
               }
           },
           complete: function() {
               d.prop("disabled", false);
               if (s) {
                   d.focus()
               }
           }
       });
       return false
   });
   y.add(C).focus(function() {
       w($(this))
   }).on("input", function() {
       var K = $(this);
       if (!K.is(":focus")) {
           return
       }
       w(K);
       c()
   });
   n.on("input", c);
   $("a.withdraw").click(function() {
       I();
       return false
   })
}
function processOrderPage() {
   activateReviewEditor();
   var b = $(".ny-congratulation");
   if (b.length) {
       b.modal("show")
   }
   var a = $(".modal-refund");
   a.find('input[name="partial"]').change(function() {
       a.find(".box-refund-partial").toggleClass("hidden", !$(this).prop("checked"));
       a.modal("handleUpdate")
   })
}
function activateChipShowAllButton() {
   var a = $(".js-chip-show-all");
   if (!a.length) {
       return
   }
   a.click(function() {
       $(".tc-item").removeClass("hidden");
       a.hide();
       $(window).resize();
       return false
   })
}
function activateChipTradeAffix() {
   var a = $(".selling-min").filter(".a-affix");
   if (!a.length) {
       return
   }
   activateAffix(a, function() {
       return a.parent("div").offset().top + 18
   }, function() {
       return $("#footer").outerHeight(true) + 63
   });
   a.removeAttr("style")
}
function activateChipOffersEditor() {
   var t = $("a.calc");
   var s = $(".price");
   var i = $(".amount");
   var n;
   var f = $(".js-chip-calc-storage");
   var r = {};
   var l = {};
   var e = 0;
   if (f.length) {
       l = JSON.parse(f[0].getAttribute("data-min-prices")) || {};
       r = JSON.parse(f[0].getAttribute("data-storage")) || {};
       for (var o in r) {
           if (r.hasOwnProperty(o)) {
               e++;
               r[o].sort(function(w, v) {
                   return w.sort - v.sort
               })
           }
       }
   }
   function b(x, v, w) {
       if (e >= 1000) {
           r = {};
           e = 0
       }
       if (!r[x]) {
           e++
       }
       r[x] = v;
       l[x] = w
   }
   function a(z, x, w, v) {
       z.html(w);
       var y = x.data("bs.popover").$tip;
       if (y) {
           y.find(".popover-content").html(w)
       }
       if (v) {
           x.popover("show")
       }
   }
   function j(A) {
       var x = $("<h5/>").text(app.t("offer.calc.table.title"));
       var z = $("<tbody/>");
       for (var w in A) {
           if (A.hasOwnProperty(w)) {
               var B = A[w];
               var v = $("<tr/>").append($("<th/>").text(B.name)).append($("<td/>").text(B.price + " " + B.unit));
               z.append(v)
           }
       }
       var y = $("<table/>").addClass("table-buyers-prices").append(z);
       return $("<div/>").append(x).append(y)
   }
   function p(w, v) {
       var x = w.closest(".tc-item");
       x.find(".js-chip-calc-min").text(v);
       x.find(".help-block").toggleClass("hidden hidden-xs", v <= EPSILON)
   }
   function u(v, w) {
       v.closest(".tc-item").find(".js-chip-calc-min").toggleClass("blur", w)
   }
   function d(w, v) {
       a(w, v, "", false);
       p(v, "")
   }
   function k(w, x, z, y, v) {
       if (r.hasOwnProperty(x)) {
           a(z, y, j(r[x]).html(), v);
           p(y, l[x]);
           return
       }
       z.html('<span class="text-muted">' + app.t("modal.loading.text") + "</span>");
       if (v) {
           y.popover("show")
       }
       u(y, true);
       $.ajax({
           type: "POST",
           url: app.processRoute("/chips/calc"),
           data: {
               game: w,
               price: x
           },
           dataType: "json",
           error: onAjaxErrorCallback(function() {
               if (g(y) === x) {
                   a(z, y, '<span class="text-danger">' + app.t("request.fail.error") + "</span>", v)
               }
           }),
           success: function(B) {
               var A = B.error || false;
               if (g(y) !== x) {
                   if (!A) {
                       b(x, B.methods, B.minPrice)
                   }
                   return
               }
               if (A) {
                   a(z, y, $("<span/>", {
                       "class": "text-danger"
                   }).text(A), v)
               } else {
                   b(x, B.methods, B.minPrice);
                   a(z, y, j(r[x]).html(), v);
                   p(y, l[x])
               }
           },
           complete: function() {
               u(y, false)
           }
       })
   }
   function g(v) {
       return strToFloat(v.closest(".tc-item").find(".price").val())
   }
   function q(v) {
       return strToFloat(v.closest(".tc-item").find(".amount").val())
   }
   function h(v) {
       return v.closest(".tc-item").find('input[type="checkbox"]')
   }
   function c(v) {
       return v.closest("form").find('input[name="game"]').val()
   }
   function m(w) {
       var v = !!g(w);
       var x = !!q(w);
       if (v ^ !x) {
           h(w).prop("checked", v)
       }
   }
   t.popover({
       trigger: "hover",
       html: true,
       content: function() {
           return $(this).next(".popover-content").html()
       }
   });
   t.mouseover(function() {
       var x = $(this);
       var y = x.closest(".tc-item");
       var z = y.find(".popover-content");
       if ("" === z.html()) {
           var w = g(x);
           if (w > 0) {
               var v = c(x);
               k(v, w, z, x, true)
           }
       }
   });
   s.on("input", function() {
       var x = $(this);
       var w = x.closest(".tc-item");
       var v = w.find("a.calc");
       m(v);
       clearTimeout(n);
       n = setTimeout(function() {
           var z = g(v);
           var A = w.find(".popover-content");
           if (z > 0) {
               var y = c(v);
               k(y, z, A, v, false)
           } else {
               d(A, v)
           }
       }, 500)
   });
   i.on("input", function() {
       var x = $(this);
       var w = x.closest(".tc-item");
       var v = w.find("a.calc");
       m(v)
   })
}
function activateOrdersFilters() {
   var a = $(".orders-filters-extra");
   if (!a.length) {
       return
   }
   var c = a.find('select[name="game"]');
   var d = a.find('select[name="section"]');
   if (!c.length || !d.length) {
       return
   }
   $().add(c).add(d).closest(".form-group").addClass("fixed");
   function b() {
       a.find(".form-group").not(".fixed").remove()
   }
   c.change(function() {
       var f, j, h;
       var g = c.find(":selected");
       var e = g.data("data");
       var k = !e;
       d.empty().append($("<option>", {
           value: ""
       }).text(d.data("label")));
       if (!k) {
           for (f = 0; f < e.length; ++f) {
               j = e[f];
               h = $("<option>", {
                   value: j[0]
               }).text(j[1]);
               d.append(h)
           }
       }
       d.prop("disabled", k).closest(".form-group").toggleClass("hidden", k);
       d.change()
   });
   d.change(function() {
       var e = getRandomTag();
       d.data("tag", e);
       b();
       var f = c.val();
       var g = d.val();
       if (!f || !g) {
           return
       }
       $.ajax({
           type: "GET",
           url: app.processRoute("/orders/filters"),
           data: {
               game: f,
               section: g,
               tag: e
           },
           dataType: "html",
           error: onAjaxError,
           success: function(h) {
               if (e != d.data("tag")) {
                   return
               }
               b();
               a.append(h)
           }
       })
   })
}
function activateShowcaseActions() {
   var a = $(".showcase-has-actions");
   if (!a.length) {
       return
   }
   function b(d, e, c) {
       d.toggleClass("danger", c);
       e.toggleClass("fa-trash", !c).toggleClass("fa-trash-restore", c).data("action", c ? "restore" : "delete")
   }
   a.on("click", ".tc-price", function(g) {
       var c = $(g.target);
       var d = c.data("action");
       if (!d) {
           return false
       }
       var h = c.closest(".tc-item");
       var j = h.closest(".showcase-table");
       var l = j.data("section-type");
       var f = h.data("offer");
       var i;
       switch (d) {
       case "delete":
       case "restore":
           i = "/offer/delete";
           break
       }
       var k = "action-busy";
       if (!f || !i || h.hasClass(k)) {
           return false
       }
       h.addClass(k);
       $.ajax({
           type: "POST",
           url: app.processRoute(i),
           data: {
               csrf_token: app.getCsrfToken(),
               action: d,
               type: l,
               offer_id: f
           },
           dataType: "json",
           error: onAjaxError,
           success: function() {
               switch (d) {
               case "delete":
                   b(h, c, true);
                   break;
               case "restore":
                   b(h, c, false);
                   break
               }
           },
           complete: function() {
               h.removeClass(k)
           }
       });
       return false
   })
}
function activateShowcase() {
   activateShowcaseActions();
   var a = $(".showcase");
   var g = a.find(".showcase-filters");
   if (!g.length) {
       return
   }
   var f = a.find(".showcase-table");
   var d = g.find("select, input");
   var e = "";
   var c = false;
   function b(i) {
       return i.toLowerCase().replace(/[^a-z\dа-яё]+/g, "")
   }
   function h() {
       var j = [];
       var i = [];
       d.each(function() {
           var u, s, v, t, p, o;
           var q = $(this);
           var r = q.attr("name");
           if (q.prop("disabled") || !r) {
               return
           }
           if (q.hasClass("range-value")) {
               t = q.data("min");
               p = q.data("max");
               if (t || p) {
                   u = function(x) {
                       var w = x.getAttribute("data-" + r);
                       w = Number(w) || 0;
                       return (!t || w >= t) && (!p || w <= p)
                   }
                   ;
                   s = q.val()
               }
           } else {
               if (q.hasClass("showcase-filter-text")) {
                   v = b(q.val());
                   if (v) {
                       o = q.data("target");
                       u = function(x) {
                           var y = x.querySelector(o);
                           if (!y) {
                               return false
                           }
                           var w = b(y.textContent);
                           return w.indexOf(v) !== -1
                       }
                       ;
                       s = v
                   }
               } else {
                   if (q.is(":checkbox")) {
                       v = q.prop("checked") ? "1" : ""
                   } else {
                       v = q.val()
                   }
                   if (v) {
                       v = v.toLowerCase();
                       u = function(x) {
                           var w = x.getAttribute("data-" + r);
                           return w == v || w == "*"
                       }
                       ;
                       s = v
                   }
               }
           }
           if (u) {
               j.push([r, u]);
               i.push([r, s])
           }
       });
       var n = i.length ? JSON.stringify(i) : "";
       if (n === e) {
           return
       }
       e = n;
       var l = j.length;
       if (!l && !c) {
           return
       }
       var k = f.find(".tc-item");
       if (!k.length) {
           k = f.find("tbody tr")
       }
       var m = true;
       c = false;
       k.each(function() {
           var o, p;
           var q = false;
           for (o = 0; o < l; ++o) {
               p = j[o];
               if (!p[1](this)) {
                   q = true;
                   break
               }
           }
           if (q) {
               c = true
           } else {
               m = false
           }
           this.classList.toggle("hidden", q)
       });
       f.toggleClass("hidden", m);
       $(".showcase-empty").toggleClass("hidden", !m);
       f.trigger("filtered.fp.showcase")
   }
   d.filter(".showcase-filter-input").on("change input", function() {
       h()
   });
   g.on("filter.fp.showcase", function() {
       h()
   });
   a.find(".showcase-filters-toggle").click(function() {
       g.toggleClass("hidden")
   });
   if (f.hasClass("tc-lazyload")) {
       activatePseudoLazyLoad(f, a.find(".lazyload-more"));
       f.on("filtered.fp.showcase sorted.tablesort", function() {
           f.trigger("refresh.lazyload")
       })
   }
   setTimeout(function() {
       g.trigger("initfilter.fp.showcase");
       h()
   }, 0)
}
function activatePseudoLazyLoad(c, b) {
   if (!c || !c.length || !b || !b.length) {
       return
   }
   var d = Number(c.data("items-per-page")) || 0;
   if (d < 1) {
       return
   }
   function a(g, f) {
       var j = "lazyload-hidden";
       var i = c.find(".tc-item").not(".hidden");
       var h = g;
       var e = f ? 10000 : d;
       if (g) {
           app.toggleOverflowAnchor(false)
       }
       i.each(function() {
           if (h) {
               if (this.classList.contains(j)) {
                   h = false
               } else {
                   return
               }
           }
           --e;
           if (e == -1 && g) {
               return false
           }
           this.classList.toggle(j, e < 0)
       });
       b.toggleClass("hidden", e >= 0);
       if (g) {
           app.toggleOverflowAnchor(true)
       }
   }
   c.on("refresh.lazyload", function() {
       a(false, false)
   });
   b.click(function(f) {
       a(true, f.shiftKey)
   })
}
function setMenuBadge(a, b) {
   $("ul.nav .badge-" + a).text(b).toggleClass("hidden", !b)
}
function setChatBadge(a) {
   setMenuBadge("chat", a);
   $(".navbar-xs-icon.icon-chat").toggleClass("active", a > 0).find("span").text(a ? a : "")
}
function onChatMessage(d, c) {
   var f;
   var a = "data-message";
   var e = $("#chat-notification");
   if (!e.length) {
       return
   }
   d = parseInt(d, 10);
   if (isNaN(d)) {
       d = 0
   }
   f = parseInt(e.attr(a), 10);
   if (isNaN(f)) {
       f = 0
   }
   var b = d > f;
   if (b && !c) {
       e.attr(a, d)
   }
   if (b) {
       e.find(c ? ".quiet" : ".loud").get(0).play();
       beacon.setMessage(app.t("notices.beacon.title"))
   }
}
function activateLiveCounters() {
   var f = $("#live-counters");
   if (!f.length) {
       return
   }
   var d = app.getUserId();
   var b = f.attr("data-orders");
   var a = f.attr("data-chat");
   function c(g, i, h) {
       if (!h) {
           return
       }
       setMenuBadge("orders", h.buyer);
       setMenuBadge("trade", h.seller)
   }
   function e(g, i, h) {
       if (!h) {
           return
       }
       setChatBadge(h.counter);
       onChatMessage(h.message)
   }
   if (b) {
       runner.addObject("orders_counters", d, b, null, false, c)
   }
   if (a) {
       runner.addObject("chat_counter", d, a, null, false, e)
   }
}
function activateRulesTest() {
   var d = $(".js-rules-accept");
   var c = $(".modal-test");
   var a = c.find(".modal-body");
   var b = $(".rules-test section");
   function e(h) {
       var k, g, m, l, j, f;
       if (h < 0 || h > b.length - 1) {
           return
       }
       g = b.eq(h);
       c.attr("data-n", h);
       a.empty().append('<form><h4></h4><p></p><ul class="list-unstyled"></ul></form>');
       a.find("h4").text(app.t("questions.progress.info", {
           "%current%": h + 1,
           "%total%": b.length
       }));
       a.find("p").html(g.find("p").html());
       j = a.find("ul");
       m = g.find("li");
       for (k = 0; k < m.length; ++k) {
           l = m.eq(k);
           f = $('<li><div class="radio"><label><input type="radio" name="answer" value="0"><span></span></label></div></li>');
           f.find("span").html(l.html());
           if (l.hasClass("correct")) {
               f.find("input").val(1)
           }
           j.append(f)
       }
   }
   d.submit(function() {
       if (!d.hasClass("test")) {
           c.modal("show");
           return false
       }
   });
   c.find("button").click(function() {
       var g;
       var f = a.find('input[name="answer"]:checked');
       if (!f.length) {
           return
       }
       if (f.val() != "1") {
           f.siblings("span").css("text-decoration", "line-through").addClass("text-danger")
       } else {
           g = parseInt(c.attr("data-n"), 10);
           if (isNaN(g)) {
               g = 0
           }
           if (g < b.length - 1) {
               e(g + 1)
           } else {
               d.addClass("test").submit()
           }
       }
   });
   e(0)
}
function activateTransactionActions() {
   var a = "transaction-actions";
   $("#content").on("click", "." + a + " button", function() {
       var c = $(this);
       var b = c.closest("." + a);
       c.prop("disabled", true);
       $.ajax({
           type: "POST",
           url: app.processRoute("/users/transactionAction"),
           data: {
               csrf_token: b.attr("data-csrf"),
               id: b.attr("data-id"),
               action: c.attr("data-action")
           },
           dataType: "json",
           error: onAjaxError,
           success: function(d) {
               if (d.error) {
                   showMessage(d.msg, true)
               } else {
                   location.reload()
               }
           },
           complete: function() {
               c.prop("disabled", false)
           }
       })
   })
}
function gameBlockButtonHandler(b) {
   var c = b.closest(".promo-game-item");
   var a = b.data("id");
   c.find(".game-title").addClass("hidden");
   c.find(".list-inline").addClass("hidden");
   c.find('[data-id="' + a + '"]').removeClass("hidden");
   b.parent("div").children().removeClass("btn-primary").addClass("btn-gray");
   b.removeClass("btn-gray").addClass("btn-primary");
   if (app.getUserId() > 0) {
       $.ajax({
           type: "GET",
           url: app.processRoute("games/saveActiveBlock"),
           data: {
               gameId: a
           },
           dataType: "json"
       })
   }
}
function activateGameBlocks(a) {
   a.find(".promo-game-item").find("button").click(function() {
       gameBlockButtonHandler($(this))
   })
}
function activatePromoGamesFilter() {
   var b = $(".promo-games-filter");
   if (!b.length) {
       return
   }
   var i = b.find('input[name="query"]');
   var q = null;
   var p = "";
   var j = [];
   var d = b.find(".dropdown-menu");
   var k = d.closest(".form-group");
   var f = 0;
   var h = false;
   var r = $(".search-fade");
   var g;
   function l() {
       var x = $(window).outerHeight(true) - $("#header").outerHeight(true);
       var w = $("#content").outerHeight(true) + $("#footer").outerHeight(true);
       return Math.max(x, w)
   }
   g = l();
   function v(w) {
       if (h != w) {
           h = w;
           d.children().stop(true).fadeTo(w ? 200 : 0, w ? 0.5 : 1);
           d.removeAttr("style")
       }
   }
   function n(w) {
       return $("<div />").addClass("container mt20 mb20 text-muted").text(w)
   }
   function m(w) {
       var x = o();
       d.toggleClass("hidden", !x);
       e(!!x);
       if (!x) {
           w = ""
       } else {
           if (!w) {
               w = n(app.t("game.not_found.error"))
           }
       }
       d.html(w)
   }
   function e(w) {
       r.css("height", g);
       r.css("display", w ? "block" : "none")
   }
   function a(x) {
       var w;
       for (w = j.length - 1; w >= 0; --w) {
           if (j[w]["query"] == x) {
               return w
           }
       }
       return -1
   }
   function c(x) {
       var w = a(x);
       return w < 0 ? false : j[w]
   }
   function o() {
       return i.val().trim().toLowerCase()
   }
   function t(x) {
       if (++f > 500) {
           return
       }
       var w = a(x);
       if (w < 0) {
           w = j.push({
               query: x,
               state: 0
           }) - 1
       }
       $.ajax({
           type: "POST",
           url: app.processRoute(b.attr("action")),
           data: {
               query: x
           },
           dataType: "json",
           error: function() {
               j[w]["state"] = -1
           },
           success: function(y) {
               var z = y.html;
               j[w]["state"] = 1;
               j[w]["games"] = z;
               if (o() == x) {
                   m(z);
                   v(false)
               }
           }
       })
   }
   function u(x) {
       var w;
       var y = o();
       if (!x && y == p) {
           return
       }
       p = y;
       if (!y) {
           m(true);
           v(false);
           return
       }
       w = c(y);
       if (w && w.state == 1) {
           m(w.games);
           v(false);
           return
       }
       if (!w || w.state == -1) {
           t(y);
           if (!d.html()) {
               m(n(app.t("promo.search.in_progress")))
           }
       }
       v(true)
   }
   i.focus(function() {
       if (q == null) {
           q = setInterval(u, 200);
           if (!k.hasClass("open")) {
               i.trigger("click.bs.dropdown")
           }
       }
   });
   i.blur(function() {
       if (q != null) {
           clearInterval(q);
           q = null
       }
   });
   d.on("click", "button", function() {
       gameBlockButtonHandler($(this));
       return false
   });
   d.click(function(w) {
       w.stopPropagation()
   });
   k.on("hidden.bs.dropdown", function() {
       e(false)
   });
   k.on("show.bs.dropdown", function() {
       e(!!o())
   });
   var s = false;
   k.on("hide.bs.dropdown", function() {
       var w = s;
       s = false;
       if (w) {
           return false
       }
   });
   i.mousedown(function() {
       s = true
   }).mouseup(function() {
       s = false
   }).click(function(w) {
       if (k.hasClass("open")) {
           w.stopPropagation()
       }
   }).on("keydown", function(w) {
       if (27 === w.keyCode && k.hasClass("open")) {
           k.trigger("click");
           i.blur()
       }
   });
   b.find("button").click(function() {
       i.focus();
       return false
   });
   $(window).resize(function() {
       g = l();
       r.css("height", g)
   })
}
function updateCaptcha(b) {
   if (!b) {
       b = $("body")
   }
   if (!b.hasClass("captcha")) {
       b = b.find(".captcha")
   }
   var a = b.find("img");
   a.attr("src", app.processRoute("/stuff/captcha?r=" + getRandomTag()))
}
function getModal(e, i) {
   var g = $("." + e);
   var b;
   var a;
   var c;
   var f;
   if (g.length) {
       b = g.find(".modal-dialog");
       a = b.find(".modal-header");
       c = g.find(".modal-title");
       f = g.find(".modal-body");
       b.removeClass("modal-sm modal-lg");
       c.empty();
       f.empty()
   } else {
       var h = $('<button type="button" class="close" data-dismiss="modal" aria-label="Close"><i class="fas fa-times"></i></button>');
       c = $("<h4>", {
           "class": "h1 modal-title"
       });
       a = $("<div>", {
           "class": "modal-header"
       }).append(c);
       f = $("<div>", {
           "class": "modal-body"
       });
       var d = $("<div>", {
           "class": "modal-content"
       }).append(a).append(f);
       b = $("<div>", {
           "class": "modal-dialog"
       }).append(h).append(d);
       g = $("<div>", {
           "class": "modal fade " + e,
           tabindex: "-1"
       }).append(b);
       g.appendTo("body")
   }
   a.addClass("hidden");
   if (i) {
       if (i.size) {
           b.addClass("modal-" + i.size)
       }
       if (i.title) {
           c.html(i.title);
           a.removeClass("hidden")
       }
   }
   return g
}
function activateSortableTables() {
   if (!$.fn.tablesort) {
       return
   }
   var a = $(".table-sortable");
   if (a.length) {
       a.tablesort()
   }
   var b = $(".tc-sortable");
   if (b.length) {
       b.tablesort({
           div: true
       })
   }
}
function activateClickableTables() {
   function a(c, d) {
       if (d) {
           window.open(c)
       } else {
           window.location.href = c
       }
   }
   var b = $("table.table-clickable tbody, .tc.table-clickable");
   b.on("click mousedown auxclick", "tr, .tc-item", function(f) {
       if (f.target.nodeName.toLowerCase() == "a" || this.nodeName.toLowerCase() == "a") {
           return
       }
       var h = $(this);
       var d = h.attr("data-href");
       if (!d) {
           return
       }
       var g = f.which == 1;
       var c = f.which == 2;
       switch (f.type) {
       case "mousedown":
           if (g && !f.altKey) {
               return false
           }
           if (c) {
               if (!("onauxclick"in f.target)) {
                   a(d, true)
               }
               return false
           }
           return;
       case "auxclick":
           if (c) {
               a(d, true);
               return false
           }
           return;
       case "click":
           if (!f.altKey) {
               a(d, f.ctrlKey || f.metaKey);
               return false
           }
           return
       }
   });
   b.on("mouseenter mouseleave focus blur", ".pseudo-a", function(g) {
       var d = $(this);
       var f = d.closest("a.tc-item");
       var c;
       switch (g.type) {
       case "mouseenter":
       case "focus":
           c = d.data("href");
           if (!c) {
               return
           }
           if (!f.data("href")) {
               f.data("href", f.attr("href"))
           }
           f.attr("href", c);
           return;
       case "mouseleave":
       case "blur":
           c = f.data("href");
           if (c) {
               f.attr("href", c)
           }
           return
       }
   })
}
function activateReviewEditor() {
   var h = $(".order-review");
   if (!h.length) {
       return
   }
   var b = h.children(".review-container");
   var a = b.data("order");
   var f = null;
   function e() {
       f = null;
       if (!$.fn.starrr) {
           return
       }
       var i = h.children(".review-container");
       var k = i.find(".review-rating-editor");
       if (!k.length) {
           return
       }
       var j = i.data("rating");
       var l = i.data("rating-max");
       f = k.starrr({
           rating: j,
           max: l
       }).data("starrr")
   }
   e();
   function d(i, k, j) {
       j.prop("disabled", true);
       $.ajax({
           type: "POST",
           url: app.processRoute(i),
           data: k,
           dataType: "json",
           error: onAjaxError,
           success: function(l) {
               if (l.error) {
                   showMessage(l.msg, true)
               } else {
                   h.html(l.content);
                   e()
               }
           },
           complete: function() {
               j.prop("disabled", false)
           }
       })
   }
   function g(i, k) {
       var j = {
           csrf_token: app.getCsrfToken(),
           orderId: a,
           authorId: i
       };
       d("/orders/reviewDelete", j, k)
   }
   function c(i, l, k) {
       var j = {
           csrf_token: app.getCsrfToken(),
           orderId: a,
           author: i,
           text: l,
           rating: f ? f.getRating() : null
       };
       d("/orders/review", j, k)
   }
   h.on("click", ".action", function(o) {
       var i, p;
       var l = $(o.target);
       var n = l.closest(".js-review-related");
       if (n.length) {
           i = h.find(".review-item-row").filter('[data-row="' + n.data("related") + '"]');
           p = n.find("textarea")
       } else {
           i = l.closest(".review-item-row");
           p = i.find("textarea")
       }
       var k = l.data("action");
       var j = i.data("author");
       if ("delete" === k) {
           g(j, l)
       } else {
           if ("edit" === k) {
               var m = i.data("row");
               $(".review-compiled-" + m).addClass("hidden");
               $(".review-editor-" + m).removeClass("hidden")
           } else {
               if ("save" === k) {
                   c(j, p.val(), l)
               }
           }
       }
   })
}
function activateNavAbcAffix() {
   var c = $("#nav-abc");
   var b = c.parent(".promo-game-list-header").siblings(".promo-game-list");
   var a = $("#footer");
   var d = $(".js-main-chat");
   if (!c.length || !b.length) {
       return
   }
   activateAffix(c, function() {
       return b.offset().top - 20
   }, d.length ? function() {
       return d.outerHeight(true) + a.outerHeight(true) + 32
   }
   : null);
   $("body").scrollspy({
       target: "#nav-abc",
       offset: 20
   });
   $("#nav-abc a, .a-scroll").bind("click", function(f) {
       var e = $(this);
       $("html, body").stop().animate({
           scrollTop: $(e.attr("href")).offset().top - 19
       }, 500);
       f.preventDefault()
   })
}
function activateMenu() {
   $(".navbar-toggle").on("click", function() {
       $("html").toggleClass("menu-opened")
   });
   $(".hide-navbar").on("click", function() {
       $(".navbar-collapse.collapse.in").collapse("hide");
       $("html").removeClass("menu-opened")
   });
   activateNavbarNestedDropdowns();
   activateUserCySwitcher()
}
function activateNavbarNestedDropdowns() {
   $(".navbar-nav .dropdown-menu a.dropdown-toggle").on("click", function() {
       var c = $(this);
       var d = c.next(".dropdown-menu");
       var b = c.parents(".dropdown-menu").first();
       var a = function() {
           b.find(".show").removeClass("show")
       };
       if (!d.hasClass("show")) {
           a()
       }
       d.toggleClass("show");
       c.parents("li.dropdown.open").on("hidden.bs.dropdown", a);
       return false
   })
}
function activateUserCySwitcher() {
   function b(c, d, e) {
       if (!c) {
           return
       }
       e = !!e;
       d && d.prop("disabled", true);
       $.ajax({
           type: "POST",
           url: app.processRoute("account/switchCurrency"),
           data: {
               cy: c,
               csrf_token: app.getCsrfToken(),
               confirmed: e
           },
           error: onAjaxError,
           success: function(f) {
               if (f.modal) {
                   a(f.modal, c)
               } else {
                   if (f.url) {
                       window.location.href = f.url
                   }
               }
           },
           complete: function() {
               d && d.prop("disabled", false)
           }
       })
   }
   function a(f, c) {
       var h = "modal-user-cy-warning-box";
       var e = $("." + h);
       if (!e.length) {
           e = $("<div/>", {
               "class": h
           });
           e.appendTo("body")
       }
       e.html(f);
       var d = e.find(".modal");
       if (!d.length) {
           return
       }
       var g = d.find(".user-cy-switch-confirm");
       g.click(function() {
           b(c, g, true)
       });
       d.modal("show")
   }
   $(".user-cy-switcher").click(function(c) {
       b(c.target.getAttribute("data-cy"))
   })
}
function activateChatMessages() {
   $(".chat-message-list").on("click", ".chat-img-link", function(g) {
       if (g.ctrlKey || g.shiftKey) {
           return
       }
       var c = $(this);
       var d = c.find("img");
       var a = c.attr("href");
       var l = $("<span/>", {
           "class": "text-muted"
       }).text(app.t("modal.loading.text"));
       var f = $("<img/>", {
           alt: d.attr("alt"),
           "class": "img-responsive center-block"
       });
       var b = new $.Deferred();
       f.load(function() {
           b.resolve()
       }).error(function() {
           l.removeClass().addClass("text-danger").text(app.t("request.fail.error"))
       });
       f.attr("src", a);
       var h = $("<a/>", {
           href: a,
           target: "_blank"
       }).text(app.t("image_zoom.link.original"));
       h = $("<div/>", {
           "class": "link-original-box"
       }).append(h);
       var k = getModal("modal-chat-img", {
           size: "lg"
       });
       var i = k.find(".modal-body");
       i.append(l, h);
       var j = app.createModalDeferred(k);
       $.when(j, b).done(function() {
           l.replaceWith(f);
           k.modal("handleUpdate")
       });
       k.modal("show");
       return false
   })
}
function activateEditAvatar() {
   var u = $(".js-edit-avatar");
   var k = $(".avatar-editor");
   if (!u.length || !k.length) {
       return
   }
   var q = k.find(".avatar-editor-container");
   var r = k.find(".drop-area");
   var n = k.find(".drop-area-hint");
   var b;
   u.click(function() {
       k.modal("show")
   });
   function j(w, v) {
       n.html(w);
       r.toggleClass("error", v).removeClass("hidden");
       m.empty().addClass("hidden");
       o()
   }
   if (typeof (window.FileReader) == "undefined") {
       j(app.t("error.not_supported"), true);
       return false
   }
   var m = $(".preview");
   var f = $(".drop-area-active")[0];
   var d = q.data("wmin");
   var c = q.data("hmin");
   var g = q.data("wmax");
   var e = q.data("hmax");
   var i = Number(q.data("size-max")) || 0;
   var a = q.data("size-max-s");
   var h = n[0].innerHTML;
   function l() {
       var v = "input-image";
       var w = q.find("." + v);
       if (!w.length) {
           w = $("<input/>", {
               type: "file",
               "class": v + " hidden",
               accept: "image/*"
           });
           w.change(function() {
               var x = $(this).prop("files");
               if (!x.length) {
                   return false
               }
               p(x[0]);
               return false
           });
           q.append(w)
       }
       return w
   }
   function o(w) {
       var x = Math.max(window.innerWidth, 200);
       var A = Math.max(window.innerHeight - 260, 200);
       var v = 1;
       var z = 0;
       var C = 0;
       if (w) {
           z = w.attributes["data-width"];
           C = w.attributes["data-height"];
           v = z / x;
           var y = C / A;
           if (y > v) {
               v = y
           }
           if (v > 0 && v !== 1 && v !== Infinity) {
               z = Math.ceil(z / v);
               C = Math.ceil(C / v)
           }
       }
       var B = z > 0 ? Math.min(z, x > 768 ? x - 50 : x) : "";
       if ("" != B && B < 350) {
           B = 350
       }
       k.find(".modal-dialog").width(B);
       if (z > 0 && C > 0) {
           w.width = z;
           w.height = C
       }
       k.modal("handleUpdate")
   }
   function t() {
       var v = document.createElement("img");
       v.onload = function() {
           if (v.width < d || v.height < c || v.width > g || v.height > e) {
               j(app.t("file.image_size.invalid", {
                   "%min%": d + "×" + c,
                   "%max%": g + "×" + e
               }), true);
               return false
           }
           v.attributes["data-width"] = v.width;
           v.attributes["data-height"] = v.height;
           o(v);
           s(v);
           m.removeClass("hidden");
           r.addClass("hidden")
       }
       ;
       v.onerror = function() {
           j(app.t("file.image.load.error"), true)
       }
       ;
       v.setAttribute("crossOrigin", "");
       j(app.t("file.image.processing"), false);
       m.append(v);
       return v
   }
   function p(x) {
       var y = /^image\//;
       if (!y.test(x.type)) {
           j(app.t("file.not_image.error"), true);
           return false
       }
       if (x.size > i) {
           j(app.t("file.size.too_big", {
               "%max%": a
           }), true);
           return false
       }
       var w = t();
       var v = new FileReader();
       v.readAsDataURL(x);
       v.onload = function(z) {
           w.src = z.target.result
       }
   }
   function s(v) {
       b = new Cropper(v,{
           aspectRatio: 1,
           viewMode: 2,
           rotatable: false,
           highlight: false,
           checkCrossOrigin: true,
           checkOrientation: false,
           minContainerWidth: 0,
           minContainerHeight: 0
       })
   }
   f.ondragover = function(v) {
       v.preventDefault();
       return false
   }
   ;
   f.ondragenter = function() {
       r.addClass("hover");
       return false
   }
   ;
   f.ondragleave = function() {
       r.removeClass("hover");
       return false
   }
   ;
   f.ondrop = function(w) {
       w.preventDefault();
       r.removeClass("hover");
       var v = w.dataTransfer.files[0] || null;
       if (v) {
           p(v)
       } else {
           var x = w.dataTransfer.getData("text");
           if (x) {
               t().src = x
           }
       }
   }
   ;
   window.addEventListener("resize", function() {
       var v = m.find("img");
       o(v.length ? v[0] : null)
   });
   window.addEventListener("dragover", function(v) {
       v.preventDefault()
   }, false);
   window.addEventListener("drop", function(v) {
       v.preventDefault()
   }, false);
   $(".crop-load").click(function() {
       l().click()
   });
   $(".crop-clear").click(function(v) {
       v.preventDefault();
       if (b) {
           b.destroy();
           b = null
       }
       j(h, false);
       l().val("")
   });
   $(".crop-save").click(function() {
       if (!b) {
           j(app.t("file.image.not_selected.error"), true);
           return
       }
       b.getCroppedCanvas({
           minWidth: d,
           minHeight: c,
           maxWidth: g,
           maxHeight: e,
           fillColor: "#fff",
           imageSmoothingEnabled: true
       }).toBlob(function(v) {
           var x = new FormData();
           x.append("file", v);
           var w = q.find("button");
           w.prop("disabled", true);
           $.ajax({
               type: "POST",
               url: app.processRoute("file/avatar"),
               data: x,
               processData: false,
               contentType: false,
               error: onAjaxError,
               success: function() {
                   window.location.href = ""
               },
               complete: function() {
                   w.prop("disabled", false)
               }
           })
       }, "image/png", 1)
   })
}
function fixSelectpickerScrollbar() {
   $(".selectpicker").on("rendered.bs.select", function() {
       var c;
       var a = $(this).closest(".dropdown");
       var b = a.find("div.dropdown-menu");
       var e = b.find(".inner");
       a.find("button")[0].title = "";
       function d() {
           var f = e[0].clientWidth;
           if (c && f > 0) {
               c.css("margin-right", Math.min(0, f - e.width()))
           }
       }
       e.css("overflow-x", "hidden");
       a.on("shown.bs.dropdown", function() {
           c = e.find("li");
           d()
       });
       b.on("bs.select.menu-resize", d)
   })
}
function activateHotKeys() {
   $("textarea.hotkey-submit").keypress(function(b) {
       if (b.keyCode == 13 && b.shiftKey) {
           var a = $(this);
           if (!a.prop("readonly")) {
               a.closest("form").submit();
               return false
           }
       }
   })
}
function activateBackLinks() {
   $(".js-back-link").click(function(b) {
       var a = $(this).attr("href");
       if (!(b.altKey || b.ctrlKey || b.metaKey || b.shiftKey) && window.history.length > 1 && a == document.referrer) {
           window.history.go(-1);
           setTimeout(function() {
               if (!terminated) {
                   window.location.href = a
               }
           }, 200);
           return false
       }
   })
}
function getCookie(d) {
   var b = d + "=";
   var a = document.cookie.split(";");
   for (var e = 0; e < a.length; e++) {
       var f = a[e];
       while (f.charAt(0) == " ") {
           f = f.substring(1)
       }
       if (f.indexOf(b) == 0) {
           return f.substring(b.length, f.length)
       }
   }
   return ""
}
function getUrlHashParts() {
   var a = window.location.hash.substr(1);
   return a.split("&").reduce(function(b, c) {
       var d = c.split("=");
       b[d[0]] = d[1];
       return b
   }, {})
}
function activateCookieConsent() {
   var b = "cookie_prefs";
   var j = $(".modal-cookie-consent");
   var g = $(".banner-cookie-consent");
   var e = j.find('input[name="cc-option-analytics"]');
   function h(l) {
       document.cookie = b + "=" + l + "; path=/; max-age=8640000";
       a()
   }
   function d() {
       return getCookie(b) === "1"
   }
   function a() {
       var l = d();
       if (typeof gtag === "function") {
           gtag("consent", "update", {
               analytics_storage: l ? "granted" : "denied"
           })
       }
       if (typeof initYM === "function" && l) {
           initYM()
       }
   }
   function c() {
       h(1);
       g.hide()
   }
   function k() {
       h(e.is(":checked") ? 1 : 0);
       g.hide()
   }
   function f() {
       e.prop("checked", d());
       j.modal("show")
   }
   function i() {
       if (getUrlHashParts().hasOwnProperty("cookie-preferences")) {
           f()
       }
   }
   if (g.length) {
       g.find(".cc-options").click(f);
       g.find(".cc-accept-all").click(c)
   }
   if (j.length) {
       j.find(".cc-accept-all").click(c);
       j.find(".cc-save").click(k);
       $(window).on("hashchange", i);
       i()
   }
}
app.activateCopyButtons = function() {
   $(".btn-copy").click(function() {
       if (!navigator.clipboard) {
           return
       }
       var a = $(this);
       var b = a.closest(".input-group").find('input[type="text"]').val();
       if (!b) {
           return
       }
       navigator.clipboard.writeText(b).then(function() {
           a.tooltip("show");
           setTimeout(function() {
               a.tooltip("hide")
           }, 500)
       })
   }).tooltip({
       trigger: "manual",
       title: app.t("tooltip.copied")
   })
}
;
$(function() {
   app.loadData();
   var g = $("#content");
   $("div.captcha").find("img, span").click(function() {
       updateCaptcha($(this).closest(".captcha"))
   });
   $(document).on("shown.bs.modal", function(k) {
       $(".modal-autofocus", k.target).focus()
   });
   if (g.hasClass("content-promo-index")) {
       activateNavAbcAffix()
   }
   if (g.hasClass("content-account")) {
       activateDetailsForm();
       activateWithdraw()
   }
   if (g.hasClass("content-chips-offer") || g.hasClass("content-lots-offer")) {
       activateOfferForm()
   }
   if (g.hasClass("content-orders-new") || g.hasClass("content-payments-topup")) {
       var a = $(".js-form-payment");
       a.submit(function() {
           var k = a.find("button");
           function l() {
               k.prop("disabled", false)
           }
           k.prop("disabled", true);
           $.ajax({
               type: "POST",
               url: app.processRoute(a.attr("action")),
               data: a.serialize(),
               dataType: "json",
               error: onAjaxErrorCallback(l),
               success: function(m) {
                   if (m.error) {
                       showMessage(m.msg, true);
                       l()
                   } else {
                       if (m.form) {
                           $(m.form).appendTo("body").submit()
                       }
                   }
               }
           });
           return false
       })
   }
   if (g.hasClass("content-orders-order")) {
       processOrderPage()
   }
   if (g.hasClass("content-chat-index")) {
       var f = $("#header");
       var h = $("#content-body");
       var i = $("#footer");
       var e = $(".chat-full");
       var d = e.find(".chat-message-list");
       var b = $(window);
       var c = $("body");
       var j = function() {
           var k = b.height() - c.outerHeight(true) - 1;
           if (k > 0) {
               e.height(e.height() + k)
           }
           var m = document.body.clientHeight - f.outerHeight(true) - i.outerHeight(true) - 1;
           var l = Math.max(0, h.outerHeight(true) - e.outerHeight());
           e.height(Math.max(300, m) - l);
           d.scroll()
       };
       $(window).resize(j);
       j()
   }
   if (g.hasClass("content-chips-trade")) {
       activateChipShowAllButton();
       activateChipTradeAffix();
       activateChipOffersEditor()
   }
   if (g.hasClass("content-chips-chip") || g.hasClass("content-lots-node") || g.hasClass("content-users-user")) {
       activateShowcase()
   }
   if (g.hasClass("content-trade-info")) {
       activateRulesTest()
   }
   if (g.hasClass("content-account-phone")) {
       activatePhoneVerification()
   }
   if (g.hasClass("content-account-balance") || g.hasClass("content-users-balance")) {
       activateTransactionActions();
       g.on("click", ".transactions .tc-item", function() {
           showTransactionInfo($(this).data("transaction"))
       })
   }
   if (g.hasClass("content-account-settings")) {
       app.activateNoticeChannels()
   }
   if (g.hasClass("content-payments-litecoin")) {
       app.activateCopyButtons()
   }
   $(".alert").on("closed.bs.alert", function() {
       $(".alert-container:empty").remove();
       $(window).resize()
   });
   g.find(".form-ajax-simple").simpleAjaxForm();
   activateEditAvatar();
   fixSelectpickerScrollbar();
   activateMenu();
   activateGameBlocks(g);
   activatePromoGamesFilter();
   activateClickableTables();
   activateDynamicTables();
   activateOrdersFilters();
   activateLiveCounters();
   activateCombobox();
   processChat();
   activateChatMessages();
   activateSortableTables();
   activateHotKeys();
   activateBackLinks();
   activateCookieConsent();
   app.webPush.initialize()
});
