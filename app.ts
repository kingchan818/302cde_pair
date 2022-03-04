import {status} from './class/Person'
import { Tax } from './class/Tax';


const t = new Tax(1022000,status.single,10000)
t.countTotalAllowance();
t.countTotalDeduction();
t.countNetChargeableIncome();
t.checkStandardRate();
t.calculatePayableTax();
t.taxReduction();
t.getPayableTax();
