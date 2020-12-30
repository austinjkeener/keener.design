  console.log("Lets work together to make this great...");
  //click event that will hide the hamburger menu when clicked
  function hideTheBurger() {
    //internal variables
    const nav = $("#nav").css("height", "28%");
    const hamburger = $("#hamburger").css("display", "none");
    const patty = $("#patty").css("display", "none");
    const unorderedlist = $("#unorderedlist").css("display", "block");
    const listitem = $(".listitem").css("display", "block");
    const button = $("#button").append("<p>X<p>")
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
//Event listeners
