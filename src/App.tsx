
import './App.css'
import audioClips from './audioclips'
import Drum from './Drum'


const playAudio = (e: React.KeyboardEvent<HTMLDivElement>) => {
  
   const clip = audioClips.find((clip)=> clip.keyTrigger === e.key.toUpperCase());
    if (!clip) return;
    (document.getElementById(clip.keyTrigger) as HTMLAudioElement)
      .play()
      .catch(console.error)

   document.getElementById("drum-" + clip.keyTrigger)?.focus();
   document.getElementById("display")!.innerText = clip.description;

}


function App() {
 

  return (
    <div className="container" id="drum_machine" onKeyDown={playAudio}>
        <h1>FCC Drum Machine</h1>
        <div className="whole-drum">
            {audioClips.map((clips)=>(
              <Drum audioClip = {clips} key = {clips.keyTrigger}/>
            ))}


        </div>
        <div id="display"></div>
    </div>
  )
    
  
}

export default App
