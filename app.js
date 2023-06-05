// myArray = ['html','css','js','java','sql'];
// console.log(myArray);
// myArray.shift()
// console.log(myArray);
// // unshift
// myArray = ['html','css','js','java','sql'];
// console.log(myArray);
// myArray.unshift('node js')
// console.log(myArray);
// // push 
// myArray = ['html','css','js','java','sql'];
// console.log(myArray);
// myArray.push('node js') 
// console.log(myArray);
// //pop 
// myArray = ['html','css','js','java','sql'];
// console.log(myArray);
// myArray.pop()
// console.log(myArray);
// //sort 
// myArray = ['html','css','js','java','sql'];
// console.log(myArray);
// myArray.sort()
// console.log(myArray);
// // reverse 
// myArray = ['html','css','js','java','sql'];
// console.log(myArray);
// myArray.reverse()
// console.log(myArray);
// // reverse the element in order 
// myArray = ['html','css','js','java','sql'];
// console.log(myArray);
// myArray.sort().reverse();
// console.log(myArray);
// // splice 
// myArray = ['html','css','js','java','sql'];
// console.log(myArray);
// myArray.splice(1,2,'lamda');
// console.log(myArray);

// let course =['html','css','js','react js'];
// course.shift()
// console.log(course)

// course =['html','css','js','react js'];
// course.unshift("Node js")
// console.log(course)

// course =['html','css','js','react js'];
// course.push("next js")
// console.log(course)

// course =['html','css','js','react js'];
// course.pop()
// console.log(course)

// course =['html','css','js','react js'];
// course.sort()
// console.log(course)

// course =['html','css','js','react js'];
// course.reverse()
// console.log(course)

// course =['html','css','js','react js'];
// course.sort().reverse()
// console.log(course)

// course =['html','css','js','react js'];
// course.splice(1)
// console.log(course)

// course =['html','css','js','react js',"Anjular ja"];
// course.splice(1,3);
// console.log(course)

// course =['html','css','js','react js','express js','electron js'];
// course.splice(1,3,"node js");
// console.log(course)

// // join --> converting the array to string using separator in parameter
// course =['html','css','js','react js','express js','electron js'];
// let mycourse= course.join('.');
// console.log(mycourse);

// // split --> converting the string to array using separator in join parameter
// course =['html','css','js','react js','express js','electron js'];
// let techs = mycourse.split('.');
// console.log(techs);
// console.log("------------------------------------");
// first create a array (FirstArray) get individual name form array 
// second create a array (SecondArray) Empty and set the data by using firstArray

// let firstArray=['Dinesh','Imran','Gugan','Ram','Ravi'];
// console.log(`First Array : ${firstArray}`)
// let secondArray =[];
// for(i=0;i<=firstArray.length-1;i++){
//    secondArray.push(firstArray[i]);
// }
// console.log(`Secondary Array : ${secondArray}`)

// let employees=[
//     {name: "Dinesh",age:22},
//     {name: "Imran",age:54},
//     {name: "Gugan",age:33},
//     {name: "Abi",age:21},
//     {name: "Arthi",age:34}
// ]

// let selectForBonus=[];

// for(i=0;i<=employees.length-1;i++){
//     if(employees[i].age<=25){
//         selectForBonus.push(employees[i])
//     }
    
// }
// console.log(selectForBonus[0].name+" , "+selectForBonus[1].name)

// let students=[
//    {name:"dinesh",fees: 340}, {name: 'sam',fees: 450},{name : 'samu',fees: 220}
// ]
// for(let ind=0;ind<=students.length-1;ind++){
//    console.table(students[ind].name+" , " +students[ind].fees);
// }

// console.table(students)

// let names =['doi','zoi','lion'];
// console.log(names);
// let Stringname= names.join('-');
// console.log(Stringname)

// let newT = Stringname.split('-');
// console.log(newT)

// names.sort()
// console.log(names)

// names.reverse()
// console.log(names);

// names.splice(0,5);
// console.log(names)
// var first=[{name:'dinesh',age:21},{name:"Jonny",age:40}];
// function shiftManual(){
// for(i=1;i<=first.length-1;i++){
//   insertedArray.push(first[i])
// }
// console.log(insertedArray)
// }
// shiftManual()

// function unshiftManual(inseringElement){
//    first[0]=inseringElement;
//    console.log(first);
// }
// unshiftManual('orange')

// function pushManual(lastEle){
//     let inx = first.length;
//    first[inx]=lastEle;
//    console.log(first);
// }
// pushManual('lemon');

// function popManual(){
//    for(i=0;i<=first.length-2;i++){
//       insertedArray.push(first[i])
//     }
//     console.log(insertedArray)
// }
// popManual()
// function Age(){
//     for(i=0;i<=first.length-1;i++){
//         let userAge = document.getElementById('ageNumber').value;
//         if(first[i].age>=userAge){
//             document.getElementById('res').innerHTML=`${first[i].name} is a seinor Employees of the company\nage: ${first[i].age} is old !`
//             // console.log(`${first[i].name} is Senior Employee in this Company\nage: ${first[i].age}`)
//         }
//     }
// }

//square
// var square = Math.sqrt(7225);
// console.log(`Square of the value : ${square}`);

// //power
// var pow = Math.pow(2,4)
// console.log(pow)
// // min


// let min = Math.min(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16);
// console.log(min)

// let max = Math.max(1,2,3,4,5,6,7,8,9,10,11,12,13,14,16);
// console.log(max)
let random = Math.round(Math.random()*100000);
console.log(`Alert Form DineshKart !  \n${random} is your OTP for DineshKart \nBy DineshKart Team \nKeep Shopping Use DineshKart`);

function enter(){
let num = document.getElementById('ageNumber').value;
if(num==random){
    document.getElementById('res').innerHTML=`Valid OTP`
    document.getElementById('res').style.color='green'
    document.getElementById('gif').style.display='block'
}
else{
    document.getElementById('res').innerHTML=`Invalid OTP` ;
    document.getElementById('res').style.color='red';
    document.getElementById('gif').style.display='none'
}
}
document.getElementById('gif').style.display='none'