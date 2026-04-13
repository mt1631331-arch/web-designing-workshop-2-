<script>

function changeHeading(){
    document.getElementById("heading").innerHTML="JavaScript Lab is Awesome!";
}

function changeBackground(){
    document.body.style.backgroundColor="lightblue";
}

function increaseFont(){
    document.getElementById("heading").style.fontSize="50px";
}

function resetPage(){
    document.getElementById("heading").innerHTML="Welcome to JavaScript Lab";
    document.getElementById("heading").style.fontSize="36px";
    document.body.style.backgroundColor="white";
}

</script>