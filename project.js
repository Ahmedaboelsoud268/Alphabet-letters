 generate = document.getElementById("myBtn")
 var characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
 display_button = document.getElementById("div_buttons");
	dis_image = document.getElementById("img_ex_but");
generate.addEventListener("click", function(event){

	//local storage for generate!!!!
	 x_count =Number(localStorage.getItem('num_button_generate'));
	 localStorage.setItem("generate"+" "+(x_count),["target"+JSON.stringify(event.target),"type"+JSON.stringify(event.type),"data"+new Date().toLocaleTimeString()]);					
	 localStorage.setItem('num_button_generate',++x_count)
	

	   
	text_input = document.getElementById("Text_input").value;
	
	
	if (text_input == ''){
		alert( 'Please enter number between 1 to 26 !');
		display_button.innerHTML='';
		dis_image.src='';
	}else if (text_input < 1 ){
		alert('Please type in number more than 0 !');
		display_button.innerHTML='';
		dis_image.src='';
	}
	else if (text_input > 26){
		alert('Please type in number less than 27 !');
		display_button.innerHTML='';
		dis_image.src='';
	}
	
	else{		
		//  this prevent the itration occuring	
		display_button.innerHTML='';
		Btns_text = [];
		var i = 0;
		while(i < parseInt(text_input)){
			rand_char = characters.charAt(Math.floor(Math.random() * characters.length));
			if (!Btns_text.includes(rand_char)){
				Btns_text[i++]=rand_char;
				let btn = document.createElement("button");	
				//this fetch the value of random characters and put its as buttons
				btn.innerHTML = rand_char;
				//this refers to id of image <**>
				btn.id = rand_char;
				//btn.classList.add('btn');
				display_button.appendChild(btn);
				btn.addEventListener("click", 
				function(event){
                   //local storage for button of image
					 y_count = Number(localStorage.getItem('num_button_letters'))  
					 localStorage.setItem(btn.id+" "+(y_count),["target"+JSON.stringify(event.target),"type"+JSON.stringify(event.type),"data"+new Date().toLocaleTimeString()]);					
					 localStorage.setItem('num_button_letters',++y_count)
                    //<**>
					dis_image.src = "\\asd\\"+ btn.id + ".jpg";
					dis_image.style.width = '300px';	
					dis_image.style.height = '300px';
				});
			}
		}
	}
});
window.addEventListener("load",function(event){

	var loadcount=Number(localStorage.getItem("loadcount"));
	localStorage['load '+loadcount]="type"+JSON.stringify(event.type)+"target"+JSON.stringify(event.target)+"date"+new Date();
	loadcount++;
	localStorage.setItem("loadcount",loadcount)
  });  
  window.addEventListener("unload",function(event){
	
	var unloadcount=Number(localStorage.getItem("unloadcount"));
	localStorage['unload '+unloadcount]="type"+JSON.stringify(event.type)+"target"+JSON.stringify(event.target)+"date"+new Date();
	unloadcount++;
	localStorage.setItem("unloadcount",unloadcount)
});
