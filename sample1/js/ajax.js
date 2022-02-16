(function() {
    function getData() {
        document.getElementById("Result").value = "問い合わせ中です…";
        //↓渡すデータ作成
        var data = {
            "code": document.getElementById("Fruits").value
        }
        var json = JSON.stringify(data);//JSON変換
        var xhr = new XMLHttpRequest();//インスタンス生成
        xhr.open("POST", "./php/ajax.php");//phpにデータ送る
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
        xhr.send(json);
        xhr.onreadystatechange = function () {
            try {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        var result = JSON.parse(xhr.response);
                        document.getElementById("Result").value = result.value == 0 ? "選択してください" : result.value;
                    } else {

                    }
                } else {
                
                }
            } catch (e) {

            }
        };
    }
    window.addEventListener('load',(e)=>{
        console.log(document.getElementById('Fruits'));
        document.getElementById('Fruits').addEventListener('change',(e)=>{
            getData()

        })
    });
})();