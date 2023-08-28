import Login from "./login/+page.svelte";
import Inicio from "../routering/inicio.svelte";

export const routes = {
    "/": Login,
    "/inicio": Inicio,
};

