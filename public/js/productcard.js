
  
  /*==== Progress Bar ====*/
  //Get elements from the DOM
  const progText = document.querySelector(".progText");
  const progress = document.querySelector(".progress");
  
  //Function for animating the progress bar
  function progressBar(percentage) {
    /*Set all to zero initially*/
    progText.innerText = 0;
    let count = 0;
    
    /*Set transition duration according to the percentage*/
    progress.style.transition = 50 * data[5][percentage] + "ms";
    /*Move the progress according to the number in the circle*/
    progress.style.bottom = data[5][percentage] - 110 + "%";
  
    //Function for counting up
    function updateCount() {
      /*Target progress value 
      (Where the progress counting should stop)*/
      const target = data[5][percentage];
  
      /*As long as the target number isn't reached*/ 
      if (count < target) {
        //Keep counting
        count++;
        //Display the count value on the page
        progText.innerText = count + "%";
        //Count Speed
        setTimeout(updateCount, 30); 
      //And when it is reached
      } else {
        //Display the final value on the page
        progText.innerText = target + "%";
      }
    }
    //Call the updateCount function initially
    updateCount();
  }
  
  //Run the progress bar initially
  progressBar(0);
  
  /*=== Options ===*/
  //Get elements from the DOM
  
  