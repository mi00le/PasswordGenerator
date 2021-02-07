let special_char = [33, 35, 36, 37, 38, 42, 43, 61, 63, 64, 94, 95, 124];
let numbers = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
let upper = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
let lower = [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122];
let ambig = [34, 39, 40, 41, 44, 46, 47, 58, 59, 60, 62, 91, 92, 93, 96, 123, 125, 126];


$('#generate').click(() => {
    let arr = [];

    if ($("#symbol").prop("checked") == true) {
        arr.push("symbol")
    }

    if ($("#numbers").prop("checked") == true) {
        arr.push("number")
    }

    if ($("#low_char").prop("checked") == true) {
        arr.push("low_char")
    }
    if ($("#upper_char").prop("checked") == true) {
        arr.push("upper_char")
    }
    if($("#exc_ambig").prop("checked") == true){
        arr.push("ambig")
    }
    
    generate(arr)
})




function generate(arr) {
    let len = $('#number').val();
    let password = [];

    arr.forEach((element) => {
       if(element == "symbol"){
        shuffle(special_char)
        password.push(special_char.slice(0, len))
       }
       if(element == "number"){
        shuffle(numbers)
        password.push(numbers.slice(0, len))
       }
       if(element == "low_char"){
        shuffle(lower)
        password.push(lower.slice(0, len))
       }
       if(element == "upper_char"){
        shuffle(upper)
        password.push(upper.slice(0, len))
       }
       if(element == "ambig"){
        shuffle(ambig)
        password.push(ambig.slice(0, len))
       }
       
    });

    let flat_pass = password.flat()
    shuffle(flat_pass)

    let slice_pass = flat_pass.slice(0,len)

    let output = [];

    slice_pass.forEach((el)=>{
        output.push(String.fromCharCode(el))
    })

    $('#out').val(output.join(''))
}


//Shuffle array algorithm
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }