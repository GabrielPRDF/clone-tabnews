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
      <img src={imagem404.src} alt="Pagina 404" />
    </div>
  );
}

export default Home;
