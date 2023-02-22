const data = [
    {
        ques : "A complete graph can have",
        opt1 : "n2 spanning trees",
        opt2 : "nn - 2 spanning trees",
        opt3 : "nn - 3 spanning trees",
        opt4 : "nn - 4 spanning trees",
        ans : "n2 spanning trees"
    },
    {
        ques : "A complete graph can have2",
        opt1 : "n2 spanning trees",
        opt2 : "nn - 2 spanning trees",
        opt3 : "nn - 3 spanning trees",
        opt4 : "nn - 4 spanning trees",
        ans : "nn - 2 spanning trees"
    },
    {
        ques : "A complete graph can have3",
        opt1 : "n2 spanning trees",
        opt2 : "nn - 2 spanning trees",
        opt3 : "nn - 3 spanning trees",
        opt4 : "nn - 4 spanning trees",
        ans : "nn - 3 spanning trees"
    },
    {
        ques : "A complete graph can have4",
        opt1 : "n2 spanning trees",
        opt2 : "nn - 2 spanning trees",
        opt3 : "nn - 3 spanning trees",
        opt4 : "nn - 4 spanning trees",
        ans : "nn - 4 spanning trees"
    },
    {
        ques : "A complete graph can have",
        opt1 : "n2 spanning trees",
        opt2 : "nn - 2 spanning trees",
        opt3 : "nn - 3 spanning trees",
        opt4 : "nn - 4 spanning trees",
        ans : "n2 spanning trees"
    },
    {
        ques : "A complete graph can have2",
        opt1 : "n2 spanning trees",
        opt2 : "nn - 2 spanning trees",
        opt3 : "nn - 3 spanning trees",
        opt4 : "nn - 4 spanning trees",
        ans : "nn - 2 spanning trees"
    },
    {
        ques : "A complete graph can have3",
        opt1 : "n2 spanning trees",
        opt2 : "nn - 2 spanning trees",
        opt3 : "nn - 3 spanning trees",
        opt4 : "nn - 4 spanning trees",
        ans : "nn - 3 spanning trees"
    },
    {
        ques : "A complete graph can have4",
        opt1 : "n2 spanning trees",
        opt2 : "nn - 2 spanning trees",
        opt3 : "nn - 3 spanning trees",
        opt4 : "nn - 4 spanning trees",
        ans : "nn - 4 spanning trees"
    },
    {
        ques : "A complete graph can have",
        opt1 : "n2 spanning trees",
        opt2 : "nn - 2 spanning trees",
        opt3 : "nn - 3 spanning trees",
        opt4 : "nn - 4 spanning trees",
        ans : "n2 spanning trees"
    },
    {
        ques : "A complete graph can have2",
        opt1 : "n2 spanning trees",
        opt2 : "nn - 2 spanning trees",
        opt3 : "nn - 3 spanning trees",
        opt4 : "nn - 4 spanning trees",
        ans : "nn - 2 spanning trees"
    }
]
let result =0;
let count =0,flag,p;
questions(count);
function submit(){
    flag=0;
    p = false;
    let res = document.getElementsByName("ans");
    for(let i=0;i<res.length;i++){
        // console.log("hello");
        if(res[i].checked){
            // console.log(res[i].value);
            // console.log(data[count].ans);
            p=true;
            if(res[i].value==data[count].ans){
                // console.log(res[i].value);
                result+=1;
                flag = 1;
                break;
            }
        }
    }
    if(p==true){    
        if(flag==1){
            document.getElementById("status").innerHTML="<h4>correct</h4>";
            document.getElementById("status").setAttribute("class","sucess");
        }
        else if(flag==0){
            document.getElementById("status").innerHTML="<h4>Incorrect</h4>";
            document.getElementById("status").setAttribute("class","fail");
        }
        if(count<data.length){
            document.getElementById("btn").innerText="Next";
            document.getElementById("btn").setAttribute("onclick","next()");
            document.getElementById("btn").setAttribute("class","green");
        }
    }
    else{
        alert("plese select your choice");
        // questions(count);
        return;
    }
    
}

function next(){
    count+=1;
    // console.log(count);
    if(count>=data.length){
        out();
        document.getElementById("btn").innerText="Restart";
        document.getElementById("btn").setAttribute("onclick","restart()");
        document.getElementById("btn").setAttribute("class","blue");
    }
    else{
        let res = document.getElementsByName("ans");
        for(let i=0;i<res.length;i++){
            if(res[i].checked){
                res[i].checked=false;
            }
        }
        document.getElementById("status").innerHTML="";
        document.getElementById("status").setAttribute("class","empty");
        questions(count);
        document.getElementById("btn").innerText="Submit";
        document.getElementById("btn").setAttribute("onclick","submit()");
        document.getElementById("btn").setAttribute("class","yellow");
        p=true;
    }
}
function restart(){
    location.reload();
}
function out(){
    document.getElementById("top").innerText="Score: "+ result;
    document.getElementById("final").innerHTML="<h1>Answer Key</h1>";
    let u = document.getElementById("anssheet");
    for(let i=0;i<data.length;i++){
      let l = document.createElement("li");
      l.innerHTML=data[i].ques+"-";
      let a = document.createElement("a");
      a.innerHTML=data[i].ans;
      a.setAttribute("class","correct");
      l.appendChild(a);
      let b = document.createElement("br");
      u.appendChild(l);
      u.appendChild(b);  
    }
    let f = document.getElementById("t");
    f.remove();
    
}
    
function questions(count){
    document.getElementById("ques").innerText=data[count].ques;
    document.getElementById("opt1").innerText=data[count].opt1;
    document.getElementById("op1").setAttribute("value",data[count].opt1);
    document.getElementById("opt2").innerText=data[count].opt2;
    document.getElementById("op2").setAttribute("value",data[count].opt2);
    document.getElementById("opt3").innerText=data[count].opt3;
    document.getElementById("op3").setAttribute("value",data[count].opt3);
    document.getElementById("opt4").innerText=data[count].opt4;
    document.getElementById("op4").setAttribute("value",data[count].opt4);
}
