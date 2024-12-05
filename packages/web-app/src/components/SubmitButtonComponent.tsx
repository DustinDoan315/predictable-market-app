"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SubmitButtonComponent({
  isLoading,
  errorMessage,
  successMessage,
  onSubmit,
}: {
  isLoading: boolean;
  errorMessage: string;
  successMessage: string;
  onSubmit: () => void;
}) {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleSubmit = () => {
    if (!isLoading) {
      onSubmit();
    }
  };

  useEffect(() => {
    if (errorMessage) {
      setPopupMessage(`Error: ${errorMessage}`);
      setShowPopup(true);
    } else if (successMessage) {
      setPopupMessage(successMessage);
      setShowPopup(true);
    }
  }, [errorMessage, successMessage]);

  // Close popup
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="relative">
      {/* Submit Button */}
      <button
        type="button"
        className={`w-full px-4 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold rounded-md focus:outline-none focus:ring-4 focus:ring-purple-300 shadow-lg transform transition-transform hover:scale-105 disabled:opacity-50`}
        disabled={isLoading}
        onClick={handleSubmit} // Only triggers onSubmit
      >
        {isLoading ? (
          <div className="flex items-center justify-center">
            <div className="loader"></div> {/* Spinner */}
            <span className="ml-2">Placing Bet...</span>
          </div>
        ) : (
          "Place Bet"
        )}
      </button>

      {/* Popup Modal */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-md shadow-md text-center">
              <h2 className="text-xl font-semibold mb-4 text-black">
                {popupMessage}
              </h2>
              {errorMessage && <p className="text-red-500">{errorMessage}</p>}
              {successMessage && (
                <p className="text-green-500">{successMessage}</p>
              )}
              <button
                className="mt-4 px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-md focus:outline-none transform transition-transform hover:scale-105"
                onClick={closePopup} // Only closes popup
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spinner CSS */}
      <style jsx>{`
        .loader {
          width: 20px;
          height: 20px;
          border: 4px solid transparent;
          border-top: 4px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}