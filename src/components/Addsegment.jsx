const Addsegment = () => {
  return (
    <>
      <div className="container">
        <div className="saveSegment">
          <span>save segment</span>
        </div>
        <div className="segmentContainer">
          <div className="header">Saving Segment</div>
          <div className="search-box">
            <label>Enter the Name of the Segment</label>
            <input placeholder="Name of the segment" />
          </div>
          <div>
            <p>
              To Save your segment, you need to add the schemas to build the
              query
            </p>
          </div>
          <div>
            <select className="dropdown">
              <option value="fruit">Fruit</option>
              <option value="vegetable">Vegetable</option>
              <option value="meat">Meat</option>
            </select>
          </div>
        </div>
      </div>
    </>
  )
}

export default Addsegment
