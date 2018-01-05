exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sites')
    .del()
    .then(function() {
      // Inserts seed entries
      let date = new Date();
      return knex('sites').insert([
        { id: 1, name: 'Griffyndor', url: 'gryffindor.com' },
        { id: 2, name: 'Hufflepuff', url: 'hufflepuff.com' },
        { id: 3, name: 'Ravenclaw', url: 'ravenclaw.com' },
        { id: 4, name: 'Slytherin', url: 'slytherin.com' },
      ]);
    });
};
