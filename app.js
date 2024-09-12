var taskdata = [];
	var iid=1;
	function add(){
	var sTask=document.getElementById("task").value;
	sTask=sTask.trim();
	
	if(sTask.length!=0){
	if(!taskdata.includes(sTask)){
	taskdata.push(sTask);
	var ss=document.getElementById("taskList");
	//var li=document.createElement('li');
	//li.textContent=sTask;
	//taskList.appendChild(li);
	ss.innerHTML+="<p id="+iid+"> <button onclick='dele(this)' id="+iid+">X</button> "+ sTask+"</p>";
	iid++;
	document.getElementById("task").value="";
	
	
	}
	else{
	alert("Task is already in List");
	}
	}
	else
	{
	alert("Please Enter Something...");
	}
	}
	
	function dele(itm){
		//var  lm=itm.parentNode.parentNode;
		//var ul=lm.parentNode;
		//ul.removeChild(lm);
		
		const box=document.getElementById(itm.id);
		box.remove();
	}