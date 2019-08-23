$(function () {
    let btn = $(".box div")
    let son = $(".son div")
    btn.eq(0).css({
        "background-color":"pink"
    })
    son.eq(0).css({
        "z-index":10
    })
    btn.mouseenter(function () {
        // $(btn).css("background-color","")
        // $(this).css("background-color","pink")
        let index = $(this).index()
        btn.css({
            "background-color":""
        }).eq(index).css({
            "background-color":"pink"
        })
        son.css({
            "z-index":0
        }).eq(index).css({
            "z-index":10
        })
    })
})