import Container from "@/DI/Container";
import { ISeccionInformacionViewModel } from "@/domain/models/viewModels/ISeccionInformacionViewModel";
import React, { useEffect } from "react";

const InformacionView = () => {
  const informacionModel = Container.resolve(
    "InformacionViewModel"
  ) as ISeccionInformacionViewModel;

  useEffect(() => {
    informacionModel.getInformacion();
  }, []);

  return informacionModel.loading ? (
    <>Cargando</>
  ) : (
    <>
      <h1>Seccion informacion</h1>
      {informacionModel.informacion.map((info) => (
        <div key={info.id}>
          <h5>{info.titulo}</h5>
          <p>{info.informacion}</p>
        </div>
      ))}
      <br />
    </>
  );
};

export default InformacionView;
