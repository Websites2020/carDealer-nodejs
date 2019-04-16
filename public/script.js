// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Inventory Search

function search() {
    var value1 = document.getElementById("manufacturer").value;
    var value2 = document.getElementById("price").value
    alert(`You selected the car brand ${value1} and a price range of ${value2}`);
    location.href = "#search";
}

function contact() {
    location.href = "#contact";
}