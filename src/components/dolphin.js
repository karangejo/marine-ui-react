import React from "react";

function Dolphin(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
        width={props.width || "100%"}
        height={props.height || "100%"}
        viewBox="0 0 648 504"
        style={props.style || null}>
      <g fillRule="evenodd" clipRule="evenodd" fill={props.fill || "#000000"} >
        <path d="M337.61 389.1c-1.168-.128-1.772-.24-2.379-.253-7.87-.168-15.742-.499-23.611-.442-16.464.12-32.901-.822-48.939-4.351-12.305-2.707-24.447-6.574-36.262-10.992-19.792-7.401-36.367-19.991-51.598-34.406-12.385-11.722-22.077-25.44-29.345-40.812-4.381-9.265-8.847-18.572-12.125-28.25-2.625-7.752-3.986-16.028-5.067-24.184-1.52-11.458-2.441-23.007-3.277-34.542-.657-9.072-.176-18.261-1.328-27.254-1.36-10.62-2.138-21.687-8.575-30.849-3.561-5.067-8.146-9.407-12.156-14.169-8.933-10.607-13.438-23.159-15.289-36.666-1.021-7.454-1.295-15.021-1.651-22.548-.076-1.603.49-4.125 1.575-4.708 2.199-1.18 4.914-.707 6.502 1.63 2.467 3.628 4.509 7.553 7.069 11.109 6.624 9.199 13.97 17.696 25.806 20.101 4.465.907 9.045 1.128 12.752 4.19 1.422 1.175 2.805 2.397 3.991 3.413 1.964-.498 3.894-1.516 5.708-1.341 4.227.406 6.012 4.004 8.353 7.025 2.323 2.998 5.086 5.83 8.164 8.022 3.943 2.81 8.25.741 12.195-.603 5.517-1.879 8.451-.032 8.85 5.778.518 7.533-2.224 13.932-6.178 20.107-3.494 5.457-7.561 10.311-13.427 13.136-3.478 1.675-7.369 2.491-11.076 3.687-.487.157-.984.279-1.765.498.174.812.208 1.603.507 2.276 4.002 9.001 7.471 18.3 12.204 26.902 7.506 13.645 16.861 25.954 29.644 35.315 15.354 11.244 32.308 18.113 51.455 18.717 10.21.322 20.442.199 30.659-.006 8.79-.178 13.256-6.506 16.864-13.242 4.425-8.261 7.132-17.142 7.21-26.647.019-2.275-.182-4.551-.167-6.826.022-3.546 1.854-5.321 5.356-5.315 5.033.008 9.579 1.869 12.865 5.372 8.296 8.845 16.552 17.784 24.08 27.277 5.888 7.425 10.574 15.795 16.006 23.598.935 1.342 2.834 2.548 4.445 2.796 10.965 1.687 21.935 3.86 32.975 4.398 12.209.596 24.521.016 36.738-.797 11.803-.786 23.516-3.164 35.317-3.668 13.546-.579 26.469 2.396 38.054 10.151 6.237 4.174 10.724 9.339 12.397 16.749 1.106 4.896 4.682 7.567 8.98 9.206 8.63 3.289 17.373 6.28 26.055 9.434 2.883 1.047 5.888 6.371 5.768 9.454-.105 2.687.543 5.426.265 8.078-.665 6.342-5.82 7.429-10.777 8.742-11.398 3.021-22.978 3.769-34.74 4.166-5.851.197-12.084 2.776-17.288 5.769-15.178 8.727-29.85 18.327-44.882 27.314-4.739 2.833-10.03 4.73-14.982 7.227-1.655.834-3.525 1.887-4.476 3.367-5.97 9.299-14.543 15.714-23.541 21.641-5.309 3.496-10.541 7.219-17.092 8.273-4.388.706-6.573-1.476-5.4-5.796.38-1.4 1.05-2.722 1.889-4.842-2.132 1.023-3.688 1.793-5.263 2.522-13.224 6.126-26.559 12.023-39.636 18.447-7.804 3.833-15.795 6.916-24.277 8.626-5.989 1.208-11.941.603-17.138-2.833-2.617-1.73-2.164-4.659.395-6.534 5.876-4.307 11.985-8.354 17.466-13.12 3.242-2.82 5.424-6.844 8.16-10.265 1.839-2.3 3.813-4.492 5.724-6.734.307-.357.607-.726 1.264-1.518zm-247-311.35c-.336 1.825-.526 2.526-.587 3.238-.778 9.13.34 18.104 2.398 26.976 3.675 15.846 11.044 29.464 23.497 40.307 2.821 2.457 5.333 6.266 6.135 9.866 2.854 12.807 5.449 25.688 5.019 38.997-.24 7.403.096 14.889.939 22.25 1.407 12.281 2.79 24.628 5.345 36.701 3.584 16.931 11.007 32.486 19.711 47.385 7.962 13.629 17.339 26.13 30.304 35.461 7.454 5.365 15.115 10.449 22.789 15.499 11.724 7.714 24.442 13.373 37.788 17.605 13.034 4.134 26.4 6.641 40.035 7.75 8.793.715 17.562 1.839 26.367 2.256 10.216.484 20.46.359 30.688.618.907.023 1.978.773 2.604 1.503.282.328-.148 1.583-.588 2.167-3.986 5.295-8.189 10.433-12.05 15.816-4.849 6.765-10.961 11.944-18.188 15.988-1.26.705-2.789 2.528-2.662 3.662.126 1.124 2.11 2.741 3.419 2.889 2.981.334 6.265.563 9.039-.346 8.391-2.748 16.675-5.87 24.857-9.2 8.389-3.414 16.625-7.209 24.897-10.903 10.85-4.845 21.33-10.348 30.675-17.784 3.244-2.581 5.865-5.612 10.357-6.821a240.382 240.382 0 0027.539-9.235c7.628-3.082 15.056-6.837 22.158-11.001 13.021-7.635 24.769-17.478 39.167-22.704 4.688-1.702 9.497-3.589 14.386-4.102 9.078-.951 18.266-.801 27.388-1.41 5.561-.371 10.747-2.113 14.7-6.369.496-.534.858-1.523.726-2.189-.086-.427-1.201-.921-1.846-.909-1.821.032-3.738-.002-5.44.543-8.938 2.858-18.05 2.509-27.157 1.558-10.948-1.144-21.844-2.847-32.807-3.787-6.942-.597-13.968-.212-20.953-.373-.623-.015-1.736-.787-1.755-1.243-.09-2.167 5.511-6.02 7.79-5.299-.401 3.652 2.266 3.024 4.498 3.005 14.531-.128 29.037.167 43.133 4.248 10.169 2.944 19.939.886 29.656-1.975.906-.267 2.209-2.072 2-2.762-1.191-3.936-3.506-7.101-7.727-8.276-6.58-1.832-13.217-3.473-19.764-5.417-3.216-.954-6.288-2.396-9.416-3.642-1.481-.589-2.93-1.263-4.414-1.846-1.063-.418-2.161-.75-3.244-1.12l.14-.933c1.291-.118 2.584-.339 3.874-.331 1.818.012 2.394-.957 1.584-2.338-2.726-4.646-4.92-9.886-8.61-13.621-6.811-6.894-15.169-11.555-25.233-12.174-8.267-.509-16.627-2.013-24.781-1.267-11.971 1.096-23.87 3.439-35.658 5.926-12.463 2.629-24.822 1.614-37.211.218-6.858-.773-13.65-2.137-20.466-3.276-1.913-.319-4.114-.311-5.629-1.301-2.287-1.497-4.435-3.486-6.035-5.704-8.347-11.56-16.3-23.407-24.801-34.849-4.67-6.286-9.908-12.203-15.349-17.842-3.415-3.539-7.327-1.807-8.064 3.103-.917 6.117-2.1 12.216-2.592 18.37-.772 9.656-3.53 18.422-10.219 25.593-1.584 1.697-3.721 3.522-5.858 3.921-4.001.746-8.196.722-12.298.596-5.047-.155-10.085-.697-15.12-1.153-5.125-.464-10.333-.587-15.34-1.644-8.261-1.743-16.492-3.787-24.545-6.312-9.44-2.959-18.447-7.05-26.51-12.926-7.018-5.115-12.631-11.581-17.714-18.564-4.206-5.779-9.097-11.144-12.651-17.29-3.81-6.588-6.513-13.832-9.498-20.875-1.364-3.219-2.494-6.591-3.207-10.002-.238-1.137.851-2.979 1.884-3.83.957-.788 2.649-.682 4.019-.966 5.238-1.087 10.784-1.768 14.632-5.882 3.133-3.35 5.811-7.178 8.339-11.025 2.633-4.007 3.756-8.571 3.819-13.413.025-1.954-.622-3.157-2.591-2.947-2.159.23-4.295.775-6.409 1.308-4.551 1.146-9.088 1.859-12.783-1.935-3.055-3.137-5.883-6.498-8.75-9.813-3.224-3.727-4.072-3.246-5.99-.14-.562.909-1.306 1.705-1.968 2.551-1.237 1.583-2.486 1.375-3.417-.202-.53-.898-.693-2.031-.936-3.078-1.428-6.154-5.032-8.745-11.248-9.789-4.784-.803-9.835-2.101-13.917-4.579-9.534-5.789-16.188-14.461-21.279-24.336-.706-1.365-1.631-2.619-3.02-4.824zm338.42 304.79c-.354-.405-.706-.811-1.06-1.215-.3-.046-.64-.208-.895-.12-4.695 1.613-9.614 2.796-14.003 5.022-4.362 2.212-8.264 5.377-12.226 8.316-2.902 2.152-6.338 3.961-7.098 8.021-.102.541.08 1.345.447 1.695.293.28 1.138.225 1.619.028 10.921-4.453 20.635-10.749 29.099-18.99 1.166-1.131 2.736-1.848 4.117-2.757z"></path>
        <path d="M456.8 309.85c-1.317-.162-3.529-.171-5.554-.791-1.06-.324-2.444-1.688-2.492-2.643-.05-1.011 1.082-2.545 2.098-3.06 3.179-1.609 6.535-1.902 9.58.442.953.734 2.444 2.474 2.304 2.651-1.026 1.291-2.372 2.345-3.701 3.364-.302.233-.932.037-2.235.037z"></path>
      </g>
    </svg>
  );
}

export default Dolphin;