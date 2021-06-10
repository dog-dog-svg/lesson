var acc1 = document.getElementsByClassName("accordion1");
var acc2 = document.getElementsByClassName("accordion2");
var acc3 = document.getElementsByClassName("accordion3");var acc4 = document.getElementsByClassName("accordion4");
var i;
var j;
var n;var k;

for (i = 0; i < acc1.length; i++) {
  acc1[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel1 = this.nextElementSibling;
    if (panel1.style.display === "block") {
      panel1.style.display = "none";
    } else {
      panel1.style.display = "block";
    }
  });
}
for (n = 0; n < acc2.length; n++) {
  acc2[n].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel2 = this.nextElementSibling;
    if (panel2.style.display === "block") {
      panel2.style.display = "none";
    } else {
      panel2.style.display = "block";
    }
  });
  }
for (j = 0; j < acc3.length; j++) {
  acc2[j].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel3 = this.nextElementSibling;
    if (panel3.style.display === "block") {
      panel3.style.display = "none";
    } else {
      panel3.style.display = "block";
    }
  }); }
 