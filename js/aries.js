 SPA_RESOLVE_INIT = function(transition) {
   var JSONP = document.createElement("script");
   JSONP.type = "text/javascript";
   JSONP.src = "http://interface.sina.cn/ast/get_mail_fate.d.json?astro=Taurus&callback=Cbk";
   JSONP.id = "pageid"
   document.getElementsByTagName("head")[0].appendChild(JSONP);
 }

 Cbk = function(data){
   document.getElementById("content").innerHTML = '<section class="bg Aries-bg">\
        <article class="fate-box Aries-fate-bg">\
            <section class="content-box">\
                <h1 class="constellation-box">\
                    <span>\
                        <i class="fl constellation-logo Aries-logo"></i>\
                        <div class="constellation-title fl">\
                            <p class="constellation">' + 'data.aries.constellation' + '</p>\
                            <p class="date">' + data.data.date + '</p>\
                        </div>\
                    </span>\
                </h1>\
                <section class="fate-text">\
                    <h2 class="fate-name">今日运势</h2>\
                    <p class="fate-content">' + data.data.detail + '</p>\
                </section>\
                <section class="fate-text">\
                    <h2 class="fate-name">今日禁忌</h2>\
                    <p class="fate-content">去做：' + data.data.todo + '</p>\
                    <p class="fate-content">别做：' + data.data.nodo + '</p>\
                </section>\
            </section>\
        </article>\
        <section class="but-box clearfix">\
            <a class="but fl Aries-but-01-bg" id="share-btn" onclick="show()">去晒运势</a>\
            <a class="but fr Aries-but-02-bg" href="#index">换个星座</a>\
        </section>\
    </section>';
 }