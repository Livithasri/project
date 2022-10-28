import RecorderControls from "./components/recorder-controls";
import RecordingsList from "./components/recordings-list";
import useRecorder from "./hooks/useRecorder";
import "./app1.css";
import Nav from './nav';
export default function App1() {
  
  const { recorderState, ...handlers } = useRecorder();
  const { audio } = recorderState;

  return (
    <><ul className="size">
      <li><a href="/">HOME</a></li>
      <li><a href="/Contact">DRAWINGS</a></li>
      <li><a href="/App1">STORY</a></li>
      <li><a href="/story">CONTACT</a></li>
      <li><a href="/login">LOGIN</a></li>
      {/* <li><a href="/">ABOUT</a></li> */}
    </ul><section className="voice-recorder">
        <h1 className="title">Story and Rhymes Recorder</h1>
        <div className="recorder-container">
          <RecorderControls recorderState={recorderState} handlers={handlers} />
          <RecordingsList audio={audio} />
        </div>
      </section></>
  );
}
