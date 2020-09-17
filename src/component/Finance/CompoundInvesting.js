import React, { useState } from 'react'
import { calculateCompoundReturns } from './financeServices'

const CompoundInvesting = () => {
  const [startAmount, setAmount] = useState(5000)
  const [regularIncrement, setIncrement] = useState(1000)
  const [interest, setInterest] = useState(5)
  const [years, setYears] = useState(5)

  const [totalInvestment, compoundInvetment] = calculateCompoundReturns(
    startAmount,
    regularIncrement,
    interest,
    years
  )
  return (
    <>
      <h3>Compounding Investment</h3>
      <p>
        Compounding is the process in which an asset's earnings, from either
        capital gains or interest, are reinvested to generate additional
        earnings over time. This growth, calculated using exponential functions,
        occurs because the investment will generate earnings from both its
        initial principal and the accumulated earnings from preceding periods.
        Compounding, therefore, differs from linear growth, where only the
        principal earns interest each period.
      </p>
      <h4>Calculator</h4>
      <div>
        <div>Investment Type</div>
        <input
          type={'radio'}
          id={'monthly'}
          name={'investment_type'}
          value={'month'}
        />
        <label for={'monthly'}>Monthly</label>
        <input
          type={'radio'}
          id={'yearly'}
          name={'investment_type'}
          value={'year'}
        />
        <label for={'yearly'}>Yearly</label>
        <div>Starting Amount</div>
        <input
          type="number"
          value={startAmount}
          onChange={(e) => setAmount(e.target.valueAsNumber)}
        />
        <div>Regular Increment</div>
        <input
          type="number"
          value={regularIncrement}
          onChange={(e) => setIncrement(e.target.valueAsNumber)}
        />
        <div>Expected Interest</div>
        <input
          type="number"
          value={interest}
          onChange={(e) => setInterest(e.target.valueAsNumber)}
        />
        <div>Investment Period</div>
        <input
          type="number"
          value={years}
          onChange={(e) => setYears(e.target.valueAsNumber)}
        />
        <div>Total Investment</div>
        {totalInvestment}
        <div>Compounded Returns</div>
        {compoundInvetment}
      </div>
    </>
  )
}
export default CompoundInvesting
