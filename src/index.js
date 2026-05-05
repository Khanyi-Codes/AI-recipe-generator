function displayRecipe(response){
 
    new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 1,
  }); 

}

function generateRecipe(event){
    event.preventDefault();

    let instrctionsInput  = document.querySelector("#user-instructions")
    let apiKey = "c64t23cdba0aa619b751fda43e0ao4bf";
    let prompt = `Create a recipe based on the ingredients given ${instrctionsInput.value}`
    let context = "You are a recipe creator and love to write simple and easy-to-follow recipes ,your mission is to generate a recipe in html tags and seperate each step with <br/> and signt the recipe with 'SheCodes AI' inside <strong> tags. Only write the recipe and nothing else. Do not add html comments Make sure to use the user instructions"
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`
    
    let recipeElement = document.querySelector("#recipe");
    recipeElement.classList.remove("hidden");
    recipeElement.innerHTML = `<span class="generating"> Generating recipe for ${instrctionsInput.value} ...</span>`;



    axios.get(apiUrl).then(displayRecipe);
    
       

}

let recipeFormElement = document.querySelector('#recipe-generator-form');

recipeFormElement.addEventListener("submit", generateRecipe);
