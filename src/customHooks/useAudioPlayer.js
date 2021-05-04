import { useEffect, useState } from 'react'

const useAudioPlayer = () => {
    const [duration, setDuration] = useState(null);
    const [curTime, setCurTime] = useState(null);
    const [playing, setPlaying] = useState(false);
    const [clickedTime, setClickedTime] = useState(null);
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        const audio = document.querySelector('#audio');
        console.log(audio);
        function setAudioData() {
            setDuration(audio.duration);
            setCurTime(audio.currentTime);
        }

        function setAudioTime() {
            console.log(audio.currentTime / audio.duration * 100);
            setCurTime(audio.currentTime);
            setPercent(audio.currentTime / audio.duration * 100);
        }

        audio.addEventListener('loadeddata', setAudioData);
        audio.addEventListener('timeupdate', setAudioTime);

        playing ? audio.play() : audio.pause();


        if (clickedTime && clickedTime !== curTime) {
            audio.currentTime = clickedTime;
            setClickedTime(null)
        }

        return () => {
            audio.removeEventListener('loadeddata', setAudioData);
            audio.removeEventListener('timeupdate', setAudioTime);
        }

    })

    return { curTime, setCurTime, duration, playing, setPlaying, clickedTime, setClickedTime, percent };
}

export default useAudioPlayer