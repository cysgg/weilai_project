const winHeight = $(window).height(), // 浏览器可视的高度
      clsarr    = []; //所有需要操作的元素
var   tp        = $(document).scrollTop() || 0;//滚轮下滑的大小


[].forEach.call($('.item'),item => {
    pusharr(clsarr,$(item).find('.p'))
    pusharr(clsarr,$(item).find('.bat'))
    pusharr(clsarr,$(item).find('.bgp'))

    function pusharr(arr1,arr2){
        if(arr2.length <= 1){
            arr1.push($(arr2[0]))
        }else{
            [].forEach.call(arr2,item=>{
                arr1.push($(item))
            })
        }
    }
})

hid();

render(tp,winHeight);

$(document).scroll(()=>{
    tp = $(document).scrollTop()
    render(tp,winHeight)
});



function hid(){
    clsarr.forEach(item=>{
        item.addClass('hid')
    })
}

function render(tp,wh){
    clsarr.forEach(ele=>{
        if(ele.hasClass('bgp')){
            if(ele.hasClass('logo')){
                if(isrender(tp,wh,ele.offset().top,ele.height())){
                    ele.addClass('show')
                } 
            }else{
                if(isbgprender(tp,wh,ele.offset().top,ele.height())){
                    ele.addClass('show')
                }
            }
        }else{
            if(isrender(tp,wh,ele.offset().top,ele.height())){
                ele.addClass('anm')
            } 
        }
    })
}

function md(num){
    return Math.round(num)
}


function isrender(tp,wh,ot,oh){
    if(((md(tp) + md(wh) - 20) > (md(ot) + md(oh))) && ((md(ot) + md(oh)) > md(tp))){
        return true
    }
    return false
}

function isbgprender(tp,wh,ot,oh){
    if(((md(tp) + md(wh)) > md(ot)) && (md(ot) + md(oh) > (md(tp)))){
        return true
    }
    return false
}