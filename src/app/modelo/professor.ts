import { Escola } from "./escola";

export class Professor {
    public id: number = 0;
    public nome: string = "";
    public numero: number = 0;
    public individualidade: string = "";
    public nomeHeroi: string = "";
    public escola: Escola = new Escola();
}