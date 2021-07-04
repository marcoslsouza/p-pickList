import { Component } from "@angular/core";

@Component({
    selector: 'pickList',
    templateUrl: 'pickList.component.html',
    styleUrls: ['pickList.component.css']
})
export class PickList {

    public list1: Array<{nome: string, quantidade: number}> = [];
    
    public list2: Array<{nome: string, quantidade: number}> = [];

    public checked: boolean = false;
   
    constructor() {
      
        this.list1 = [
            {
                nome: 'Arroz',
                quantidade: 2
            },
            {
                nome: 'Feijão',
                quantidade: 2
            },
            {
                nome: 'Carne',
                quantidade: 2
            },
            {
                nome: 'Salada',
                quantidade: 2
            }
        ];
    }
    
    ngOnInit() {}

    public listarProdutos() : void {

        if(this.list1.length > 0) {
            console.log('Lista 1:');
            this.list1.forEach((item, index) => console.log(item.nome +' ('+item.quantidade+')'));
        }

        if(this.list2.length > 0) {
            console.log('Lista 2:');
            this.list2.forEach((item, index) => console.log(item.nome +' ('+item.quantidade+')'));
        }
    }

    public handleToggle(event: MouseEvent) : void {

        console.log(event);
    }
}