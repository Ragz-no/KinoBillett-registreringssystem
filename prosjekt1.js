
//IKKE EN DEL AV PROSJEKT1 html


function myFunction() {
    document.getElementById("demo").innerHTML = "Du har nå fjernet all informasjonen din";
    document.querySelector("#demo").style.color = "blue"
    document.getElementById('e-post').value = ''
    document.getElementById('lname').value = ''
    document.getElementById('fname').value = ''
    document.getElementById('tlf').value = ''
    document.getElementById('antall').value = ''
    document.getElementById('betaling').value = '' 
    
  }


function KjøpBilletter() {
  if (document.getElementById("antall").value == "") {document.getElementById("feilmelding_antall").innerHTML = "Du må skrive inn et her", document.querySelector("#feilmelding_antall").style.color = "red"}
  if (document.getElementById("fname").value == "")  {document.getElementById("feilmelding_fornavn").innerHTML = "Du må skrive noe her", document.querySelector("#feilmelding_etternavn").style.color = "red"}
  if (document.getElementById("lname").value == "")  {document.getElementById("feilmelding_etternavn").innerHTML = "Du må skrive noe her", document.querySelector("#feilmelding_tlf").style.color = "red"}
  if (document.getElementById("tlf").value == "")  {document.getElementById("feilmelding_tlf").innerHTML = "Du må skrive noe her", document.querySelector("#feilmelding_e_post").style.color = "red"}
  if (document.getElementById("e-post").value == "") {document.getElementById("feilmelding_e-post").innerHTML = "Du må skrive noe her", document.querySelector("#feilmelding_fornavn").style.color = "red"}
  
      
    
  
  else {
    
    document.getElementById("demo1").innerHTML = "Her er biletten din"
    document.querySelector("#demo1").style.color = "white"
    var table = document.getElementById("myTable");
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        cell1.innerHTML = document.getElementById("antall").value;
        cell2.innerHTML = a;
        cell3.innerHTML = b;
        cell4.innerHTML = c;
        cell5.innerHTML = d;
    
  }

    //liste.push(enbillett)
  }






 



