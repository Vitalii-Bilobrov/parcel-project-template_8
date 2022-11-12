import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe); // ініціалізували змінну player з  класу Player додавши в нього властивості з нашого плеєра (що вже сидить в iframe)

const stopTime = 'videoplayer-current-time';

const onPlay = function (data) {
  const { seconds } = data;
  // суюди передадуть щось, і далі ми називатимемо його  data

  localStorage.setItem(stopTime, seconds); //додаємо в локал сторидж  стрінг  videoplayer-current-time зі змінної TIME як ключ і date як значення
  // data is an object containing properties specific to that event
};

player.on('timeupdate', throttle(onPlay, 1000));

const savedTime = localStorage.getItem(stopTime);
if (savedTime !== null) {
  player.setCurrentTime(Number(savedTime));
}
