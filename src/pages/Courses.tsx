import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Enggcutoff from "../components/Enggcutoff";
import configData from '../config/config.json';

import "./Courses.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [subcourses, setSubcourses] = useState([]);
  const [state, setState] = useState(0);
  const [substate, setSubstate] = useState(0);
  const [category, setCategory] = useState();
  const [cutoffMrk, setCutoffMrk] = useState(0);
  const [community, setCommunity] = useState("ALL");
  const url = configData.SERVER_URL
  const nvigate = useNavigate();
  const params = useParams();
  const domainID = params.domainID;
  const onValueChange_community = (event: any) => {
    setCommunity(event.target.value);
  };

  const getCutoffMark = (mark: any) => {
    setCutoffMrk(mark);
  };

  const onValueChange_sub = async (event: any) => {
    setSubstate(event.target.value);
    if (subcourses.length > 0) {
      await getSubCourseCategory(event.target.value);
    }
  };
  const handleClick = () => {
    nvigate(
      "/college/" +
        domainID +
        "/" +
        state +
        "/" +
        substate +
        "/" +
        cutoffMrk +
        "/" +
        community
    );
  };
  const getSubCourseCategory = async (subcourseId: any) => {
    subcourses.map((scour: any) => {
      if (scour.subcourse_id == subcourseId) {
        setCategory(scour.category);
      }
    });
  };
  const getCourseCategory = async (courseId: any) => {

    courses.map((cour: any) => {
      if (cour.course_id == courseId) {
        setCategory(cour.category);
      }
    });
  };
  const onValueChange = async (event: any) => {
    let courseId = event.target.value;
    setState(event.target.value);
    await getCourseCategory(courseId);
    //  http://localhost:8082/subcourses?domain_id=40&course_id=CH0002
    try {
      const res1 = await axios.get(
        url +"subcourses?domain_id=" +
          domainID +
          "&course_id=" +
          courseId
      );
      setSubcourses(res1.data);     
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchcoursins = async () => {
      try {
        const res = await axios.get(
          url +"courses?domain_id=" + domainID
        );
        setCourses(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchcoursins();
  }, []);

  return (
    <>
       <div style={ {minHeight:'450px'}}>
      <div className="row">
      <div className="col-sm-12 text-center">
       <h4 style={{color:'blue'}}> Select Your course </h4> 
       </div>
       </div>
        <div className="row">
          <div className="col-sm-4">
            <div>
              {courses.map((cours: any) => (
                <div>
                  <div className="form-check">
                    <input
                      type="radio"
                      value={cours.course_id}
                      checked={state == cours.course_id}
                      onChange={onValueChange}
                    />
                    <label className="form-check-label radiospace">
                      {cours.course_name}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-sm-7 overflow-auto divscroll">
            <div>
              {subcourses.map((scours: any) => (
                <div>
                  <div className="form-check">
                    <input
                      type="radio"
                      value={scours.subcourse_id}
                      checked={substate == scours.subcourse_id}
                      onChange={onValueChange_sub}
                    />
                    <label className="form-check-label radiospace">
                      {scours.sub_course_name}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12" style={{ backgroundColor: "whitesmoke" }}>
            <h6>Please select your community </h6>
          </div>
          <div className="col-sm-1">
            <div>
              <div className="form-check">
                <input
                  type="radio"
                  value="OC"
                  checked={community == "OC"}
                  onChange={onValueChange_community}
                />
                <label className="form-check-label radiocastspace">OC</label>
              </div>
            </div>
          </div>
          <div className="col-sm-1">
            <div>
              <div className="form-check">
                <input
                  type="radio"
                  value="BC"
                  checked={community == "BC"}
                  onChange={onValueChange_community}
                />
                <label className="form-check-label radiocastspace">BC</label>
              </div>
            </div>
          </div>

          <div className="col-sm-1">
            <div>
              <div className="form-check">
                <input
                  type="radio"
                  value="BCM"
                  checked={community == "BCM"}
                  onChange={onValueChange_community}
                />
                <label className="form-check-label radiocastspace">BCM</label>
              </div>
            </div>
          </div>

          <div className="col-sm-1">
            <div>
              <div className="form-check">
                <input
                  type="radio"
                  value="MBC"
                  checked={community == "MBC"}
                  onChange={onValueChange_community}
                />
                <label className="form-check-label radiocastspace">MBC</label>
              </div>
            </div>
          </div>

          <div className="col-sm-2">
            <div>
              <div className="form-check">
                <input
                  type="radio"
                  value="MBCDNC"
                  checked={community == "MBCDNC"}
                  onChange={onValueChange_community}
                />
                <label className="form-check-label radiocastspace">MBCDNC</label>
              </div>
            </div>
          </div>

          <div className="col-sm-2">
            <div>
              <div className="form-check">
                <input
                  type="radio"
                  value="MBCV"
                  checked={community == "MBCV"}
                  onChange={onValueChange_community}
                />
                <label className="form-check-label radiocastspace">MBCV</label>
              </div>
            </div>
          </div>

          <div className="col-sm-1">
            <div>
              <div className="form-check">
                <input
                  type="radio"
                  value="SC"
                  checked={community == "SC"}
                  onChange={onValueChange_community}
                />
                <label className="form-check-label radiocastspace">SC</label>
              </div>
            </div>
          </div>

          <div className="col-sm-1">
            <div>
              <div className="form-check">
                <input
                  type="radio"
                  value="SCA"
                  checked={community == "SCA"}
                  onChange={onValueChange_community}
                />
                <label className="form-check-label radiocastspace">SCA</label>
              </div>
            </div>
          </div>
          <div className="col-sm-1">
            <div>
              <div className="form-check">
                <input
                  type="radio"
                  value="ST"
                  checked={community == "ST"}
                  onChange={onValueChange_community}
                />
                <label className="form-check-label radiocastspace" >ST</label>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            {category == "Enggcutoff" && (
              <Enggcutoff getCutoffMark={getCutoffMark} />
            )}
           
            <Button
              className="btn btn-default"
              type="submit"
              onClick={handleClick}
            >
              Show Colleges for My CutOff
            </Button>
            {(subcourses.length == 0 || state ==0 || substate ==0) && (
              <div style={{margin:'200px'}}></div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;

//onClick={() => nvigate("college/" + domainID + "/" + state + "/" + substate)}
