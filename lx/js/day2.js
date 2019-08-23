

// let arr = [1,2,3,'a','b','c',true,undefined,null]
// console.log(arr);
// let arr = new Array(1,2,4);
// console.log(arr);
// 获取元素，访问元素
// 语法
// let category = ['书籍','衣服','电子产品']
// category[下标]  举例 category[1]
// 遍历：依次访问
// for(let i =0;i<3;i++){
//     console.log(category[i])
// }
// 长度  arr.length
// console.log(category.length)
// 初始数据类型与引用数据类型的区别：
// 1.栈区：存放初始数据类型；
// 2.堆区：存放引用数据类型；
// 1.栈区（stack）— 由编译器自动分配释放 ，存放函数的参数名，局部变量的名等。其操作方式类似于数据结构中的栈。
// 2、堆区（heap）— 由程序员分配释放， 若程序员不释放，程序结束时可能由OS回收。注意它与数据结构中的堆是两回事，分配方式倒是类似于链表
// let arr=[1,2,3]
// console.log(arr);
// delete arr[2];
// console.log(arr);
// console.log(arr.length);
// arr.length=0;
// console.log(arr);
// arr[2]="我"
// console.log(arr)

// // arr.push('4');
// arr[3]="6";
// console.log(arr);
// let arr = new Array(10)
// console.log(arr)

// let arr=[1,2,3]
// let arr3=[]
// for(let i=0;i<arr.length;i++){
//     arr3[i]=arr[i]
// }
// console.log(arr3)
//末尾删除pop(arr)
// function pop(arr) {
//     let newArr=[]
//     for (let i = 0; i < arr.length - 1; i++) {
//         newArr[i]=arr[i]
//     }
//     return newArr
// }
// arr = pop(arr)
// console.log(arr)
//首位删除 shift(arr)
// function shift(arr) {
//     let newArr = []
//     for (let i = 1; i < arr.length; i++){
//         newArr[i-1]=arr[i]
//     }
//     return newArr
// }
// arr = shift(arr)
// console.log(arr)

// 定义一个insert函数  接收两个参数 arr, item ,index,使得函数完成一个功能，在arr的index下标处插入item
// function a(arr, item, index) {
//     let newArr =[];
//     for (let i = 0; i < index; i++) {
//         newArr[i]=arr[i]
//     }
//     newArr[index] = item
//     for (let j = index; j < arr.length; j++){
//         index+=1
//         newArr[index]=arr[j]
//     }
//     return newArr
// }
// arr = a(arr,"Aa",3)
// console.log(arr)

//首位删除 shift(arr)
// function sc(arr) {
//     let newArr=[]
//     for (let i = 1; i < arr.length; i++) {
//         newArr[i-1]=arr[i]
//     }
//     return newArr
// }
// arr = sc(arr)
// console.log(arr)
//
// //末尾删除pop(arr)
// function mw(arr) {
//     let newArr=[]
//     for (let i = 0; i < arr.length - 1; i++) {
//         newArr[i]=arr[i]
//     }
//     return newArr
// }
// arr = mw(arr)
// console.log(arr)

// 定义一个insert函数  接收两个参数 arr, item ,index,使得函数完成一个功能，在arr的index下标处插入item
// function long(arr, item, index) {
//     let newArr=[]
//     for (let i = 0; i < index; i++) {
//         newArr[i]=arr[i]
//     }
//     newArr[index]=item
//     for (let j = index; j < arr.length; j++) {
//         index+=1
//         newArr[index]=arr[j]
//     }
//     return newArr
// }
// arr = long(arr,"qwer23123",2)
// console.log(arr)

// function mp(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = 0; j < arr.length - i - 1; j++) {
//             if (arr[j + 1] < arr[j]) {
//                 let num =arr[j+1]
//                 arr[j+1]=arr[j]
//                 arr[j]=num
//             }
//         }
//     }
//     return arr
// }
// console.log(mp([9,9,9,8,8,8,5,1,2,3,6]))

