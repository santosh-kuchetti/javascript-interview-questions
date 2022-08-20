// 1. anagram
// brutforce. it is o(nlogn) due to sorting
const anagram1 = function (str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    const test1 = str1.split('').sort().join('');
    const test2 = str2.split('').sort().join('');
    if (test1 === test2) {
        return true;
    } else {
        return false;
    }
}("silent", "listen");
console.log(anagram1);

// o(n) approach
/*
    taking one array of 256 length and fill all values into 0's.
    then changing the asqui index of the first string into 1.
    and again changing the asqui value of the second string into 0.
    Now, we can check if any of the value in the array remains 1 in the array, then those strings are not anagrams else they are anagram.
*/

const anagram2 = function (str1, str2) {
    const CHAR = 256;
    if (str1.length !== str2.length) {
        return false;
    }
    const arr = new Array(CHAR).fill(0);  // creating a new array anf fill all values with 0's
    for (let i = 0; i < str1.length; i++){
        arr[str1.charCodeAt(i)]++;   // incrementing the asqui index of arr into 1. 'charCodeAt()' will give the asqui value of the charecter. 'charAt()' will give the charecter at that index.
        arr[str2.charCodeAt(i)]--;   // decrementing the asqui index of arr into 0
    }
    for (let i = 0; i < arr.length; i++){
        if (arr[i] !== 0) {
            return false;
        } return true;
    }
}("silent", "listen");
console.log(anagram2);


// 2. check whether loop exists or not in Linkedlist
class linkedlist{              // creating class to 
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
const head = new linkedlist(10);  // creating head node
const temp1 = new linkedlist(20); // creating another node
const temp2 = new linkedlist(30); // creating another node

// creating the linkedlist
head.next = temp1;      
temp1.next = temp2;
temp2.next = head;  // so we in thislinkedlist loop is there. since we again connected the node with head.

const isLoop = function () {
    let slow = head, fast = head;   // taking two pointers that are stating from head.
    while (fast && fast.next) {     // run untill the fast pointer exist and fast.next exist. because since fast pointer is moving faster, we should check whether it exist or not.
        slow = slow.next;    // slow will jump one step once
        fast = fast.next.next;   // fast will jump two step once
        if (slow === fast) {   //  when the fast pointer moving faster, when any loop exist in the linkedlist, then there will be a point both will be equal to each other.
            return true;
        } 
    }
    return false;
}()
console.log(isLoop);  // this will give true. beacause we have loop in linkedlist


// 3. about 'this'

    // 3.1
    function person(name) {  
        this.name = name;  // after constructor is invoked, this.name will be key for the invoked object
        this.getname = () => this.name;
    }
    const p = new person("Santosh");  // 'p' will be an object
    console.log(p) // person { name: 'Santosh', getname: () => this.name }. when we invoke the person constructor, this.name will be key for the perrson object and getname will be another keyin that function.
    console.log(p.getname())  // output is Santosh. when we call getname of the object,this.name in the  getname will be refering to the window object. the argument in the construvtor will be the global variable.

    //3.2

    const object = {
        message: "Hello, World!",
        a() {                               
            console.log(this.message)
        }

        /*
            this is same as below,
            a: function(){
                console.log(this.message)
            }
        */
    };
    setTimeout(object.a, 1000);   // undefined
    /*
        we think like, after 1 second, we will get the output as 'Hello, World!'
        but it will be different in the setTimeout.
        inside setTimeout, 'object.a' will be invoked as a simple regular function.
        but, 'this.message' in the function 'a' don't refer to the object's message. 
        It refers to the window object's message. Since there is no message in thewindow object, output is undefinrd that is printed after 1 second.
    */


// 4. call, apply, bind
// we have to print Hello, Javascript!

const obj2 = {
    message: "Hello, Javascript!"
}
function printMessage() {
    console.log(this.message);
}
printMessage.call(obj2) // Hello, Javascript!

const Bind = printMessage.bind(obj2);
Bind()   // Hello, Javascript!


// 5. curring

