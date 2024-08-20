import React from 'react';

interface CertificateDetailsProps {
  organization: string;
  courseTitle: string;
  issueDate: string;
}

const CertificateDetails: React.FC<CertificateDetailsProps> = ({ organization, courseTitle, issueDate }) => (
  <>
    <div className="flex flex-col justify-center px-32 mt-6 w-full text-base leading-6 text-center max-md:px-5 max-md:max-w-full">
      <p className="max-md:max-w-full">
        For successfully completion of training course as prescribed and ported by the
      </p>
      <p className="font-bold max-md:max-w-full">
        {organization}
      </p>
    </div>
    <div className="flex flex-col items-center mt-6 w-full text-base leading-6 max-md:max-w-full">
      <div className="flex gap-1.5 items-start">
        <span>Course title:</span>
        <span className="font-bold">{courseTitle}</span>
      </div>
      <div className="flex gap-1.5 items-start mt-2">
        <span>Issued date:</span>
        <span className="font-bold">{issueDate}</span>
      </div>
    </div>
  </>
);

export default CertificateDetails;