/*
 *  城市表
 */
const Sequelize = require('sequelize')

module.exports = (db) => {
    return db.define('city', {
        city_id           : {
            type          : Sequelize.INTEGER,
            primaryKey    : true,
            autoIncrement : true
        },
        city              : {
            type          : Sequelize.STRING(50),
            allowNull     : false,
            unique        : true
        },
        last_update       : {
            type          : Sequelize.DATE,
            defaultValue  : Sequelize.NOW
        }
    }, {
        tableName: 'city',
        freezeTableName: true,
        timestamps: false,
    })
}
