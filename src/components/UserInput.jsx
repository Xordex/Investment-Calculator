export default function ({ change }) {
    return (
        <section id="user-input">
            <div className="input-group">
                <label htmlFor="">Initial investment  </label>
                <input type="number" required defaultValue={10000} onChange={(e) => change("initialInvestment", Number(e.target.value))} />
            </div>
            <div className="input-group">
                <label htmlFor="">Annual investment  </label>
                <input type="number" required onChange={(e) => change("annualInvestment", Number(e.target.value))} />
            </div>
            <div className="input-group">
                <label htmlFor="">Expected return  </label>
                <input type="number" required onChange={(e) => change("expectedReturn", Number(e.target.value))} />
            </div>
            <div className="input-group">
                <label htmlFor="">Duration  </label>
                <input type="number" required onChange={(e) => change("duration", Number(e.target.value))} />
            </div>
        </section>
    );
}