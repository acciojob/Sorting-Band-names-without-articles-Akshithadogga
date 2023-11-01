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
let names=document.getElementsByTagName('UL')[0];
names.getElementsByTagName("li")[0].inner HTML=non_article;
console.log(non_article);
