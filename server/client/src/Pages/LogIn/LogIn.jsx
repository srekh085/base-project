import React, { useLayoutEffect, useRef } from "react";
import LogInWrapper from "./Style/LogInWrapper";
import CouragePic from "../../Static/Img1.jpg";
import Logo_V2 from "../../Static/Logo_V2.png";
import LogInForm from "../../Components/LogInForm/LogInForm";
import { gsap } from "gsap";
import { useHistory, useParams, useLocation } from "react-router-dom";

export default () => {
  const history = useHistory();
  const wrapperRef = useRef();
  const location = useLocation();
  const params = useParams();

  const handleTo = (to) => {
    history.push(to);
  };
  useLayoutEffect(() => {
    if (wrapperRef && wrapperRef.current) {
      gsap.set(wrapperRef.current, {
        opacity: 0,
      });
      gsap.to(wrapperRef.current, 1, {
        opacity: 1,
      });
    }
  }, [location]);
  return (
    <LogInWrapper ref={wrapperRef} role={params.role}>
      {!params ||
        (!params.role && (
          <div>
            <div onClick={() => handleTo("/login/admin")}>Admin</div>
            <div onClick={() => handleTo("/login/teacher")}>Teacher</div>
            <div onClick={() => handleTo("/login/student")}>Student</div>
          </div>
        ))}
      {params && params.role && (
        <section>
          <div>
            <img src={CouragePic} alt="boy on the cliff" />
          </div>
          <div>
            <div>
              <img
                onClick={() => handleTo("/")}
                src={Logo_V2}
                alt="deenStrong logo"
              />
            </div>
            <div>
              <LogInForm role={params.role} />
            </div>
          </div>
        </section>
      )}
    </LogInWrapper>
  );
};
