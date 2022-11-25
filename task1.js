//json in  all for loops

var students = [
  {
    "name" : "abcd" ,
    "regNo" : "123456" ,
    "mail" : "abcd@123"
  },
   {
      "name" : "efgh" ,
    "regNo" : "78910" ,
    "mail" : "efgh@123"
       }
 ];

//for loop :

for(var i = 0; i<students.length ; i++)
{
  console.log(i,students[i].name , students[0].regNo);
}

                                                           // output : 
                                                           // 0 'abcd' '123456'
                                                           // 1 'efgh' '123456'

//for in 

for(var index in students)
{
console.log(index,students[index].mail);  
}
                                                            //output:
                                                            //0 abcd@123
                                                            //1 efgh@123
//for of

for(var x of students)
{
console.log(x.regNo+" , "+x.mail);
}
                                                           //output:
                                                           // 123456 , abcd@123
                                                           //  78910 , efgh@123

//forEach

students.forEach((element,index) => { console.log(index,element)});

                                                                 //output:
                                                                 //0 { name: 'abcd', regNo: '123456', mail: 'abcd@123' }
                                                                 //1 { name: 'efgh', regNo: '78910', mail: 'efgh@123' }

