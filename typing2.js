
// The paragraph that we will use to write as reference for typing  

let quote="The perennial feature in many a high school syllabus, Shirley Jackson's best-known short story clinically details an unusual ritual that takes place in a small town."

// separating the words from a big string into spaces and storing into array of string  
word=quote.split(' ');
//creating the variable for storing the values of initial point in seconds
let first,last;
// creating the object
const StartingTime= new Date();
//trying to select the element by id and assigning into btn variable
btn = document.getElementById('start');

//creating a function that waits for start click 
// in this function we will try to append into a string from array of string and printing into the console
btn.addEventListener('click',function(){
    article = document.querySelector('article');
    html=''
    div =document.getElementById('block');
    div.style.display='block';
   
    // appending into span so that we will try to highlight the words 
    for (let i=0;i<word.length;i++)
    {
        html +="<span id='w"+i+"'>"+word[i]+' '+"</span>"; 
    }
    console.log(html);
    article.innerHTML= html;
   
}) 

//selecting the input box from id of input
input = document.querySelector('input');

// initialising the variable 
let word_index = 0,correct_word=0,incorrect_word=0,previous_word=-1;
// creating a function on clicking keyup the function will execute
// in this function it is chcking that the words written from input box matches with word[i] or not
// if matches then it is highlighted with yellow colour otherwise it is red  colour
input.addEventListener('keyup',function(e){
    first=StartingTime.getTime();
    console.log("hello");
    if(input.value==word[word_index].slice(0,input.value.length))
    {   
        if(input.value.length==word[word_index].length)
        {     
            document.getElementById('w'+word_index).style.backgroundColor='transparent';
            if(word_index+1<word.length)
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
        

        if(word_index==word.length)
        {   const EndingTime = new Date(); //storing the final time 
            end=EndingTime.getTime();
            message.style.display='block';
            greet=document.getElementById('final_message');
            greet.innerHTML="Congratulations you have sucessfully completed the task !";
            message=document.getElementById('message');
            // calculating the final time
            duration=end-first;
            // converting into seconds
            
            let minutes=Math.floor(duration/60000);
            let seconds=((duration %60000)/1000).toFixed(0);
            time_taken = document.getElementById('duration');
            time_taken.innerHTML="Time Taken "+ minutes+":"+seconds;
            
            accuracy=document.getElementById('Accuracy');
            let aggregade=(((quote.length-incorrect_word)/quote.length)*100).toFixed(2);
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




