$(function() {
    var documentEl = $(document),
        fadeElem = $(".fade-scroll")

    documentEl.on("scroll", function() {
        var currentScrollPostion = documentEl.scrollTop()

        fadeElem.each(function() {
            var $this = $(this),
                elemOffsetTop = $this.offset().top

            if (currentScrollPostion > elemOffsetTop)
                $this.css("opacity", 1.5 - (currentScrollPostion - elemOffsetTop) / 400)
        })
    })
})