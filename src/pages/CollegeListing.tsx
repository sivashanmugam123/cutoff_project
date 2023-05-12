import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./CollegeListing.css";
import configData from "../config/config.json";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ModelPopUp from "../layouts/ModelPopUp";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Form } from "react-bootstrap";
import React, { Component } from "react";

function CollegeListing() {
  const [courseName, setCourseName] = useState();
  const [collegeList, setCollegeList] = useState([]);
  const [collegeListAll, setCollegeListAll] = useState([]);
  const [emptyList, setEmptyList] = useState('');
  const [districtList, setDistrictList] = useState([]);
  const params = useParams();
  const domainID = params.domainID;
  const courseID = params.courseID;
  const subcourseID = params.subcourseID;
  let cutoffMark = params.cutoffmark;
  if (params.cutoffmark == "0"){
    cutoffMark ="200";
  }
  const maxcutoff = 200;
  const community = params.community;
  const url = configData.SERVER_URL
  const nvigate = useNavigate();
  const onChangeHandlerColor = (event:any) =>{    
    let newArray = collegeListAll.slice();
    setCollegeList(newArray);
 
    const filteredCars = newArray.filter((item) => {
      if (item.district ==event.target.value){        
     return item
      } 
    });
    if (event.target.value == "ALL District"){
      setCollegeList(newArray)
    } else {
    setCollegeList(filteredCars)
    } 
  }

  const handleClick = () => {
    nvigate( "/Domains/courses/" + domainID );
  };
  
  useEffect(() => {
    const fetchcoursins = async () => {
      try {
        if (subcourseID == "0") {
          const res = await axios.get(
            url +"coursesname?course_id=" + courseID
          );
          let courName = res.data;
          setCourseName(courName[0].course_name);
         // console.log(courName);
        } else {
          const res = await axios.get(
            url +"subcoursesname?course_id=" +
              courseID +
              "&subcourse_id=" +
              subcourseID
          );
          let courName = res.data;
          setCourseName(courName[0].sub_course_name);
          //console.log(courName[0].sub_course_name);
        }
        if (subcourseID == "0") {
          const res1 = await axios.get(
            url +"subcoursesname?course_id=" +
              courseID +
              "&subcourse_id=" +
              subcourseID
          );
        } else {
          if (community == "ALL") {
            const res1 = await axios.get(url +"collegelisting_subcourse_all" );
            setCollegeList(res1.data);
            setCollegeListAll(res1.data);
            if (collegeList.length >0){
              setEmptyList('')
            }
          } else {
            let cutoff = cutoffMark;
            if (cutoffMark == 0) {
              cutoff = 200;
            }
            const res1 = await axios.get(
              url +"collegelisting_subcourse" +
                "_" +
                community.toLowerCase() +
                "?domain_id=" +
                domainID +
                "&course_id=" +
                courseID +
                "&subcourse_id=" +
                subcourseID +
                "&cutoff_" +
                community.toLowerCase() +
                "=" +
                cutoff
            );
            setCollegeList(res1.data);
            setCollegeListAll(res1.data);
            if (res1.data.length > 0){
              setEmptyList('')
            }
          }

          
          const res2 = await axios.get(url +"collegelisting_district");
          setDistrictList(res2.data);


        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchcoursins();
  }, []); 


  return (
    <>
    <div style={ {minHeight:'450px'}}>
      <h4 className="heading">
        The college List for your <span style={{color:"blue"}}> cutoff mark {cutoffMark}</span> for {courseName} and{" "}
        {community} is{" "}
      </h4>
      <h6 className="subheading">
        The prediction is based on last year cutoff data 2022
      </h6>
      {cutoffMark == 0 && (
        <h6 className="subheading">
          Since cutoff is 0 we have taken the max cutoff
        </h6>
      )}
<div className="row" style={{margin:'5px'}}>
      <div className="col" style={{marginTop:'15px'}}>  <Button variant="primary" onClick={handleClick} >Back</Button> </div>
      <div className="col"></div>
      <div className="col">
          
    
    <div>
       
        Select any District :
        <Form.Control
          as="select"
          
          onChange={onChangeHandlerColor}
        >
        {districtList.map((dist: any) => (
       
          <option value={dist.district}>{dist.district}</option>
          
       
        ))}
         </Form.Control>
      </div>
    
    
      </div>
</div>
      {community == "OC" && (
      <table className="table table-striped">
        <thead className=" fixheader">
          <tr className="tableheading">
          <th scope="col">College Code</th>
            <th scope="col">College Name for cutoff- {cutoffMark} & course -{courseName}</th>
            <th scope="col">Cutoff Marks</th>
            <th scope="col">{community} Rank</th>
            <th scope="col">seats</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {collegeList.length == 0 && (
            <h2>
              No Colleges found for your cutoff please redefine your selection Or reach out to us
            </h2>
          )}
          {collegeList.map((lst: any) => (
            <tr>
               <td>
                <label className="form-check-label">{lst.college_ID}</label>
              </td>
              <td>
                <label className="form-check-label">
                  <a href="#" className="subheading">
                    {lst.college_name}
                  </a>
                </label>
              </td>
              <td>
                {lst.cutoff == 0 && (<label className="form-check-label">Not Availed</label>)}
                {lst.cutoff > 0 && (<label className="form-check-label">{lst.cutoff}</label>)}               
              </td>
              <td>
             <label className="form-check-label">{lst.rk}</label>
             </td>
              <td>
                <label className="form-check-label">{lst.seat}</label>
              </td>
             <td>
              <ModelPopUp>  </ModelPopUp>
             </td>
            </tr>
          ))}
        </tbody>
      </table>
  )
}




{community == "ALL" && (
      <table className="table table-striped">
        <thead className=" fixheader">
          <tr className="tableheading">
          <th scope="col">College Code</th>
            <th scope="col">College Name for cutoff- {cutoffMark} & course -{courseName}</th>
            <th scope="col">Course</th>
            <th scope="col">Cutoff Marks</th>
            <th scope="col">{community} Rank</th>
          </tr>
        </thead>
        <tbody>
          {collegeList.length == 0 && (
            <h2>
              loading ...
            </h2>
          )}
          {collegeList.map((lst: any) => (
            <tr>
               <td>
                <label className="form-check-label">{lst.college_ID}</label>
              </td>
              <td>
                <label className="form-check-label">
                  <a href="#" className="subheading">
                    {lst.college_name}
                  </a>
                </label>
              </td>
              <td>
              <label className="form-check-label">
                {lst.sub_course_name}
                </label>
              </td> 
              <td>
                <table className="table1">
                  <thead>
                    <tr>
                    <th>OC</th>
                    <th>BC</th>
                    <th>BCM</th>
                    <th>MBC</th>
                    <th>SC</th>
                    <th>SCA</th>
                    <th>ST</th>
                    </tr>
                   </thead>
                   <tbody>
                   <th>{lst.c_oc}</th>
                    <th style={{color:'red'}}>{lst.c_bc}</th>
                    <th>{lst.c_bcm}</th>
                    <th style={{color:'red'}}>{lst.c_mbc}</th>
                    <th>{lst.c_sc}</th>
                    <th style={{color:'red'}}>{lst.c_sca}</th>
                    <th>{lst.c_st}</th>
                   </tbody>
                </table>                            
              </td>
              <td>
              <table>
                  <thead>
                    <tr>
                    <th>OC</th>
                    <th>BC</th>
                    <th>BCM</th>
                    <th>MBC</th>
                    <th>SC</th>
                    <th>SCA</th>
                    <th>ST</th>
                    </tr>
                   </thead>
                   <tbody>
                   <th>{lst.r_oc}</th>
                    <th style={{color:'red'}}>{lst.r_bc}</th>
                    <th>{lst.r_bcm}</th>
                    <th style={{color:'red'}}>{lst.r_mbc}</th>
                    <th>{lst.r_sc}</th>
                    <th style={{color:'red'}}>{lst.r_sca}</th>
                    <th>{lst.r_st}</th>
                   </tbody>
                </table>   
             </td>
        
            </tr>
          ))}
        </tbody>
      </table>
  )
}










{community != "OC" && community !="ALL" &&  (
      <table className="table table-striped">
        <thead className=" fixheader">
          <tr className="tableheading">
          <th scope="col">College Code</th>
            <th scope="col">College Name for cutoff- {cutoffMark} & course -{courseName}</th>
            <th scope="col">OC cutoff</th>
            <th scope="col">{community} Cutoff </th>
            
            <th scope="col">{community} Rank</th>
            <th scope="col">seats</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {collegeList.length == 0 && (
            <h2> {emptyList} {collegeList.length}
              No Colleges found for your cutoff please redefine your selection Or reach out to us
            </h2>
          )}
          {collegeList.map((lst: any) => (
            <tr>
               <td>
                <label className="form-check-label">{lst.college_ID}</label>
              </td> 
              <td>
                <label className="form-check-label">
                  <a href="#" className="subheading">
                    {lst.college_name}
                  </a>
                </label>
              </td>
              <td>
             <label className="form-check-label">{lst.cutoff_oc}</label>
             </td>
              <td>
                {lst.cutoff == 0 && (<label className="form-check-label">Not Availed</label>)}
                {lst.cutoff > 0 && (<label className="form-check-label">{lst.cutoff}</label>)}
               
              </td>
            
             <td>

             {lst.rk == 0 && (<label className="form-check-label">{lst.rank_oc}(oc)</label>)}
                {lst.rk > 0 && (<label className="form-check-label">{lst.rk}</label>)}


             
             </td>
              <td>
                <label className="form-check-label">{lst.seat}</label>
              </td>
             <td>
              <ModelPopUp>  </ModelPopUp>
             </td>
            </tr>
          ))}
        </tbody>
      </table>
  )
}

      </div>
    </>
  );
}

export default CollegeListing;
