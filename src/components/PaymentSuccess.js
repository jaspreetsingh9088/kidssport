import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const PaymentSuccess = () => {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const query = new URLSearchParams(useLocation().search);
  const orderIdFromQuery = query.get("order_id");

  // Priority: localStorage > query param
  const storedOrderId = localStorage.getItem("order_id");
  const orderId = storedOrderId || orderIdFromQuery;

  useEffect(() => {
    if (orderId) {
      axios.get(`https://mitdevelop.com/kidsadmin/api/order/${orderId}`)
        .then((res) => {
          setOrder(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setError("Failed to load payment details");
          setLoading(false);
        });
    } else {
      setError("Order ID not found.");
      setLoading(false);
    }
  }, [orderId]);
  
  const renderStatusMessage = (status) => {
    switch (status) {
      case "success":
        return <p style={{ color: "green" }}>✅ Payment successful</p>;
      case "pending":
        return <p style={{ color: "orange" }}>⏳ Payment is pending</p>;
      case "failed":
        return <p style={{ color: "red" }}>❌ Payment failed</p>;
      default:
        return <p>ℹ️ Payment status: {status}</p>;
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
      <h2>🧾 Payment Summary</h2>
      {loading ? (
        <p>Loading payment status...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <>
          {renderStatusMessage(order.status)}
          <hr />
          <p><strong>Order ID:</strong> {order.order_id}</p>
          <p><strong>Amount:</strong> ₹{order.amount}</p>
      
          <p><strong>Email:</strong> {order.email}</p>
        </>
      )}
    </div>
  );
};

export default PaymentSuccess;
