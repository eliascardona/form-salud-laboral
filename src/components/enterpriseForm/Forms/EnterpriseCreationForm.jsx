import "./styles/EnterpriseCreationForm.css"

function EnterpriseInput({ labelv, namev, placeholderv }) {
  return (
    <div>
      <label className="labelStyle">{labelv}</label>
      <input type="text" name={namev} placeholder={placeholderv} />
    </div>
  );
}

export default function EnterpriseCreationForm() {
  return (
    <>
      <div className="oneColumn">
        <EnterpriseInput
          labelv={"Nombre de la empresa"}
          namev={"nombre"}
          placeholderv={"nombre(s)"}
        />
      </div>

      <div className="oneColumn">
        <EnterpriseInput
          labelv={"Dirección de la empresa"}
          namev={"direccion"}
          placeholderv={"direccion"}
        />
      </div>

      <div className="oneColumn">
        <div>
          <label className="labelStyle">Número de empleados participantes</label>
          <input type="number" name="num_empleados" placeholder="10" />
        </div>
      </div>

    </>
  )
}
