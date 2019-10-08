exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          id: 1,
          VIN: "AB123456",
          make: "Subaru",
          model: "Crostrek",
          mileage: 24059,
        },
        {
          id: 2,
          VIN: "PA123056",
          make: "Ford",
          model: "Explorer",
          mileage: 109234,
        },
        { id: 3, VIN: "OP092345", make: "BMW", model: "M3", mileage: 5780 },
      ]);
    });
};
