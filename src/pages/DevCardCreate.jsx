import React from 'react'

function devCard() {
    const devForm = document.getElementById('dev-card-form');
    devForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const devCard = {
            
        }
    })
    console.log('Dev Form', devForm);

    return (
        <div>
            <form className="card-form" id="dev-card-form">
                <h1>Create a new Development Card</h1>

                {/* Name Input */}
                <label htmlFor="dev-name">Name*:</label>
                <input type="text" name="dev-name" id="dev-name" placeholder="Name" required /><br />

                {/* Card Copies */}
                <label htmlFor="dev-copies">Copies*:</label>
                <input type="number" placeholder="1" min={1} step={1} required /><br />

                {/* Card Type */}
                <label htmlFor="dev-type">Card Type*:</label>
                <select name="dev-type" id="dev-type" required>
                    <option value="structure">Structure</option>
                    <option value="vehicle">Vehicle</option>
                    <option value="research">Research</option>
                    <option value="project">Project</option>
                    <option value="discovery">Discovery</option>
                </select><br />

                {/* Recycling Bonus */}
                <label htmlFor="dev-recycle">Recycling Bonus*:</label>
                <select name="dev-type" id="dev-type" required>
                    <option value="materials">Materials</option>
                    <option value="energy">Energy</option>
                    <option value="science">Science</option>
                    <option value="gold">Gold</option>
                    <option value="exploration">Exploration</option>
                </select><br /><br />

                {/* Construction Cost */}
                <label htmlFor="dev-construct">Construction Cost*:</label>
                <div className="list">
                    <label htmlFor="materials">Materials:</label>
                    <input name="materials" type="number" min={0} step={1} /><br />
                    
                    <label htmlFor="energy">Energy:</label>
                    <input name="energy" type="number" min={0} step={1} /><br />
                    
                    <label htmlFor="science">Science:</label>
                    <input name="science" type="number" min={0} step={1} /><br />
                    
                    <label htmlFor="gold">Gold:</label>
                    <input name="gold" type="number" min={0} step={1} /><br />
                    
                    <label htmlFor="exploration">Exploration:</label>
                    <input name="exploration" type="number" min={0} step={1} /><br />
                    
                    <label htmlFor="krystallium">Krystallium:</label>
                    <input name="krystallium" type="number" min={0} step={1} /><br />
                    
                    <label htmlFor="general">General:</label>
                    <input name="general" type="number" min={0} step={1} /><br />
                    
                    <label htmlFor="financier">Financier:</label>
                    <input name="financier" type="number" min={0} step={1} /><br />
                </div><br />

                {/* Construction Bonus */}
                <label htmlFor="dev-bonus">Construction Bonus:</label>
                <div className="list">
                    <label htmlFor="materials">Materials:</label>
                    <input name="materials" type="number" min={0} step={1} /><br />
                    
                    <label htmlFor="energy">Energy:</label>
                    <input name="energy" type="number" min={0} step={1} /><br />
                    
                    <label htmlFor="science">Science:</label>
                    <input name="science" type="number" min={0} step={1} /><br />
                    
                    <label htmlFor="gold">Gold:</label>
                    <input name="gold" type="number" min={0} step={1} /><br />
                    
                    <label htmlFor="exploration">Exploration:</label>
                    <input name="exploration" type="number" min={0} step={1} /><br />
                    
                    <label htmlFor="krystallium">Krystallium:</label>
                    <input name="krystallium" type="number" min={0} step={1} /><br />
                    
                    <label htmlFor="general">General:</label>
                    <input name="general" type="number" min={0} step={1} /><br />
                    
                    <label htmlFor="financier">Financier:</label>
                    <input name="financier" type="number" min={0} step={1} /><br />
                </div><br />

                {/* Production */}
                <label htmlFor="dev-production">Production:</label>
                <div className="list">
                    <label htmlFor="materials">Materials:</label>
                    <input name="materials" type="number" min={0} step={1} /><br />
                    
                    <label htmlFor="energy">Energy:</label>
                    <input name="energy" type="number" min={0} step={1} /><br />
                    
                    <label htmlFor="science">Science:</label>
                    <input name="science" type="number" min={0} step={1} /><br />
                    
                    <label htmlFor="gold">Gold:</label>
                    <input name="gold" type="number" min={0} step={1} /><br />
                    
                    <label htmlFor="exploration">Exploration:</label>
                    <input name="exploration" type="number" min={0} step={1} /><br />
                </div><br />

                {/* Victory Points */}
                <label htmlFor="dev-vp">Victory Points:</label>
                <div className="list">
                    <label htmlFor="materials">Materials:</label>
                    <input name="materials" type="number" min={0} step={1} /><br />
                    
                    <label htmlFor="energy">Energy:</label>
                    <input name="energy" type="number" min={0} step={1} /><br />
                    
                    <label htmlFor="science">Science:</label>
                    <input name="science" type="number" min={0} step={1} /><br />
                    
                    <label htmlFor="gold">Gold:</label>
                    <input name="gold" type="number" min={0} step={1} /><br />
                    
                    <label htmlFor="exploration">Exploration:</label>
                    <input name="exploration" type="number" min={0} step={1} /><br />
                    
                    <label htmlFor="krystallium">Krystallium:</label>
                    <input name="krystallium" type="number" min={0} step={1} /><br />
                    
                    <label htmlFor="general">General:</label>
                    <input name="general" type="number" min={0} step={1} /><br />
                    
                    <label htmlFor="financier">Financier:</label>
                    <input name="financier" type="number" min={0} step={1} /><br />
                </div>
            </form>
        </div>
    )
}   

export default devCard