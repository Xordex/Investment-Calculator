import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment";

export default function ({ data }) {
    let results = calculateInvestmentResults(data);
    return (
        <div id="result">
            <thead className="center">
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody className="center">
                {results.map(result => {
                    return (<tr key={result.year}>
                        <th>{result.year}</th>
                        <th>{formatter.format(result.valueEndOfYear)}</th>
                        <th>{formatter.format(result.interest)}</th>
                        <th>{formatter.format(result.interest)}</th>
                        <th>{formatter.format(data.initialInvestment + result.annualInvestment)}</th>
                    </tr>);
                })}
            </tbody>
        </div>
    );
}