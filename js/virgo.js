 SPA_RESOLVE_INIT = function(transition) {
    document.getElementById("content").innerHTML = '<section class="bg Virgo-bg">\
        <article class="fate-box Virgo-fate-bg">\
            <section class="content-box">\
                <h1 class="constellation-box">\
                    <span>\
                        <i class="fl constellation-logo Virgo-logo"></i>\
                        <div class="constellation-title fl">\
                            <p class="constellation">' + data.virgo.constellation + '</p>\
                            <p class="date">' + data.virgo.today + '</p>\
                        </div>\
                    </span>\
                </h1>\
                <section class="fate-text">\
                    <h2 class="fate-name">今日运势</h2>\
                    <p class="fate-content">' + data.virgo.fate + '</p>\
                </section>\
                <section class="fate-text">\
                    <h2 class="fate-name">今日禁忌</h2>\
                    <p class="fate-content">去做：' + data.virgo.behoove + '</p>\
                    <p class="fate-content">别做：' + data.virgo.taboo + '</p>\
                </section>\
            </section>\
        </article>\
        <section class="but-box clearfix">\
            <a class="but fl Virgo-but-01-bg" id="share-btn" onclick="show()">去晒运势</a>\
            <a class="but fr Virgo-but-02-bg" href="#index">换个星座</a>\
        </section>\
    </section>';
 }