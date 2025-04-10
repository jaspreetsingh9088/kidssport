import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import girlimage from "../assets/images/girlimage.png";
import mumbai from "../assets/images/mumbai.png";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import dateicon from "../assets/images/dateicon.png";
import { useNavigate } from "react-router-dom"; // Import navigate


const EventDetail = () => {
  const { slug } = useParams();

  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [divisions, setDivisions] = useState([]);
  const [areas, setAreas] = useState([]);
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedAgeGroup, setSelectedAgeGroup] = useState("");
  const [filteredBatches, setFilteredBatches] = useState([]);
  const [selectedBatches, setSelectedBatches] = useState([]);
  const [groupedBatches, setGroupedBatches] = useState([]);
  const ageGroups = [...new Set(groupedBatches.map((group) => group.age_group))];
  const [allDivisions, setAllDivisions] = useState([]);

  

  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`https://mitdevelop.com/kidsadmin/api/event/${slug}`);
        console.log("Event API Response:", response.data); 
  
        if (response.data && response.data.data) {
          setEvent(response.data.data);
          setDivisions(response.data.data.divisions || []);
          setAreas(response.data.data.areas || []);
          setGroupedBatches(response.data.data.batches_grouped || []);
          setAllDivisions(response.data.data.all_divisions || []); // ✅ Store all divisions for modal
        }
      } catch (error) {
        console.error("Error fetching event:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvent();
  }, [slug]);
  
  
  
  useEffect(() => {
    if (event?.divisions) {
      setDivisions(event.divisions);
    } else {
      setDivisions([]);
    }
    setSelectedDivision("");
  }, [event]);
  
  useEffect(() => {
    if (selectedDivision && selectedAgeGroup && groupedBatches.length > 0) {
      const matchingGroup = groupedBatches.find(
        (group) =>
          group.division &&
          group.age_group === selectedAgeGroup &&
          event.divisions.find((d) => d.id === parseInt(selectedDivision))?.division === group.division
      );
  
      if (matchingGroup) {
        setFilteredBatches(matchingGroup.batches);
      } else {
        setFilteredBatches([]);
      }
    } else {
      setFilteredBatches([]);
    }
  }, [selectedDivision, selectedAgeGroup, groupedBatches, event]);

  
  useEffect(() => {
    if (selectedDivision && event?.areas) {
      const filteredAreas = event.areas.filter(
        (area) => area.division_id === parseInt(selectedDivision)
      );
      setAreas(filteredAreas);
    } else {
      setAreas([]);
    }
    setSelectedArea("");
  }, [selectedDivision, event]);
  
  const handleBatchSelection = (batch) => {
    const { age_group, id } = batch;
  
    setSelectedBatches(prev => {
      const current = prev[age_group] || [];
  
      // If already selected, deselect it
      if (current.includes(id)) {
        return {
          ...prev,
          [age_group]: current.filter(batchId => batchId !== id)
        };
      }
  
      // Else, select this batch (replace if already one selected)
      return {
        ...prev,
        [age_group]: [id]
      };
    });
  };

  const batchesByAgeGroup = filteredBatches.reduce((acc, batch) => {
    const { age_group } = batch;
    if (!acc[age_group]) acc[age_group] = [];
    acc[age_group].push(batch);
    return acc;
  }, {});
  
  

  useEffect(() => {
    if (event?.age_group) {
      setSelectedAgeGroup(event.age_group);
    }
  }, [event]);
  
  const [errors, setErrors] = useState({
    division: "",
    ageGroup: "",
    batches: "",
  });
  
  const validateForm = () => {
    let valid = true;
    let newErrors = { division: "", ageGroup: "", batches: "" };

    if (!selectedDivision) {
      newErrors.division = "Division is required";
      valid = false;
    }
    if (!selectedAgeGroup) {
      newErrors.ageGroup = "Age group is required";
      valid = false;
    }
    if (selectedBatches.length === 0) {
      newErrors.batches = "Please select at least one batch";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleRegisterClick = () => {
    console.log("Register button clicked!");
  
    // Run validation
    if (!validateForm()) {
      console.log("Validation failed:", errors);
      return; // Stop execution if validation fails
    }
  
    const token = localStorage.getItem("token");
  
    if (!token) {
      Swal.fire({
        icon: "warning",
        title: "Authentication Required",
        text: "You need to log in to register for this event.",
        confirmButtonText: "Go to Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    } else {
      // ✅ Prepare selected data
      const registrationData = {
        event_id: event.id,
        event_name: event.event_name,
        division_id: selectedDivision,
        division_name: divisions.find((d) => d.id === parseInt(selectedDivision))?.division || "",
        area_id: selectedArea,
        area_name: areas.find((a) => a.id === parseInt(selectedArea))?.area || "",
        age_group: selectedAgeGroup,
        selected_batches: selectedBatches[selectedAgeGroup] || [],
      };
  
      console.log("Registration Data:", registrationData);
  
      // ✅ Pass data via `navigate` state
      navigate(`/Checkout/${slug}`, { state: registrationData });
    }
  };
   
  
  if (loading) return <div>Loading...</div>;
  if (!event) return <div>Event not found!</div>;

  return (
    <section className="post-detail">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="post-background-color">
              <img src={`https://mitdevelop.com/kidsadmin/storage/app/public/${event.event_image}`} alt="Event" className="group-play-child" />
              <div className="d-flex align-items-center gap-3">
                <img src={girlimage} alt="Organizer" className="girl-image" />
                <p className="admin-bg">By {event.user}</p>
                <p className="admin-bg"><img src={dateicon} alt="Tick icon" className="date-icon" /> Date :  {new Date(event.created_at).toLocaleDateString()}</p>
              </div>
              <h1 className="top">{event.event_name}</h1>
              <div className="post-pg" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(event.description) }} />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="post bg-back-color">
              <h4 className="post">Register for Event</h4>
          {/* Division Dropdown */}
<select
  className="form-control mb-2"
  value={selectedDivision}
  onChange={(e) => {
    setSelectedDivision(e.target.value);
    setSelectedArea(""); // Reset area when division changes
  }}
>
  <option value="">Select Division</option>
  {divisions.map((division) => (
    <option key={division.id} value={division.id}>
      {division.division}
    </option>
  ))}
</select>
<div className="text-danger">{errors.division}</div>

{/* Area Dropdown - filtered based on selected division */}
<select 
  className="form-control mb-2" 
  value={selectedArea} 
  onChange={(e) => setSelectedArea(e.target.value)}
>
  <option value="">Select Area</option>
  {areas.length > 0 ? (
    areas.map((area) => (
      <option key={area.id} value={area.id}>{area.area}</option>
    ))
  ) : (
    <option disabled>No areas available</option>  
  )}
</select>


              
              {/* Age Group Dropdown */}
              <select
  className="form-control mb-2"
  value={selectedAgeGroup}
  onChange={(e) => setSelectedAgeGroup(e.target.value)}
>
  <option value="">Select Age Group</option>
  {ageGroups.map((age) => (
    <option key={age} value={age}>
      {age}
    </option>
  ))}
</select>

              {/* Batches Selection */}
              {Object.entries(batchesByAgeGroup).map(([ageGroup, batches]) => (
  <div key={ageGroup}>
    <h5 className="">{ageGroup}</h5>
    
    {batches.map((batch) => {
      const selectedForGroup = selectedBatches[ageGroup] || [];
      const isSelected = selectedForGroup.includes(batch.id);
      const shouldDisable = selectedForGroup.length >= 1 && !isSelected && batches.length > 1;

      return (
        <div key={batch.id} className="form-check border p-2 mb-2 rounded">
          <input
            type="checkbox"
            className="form-check-input"
            id={`batch-${batch.id}`}
            value={batch.id}
            checked={isSelected}
            disabled={shouldDisable}
            onChange={() => handleBatchSelection(batch)}
          />
          <label className="form-check-label" htmlFor={`batch-${batch.id}`}>
            <strong>{batch.batch_name}</strong>
          </label>
          <p className="small text-muted mb-0">
            Boys: {batch.boys_quantity} | Girls: {batch.girls_quantity} | Total: {batch.total}
          </p>
          <p className="small text-warning mb-0">
            <b>Waiting List</b> - Boys: {batch.waiting_boys}, Girls: {batch.waiting_girls}, Total: {batch.waiting_total}
          </p>
        </div>
      );
    })}
  </div>
))}
<div className="text-danger">{errors.batches}</div>

              
              <button className="btn btn-success mt-3" onClick={handleRegisterClick}>
                Register Event
              </button>

              <div className="check-division-bg">
              <button 
          type="button" 
          className="btn btn-primary" 
          data-bs-toggle="modal" 
          data-bs-target="#staticBackdrop"
        >
          Check Division
        </button>
        </div>



            </div>
            {/* Modal for checking divisions */}
<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <div className="d-flex gap-3 align-items-center">
          <div><span className="checkdivisionicon"><img src={mumbai} alt="checkdivision"/></span></div>
          <div><h5 className="modal-title" id="staticBackdropLabel">Check Division</h5>
          </div>
        </div>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div className="row">
          {/* Map through allDivisions and distribute evenly into columns */}
          {allDivisions.length > 0 ? (
            allDivisions.reduce((rows, division, index) => {
              const colIndex = index % 4; // Divide into 4 columns
              if (!rows[colIndex]) rows[colIndex] = [];
              rows[colIndex].push(division);
              return rows;
            }, []).map((colDivisions, colIndex) => (
              <div key={colIndex} className="col-lg-3">
                <ul className="country-cities-name">
                  {colDivisions.map((division) => (
                    <a href="#"><li key={division.id}>{division.division}</li></a>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p>No divisions available.</p>
          )}
        </div>
        <p className="upcoming-event-headline">Upcoming events are coming in this division. Stay tuned!</p>
      </div>
    </div>
  </div>
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetail;
