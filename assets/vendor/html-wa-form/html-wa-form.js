$(document).on("click","#submit",(function(){var e=document.getElementById("email"),a="https://web.whatsapp.com/send";if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))a="whatsapp://send";if(""!=e.value){var n=a+"?phone=6282297117049&text=Halo saya ingin bertanya mengenai FAServ%0A%0A*Name* : "+$("#name").val()+"%0A*Email Address* : "+$("#email").val()+"%0A*Subject* : "+$("#subject").val()+"%0A*Message* : "+$("#message").val()+"%0A";window.open(n,"_blank")}}));
