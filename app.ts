import {Tax} from './tax-calculator/src/class/Tax'
import {status } from './tax-calculator/src/class/Person'

const t = new Tax(300000,status.single,15000)
const t2 = new Tax(400000,status.single,18000)
console.log("-----------------------")
console.log("wife")
t.countTotalAllowance();
t.countTotalDeduction();
t.countNetChargeableIncome();
t.checkStandardRate();
t.calculatePayableTax();
console.log('before tax reduction : ',t.getPayableTax())
t.taxReduction();
console.log('after tax reduction : ',t.getPayableTax())
console.log("-----------------------")
console.log("Husband")
t2.countTotalAllowance();
t2.countTotalDeduction();
t2.countNetChargeableIncome();
t2.checkStandardRate();
t2.calculatePayableTax();
console.log('before tax reduction : ',t2.getPayableTax())
t2.taxReduction();
console.log('after tax reduction : ',t2.getPayableTax())
console.log("-----------------------")
console.log("Joint")
const joint = new Tax(t.income+t2.income,status.married,t.mpfRate+t2.mpfRate)
joint.countTotalAllowance();
joint.countTotalDeduction();
joint.countNetChargeableIncome();
joint.checkStandardRate();
joint.calculatePayableTax();
joint.getPayableTax();
console.log('before tax reduction : ',joint.getPayableTax())
joint.taxReduction();
console.log('after tax reduction : ',joint.getPayableTax())
console.log("-----------------------")