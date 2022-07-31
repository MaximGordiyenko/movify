export const YouTube = () => {
  
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  
  const onPlayerReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  
  return <YouTube videoId="krCc7X8bc44" opts={opts} onReady={onPlayerReady}/>
  
};