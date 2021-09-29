import useFetch from "../hooks/useFetch";

export default function America() {
  const {paises, isLoaded} = useFetch("/america")

  return (
    <main>
      <h2>América</h2>
      {
        isLoaded === false
          ? <h2>Cargando paises...</h2>
          : (
            <div className="listado-paises">
              {paises.map(function (pais) {
                return (
                  <div key={pais.cca2} className="pais">
                    <img src={pais.flags.png} alt={pais.name.common} />
                    <div className="info">
                      <h3>{pais.name.common}</h3>
                      <small>Capital: {pais.capital}</small>
                    </div>
                  </div>
                );
              })}
            </div>
          )
      }
    </main>
  );
}
