$(
    function () {
        let tbody = document.querySelector("#tbody");
        let add = document.querySelector('#add');
        let img = $('#loading-img');
        $(document).ajaxStart(function () {
            img.show()
        });
        $(document).ajaxComplete(function () {
            img.hide()
        });
        $(add).on('click', function () {
                    $.ajax({
                    url: '/admin.php?c=category&m=insert',
                    success: function (data) {
                        if (data == 1) {
                            location.reload()
                        } else {
                            alert('error')
                        }
                    }
                }
            )
        });
        $(tbody).on('click','.remove', function () {
            let id = $(this).closest('tr').attr('data-id');
            $.ajax(
                {
                    url: '/admin.php?c=category&m=delete&id='+ id,
                    success: function (data) {
                        if (data == 1) {
                            location.reload()
                        } else {
                            alert('error')
                        }
                    }

                }
            )
        })
        $(tbody).on('blur','.form-control',function () {
            let id = parseInt($(this).closest('tr').attr('data-id'));
            console.log(id)
            let k = $(this).attr('data-type');
            let v = $(this).val();
            $.ajax(
                {
                    url: '/admin.php',
                    data: {
                        c:'category',
                        m:'update',
                        id:id,
                        k: k,
                        v:v
                    }
                }
            )
        })
    }
);
$(function () {
    let img = $('#loading-img');
    let a = 0;
    setInterval(function () {
        a += 360;
        $('#loading-img').css({transform : `rotate(${a}deg)`})
    },1000)
})

