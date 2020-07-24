// alert("CHAPTER#38-42")
// alert("TASK1")
// function power(a,b)
// {var d=1
// for(var i=0;i<b;i++){
// d=a*d}
// return d}
// var num=window.prompt("Enter number")
// var pow=window.prompt("Enter power")
// var c=power(num,pow)
// alert(c)

// alert("TASK2")
// function leapYear(year){
// if(year%4==0){
//     return "Leap Year"
// }
// else{
//     return "Not a Leap Year"
// }}

// var year=window.prompt("Enter any year")
// var c=leapYear(year)
// alert(c)

// alert("TASK3")
// function S(a,b,c){
// var s=(a+b+c)/2
// return s;}
// function area(a,b,c){
// var x=S(a,b,c)
// var aot=x*(x-a)*(x-b)*(x-c)
// return aot;}
// var a=parseInt(window.prompt("Length of a"))
// var b=parseInt(window.prompt("Length of b"))
// var c=parseInt(window.prompt("Length of c"))
// var d=area(a,b,c)
// alert("Area of Triangle:"+d)

// alert("TASK4")
// function average(a,b,c){
//     var avg=(a+b+c)/3
// return "AVERAGE:"+avg}

//  function percentage(a,b,c){
//     var per=(a+b+c)/3
// return "PERCENTAGE:"+per+"%"
//  }

// function mainFunction(a,b,c){
//     var av=average(a,b,c)
//     var pr=percentage(a,b,c)
//     alert(av+"\n"+pr)
// }

// var a=parseInt(window.prompt("Marks of sub1"))
// var b=parseInt(window.prompt("Marks of sub2"))
// var c=parseInt(window.prompt("Marks of sub3"))

// var result=mainFunction(a,b,c)

alert("TASK5")
var fruits = ["Banana", "Orange", "Apple", "Mango"];
alert(fruits[2])



// alert("TASK6")
// var string="Some people have curly brown hair through proper brushing"
// var vowel="aeiou"
// var del=string.replace(/[AaEeIiOoUu]/g,'')
// alert(del)

// alert("TASK7")
// var def = prompt('Enter the string to count two vowels in succetion : ');
// alert("Vowels in successions are :\n");
// found = 0, count = 0;
//     for (i = 0; i<def.length; i++)
//     {
//         if (isVowel(def[i]))
//         {
//             found++;
//         }
//         else
//         {
//             found = 0;
//         }

//         if (found == 2)
//         {
//             alert (def[i - 1]+ def[i]+"\n")
//             found = 1;
//             count++;
//         }
//     }

//     alert("\nTotal number of occurences "+ count);


// function isVowel(char) {
//   let result = false;
//   switch (char) {
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//       result = true;
//       break;

//     default:
//       break;
//   }

//   return result;
// }



// alert("TASK8")
// function meter(kilometer){
//  var m=kilometer*1000
//   return m
// }
// function centi(kilometer){
//     var centimeter=kilometer*1000*100
// return centimeter
// }
// function feet(kilometer){
//     var feet=kilometer*3281
// return feet

// }
// function inches(kilometer){
//     var inch=kilometer*39370
// return inch
// }

// var kilometer=window.prompt("Enter value in km:")
// var meter=meter(kilometer)
// var centi=centi(kilometer)
// var feet=feet(kilometer)
// var inch=inches(kilometer)
// alert("Meter:"+meter+"\n"+"Centimeter:"+centi+"\n"+"Feet:"+feet+"\n"+"inche:"+inch)

// alert("TASK9")
// var i,time_worked, over_time, overtime_pay = 0,a;
// for( i=1;i<=10;i++)
// {
//  time_worked=parseInt(window.prompt("Ener the time employee worked in hr:"))
//  if(time_worked>40)
//  {
//      over_time=time_worked-40
//      overtime_pay=overtime_pay+(12*over_time)
// }}
// alert("\nTotal Overtime Pay Of 10 Employees Is: " + overtime_pay)

// alert("TASK10")
// var amount=parseInt(window.prompt("Enter amount to withdraw!!"))
// var hun=parseInt(amount/100)
// var fif=parseInt((amount%100)/50)
// var tens=parseInt(((amount%100)%50)/10)
// alert("You will have "+hun+" hundred notes "+fif+" fifty notes "+tens+" tens notes")

alert("CHAPTER 49-52")
alert("TASK1")
function readText (form) {
  TestVar =form.First.value;
  document.write ("First Name: " + TestVar);
  b =form.Last.value;
  document.write ("</br>Last Name: " + b);
  c =form.Email.value;
  document.write ("</br>E-mail ID " + c);
  d =form.Mobile.value;
  document.write ("</br>Mobile Number: " + d);
}
function writeText (form) {
  form.inputbox.value = "Have a nice day!"
}

 alert("TASK3")
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}