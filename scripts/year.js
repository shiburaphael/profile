
function displayYear(){
    const currentYear = document.getElementById('currentYear');
    console.log(currentYear);
    let year = new Date().getFullYear();
    currentYear.innerHTML = year;

};
module.export ={
    displayYear,
};