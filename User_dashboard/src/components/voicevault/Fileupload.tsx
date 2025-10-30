import React, { useState, useRef } from "react";
import type { DragEvent,ChangeEvent } from "react";
interface Track {
  name: string;
  length: string;
  quality: "Good" | "Avg" | "Poor";
  status: number;
}

const FileUpload: React.FC = () => {
  const [files, setFiles] = useState<Track[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Simulate random data for each uploaded file
  const createTrack = (file: File, index: number): Track => ({
    name: file.name || `Track ${files.length + index + 1}`,
    length: `${Math.floor(Math.random() * 59) + 1}m ${Math.floor(Math.random() * 59) + 1}s`,
    quality: (["Good", "Avg", "Poor"][
      Math.floor(Math.random() * 3)
    ] as "Good" | "Avg" | "Poor"),
    status: Math.floor(Math.random() * 100),
  });

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    addFiles(droppedFiles);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      addFiles(selectedFiles);
      e.target.value = ""; // reset input so same file can be uploaded again if needed
    }
  };

  const addFiles = (newFiles: File[]) => {
    const newTracks = newFiles.map((file, index) => createTrack(file, index));
    setFiles((prev) => [...prev, ...newTracks]);
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="bg-black text-white p-6 rounded-xl min-h-64">
      {files.length === 0 ? (
        // Initial upload area
        <div
          className={`border-2 border-dashed rounded-lg h-64 flex flex-col justify-center items-center gap-3 transition 
          ${isDragging ? "border-[#00C4FF] bg-neutral-800" : "border-neutral-600"}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <p className="text-white">
            {isDragging ? "Release to upload files" : "Drag your files here"}
          </p>
          <p className="text-sm text-gray-400">or</p>
          <label className="bg-gradient-to-r from-[#00FFA3] to-[#00C4FF] px-6 py-2 rounded-md text-black font-semibold hover:opacity-80 cursor-pointer">
            Browse
            <input
              ref={fileInputRef}
              type="file"
              multiple
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        </div>
      ) : (
        // Table view after upload
        <div className="bg-black rounded-xl p-2">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold">Voices</h2>

            <button
              onClick={handleUploadClick}
              className="bg-[#00FFA3] hover:bg-green-500 text-black px-4 py-1 rounded-md font-semibold"
            >
              Upload
            </button>

            {/* Hidden input triggered by Upload button */}
            <input
              ref={fileInputRef}
              type="file"
              multiple
              className="hidden"
              onChange={handleFileChange}
            />
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
                      className={`${
                        file.quality === "Good"
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
                            className={`h-1.5 rounded-full ${
                              file.status < 30
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
  );
};

export default FileUpload;
