let scores = {
      home: 0,
      guest: 0
    };

    function addScore(team, points) {
      scores[team] += points;
      document.getElementById(team + 'Score').textContent = scores[team];
      updateWinner();
    }

    function updateWinner() {
      const homeEl = document.getElementById('homeScore');
      const guestEl = document.getElementById('guestScore');

      homeEl.classList.remove('winner');
      guestEl.classList.remove('winner');

      if (scores.home > scores.guest) {
        homeEl.classList.add('winner');
      } else if (scores.guest > scores.home) {
        guestEl.classList.add('winner');
      }
    }
