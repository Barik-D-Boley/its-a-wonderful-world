const mongoose = require('mongoose');

const DevCardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must provide the name'],
        trim: true
    },
    cardCopies: {
        type: Number,
        required: [true, 'Must provide an amount of copies']
    },
    cardType: {
        type: String,
        required: [true, 'Must provide a card type'],
        enum: { 
            values: ['structure', 'vehicle', 'research', 'project', 'discovery'], 
            message: '{VALUE} is not supported'
        }
    },
    recyclingBonus: {
        type: String,
        required: [true, 'Must provide a recycling bonus'],
        enum: { 
            values: ['materials', 'energy', 'science', 'gold', 'exploration'], 
            message: '{VALUE} is not supported'
        }
    },
    constructionCost: {
        type: Object,
        required: [true, 'Must provide a construction cost'],
        properties: {
            materials: { type: Number },
            energy: { type: Number },
            science: { type: Number },
            gold: { type: Number },
            exploration: { type: Number },
            krystallium: { type: Number },
            general: { type: Number },
            financier: { type: Number }
        }
    },
    constructionBonus: {
        type: Object,
        properties: {
            materials: { type: Number },
            energy: { type: Number },
            science: { type: Number },
            gold: { type: Number },
            exploration: { type: Number },
            krystallium: { type: Number },
            general: { type: Number },
            financier: { type: Number }
        }
    },
    production: {
        type: Object,
        properties: {
            materials: {
                type: [Number, String],
                enum: { 
                    values: ['structure', 'vehicle', 'research', 'project', 'discovery'], 
                    message: '{VALUE} is not supported'
                }
            },
            energy: {
                type: [Number, String],
                enum: { 
                    values: ['structure', 'vehicle', 'research', 'project', 'discovery'], 
                    message: '{VALUE} is not supported'
                }
            },
            science: {
                type: [Number, String],
                enum: { 
                    values: ['structure', 'vehicle', 'research', 'project', 'discovery'], 
                    message: '{VALUE} is not supported'
                }
            },
            gold: {
                type: [Number, String],
                enum: { 
                    values: ['structure', 'vehicle', 'research', 'project', 'discovery'], 
                    message: '{VALUE} is not supported'
                }
            },
            exploration: {
                type: [Number, String],
                enum: { 
                    values: ['structure', 'vehicle', 'research', 'project', 'discovery'], 
                    message: '{VALUE} is not supported'
                }
            }
        }
    },
    victoryPoints: {
        type: Object,
        properties: {
            victoryPoints: { type: Number },
            structure: { type: Number },
            vehicle: { type: Number },
            research: { type: Number },
            project: { type: Number },
            discovery: { type: Number },
            general: { type: Number },
            financier: { type: Number }
        }
    }
});

module.exports = mongoose.model('Development Cards', DevCardSchema);