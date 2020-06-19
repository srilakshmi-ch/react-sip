
function jsonfilea(file1,callback1)
{

	var ajax=new XMLHttpRequest();
	ajax.overrideMimeType("application/json");
	ajax.open("Get",file1,true);
	ajax.onreadystatechange=function()
	{

		if(ajax.readyState===4 && ajax.status=="200")
		{
               callback1(ajax.responseText);

		}
	}
	ajax.send(null);

} 
 jsonfilea("json/jsonjsresume.json",function(text)
{
   var data=JSON.parse(text);
   console.log(data);
   getdetails(data.data);
   gethead1(data.resume[0]);
   gethead2(data.resume[1]);
   gethead3(data.resume[2]);
   gethead4(data.resume[3]);
   gethead5(data.resume[4]);


});
 var  main=document.getElementById("root");
      var secparent=document.createElement("section");
       secparent.setAttribute("id","parent");
       main.appendChild(secparent);
            var secchild1=document.createElement("section");
            secchild1.classList.add("child");
            secparent.appendChild(secchild1);
                var imguser=document.createElement("img");
                imguser.setAttribute("src","images/user.png");
                imguser.setAttribute("alt","#");
                secchild1.appendChild(imguser);
                function getdetails(details)
                {
                var name1=document.createElement("h2");

                name1.textContent=details.name;
                secchild1.appendChild(name1);
                secchild1.appendChild(document.createElement("hr"));

                var phoneno1=document.createElement("h3");
                phoneno1.textContent=details.phoneno;
                secchild1.appendChild(phoneno1);

                var mail1=document.createElement("h3");
                mail1.textContent=details.mail;
                secchild1.appendChild(mail1);

               

              }


        var secchildright=document.createElement("section");
        secchildright.classList.add("resume");
        secparent.appendChild(secchildright);
         function  gethead1(data)
         {
            var ha=document.createElement("h2");
            ha.textContent=data.head1;
            secchildright.appendChild(ha);
            var pa=document.createElement("p");
            pa.textContent=data.content1;
            secchildright.appendChild(pa);
            secchildright.appendChild(document.createElement("hr"));
        }
        function gethead2(data) {
        	// body...
        	var hb=document.createElement("h2");
        	hb.textContent=data.head2;
        	secchildright.appendChild(hb);
        	var strengths=document.createElement("ul");
        	var st1=document.createElement("li");
        	st1.textContent=data.st1;
        	strengths.appendChild(st1);
        	var st2=document.createElement("li");
        	st2.textContent=data.st2;
        	strengths.appendChild(st2);
        	var st3=document.createElement("li");
        	st3.textContent=data.st3;
        	strengths.appendChild(st3);
        	var st4=document.createElement("li");
        	st4.textContent=data.st4;
        	strengths.appendChild(st4);

        	secchildright.appendChild(strengths);

           secchildright.appendChild(document.createElement("hr"));
        }
        function gethead3(data) {
        	// body...

        	var hc=document.createElement("h2");
        	hc.textContent=data.head3;
           secchildright.appendChild(hc);
           var skills=document.createElement("ul");
           var sk1=document.createElement("li");
           sk1.textContent=data.sk1;
           skills.appendChild(sk1);
           var sk2=document.createElement("li");
           sk2.textContent=data.sk2;
           skills.appendChild(sk2);
           var sk3=document.createElement("li");
           sk3.textContent=data.sk3;
           skills.appendChild(sk3);
           var sk4=document.createElement("li");
           sk4.textContent=data.sk4;
           skills.appendChild(sk4);
           var sk5=document.createElement("li");
           sk5.textContent=data.sk5;
           skills.appendChild(sk5);
           secchildright.appendChild(skills);
           secchildright.appendChild(document.createElement("hr"));
         }
         function gethead4(data)
         {
         	console.log(data);
         	var hd=document.createElement("h2");
         	hd.textContent=data.head4;
         	secchildright.appendChild(hd);
         	var table1=document.createElement("table");
         	var tr1=document.createElement("tr");
         	  var th1=document.createElement("th");
         	  th1.textContent=data.tr1th1;
         	  tr1.appendChild(th1);
         	  var th2=document.createElement("th");
         	  th2.textContent=data.tr1th2;
         	  tr1.appendChild(th2);
         	  var th3=document.createElement("th");
         	  th3.textContent=data.tr1th3;
         	  tr1.appendChild(th3);
         	  var th4=document.createElement("th");
         	  th4.textContent=data.tr1th4;
         	  tr1.appendChild(th4);
              var th5=document.createElement("th");
         	  th5.textContent=data.tr1th5;
         	  tr1.appendChild(th5);
              table1.appendChild(tr1);

         	  var tr2=document.createElement("tr");
         	  var td1=document.createElement("td");
         	  td1.textContent=data.tr2td1;
         	  tr2.appendChild(td1);
         	  var td2=document.createElement("td");
         	  td2.textContent=data.tr2td2;
         	  tr2.appendChild(td2);
         	  var td3=document.createElement("td");
         	  td3.textContent=data.tr2td3;
         	  tr2.appendChild(td3);
         	  var td4=document.createElement("td");
         	  td4.textContent=data.tr2td4;
         	  tr2.appendChild(td4);
         	  var td5=document.createElement("td");
         	  td5.textContent=data.tr2td5;
         	  tr2.appendChild(td5);
         	  table1.appendChild(tr2);

         	   var tr3=document.createElement("tr");
         	  var td31=document.createElement("td");
         	  td31.textContent=data.tr3td1;
         	  tr3.appendChild(td31);
         	  var td32=document.createElement("td");
         	  td32.textContent=data.tr3td2;
         	  tr3.appendChild(td32);
         	  var td33=document.createElement("td");
         	  td33.textContent=data.tr3td3;
         	  tr3.appendChild(td33);
         	  var td34=document.createElement("td");
         	  td34.textContent=data.tr3td4;
         	  tr3.appendChild(td34);
         	  var td35=document.createElement("td");
         	  td35.textContent=data.tr3td5;
         	  tr3.appendChild(td35);
         	  table1.appendChild(tr3);

         	  var tr4=document.createElement("tr");
         	  var td41=document.createElement("td");
         	  td41.textContent=data.tr4td1;
         	  tr4.appendChild(td41);
         	  var td42=document.createElement("td");
         	  td42.textContent=data.tr4td2;
         	  tr4.appendChild(td42);
         	  var td43=document.createElement("td");
         	  td43.textContent=data.tr4td3;
         	  tr4.appendChild(td43);
         	  var td44=document.createElement("td");
         	  td44.textContent=data.tr4td4;
         	  tr4.appendChild(td44);
         	  var td45=document.createElement("td");
         	  td45.textContent=data.tr4td5;
         	  tr4.appendChild(td45);
         	  table1.appendChild(tr4);
            
                 
         	  secchildright.appendChild(table1);
         	  secchildright.appendChild(document.createElement("hr"));

         }        

         function gethead5(data) {
         	// body...
         	var he=document.createElement("h2");
         	he.textContent=data.head5;
         	secchildright.appendChild(he);
         	var hobbies=document.createElement("ul");
         	var hb1=document.createElement("li");
         	hb1.textContent=data.hb1;
         	hobbies.appendChild(hb1);
         	var hb2=document.createElement("li");
         	hb2.textContent=data.hb2;
         	hobbies.appendChild(hb2);
         	var hb3=document.createElement("li");
         	hb3.textContent=data.hb3;
         	hobbies.appendChild(hb3);
         	secchildright.appendChild(hobbies);
         	secchildright.appendChild(document.createElement("hr"));
         	
         	
         }



