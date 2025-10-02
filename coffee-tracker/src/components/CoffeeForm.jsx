import { coffeeOptions } from "../utils";

export default function CoffeeForm() {
    return (
        <>
            <div className='section-header'>
                <i className='fa-solid fa-pencil'></i>
                <h2>Start Tracking Today</h2>
            </div>
            <h4>Select coffee type</h4>
            <div className='coffee-grid'>
                {
                    coffeeOptions.slice(0, 5).map((coffeeType, coffeTypeIndex) => {
                        return(
                            <button
                            className='button-card'
                            key={coffeTypeIndex}>
                                <h4>{coffeeType.name}</h4>
                                <p>{coffeeType.caffeine}mg</p>
                            </button>
                        )
                    })
                }
                <button className='button-card'>
                    <h4>Other</h4>
                    <p>n/a</p>
                </button>
            </div>
            <select id='coffee-list' name='coffee-list'>
                <option value={null}>Select type</option>
                {
                    coffeeOptions.map((coffeeType, coffeeTypeIndex) => {
                        return(
                            <option
                            key={coffeeTypeIndex} 
                            value={coffeeType.name}>
                                {coffeeType.name} ({coffeeType.caffeine}mg)
                            </option>
                        )
                    })
                }
            </select>
        </>
    )
}