import "./profilemenudrop.css";
import { Link } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const ProfileMenuDrop = () => {
  const [isProfileActive, setProfileActive] = useState("false");
  // Toggle the dropdown
  const handleToggle = () => {
    setProfileActive(!isProfileActive);
  };

   // Hide the dropdown when user clicks outside the element
  function useOutsideHandler(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target.parentElement)) {
          setProfileActive(!!isProfileActive);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperProfileRef = useRef(null);
  useOutsideHandler(wrapperProfileRef);

  return (
    <div
      className="profile dropdown"
      onClick={handleToggle}
      ref={wrapperProfileRef}
    >
      <img
        className="profile-pic dropbtn"
        src="https://i.pinimg.com/474x/ca/a9/35/caa9352cd119efe5641d6f7c3cc755fb.jpg"
        alt="profile"
      />
      <div className="profile-hightlight-dropdown">
        <p> Shalini Y S </p>
        <p> ysshalini911@gmail.com </p>
      </div>
      <div
        className={
          isProfileActive
            ? "profile-details-dropdown dropdown-hide"
            : "profile-details-dropdown dropdown-show"
        }
      >
        <div className="first-detail">
          <img
            className=""
            src="https://i.pinimg.com/474x/ca/a9/35/caa9352cd119efe5641d6f7c3cc755fb.jpg"
            alt="profile"
          />
          <p className="detail-text"> Shalini Y S </p>
          <p className="detail-text"> ysshalini911@gmail.com </p>
             </div>
      
        <div className="third-detail">
          <a href="https://github.com/YSShalini"> GitHub</a>
        </div>
        <div className="third-detail">
          <a href="https://www.linkedin.com/in/shalini-y-s-bb269b23b/">LinkedIn</a>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenuDrop;
