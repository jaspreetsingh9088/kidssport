import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import fancyicon from "../assets/images/fancyicon.png";
import linethree from "../assets/images/linethree.png";
import rightarrows from "../assets/images/rightarrows.png";

function Eventform() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    registrationNumber: "",
    studentName: "",
    sport: "",
    ageGroup: "",
    state: "",
    city: "",
    division: "",
    area: "",
    email: "",
    phone: "",
    amount: 1000,
  });

  const [message, setMessage] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [checkboxError, setCheckboxError] = useState(false);
  const [batches, setBatches] = useState([]); // Added for batch details
  const registrationDetails = location.state || {};
  const [agreeToTerms, setAgreeToTerms] = useState(false);
const [showError, setShowError] = useState(false);
const [status, setStatus] = useState("loading");



  useEffect(() => {
    const fetchEventData = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const response = await axios.get(
          `https://mitdevelop.com/kidsadmin/api/event/${slug}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        const event = response.data.data || null;

        if (!event || !event.id) {
          setMessage("No event found or invalid event slug.");
          setFormData((prev) => ({
            ...prev,
            event_id: "",
            sport: "",
            state: "",
            city: "",
          }));
          return;
        }

        setFormData((prev) => ({
          ...prev,
          event_id: event.id,
          sport: event.category || "",
          state: event.state || "",
          city: event.city || "",
          division: registrationDetails.division_name || prev.division,
          area: registrationDetails.area_name || prev.area,
          ageGroup: registrationDetails.age_group || prev.ageGroup,
        }));

        setBatches(event.batches_grouped || []); 
      } catch (error) {
        console.error("Error fetching event data:", error);
        setMessage("Error fetching event details. Please try again.");
        setFormData((prev) => ({
          ...prev,
          event_id: "",
          sport: "",
          ageGroup: "",
          state: "",
          city: "",
          division: "",
          area: "",
        }));
      }
    };

    fetchEventData();
  }, [slug]);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const response = await axios.get("https://mitdevelop.com/kidsadmin/api/user", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const user = response.data.user || {};
        setFormData((prev) => ({
          ...prev,
          user_id: user.id,
          registrationNumber: user.order_id || "",
          studentName: user.name || "",
          email: user.email || "",
          phone: user.phone_number || "",
        }));
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setCheckboxError(false);
  };
  const [orderId, setOrderId] = useState(null);


  const handlePayment = async () => {
    if (!agreeToTerms) {
      setShowError(true);
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) return alert("User not authenticated!");

    if (!formData.event_id || !formData.user_id) {
      return alert("Event or user data not loaded. Please try again.");
    }

    try {
      const batchId = registrationDetails?.selected_batches?.[0] || null;
      const response = await axios.post(
        "https://mitdevelop.com/kidsadmin/api/initiate-payment",
        {
          amount: formData.amount,
          email: formData.email,
          phone: formData.phone,
          name: formData.studentName,
          user_id: formData.user_id,
          event_id: formData.event_id,
          batch_id: batchId,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      console.log("API Response:", response.data);

      if (response.data.status === "NEW" && response.data.payment_links) {
        const orderId = response.data.order_id;
        setOrderId(orderId);
        localStorage.setItem("order_id", orderId);
        window.open(response.data.payment_links.web || response.data.payment_links.mobile, "_blank");
      } else {
        alert("Payment initiation failed. Please try again.");
      }
    } catch (error) {
      console.error("Error processing payment:", error.response?.data || error.message);
      alert(`Payment failed: ${error.response?.data?.message || "Unknown error"}`);
    }
  };


  const handlePaymentClick = () => {
    if (!agreeToTerms) {
      setShowError(true);
      return;
    }
    setShowError(false);
    handlePayment(); 
  };
  
  return (
    <section className="event-form-register">
      <div className="bacground-purple">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-4">
              <img src={fancyicon} alt="Fancy Icon" className="fancy-icons floating" />
            </div>
            <div className="col-lg-4">
              <h1 className="heading-main" style={{ color: "white" }}>Payment Information</h1>
              <ul className="breadcrumb justify-content-center text-white align-items-center gap-1">
                <a href="/" className="nav-link">
                  <li>Home | </li>
                </a>
                <a href="/" className="nav-link" style={{ color: "white" }}>
                  <li>Checkout</li>
                </a>
              </ul>
            </div>
            <div className="col-lg-4">
              <img src={linethree} alt="Line Three" className="fancy-iconss floating" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="event-form-start">
          <h2 className="heading-form-reg">Checkout Event Form</h2>
          {message && (
            <div className={`alert ${message.includes("Successful") ? "alert-success" : "alert-danger"}`}>
              {message}
            </div>
          )}

<form>
  <div className="row">
    {[
      { label: "Registration Number", field: "registrationNumber" },
      { label: "Student Name", field: "studentName" },
      { label: "Sport", field: "sport" },
      { label: "Age Group", field: "ageGroup" },
      { label: "State", field: "state" },
      { label: "City", field: "city" },
      { label: "Division", field: "division" },
      { label: "Area", field: "area" },
    ].map(({ label, field }, index) => (
      <div className="col-lg-4" key={index}>
        <div className="mb-4">
          <label className="form-label">{label}</label>
          <input className="form-control" name={field} value={formData[field]} type="text" />
        </div>
      </div>
    ))}

    {/* Add Batch Name Field */}
<div className="col-lg-4">
  <div className="mb-4">
    <label className="form-label">Batch Name</label>
    <input
      className="form-control"
      name="batch"
      value={
        (() => {
          const selectedId = registrationDetails?.selected_batches?.[0];
          const allBatches = batches.flatMap((g) => g.batches || []);
          const selected = allBatches.find((b) => b.id === selectedId);
          return selected?.batch_name || "";
        })()
      }
      type="text"
    />
  </div>
</div>


    <div className="col-lg-4">
      <div className="mb-4">
        <label className="form-label">Email</label>
        <input className="form-control" name="email" value={formData.email} type="email" />
      </div>
    </div>
    <div className="col-lg-4">
      <div className="mb-4">
        <label className="form-label">Phone</label>
        <input className="form-control" name="phone" value={formData.phone} type="text" />
      </div>
    </div>
  </div>
</form>

<div className="btn-back-next mt-4 d-flex flex-column align-items-center">
    {/* Checkbox */}
    <div className="form-check mb-1">
      <input
        className="form-check-input"
        type="checkbox"
        id="termsCheckbox"
        checked={agreeToTerms}
        onChange={() => {
          setAgreeToTerms(!agreeToTerms);
          setShowError(false); // hide error on change
        }}
      />
      <label className="form-check-label" htmlFor="termsCheckbox">
        I agree to the{" "}
        <a href="/Terms-conditions" target="_blank" rel="noopener noreferrer" className="terms-link-one">
          Terms and Conditions
        </a>
      </label>
    </div>

  
    {showError && (
      <div className="text-danger mb-2" style={{ fontSize: "0.9rem" }}>
        Please agree to the Terms and Conditions.
      </div>
    )}

    {/* Proceed Button */}
    <button
      type="button"
      className="btn btn-primary"
      onClick={handlePaymentClick}
    >
      Proceed to Payment <span className="img-right-arrow"><img src={rightarrows} alt="arrow"  /></span>
    </button>
  </div>
 
        </div>
      </div>
    </section>
  );
}

export default Eventform;
