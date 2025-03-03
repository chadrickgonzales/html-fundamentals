//task 1
let book = {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    pages: 309,
    isRead: false
};

// Print the properties of the book
console.log(book.title);
console.log(book.author);
console.log(book.pages);
console.log(book.isRead);

console.log(book["title"]);
console.log(book["author"]);
console.log(book["pages"]);
console.log(book["isRead"]);


// Update properties of the books 
book.isRead = true;
book.genre = "Fantasy";

// Print all the books
console.log(book);



//task 2

let movies = [
    {
        title: "The Wolf of Wall Street",
        director: "Martin Scorsese",
        year: 2013
    },
    {
        title: "Inception",
        director: "Christopher Nolan",
        year: 2010
    },
    {
        title: "Titanic",
        director: "James Cameron",
        year: 1997
    }
];

//Prind 2nd movie title
console.log( `${movies[1].title}`);

//Add a new movie add the end of the list
movies.push({
    title: "Shutter Island",
    director: "Martin Scorsese",
    year: 2010
});

//Update the year of the first movie to 20``23.
movies[0].year = "20``23";

//print all of the movies
console.log (movies)


// Task 3
let student = {
    name: "John",
    age: 20,
    subjects: ["Math", "Science", "History"]
};

// Print the first subject
console.log(student.subjects[0]);

// Add a new subject
student.subjects.push("English");

// Print the updated student object
console.log(student);



//task 4
let recipe = {
    name: "Pasta Salad",
    ingredients: [
        { name: "Pasta", 
          quantity: "2 cups", isVegetarian: true 
        },

        { name: "Tomatoes", 
          quantity: "1 cup", 
          isVegetarian: true 
        },

        { name: "Cheese", 
          quantity: "1/2 cup", 
          isVegetarian: true 
        }
    ]
};

// Add a new ingredient
recipe.ingredients.push(
    { name: "Olive Oil", 
        quantity: "2 tbsp", 
        isVegetarian: true 
    }
    );

// Print the name of the second ingredient
console.log(recipe.ingredients[1].name);

// Print the entire recipe object
console.log(recipe);