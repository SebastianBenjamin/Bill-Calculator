var sl=1; var code = 100;
var a;

const a_code=[];
const a_name=[];
const a_mob=[];
const a_ema=[];
const a_dep=[];
const a_des=[];
const a_salary=[];
const a_gen=[];
                                                               
const a_e_basic=[];
const a_e_HRA=[];
const a_e_conv=[];
const a_e_pa=[];
const a_d_pf=[];
const a_d_ins=[];
const a_d_pt=[];
const a_d_tds=[];
const a_earn=[];
const a_dedu=[];
const a_nesalary=[];
                                                                  
function SD() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var mob = document.getElementById("mobile").value;
  var ema = document.getElementById("mail").value;
  var dep = document.getElementById("dept").value;
  var des = document.getElementById("desg").value;
  var salary = document.getElementById("salary").value;
  var Name = fname +" "+ lname;
  var gender;
  var gen = document.getElementsByName("gender");
  var res =document.getElementById("result");
  
  for (i = 0; i < gen.length; i++) {
    if (gen[i].checked) {
      gender = gen[i].value;
    }
  }

  if (fname === "") {
    alert("Please fill the First Name field!");
    return 0;
} else if (lname === "") {
    alert("Please fill the Last Name field!");
    return 0;
} else if (mob === "") {
    alert("Please fill the Mobile Number field!");
    return 0;
} else if (ema === "") {
    alert("Please fill the Email field!");
    return 0;
} else if (dep === "0") {
    alert("Please select a Department!");
    return 0;
} else if (des === "0") {
    alert("Please select a Designation!");
    return 0;
} else if (salary === "") {
    alert("Please fill the Salary field!");
    return 0;
} else if (!gender) {
    alert("Please select a Gender!");
    return 0;
}

  document.getElementById("result").style.display = "block";
  document.getElementById("nodata").style.display = "none";

 
  var s_e_basic = salary * 0.45;
  var s_e_hra = salary * 0.15;
  var s_e_conv = salary * 0.08;
  var s_e_pa = salary * 0.32;
  var earnings = s_e_basic + s_e_conv + s_e_hra +s_e_pa;

  var s_d_pf = s_e_basic * 0.15;
  var s_d_ins = s_e_basic * 0.20;
  const s_d_pt = 100;
  var s_d_tds=0;

  if (s_e_basic >= 50000){
 s_d_tds = s_e_basic * 0.15;
  }
  else{
 s_d_tds = 0;
  }
  var deductions= (s_d_pf + s_d_ins + s_d_tds+s_d_pt);

  var net_salary= earnings - deductions;

a_code.push(code);
a_name.push(Name);
a_mob.push(mob);
a_ema.push(ema);
a_gen.push(gender);
a_dep.push(dep);
a_des.push(des);
a_salary.push(salary);
a_e_basic.push(s_e_basic);
a_e_HRA.push(s_e_hra);
a_e_conv.push(s_e_conv);
a_e_pa.push(s_e_pa);
a_d_pf.push(s_d_pf);
a_d_ins.push(s_d_ins);
a_d_pt.push(s_d_pt);
a_d_tds.push(s_d_tds);
a_earn.push(earnings);
a_dedu.push(deductions);
a_nesalary.push(net_salary);


  res.innerHTML +=
  "<tr>"+
  "<td>"+sl+"</td>"+
  "<td>"+code+"</td>"+
  "<td>"+Name+"</td>"+
  "<td>"+mob+"</td>"+
  "<td>"+ema+"</td>"+
  "<td>"+gender+"</td>"+
  "<td>"+dep+"</td>"+
  "<td>"+des+"</td>"+
  
  "<td>"+"<button onclick="+"show("+sl+");"+">view"+"</button>"+"</td>"+
  "</tr>";
code=code+1;  sl=sl+1; 


}

function show(a){
   a= a-1;
  
  document.getElementById("modal").style.display="block";
  // document.getElementById("modal_contents").style.display="block";
  // document.getElementById("modal_table").style.display="block";
  // alert("aa");
var t_pe=document.getElementById("t_personal");
var t_ea =document.getElementById("t_earn");
var t_de =document.getElementById("t_ded");
var t_pa =document.getElementById("t_pay");
// alert("0");
name_h.innerHTML=a_name[a].toUpperCase();;
 t_pe.innerHTML =
 "<tr><th>CODE</th><th>MOBILE</th><th>EMAIL</th><th>GENDER</th><th>DEPARTMENT</th><th>DESIGNATION</th><th>SALARY</th></tr>"+
" <tr>"+
 "<td>" +a_code[a]+"</td>"+
 "<td>" +a_mob[a]+"</td>"+
 "<td>" +a_ema[a]+"</td>"+
 "<td>" +a_gen[a]+"</td>"+
 "<td>" +a_dep[a]+"</td>"+
 "<td>" +a_des[a]+"</td>"+
 "<td>" +a_salary[a]+"</td>"+
"</tr>";
// alert("1");
t_ea.innerHTML =
"<tr><th>BASIC PAY</th><th>HRA</th><th>CONVEYANCE</th><th>PROJECT ALLOWANCES</th></tr>"+
" <tr>"+
 "<td>" +a_e_basic[a]+"</td>"+
 "<td>" +a_e_HRA[a]+"</td>"+
 "<td>" +a_e_conv[a]+"</td>"+
 "<td>" +a_e_pa[a]+"</td>"+
"</tr>";
// alert("2");
t_de.innerHTML =
" <tr><th>PF</th><th>INSURANCE</th><th>PROFESSIONAL TAX</th><th>TDS</th></tr>"+
" <tr>"+
 "<td>" +a_d_pf[a]+"</td>"+
 "<td>" +a_d_ins[a]+"</td>"+
 "<td>" +a_d_pt[a]+"</td>"+
 "<td>" +a_d_tds[a]+"</td>"+
"</tr>";
// alert("3");
t_pa.innerHTML =
"<tr><th>TOTAL EARNINGS</th><th>TOTAL DEDUCTIONS</th><th>MONTHLY SALARY</th></tr>"+
" <tr>"+
 "<td>" +a_earn[a]+"</td>"+
 "<td>" +a_dedu[a]+"</td>"+
 "<td>" +a_nesalary[a]+"</td>"+
"</tr>";
// alert("4");
}
var button=document.getElementsByClassName("close")[0];
button.onclick = function (){
  document.getElementById("modal").style.display="none";
  document.getElementById("modal_contents").style.display="none";
  document.getElementById("modal_table").style.display="none";
}


