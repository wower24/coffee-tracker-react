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
            <h4>Add the cost ($)</h4>
            <input 
            className='w-full'
            type='number'
            placeholder='4.50'/>
            <h4>Time since consumption</h4>
            <div className='time-entry'>
                <div>
                    <h6>Hours</h6>
                    <select id='hours-select'>
                        {
                            [0, 1, 2, 3, 4, 5,
                                 6, 7, 8, 9, 10, 
                                 11, 12, 13, 14, 15, 
                                 16, 17, 18, 19, 20, 
                                 21, 22, 23].map((hour, hourIndex) => {
                                    return(
                                        <option 
                                        key={hourIndex}
                                        value={hour}>{hour}</option>
                                    )
                            })
                        }
                    </select>
                </div>
                <div>
                    <h6>Mins</h6>
                    <select id='mins-select'>
                        {
                            [0, 5, 10, 15, 30, 45].map((min, minIndex) => {
                                    return(
                                        <option 
                                        key={minIndex}
                                        value={min}>{min}</option>
                                    )
                            })
                        }
                    </select>
                </div>
            </div>
            <button>
                <p>Add Entry</p>
            </button>
        </>
    )
}