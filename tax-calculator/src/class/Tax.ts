import {Person, status} from './Person'

export class Tax extends Person{
    private payableTax : number = 0
    private applyStandardRate : boolean = false
    private taxDeductionRate : number = 20000

    public constructor(income : number,status : status, mpfRate: number){
        super(income,status,mpfRate)
    }

    checkStandardRate () : void{
        if (this.status === status.single){
            if(this.income >= 2022000){
                this.applyStandardRate = true
            }

        }
        if(this.status === status.married){
            if(this.income >= 3144000){
                this.applyStandardRate = true
            }
        }
    }

    getNetChargeableIncomeForSt (){
        return this.income - this.totalDeduction
    }

    calculatePayableTax () : number{
        if(this.applyStandardRate !== true){
            this.payableTax += Math.min(50000,this.netChargeableIncome) *0.02
            this.payableTax += Math.max(0,Math.min(100000,this.netChargeableIncome)-50000)*0.06
            this.payableTax += Math.max(0,Math.min(150000,this.netChargeableIncome)-100000)*0.1
            this.payableTax += Math.max(0,Math.min(200000,this.netChargeableIncome)-150000)*0.14
            this.payableTax += Math.max(0,this.netChargeableIncome -200000)*0.17

            if(this.payableTax < 0){
                return this.payableTax = 0
            } 
            return this.payableTax = Math.floor(this.payableTax);

        }else{
            this.payableTax = this.getNetChargeableIncomeForSt() * 0.15 
        }
        return this.payableTax
    }
    
    taxReduction () {
       this.payableTax -= 20000
       if(this.payableTax < 0) this.payableTax = 0
    }

    getPayableTax (){
        return this.payableTax
    }
}