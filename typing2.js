
// The paragraph that we will use to write as reference for typing  
let firstInput=false;
//let quote="The perennial feature in many a high school syllabus, Shirley Jackson's best-known short story clinically details an unusual ritual that takes place in a small town."

// separating the words from a big string into spaces and storing into array of string  
//word=quote.split(' ');
//creating the variable for storing the values of initial point in seconds
let words,quote;
let first=0,last=0;

//trying to select the element by id and assigning into btn variable
btn = document.getElementById('start');

//creating a function that waits for start click 
// in this function we will try to append into a string from array of string and printing into the console
btn.addEventListener('click',function(){
    article = document.querySelector('article');
    html=''
    div =document.getElementById('block');
    div.style.display='block';
   
    $.get('https://api.quotable.io/random?tags=technology|health|civil-rights,famous-quotes', function(response){

        quote=response['content'];
        words=quote.split(' ');
        let html=''; 

        for(let i=0;i<words.length;i++)
        {  
            html +="<span id='w"+i+"'>"+words[i]+' '+"</span>"; 
        }

        for(let i=0;i<words.length;i++)
        {
            words[i]=words[i]+' ';
        }
        article=document.querySelector('article');

        console.log(html);  
        article.innerHTML =html;
    });
   
}) 

//selecting the input box from id of input
input = document.querySelector('input');

// initialising the variable 
let word_index = 0,correct_word=0,incorrect_word=0,previous_word=-1;
// creating a function on clicking keyup the function will execute
// in this function it is chcking that the words written from input box matches with word[i] or not
// if matches then it is highlighted with yellow colour otherwise it is red  colour
// creating the object

input.addEventListener('input',function(e){
    if(firstInput==false)
    {
        const StartingTime= new Date();
        first=StartingTime.getTime();
        firstInput=true;
    }
    
    console.log(first);
    console.log("hello");
   
    
    if(input.value==words[word_index].slice(0,input.value.length))
    {   
        if((input.value==words[word_index]))
        {   console.log('hola');
            document.getElementById('w'+word_index).style.backgroundColor='transparent';
            if(word_index+1<words.length)
            {
                document.getElementById('w'+(word_index+1)).style.backgroundColor='yellow'; 
            }
            word_index++;
            input.value=''; // after it will make the text box empty
            // incrementing the word index as it is already selected so it will delect the other line
            console.log(word_index);
            correct_word++;
        }
        input.style.backgroundColor = 'white';
        input.style.color='black';
        

        if(word_index==words.length)
        {   const EndingTime = new Date(); //storing the final time 
            end=EndingTime.getTime();
            message.style.display='block';
            greet=document.getElementById('final_message');
            greet.innerHTML="Congratulations you have sucessfully completed the task !";
            message=document.getElementById('message');
            // calculating the final time
            duration=end-first;
            console.log(duration);
            // converting into seconds


            var Totalseconds=((duration/1000));
            var seconds= Totalseconds %60;
            var minutes= Math.floor(Totalseconds/60);
     
          
  
            time_taken = document.getElementById('duration');
            time_taken.innerHTML="Time Taken "+ minutes+":"+seconds;

            console.log(minutes);
            console.log(seconds);
            
            accuracy=document.getElementById('Accuracy');
            var aggregade=(((quote.length-incorrect_word)/quote.length)*100).toFixed(2);
            accuracy.innerHTML="Accuracy: "+aggregade;
        }

    }

    else 
    {   // changing the background of input box as red as it is not matched with consecutive 
        incorrect_word++; 
        input.style.backgroundColor = 'red';
        input.style.color='white';
    }
    
});




