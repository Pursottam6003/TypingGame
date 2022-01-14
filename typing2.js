// The Java Script code for the Typing Game
// Selecting the  start button so that we will show the paragraph in the display block 
btn = document.getElementById('start');
// Selecting the input box from id of input
input = document.querySelector('input');
// selecting the article tag 
article = document.querySelector('article');
// Selecting the id to display the final message
greet=document.getElementById('final_message');
// message after the writing part is over to diplay the word
message=document.getElementById('message');
// Time taken by the user in writing so this need to displayed here by selecting 
time_taken = document.getElementById('duration');
// variables
let firstInput=false; //for first input
let words,quote;
let first=0,last=0;
let word_index = 0,correct_word=0,incorrect_word=0;

 
//creating a function that waits for start click 
// in this function we will try to append into a string from array of string and printing into the console
// creating a function on clicking input the function will execute
// in this function it is chcking that the words written from input box matches with word[i] or not
// if matches then it is highlighted with yellow colour otherwise it is red  colour
// creating the object

btn.addEventListener('click',function(){
   
    html=''
    div =document.getElementById('block');
    div.style.display='block';
   
    $.get('https://api.quotable.io/random?minLength=100&maxLength=160', function(response){

        quote=response['content']; // storing into quote variable
        words=quote.split(' '); //spliting it into string 
        let html=''; //a string that will store the whole words

        for(let i=0;i<words.length;i++)
        {  
            html +="<span id='w"+i+"'>"+words[i]+' '+"</span>"; 
        }

        for(let i=0;i<words.length;i++)
        {
            words[i]=words[i]+' '; // adding a space in each word 
        }
        console.log(html);  //checking purpose
        article.innerHTML =html;// assigning into the article tag and with the help of this will execute
    });
   
}) 


input.addEventListener('input',function(e){
    if(firstInput==false)
    {   input.value=''; //emptying the input box after the start click 
        const StartingTime= new Date(); //checking the date
        first=StartingTime.getTime();
        firstInput=true;
    }

    if(input.value==words[word_index].slice(0,input.value.length)) // checking character by character
    {   
        if((input.value==words[word_index]))
        { 
            document.getElementById('w'+word_index).style.backgroundColor='transparent';
            if(word_index+1<words.length)
            {
                document.getElementById('w'+(word_index+1)).style.backgroundColor='yellow'; //highlighting
            }
            word_index++;
            input.value=''; // after it will make the text box empty
            // incrementing the word index as it is already selected so it will delect the other line
            console.log(word_index);
            correct_word++;
        }
        input.style.backgroundColor = 'white'; //removing form highlited and changing into original color of div
        input.style.color='black';
        
        if(word_index==words.length)
        {   const EndingTime = new Date(); //storing the final time 
            end=EndingTime.getTime();
            message.style.display='block';
            greet.innerHTML="Congratulations you have sucessfully completed the task !";
           
            // calculating the final time
            duration=end-first;
            console.log(duration); //checking
            // converting into seconds

            var Totalseconds=((duration/1000));
            var seconds= Math.floor(Totalseconds %60);
            var minutes= Math.floor(Totalseconds/60);
       

            time_taken.innerHTML="Time Taken "+ minutes+":"+seconds;
            
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


// The end  if you want any changes please contribute





