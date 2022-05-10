import $ from 'jquery'
const $tabBar = $ ('.app2 .tab-bar')
const $tabContent = $('.app2 .tab-content')

$tabBar.on('click','li',(e)=>{   //监听li元素
    const $li = $(e.currentTarget)
    $li.addClass('selected')
        .addClass("selected")
        .siblings()
        .removeClass("selected")
    const index = $li.index()
    console.log(index)
    $tabContent.children()
        // .eq(index).css({display:'block'})    //不推荐写法,这是为了将js和css分离。即样式与行为分离。
                                                //找到点击对应元素并将css设定为展示
        // .siblings().css({display:'none'})       //将其兄弟元素设定display：none
        .eq(index).addClass('active')
        .siblings().removeClass('active')    
    })

    $tabBar.children().eq(0).trigger('click')