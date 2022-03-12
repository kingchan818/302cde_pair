import React, { FC, useState } from 'react';

type singleProps = {
    mpf: number;
    setMpf: (mpf: number) => void;
    setIncome: (income: number) => void;
    income: number;
};

const Single: FC<singleProps> = (props): JSX.Element => {
    return (
        <>
            <div className="input-income">
                <label>Your Income </label>
                <input
                    type="number"
                    id="mpf-of-h"
                    value={props.income}
                    onChange={(e) => props.setIncome(parseInt(e.target.value, 10))}
                />
            </div>
            <div className="input-deduction">
                <label> Your MPF </label>
                <input
                    type="number"
                    id="mpf-of-h"
                    value={props.mpf}
                    onChange={(e) => props.setMpf(parseInt(e.target.value, 10))}
                />
            </div>
        </>
    );
};

export default Single;
