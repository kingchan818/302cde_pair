import React, { FC } from 'react';
type marriedProps = {
    mpf: number;
    setMpf: (mpf: number) => void;
    mpfWife: number;
    setMpfWife: (mpf: number) => void;

    income: number;
    setIncome: (income: number) => void;
    incomeWife: number;
    setIncomeWife: (income: number) => void;
};

const Married: FC<marriedProps> = (props): JSX.Element => {
    return (
        <>
            <div className="input-income">
                <label> income for the husband </label>
                <input
                    type="number"
                    id="income-of-h"
                    value={props.income}
                    onChange={(e) => props.setIncome(parseInt(e.target.value, 10))}
                />
                <label> income of the spouse </label>
                <input
                    type="number"
                    id="income-of-w"
                    value={props.incomeWife}
                    onChange={(e) => props.setIncomeWife(parseInt(e.target.value, 10))}
                />
            </div>
            <div className="input-deduction">
                <label> MPF of the husband </label>
                <input
                    type="number"
                    id="mpf-of-h"
                    value={props.mpf}
                    onChange={(e) => props.setIncome(parseInt(e.target.value, 10))}
                />
                <label> MPF of the spouse </label>
                <input
                    type="number"
                    id="mpf-of-s"
                    value={props.mpfWife}
                    onChange={(e) => props.setMpfWife(parseInt(e.target.value, 10))}
                />
            </div>
        </>
    );
};

export default Married;
