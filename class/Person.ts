export enum status {
    single = 'single',
    married = 'married',
}

export const allowance = {
    marriedPersonAllowance : 264000,
    basic : 132000
}

export const maximumDeduction = {
    mpf : 60000,
}


export class Person {
    status : status
    income : number
    mpfRate : number 
    netChargeableIncome : number = 0// income - totalDeduction - totalAllowance 
    totalDeduction : number = 0
    totalAllowance : number = 0

    constructor(income : number,status : status, mpfRate: number){
        this.income = income
        this.status = status
        this.mpfRate = mpfRate
    }

    countTotalAllowance () : void{
        if(this.status === status.married){
            this.totalAllowance += allowance.marriedPersonAllowance
            return;
        }
        this.totalAllowance += allowance.basic
    }
    countTotalDeduction () : void{
        if(this.mpfRate > maximumDeduction.mpf){
            throw new Error(' have exceeed the maximum deduction ')
        }
        this.totalDeduction = this.mpfRate
    }
    countNetChargeableIncome () : number{
        console.log("total allowance :",this.totalAllowance)
        console.log("total deduction :",this.totalDeduction)
        this.netChargeableIncome = this.income - this.totalDeduction - this.totalAllowance
        console.log('netChargeableIncome :', this.netChargeableIncome)
        return this.netChargeableIncome
    }
}

