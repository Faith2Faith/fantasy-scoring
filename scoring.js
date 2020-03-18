 // returns 0 when the position is not one of the ones laid out below.
    // create  function that gives points based on the rules we've have been given
    // writing code for QB passing and QB rushing that calculates the total points for QB
const  calculateScore = (player) => {
   switch (player.position) {
       case 'QB':
           return  qbScore(player)
        case 'RB':
            return rbScore (player)
        case 'WR':
            return wrScore (player)
        case 'TE':
            return teScore (player)
         case 'K':
            return kScore (player)
        default:
            return 0

   }
    
}
 const qbScore = (player) => {
     let score = 0 

     score += player.stats.passing.yards /25
     score += player.stats.passing.touchdowns * 6
     score += player.stats.rushing.yards / 10
     score += player.stats.rushing.touchdowns * 6


    return score

 }

 const rbScore = (player) => {
    let score = 0 

    score += player.stats.rushing.yards /10
    score += player.stats.rushing.touchdowns * 6
    score += player.stats.receiving.receptions * 1
    score += player.stats.receiving.yards /10
    

   return score

}

const wrScore = (player) => {
    let score = 0 

    score += player.stats.receiving.receptions * 1
    score += player.stats.receiving.yards /10
    score += player.stats.receiving.touchdowns * 6
    score += player.stats.return.kickreturn.yards /15
    score += player.stats.return.kickreturn.fumbles * (-3)
    score += player.stats.return.puntreturn.yards /15
    score += player.stats.return.puntreturn.touchdowns * 6
    

   return score

}

const teScore = (player) => {
    let score = 0 

    score += player.stats.receiving.receptions * 1
    score += player.stats.receiving.yards /10
    score += player.stats.receiving.touchdowns * 6

    

   return score

}

const kScore = (player) => {
    let score = 0 


   return score

}

module.exports = calculateScore 