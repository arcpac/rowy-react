import { useState } from "react";
import classes from "./edit-modal.css";

function EditModal(props) {
  console.log(props);

  const [enteredTodo, setTodo] = useState("");

  const submitHandler = (event) => {
    console.log(event);
  };

  const editHandler = (event) => {
    setTodo(event.target.value);
  };

  return (
    <div className={classes.backdrop}>
      <div
        className={`${classes.position}`}
      >
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card">
            <div className="card-body">
              <form onSubmit={submitHandler}>
                <input type="text" value={props.name} onChange={editHandler} />
              </form>
              <button>Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
