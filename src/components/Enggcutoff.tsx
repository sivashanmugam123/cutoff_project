import { useEffect, useRef, useState } from "react";
function Enggcutoff({getCutoffMark}) {
  const [phyMrkObt, setPhyMrkObt] = useState();
  const [phyAggMrk, setPhyAggMrk] = useState();
  const [phyMaxMrk, setPhyMaxMrk] = useState();

  const [cheMrkObt, setCheMrkObt] = useState();
  const [cheAggMrk, setCheAggMrk] = useState();
  const [cheMaxMrk, setCheMaxMrk] = useState();

  const [matMrkObt, setMatMrkObt] = useState();
  const [matAggMrk, setMatAggMrk] = useState();
  const [matMaxMrk, setMatMaxMrk] = useState();

  const [totAggMrk, setTotAggMrk] = useState();

  const inputRef = useRef(null);

  
const onChangeAggregateHandle = (mark:any)=>{
  getCutoffMark(mark);
}
  const getPhyMrkObt = (phyMark: any) => {
    setPhyMrkObt(phyMark);
    let c = 0;
    if (phyMaxMrk == undefined || phyMaxMrk == "") {
      setPhyAggMrk((phyMark / 100) * 100);
      c = (phyMark / 100) * 100;
    } else {
      setPhyAggMrk((phyMark / phyMaxMrk) * 100);
      c = (phyMark / phyMaxMrk) * 100;
    }
    let phyMks = c;
    let cheMks = 0;
    let matMks = 0;

    if (cheAggMrk != undefined && cheAggMrk != "") {
      cheMks = cheAggMrk;
      // setTotAggMrk(phyMks +cheMks + matMks)
    }
    if (matAggMrk != undefined && matAggMrk != "") {
      matMks = matAggMrk;
      // setTotAggMrk(phyMks +cheMks + matMks)
    }
    setTotAggMrk(phyMks + cheMks + matMks);
    getCutoffMark(phyMks + cheMks + matMks)
  };

  const getCheMrkObt = (cheMark: any) => {
    setCheMrkObt(cheMark);
    let c = 0;
    if (cheMaxMrk == undefined || cheMaxMrk == "") {
      setCheAggMrk((cheMark / 100) * 50);
      c = (cheMark / 100) * 50;
    } else {
      setCheAggMrk((cheMark / cheMaxMrk) * 50);
      c = (cheMark / cheMaxMrk) * 50;
    }
    let phyMks = 0;
    let cheMks = c;
    let matMks = 0;
    setTotAggMrk(0);
    if (phyAggMrk != undefined && phyAggMrk != "") {
      phyMks = phyAggMrk;
      //setTotAggMrk(phyMks +cheMks + matMks)
    }

    if (matAggMrk != undefined && matAggMrk != "") {
      matMks = matAggMrk;
      // setTotAggMrk(phyMks +cheMks + matMks)
    }

    setTotAggMrk(phyMks + cheMks + matMks);
    getCutoffMark(phyMks + cheMks + matMks)
  };

  const getMatMrkObt = (matMark: any) => {
    setMatMrkObt(matMark);
    let c = 0;
    if (matMaxMrk == undefined || matMaxMrk == "") {
      setMatAggMrk((matMark / 100) * 50);
      c = (matMark / 100) * 50;
    } else {
      setMatAggMrk((matMark / matMaxMrk) * 50);
      c = (matMark / matMaxMrk) * 50;
    }
    let phyMks = 0;
    let cheMks = 0;
    let matMks = c;
    setTotAggMrk(0);
    if (phyAggMrk != undefined && phyAggMrk != "") {
      phyMks = phyAggMrk;
      //setTotAggMrk(phyMks +cheMks + matMks)
    }
    if (cheAggMrk != undefined && cheAggMrk != "") {
      cheMks = cheAggMrk;
      // setTotAggMrk(phyMks +cheMks + matMks)
    }

    setTotAggMrk(phyMks + cheMks + matMks);
    getCutoffMark(phyMks + cheMks + matMks)
  };

  const getPhyMaxMrk = (phyMark: any) => {
    setPhyMaxMrk(phyMark);
    let c = 0;
    if (phyMrkObt != "undefined" || phyMrkObt != "") {
      setPhyAggMrk((phyMrkObt / phyMark) * 100);
      c = (phyMrkObt / phyMark) * 100;
    }
    let phyMks = c;
    let cheMks = 0;
    let matMks = 0;

    if (cheAggMrk != undefined && cheAggMrk != "") {
      cheMks = cheAggMrk;
      // setTotAggMrk(phyMks +cheMks + matMks)
    }

    if (matAggMrk != undefined && matAggMrk != "") {
      matMks = matAggMrk;
      // setTotAggMrk(phyMks +cheMks + matMks)
    }
    setTotAggMrk(phyMks + cheMks + matMks);
    getCutoffMark(phyMks + cheMks + matMks)
  };

  const getCheMaxMrk = (cheMark: any) => {
    setCheMaxMrk(cheMark);
    let c = 0;
    if (cheMrkObt != "undefined" || cheMrkObt != "") {
      setCheAggMrk((cheMrkObt / cheMark) * 50);
      c = (cheMrkObt / cheMark) * 50;
    }
    let phyMks = 0;
    let cheMks = c;
    let matMks = 0;
    setTotAggMrk(0);
    if (phyAggMrk != undefined && phyAggMrk != "") {
      phyMks = phyAggMrk;
      //setTotAggMrk(phyMks +cheMks + matMks)
    }

    if (matAggMrk != undefined && matAggMrk != "") {
      matMks = matAggMrk;
      // setTotAggMrk(phyMks +cheMks + matMks)
    }

    setTotAggMrk(phyMks + cheMks + matMks);
    getCutoffMark(phyMks + cheMks + matMks)
  };

  const getMatMaxMrk = (matMark: any) => {
    setMatMaxMrk(matMark);
    let c;
    if (matMrkObt != "undefined" || matMrkObt != "") {
      setMatAggMrk((matMrkObt / matMark) * 50);
      c = (matMrkObt / matMark) * 50;
    }
    let phyMks = 0;
    let cheMks = 0;
    let matMks = c;
    setTotAggMrk(0);
    if (phyAggMrk != undefined && phyAggMrk != "") {
      phyMks = phyAggMrk;
      //setTotAggMrk(phyMks +cheMks + matMks)
    }
    if (cheAggMrk != undefined && cheAggMrk != "") {
      cheMks = cheAggMrk;
      // setTotAggMrk(phyMks +cheMks + matMks)
    }

    setTotAggMrk(phyMks + cheMks + matMks);
    getCutoffMark(phyMks + cheMks + matMks)
  };

  // useEffect(() => {
  //   const myInputRef = inputRef.current;
  //   myInputRef.onchange = e => setValue(e.target.value)
  // }, [])

  return (
    <>      
      <div className="row">
        <div className="col-sm-2">Subjects</div>
        <div className="col-sm-2">Marks Obtained</div>
        <div className="col-sm-2">Maximum Marks</div>
        <div className="col-sm-2">Aggregate</div>
        <div className="col-sm-2">Converted</div>
      </div>
      <div className="row">
        <div className="col-sm-2">Maths</div>
        <div className="col-sm-2">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="phyMrkObt1"
              value={phyMrkObt}
              aria-describedby="emailHelp"
              placeholder="Marks Obtained"
              onChange={(event) => getPhyMrkObt(event.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-2">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="phyMaxMrk1"
              value={phyMaxMrk}
              aria-describedby="emailHelp"
              placeholder="Maximum Marks"
              onChange={(event) => getPhyMaxMrk(event.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-2">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="phyAggMrk1"
              value={phyAggMrk}
              aria-describedby="emailHelp"
              placeholder="Aggregate"
            />
          </div>
        </div>
        <div className="col-sm-2">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Converted to 100"
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-2">Physics</div>
        <div className="col-sm-2">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="cheMrkObt1"
              value={cheMrkObt}
              aria-describedby="emailHelp"
              placeholder="Marks Obtained"
              onChange={(event) => getCheMrkObt(event.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-2">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="cheMaxMrk1"
              value={cheMaxMrk}
              aria-describedby="emailHelp"
              placeholder="Maximum Marks"
              onChange={(event) => getCheMaxMrk(event.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-2">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="cheAggMrk1"
              value={cheAggMrk}
              aria-describedby="emailHelp"
              placeholder="Aggregate"
            />
          </div>
        </div>
        <div className="col-sm-2">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Converted to 50"
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-2">Chemistry</div>
        <div className="col-sm-2">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="matMrkObt1"
              value={matMrkObt}
              aria-describedby="emailHelp"
              placeholder="Marks Obtained"
              onChange={(event) => getMatMrkObt(event.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-2">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="matMaxMrk1"
              value={matMaxMrk}
              aria-describedby="emailHelp"
              placeholder="Maximum Marks"
              onChange={(event) => getMatMaxMrk(event.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-2">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="matAggMrk1"
              value={matAggMrk}
              aria-describedby="emailHelp"
              placeholder="Aggregate"
            />
          </div>
        </div>
        <div className="col-sm-2">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Converted to 50"
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-2">
          <div className="form-group"></div>
        </div>
        <div className="col-sm-2">
          <div className="form-group">
            <h5>CutOff</h5>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="totAggMrk1"
              value={totAggMrk}
              aria-describedby="emailHelp"
              placeholder="Aggregate"
              onChange={(event) => onChangeAggregateHandle(event.target.value)}
             
            />
          </div>
        </div>
        <div className="col-sm-2">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="200"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Enggcutoff;
