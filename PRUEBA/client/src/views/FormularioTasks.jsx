import React from "react";

function FormularioTasks() {
  return (
    <div>
      <div className="container">
        <div className="m-4 p-5">
          <div className="col-5 row-4 offset">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Example textarea
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
                <button className="btn btn-danger"></button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormularioTasks;
