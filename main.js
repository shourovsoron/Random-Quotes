const BlockDisplay = document.getElementById("Quote-Display");
const AuthorName = document.querySelector(".author");
const tagDisplay = document.getElementById("tags");
const TagBox = document.getElementById("tagBox");
const Quotebtn = document.getElementById("quotebtn");
var tags = "";
const letters = new Set([]);
console.log(BlockDisplay);


async function showQuote(url){
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    BlockDisplay.innerText='"'+data[0].content+'"';
    AuthorName.innerText=data[0].author;
    // tagDisplay.innerText=data[0].tags;
    

}


TagBox.addEventListener("click", (e)=>{
    letters.clear();
    tags="";
    if(e.target.tagName == "BUTTON"){
        // console.log("button Clicked");
        e.target.classList.toggle("active");
        Array.from(TagBox.children).forEach((tag)=>{
            // console.log(tag);
            if(tag.classList.contains("active")){
                //  tags =tag.innerText+"|"
                letters.add(tag.innerText);
                console.log(letters);               
            }

        })

        for (let tag of letters) {
            if(!tags==""){
                tags += "|"+tag;
            }else{
                tags =tag;
            }
            
        }
    }
    
    showQuote(`https://api.quotable.io/quotes/random?maxLength=70&tags=${tags}`);
    console.log(`https://api.quotable.io/quotes/random?maxLength=70&tags=${tags}`);

})

Quotebtn.addEventListener("click", ()=>{

    showQuote(`https://api.quotable.io/quotes/random?maxLength=70&tags=${tags}`);
    console.log(`https://api.quotable.io/quotes/random?maxLength=70&tags=${tags}`);
})

showQuote(`https://api.quotable.io/quotes/random?maxLength=70&tags=${tags}`);
console.log(`https://api.quotable.io/quotes/random?maxLength=70&tags=${tags}`);