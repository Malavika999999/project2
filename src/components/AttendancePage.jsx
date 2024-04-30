import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const AttendancePage = () => {
  const navigate = useNavigate();
  const [selectedClass, setSelectedClass] = useState('');
  const [period, setPeriod] = useState('');
  const videoRef = useRef(null);
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recordedVideo, setRecordedVideo] = useState(null); // State to hold the recorded video data

  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
  };

  const handlePeriodChange = (e) => {
    setPeriod(e.target.value);
  };

  const handleVideoCapture = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      const recorder = new MediaRecorder(stream);
      setMediaRecorder(recorder); // Set the MediaRecorder instance
      setIsRecording(true);
      recorder.start(); // Start recording
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const handleStopCapture = () => {
    if (mediaRecorder) {
      mediaRecorder.ondataavailable = (event) => {
        const blob = new Blob([event.data], { type: 'video/webm' });
        setRecordedVideo(blob); // Set recorded video data in state
        navigate('/details');
      };
      mediaRecorder.stop(); // Stop recording
      setIsRecording(false);
    } else {
      console.error('MediaRecorder instance not available');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Take Attendance
        </h2>
        <form>
          <div>
            <label htmlFor="class" className="block text-sm font-medium text-gray-700">
              Class
            </label>
            <select
              id="class"
              name="class"
              value={selectedClass}
              onChange={handleClassChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select a class</option>
              <option value="cse2k20">CSE 2K20</option>
              <option value="me2k20">ME 2K20</option>
              <option value="eca2k20">ECA 2K20</option>
              <option value="ce2k20">CE 2K20</option>
              <option value="cse2k21">CSE 2K21</option>
            </select>
          </div>
          <div>
            <label htmlFor="period" className="block text-sm font-medium text-gray-700">
              Period
            </label>
            <input
              type="text"
              name="period"
              id="period"
              value={period}
              onChange={handlePeriodChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="video" className="block text-sm font-medium text-gray-700">
              Capture Video
            </label>
            <button
              type="button"
              onClick={handleVideoCapture}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              Start Recording
            </button>
            <button
              type="button"
              onClick={handleStopCapture}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              Stop Recording
            </button>
            <video ref={videoRef} autoPlay muted />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AttendancePage;
