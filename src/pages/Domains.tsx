import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './Domains.css';
const Domains = () => {
  const [domains, setDomains] = useState([]);
  const [state, setState] = useState(0);
  const nvigate = useNavigate();
  const url = import.meta.env.VITE_REACT_API_URL;
  const onValueChange = (event: any) => {
    setState(event.target.value);
  };

  useEffect(() => {
    const fetchDomains = async () => {
      try {

        const res = await axios.get(url + "domains");
        setDomains(res.data);
       // console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDomains();
  }, []);

  return (
    <>
      <h2 className="heading">Select your Course Domain</h2>
      <div style={ {minHeight:'auto'}}>
        {domains.map((doma: any) => (
          <div>
            <div className="form-check">
              <input
                type="radio"
                value={doma.domain_id}
                checked={state == doma.domain_id}
                onChange={onValueChange}
              />
              <label className="form-check-label radiospace">{doma.domain_name}</label>
            </div>
          </div>
        ))}
        <Button
          className="btn btn-default buttonstyl" 
          type="submit"
          onClick={() => nvigate("courses/" + state)}
        >
          NEXT
        </Button>
      </div>
    </>
  );
};

export default Domains;
