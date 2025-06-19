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
      }}
    >
      <img src={imagem404.src} alt="Pagina 404" />
      {/*<div*/}
      {/*  style={{*/}
      {/*    marginTop: "-150px",*/}
      {/*    display: "flex",*/}
      {/*  }}*/}
      {/*>*/}
      <p
        style={{
          fontSize: "20px",
          margin: 0,
          marginTop: "-150px",
          fontWeight: "bold",
        }}
      >
        Pagina em construção{" "}
      </p>
    </div>
  );
}

export default Home;
