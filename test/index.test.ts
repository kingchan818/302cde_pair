import {readFile, utils} from 'xlsx'
import { TestCase } from '../types/testCase';
import {Tax} from '../tax-calculator/src/class/Tax'
import {status } from '../tax-calculator/src/class/Person'

const workbook = readFile('testExcel.xlsx')
let workSheet = new Map<string,TestCase[]>();
for(let sheetName of workbook.SheetNames) {
    workSheet.set(sheetName,utils.sheet_to_json<TestCase>(workbook.Sheets[sheetName]))
}



describe.each(workSheet.get('Sheet1')!)(`should return a pass message of each testCase with given wife Personal Income, husband Personal Income`, (testCase: TestCase) => {
    // Arrange
    const wife = new Tax(testCase.wifePersonalIncome,status.single,testCase.wifeMPF)
    const husband = new Tax(testCase.husbandPersonalIncome,status.single,testCase.husbandMPF)
    const joint = new Tax(wife.income+husband.income,status.married,wife.mpfRate+husband.mpfRate)
    it(`test case ${testCase.caseNo} should return the wife payable tax and the net chargeable income matching ${Math.floor(testCase.wifeTaxPayable) } and ${Math.floor(testCase.wifeNetChargeableIncome)} `, () => {
        // Act
        wife.countTotalAllowance();
        wife.countTotalDeduction();
        wife.countNetChargeableIncome();
        wife.checkStandardRate();
        wife.calculatePayableTax();
        // Assert
        expect(wife.netChargeableIncome).toBe(Math.floor(testCase.wifeNetChargeableIncome))
        expect(wife.getPayableTax()).toBe(Math.floor(testCase.wifeTaxPayable))
    })

    it(`test case ${testCase.caseNo} should return the husband payable tax and the net chargeable income matching ${Math.floor(testCase.husbandTaxPayable)} and ${Math.floor(testCase.husbandNetChargeableIncome)}`, () => {
        // Act
        husband.countTotalAllowance();
        husband.countTotalDeduction();
        husband.countNetChargeableIncome();
        husband.checkStandardRate();
        husband.calculatePayableTax();
        // Assert
        // if(husband.netChargeableIncome === NaN){
        //     console.log(testCase)
        // }
        expect(husband.netChargeableIncome).toBe(Math.floor(testCase.husbandNetChargeableIncome))
        expect(husband.getPayableTax()).toBe(Math.floor(testCase.husbandTaxPayable))
    })
    
    it(`test case ${testCase.caseNo} should return the joint payable tax and the net chargeable income matching ${Math.floor(testCase.jointTaxPayable)} and ${Math.floor(testCase.totalNetChargeableIncome)}`, () => {
        // Act
        joint.countTotalAllowance();
        joint.countTotalDeduction();
        joint.countNetChargeableIncome();
        joint.checkStandardRate();
        joint.calculatePayableTax();
        // Assert
        expect(joint.netChargeableIncome).toBe(Math.floor(testCase.totalNetChargeableIncome))
        expect(joint.getPayableTax()).toBe(Math.floor(testCase.jointTaxPayable))
    })
})
    

