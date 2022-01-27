"use strict";
/*===================={variables}=====================*/
const repeat_song = document.querySelector(".repeat");
const music = document.querySelector(".music_element");
const total_duration = document.querySelector(".Total_duration");
const seekbar = document.querySelector(".seekbar");
const current_time = document.querySelector(".current_time");
const play = document.querySelector(".play");
const next_song = document.querySelector(".next_song");
const previous_song = document.querySelector(".previous_song");
const shuffle = document.querySelector(".shuffle");
let cover = document.querySelector(".song_cover");
let singer = document.querySelector(".singer");
let title = document.querySelector(".title");

/*===================={songs array}=====================*/
const song_array = [
  {
    cover_src:
      "https://a10.gaanacdn.com/gn_img/albums/JD2KJAbOLw/2KJyB1DPbO/size_l.jpg",
    song_src: "https://pwdown.com/113515/Bijlee Bijlee - Harrdy Sandhu.mp3",
    song_title: "Bijlee Bijlee",
    singer: "Harrdy Sandhu",
  },
  {
    cover_src:
      "https://a10.gaanacdn.com/gn_img/albums/dwN39y83DP/N39yz1ad3D/size_l.webp",

    song_src:
      "https://pagalfree.com/musics/128-Drunk n High - Mellow D 128 Kbps.mp3",
    song_title: "Drunk n High",
    singer: "Mellow D ,Aastha Gill",
  },
  {
    cover_src:
      "https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/LibaasKaka.jpg",
    song_src:
      "https://cdnsongs.com/music/data/Single_Track/202012/Libaas/128/Libaas_1.mp3",
    song_title: "Libass",
    singer: "Kaka",
  },
  {
    cover_src:
      "https://a10.gaanacdn.com/gn_img/albums/Bp1bAynb02/p1bAVBoPK0/size_l.webp",
    song_src: "https://pwdown.com/14648/Dance Like - Harrdy Sandhu.mp3",
    song_title: "Dance Like",
    singer: "Harrdy Sandhu",
  },
  {
    cover_src:
      "https://a10.gaanacdn.com/gn_img/albums/10q3Z1K52r/q3ZRZg2035/size_l.jpg",
    song_src: "https://pwdown.com/113510/Excuses - Ap Dhillon.mp3",
    song_title: "Excuses",
    singer: "AP Dhillon,Gurinder Gill,Intense",
  },
  {
    cover_src:
      "https://a10.gaanacdn.com/gn_img/albums/XYybzrb2gz/YybzkEqZK2/size_l.webp",
    // song_src: "https://www.mostmags.com/download/4211/",
    song_src: "1song/let_me_down_slowly.mp3",
    song_title: "Let Me Down Slowly",
    singer: "Alec Benjamin",
  },
  {
    cover_src:
      "https://a10.gaanacdn.com/gn_img/albums/w4MKPgOboj/4MKPmOLx3o/size_l_1607405239.webp",
    song_src: "https://pwdown.com/113462/Nayan - Dhvani Bhanushali.mp3",
    song_title: "Nayan",
    singer: "Dhvani Bhanushali",
  },
  {
    cover_src:
      "https://a10.gaanacdn.com/gn_img/albums/w4MKPDOKoj/MKPggoBAbo/size_l.webp",
    song_src: "https://pwdown.com/113514/Thoda Thoda Pyaar - Stebin Ben.mp3",
    song_title: "Thoda Thoda Pyaar",
    singer: "Stebin Ben",
  },
  {
    cover_src:
      "https://a10.gaanacdn.com/gn_img/albums/jBr3gybR1m/Br3gr1dyKR/size_l.webp",
    song_src:
      "https://cdnsongs.com/music/data/Single_Track/201809/Kya_Baat_Ay/128/Kya_Baat_Ay_1.mp3",
    song_title: "Kya Baat Ay",
    singer: "Harrdy Sandhu",
  },
];

