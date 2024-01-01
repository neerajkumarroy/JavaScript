// const Numbers = [1,2,3,4,5,6,7,8,9,10];

// const NewNum = Numbers.filter((item)=>{
//     return item>4
// })

// console.log(NewNum)

//2
// let Numbers = [1,2,3,4,5,6,7,8,9,10];
// let newNum = [];
// Numbers.forEach( (num)=> {
//     if(num>4)
//     {
//         newNum.push(num);
//     }
    
// })
// console.log(newNum);

// /3

// const Students = [
//     {name:"Neeraj", fee:'50000',Corse:'mca',city:'Dehradun' },
//     {name:"Ajeet", fee:'40000',Corse:'bca',city:'Delhi' },
//     {name:"Raman", fee:'45000',Corse:'ba',city:'Dehradun' },
//     {name:"Rajdeep", fee:'60000',Corse:'mca',city:'Agra' },
//     {name:"Nitin", fee:'35000',Corse:'bsc',city:'bijnor' },
//     {name:"Rohan", fee:'35000',Corse:'Law',city:'Delhi' },
//     {name:"Ramit", fee:'25000',Corse:'mLlb',city:'Haridwar' }
// ];

// // const namew = Students.filter( (itme) => itme.fee ==='35000')
// const fees = Students.filter((aa) => {
//      return aa.fee >='1000' 
// })
// console.log(fees);

// 4

// let Numbers = [1,2,3,4,5,6,7,8,9,10];

// let NewNumber = Numbers.map((num)=>{
//    return num+10
// });
// console.log(NewNumber);

//5 channing
// let Numbers = [1,2,3,4,5,6,7,8,9,10];

// let newNumbers = Numbers
// .map((num) =>num*10)
// .map((num)=>num+1)
// .filter((num)=>num>='40')
// console.log(newNumbers);


// 6

// const Numbers = [1, 2, 3];
// const initialstate = 0;

// const Total = Numbers.reduce(function(acc,curval) {
//     console.log(`acc:${acc} and curval:${curval}`);
// return acc+curval;
// },0);

// console.log(Total);

// /OR

// const Numbers = [1, 2, 3];
// const initialstate = 0;
// const Total = Numbers.reduce((acc,curval) => {
//     return acc+curval;
// },initialstate);

// // console.log(`acc:${acc} and curval:${curval}`);
// console.log(Total);

// 7

// let shopping_Cart = [
//     {
//         itemName: 'Java Course',
//         price: 2000
//     },
//     {
//         itemName: 'JavaScript Course',
//         price: 3000
//     },
//     {
//         itemName: 'Python Course',
//         price: 4000
//     },
//     {
//         itemName: 'C++ Course',
//         price: 5000
//     },
//     {
//         itemName: 'React Course',
//         price: 6000
//     },
//     {
//         itemName: 'Nodejs Course',
//         price: 7000
//     },
// ];

// const total = shopping_Cart.reduce((acc, item) => acc + parseInt(item.price), 0);
// console.log(total);

