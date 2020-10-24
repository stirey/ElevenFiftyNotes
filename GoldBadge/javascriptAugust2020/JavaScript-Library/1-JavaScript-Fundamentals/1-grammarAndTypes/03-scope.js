/*  
SCOPE

1-grammarAndTypes
    03-scope.js
*/
/* 
What is scope?

JS has both LOCAL and GLOBAL scope
Global scope is what we write in the most left indented part of our file. Its available and ready from the "get go"
 */
//EXAMPLE 1
 var x = 12; //this is in the global scope because it exists anywhere

 function scope(){
     var x = 33; //this is a local scope becuase it only exists to this power tool(scope)
     console.log(x);
 }

 scope(); //logs 33
 console.log(x); //logs 12

 //EXAMPLE 2
 var x = 12; //globally scoped variable

 function scope(){
     x = 33; //this is variable reassignment
     console.log(x);
 }

 scope() //33
 console.log(x); //33

 //EXAMPLE 3
 var x = 1;

 function scope(){
     var x =2; 
     function scopeInner(){
         var x = 3;
         console.log(x); //3 this is the first console.log that gets run
     }
     scopeInner();  //inner scope
     console.log(x); //output is 2
 }
 scope();
 console.log(x); //1 this is the global scope

 //EXAMPLE 4 CONTRASTs WITH 5
 var x = 12;

 function scope(){
     var x = 33; //middle scope x
     if (true){
         let x = 45;//inner most scoped x, this is the first console.logged value 45
         console.log(x);//45 (innermost scope)
     }
     console.log(x);//33 (middlescope)
 }

 scope(); //this line uses our powertool, runs code from top to bottom
 console.log(x); //12

 //EXAMPLE 5 CONTRASTS WITH 4
 var x = 12;

 function scope(){
     var x = 33;
     if (true){
         var x = 45;
         console.log(x); //45
     }
     console.log(x); //45 -> var doesn't obey 'block' scope
 }

 scope();
 console.log(x);//12
