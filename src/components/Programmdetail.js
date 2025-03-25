import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import footballsports from '../assets/images/footballsports.png';
import arrowtransparent from '../assets/images/arrowtransparent.png';
import listdot from '../assets/images/listdot.png';

function Programmdetail() {
  
        const [events, setEvents] = useState([]);
        const [allEvents, setAllEvents] = useState([]);
        const [selectedCity, setSelectedCity] = useState("");
        const [selectedState, setSelectedState] = useState("");
        const [states, setStates] = useState([]);
        const [cities, setCities] = useState([]);
        const stateSelectRef = useRef(null); // Ref for the select element
    
        useEffect(() => {
            fetchStatesAndEvents();
        }, []);
    
        const fetchStatesAndEvents = async () => {
            try {
                const response = await axios.get("https://mitdevelop.com/kidsadmin/api/events");
                const groupedData = response.data.data || [];
        
                // Extract states from data
                const stateList = groupedData.map((group) => ({
                    id: group.state_id,
                    state: group.state_name,
                }));
        
                setStates(stateList);
                setAllEvents(groupedData); // Save full state-city-event structure
        
                // Get user location
                const ipResponse = await axios.get('http://ip-api.com/json');
                const userState = ipResponse.data.regionName;
        
                const availableStateNames = stateList.map((state) => state.state);
                const defaultState = availableStateNames.includes(userState)
                    ? userState
                    : availableStateNames[0];
        
                setSelectedState(defaultState);
        
                filterEvents(defaultState, "", groupedData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        
    
        const filterEvents = (state, city, data) => {
            if (!state || !data) return;
        
            const matchedState = data.find((item) => item.state_name === state);
            if (!matchedState) return setEvents([]);
        
            const filteredCities = matchedState.cities || [];
        
            // If a city is selected, filter to that
            const selectedCityData = city
                ? filteredCities.find((c) => c.city_name === city)
                : null;
        
            const eventsToSet = selectedCityData
                ? selectedCityData.events
                : filteredCities.flatMap((c) => c.events);
        
            setEvents(eventsToSet || []);
        
            // Populate city dropdown
            const cityList = filteredCities.map((c) => ({
                id: c.city_id,
                city: c.city_name,
            }));
            setCities(cityList);
        };
        
    
        const handleStateChange = (event) => {
            const newState = event.target.value;
            setSelectedState(newState);
            setSelectedCity(""); // Reset city
            filterEvents(newState, "", allEvents);
        };
    
        const handleCityChange = (event) => {
            const newCity = event.target.value;
            setSelectedCity(newCity);
            filterEvents(selectedState, newCity, allEvents);
        };
    
        const handleExploreClick = () => {
            if (stateSelectRef.current) {
                stateSelectRef.current.focus();
            }
        };
    
        return (
            <section className="Program-detail">
                <div className="container">
                    {/* State & City Dropdowns */}
                    <div className="row mb-4 justify-content-end">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="input-group custom-search-bar">
                                <span className="input-group-text input-group-text-four">
                                    <i className="fas fa-map-marker-alt text-warning"></i>
                                </span>
    
                                {/* State Dropdown */}
                                <select
                                    id="stateSelect"
                                    className="form-select custom-state-dropdown"
                                    value={selectedState}
                                    onChange={handleStateChange}
                                    ref={stateSelectRef}
                                >
                                    <option value="">Choose a State</option>
                                    {states.map((state) => (
                                        <option key={state.id} value={state.state}>
                                            {state.state}
                                        </option>
                                    ))}
                                </select>
    
                                {/* City Dropdown */}
                                <select
                                id="citySelect"
                                className="form-select custom-city-dropdown"
                                value={selectedCity}
                                onChange={handleCityChange}
                                disabled={!cities.length}
                                >
                                <option value="">Choose a City</option>
                                {cities.map((cityObj, index) => (
                                <option key={cityObj.id} value={cityObj.city}>
                                    {cityObj.city}
                                </option>
                                ))}
                                </select>

                            </div>
                        </div>
                    </div>
    
                    {/* Events Listing */}
                    <div className="row">
                        {events.length > 0 ? (
                            events.map((event, index) => (
                                <div className="col-lg-4 wid-program" key={index}>
                                    <div className="box-blog shadow-sm  rounded">
                                        <img
                                            src={event.event_image ? `https://mitdevelop.com/kidsadmin/storage/app/public/${event.event_image}` : footballsports}
                                            alt={event.event_name}
                                            className="blog-images rounded"
                                        />
                                        <div className="main-display-admin">
                                            <div className="d-flex gap-3">
                                                <div>
                                                    <p className="admin-name">
                                                        <span className="color-dot">
                                                            <img src={listdot} alt="" className="list-dot" />
                                                        </span> Created by: {event.user.name}
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="admin-name">
                                                        <span className="color-dot">
                                                            <img src={listdot} alt="" className="list-dot" />
                                                        </span> Date: {new Date(event.created_at).toLocaleDateString()}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <h5 className="Activities">{event.event_name}</h5>
                                        <div>
                                            <p className="sports-pg">
                                                {event.description}
                                            </p>
                                        </div>
                                        <hr className="line-programm-sec" />
                                        <div className="d-flex gap-4 justify-content-between align-items-center">
                                            <p className="old">{event.age_group || "All Ages"}</p>
                                            <Link to={`/event/${event.slug}`} className="program-link">
                                                <button className="join-now">
                                                    View more <span><img src={arrowtransparent} alt="Arrow" className="arrow-circle-img" /></span>
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center">
                                <div className="alert alert-warning p-4 shadow-sm rounded">
                                    <i className="bi bi-calendar-x fs-1 text-danger"></i>
                                    <h3 className="mt-3">⚽🏀 Fun Sports Events Coming Soon!</h3>
                                    <p className="text-muted">
                                        No events available for <strong>{selectedState}</strong> at the moment.<br />
                                        Stay tuned for upcoming programs!
                                    </p>
                                    <button className="btn btn-outline-primary mt-2 event-none-btn" onClick={handleExploreClick}>
                                        Explore Other States
                                        <span>
                                            <img src={arrowtransparent} alt="Arrow" className="arrow-circle-img" />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        );
    }
    
    export default Programmdetail;
    