    // 5.1. sum(2)(3)
    const sum = function (a) {
        return function (b) {
            return a + b;
        }
    }(2)(3)
    console.log(sum);  // 5


    // 5.2.  sum(2)(3)(4)(5)(6)()
    const sum1 = function (a) {
        return function (b) {
            return b ? sum1(a + b) : a;
        }
    };
    console.log(sum1(2)(3)(4)(5)(6));  // 20


// 6. Maximum sum subarray
// array will be given ex:- [1,2,-1,3,-2]. 1+2+3-1 = 5. 5 is the max sum subarray

const ans = function (arr) {
    const n = arr.length;
    let res = 0;
    for (let i = 0; i < n; i++){
        let curr = 0;
        for (let j = i; j < n; j++){
            curr = curr + arr[j];
            res = Math.max(res, curr);
        }
    }
    return res;
}([1, 2, -1, 3, -2])
console.log(ans);   // 5

// 7.
// [1, 2] is given we have to give the output as [{1:1, 2:2}];

const reqArr = function (arr) {
    return arr.map(ele => {
        return { [ele]: ele };
    })
}([1, 2])
console.log(reqArr);


// 7.Move zeroes to end
// [8, 5, 0, 10, 0, 20] => [8, 5, 10, 20, 0, 0]
    // brute force solution for this can be we can run two loops one is for  identifying number of zeroes, shifting non-zeros elements to front and second is for putting the zeroes at the end.

    const arr = [8, 5, 0, 10, 0, 20];
    const reqArray = function (array) {
        const req = [];
        let count = 0;
        for (let ele of array) {  // identifying number of zeroes, shifting non-zeros elements to front
            if (ele !== 0) {
                req.push(ele)
            } else {
                count++;
            }
        }
        for (let i = 0; i < count; i++) {  // putting the zeroes at the end based on the count of zeroes
            req.push(0)
        }
        return req;
    }(arr);
    console.log(reqArray);

    // optimised solution for this one will be swapping elements within the array.
    /*
        swapping two elements like 
        we have a count on number of non-zero elements i.e count.
        if the element is non-zero element we will shift the element with arr[count].
        and count++
    
    */
    const reqArray1 = function (array) {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (array[i] !== 0) {
                [array[i], array[count]] = [array[count], array[i]];  
                count++;
            }
        }
        return array;
    }(arr);
    console.log(reqArray1)


// 8. check whether we have any pair present in the array where it's sum is eqaul to the given sum

    // brute force. 
    const array = [2, 1, 3, 6];
    const givenSum = 3;
    const isPresent = function (arr, sum) {
        for (let i = 0; i < arr.length; i++){
            for (let j = i + 1; j < arr.length; j++){
                if (arr[i] + arr[j] == sum) {
                    return true;
                }
            }
        }
        return false;
    }(array,givenSum)
    console.log(isPresent)
    
    // optimised approch using set();
    const isPresent1 = function(arr, sum) {
        const set = new Set();
        for (let ele of arr) {
            if (set.has(sum - ele)) {  // if sum - ele present in the set, we return true else return false.
                return true;
            }
            set.add(ele)
        }
        return false;
    }(array,givenSum)
    console.log(isPresent1)


// 9. what is Polyfill
/*
    many times the functions like Array.push(), Array.pop(), Array.filter(), Array.map() and 
    some functions that are provided by the window like window.sessionStorage(), window.localStorage() 
    won't be supported by the browser.In that case, we can provide our own fallback functions, our own code that will  run instead of those native functions.
    This is basicallyknown as Polyfill.
*/

// Polifill for filter

const givenArray = [1, 2, 3, 4, 5];
const required = function (arr) {
    return arr.filter(num => {
        return num > 4;
    })
}(givenArray)
console.log(required)

Array.prototype.myfilter = function (func) {
    let arr = [];
    console.log(this)
    for (let i = 0; i < this.length; i++){
        if (func(this[i], i, this)) {
            arr.push(this[i])
        }
    }
    return arr;
}

console.log(givenArray.myfilter(num => {
    return num > 4;
}))