// function maopao(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = 0; j < arr.length - i - 1; j++) {
//             if (arr[j + 1] < arr[j]) {
//                 let nums=arr[j+1]
//                 arr[j+1]=arr[j]
//                 arr[j]=nums
//             }
//         }
//     }
//     return arr
// }
// console.log(maopao([8,6,1,2,3,6,9,100]))
// 斐波那契
// function fb(n,a=1,b=1) {
//     if (n <= 2) {
//         return b;
//     } else {
//         return fb(n - 1, b, a + b);
//     }
// }
// console.log(fb(7))
// function fb1(n){
//     if(n <= 2){
//         return 1;
//     }else{
//         return fb1(n-1) + fb1(n-2);
//     }
// }
// console.log(fb1(7))
// console.log(escape("我爱你"))
//
// console.log(unescape("%u4E48%u4E48%u54D2"))
//
// console.log(Number(false))
//
// let s1 = String(null);
// console.log(s1)
//
// console.log(Boolean(0))
//
// let  a='123.2'
// let b='456.1'
// a=parseInt(a)
// b=parseInt(b)
// console.log(a+b)
//
// let c='123.4'
// let d='456.7'
// c=parseFloat(c)
// d=parseFloat(d)
// console.log(c+d)
//深拷贝
// function deepcp(arr) {
//     let newArr=[]
//     for (let i = 0; i < arr.length; i++) {
//         if(typeof arr[i] != "object"){
//             newArr[i]=arr[i]
//         }else {
//             newArr[i] = deepcp(arr[i]);
//         }
//     }
//     return newArr
// }
// let arr = [12,3,44,55,[6,7]]
// let arr2 = deepcp(arr)
// console.log(arr2)
// arr[4][0]="qwer"
// console.log(arr)

// 斐波那契数列
// 1 1 2 3 5 8 13 21 34
// 0 1 2 3 4 5 6  7  8

// 传参 数列的长度
// function fn(n){
//     let x=y=1
//     let arr = []
//     for(let i=0;i<n;i++){
//         if(i<=1){
//             arr.push(1)
//         }else{
//             arr.push(x+y)
//             let num = x+y
//             x = y
//             y = num
//         }
//     }
//     return arr
// }
// console.log(fn(10))

// function fb(n) {
//     let x=y=1;
//     let arr=[]
//     for (let i = 0; i < n; i++) {
//         if (i <= 1) {
//             arr.push(1)
//         }else{
//             arr.push(x+y)
//             let num = x+y;
//             x=y;
//             y=num
//         }
//     }
//     return arr
// }
// console.log(fb(5))

// let car = {
//     Price:function () {
//         console.log("标价500万")
//     },
//     name: ["兰博基尼","宝马7系","迈巴赫S680"],
//     produce:["美国","日本","德国"],
//     mold:["SUV","轿车","超跑"],
//     oil:["加油","维修","行驶"],
//     run:["跑"],
//     my:function () {
//         console.log("我的车是"+this.name[2]+this.mold[1]+"产自"+this.produce[2]+"现在正在路上边"+this.run[0]+"边"+this.oil[0])
//     }
// }
// car.my()
// car.Price()

// function person() {
//     this.name = "那坨"
//     this.sex = "女"
//     this.age = 18
// }
// let a = new person()
// console.log(a.name)
// console.log(a.sex)
// console.log(a.age)

