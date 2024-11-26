// src/components/UserProfile.jsx

import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { createApplicant, getVerificationStatus } from '../services/sumsub';

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const [verificationStatus, setVerificationStatus] = useState('Not Verified');

  useEffect(() => {
    const handleKYC = async () => {
      if (user) {
        // Create applicant if not already created
        const applicant = await createApplicant(user.uid, user.email);
        // Fetch verification status
        const status = await getVerificationStatus(applicant.id);
        setVerificationStatus(status.status);
      }
    };

    handleKYC();
  }, [user]);

  return (
    <div>
      <h2>User Profile</h2>
      {user && (
        <>
          <p>Name: {user.displayName}</p>
          <p>Email: {user.email}</p>
          <p>Verification Status: {verificationStatus}</p>
        </>
      )}
    </div>
  );
};

export default UserProfile;
