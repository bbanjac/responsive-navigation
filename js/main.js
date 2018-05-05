var visible = false;
var nav = document.getElementById("navBar");
var links = nav.getElementsByTagName("a");


// toggle navigation function
    function toggleNav() {
        if (visible) {
            //if true
            for (let i = 0; i < links.length; i++) {
                //for all elements (<a>) set display none
                links[i].style.display = "none";
            }
            visible = false;
        }
        else {
            //if false
            for (let i = 0; i < links.length; i++) {
                //for all elements (<a>) set display block
                links[i].style.display = "block";
            }
            visible = true;
        }
    }



// window onresize event
    window.onresize = function (event) {
        if (window.innerWidth > 600) {
            // if we go back to the desktop size when navigation is visible
            for (let i = 0; i < links.length; i++) {
                links[i].style.display = ""; // delete display in style
            }
            visible = false; 
        }
    };