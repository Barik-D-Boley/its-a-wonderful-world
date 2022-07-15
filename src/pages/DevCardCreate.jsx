import React from 'react';

function devCard() {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const devName = document.getElementById('dev-name'),
            devCopies = document.getElementById('dev-copies'),
            devType = document.getElementById('dev-type'),
            devRecycle = document.getElementById('dev-recycle'),

            // Construction Cost
            constructMaterials = document.getElementById('construct-materials'),
            constructEnergy = document.getElementById('construct-energy'),
            constructScience = document.getElementById('construct-science'),
            constructGold = document.getElementById('construct-gold'),
            constructExploration = document.getElementById('construct-exploration'),
            constructKrystallium = document.getElementById('construct-krystallium'),
            constructGeneral = document.getElementById('construct-general'),
            constructFinancier = document.getElementById('construct-financier'),

            // Construction Bonuses
            bonusKrystallium = document.getElementById('bonus-krystallium'),
            bonusGeneral = document.getElementById('bonus-general'),
            bonusFinancier = document.getElementById('bonus-financier'),

            // Production
            productionMaterials = document.getElementById('production-materials'),
            productionEnergy = document.getElementById('production-energy'),
            productionScience = document.getElementById('production-science'),
            productionGold = document.getElementById('production-gold'),
            productionExploration = document.getElementById('production-exploration'),

            // Victory Points
            vps = document.getElementById('vps'),
            vpStructure = document.getElementById('vp-structure'),
            vpVehicle = document.getElementById('vp-vehicle'),
            vpResearch = document.getElementById('vp-research'),
            vpProject = document.getElementById('vp-project'),
            vpDiscovery = document.getElementById('vp-discovery'),
            vpGeneral = document.getElementById('vp-general'),
            vpFinancier = document.getElementById('vp-financier')

        const devCard = {
            name: devName.value,
            cardCopies: devCopies.value,
            cardType: devType.value,
            recyclingBonus: devRecycle.value,
            constructionCost: {
                materials: constructMaterials.value,
                energy: constructEnergy.value,
                science: constructScience.value,
                gold: constructGold.value,
                exploration: constructExploration.value,
                krystallium: constructKrystallium.value,
                general: constructGeneral.value,
                financier: constructFinancier.value
            },
            constructionBonus: {
                krystallium: bonusKrystallium.value,
                general: bonusGeneral.value,
                financier: bonusFinancier.value
            },
            production: {
                materials: productionMaterials.value,
                energy: productionEnergy.value,
                science: productionScience.value,
                gold: productionGold.value,
                exploration: productionExploration.value
            },
            victoryPoints: {
                victoryPoints: vps.value,
                structure: vpStructure.value,
                vehicle: vpVehicle.value,
                research: vpResearch.value,
                project: vpProject.value,
                discovery: vpDiscovery.value,
                general: vpGeneral.value,
                financier: vpFinancier.value
            }
        }

        function cleanObject(obj) {
            for (var propName in obj) {
                if (typeof obj[propName] === 'object') {
                    cleanObject(obj[propName]);
                }
                else if (obj[propName] === null || obj[propName] === undefined || obj[propName] === "" || obj[propName] === '0') {
                    delete obj[propName];
                }
            }
            return obj;
        }

        cleanObject(devCard);
        console.log(devCard);
    }

    return (
        <div>
            <form className="card-form" id="dev-card-form" onSubmit={handleSubmit}>
                <h1>Create a new Development Card</h1>

                {/* Name Input */}
                <label htmlFor="dev-name">Name*:</label>
                <input type="text" name="dev-name" id="dev-name" placeholder="Name" required /><br />

                {/* Card Copies */}
                <label htmlFor="dev-copies">Copies*:</label>
                <input id="dev-copies" type="number" placeholder="1" min={1} step={1} required /><br />

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
                <select name="dev-type" id="dev-recycle" required>
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
                    <input id="construct-materials" type="number" min={0} step={1} /><br />
                    
                    <label htmlFor="energy">Energy:</label>
                    <input id="construct-energy" type="number" min={0} step={1} /><br />
                    
                    <label htmlFor="science">Science:</label>
                    <input id="construct-science" type="number" min={0} step={1} /><br />
                    
                    <label htmlFor="gold">Gold:</label>
                    <input id="construct-gold" type="number" min={0} step={1} /><br />
                    
                    <label htmlFor="exploration">Exploration:</label>
                    <input id="construct-exploration" type="number" min={0} step={1} /><br />
                    
                    <label htmlFor="krystallium">Krystallium:</label>
                    <input id="construct-krystallium" type="number" min={0} step={1} /><br />
                    
                    <label htmlFor="general">General:</label>
                    <input id="construct-general" type="number" min={0} step={1} /><br />
                    
                    <label htmlFor="financier">Financier:</label>
                    <input id="construct-financier" type="number" min={0} step={1} /><br />
                </div><br />

                {/* Construction Bonus */}
                <label htmlFor="dev-bonus">Construction Bonus:</label>
                <div className="list">
                    <label htmlFor="krystallium">Krystallium:</label>
                    <input id="bonus-krystallium" type="number" min={0} step={1} /><br />
                    
                    <label htmlFor="general">General:</label>
                    <input id="bonus-general" type="number" min={0} step={1} /><br />
                    
                    <label htmlFor="financier">Financier:</label>
                    <input id="bonus-financier" type="number" min={0} step={1} /><br />
                </div><br />

                {/* Production */}
                <label htmlFor="dev-production">Production:</label>
                <div className="list">
                    <label htmlFor="materials">Materials:</label>
                    <input id="production-materials" type="number" min={0} step={1} /><br />
                    
                    <label htmlFor="energy">Energy:</label>
                    <input id="production-energy" type="number" min={0} step={1} /><br />
                    
                    <label htmlFor="science">Science:</label>
                    <input id="production-science" type="number" min={0} step={1} /><br />
                    
                    <label htmlFor="gold">Gold:</label>
                    <input id="production-gold" type="number" min={0} step={1} /><br />
                    
                    <label htmlFor="exploration">Exploration:</label>
                    <input id="production-exploration" type="number" min={0} step={1} /><br />
                </div><br />

                {/* Victory Points */}
                <label htmlFor="dev-vp">Victory Points:</label>
                <div className="list">
                    <label htmlFor="vps">Victory Points:</label>
                    <input id="vps" type="number" min={0} step={1} /><br />
                    
                    <label htmlFor="structure">Structure:</label>
                    <input id="vp-structure" type="number" min={0} step={1} /><br />
                    
                    <label htmlFor="vehicle">Vehicle:</label>
                    <input id="vp-vehicle" type="number" min={0} step={1} /><br />
                    
                    <label htmlFor="research">Research:</label>
                    <input id="vp-research" type="number" min={0} step={1} /><br />
                    
                    <label htmlFor="project">Project:</label>
                    <input id="vp-project" type="number" min={0} step={1} /><br />
                    
                    <label htmlFor="discovery">Discovery:</label>
                    <input id="vp-discovery" type="number" min={0} step={1} /><br />
                    
                    <label htmlFor="general">General:</label>
                    <input id="vp-general" type="number" min={0} step={1} /><br />
                    
                    <label htmlFor="financier">Financier:</label>
                    <input id="vp-financier" type="number" min={0} step={1} /><br />
                </div><br />

                <input type="submit" />
            </form>
        </div>
    )
}   

export default devCard