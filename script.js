//your code here
let arr=['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let n=arr.length;
let non_article=[];
for(let i=0;i<n;i++){
	let str=arr[i];
	str=str.replace(/\bThe\b|\bAn\b|\bA\b/gi,"");
	str=str.trim();
	non_article.push(str);
	
}
non_article.sort();
let ul=document.getElementById('band');
document.body.appendChild(ul);


for(let i=0;i<non_article.length;i++){
	let li=document.createElement('li');
	li.innerHTML=li.innerHTML+non_article[i];
	ul.appendChild(li);
}

console.log(non_article);
