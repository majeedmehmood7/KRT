import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaUpload } from 'react-icons/fa';
// import './FileUpload.css';

const FileUpload = () => {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the uploaded file(s)
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="upload-container">
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        <div className="upload-icon">
          <FaUpload size={30} />
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
