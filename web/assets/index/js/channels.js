let remove = $('.remove');
let add = $('.add')
remove.on('click','.btn',function(){
    console.log($(this).attr('class'))
    if($(this).attr('class') == 'btn bur'){
        remove.onclick = null;
    }else if($(this).attr('class') == 'btn'){
       $('#down').prepend($(this))
    }
    let id = $(this).attr('data-id');
    console.log(id)
    $.ajax(
        {
            url: '/index.php',
            data: {
                c: 'page',
                m: 'channelsList',
                id: id,
                v: 0
            }
        }
    )
});
add.on('click','.btn',function (){
        $('#up').append($(this));
    let id = $(this).attr('data-id');
    console.log(id)
    $.ajax(
        {
            url: '/index.php',
            data: {
                c: 'page',
                m: 'channelsList',
                id: id,
                v: 1
            }
        }
    )
});