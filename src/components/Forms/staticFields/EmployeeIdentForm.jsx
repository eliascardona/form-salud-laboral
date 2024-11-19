// nombre, ide, apellidoMaterno, apellidoPaterno

function EmployeeInput({ labelv, namev, placeholderv }) {
  const inputStyle = {
    width: "90%",
    padding: "10px",
    margin: "5px 0",
    fontSize: "14px",
    boxSizing: "border-box",
  };
  const labelStyle = {
    display: "block",
    marginBottom: "15px",
    fontWeight: "bold",
  };

  return (
    <div style={{ marginBottom: "15px" }}>
      <label style={labelStyle}>{labelv}</label>
      <input
        style={inputStyle}
        type="text"
        name={namev}
        placeholder={placeholderv}
      />
    </div>
  );
}

export default function EmployeeIdentForm() {
  async function handleEmployeeSubmit(evt) {
    evt.preventDefault();
    const temp = {
      nombre: evt.target.nombre.value,
      apellidoMaterno: evt.target.apellidoMaterno.value,
      apellidoPaterno: evt.target.apellidoPaterno.value,
      edad: evt.target.edad.value,
      empresa: {
        id: evt.target.ide.value,
      },
    };
    console.log(temp);
    const r = await fetch("http://127.0.0.1:8080/trabajador", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(temp),
    });
    // const j = r.json()
    console.log({ ...r });
  }

  const formStyle = {
    width: "100%",
    display: "grid",
    gridTemplateRows: "repeat(4, 1fr)",
    gap: "10px",
  };

  const twoColumns = {
    width: "95%",
    justifySelf: "center",
    display: "grid",
    gridTemplateColumns: "50% 50%",
  };

  return (
    <form
      id="emp-form"
      key={"e-f"}
      onSubmit={(e) => handleEmployeeSubmit(e)}
      style={formStyle}
    >
      <div style={{ width: "100%" }}>
        <EmployeeInput
          labelv={"Nombre(s) del empleado"}
          namev={"nombre"}
          placeholderv={"nombre(s)"}
        />
      </div>

      <div style={twoColumns}>
        <EmployeeInput
          labelv={"apellido paterno"}
          namev={"apellidoPaterno"}
          placeholderv={"paterno"}
        />
        <EmployeeInput
          labelv={"apellido Materno"}
          namev={"apellidoMaterno"}
          placeholderv={"materno"}
        />
      </div>

      <div style={twoColumns}>
        <EmployeeInput
          labelv={"edad del empleado"}
          namev={"edad"}
          placeholderv={"edad"}
        />
        <EmployeeInput
          labelv={"id empresa"}
          namev={"ide"}
          placeholderv={"ide"}
        />
      </div>

      <div>
        <button type="submit">{"Enviar a Java Spring"}</button>
      </div>
    </form>
  );
}
