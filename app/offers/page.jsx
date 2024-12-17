"use client"
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/Firebase/config';

export default function Offers() {
  const [offers, setOffers] = useState([]);
  const [filteredOffers, setFilteredOffers] = useState([]);
  const [filter, setFilter] = useState(''); // For filtering by name or category, etc.

  useEffect(() => {
    // Fetch the offers from Firestore on component mount
    const fetchOffers = async () => {
      const offersCollection = collection(db, 'offers'); // Collection name should match your Firestore collection
      const offerSnapshot = await getDocs(offersCollection);
      const offerList = offerSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setOffers(offerList);
      setFilteredOffers(offerList); // Initially, show all offers
    };

    fetchOffers();
  }, []);

  // Filter offers based on the filter state
  const handleFilterChange = (event) => {
    setFilter(event.target.value);

    const filtered = offers.filter((offer) =>
      offer.name.toLowerCase().includes(event.target.value.toLowerCase()) // Adjust to your filter condition
    );
    setFilteredOffers(filtered);
  };

  return (
    <div>
      <h1>Available Offers</h1>
      
      {/* Filter Input */}
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Search offers by name..."
        style={{ marginBottom: '20px', padding: '10px', width: '100%' }}
      />

      {/* Display Offers */}
      <div>
        {filteredOffers.length > 0 ? (
          filteredOffers.map((offer) => (
            <div key={offer.id} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd' }}>
              <h2>{offer.name}</h2>
              <p>{offer.description}</p>
              <p><strong>Price:</strong> ${offer.price}</p>
              {/* Add any additional offer details here */}
            </div>
          ))
        ) : (
          <p>No offers found based on your search criteria.</p>
        )}
      </div>
    </div>
  );
}
