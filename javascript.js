  console.log("Lets work together to make this great...");


  //this function shows the drop down menu
  function hideTheBurger() {
    //internal variables
    const nav = $("#nav").css("height", "28%");
    const hamburger = $("#hamburger").css("display", "none");
    const patty = $("#patty").css("display", "none");
    const unorderedlist = $("#unorderedlist").css("display", "block");
    const listitem = $(".listitem").css("display", "block");
    const button = $("#button").css("display","block");
    //i want to append a giant x that will be used to toggle the state of the drop down menu when clicked

    //event listeners
    document.getElementById("button").addEventListener("click", button);
    document.getElementById("hamburger").addEventListener("click", hamburger);
    document.getElementById("patty").addEventListener("click", patty);
    document
      .getElementById("unorderedlist")
      .addEventListener("click", unorderedlist);
    document.getElementById("nav").addEventListener("click", nav);
  };

  //this function hides the dropdown menu
  function showTheBurger(){
    //when i click on the x then the state of the menu goes back to how it was originally
        //internal variables
        const nav = $("#nav").css("height", "7%");
        const hamburger = $("#hamburger").css("display", "block");
        const patty = $("#patty").css("display", "block");
        const unorderedlist = $("#unorderedlist").css("display", "none");
        const listitem = $(".listitem").css("display", "none");
        const button = $("#button").css("display","none");
        //i want to append a giant x that will be used to toggle the state of the drop down menu when clicked
    
        //event listeners
        document.getElementById("button").addEventListener("click", button);
        document.getElementById("hamburger").addEventListener("click", hamburger);
        document.getElementById("patty").addEventListener("click", patty);
        document
          .getElementById("unorderedlist")
          .addEventListener("click", unorderedlist);
          document.getElementsByName("listitem").addEventListener("click",listitem);
        document.getElementById("nav").addEventListener("click", nav);
  }
//Event listeners
