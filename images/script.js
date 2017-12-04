;(function($) {

    /**
     * Area variable
     * #1 Tistory Theme
     */
    var Area = {};

    Area.SocialShare = (function() {

        var SOCIAL_SHARE = {
            kakaostory: {
                url: "https://story.kakao.com/share",
                width: 640,
                height: 400,
                makeShareUrl: function(url) {
                    return this.url + "?url=" + encodeURIComponent(url);
                }
            },
            facebook: {
                url: "https://www.facebook.com/sharer/sharer.php",
                width: 640,
                height: 400,
                makeShareUrl: function(url) {
                    return this.url + "?display=popup&u=" + encodeURIComponent(url);
                }
            },
            twitter: {
                url: "https://twitter.com/intent/tweet",
                width: 640,
                height: 400,
                makeShareUrl: function(url) {
                    return this.url + "?url=" + encodeURIComponent(url);
                }
            }
        };

        var onClick = function(e) {
            var $this = $(this),
                service = SOCIAL_SHARE[$this.data("service")],
                url = location.href;

            if (service) {
                e.preventDefault();
                window.open(service.makeShareUrl(url), "", "width=" + service.width + ", height=" + service.height);
            }
        };

        $(".article-share").on("click", "a", onClick);

    })();

    Area.init = function() {
        Area.SocialShare.init();
    };

    $.Area = Area;

    var $allVideos = $("iframe[src^='//player.vimeo.com'], iframe[src^='//www.youtube.com'], object, embed, iframe[src^='http://www.youtube.com'], iframe[src^='https://www.youtube.com'], iframe[src^='http://videofarm.daum.net'], iframe[src^='https://videofarm.daum.net'], iframe[src^='//videofarm.daum.net'], iframe[src^='//tv.kakao.com'], iframe[src^='//kakaotv.daum.net']"),
        $fluidEl = $(".article");

    $allVideos.each(function() {

        $(this)
            // jQuery .data does not work on object/embed elements
            .attr('data-aspectRatio', this.height / this.width)
            .removeAttr('height')
            .removeAttr('width');

    });

    $(window).resize(function() {

        var newWidth = $fluidEl.width();
        $allVideos.each(function() {

            var $el = $(this);
            $el
                .width(newWidth)
                .height(newWidth * $el.attr('data-aspectRatio'));

        });

    }).resize();

})(jQuery);