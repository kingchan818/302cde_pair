import React, { FC, ChangeEvent } from 'react';

type singleProps = {
    mpf: number;
    setMpf: (mpf: number) => void;
    setIncome: (income: number) => void;
    income: number;
};

const Single: FC<singleProps> = (props): JSX.Element => {
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
    };

    return (
        <>
            <div className="input-income">
                <label>Your Income </label>
                <input type="number" id="income-of-h" value={props.income} onChange={(e) => calculation(e)} />
            </div>
            <div className="input-deduction">
                <label> Your MPF </label>
                <input type="number" id="mpf-of-h" value={props.mpf} disabled />
            </div>
        </>
    );
};

export default Single;
