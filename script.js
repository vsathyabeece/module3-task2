var container = document.createElement("div");
container.className="container";
var row =document.createElement("div");
row.className="row";
var column1 = document.createElement("div");
//column1.className="col-sm-4";
column1.setAttribute("class","col-sm-4");
//column1.setAttribute("class","main");
row.append(column1);
container.append(row);

function labels(tagname,attrname,attrvalue,content){
    var ele =document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    //ele.setAttribute(attrname1,attrvalue1);
    ele.innerHTML = content;
    return ele;
}

function inputs(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2,attrname3,attrvalue3){
    var ele1=document.createElement(tagname);
    ele1.setAttribute(attrname,attrvalue);
    ele1.setAttribute(attrname1,attrvalue1);
    ele1.setAttribute(attrname2,attrvalue2);
    ele1.setAttribute(attrname3,attrvalue3);
    return ele1;

}
function radio(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2){
    var ele3=document.createElement(tagname);
    ele3.setAttribute(attrname,attrvalue);
    ele3.setAttribute(attrname1,attrvalue1);
    ele3.setAttribute(attrname2,attrvalue2);
    return ele3;
}

function linebreak(tagname){
    var br = document.createElement(tagname);
    return br;
}

function heading(tagname,content){
    var ele = document.createElement(tagname);
    ele.innerHTML =content;
    return ele;
}
function buttons(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2,attrname3,attrvalue3){
    var ele2=document.createElement(tagname);
    ele2.setAttribute(attrname,attrvalue);
    ele2.setAttribute(attrname1,attrvalue1);
    ele2.setAttribute(attrname2,attrvalue2);
    ele2.setAttribute(attrname3,attrvalue3);
    
    return ele2;
}
var column2=document.createElement("div");
column2.className="col-sm-8";
row.append(column2);
//table.append(column2);

function tables(tagname,attrname,attrvalue){
    var tab =document.createElement(tagname);
    tab.setAttribute(attrname,attrvalue);
return tab;

 }
 function head(tagname){
    var he =document.createElement(tagname);
    return he;
 }
 function rows(tagname){
    var ro =document.createElement(tagname);
    return ro;
 }
 function theads(tagname,content){
    var column=document.createElement(tagname);
    //column.setAttribute(attrname,attrvalue);
    column.innerHTML=content;
    return column;
 }
 
 function p1(tagname,attrname,attrvalue){
    var p= document.createElement(tagname);
    p.setAttribute(attrname,attrvalue);
    return p;
 }



var h = heading("h3","Form Submission");
var br=linebreak("br");
var first =labels("label","for","first","First Name");
var br1=linebreak("br");
var input =inputs("input","type","text","name","first","id","first","placeholder","First Name");
var br2=linebreak("br");
var last =labels("label","for","last","Last Name");
var br3=linebreak("br");
var input2 =inputs("input","type","text","name","last","id","last","placeholder","Last Name");
var br4=linebreak("br");
var address1 =labels("label","for","address","Address Line 1:");
var br5=linebreak("br");
var input3 =inputs("input","type","text","name","address","id","address","placeholder","Address Line 1");
var br6=linebreak("br");
//var address2 =labels("label","for","address1","Address Line 2:");
//var br7=linebreak("br");
//var input4 =inputs("input","type","text","name","address1","id","address1","placeholder","Address Line 2");
//var br8=linebreak("br");
var pin =labels("label","for","pin","PIN:");
var br9=linebreak("br");
var input5 =inputs("input","type","number","name","pin","id","pin","placeholder","PIN");
var br10=linebreak("br");
var gender=labels("label","for","gender","Gender:");
var br11=linebreak("br");
var input6=radio("input","type","radio","name","gender","value","male");
var male=labels("label","for","male","Male");
var input7=radio("input","type","radio","name","gender","value","female");
var female=labels("label","for","female","Female");
var br8=linebreak("br");
var checkbox=labels("label","for","check","Choice of Food:(must choose atleast 2 out of 5 options)");
var br13=linebreak("br");
var input8=inputs("input","type","checkbox","id","north indian","name","check","value","north indian");
var checkbox1=labels("label","for","north indian"," North Indian");
var br14=linebreak("br");
var input9=inputs("input","type","checkbox","id","south indian","name","check","value","south indian");
var checkbox2=labels("label","for","south indian","South Indian");
var br15=linebreak("br");
var input10=inputs("input","type","checkbox","id","chinese","name","check","value","chinese");
var checkbox3=labels("label","for","chinese","Chinese");
var br16=linebreak("br");
var input11=inputs("input","type","checkbox","id","japanese","name","check","value","japanese");
var checkbox4=labels("label","for","japanese","Japanese");
var br17=linebreak("br");
var input12=inputs("input","type","checkbox","id","sea food","name","check","value","sea food");
var checkbox5=labels("label","for","sea food","Sea Food");
var br18=linebreak("br");
var state =labels("label","for","state","State:");
var br19=linebreak("br");
var input13 =inputs("input","type","text","name","state","id","state","placeholder","State");
var br20=linebreak("br");
var country =labels("label","for","country","Country:");
var br21=linebreak("br");
var input14 =inputs("input","type","text","name","country","id","country","placeholder","Country");
var br22=linebreak("br");
var button=buttons("input","type","button","value","Submit","onclick","Addrow()","class","main");

