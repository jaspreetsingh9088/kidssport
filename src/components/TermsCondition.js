import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

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
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div>
              <h2 className="disclaimer-title">Terms and Conditions </h2>
            </div>
            <div>
              <p className="interactive">
              This terms & condidtions policy outlines how we collect, use, and protect your personal information. Please read it carefully.
              </p>
            </div>
            <div className="d-flex gap-2 mb-2">
              <p className="Empowering">
              Registration – To become a member of Kidzsports.world, child/kids must register and pay membership fees. Once registered, they will receive a voucher coupon worth Rupees 2000/- (based on terms and conditions of the particular voucher) of any products which they can redeem. Each sports event has a distinct registration fee, and there will be a limited number of spots available on a first-come, first-served basis. The competition is open to all kids under the age group of 18 years, with a focus on promoting sportsmanship and healthy competition among different age groups under 18 years.
“Parent” means a parent or legal guardian who will be responsible for the payment of fees and who is the contracting party to this contract.

Membership – A one-time payment of 1000/- would allow children and registered members to benefit from kidzsport.world. Registered members will receive a discount on sports products related with kidzsports.world. During the inaugural event, registered members will receive vouchers worth Rupees 2,000/- from any one application that will be associate with Kidzbook.in and Kidzsports.world as a souvenir and which will offer wide range of discounts on the upcoming application of Kidzbook.in. Below mentioned are few names of upcoming application of Kidzbook.in which will be associated with Kidzsports.world as well:
Education - Library, Educational webinars, seminars, Sponsorships/Scholarships etc.
Food Delivery Application - www.rasoi.delivery (Pure Veg) (for all age groups)
Sports Store - Kidzsports stores availing all sports equipment. 
Travel Boutique Application – Low-Cost Trip (Lower rates than the original available rate) (for all age groups)
Insurance – Jeevan Insurance (Insurance for kids, like Life Insurance)
Investment - www.myrupee.in (Empowering financial growth with investment and valuable returns on it for all age groups)
The above mentioned are few applications for your ready reference, there are many more application that will be associated with Kidzbook.in.

Sports – There will be infinite sports events for 8 months, barring the rainy/monsoon season. A sports carnival will be held, featuring a variety of indoor and outdoor sports. Individual sports matches will also take place between different schools, colleges, and states. There will be state-level contests in any of India’s states, and we will fund/sponsor the top selected kids depending on their credentials. Among the athletic activities are cricket, volleyball, football, carrom, chess, hockey, kabbadi, badminton, table tennis, and many more. All India School Kids Competition will be launched for which schools will registered and kids who are part of Kidzsport.world will compete with them.

Refund Policy – Refunds will only be issued in the event that the goal of 25% of the total targeted members is not met. There is no return for the amount that will be subtracted from GST. In cases where the company is accountable, the refund process will begin.
Under normal circumstances, returns or cancellations of subscriptions are not allowed once a service has commenced or been delivered. This includes digital services, IT support, or sports related subscriptions that rely on upfront preparation and planning.  
Exception in Event Cancellation:  
If a sports event included in the subscription is cancelled, the Company will process a refund proportional to the specific event’s value within the subscription package.  
Refunds will be credited to the original payment method or as account credit, depending on the customer’s preference or Company policy.  

     Refund/Return Conditions:
 Eligibility for Refund:  
Refunds will be considered only under the specific circumstance where a sports event is officially cancelled.  
The decision for cancellation and refund eligibility will be based on the notification or announcement from the event organizer.  
Exclusions from Refund/Return:  
Refunds are not applicable for dissatisfaction related to intangible services like IT support, consultation, or other non-event related features.  
Refund requests due to personal circumstances such as schedule conflicts, change of mind, or user error will not be entertained.  
Timeframe for Claims:  Customers must report any issues, disputes, or claims regarding services within 15 days of the occurrence. Claims raised after this period will not be considered.  
     Scope of Liability:  
The Company’s liability for any issues or errors is strictly limited to the specific service or event that was affected.  
The Company will not be liable for indirect damages, such as lost profits, inconvenience, or incidental losses arising from the issue.  

Resolution of Claims:  The Company will determine the minimum compensation required to address the claim, ensuring fairness while maintaining financial accountability.  
Compensation Limitations: 
In cases where the Company is at fault, the compensation amount will be limited to the smallest applicable refund or adjustment necessary to address the issue. For example:  
If a cancelled sports event was valued at 10% of the subscription fee, the refund will only cover that portion.  
No Additional Claims:  Customers cannot claim amounts beyond the determined minimum refund, even if additional expenses or inconveniences were incurred.  

Force Majeure – An natural and unavoidable catastrophe that interrupts the expected course of events. In that case, the company won’t be liable for refunds nor compensation as the cancellation of sports events due to natural calamities that is outside of human control and is unpredictable and unpreventable. Such as unexpected weather condition, rain, hurricanes, flood or any such typical events.

Additional – Every sporting event will have a team of emergency personnel, including trainers, Doctors, physicians, and ambulances for any medical emergencies and unexpected situations. The children’s food and beverages shall be entirely vegetarian and Jain. All of the products that will be provided as souvenirs, freebie, gifts, or voucher coupons will be vegan. 


Termination – If kids found indulge in any kind of toxic substances including drugs, smoking, alcohol or any other such substance, that particular kid will be terminated on the spot without any explanation and a strict action will be taken against such a person/kid, violation of the rule are the against the policy of our company and henceforth, we have rights to cancel the membership.

Location – The location of the sporting events will fluctuate between outdoor and indoor games. Outdoor games will be held in metro cities throughout India’s states. Indoor games will be held in 4-5 cities each state, allowing players to travel to a nearby city to compete. Indoor games are open to all kids, as there will be at least 4-5 locations per state in various cities.

Location for the Outdoor Sports with state and cities are mentioned herein below for your ready reference:-

Maharashtra – Mumbai (First event will be conducted in Mumbai city), Pune and Nagpur.
Hyderabad - Visakhapatnam, Vijayawada and Andhra Pradesh
Assam – Jorhat , Guwahati , Bongaigaon
Goa – Panaji 
Gujarat – Ahmedabad, Surat, Vadodara, and Rajkot.
Haryana – Gurgaon, Faridabad, Bahadurgarh, Dharuhera.
Himachal Pradesh – Dharamshala.
Jharkhand – Ranchi
Karnataka – Bangalore, Hubli, Mangalore.
Madhya Pradesh – Indore and Bhopal.
Punjab – Amritsar, Ludhiana and Lahore.
Tamil Nadu – Chennai and Coimbatore.
Uttar Pradesh – Lucknow and Kanpur 
West Bengal – Kolkata.
Delhi
Please note – Location of Indoor Sports Games will be updated soon, for a reference there will be around 3-4 location in one city, allowing all the members to participate by reaching the nearby location

              </p>
            </div>
         
        
          </div>
        </div>
      </div>
    </section>
  );
}

export default TermsConditionPolicy;

