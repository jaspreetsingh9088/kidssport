import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function TermsConditionPolicy() {
  const [isVisible, setIsVisible] = useState(false);
  const [showFullContent, setShowFullContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.kidzsport-disclaimer');
      const sectionPosition = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Check if the section is in view
      if (sectionPosition < windowHeight - 100) {
        setIsVisible(true); // Add 'show' class
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <section className={`disclaimer kidzsport-disclaimer ${isVisible ? 'show' : ''}`}>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-12">
            <div>
              <h2 className="disclaimer-title text-center mb-4">Terms and Conditions</h2>
            </div>
            <div>
              <p className="interactive mb-4">
                This terms & conditions policy outlines how we collect, use, and protect your personal information. Please read it carefully.
              </p>
            </div>
            <div className="d-flex gap-2 mb-2">
            <p className="Empowering">
              <strong>Registration:</strong> To become a member of Kidzsports.world, child/kids must register and pay membership fees. Once registered, they will receive a voucher coupon worth Rupees 2000/- (based on terms and conditions of the particular voucher) of any products which they can redeem. Each sports event has a distinct registration fee, and there will be a limited number of spots available on a first-come, first-served basis. The competition is open to all kids under the age group of 18 years, with a focus on promoting sportsmanship and healthy competition among different age groups under 18 years.
              <br />
              “Parent” means a parent or legal guardian who will be responsible for the payment of fees and who is the contracting party to this contract.
              <br /><br />
              <strong>Membership:</strong> A one-time payment of 1000/- would allow children and registered members to benefit from kidzsport.world. Registered members will receive a discount on sports products related with kidzsports.world. During the inaugural event, registered members will receive vouchers worth Rupees 2,000/- from any one application that will be associate with Kidzbook.in and Kidzsports.world as a souvenir and which will offer wide range of discounts on the upcoming application of Kidzbook.in. Below mentioned are few names of upcoming application of Kidzbook.in which will be associated with Kidzsports.world as well:
              <ul>
                <li>Education - Library, Educational webinars, seminars, Sponsorships/Scholarships etc.</li>
                <li>
                Food Delivery Application -  
                <a href="https://www.rasoi.delivery" target="_blank" rel="noopener noreferrer">
                  www.rasoi.delivery
                </a> 
                (Pure Veg) (for all age groups)
              </li>

                <li>Sports Store - Kidzsports stores availing all sports equipment.</li>
                <li>Travel Boutique Application – Low-Cost Trip (Lower rates than the original available rate) (for all age groups)</li>
                <li>Insurance – Jeevan Insurance (Insurance for kids, like Life Insurance)</li>
                <li>
                Investment – 
                <a href="https://www.myrupee.in" target="_blank" rel="noopener noreferrer">
                  www.myrupee.in
                </a> (Empowering financial growth with investment and valuable returns on it for all age groups)
              </li>
              </ul>
              <br />
              <strong>Sports:</strong> There will be infinite sports events for 8 months, barring the rainy/monsoon season. A sports carnival will be held, featuring a variety of indoor and outdoor sports. Individual sports matches will also take place between different schools, colleges, and states. There will be state-level contests in any of India’s states, and we will fund/sponsor the top selected kids depending on their credentials. Among the athletic activities are cricket, volleyball, football, carrom, chess, hockey, kabbadi, badminton, table tennis, and many more. All India School Kids Competition will be launched for which schools will registered and kids who are part of Kidzsport.world will compete with them.
              <br /><br />
              <strong>Refund Policy:</strong> Refunds will only be issued in the event that the goal of 25% of the total targeted members is not met. There is no return for the amount that will be subtracted from GST. In cases where the company is accountable, the refund process will begin.
              <br />
              Under normal circumstances, returns or cancellations of subscriptions are not allowed once a service has commenced or been delivered. This includes digital services, IT support, or sports-related subscriptions that rely on upfront preparation and planning.
              <br />
              <strong>Exception in Event Cancellation:</strong>
              <ul>
                <li>If a sports event included in the subscription is cancelled, the Company will process a refund proportional to the specific event’s value within the subscription package.</li>
                <li>Refunds will be credited to the original payment method or as account credit, depending on the customer’s preference or Company policy.</li>
              </ul>

                  <strong>Refund/Return Conditions:</strong>
                  <ul>
                    <li><strong>Eligibility for Refund:</strong> Refunds will be considered only under the specific circumstance where a sports event is officially cancelled.</li>
                    <li>The decision for cancellation and refund eligibility will be based on the notification or announcement from the event organizer.</li>
                    <li><strong>Exclusions from Refund/Return:</strong> Refunds are not applicable for dissatisfaction related to intangible services like IT support, consultation, or other non-event-related features.</li>
                    <li>Refund requests due to personal circumstances such as schedule conflicts, change of mind, or user error will not be entertained.</li>
                    <li><strong>Timeframe for Claims:</strong> Customers must report any issues, disputes, or claims regarding services within 15 days of the occurrence. Claims raised after this period will not be considered.</li>
                  </ul>

                  <strong>Scope of Liability:</strong>
                  <ul>
                    <li>The Company’s liability for any issues or errors is strictly limited to the specific service or event that was affected.</li>
                    <li>The Company will not be liable for indirect damages, such as lost profits, inconvenience, or incidental losses arising from the issue.</li>
                  </ul>

                  <strong>Resolution of Claims:</strong>
                  <ul>
                    <li>The Company will determine the minimum compensation required to address the claim, ensuring fairness while maintaining financial accountability.</li>
                  </ul>

                  <strong>Compensation Limitations:</strong>
                  <ul>
                    <li>In cases where the Company is at fault, the compensation amount will be limited to the smallest applicable refund or adjustment necessary to address the issue.</li>
                    <li>For example, if a cancelled sports event was valued at 10% of the subscription fee, the refund will only cover that portion.</li>
                    <li><strong>No Additional Claims:</strong> Customers cannot claim amounts beyond the determined minimum refund, even if additional expenses or inconveniences were incurred.</li>
                  </ul>

                  <strong>Force Majeure:</strong>
                  <ul>
                    <li>A natural and unavoidable catastrophe that interrupts the expected course of events. In that case, the company won’t be liable for refunds or compensation.</li>
                    <li>This includes the cancellation of sports events due to natural calamities that are outside of human control and are unpredictable and unpreventable, such as unexpected weather conditions, rain, hurricanes, floods, or any such events.</li>
                  </ul>

                  <br />

                <strong>Termination:</strong> If kids found indulge in any kind of toxic substances including drugs, smoking, alcohol or any other such substance, that particular kid will be terminated on the spot without any explanation and a strict action will be taken against such a person/kid, violation of the rule are the against the policy of our company and henceforth, we have rights to cancel the membership.
                <br /><br />
                <strong>Location:</strong> – The location of the sporting events will fluctuate between outdoor and indoor games. Outdoor games will be held in metro cities throughout India’s states. Indoor games will be held in 4-5 cities each state, allowing players to travel to a nearby city to compete. Indoor games are open to all kids, as there will be at least 4-5 locations per state in various cities.
                <br /><br/>
                <strong>Location for the Outdoor Sports with state and cities are mentioned herein below for your ready reference:-</strong> 
                <ul>
                  <li><strong>Maharashtra:</strong> Mumbai, Pune, Nagpur</li>
                  <li><strong>Hyderabad:</strong> Visakhapatnam, Vijayawada, Andhra Pradesh</li>
                  <li><strong>Assam:</strong> Jorhat, Guwahati, Bongaigaon</li>
                  <li><strong>Goa:</strong> Panaji</li>
                  <li><strong>Gujarat:</strong> Ahmedabad, Surat, Vadodara, Rajkot</li>
                  <li><strong>Haryana:</strong> Gurgaon, Faridabad, Bahadurgarh, Dharuhera</li>
                  <li><strong>Himachal Pradesh:</strong> Dharamshala</li>
                  <li><strong>Jharkhand:</strong> Ranchi</li>
                  <li><strong>Karnataka:</strong> Bangalore, Hubli, Mangalore</li>
                  <li><strong>Madhya Pradesh:</strong> Indore, Bhopal</li>
                  <li><strong>Punjab:</strong> Amritsar, Ludhiana, Lahore</li>
                  <li><strong>Tamil Nadu:</strong> Chennai, Coimbatore</li>
                  <li><strong>Uttar Pradesh:</strong> Lucknow, Kanpur</li>
                  <li><strong>West Bengal:</strong> Kolkata</li>
                  <li><strong>Delhi</strong></li>
                </ul>
                <br />
            <p>Please note – Location of Indoor Sports Games will be updated soon, for a reference there will be around 3-4 location in one city, allowing all the members to participate by reaching the nearby location</p>
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TermsConditionPolicy;
