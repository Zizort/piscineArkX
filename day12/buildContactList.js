//const { rejects } = require('assert');
//const { resolve } = require('path');
const readline = require('readline');
const event = require('events');
const events = new event();

const contacts = [];
// Create the readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
//no menu because its empty on execution e have to fill it
/*
// Prompt the user for their name
rl.question('What is your name?\n', (name) => {
  //console.log(`Hello, ${name}!`);
  if (name.trim().toLowerCase() == "abdelaziz moukdad"){
    console.log("correct");
    rl.close(); // emits the close event
  }
  else {
    rl.setPrompt("incorrect. try again\n");
    rl.prompt(); //message to display vs console.log?
    //if the user enters again
    //event 'line' means when enter key is pressed on the command line
    rl.on('line',(input) => {
        //check for the same thing
        if (input.trim().toLowerCase() == "abdelaziz moukdad"){
            console.log("correct");
            rl.close();
        } 
        else {
            rl.setPrompt("your answer " + input + " is incorrect\n");
            rl.prompt()
        }})
  }


});

rl.on("close", () => {console.log("closing")});
*/


/*
rl.question("add a contact? (yes/no)\n", (answer) => {
    if (answer.trim().toLowerCase() == "yes"){
        //add contact function
        //show menu for adding more/view/search/exit
    }
    else if (answer.trim().toLowerCase() == "no"){
        //quit function
        rl.close();
    }
})
function addCantact(){
    // add and promt the user to show
    rl.question("name and phone number: \n", (res) => {
        let arr = res.trim().split(" ");
        if (arr.length == 2 && typeof arr[0] == 'string' && typeof arr[1] == 'number')
        {

        }

    })
}
*/

//why not manual in a synchonous way?

//instead of callback function above another way using prompt function that returns a promise which allows us to use async/await
//use alo switch / while loop or (function) an

function prompt(question) {
    return new Promise((resolve) => {
        rl.question(question, (res) => {
            resolve(res);
        })
    })
}
//events
events.on("add contact", (name, phone) => {
    const contact = {};
    contact.Name = name;
    contact.Phone = phone;
    contacts.push(contact);
    return;
});
events.on("view", () => {
    console.log(contacts.map((ele) => `Name: ${ele.Name}, Phone: ${ele.Phone}`).join('\n'));
    //console.log(contacts.map((ele) => 'name: '+ele.Name+', Phone: '+ele.Phone).join('\n'));
    return;
});
events.on("search", (what) => {
    for (let i = 0, n = contacts.length; i < n; i++)
    {
        if (contacts[i].Name == what)
        {
            console.log(contacts[i].Name + " " + contacts[i].Phone);
            return;
        }
    }
    console.log("contact was not found");
    return;
});
events.on("exit", () => {
    rl.close();
});

async function main(){
    //option for (add) or (exit)
    const answer = await prompt('do you want to add a contact?\n');
    if (answer.trim().toLowerCase() == 'yes')
    {
        let Name = await prompt("name:\n");
        let phone = await prompt("phone number:\n");
        while (typeof Name != 'string' || !Number.isInteger(Number(phone))){
            Name = await prompt("name can only be string\nname:\n");
            phone = await prompt("phone number can only contain numbers\nphone number:\n");
        }  
        events.emit("add contact",Name,phone);
    }
    else
    {
        events.emit('exit');
        return;
    }
    while (true) {
        //the whole menu (add) (view) (search) (exit)
        const response = await prompt("CONTACT LIST:\n1-add a contact\n2-view all contacts\n3-search for a contact\n4-exit\n");
        let v = response.trim().toLowerCase();
        switch (v) {
            case "add":
                let Name = await prompt("name:\n");
                let phone = await prompt("phone number:\n");
                while (typeof Name != 'string' || !Number.isInteger(Number(phone))){
                    Name = await prompt("name can only be string\nname:\n");
                    phone = await prompt("phone number can only contain numbers\nphone number:\n");
                }    
                events.emit("add contact",Name,phone);
                break;
            case "view":
                events.emit("view");
                break;
            case "search":
                const who = await prompt("please give name:\n");

                events.emit("search", who);
                break;
            case "exit":
                events.emit("exit");
                return;
            default:
                console.log("operation not found try again\n");
                break;
        }

    }    
}
main();
//dont exit the programe until you tell it to
//event handelers to call the "funtions"