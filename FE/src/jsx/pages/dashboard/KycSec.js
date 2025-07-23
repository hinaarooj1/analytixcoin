import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from "react-router-dom";
import { getsignUserApi, sendEmailCodeApi, verifySingleUserApi } from "../../../Api/Service";
import { toast } from "react-toastify";
import { useAuthUser } from "react-auth-kit";
import { Button, Form, Container, Row, Col, Modal } from 'react-bootstrap';
import { useTranslation } from "react-i18next";

const Documents = ({ isLoading, setisLoading }) => {
    const { t } = useTranslation();
    const authUser = useAuthUser();
    const navigate = useNavigate();

    // State for documents
    const [slide1, setSlide1] = useState();
    const [slide2, setSlide2] = useState();
    const [newSlider1, setNewSlider1] = useState();
    const [newSlider2, setNewSlider2] = useState();
  const [emailError, setEmailError] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);
    // State for OTP flow
    const [currentStep, setCurrentStep] = useState('email'); // 'email' -> 'otp' -> 'documents'
    const [email, setEmail] = useState(authUser().user.email);
    const [otp, setOtp] = useState("");
    const [isLoadingSet, setIsLoadingSet] = useState(false);
    const [user, setUser] = useState(null);
    const [verificationCode, setVerificationCode] = useState(null);
    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    };
    // Generate random 6-digit code
    const generateVerificationCode = () => {
        return Math.floor(100000 + Math.random() * 900000);
    };
     
    // Handle email submission
    const handleSendEmail = async () => {

        if (!email) {
            toast.error("Please enter your email");
            return;
        }
        if (!email.trim()) {
            setEmailError('Email is required');
            return;
        }

        if (!validateEmail(email)) {
            setEmailError('Please enter a valid email address');
            return;
        }
        const code = generateVerificationCode();
        setVerificationCode(code);
        setIsLoadingSet(true);

        setEmailError('');
        try {
            const response = await sendEmailCodeApi({
                email:authUser().user.email,
                id: authUser().user._id,
                code
            });

            if (response.success) {
                toast.info("Verification code sent to your email");
                setCurrentStep('otp');
            } else {
                toast.error(response.msg || "Failed to send code");
            }
        } catch (error) {
            toast.error("Error sending verification code");
        } finally {
            setIsLoadingSet(false);
        }
    };

    // Handle OTP verification
    const verifyOtp = () => {
        if (!otp) {
            toast.error("Please enter the OTP");
            return;
        }

        if (otp.toString() !== verificationCode.toString()) {
            toast.error("Invalid OTP. Please try again.");
            return;
        }

        toast.info("Email verified successfully, please upload your documents");
        setCurrentStep('documents');
    };

    // Handle document upload
    const handleDocumentUpload = async () => {
        if (!newSlider1 || !newSlider2) {
            toast.error("Please upload both documents");
            return;
        }

        setIsLoadingSet(true);
        const formData = new FormData();
        formData.append("cnic", newSlider1);
        formData.append("bill", newSlider2);
        formData.append("id", user._id);

        try {
            const response = await verifySingleUserApi(formData);
            if (response.success) {
                toast.success("Documents uploaded successfully!");
                navigate("/dashboard");
            } else {
                toast.error(response.msg);
            }
        } catch (error) {
            toast.error("Error uploading documents");
        } finally {
            setIsLoadingSet(false);
        }
    };

    // File change handlers
    const handleFileChange1 = (e) => {
        const file = e.target.files[0];
        if (file && file.size <= 10 * 1024 * 1024) { // 10MB limit
            setNewSlider1(file);
            setSlide1(URL.createObjectURL(file));
        } else {
            toast.error("File size must be less than 10MB");
        }
    };

    const handleFileChange2 = (e) => {
        const file = e.target.files[0];
        if (file && file.size <= 10 * 1024 * 1024) {
            setNewSlider2(file);
            setSlide2(URL.createObjectURL(file));
        } else {
            toast.error("File size must be less than 10MB");
        }
    };

    // Fetch user data on mount
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const formData = new FormData();
                formData.append("id", authUser().user._id);
                const response = await getsignUserApi(formData);

                if (response.success) {
                    setUser(response.signleUser);
                    if (response.signleUser.submitDoc.status === "completed") {
                        navigate("/dashboard");
                        return
                    }
                    setisLoading(false)
                }

            } catch (error) {
                toast.error("Error fetching user data");
            }
        };

        fetchUser();
    }, [authUser, navigate]);

    return (
        <Container>
            {/* Step 1: Email Verification */}
            {currentStep === 'email' && (
                <div className="verification-step">
                    <h3>Email Verification</h3> 
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            type="email"
                            value={authUser().user.email} 
                            placeholder="Enter your email"
                            isInvalid={!!emailError}
                            style={{cursor:"not-allowed",backgroundColor:"lightgray"}}
                            readOnly={true}
                            disabled={true}
                        />
                        <Form.Control.Feedback type="invalid">
                            {emailError}
                        </Form.Control.Feedback>
                       
                    </Form.Group>

                    <Button
                        variant="primary"
                        onClick={handleSendEmail}
                        disabled={isLoadingSet}
                    >
                        {isLoadingSet ? 'Sending...' : 'Send Verification Code'}
                    </Button>
                </div>
            )}

            {/* Step 2: OTP Verification */}
            {currentStep === 'otp' && (
                <div className="verification-step">
                    <h3>Enter Verification Code</h3>
                    <p>We've sent a 6-digit code to {email}. Please enter it below.</p>

                    <Form.Group className="mb-3">
                        <Form.Label>Verification Code</Form.Label>
                        <Form.Control
                            type="text"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            placeholder="Enter 6-digit code"
                            maxLength={6}
                        />
                    </Form.Group>

                    <div className="d-flex gap-2">


                        <Button
                            variant="primary"
                            onClick={verifyOtp}
                            disabled={isLoadingSet || otp.length !== 6}
                        >
                            {isLoadingSet ? 'Please wait...' : 'Verify Code'}
                        </Button>
                    </div>

                    <p className="mt-3">
                        Didn't receive code?{' '}
                        <Button
                            variant="link"
                            onClick={handleSendEmail}
                            disabled={isLoadingSet}
                        >
                            Resend Code
                        </Button>
                    </p>
                </div>
            )}

            {/* Step 3: Document Upload */}
            {currentStep === 'documents' && (
                <Form onSubmit={(e) => {
                    e.preventDefault();
                    handleDocumentUpload();
                }}>
                    <Container>
                        <Row className="mb-8">
                            <Col sm={6}>
                                <div className="relative">
                                    <div style={{ minHeight: "260px" }} className="border bg-white rounded-xl p-4 position-relative">
                                        <div className="text-center">
                                            <p className="text-muted font-heading text-base font-medium">
                                                {t("kycPage.uploadID")}
                                            </p>
                                            <p className="font-alt text-xs text-muted">
                                                {t("kycPage.uploadIDDescription")}
                                            </p>
                                        </div>
                                        <div className="position-absolute top-0 end-0 opacity-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="icon text-primary h-7 w-7" viewBox="0 0 256 256">
                                                <g fill="currentColor">
                                                    <path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2" />
                                                    <path d="M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0M232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88" />
                                                </g>
                                            </svg>
                                        </div>
                                        <img className="logo-to-show" src={slide1} alt="" />
                                        <Form.Control
                                            type="file"
                                            accept="image/*"
                                            onChange={handleFileChange1}
                                            className="position-absolute top-0 start-0 w-100 h-100 opacity-0"
                                        />
                                        <div className="text-center mt-3">
                                            <Button variant="primary" className="w-48">
                                                {t("kycPage.upload")}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className="relative">
                                    <div style={{ minHeight: "260px" }} className="border bg-white rounded-xl p-4 position-relative">
                                        <div className="text-center">
                                            <p className="text-muted font-heading text-base font-medium">
                                                {t("kycPage.uploadUtilityBill")}
                                            </p>
                                            <p className="font-alt text-xs text-muted">
                                                {t("kycPage.uploadUtilityBillDescription")}
                                            </p>
                                        </div>
                                        <div className="position-absolute top-0 end-0 opacity-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="icon text-primary h-7 w-7" viewBox="0 0 256 256">
                                                <g fill="currentColor">
                                                    <path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2" />
                                                    <path d="M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0M232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88" />
                                                </g>
                                            </svg>
                                        </div>
                                        <img className="logo-to-show2" src={slide2} alt="" />
                                        <Form.Control
                                            type="file"
                                            accept="image/*"
                                            onChange={handleFileChange2}
                                            className="position-absolute top-0 start-0 w-100 h-100 opacity-0"
                                        />
                                        <div className="text-center mt-3">
                                            <Button variant="primary" className="w-48">
                                                {t("kycPage.upload")}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                    </Container>

                    <div className="text-center mt-4">
                        <Button
                            variant="primary"
                            type="submit"
                            disabled={isLoadingSet || !newSlider1 || !newSlider2}
                        >
                            {isLoadingSet ? 'Uploading...' : 'Submit Documents'}
                        </Button>
                    </div>
                </Form>
            )}
        </Container>
    );
};

export default Documents;