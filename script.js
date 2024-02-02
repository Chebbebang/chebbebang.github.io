
(function(d, src, c) { var t=d.scripts[d.scripts.length - 1],s=d.createElement('script');s.id='seaton_online_widget';s.async=true;s.src=src;s.onload=s.onreadystatechange=function(){var rs=this.readyState;if(rs&&(rs!='complete')&&(rs!='loaded')){return;}c(this);};t.parentElement.insertBefore(s,t.nextSibling);})(document,
    'https://getseat.net/api/v1/public/widget/74343E48.js',
    function(e){ SeatOn101892.createWidgets(); });
    
function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "chebbv2@gmail.com",
        Password : "1A935D645ECDE79AD77D5D885CED3C4BFAE9",
        To : 'chebbv2@gmail.com',
        From : document.getElementById("email").value,
        Subject : "Form Enquiry",
        Body : "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Note: " + document.getElementById("subject").value
    }).then(
      message => alert(message)
    );
}

