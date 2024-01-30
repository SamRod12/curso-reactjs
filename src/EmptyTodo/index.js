import React from "react";
import {ReactComponent as SmashIcon} from "./icons8-super-smash-bros.svg"

import "./EmptyTodo.css";
function EmptyTodo(){
    return (
        <div class="obj">
            <div class="objchild">
                <span class="inn6">
                <SmashIcon />

                </span>
            </div>
        </div>

    )
}

export {EmptyTodo}