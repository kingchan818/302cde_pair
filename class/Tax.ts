import {Person, status, maximumDeduction} from './Person'

export class Tax extends Person{
    private payableTax : number = 0
    private applyStandardRate : boolean = false
    private taxDeductionRate : number = 20000

    constructor(income : number,status : status, mpfRate: number){
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

    calculatePayableTax () : number{
        if(this.applyStandardRate !== true){
            let progressiveCount : number = 0
            let countIteration : number = 0
            if(this.netChargeableIncome >= 50000){
                progressiveCount += 50000*0.02
                countIteration += 1
            }
            if(this.netChargeableIncome >= 100000){
                progressiveCount += 50000*0.06
                countIteration += 1

            }
            if(this.netChargeableIncome >= 150000){
                progressiveCount += 50000*0.1
                countIteration += 1

            }
            if(this.netChargeableIncome >= 200000){
                progressiveCount += 50000*0.14
                countIteration += 1
                const calculation = (this.netChargeableIncome - 200000 )*0.17 + progressiveCount
                this.payableTax =  calculation
            }
            if(countIteration <= 3){
                this.payableTax = this.netChargeableIncome - countIteration*50000 - progressiveCount 
            }
        }else{
            this.payableTax = this.income * 0.15 
        }
        return this.payableTax
    }
    taxReduction () {
        this.payableTax -= 20000
    }
    getPayableTax (){
        console.log('payable tax',this.payableTax)
        return this.payableTax
    }
}