/*===================={}=====================*/
function nextsong() {
  song_index++;
  if (song_index > song_array.length - 1) {
    song_index = 0;
  }
  music.src = song_array[song_index].song_src;
  cover.src = song_array[song_index].cover_src;
  title.innerText = song_array[song_index].song_title;
  singer.innerText = song_array[song_index].singer;
  play_music();
}

let song_index = 0;
/*===================={handling next_song btn}=====================*/
next_song.addEventListener("click", (e) => {
  song_index++;
  if (song_index > song_array.length - 1) {
    song_index = 0;
  }
  music.src = song_array[song_index].song_src;
  cover.src = song_array[song_index].cover_src;
  title.innerText = song_array[song_index].song_title;
  singer.innerText = song_array[song_index].singer;
  play_music();
  //   console.log(cover);
  //   seekbar.value = 0;
  //   console.log(music.src);
});

/*===================={ handling previous btn}=====================*/
previous_song.addEventListener("click", () => {
  song_index -= 1;
  if (song_index < 0) {
    song_index = song_array.length - 1;
  }
  music.src = song_array[song_index].song_src;
  cover.src = song_array[song_index].cover_src;
  title.innerText = song_array[song_index].song_title;
  singer.innerText = song_array[song_index].singer;
  //   console.log(cover);
  play_music();
});

/*===================={play_music}=====================*/

function play_music() {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    play.innerHTML = `<i class="fas fa-pause"></i>`;
  } else {
    music.pause();
    play.innerHTML = `<i class="fas fa-play"></i>`;
  }
  music.addEventListener("ended", () => {
    play.innerHTML = `<i class="fas fa-play"></i>`;
  });
}

/*===================={play and pause btn}=====================*/
play.addEventListener("click", function () {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    play.innerHTML = `<i class="fas fa-pause"></i>`;
  } else {
    music.pause();
    play.innerHTML = `<i class="fas fa-play"></i>`;
  }
  music.addEventListener("ended", () => {
    play.innerHTML = `<i class="fas fa-play"></i>`;
  });
});

music.onloadeddata = function () {
  //   seekbar.max = music.duration;
  // console.log(seekbar.max);
  let duration_sec = parseInt(music.duration % 60);
  let duration_min = parseInt((music.duration / 60) % 60);
  total_duration.innerText = `${duration_min}:${duration_sec}`;
};

/*===================={updating music current time and progress bar}=====================*/
music.addEventListener("timeupdate", () => {
  let progress = parseInt(music.currentTime * (100 / music.duration));
  // console.log(progress);
  seekbar.value = progress;
  let current_sec = parseInt(music.currentTime % 60);
  let current_min = parseInt((music.currentTime / 60) % 60);
  current_time.innerText = `${current_min}:${current_sec}`;

  if (
    music.currentTime == music.duration &&
    song_index < song_array.length - 1
  ) {
    nextsong();
  }

  if (
    music.currentTime == music.duration &&
    song_index >= song_array.length - 1 &&
    shuffle.classList.contains("active")
  ) {
    nextsong();
  }
  // console.log(music.currentTime);
});

/*===================={change of music.currentTime  by changing progressbar}=====================*/
function handleSeekBar() {
  //   console.log(seekbar.value);
  let time = seekbar.value / (100 / music.duration);
  //   console.log(time);
  let current_sec = parseInt(time % 60);
  let current_min = parseInt((time / 60) % 60);
  current_time.innerText = `${current_min}:${current_sec}`;
  music.currentTime = time;
}

/*===================={handling loop in song}=====================*/

repeat_song.addEventListener("click", () => {
  //   console.log(music.loop);
  if (music.loop == true) {
    music.loop = false;
    repeat_song.classList.toggle("active");
  } else {
    music.loop = true;
    repeat_song.classList.toggle("active");
  }
});

/*===================={repeatallsong_btn}=====================*/
shuffle.addEventListener("click", () => {
  shuffle.classList.toggle("active");
});

<<<<<<< HEAD
// document.addEventListener("contextmenu", (event) => event.preventDefault());
=======
document.addEventListener('contextmenu', event => event.preventDefault());
/*===================={pending:--- paused and play using space key}=====================*/
