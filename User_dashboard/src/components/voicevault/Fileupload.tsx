// import React, { useState, useRef } from "react";
// import type { DragEvent,ChangeEvent } from "react";
// interface Track {
//   name: string;
//   length: string;
//   quality: "Good" | "Avg" | "Poor";
//   status: number;
// }

// const FileUpload: React.FC = () => {
//   const [files, setFiles] = useState<Track[]>([]);
//   const [isDragging, setIsDragging] = useState(false);
//   const fileInputRef = useRef<HTMLInputElement | null>(null);

//   // Simulate random data for each uploaded file
//   const createTrack = (file: File, index: number): Track => ({
//     name: file.name || `Track ${files.length + index + 1}`,
//     length: `${Math.floor(Math.random() * 59) + 1}m ${Math.floor(Math.random() * 59) + 1}s`,
//     quality: (["Good", "Avg", "Poor"][
//       Math.floor(Math.random() * 3)
//     ] as "Good" | "Avg" | "Poor"),
//     status: Math.floor(Math.random() * 100),
//   });

//   const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     setIsDragging(true);
//   };

//   const handleDragLeave = () => setIsDragging(false);

//   const handleDrop = (e: DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     setIsDragging(false);
//     const droppedFiles = Array.from(e.dataTransfer.files);
//     addFiles(droppedFiles);
//   };

//   const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       const selectedFiles = Array.from(e.target.files);
//       addFiles(selectedFiles);
//       e.target.value = ""; // reset input so same file can be uploaded again if needed
//     }
//   };

//   const addFiles = (newFiles: File[]) => {
//     const newTracks = newFiles.map((file, index) => createTrack(file, index));
//     setFiles((prev) => [...prev, ...newTracks]);
//   };

//   const handleUploadClick = () => {
//     fileInputRef.current?.click();
//   };

//   return (
//     <div className="bg-black text-white p-6 rounded-xl min-h-64">
//       {files.length === 0 ? (
//         // Initial upload area
//         <div
//           className={`border-2 border-dashed rounded-lg h-64 flex flex-col justify-center items-center gap-3 transition 
//           ${isDragging ? "border-[#00C4FF] bg-neutral-800" : "border-neutral-600"}`}
//           onDragOver={handleDragOver}
//           onDragLeave={handleDragLeave}
//           onDrop={handleDrop}
//         >
//           <p className="text-white">
//             {isDragging ? "Release to upload files" : "Drag your files here"}
//           </p>
//           <p className="text-sm text-gray-400">or</p>
//           <label className="bg-gradient-to-r from-[#00FFA3] to-[#00C4FF] px-6 py-2 rounded-md text-black font-semibold hover:opacity-80 cursor-pointer">
//             Browse
//             <input
//               ref={fileInputRef}
//               type="file"
//               multiple
//               className="hidden"
//               onChange={handleFileChange}
//             />
//           </label>
//         </div>
//       ) : (
//         // Table view after upload
{/* <div className="bg-black rounded-xl p-2">
  <div className="flex justify-between items-center mb-3">
    <h2 className="text-lg font-semibold">Voices</h2>

    <div className="flex flex-row gap-5">
      <button
        onClick={handleUploadClick}
        className="bg-[#00FFA3] hover:bg-green-500 text-black px-4 py-1 text-sm rounded-md font-semibold"
      >
        Upload
      </button>
      <input
        ref={fileInputRef}
        type="file"
        multiple
        className="hidden"
        onChange={handleFileChange}
      />
      <button
        onClick={() => setShowModal(true)}
        className="bg-[#00FFA3] hover:bg-green-500 text-black px-4 py-1 text-sm rounded-md font-semibold"
      >
        Request
      </button>
    </div>
  </div>

  <div className="overflow-x-auto">
    <table className="w-full text-left text-xs">
      <thead className="text-neutral-200 border-b border-neutral-700">
        <tr>
          <th className="pb-2">LIST</th>
          <th className="pb-2">LENGTH</th>
          <th className="pb-2">QUALITY</th>
          <th className="pb-2">STATUS</th>
        </tr>
      </thead>
      <tbody>
        {files.map((file, index) => (
          <tr
            key={index}
            className="border-b border-neutral-800 hover:bg-neutral-800/40 transition"
          >
            <td className="py-3">{file.name}</td>
            <td>{file.length}</td>
            <td
              className={`${file.quality === "Good"
                  ? "text-green-400"
                  : file.quality === "Avg"
                    ? "text-yellow-400"
                    : "text-red-400"
                }`}
            >
              {file.quality}
            </td>
            <td>
              <div className="flex items-center gap-2 w-32">
                <span>{file.status}%</span>
                <div className="w-full bg-neutral-700 h-1.5 rounded-full">
                  <div
                    className={`h-1.5 rounded-full ${file.status < 30
                        ? "bg-red-500"
                        : file.status < 70
                          ? "bg-yellow-400"
                          : "bg-green-400"
                      }`}
                    style={{ width: `${file.status}%` }}
                  ></div>
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div> */}
//   )}
// </div>
//   );
// };

