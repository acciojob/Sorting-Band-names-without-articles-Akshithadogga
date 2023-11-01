//your code here
let arr=['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
int n=arr.length;
let non_article=[];
for(int i=0;i<n;i++){
	let str=arr[i];
	str=str.replace(/\bthe\b|\ban\b|\ba\b/gi,"");
	str=str.trim();
	non_article.push(str);
	
}
non_article.sort();
console.log(non_article);
