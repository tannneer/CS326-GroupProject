import { AddGoalComponent } from "../../components/Create/AddGoalComponent/AddGoalComponent.js";


export function renderAllCreateComponents(){ 

    //this function is executed and rendered in main/app.js

    const addGoal = new AddGoalComponent(); 
    const renderedNode = addGoal.renderAddGoal();
    return renderedNode;

}


