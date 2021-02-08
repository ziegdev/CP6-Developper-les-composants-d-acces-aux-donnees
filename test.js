require('dotenv').config();

const { List, Card } = require('./app/models');

const run = async () => {
    // ON CREE UNE CARD
    const card = new Card({
        name: 'Card 3',
        content: 'My third card',
        list_id: 1,
    });

    await card.save();

    // ON GET TOUTES LES LISTS
    const lists = await List.findAll({
        include: [{
            association: 'cards',
            include: ['labels']
        }]
    });

    // GENERATION DU TEXT D'OUTPUT
    lists.forEach((list) => {
        let listStr = `La liste "${list.name}" contient les cartes: \n`;

        const cardsStr = list.cards.map(card => {
            return `- ${card.name}: ${card.content} [${card.labels.map(label => label.name).join(', ')}]`
        }).join('\n');

        console.log(listStr + cardsStr + '\n\n');
    });
};

run();