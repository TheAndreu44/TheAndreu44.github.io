document.getElementById("tier1").style.display= "block";
document.getElementById("tier2").style.display= "none";
document.getElementById("tier3").style.display= "none";
/*Open tier1*/
function open_tier1() {
    document.getElementById("tier1").style.display= "block";
    document.getElementById("tier2").style.display= "none";
    document.getElementById("tier3").style.display= "none";
}
/*Open tier2*/
function open_tier2() {
    document.getElementById("tier1").style.display= "none";
    document.getElementById("tier2").style.display= "block";
    document.getElementById("tier3").style.display= "none";
}
/*Open tier3*/
function open_tier3() {
    document.getElementById("tier1").style.display= "none";
    document.getElementById("tier2").style.display= "none";
    document.getElementById("tier3").style.display= "block";
}
