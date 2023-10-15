import React, { useEffect, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import axios from "axios";

const Mp3 = () => {
  const convertUrl = "http://localhost:5000/convert";
  // const postUrl = encodeURIComponent(convertUrl);

  const [link, setLink] = useState();
  const [showButton, setShowButton] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [showlinkField, setLinkField] = useState(false);
  const [options, setOptions] = useState("mp3");
  const [validUrl, setValidUrl] = useState(false);
  const [fileName, setFileName] = useState("");
  const [error,setError]=useState('');

  function handleLinkChange(event) {
    const youtubeUrlPattern =
      /^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
    setLink(event.target.value);
    if (youtubeUrlPattern.test(event.target.value)) {
      console.log("valid url");
      setValidUrl(true);
    } else {
      setValidUrl(false);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setShowLoading(true);
    setLinkField(true);
    console.log(link);

    try {
      const response = await axios.post(`${convertUrl}`, { link, options });
      console.log("link sent successfully");
      console.log(response);

      if (response.status === 200) {
        setShowButton(true);
        setShowLoading(false);
        setFileName(response.data.fileName);
      }
    } catch (error) {
      // Handle the error here
      // console.log("Error occurred: ", error);
      setError("An error Occured");
    }
  }

  const convertAgain = () => {
    setValidUrl(false);
    setShowButton(false);
    setLinkField(false);
    setShowLoading(false);
    setError('');
  };
  let handleOptions = (event) => {
    setOptions(event.target.value === "Mp3" ? "mp3" : "mp4");
  };
  useEffect(() => {
  }, [options]);

  //
  return (
    <div>
      <div id="youtube-converter" className="text-center">
        <p className="my-12 md:text-3xl sm:text-xl font-bold">Youtube To Mp3 Converter</p>
        <div className="shadow-lg bg-slate-800 rounded-lg p-4 hover:shadow-xl transition duration-300 mt-12 md:w-1.2/2 lg:w-1/2 m-auto sm:w-11/12">
          <div className="mt-4 sm:ml-4 md:m-auto md:w-4/5 flex flex-col items-start">
            {!showlinkField && (
              <label
                className={`${validUrl ? "text-white" : "text-red-700"} my-4`}
              >
                Enter the valid Youtube Link
              </label>
            )}
            <div className="flex flex-row w-full">
              {!showlinkField && (
                <input
                  type="text"
                  name="price"
                  id="price"
                  className={`w-8/12 flex-initial rounded-md border border-gray-300 py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-${
                    validUrl ? "blue-800" : "red-700"
                  } sm:text-sm sm:leading-6`}
                  placeholder="https://youtu.be/alSs_9tE33M"
                  onChange={handleLinkChange}
                />
              )}
              {!showlinkField && (
                <select
                  id="dropdown"
                  name="dropdown"
                  onChange={handleOptions}
                  className="ml-4 block md:w-20  border border-gray-300 rounded shadow"
                >
                  <option value="Mp3" className="sm:text-xs md:text-sm">
                    mp3
                  </option>
                  <option value="Mp4"  className="sm:text-xs md:text-sm">mp4</option>
                </select>
              )}
            </div>
            {!showlinkField && (
              <button
                onClick={handleSubmit}
                disabled={validUrl ? false : true}
                class="disabled:opacity-75 dark:bg-white hover:bg-slate-300 text-neutral-700 hover:text-neutral-700 font-bold my-8 py-2 px-4 rounded m-auto"
              >
                Convert
              </button>
            )}
            <div className="w-full flex flex-col m-auto">
              { (showLoading && !error) && (
                <div className="flex flex-col items-center">
                  <h2 className="text-white text-3xl">Converting</h2>
                  <CircularProgress></CircularProgress>
                </div>
              )}

              {showButton && (
                <div className=" flex flex-row my-4 justify-around">
                  <button
                    className="dark:bg-red-600 hover:bg-slate-600 text-neutral-700 hover:text-white font-bold my-4 py-2 px-4 rounded m-auto"
                    type="Button"
                    name="download"
                  >
                    <a
                      href={`http://localhost:5000/download?filename=${fileName}`}
                    >
                      Download {options}{" "}
                    </a>
                  </button>
                  <button
                    className="dark:bg-slate-200 hover:bg-slate-400 text-neutral-700 hover:text-neutral-700 font-bold my-4 py-2 px-4 rounded m-auto"
                    onClick={convertAgain}
                  >
                    Convert Again
                  </button>
                </div>
              )}
            </div>
          </div>

          {error && <div>
            <p className="text-xl text-red-700 font-bold">{error}</p>
            <button
            className="dark:bg-slate-200 hover:bg-slate-400 text-neutral-700 hover:text-neutral-700 font-bold my-4 py-2 px-4 rounded m-auto"
            onClick={convertAgain}
          >
            Try Again
          </button>
          </div>}
        </div>
      </div>
    </div>
  );
};
export default Mp3;
