// API REQUEST

// ----------------------------------- --------------------------------------


/* GLOBAL VARIABLES */
const search = document.getElementById("search"),
submit = document.getElementById("submit"),
random = document.getElementById("random"),
mealsEl = document.getElementById("meals"),
resultHeading = document.getElementById("result-heading"),
single_mealEl = document.getElementById("single-meal");

// ----------------------------------- --------------------------------------

/* FUNCTIONS */
const searchMeal = (e) => {
    e.preventDefault();

    // clear single meal
    single_mealEl.innerHTML = "";

    // get search term
    const term = search.value;

    // check for empty
    if (term.trim()) {
        fetch( `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
            .then(res => res.json())
            .then(data => {
                resultHeading.innerHTML = `<h2>Search results for ${term}:</h2>`;

                if(data.meals === null) {
                    resultHeading.innerHTML = "<p>There are no search results. Try again!</p>"
                } else {
                    mealsEl.innerHTML = data.meals.map(meal => `
                        <div class="meal">
                            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
                            <div class="meal-info" data-mealID="${meal.idMeal}">
                                <h3>${meal.strMeal}</h3>
                            </div>
                        </div>
                    `
                    )
                    .join('');
                }
            });
            search.value = '';
        } else {
        alert("Please enter a search term")
    }
    
}



// ----------------------------------- --------------------------------------



/* EVENT LISTENERS */
submit.addEventListener("submit", searchMeal)

mealsEl.addEventListener('click', e => {
    console.log(e.path);
    const mealInfo = e.path.find((item) => {
        if (item.classList) {
            return item.classList.contains('meal-info');
        } else {
            return false;
        }
    })

    if (mealInfo) {
        const mealID = mealInfo.getAttribute('data-mealid');
        console.log(mealID);
    }
})

// ----------------------------------- --------------------------------------



/* FUNCTION INVOCATIONS */

// ----------------------------------- --------------------------------------