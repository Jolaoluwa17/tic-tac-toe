import "./selectMode.css";
import { MdCancel } from "react-icons/md";
import { BsFillPeopleFill, BsFillPersonFill } from "react-icons/bs";
import Link from "next/link";

export function SelectMode(props) {
  return props.trigger ? (
    <div className="select-mode-modal">
      <div className="select-mode-modal-inner">
        <button
          className="close-btn"
          onClick={() => {
            props.setTrigger(false);
          }}
        >
          <div className="cancel-icon">
            <MdCancel />
          </div>
        </button>
        <div className="content">
            <div className="header">Choose a mode</div>
          <Link
            href={"./SinglePlayer"}
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              color: "#57708a",
              width: "60%",
            }}
          >
            <button>
              <BsFillPersonFill
                style={{ fontSize: "16px", marginRight: "5px" }}
              />
              Single Player
            </button>
          </Link>
          <Link
            href={"./Start"}
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              color: "#57708a",
              width: "60%",
            }}
          >
            <button>
              <BsFillPeopleFill
                style={{ fontSize: "16px", marginRight: "5px" }}
              />
              Double Player
            </button>
          </Link>
        </div>
      </div>
    </div>
  ) : null;
}
