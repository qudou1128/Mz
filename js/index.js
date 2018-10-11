function getQueryString(e) {
    var a = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),
        t = window.location.search.substr(1).match(a);
    return null != t ? unescape(t[2]) : null
}

function getPrice(e, a) {
    var t = {};
    return e.forEach(function(e) {
        e.skuId === a && (t.price = Math.floor(e.skuPrice), t.minPrice = "" === e.skuMinPrice ? "" : Math.floor(e.skuMinPrice))
    }), t
}

function subscribeHd() {
    hdCallBack.unshift(renderPCHeader);
    for(var e, a = 0; e = hdCallBack[a++];) e.apply(this, arguments)
}

function renderPCHeader(e) {
    var a = e.data;
    window.index_oms_data = a;
    var t = meizuHeader.linkRender(a.Header.data, "gw_public_yt_"),
        i = meizuHeader.toggleRender(a.Header.data, "gw_public_yt_"),
        n = '<li class="meizu-header-link-product"><a href="#" class="">商城</a></li>',
        r = '<li id="meizu-header-link-product-download" class="meizu-header-link-product"><a href="#" class="meizu-header-link-product-a">APP下载</a></li>';
    $id("meizu-header-link").innerHTML = n + t + r, $id("meizu-header-container").innerHTML += i, meizuHeader.eventInit()
}

function renderSite(e) {
    var a = e.block_266,
        t = e.skuInfo,
        i = meizuHeader.linkRenderDMS(a, "store_index_dh_", t),
        n = meizuHeader.toggleRenderDMS(a, "store_index_dh_", t),
        r = e.block_267,
        d = meizuHeader.downLoadRender(r),
        s = e.block_233[0].placeholder,
        o = '<li id="meizu-header-link-product-download" data-subnav="download" class="meizu-header-link-product"><a href="#" class="meizu-header-link-product-a">APP下载</a></li>';
    $id("meizu-header-link").innerHTML = i + o, $id("meizu-header-container").innerHTML += n + d, meizuHeader.eventInit(), $id("mzSearch").getElementsByTagName("input")[0].placeholder = s, $id("mzSearch").getElementsByTagName("input")[0].setAttribute("data-keyword", s)
}
var $id = function(e) {
        return document.getElementById(e)
    },
    $addEvent = function() {
        return document.addEventListener ? function(e, a, t) {
            if(e.length)
                for(var i = 0; i < e.length; i++) $addEvent(e[i], a, t);
            else e.addEventListener(a, t, !1)
        } : function(e, a, t) {
            if(e.length)
                for(var i = 0; i < e.length; i++) $addEvent(e[i], a, t);
            else e.attachEvent("on" + a, function() {
                return t.call(e, window.event)
            })
        }
    }(),
    $addClass = function(e, a) {
        return $hasClass(e, a) ? void 0 : e.className = "" == e.className ? a : e.className + " " + a
    },
    $removeClass = function(e, a) {
        var t = new RegExp("(\\s|^)?" + a + "(\\s|$)", "i");
        e.className = e.className.replace(t, " ").replace(/^\s+|\s+$/, "")
    },
    $hasClass = function(e, a) {
        var t = new RegExp("(\\s|^)?" + a + "(\\s|$)", "i");
        return t.test(e.className)
    },
    $forEach = function(e, a) {
        for(var t = 0; t < e.length; t++) a(e[t], t)
    },
    hdCallBack = [],ss
