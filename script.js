
$('#details').click(function(e){
    url = window.location.href.split('/')
    url = url.slice(0,url.length-1)
    url.push('details.html')
    window.location.href = url.join('/')
})

$('#details2').click(function(e){
    url = window.location.href.split('/')
    url = url.slice(0,url.length-1)
    url.push('details2.html')
    window.location.href = url.join('/')
})

$('#details3').click(function(e){
    url = window.location.href.split('/')
    url = url.slice(0,url.length-1)
    url.push('details3.html')
    window.location.href = url.join('/')
})

$('#details4').click(function(e){
    url = window.location.href.split('/')
    url = url.slice(0,url.length-1)
    url.push('details4.html')
    window.location.href = url.join('/')
})
$('#details5').click(function(e){
    url = window.location.href.split('/')
    url = url.slice(0,url.length-1)
    url.push('details5.html')
    window.location.href = url.join('/')
})

function onRightClick(pageId, max){
    let map = window.ART_MAP
    if (map === undefined){
        map = {}
    }
    if (map[pageId] === undefined){
        map[pageId] = 2
    }else{
        map[pageId] += 1
    }
    if (map[pageId] > max){
        map[pageId] = 1
    }
    window.ART_MAP = map
    $('.detailsImg').attr('src', 'images/artwork-'+pageId+'-'+ map[pageId] +'.png')
}

function onLeftClick(pageId, max){
    let map = window.ART_MAP
    if (map === undefined){
        map = {}
    }
    if (map[pageId] === undefined){
        map[pageId] = 1
    }else{
        map[pageId] -= 1
        if (map[pageId] < 1){
            map[pageId] = max
        }

    }
    window.ART_MAP = map
    $('.detailsImg').attr('src', 'images/artwork-'+pageId+'-'+ map[pageId] +'.png')
}