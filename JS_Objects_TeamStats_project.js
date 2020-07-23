//object to store info about team
const team = {
  //properties as an arrays
  _players: [
    {
      firstName: 'Lucas',
      lastName: 'Ricky',
      age: 26
    },
    {
      firstName: 'Pete',
      lastName: 'Crork',
      age: 27
    },
    {
      firstName: 'Adrian',
      lastName: 'Ciepiel',
      age: 22
    }
  ],
  _games: [
     {
      opponent: 'Wiel',
      teamPoints: 94,
      opponentPoints: 92
    },
    {
      opponent: 'Caparica',
      teamPoints: 92,
      opponentPoints: 86,
    },
    {
      opponent: 'Wroc',
      teamPoints: 98,
      opponentPoints: 98,
    },
  ],
  //creating getters methods
  get players() {
       return this._players;
   },
  get games() {
       return this._games;
   },
   //method creating a player object and adding it to
   //the team's players array
   addPlayer(firstName, lastName, age) {
     const player = {
       firstName,
       lastName,
       age
     }
     //pushes to an array
     this._players.push(player);
   },
   //metghod creating a game object and adding it to
   //the team's games array
   addGame(opponent, teamPoints, opponentPoints) {
     const game = {
       opponent,
       teamPoints,
       opponentPoints
     }
     //pushes to an array
     this._games.push(game)
   }
};

//checking addPlayer
team.addPlayer('Steph', 'Curry', 28)
team.addPlayer('Lisa', 'Leslie', 44)
team.addPlayer('Bugs', 'Bunny', 76)

console.log(team._players)

//checking addGame
team.addGame('Barca', 102, 98)
team.addGame('Porto', 76, 80)
team.addGame('Lisboa', 98, 98)

console.log(team._games)