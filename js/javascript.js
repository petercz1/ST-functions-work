var winner;

$(document).ready(change_data);

function change_data() {

  win_lose(true);
  console.log(winner);

  if (winner === 'winner!') {
    $('#data').append('someone is a winner');
  }

}

function win_lose(win_lose) {
  if (win_lose) {winner = 'winner!'; }
  if (!win_lose){winner = 'not a winner - boo.'}
}
