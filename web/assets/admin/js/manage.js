$(
    function () {
        let tbody = document.querySelector("#tbody");
        let add = document.querySelector('#add');
        let img = $('#loading-img');
        $(document).ajaxStart(function () {
            console.log(1);
            img.show()
        });
        $(document).ajaxComplete(function () {
            console.log(2)
            img.hide()
        });
        $(add).on('click', function () {
            $.ajax({
                    url: '/web/admin.php?c=news&m=insert',
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
                    url: '/web/admin.php?c=news&m=delete&id='+ id,
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
                    url: '/web/admin.php',
                    data: {
                        c:'news',
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
(()=>{
    let img = document.querySelector('#loading-img');
    let a = 0;
    setInterval(function () {
        a += 360;
        img.style.transform = `rotate(${a}deg)`
    },1000)
})();



