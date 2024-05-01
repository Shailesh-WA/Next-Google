import React, { useEffect, useRef } from "react";

const GoogleAd = ({ dataAdSlot }) => {
  useEffect(() => {
    if (window && window.adsbygoogleAd && !window.adsbygoogle.loaded) {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    }
  }, []);

  //   useEffect(() => {
  //     const scriptElement = document.querySelector(
  //       'script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-google-pub-3940256099942544"]'
  //     );

  //     const handleScriptLoad = async () => {
  //       try {
  //         if (window?.adsbygoogle) {
  //           // console.log("push ads", window);
  //           await window.adsbygoogle.push({});
  //         } else {
  //           scriptElement?.addEventListener("load", handleScriptLoad);
  //         }
  //       } catch (error) {
  //         console.log("Arror in the ads!!!", error);
  //       }
  //     };
  //     handleScriptLoad();

  //     return () => {
  //       if (scriptElement) {
  //         scriptElement.removeEventListener("load", handleScriptLoad);
  //       }
  //     };
  //   }, []);

  // useEffect(() => {
  //   const scriptUrl =
  //     "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-google-pub-3940256099942544";

  //   const handleScriptLoad = () => {
  //     try {
  //       if (window.adsbygoogle) {
  //         window.adsbygoogle.push({});
  //         console.log("add is running");
  //       }
  //     } catch (error) {
  //       console.log("Error in loading ads:", error);
  //     }
  //   };

  //   const existingScript = document.querySelector(`script[src="${scriptUrl}"]`);

  //   if (!existingScript) {
  //     const script = document.createElement("script");
  //     script.src = scriptUrl;
  //     script.async = true;
  //     script.onload = handleScriptLoad;
  //     document.body.appendChild(script);
  //   } else {
  //     handleScriptLoad();
  //   }

  //   return () => {
  //     if (existingScript) {
  //       existingScript.onload = null;
  //     }
  //   };
  // }, []);

  // useEffect(() => {
  //   const scriptElement = document.querySelector(
  //     'script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1755254689602096"]'
  //   );

  //   const handleScriptLoad = async () => {
  //     try {
  //       debugger;
  //       if (window?.adsbygoogle) {
  //         // console.log("push ads", window);
  //         await window.adsbygoogle.push({});
  //       } else {
  //         scriptElement?.addEventListener("load", handleScriptLoad);
  //       }
  //     } catch (error) {
  //       console.log("Arror in the ads!!!", error);
  //     }
  //   };
  //   handleScriptLoad();

  //   return () => {
  //     if (scriptElement) {
  //       scriptElement.removeEventListener("load", handleScriptLoad);
  //     }
  //   };
  // }, [dataAdSlot]);

  // useEffect(() => {
  //   const loadScript = () => {
  //     const scriptElement = document.createElement("script");
  //     scriptElement.src =
  //       "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1755254689602096";
  //     scriptElement.async = true;
  //     document.body.appendChild(scriptElement);

  //     const handleScriptLoad = async () => {
  //       try {
  //         if (window?.adsbygoogle) {
  //           await window.adsbygoogle.push({});
  //         } else {
  //           scriptElement.removeEventListener("load", handleScriptLoad);
  //           loadScript();
  //         }
  //       } catch (error) {
  //         console.log("Error in loading ads:", error);
  //       }
  //     };

  //     scriptElement.addEventListener("load", handleScriptLoad);

  //     return () => {
  //       scriptElement.removeEventListener("load", handleScriptLoad);
  //       document.body.removeChild(scriptElement);
  //     };
  //   };

  //   loadScript();
  // }, [dataAdSlot]);

  const prevDataAdSlot = useRef(dataAdSlot);

  useEffect(() => {
    if (prevDataAdSlot.current !== dataAdSlot) {
      prevDataAdSlot.current = dataAdSlot;
      loadScript();
    }
  }, [dataAdSlot]);

  const loadScript = () => {
    const scriptElement = document.createElement("script");
    scriptElement.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1755254689602096";
    scriptElement.async = true;
    document.body.appendChild(scriptElement);

    const handleScriptLoad = async () => {
      try {
        if (window?.adsbygoogle) {
          await window.adsbygoogle.push({});
        } else {
          scriptElement.removeEventListener("load", handleScriptLoad);
          loadScript();
        }
      } catch (error) {
        console.log("Error in loading ads:", error);
      }
    };

    scriptElement.addEventListener("load", handleScriptLoad);

    return () => {
      scriptElement.removeEventListener("load", handleScriptLoad);
      document.body.removeChild(scriptElement);
    };
  };

  // Initial script load
  useEffect(() => {
    loadScript();

    return () => {
      // Cleanup function if needed
    };
  }, []);

  return (
    <div>
      <h1>Google Ads</h1>
      {/* <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-google-pub-3940256099942544" // Replace with your AdSense client ID
        data-ad-slot="1234567890" // Use the test ad slot ID here
        data-ad-format="auto"
      ></ins> */}
      <ins
        className="adsbygoogle"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
        data-ad-width="160px"
        data-ad-height="600px"
        data-ad-client="ca-google-pub-3940256099942544"
        data-ad-slot={dataAdSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default GoogleAd;
