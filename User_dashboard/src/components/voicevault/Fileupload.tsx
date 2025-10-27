import React, { useState } from "react";
import type { DragEvent, ChangeEvent } from "react";

const FileUpload: React.FC = () => {
    const [files, setFiles] = useState<File[]>([]);
    const [isDragging, setIsDragging] = useState(false);

    // Handle drag over
    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };

    // Handle drag leave
    const handleDragLeave = () => {
        setIsDragging(false);
    };

    // Handle drop
    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
        const droppedFiles = Array.from(e.dataTransfer.files);
        setFiles(droppedFiles);
    };

    // Handle file input
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const selectedFiles = Array.from(e.target.files);
            setFiles(selectedFiles);
        }
    };

    return (
        <div className="bg-black p-6 rounded-xl">
            <div
                className={`border-2 border-dashed rounded-lg h-64 flex flex-col justify-center items-center gap-3 transition 
        ${isDragging ? "border-cyan-400 bg-neutral-800" : "border-neutral-600"}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <p className="text-white">
                    {isDragging ? "Release to upload files" : "Drag your files here"}
                </p>
                <p className="text-sm text-gray-400">or</p>

                <label className="bg-gradient-to-r from-green-400 to-cyan-500 px-6 py-2 rounded-md text-black font-semibold hover:opacity-80 cursor-pointer">
                    Browse
                    <input
                        type="file"
                        multiple
                        className="hidden"
                        onChange={handleFileChange}
                    />
                </label>
            </div>

            {files.length > 0 && (
                <div className="mt-4 text-sm text-gray-300">
                    <h4 className="font-semibold mb-2 text-white">Uploaded Files:</h4>
                    <ul className="list-disc list-inside space-y-1">
                        {files.map((file, index) => (
                            <li key={index}>{file.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default FileUpload;
