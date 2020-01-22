module.exports = function(sequelize, DataTypes) {
  const Customer = sequelize.define("Customer", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    streetAddress: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipCode: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING
  });

  Customer.associte = function(models) {
    Customer.hasMany(models.ServiceRequest, { onDelete: "CASCADE" });
  };

  return Customer;
};