var h1=heading("h3","Temporary Database");
var table=tables("table","id","show");
var head1=head("thead");
var row1=rows("tr");
var th1=theads("th","First Name");
var th2=theads("th","Last Name");
var th3=theads("th","Address");
var th4=theads("th","Pin code");
var th5=theads("th","Gender");
var th6=theads("th","Food");
var th7=theads("th","State");
var th8=theads("th","Country");
var body=head("tbody");






column1.append(h,br,first,br1,input,br2,last,br3,input2,br4,address1,br5,input3,br6,
    pin,br9,input5,br10,gender,br11,input6,male,input7,female,br8,checkbox,br13,input8,checkbox1,br14,
    input9,checkbox2,br15,input10,checkbox3,br16,input11,checkbox4,br17,input12,checkbox5,br18,state,br19,input13,
    br20,country,br21,input14,br22,button);

     row1.append(th1,th2,th3,th4,th5,th6,th7,th8,body);
     head1.append(row1)
     table.append(head1);
     column2.append(h1,table);
     document.body.append(container);

     var list1 = [];
     var list2 = [];
     var list3 = [];
     var list4 = [];
     var list5 = [];
     var list6= [];
     var list7=[];
     var list8=[];
     
     var x=1;
     n=1;
     function Addrow() {
       var Addrown = document.getElementById('show');
       var NewRow = Addrown.insertRow(n);

       list1[x] =document.getElementById("first").value;
       list2[x] =document.getElementById("last").value;
       list3[x] =document.getElementById("address").value;
       list4[x] =document.getElementById("pin").value;
       list5[x] =document.querySelector('input[name="gender"]:checked').value;let checkboxes = document.querySelectorAll('input[name="check"]:checked');
            let list6= [];
            
            checkboxes.forEach((checkbox) => {
                list6.push(checkbox.value);
                
            });
           
            list6[x]=list6.join(", ");
        
        list7[x]=document.getElementById("state").value;
        list8[x]=document.getElementById("country").value;

       var cel1 = NewRow.insertCell(0);
       var cel2 = NewRow.insertCell(1);
       var cel3 = NewRow.insertCell(2);
       var cel4 = NewRow.insertCell(3);
       var cel5 = NewRow.insertCell(4);
       var cel6 = NewRow.insertCell(5);
       var cel7 = NewRow.insertCell(6);
       var cel8 = NewRow.insertCell(7);



cel1.innerHTML = list1[x];
cel2.innerHTML = list2[x];
cel3.innerHTML = list3[x];
cel4.innerHTML = list4[x];
cel5.innerHTML = list5[x];
cel6.innerHTML = list6[x];
cel7.innerHTML = list7[x];
cel8.innerHTML = list8[x];

x++;
n++;
}
     
     




