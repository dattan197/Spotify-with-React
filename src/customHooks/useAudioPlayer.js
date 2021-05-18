import { useEffect, useState } from 'react'

const useAudioPlayer = (trackUrl, volumeValue) => {

    //========= TIME CONTROL STATE
    const [duration, setDuration] = useState(null);
    const [curTime, setCurTime] = useState(null);
    const [playing, setPlaying] = useState(false);
    const [clickedTime, setClickedTime] = useState(0);
    const [percent, setPercent] = useState(null);

    //========= VOLUME CONTROL STATE
    const [mute, setMute] = useState(false);
    const [clickedVolume, setClickedVolume] = useState(null);

    //======== HANDLE WHEN AUDIO SOURCE CHANGED 
    useEffect(() => {
        const audio = document.querySelector('#audio');
        if (!trackUrl) return;
        setClickedTime(0);
        setPercent(0);
        audio.load(); // reload audio when src change
        setPlaying(true);
    }, [trackUrl])

    //======== HANDLE CONTROL AUDIO
    useEffect(() => {
        const audio = document.querySelector('#audio');

        function setAudioData() {
            setDuration(audio.duration);
            setCurTime(audio.currentTime);
        }

        function setAudioTime() {
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
    });

    //========== HANDLE AUDIO VOLUME
    useEffect(() => {
        if (volumeValue == null) return;
        const audio = document.querySelector('#audio');
        
        function handleMute() {
            audio.volume = 0;
            setMute(true)
        }
        
        function handleUnMute() {
            audio.volume = clickedVolume / 100;
            setMute(false);
        }
        
        volumeValue == 0 ? handleMute() : handleUnMute();

    }, [volumeValue]);

    return { time: { curTime, duration, playing, setPlaying, setClickedTime, percent, setPercent }, volume: { mute, setMute, clickedVolume, setClickedVolume } };
}

export default useAudioPlayer