var a=[];
var size=prompt("enter the size of the array");
for(let i=0;i<size;i++){
	a[i]=parseInt(prompt("enter the"+(i+1)+"value"));
}
document.write("a="+a+"<br>"+"<br>");


var result=[];
var b=0;
for(let i=0;i<a.length;i++){
	for(let j=i+1;j<a.length;j++){
		if(a[i]<a[j]){
			b=a[i];
			a[i]=a[j];
			a[j]=b;
		}
	}
	result.push(a[i]);
}
document.write("descending order of an array is="+result+"<br>"+"<br>");