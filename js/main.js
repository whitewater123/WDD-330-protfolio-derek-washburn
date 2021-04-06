const links = [
    {
        label: "Week1 Notes",
        url: "week1/helloWorld.html"
        
    },
    {
        label: "Week 2 Team Activity",
        url: "week2/w02TeamActivity.html",
    },
    {
        label: "Week3 Notes",
        url: "week3/w03Exercises.html"
        
    },
    {
        label: "Week 3 Team Activity",
        url: "week3/w03TeamActivity.html",
    },
    {
        label: "Week4 Notes",
        url: "week4/w04Examples.html"
        
    },
    {
        label: "Week 4 Team Activity",
        url: "week4/w04TeamActivity.html",
    },
    {
        label: "Week5 Notes",
        url: "week5/w05Exercises.html"
        
    },
    {
        label: "Week 5 Team Activity",
        url: "week5/w05TeamActivity.html",
    },
    {
        label: "Week7 Notes",
        url: "week7/w07Exercises.html"
        
    },
    {
        label: "ToDo App",
        url: "todo-application/index.html"
        
    },
    {
        label: "Week8 Notes",
        url: "week8/w08Examples.html"
        
    },
    {
        label: "Week 8 Team Activity",
        url: "week8/w08TeamActivity.html",
    },
    {
        label: "Week 9 Team Activity",
        url: "week9/index-START.html",
    },
    {
        label: "Week 10 Team Activity",
        url: "week10/index.html",
    },
    {
        label: "Week 10 Notes",
        url: "week10/w10Notes.html",
    },
    {
        label: "Week 11 Team Activity",
        url: "week11/client/index.html",
    },
    {
        label: "Block 2 Challenge",
        url: "block2challenge/pokemon.html",
    }
    
]

const ol = document.getElementById("contents");

for (let i of links) {
    const li = document.createElement("li");
    const a = document.createElement("a"); 
    a.setAttribute("href", i.url);
    a.innerHTML = i.label;
    li.appendChild(a); 
    ol.appendChild(li);
}