// export default FileUpload;


// import { div } from "framer-motion/client";
import React, { useRef, useState } from "react";
import type { DragEvent, ChangeEvent } from "react";
import Requestupload from "./Requestupload";

interface UploadedFile {
  name: string;
  length: string;
  quality: "Good" | "Avg" | "Poor";
  status: number;
}

interface FileUploadProps {
  isAgreementSigned: boolean;
}

const FileUpload: React.FC<FileUploadProps> = ({ isAgreementSigned }) => {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const ALLOWED_EXTENSIONS = ["wav", "aiff", "aif", "flac"];


  // Show popup + block actions if agreement not signed
  const blockIfNotSigned = () => {
    if (!isAgreementSigned) {
      setShowWarning(true);
      return true;
    }
    return false;
  };

  // Drag Events
  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (blockIfNotSigned()) return;
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (blockIfNotSigned()) return;
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    processFiles(droppedFiles);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (blockIfNotSigned()) return;
    const selectedFiles = e.target.files ? Array.from(e.target.files) : [];
    processFiles(selectedFiles);
  };

  const handleUploadClick = () => {
    if (blockIfNotSigned()) return;
    fileInputRef.current?.click();
  };

  const processFiles = (fileList: File[]) => {
    const validFiles: File[] = [];
    const invalidFiles: string[] = [];

    fileList.forEach((file) => {
      const extension = file.name.split(".").pop()?.toLowerCase();

      if (extension && ALLOWED_EXTENSIONS.includes(extension)) {
        validFiles.push(file);
      } else {
        invalidFiles.push(file.name);
      }
    });

    if (invalidFiles.length > 0) {
      alert(
        `Invalid file format:\n${invalidFiles.join(
          ", "
        )}\n\nOnly WAV, AIFF, and FLAC files are allowed.`
      );
    }

    const processed = validFiles.map((file) => ({
      name: file.name,
      length: `${(file.size / 1024).toFixed(2)} KB`,
      quality: ["Good", "Avg", "Poor"][
        Math.floor(Math.random() * 3)
      ] as "Good" | "Avg" | "Poor",
      status: Math.floor(Math.random() * 100),
    }));

    setFiles(processed);
  };


  return (
    <>
      {/* 🔥 Warning Popup (always visible even when faded) */}
      {showWarning && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div className="bg-white text-black rounded-xl p-6 w-80 text-center space-y-4">
            <h2 className="font-semibold text-lg">Agreement Required</h2>
            <p>You must sign the agreement before uploading or requesting.</p>

            <button
              onClick={() => setShowWarning(false)}
              className="bg-black text-white px-4 py-2 rounded-lg w-full"
            >
              Ok
            </button>
          </div>
        </div>
      )}

      {/* Modal */}
      {showModal && <Requestupload onClose={() => setShowModal(false)} />}

      {/* 🔥 Entire upload section becomes faded + disabled before signing */}
      <div
        className={`bg-black text-white p-4 sm:p-6 rounded-xl min-h-64 w-full 
          ${!isAgreementSigned ? "opacity-50" : ""}
        `}
      >
        {files.length === 0 ? (
          <div className="flex flex-col md:flex-row items-center justify-center w-full gap-4 sm:gap-6">

            {/* LEFT UPLOAD AREA */}
            <div
              className={`flex-1 border-2 border-dashed rounded-xl h-56 sm:h-64 
                flex flex-col justify-center items-center text-center transition-all duration-300 
                p-4 w-full
                ${isDragging ? "bg-neutral-900" : "border-neutral-700"}
    ${isAgreementSigned ? "hover:border-[#00FFA3]" : ""}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <p className="text-white text-base sm:text-lg font-medium px-2">
                {isDragging ? "Release to upload files" : "Drag your files here"}
              </p>
              <p className="text-gray-500 text-xs mt-2">
                Supported formats: WAV, AIFF, FLAC
              </p>

              <p className="text-gray-400 text-sm my-2">or</p>

              <label
                className="cursor-pointer bg-[#00FFA3] px-4 py-2 text-sm rounded-lg text-black font-semibold hover:opacity-90 transition"
                onClick={(e) => {
                  if (blockIfNotSigned()) {
                    e.preventDefault();
                    e.stopPropagation();
                  }
                }}
              >
                Browse
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept=".wav,.aiff,.aif,.flac"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </div>

            {/* DIVIDER */}
            <div className="text-gray-500 text-sm font-medium md:block hidden">or</div>

            {/* RIGHT REQUEST BOX */}
            <div
              className={`flex-1 border-2 border-dashed border-neutral-700 rounded-xl h-56 sm:h-64 
                flex flex-col gap-5 justify-center items-center text-center transition-all duration-300 
                p-4 w-full
                ${isAgreementSigned ? "hover:border-[#00FFA3]" : ""}`}
            >
              <p className="text-white text-base sm:text-lg font-medium">
                Request to Upload
              </p>

              <button
                onClick={() => {
                  if (blockIfNotSigned()) return;
                  setShowModal(true);
                }}
                className="bg-[#00FFA3] text-black text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition"
              >
                Request Now
              </button>
            </div>
          </div>
        ) : (
          // FILE TABLE VIEW
          <div className="bg-black rounded-xl p-4">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 gap-3">
              <h2 className="text-lg font-semibold">Voices</h2>

              <div className="flex gap-3 sm:gap-5">
                <button
                  onClick={handleUploadClick}
                  className="bg-[#00FFA3] hover:bg-green-500 text-black px-4 py-1 text-sm rounded-md font-semibold"
                >
                  Upload
                </button>

                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept=".wav,.aiff,.aif,.flac"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <button
                  onClick={() => {
                    if (blockIfNotSigned()) return;
                    setShowModal(true);
                  }}
                  className="bg-[#00FFA3] hover:bg-green-500 text-black px-4 py-1 text-sm rounded-md font-semibold"
                >
                  Request
                </button>
              </div>
            </div>

            <div className="overflow-x-auto w-full">
              <table className="w-full text-left text-xs sm:text-sm min-w-[460px]">
                <thead className="text-neutral-200 border-b border-neutral-700">
                  <tr>
                    <th className="pb-2">LIST</th>
                    <th className="pb-2">LENGTH</th>
                    <th className="pb-2">QUALITY</th>
                    <th className="pb-2">STATUS</th>
                  </tr>
                </thead>

                <tbody>
                  {files.map((file, index) => (
                    <tr
                      key={index}
                      className="border-b border-neutral-800 hover:bg-neutral-800/40 transition"
                    >
                      <td className="py-3 max-w-[140px] truncate">{file.name}</td>
                      <td>{file.length}</td>

                      <td
                        className={
                          file.quality === "Good"
                            ? "text-green-400"
                            : file.quality === "Avg"
                              ? "text-yellow-400"
                              : "text-red-400"
                        }
                      >
                        {file.quality}
                      </td>

                      <td>
                        <div className="flex items-center gap-2 w-28 sm:w-32">
                          <span>{file.status}%</span>

                          <div className="w-full bg-neutral-700 h-1.5 rounded-full">
                            <div
                              className={`h-1.5 rounded-full ${file.status < 30
                                ? "bg-red-500"
                                : file.status < 70
                                  ? "bg-yellow-400"
                                  : "bg-green-400"
                                }`}
                              style={{ width: `${file.status}%` }}
                            ></div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        )}
      </div>
    </>
  );
};

export default FileUpload;
