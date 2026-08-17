import React, { useEffect, useRef, useState } from "react";
import { Mic, X } from "lucide-react";
import "./VoiceInput.css";

const VoiceInput = ({ value, onChange }) => {
  const [showLanguage, setShowLanguage] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [language, setLanguage] = useState(null);
  const [isConverting, setIsConverting] = useState(false);

  const recognitionRef = useRef(null);
  const valueRef = useRef(value || "");

  useEffect(() => {
    valueRef.current = value || "";
  }, [value]);

  // --------------------------------------------------
  // GOOGLE HINDI TRANSLITERATION
  // --------------------------------------------------

  const fetchHindiScript = async (englishText) => {
    if (!englishText || !/[a-zA-Z]/.test(englishText)) {
      return englishText;
    }

    try {
      const response = await fetch(
        `https://inputtools.google.com/request?text=${encodeURIComponent(
          englishText
        )}&itc=hi-t-i0-und&num=1`
      );

      const data = await response.json();

      if (data && data[0] === "SUCCESS") {
        return data[1][0][1][0];
      }

      return englishText;
    } catch (error) {
      console.error("Hindi transliteration error:", error);
      return englishText;
    }
  };

  // --------------------------------------------------
  // CREATE SPEECH RECOGNITION
  // --------------------------------------------------

  const startRecognition = (selectedLanguage) => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert(
        "Speech Recognition is not supported in this application/browser."
      );
      return;
    }

    // Agar already running hai
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (error) {}
    }

    const recognition = new SpeechRecognition();

    recognition.continuous = true;
    recognition.interimResults = false;

    // Language
    if (selectedLanguage === "hindi") {
      recognition.lang = "hi-IN";
    } else {
      recognition.lang = "en-IN";
    }

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = async (event) => {
      let finalText = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          finalText += event.results[i][0].transcript;
        }
      }

      finalText = finalText.trim();

      if (!finalText) return;

      // Hindi speech
      if (selectedLanguage === "hindi") {
        // Normally hi-IN directly gives Devanagari
        if (/[a-zA-Z]/.test(finalText)) {
          finalText = await fetchHindiScript(finalText);
        }
      }

      const currentText = valueRef.current || "";

      const newText = currentText
        ? `${currentText} ${finalText}`
        : finalText;

      onChange(newText);
    };

    recognition.onerror = (event) => {
      console.error("Speech Recognition Error:", event.error);

      setIsListening(false);

      if (event.error === "not-allowed") {
        alert("Microphone permission allow kijiye.");
      } else if (event.error === "no-speech") {
        console.log("No speech detected.");
      } else if (event.error !== "aborted") {
        alert(`Voice recognition error: ${event.error}`);
      }
    };

    recognition.onend = () => {
      setIsListening(false);
      recognitionRef.current = null;
    };

    recognitionRef.current = recognition;

    try {
      recognition.start();
    } catch (error) {
      console.error("Recognition start error:", error);
    }
  };

  // --------------------------------------------------
  // STOP MIC
  // --------------------------------------------------

  const stopRecognition = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (error) {}

      recognitionRef.current = null;
    }

    setIsListening(false);
  };

  // --------------------------------------------------
  // MIC CLICK
  // --------------------------------------------------

  const handleMicClick = () => {
    if (isListening) {
      stopRecognition();
      return;
    }

    setShowLanguage(true);
  };

  // --------------------------------------------------
  // LANGUAGE SELECT
  // --------------------------------------------------

  const selectLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    setShowLanguage(false);

    startRecognition(selectedLanguage);
  };

  // --------------------------------------------------
  // MANUAL HINDI PHONETIC TYPING
  // --------------------------------------------------

  const handleKeyDown = async (e) => {
    if (language !== "hindi") return;

    if (e.key !== " " && e.key !== "Enter") {
      return;
    }

    const currentText = valueRef.current || "";

    const words = currentText.split(" ");

    const lastWord = words[words.length - 1];

    if (!lastWord || !/[a-zA-Z]/.test(lastWord)) {
      return;
    }

    e.preventDefault();

    setIsConverting(true);

    const hindiWord = await fetchHindiScript(lastWord);

    words[words.length - 1] = hindiWord;

    const convertedText =
      words.join(" ") + (e.key === " " ? " " : "\n");

    onChange(convertedText);

    setIsConverting(false);
  };

  // --------------------------------------------------
  // CLEANUP
  // --------------------------------------------------

  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch (error) {}
      }
    };
  }, []);

  return (
    <>
      <button
        type="button"
        className={`voice-mic-btn ${
          isListening ? "voice-mic-active" : ""
        }`}
        onClick={handleMicClick}
        title={isListening ? "Stop Voice Input" : "Voice Input"}
      >
        {isListening ? (
          <X size={19} />
        ) : (
          <Mic size={19} />
        )}
      </button>

      {/* LANGUAGE POPUP */}

      {showLanguage && (
        <div className="voice-language-overlay">
          <div className="voice-language-popup">

            <div className="voice-popup-header">
              <div>
                <h3>Select Language</h3>
                <p>Voice typing ke liye language choose karein</p>
              </div>

              <button
                type="button"
                className="voice-close-btn"
                onClick={() => setShowLanguage(false)}
              >
                <X size={18} />
              </button>
            </div>

            <div className="voice-language-options">

              <button
                type="button"
                className="voice-language-option"
                onClick={() => selectLanguage("english")}
              >
                <span className="language-icon">🇬🇧</span>

                <div>
                  <strong>English</strong>
                  <small>Roman / English text</small>
                </div>
              </button>

              <button
                type="button"
                className="voice-language-option"
                onClick={() => selectLanguage("hindi")}
              >
                <span className="language-icon">🇮🇳</span>

                <div>
                  <strong>Hindi</strong>
                  <small>हिंदी / Devanagari text</small>
                </div>
              </button>

            </div>

          </div>
        </div>
      )}

      {isConverting && (
        <span className="voice-converting">
          Converting...
        </span>
      )}
    </>
  );
};

export default VoiceInput;