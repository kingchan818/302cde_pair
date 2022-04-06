import React, { useState } from 'react';
import './App.css';
import { status } from './class/Person';
import { Tax } from './class/Tax';
import Single from './components/Single';
import Married from './components/Married';
import { Modal, Button } from 'react-bootstrap';
import CustomModal from './components/CustomModal';
import 'bootstrap/dist/css/bootstrap.min.css';
interface returnValueOfCalculateTotalTax {
    beforeTaxReduction: number;
    AfterTaxReduction: number;
}
function App() {
    const [select, setSelect] = useState<status>(status.single);
    const [income, setIncome] = useState<number>(0);
    const [incomeWife, setIncomeWife] = useState<number>(0);
    const [mpf, setMpf] = useState<number>(0);
    const [mpfWife, setMpfWife] = useState<number>(0);
    const [show, setShow] = useState(false);
    const [data, setData] = useState<JSX.Element>();

    const calculateTotalTax = (user: Tax): returnValueOfCalculateTotalTax => {
        user.checkStandardRate();
        user.countTotalAllowance();
        user.countTotalDeduction();
        user.countNetChargeableIncome();
        user.calculatePayableTax();
        const beforeTaxReduction: number = user.getPayableTax();
        user.taxReduction();
        const AfterTaxReduction: number = user.getPayableTax();
        return { beforeTaxReduction, AfterTaxReduction };
    };

    const submit = () => {
        if (select === status.single) {
            const tax = new Tax(income, status.single, mpf);
            const { beforeTaxReduction } = calculateTotalTax(tax);
            setData(
                <div>
                    <p>Your tax is ${beforeTaxReduction} </p>
                </div>
            );
            setShow(!show);
        } else {
            const husband = new Tax(income, status.single, mpf);
            const wife = new Tax(incomeWife, status.single, mpfWife);
            const joint = new Tax(income + incomeWife, status.married, mpf + mpfWife);
            const hushbandReturnValue = calculateTotalTax(husband);
            const wifeReturnValue = calculateTotalTax(wife);
            const jointReturnValue = calculateTotalTax(joint);
            setData(
                <div>
                    <p>Your husband's tax is🤵🏻 ${hushbandReturnValue.beforeTaxReduction}</p>
                    <p>Your wife's tax is👰🏻‍♀️ ${wifeReturnValue.beforeTaxReduction} </p>
                    <p>
                        Total Tax Payable by you and our spouse is🤵🏻👰🏻‍♀️ $
                        {hushbandReturnValue.beforeTaxReduction + wifeReturnValue.beforeTaxReduction}
                    </p>
                    <p>Your family under joint assessment is 👨‍👧 ${jointReturnValue.beforeTaxReduction}</p>
                </div>
            );
            setShow(!show);
        }
    };
    return (
        <div className="App">
            <CustomModal show={show} setShow={setShow} data={data} />
            <div className="container">
                <div className="status">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <label> What is your status </label>
                    <select
                        name="status"
                        id=""
                        defaultValue={status.single}
                        onChange={(e) => setSelect(e.target.value as status)}
                    >
                        <option value={status.single} onSelect={() => setSelect(status.single)}>
                            Single
                        </option>
                        <option value={status.married} onSelect={() => setSelect(status.single)}>
                            Married
                        </option>
                    </select>
                </div>
                <hr />
                {select === status.single ? (
                    <Single setIncome={setIncome} income={income} mpf={mpf} setMpf={setMpf} />
                ) : (
                    <Married
                        setIncome={setIncome}
                        income={income}
                        mpf={mpf}
                        setMpf={setMpf}
                        incomeWife={incomeWife}
                        setIncomeWife={setIncomeWife}
                        setMpfWife={setMpfWife}
                        mpfWife={mpfWife}
                    />
                )}

                <div className="submit-btn">
                    <button id="submit" onClick={submit}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
