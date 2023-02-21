import React, { useState } from 'react';

const MeasurementForm = () => {
  const [measurements, setMeasurements] = useState({
    height: '',
    weight: '',
    waist: '',
    chest: '',
    hips: '',
    inseam: '',
  });

  const handleChange = (event) => {
    setMeasurements({ ...measurements, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(measurements);
    // You can use this data to submit the measurements to a server or database
  };

  return (
    <div>
      <h2>Measurement Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="height">Height (cm)</label>
          <input type="text" id="height" name="height" value={measurements.height} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="weight">Weight (kg)</label>
          <input type="text" id="weight" name="weight" value={measurements.weight} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="waist">Waist (cm)</label>
          <input type="text" id="waist" name="waist" value={measurements.waist} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="chest">Chest (cm)</label>
          <input type="text" id="chest" name="chest" value={measurements.chest} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="hips">Hips (cm)</label>
          <input type="text" id="hips" name="hips" value={measurements.hips} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="inseam">Inseam (cm)</label>
          <input type="text" id="inseam" name="inseam" value={measurements.inseam} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MeasurementForm;