// class fly {
//     constructor(){
//         this.name=""
//         this.color=""
//     }
// }
// let a = new fly()
// a.name = "波音747"
// a.color = "red"
// console.log(a.name)
// console.log(a.color)
//
// let obj= new Object();
// obj.name = "xioaxiao"
// obj.sex = "男"
// console.log(obj)
// let arr = new Array()
// arr[0] = "Clearlove"
// arr[1] = "Mlxg"
// arr[2] = "Ning"
// console.log(arr)
// console.log(arr.unshift("Tian"))
// console.log(arr)
// let arr = new Array()
// arr[0] = "Clearlove"
// arr[1] = "Mlxg"
// arr[2] = "Ning"
// console.log(arr)
// console.log(arr.shift("Tian"))
// console.log(arr)
// let arr = new Array()
// arr[0] = "Clearlove"
// arr[1] = "Mlxg"
// arr[2] = "Ning"
// console.log(arr)
// console.log(arr.push("Tian"))
// console.log(arr)/
// let arr = new Array()
// arr[0] = "Clearlove"
// arr[1] = "Mlxg"
// arr[2] = "Ning"
// console.log(arr)
// console.log(arr.pop("Tian"))
// console.log(arr)
// let arr = new Array()
// arr[0] = "Clearlove"
// arr[1] = "Mlxg"
// arr[2] = "Ning"
// console.log(arr)
// arr.splice(2,0,"Tian")
// console.log(arr)
//查找字符123   4567查找对应字符的下标   替换8     截取9 10 11  转换数组12 大小写 13  14
// let str = "山西真的好假"
// console.log(str.replace("真的好假","假的好真"))
// var arr = new Array(3)
// let arr = [1,2,3,4,5,'a']
// console.log(arr.unshift('a',10))
// console.log(arr)
// let arr = [1,2,3,4,3,6,7,4]
// console.log(arr.sort())  // [1,2,3,3,4,4,6,7]
// console.log(arr)  // [1,2,3,3,4,4,6,7]
// arr.sort(function(a,b){return a-b})  //正序
// arr.sort(function(a,b){return b-a})   //倒序
// let arr = [1,2,3,4,5,6,'b']
// // console.log(arr.find(a=>{if(a>5)return a}))
// console.log(Math.ceil(77.7))
// console.log(Math.floor(77.7))
// console.log(Math.max(10,20,30))
// console.log(Math.min(10,20,30))
// console.log(String.fromCharCode(parseInt(Math.random()*10+64)) )
// console.log(Math.pow(2,10))
// console.log(Math.sqrt(4))
// let mywindow=window.open("https://www.baidu.com",'百度','height=500,width=500',false)
// moveBy(x,y) :可相对窗口的当前坐标把它移动指定的像素。
// mywindow.moveBy(100,100)
// moveTo(x,y):把窗口的左上角移动到一个指定的坐标。
// mywindow.moveTo(200,200)
// resizeBy():按照指定的像素调整窗口的大小。
// mywindow.resizeBy(100,100)
// resizeTo():把窗口的大小调整到指定的宽度和高度。
// mywindow.resizeTo(1200,1200)
// scrollBy(x,y):按照指定的像素值来滚动内容。
// mywindow.scrollBy(1000,5000)
// scrollTo(x,y):把内容滚动到指定的坐标。
// mywindow.scrollTo(100,100)
// setInterval():按照指定的周期（以毫秒计）来调用函数或计算表达式。
// mywindow.setInterval("clock()",50)
// function clock()
// {
//   let t=new Date()
//   document.getElementById("clock").value=t
// }
// clearInterval():取消由 setInterval() 设置的 timeout。
// alert():显示带有一段消息和一个确认按钮的警告框。
// console.log(alert(123))
// setTimeout():在指定的毫秒数后调用函数或计算表达式。
// function timedMsg()
// {
// let t=setTimeout("alert('5 seconds!')",5000)
// }
// console.log(timedMsg())
// clearTimeout():取消由 setTimeout() 方法设置的 timeout。
// let t
// function stopCount()
// {
//     clearTimeout(t)
// }
// console.log(stopCount())
// confirm():显示带有一段消息以及确认按钮和取消按钮的对话框。
// function disp_confirm()
// {
//     let r=confirm("Press a button")
//     if (r==true)
//     {
//         document.write("You pressed OK!")
//     }else{
//         document.write("You pressed Cancel!")
//     }
// }
// console.log(disp_confirm())
// prompt():显示可提示用户输入的对话框。
// console.log(prompt())
// close()：关闭浏览器窗口。
// console.log(close())
// let num = 123.456
// console.log(num.toFixed(1))
// let index = 0
// let t = setInterval(function () {
//     console.log(index++)
//     if(index==5){
//         clearInterval(t)
//     }
// },1000)
// function Clock(h,m,s){
//     this.h = h
//     this.m = m
//     this.s = s
// }
// Clock.prototype.run = function(){
//     //方法1： 你可以用that来保存 Clock实例
// //    // this // Clock实例
// //     let that = this
// //     setInterval(function(){
// //         // this  // window
// //         that.s
// //     },1000)
//     setInterval(()=>{
//         this.s+=1
//         if(this.s>=60){
//             this.s=0
//             this.m+=1
//             if(this.m>=60){
//                 this.m=0
//                 this.h+=1
//                 if(this.h>=24){
//                     this.h=0
//                 }
//             }
//         }
//         console.log(`${this.h}:${this.m}:${this.s}`)
//     },1000)
// }
// let c = new Clock(10,20,30)
// c.run()

// function Clock(h, m, s) {
//     this.h = h;
//     this.m = m;
//     this.s = s;
// }
// Clock.prototype.run = function () {
//     setInterval(()=>{
//         this.s+=1
//         if (this.s > +60) {
//             this.s=0;
//             this.m+=1;
//             if (this.m >= 60) {
//                 this.m = 0
//                 this.h+=1
//                 if(this.h>=24){
//                     this.h = 0
//                 }
//             }
//         }
//         console.log(`${this.h}:${this.m}:${this.s}`)
//     },1000)
// }
// let  b =  new Clock(11,11,11)
// b.run()

// class Clock {
//     constructor(h,m,s){
//         this.h = h
//         this.m = m
//         this.s = s
//     }
// }
// Clock.prototype.run = function () {
//     setInterval(()=>{
//         this.s+=1
//         if (this.s > +60) {
//             this.s=0;
//             this.m+=1;
//             if (this.m >= 60) {
//                 this.m = 0
//                 this.h+=1
//                 if(this.h>=24){
//                     this.h = 0
//                 }
//             }
//         }
//         console.log(`${this.h}:${this.m}:${this.s}`)
//     },1000)
// }
// let  b =  new Clock(11,11,11)
// b.run()

