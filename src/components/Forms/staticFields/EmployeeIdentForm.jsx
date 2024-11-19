function EmployeeInput({ labelv, namev, placeholderv }) {
  return (
    <div className="marginBottom">
      <label className="labelStyle">{labelv}</label>
      <input
        className="inputStyle"
        type="text"
        name={namev}
        placeholder={placeholderv}
      />
    </div>
  )
}

export default function EmployeeIdentForm() {
  return (
    <>
      <div className="fullWidth">
        <EmployeeInput
          labelv={"Nombre(s) del empleado"}
          namev={"nombre"}
          placeholderv={"nombre(s)"}
        />
      </div>

      <div className="twoColumns">
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

      <div className="twoColumns">
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
    </>
  )
}
