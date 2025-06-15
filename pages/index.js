function Home() {
  return (
    <div>
      <div className="container">
        <div className="container">
          <div className="flex">
            <div>Página em construção</div>
            <div className="loading-container">
              <div className="loading"></div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 90vh;
          margin: 0;
          background-image: url("assets/404.gif");
        }

        .loading-container {
          position: relative;
          width: 50px;
          height: 50px;
          margin: auto;
        }

        .loading {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 4px solid #3498db;
          border-radius: 50%;
          border-top-color: transparent;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

export default Home;
