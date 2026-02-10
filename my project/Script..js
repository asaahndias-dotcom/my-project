document.querySelectorALL(".product-card button").forEach(button=> {button.addEventlistener("click",()=>
{ alert("product added to cart!");});
});

document.queryselectorALL(".product-card").forEach(card => {
    const status= card.queryselector(".status").innerText;
    const button= card.queryselector("button");
    if (status=== "Out of Stock") {
        button.disable = true;
        button.innerText = "Unavailable";
    }
    button?. addEventlistener("click", () =>{
    if (status=== "Available") {
        alert("product added to cart!");
    } else if (status=== "scarce") {
        alert("warning: This drugs is scarce.limited stock available.");
    }
 });
})