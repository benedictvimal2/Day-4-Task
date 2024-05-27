//b. Convert all the strings to title caps in a string array

// Using Anonymous Function:
let str = function () {
    let arr = "hello there how are you"
    let titlecase = arr.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
    console.log(titlecase)
  }
  str()

// Using IIFE:
let st = "hello there how are you";
(function (st) {
    st = st.toLowerCase().split(' ');
    for (var i = 0; i < st.length; i++){
      st[i] = st[i].charAt(0).toUpperCase() + st[i].slice(1);
    }
    console.log(st.join(' '));
    })(st)