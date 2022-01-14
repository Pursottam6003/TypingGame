let btn=document.getElementById('start');
btn.addEventListener('click',function(){
    $.get('https://api.quotable.io/random?tags=technology,famous-quotes', function(response){

        quote=response['content'];
        words=quote.split(' ');
        let html=''; 

        for(let i=0;i<words.length;i++)
        {
            html +="<span id='w"+i+"'>"+words[i]+' '+"</span>"; 
        }
        article=document.querySelector('article');

        console.log(html);  
        article.innerHTML =html;
    });
     
    

})