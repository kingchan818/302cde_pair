import React, { FC, ChangeEvent } from 'react';
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
    const calculation = function (e: ChangeEvent<HTMLInputElement>) {
        const mpf = Math.floor(parseInt(e.target.value, 10) * 0.05);

        if (e.target.id === 'income-of-h') {
            props.setIncome(parseInt(e.target.value, 10));
            if (mpf >= 18000) {
                props.setMpf(18000);
            } else {
                props.setMpf(mpf);
            }
        }

        if (e.target.id === 'income-of-w') {
            props.setIncomeWife(parseInt(e.target.value, 10));
            if (mpf >= 18000) {
                props.setMpfWife(18000);
            } else {
                props.setMpfWife(mpf);
            }
        }
    };
    return (
        <>
            <div className="input-income">
                <label> income for the husband </label>
                <input type="number" id="income-of-h" value={props.income} onChange={(e) => calculation(e)} />
                <label> income of the spouse </label>
                <input type="number" id="income-of-w" value={props.incomeWife} onChange={(e) => calculation(e)} />
            </div>
            <div className="input-deduction">
                <label> MPF of the husband </label>
                <input type="number" id="mpf-of-h" value={props.mpf} disabled />
                <label> MPF of the spouse </label>
                <input type="number" id="mpf-of-s" value={props.mpfWife} disabled />
            </div>
        </>
    );
};

export default Married;
