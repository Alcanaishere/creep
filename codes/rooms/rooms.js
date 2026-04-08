console.log("hello rooms");


const rooms = document.querySelectorAll('.room');


let searchInput;

function search(){
    let number = 0;
    searchInput = document.getElementById('search_input').value;
    rooms.forEach((room) => {
        const text = room.textContent;
        if(text.includes(searchInput)){
            console.log("含む");
            room.style.display = "";
            number++;
        }else{
            console.log("含まない");
            room.style.display = "none";
        }
    });
    console.log(number);
    document.getElementById("result").textContent = "検索結果:" + number + "件を表示";
}