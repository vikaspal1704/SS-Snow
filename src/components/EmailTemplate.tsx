import * as React from "react";

interface EmailTemplateProps {
    fullName: string;
  email: string;
  mobile: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    fullName,
  email,
  mobile,
  message
}) => (
  <div>
    <h1>Contact US</h1>
    <p><strong>Full Name:</strong> {fullName}</p>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Mobile:</strong> {mobile}</p>
    <p><strong>Message:</strong> {message}</p>
  </div>
);

export default EmailTemplate;
