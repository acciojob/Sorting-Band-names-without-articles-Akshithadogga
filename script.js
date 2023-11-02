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
let ul=doucment.createElement('ul');
ul.setAttribute("id","band");
document.body.appendChild(ul);
for(let i=0;i<non_article.length;i++){
	let li=document.createElement('li');
	ul.appeendChild(li);
	li.innerHTML+=non_article[i];
}

console.log(non_article);
