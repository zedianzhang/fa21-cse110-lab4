function discountPrices(prices,discount) {
    const  discounted=[]
    const  length =prices.length;

    for (let  i = 0; i < length; i++) {
        const discountedPrices=prices[i]*(1-discount);
        discounted.push(discountedPrices);
    }
    //console.log(i);
    console.log(length);
    //console.log(finalPrices);
    return discounted;
}
//console.log(discountPrices([100,200,300],0.5))

let student={
    name:'sarah',
    major:'computer science',
    'grad year':2022,
    greeting: function() {
        console.log('hello!');
    },
    'Favorite teacher':{
        name:'thomas powell',
        course:'cse 110',

    },
    courseLoad:['cse 110','cse 134','vis 41']
};
//console.log(student.courseLoad[0][0]=='c')
 
function printNums() {
    console.log(1);
    setTimeout(function(){console.log(2);},1000);
    setTimeout(function(){console.log(3);},0);
    console.log(4);
}
printNums()