meizuHeader = {
    navObj: $id("meizu-header-container"),
    rmToggle: null,
    showTimer: null,
    isSubShow: !1,
    subnavData: [],
    getDmsData: function() {
        var e = "",
            a = getQueryString("preview");
        if(a) {
            var t = getQueryString("blockIds") || "",
                i = getQueryString("blockDataIds") || "";
            e = "https://dms.meizu.com/api/preview/jsdataPreview.jsonp?blockIds=" + t + "&blockDataIds=" + i + "&callback=renderSite"
        } else e = "https://dms-dataapi.meizu.com/data/jsdata.jsonp?callback=renderSite&blockIds=233,266,267";
        var n = document.createElement("script");
        n.src = e, document.body.appendChild(n)
    },
    getOmsData: function() {
        var e = "";
        e = "https://store.meizu.com/fuse/json?callback=subscribeHd";
        var a = document.createElement("script");
        a.src = e, document.body.appendChild(a)
    },
    bindUserBox: function() {
        var e = $id("meizu-header-user"),
            a = $id("meizu-header-user-box"),
            t = e.getElementsByTagName("ul"),
            i = t.length;
        $addEvent(e, "mouseover", function() {
            a.style.display = "block";
            for(var e = 0; i > e; e++) t[e].style.display = "block"
        }), $addEvent(e, "mouseleave", function() {
            a.style.display = "none";
            for(var e = 0; i > e; e++) t[e].style.display = "none"
        })
    },
    bindProductLink: function() {
        for(var e = this, a = e.navObj, t = a.childNodes, i = [], n = $id("meizu-header-sub-download"), r = 0; r < t.length; r++) "meizu-header-sub" == t[r].className && i.push(t[r]);
        $addEvent(a, "mouseover", function(t) {
            t = t || window.event;
            var r = t.target ? t.target : t.srcElement;
            this.showTimer = setTimeout(function() {
                if("A" == r.tagName && -1 != r.className.indexOf("meizu-header-link-product-a") || "LI" == r.tagName && "meizu-header-link-product" == r.className) {
                    var t = r.parentNode,
                        d = t.getAttribute("data-subnav");
                    if(d) {
                        for(var s = 0; s < i.length; s++) {
                            $removeClass(i[s], "meizu-header-sub-show");
                            var o = i[s].getElementsByTagName("div")[0].getElementsByTagName("ul")[0];
                            $removeClass(o, "meizu-header-sub-ul-on")
                        }
                        $removeClass(n, "meizu-header-sub-show"), $removeClass(n, "meizu-header-sub-animation"), $addClass($id("meizu-header-sub-" + d), "meizu-header-sub-show"), e.isSubShow || (e.isSubShow = !0, $addClass($id("meizu-header-sub-" + d), "meizu-header-sub-animation"));
                        for(var l = $id("meizu-header-sub-" + d).getElementsByTagName("i"), u = 0; u < l.length; u++)
                            if(!l[u].style.backgroundImage && l[u].className.indexOf("app-down-link") < 0) {
                                var c = "url(" + l[u].getAttribute("data-src") + ")";
                                l[u].style.backgroundImage = c
                            }
                    }
                    $addClass(a, "toggle")
                } else if("A" == r.tagName && -1 == r.className.indexOf("meizu-header-link-product-a") || "INPUT" == r.tagName || r.className.indexOf("meizu-header-user") > -1) {
                    for(s = 0; s < i.length; s++) $removeClass(i[s], "meizu-header-sub-show"), $removeClass(i[s], "meizu-header-sub-animation");
                    $removeClass(n, "meizu-header-sub-show"), $removeClass(n, "meizu-header-sub-animation"), $removeClass(a, "toggle"), e.isSubShow = !1
                }
            }, 20), this.rmToggle && (clearTimeout(this.rmToggle), this.rmToggle = null)
        }), $addEvent(a, "mouseout", function() {
            this.rmToggle = setTimeout(function() {
                for(var t = 0; t < i.length; t++) $removeClass(i[t], "meizu-header-sub-show"), $removeClass(i[t], "meizu-header-sub-animation");
                $removeClass(n, "meizu-header-sub-show"), $removeClass(n, "meizu-header-sub-animation"), $removeClass(a, "toggle"), e.isSubShow = !1
            }, 200), clearTimeout(this.showTimer)
        })
    },
    bindProductHover: function() {
        var e = this.navObj,
            a = "meizu-header-sub-ul-on";
        $addEvent(e, "mouseover", function(e) {
            e = e || window.event;
            var t = e.target ? e.target : e.srcElement;
            if("A" == t.tagName && t.className.indexOf("meizu-header-sub-") > -1) {
                var i = t.parentNode,
                    n = i.className;
                if("" == n) {
                    var r = i.parentNode;
                    r.className = a
                }s
            } else "UL" == t.tagName && "meizu-header-sub-ul-on" == t.className && $removeClass(t, "meizu-header-sub-ul-on")
        })
    },
    bindSearch: function() {
        var e = $id("mzSearch"),
            a = e.getElementsByTagName("input")[0],
            t = e.getElementsByTagName("a")[0];
        $addEvent(a, "focus", function() {
            e.className = "meizu-header-item meizu-header-search meizu-header-focus"
        }), $addEvent(a, "blur", function() {
            e.className = "meizu-header-item meizu-header-search "
        }), $addEvent(a, "keyup", function(e) {
            e = e || window.event;
            var a = this.value,
                t = this.dataset.keyword;
//							13 == e.keyCode && window.open("#" + (a ? a : t))
        }), $addEvent(t, "click", function(e) {
            e.preventDefault();
            var t = a.value,
                i = a.dataset.keyword;
//							window.open("#" + (t ? t : i))
        })
    },
    siteRender: function(e, a) {
        var t = "";
        return $forEach(e, function(e, i) {
//							t += '<li><a href="' + e.href + '" data-mtype="' + a + (i + 1) + '" target="_blank">' + e.name + "</a></li>"
        }), t
    },
    linkRenderDMS: function(e, a) {
        var t = "",
            i = this;
        return $forEach(e, function(e, n) {
            e.id = n + 1, i.subnavData.push("hd" + e.id);
            var r = e.floorAllocations && e.floorAllocations.length ? 'id="meizu-header-link-product-hd' + e.id + '" data-subnav="hd' + e.id + '" target="_blank" class="meizu-header-link-product"' : "",
                d = e.floorAllocations && e.floorAllocations.length ? ' class="meizu-header-link-product-a" target="_blank"  data-mtype="' + a + (n + 1) + '"' : "";
            t += "<li " + r + '><a href="' + e.href + '" ' + d + ' data-mtype="' + a + (n + 1) + '" target="_blank">' + e.name + "</a></li>"
        }), t
    },
    toggleRenderDMS: function(e, a, t) {
        var i = "",
            n = this;
        return $forEach(e, function(e, r) {
            e.floorAllocations && (i += '<div data-link="hd' + e.id + '" id="meizu-header-sub-hd' + e.id + '" class="meizu-header-sub"><div class="meizu-header-sub-wrap"><ul>' + n.toggleItemRender(e.floorAllocations, a + (r + 1) + "_", t) + "</ul></div></div>")
        }), i
    },
    toggleItemRender: function(e, a, t) {
        var i = "";
        return $forEach(e, function(e, n) {
            var r = e.priceGetStart ? " 起" : "",
                d = getPrice(t, e.skuid),
                s = d.minPrice ? d.minPrice : d.price;
            i += '<li><a class="meizu-header-link-product-a meizu-header-sub-' + (n + 1) + '" href="' + e.href + '" target="_blank"  data-mtype="' + a + (n + 1) + '" ><i data-src="' + e.img + '@240x240.jpg"></i>' + e.name + "<span></span><em>￥" + s + r + "</em></a></li>"
        }), i
    },
    downLoadRender: function(e) {
        var a = e[0],
            t = '<div class="app-down-wp meizu-header-sub" id="meizu-header-sub-download" data-link="download"><div class="app-down-content"><img src="' + a.imgRetina + '" alt=""><a class="app-down-link-2 app-down-link" data-mtype="gw_index_dt_download_1" target="_blank" href="' + a.storeHref + '"><img src="https://cimg2.res.meizu.com/www/201807/cn/fACDE85H10zLMNOPywSTUVrXnlkbjiu9.png" alt=""/></a><a class="app-down-link-3 app-down-link" data-mtype="gw_index_dt_download_2" target="_blank" href="' + a.bbsHref + '"><img src="https://cimg2.res.meizu.com/www/201807/cn/fACDE85H10zLMNOPywSTUVrXnlkbjiu9.png" alt=""/></a></div></div>';
        return t
    },
    bindDownHover: function() {},
    init: function() {
        this.getDmsData()
    },
    eventInit: function() {
        this.bindUserBox(), this.bindProductLink(), this.bindProductHover(), this.bindSearch(), this.bindDownHover()
    }
};
meizuHeader.init();