module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: TextTrackCue,
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: TextTrackCue,
                password: {
                    type: DataTypes.STRING,
                    allowNull: false
                }
            }
        }
    })
}