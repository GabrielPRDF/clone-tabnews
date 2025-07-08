import imagem404 from "../assets/404.gif";
import load from "../assets/load.gif";

function Home() {
  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        textAlign: "center",
        paddingTop: "100px",   
      }}
    >
      <img src={imagem404.src} alt="Pagina 404" />
      <p
        style={{
          fontSize: "20px",
          margin: 0,
          fontWeight: "bold",
          color: "gray",
          fontFamily: "Baskerville",
        }}
      >
        Pagina em construção{" "}
      </p>
    </div>
  );
}

export default Home;
