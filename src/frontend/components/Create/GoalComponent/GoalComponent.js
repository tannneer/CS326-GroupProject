import { BaseComponent } from "../../BaseComponent/BaseComponent.js";


export class GoalComponent extends BaseComponent { 

    #container = null;

    constructor(){ 

        super();
        this.loadCSS('GoalComponent');

    }


    renderGoal(){ 
        
        this.#container = document.createElement('div'); 

        const panel = this.#createPanel();

        this.#container.appendChild(panel); 
    
        return this.#container;


    }

    #createPanel(){ 

        const textExample = document.createElement('div');

        textExample.innerHTML = "Some text to play with"; 
        textExample.classList.add('goal-panel');

        return textExample;
    }




}