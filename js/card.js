alert();
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

                var name1=document.createElement("h2");
                name1.textContent="chitti srilakshmi";
                secchild1.appendChild(name1);

                secchild1.appendChild(document.createElement("hr"));

                var desg1=document.createElement("h3");
                desg1.textContent="student";
                secchild1.appendChild(desg1);

                var mail1=document.createElement("h3");
                mail1.textContent="chitti.sri600@gmail.com";
                secchild1.appendChild(mail1);

                var resume=document.createElement("a");
                resume.setAttribute("href","resume.html");
                resume.textContent="view resume";
                secchild1.appendChild(resume);


           var secchild2=document.createElement("section");
           secchild2.classList.add("child");
           secparent.appendChild(secchild2);
                   var imguser2=document.createElement("img");
                imguser2.setAttribute("src","images/user.png");
                imguser2.setAttribute("alt","#");
                secchild2.appendChild(imguser2);

                var name2=document.createElement("h2");
                name2.textContent="chitti srilakshmi";
                secchild2.appendChild(name2);

                secchild2.appendChild(document.createElement("hr"));

                var desg2=document.createElement("h3");
                desg2.textContent="student";
                secchild2.appendChild(desg2);

                var mail2=document.createElement("h3");
                mail2.textContent="chitti.sri600@gmail.com";
                secchild2.appendChild(mail2);

                var resume2=document.createElement("a");
                resume2.setAttribute("href","resume.html");
                resume2.textContent="view resume";
                secchild2.appendChild(resume2);
           var secchild3=document.createElement("section");
           secchild3.classList.add("child");
           secparent.appendChild(secchild3);
                   var imguser3=document.createElement("img");
                imguser3.setAttribute("src","images/user.png");
                imguser3.setAttribute("alt","#");
                secchild3.appendChild(imguser3);

                var name3=document.createElement("h2");
                name3.textContent="chitti srilakshmi";
                secchild3.appendChild(name3);

                secchild3.appendChild(document.createElement("hr"));
                
                var desg3=document.createElement("h3");
                desg3.textContent="student";
                secchild3.appendChild(desg3);

                var mail3=document.createElement("h3");
                mail3.textContent="chitti.sri600@gmail.com";
                secchild3.appendChild(mail3);

                var resume3=document.createElement("a");
                resume3.setAttribute("href","resume.html");
                resume3.textContent="view resume";
                secchild3.appendChild(resume3);



console.log(main);
