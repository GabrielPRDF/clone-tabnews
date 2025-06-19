import imagem404 from "../assets/404.gif";
import load from "../assets/load.gif";

function Home() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        textAlign: "center",
      }}
    >
      <img src={imagem404.src} alt="Pagina 404" />
      <p
        style={{
          fontSize: "20px",
          margin: 0,
          fontWeight: "bold",
        }}
      >
        Pagina em construção{" "}
      </p>
    </div>
  );
}

export default Home;
