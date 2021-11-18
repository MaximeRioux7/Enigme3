import * as enigme3 from "../../data/enigme3.js";
import * as enigme4 from "../../data/enigme4.js";

export let data = {
    "enigme3": enigme3,
    "enigme4": enigme4
}

export function Get(){
    return data[window.enigme];
}