const HBInit = require('haxball.js');

const room = HBInit({
  roomName: "⚽ FUTSAL PERNAMBUCO X3 🔥",
  maxPlayers: 12,
  public: true,
  geo: { code: "BR", lat: -8.05, lon: -34.9 },
  noPlayer: true
});

room.setDefaultStadium("Classic");
room.setScoreLimit(5);
room.setTimeLimit(5);

room.onPlayerJoin = (player) => {
  room.sendChat(🔥 Bem-vindo ${player.name}! Divirta-se no FUTSAL PERNAMBUCO X3 ⚽);
};
