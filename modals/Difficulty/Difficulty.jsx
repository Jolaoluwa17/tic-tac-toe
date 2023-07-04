import "./difficulty.css";
import { MdCancel } from "react-icons/md";
import { BsFillPeopleFill, BsFillPersonFill } from "react-icons/bs";
import { FaBrain } from "react-icons/fa";
import {HiMiniHandThumbUp} from "react-icons/hi2"
import Link from "next/link";

export function Difficulty(props) {
  return props.trigger ? (
    <div className="difficulty-modal">
      <div className="difficulty-modal-inner">
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
              <HiMiniHandThumbUp
                style={{ fontSize: "16px", marginRight: "5px" }}
              />
              Easy
            </button>
          </Link>
          <Link
            href={"./Hard"}
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              color: "#57708a",
              width: "60%",
            }}
          >
            <button>
              <FaBrain style={{ fontSize: "16px", marginRight: "5px" }} />
              Hard
            </button>
          </Link>
        </div>
      </div>
    </div>
  ) : null;
}
