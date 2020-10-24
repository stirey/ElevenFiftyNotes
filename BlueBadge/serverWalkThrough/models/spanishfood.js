module.exports = (sequelize, DataTypes) => {
    const SpanishFood = sequelize.define('spanishfood', {
        nameOfFood: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isSpicy: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        numberOfIngredients: DataTypes.INTEGER,
        hasBeans: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        countryOfOrigin: DataTypes.STRING
    })
    return SpanishFood;
}

//EXAMPLE
/*
const foodExample = {
    nameOfFood: 'Empanada',
    isSpicy: false,
    numberOfIngredients: 7,
    hasBeans: false,
    countryOfOrigin: Spain,
    doILikeThis: true
}
*/