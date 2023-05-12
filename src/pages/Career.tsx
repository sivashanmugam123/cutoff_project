import { Button } from 'react-bootstrap';
import About from './About';
import './Career.css';
import {useNavigate}  from 'react-router-dom'
function Career(){
const nvigate = useNavigate()
 return (
    <>
      <div className="container"  style={ {minHeight:'400px'}}>
        <div className="row">
          <div className="col-md-12">
            <h2 style={{ color: "#dc3555" }}>
              <strong>Select your Career path</strong>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <button className="tile purple" onClick={()=> nvigate('Domains')}> 
            
              <h4 className="title" >
                <strong>AFTER 12TH - ALL TN DOMAINS</strong>
              </h4>
              </button>
          </div>
          <div className="col-sm-6">
            <a href="index23.html" className="tile orange">
              <h4 className="title">
                <strong>ALL INDIA ENTRANCES</strong>
              </h4>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <a href="index22.html" className="tile green">
              <h4 className="title">
                <strong>MARINE ADMISSIONS</strong>
              </h4>
            </a>
          </div>
          <div className="col-sm-6">
            <a href="index22.html" className="tile green">
              <h4 className="title">
                <strong>DEEMED UNIVERSITIES</strong>
              </h4>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <a href="index22.html" className="tile orange">
              <h4 className="title strong">
                <strong>MBBS ABROAD</strong>
              </h4>
            </a>
          </div>
          <div className="col-sm-6">
            <a href="index22.html" className="tile purple">
              <h4 className="title">
                <strong>EDU LOANS & SCHOLARSHIPS</strong>
              </h4>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <a href="index22.html" className="tile green">
              <h4 className="title">
                <strong>CAREER GUIDANCES</strong>
              </h4>
            </a>
          </div>
          <div className="col-sm-6">
            <a href="index22.html" className="tile green">
              <h4 className="title">
                <strong>ENTRANCES ABROAD STUDIES</strong>
              </h4>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Career;