import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Details = () => {
  const navigate = useNavigate();
  const [recordedVideo, setRecordedVideo] = useState(null); // State to hold the recorded video data

  const handleRetakeVideo = () => {
    // Navigate back to the attendance page
    navigate('/attendance');
  };

  const handleViewVideo = () => {
    // Implement logic to view the recorded video
    if (recordedVideo) {
      const videoUrl = URL.createObjectURL(recordedVideo);
      // Open the video in a new window
      window.open(videoUrl);
    } else {
      console.log('No recorded video to view');
    }
  };

  const handleUploadVideo = (event) => {
    // Implement logic to upload the recorded video
    const file = event.target.files[0];
    setRecordedVideo(file); // Set recorded video data in state
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-3xl font-extrabold text-gray-900">Attendance Details</h2>
      <div className="mt-8 space-y-4">
        <button
          onClick={handleRetakeVideo}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Retake Video
        </button>
        <button
          onClick={handleViewVideo}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          View Video
        </button>
        <input
          type="file"
          accept="video/*"
          onChange={handleUploadVideo}
          className="hidden"
          id="upload-video"
        />
        <label
          htmlFor="upload-video"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
        >
          Upload Video
        </label>
      </div>
    </div>
  );
};

export default Details;

