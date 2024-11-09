import { BaseComponent } from "../../BaseComponent/BaseComponent.js";

export class AddGoalComponent extends BaseComponent { 

    #container = null; 

    constructor(stringInput){ 
        super(); 

        this.stringInput = stringInput; 
        this.loadCSS('addgoal');

    }

    renderAddGoal(){ 

        this.#container = document.createElement('div'); 

        const goalInput = this.#createGoalInput();
        const timeInput = this.#createTimeInput(); 
        const deadlineInput = this.#createDeadline(); 
        const addButton = this.#createAddButton(); 

        this.#container.appendChild(goalInput); 
        this.#container.appendChild(timeInput); 
        this.#container.appendChild(deadlineInput);
        this.#container.appendChild(addButton); 

        return this.#container;


    }

    #createGoalInput(){ 

        const textBox = document.createElement('input');

        textBox.id = 'goalInput';
        textBox.type = 'text'; 
        textBox.name = 'Add Goal';
        textBox.placeholder = 'Enter Goal Here';

        return textBox;

            /* 

    accessing input from add goal textbox: 

    const userInput = document.getElementById(createGoalInput).value; 
    let savedValue = userInput; 

    for : goal card 

    <p id='goalcard'> 
       <h3 id='goaletc'> </h3> 

    document.getElementById('goaletc').textContent = savedValue;

    */

    }


    #createDeadline(){ 
        
        const userInput = document.createElement('input'); 

        userInput.id = 'deadlineInput';
        userInput.type = 'time'; 
        userInput.name = 'Add deadline'; 
        userInput.placeholder = 'Enter your deadlien';

        return userInput;

    }

    #createTimeInput(){ 

        const userInput = document.createElement('input'); 

        userInput.id = 'timeInput';
        userInput.type = 'number'; 
        userInput.name = 'Add total time'; 
        userInput.placeholder = 'Enter total time here (hours)';

        return userInput;


    }

    #createAddButton(){ 

        const button = document.createElement('button'); 

        button.textContent = 'Add';
        button.addEventListener('click', () => { 


        });

        return button;
    }

}



export function renderAddGoal() { 

    //template render to be used for other components of create
    const baseCreate = document.createElement('create');

    baseCreate.innerHTML = `dynamically rendered create...`; 

    return baseCreate;

}