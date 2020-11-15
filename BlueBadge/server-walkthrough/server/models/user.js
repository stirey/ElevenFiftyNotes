// this model allows us to create users in our database

// the name of the table is called 'user'. The 2nd argument will be the object that contains the name of the fields(columns)
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false  // this mandates they have to complete this field
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true // this requires a unique name/login so you don't have duplicate of the same logins
        },  
            password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
};
    
