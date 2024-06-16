import { useRef } from "react";
import SectionTitle from "../components/SectionTitle";
import SectionCode from "../components/SectionCode";

const handleSpeech1 = (utterance) => {
  window.speechSynthesis.speak(utterance);
};

const handleSpeech2 = (utterance) => {
  utterance.lang = "en-US";
  window.speechSynthesis.speak(utterance);
};

const Step2 = () => {
  return (
    <div>
      <SectionTitle>window.speechSynthesis</SectionTitle>
      <SpeechForm onSubmit={handleSpeech1} defaultValue="안녕하세요" />
      <SectionCode>
        {`const utterance = new SpeechSynthesisUtterance(ref.current.value);

utterance.rate = 0.5;
utterance.volume = 0.1;
window.speechSynthesis.speak(utterance);`}
      </SectionCode>
      <SpeechForm onSubmit={handleSpeech2} defaultValue="hello" />
      <SectionCode>
        {`const utterance = new SpeechSynthesisUtterance(ref.current.value);

utterance.rate = 0.5;
utterance.volume = 0.1;
utterance.lang = "en-US";
window.speechSynthesis.speak(utterance);`}
      </SectionCode>
    </div>
  );
};

const SpeechForm = ({ onSubmit, ...props }) => {
  const ref = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const text = ref.current.value;

    if (!text) {
      alert("입력해주세요");
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.5;
    utterance.volume = 0.1;
    onSubmit(utterance);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={ref} type="text" {...props} />
      <button>Speak</button>
    </form>
  );
};

export default Step2;
