import { useState } from "react";
import { FiMail, FiLock, FiEye, FiEyeOff, FiAlertCircle, FiCheckCircle } from "react-icons/fi";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleLogin = async (e) => {
        if (e) e.preventDefault();
        setError(null);
        setSuccess(null);

        // Simple validation
        if (!email.trim()) {
            setError("Email address is required.");
            return;
        }
        if (!password) {
            setError("Password is required.");
            return;
        }

        setLoading(true);

        try {
            const raw = {
                email: email,
                password: password,
            };

            const response = await fetch(`${API_BASE}/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(raw),
            });

            if (!response.ok) {
                const errData = await response.json().catch(() => ({}));
                throw new Error(errData?.error || errData?.message || `HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();

            if (result?.token) {
                localStorage.setItem("token", result.token);
                setSuccess("Login successful! Redirecting...");
                setTimeout(() => {
                    window.location.href = "/";
                }, 1000);
            } else {
                throw new Error("Invalid server response. Token not found.");
            }

        } catch (error) {
            console.error("Error:", error);
            setError(error.message || "Failed to log in. Please check your credentials.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-page-wrapper">
            <div className="login-card">
                {/* Left Panel - Visuals */}
                <div className="login-visual-panel">
                    <div className="visual-logo">
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path><path d="M12 2V12L17 17"></path></svg>
                        <span>Mywoods</span>
                    </div>

                    <div className="visual-welcome-msg">
                        <h2>Welcome back to the portal</h2>
                        <p>Access your content management system, edit products, update features, and manage your dashboard in one clean, premium space.</p>
                    </div>

                    <div className="visual-footer">
                        <p>&copy; {new Date().getFullYear()} Mywoods. All rights reserved.</p>
                    </div>
                </div>

                {/* Right Panel - Form */}
                <div className="login-form-panel">
                    <div className="login-form-header">
                        <h1>Account Login</h1>
                        <p>Enter your credentials to manage your platform</p>
                    </div>

                    <form onSubmit={handleLogin}>
                        {error && (
                            <div className="login-alert login-alert-error">
                                <FiAlertCircle size={18} style={{ flexShrink: 0 }} />
                                <span>{error}</span>
                            </div>
                        )}

                        {success && (
                            <div className="login-alert login-alert-success">
                                <FiCheckCircle size={18} style={{ flexShrink: 0 }} />
                                <span>{success}</span>
                            </div>
                        )}

                        <div className="login-form-group">
                            <label className="login-form-label" htmlFor="email-input">Email Address</label>
                            <div className="login-input-wrapper">
                                <input
                                    id="email-input"
                                    type="email"
                                    className="login-input"
                                    placeholder="name@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={loading}
                                    required
                                />
                                <FiMail className="login-input-icon" />
                            </div>
                        </div>

                        <div className="login-form-group">
                            <label className="login-form-label" htmlFor="password-input">Password</label>
                            <div className="login-input-wrapper">
                                <input
                                    id="password-input"
                                    type={showPassword ? "text" : "password"}
                                    className="login-input"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    disabled={loading}
                                    required
                                />
                                <FiLock className="login-input-icon" />
                                <button
                                    type="button"
                                    className="login-input-toggle-password"
                                    onClick={() => setShowPassword(!showPassword)}
                                    title={showPassword ? "Hide password" : "Show password"}
                                    tabIndex="-1"
                                >
                                    {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                                </button>
                            </div>
                        </div>

                        <div className="login-form-actions">
                            <label className="login-remember-me">
                                <input type="checkbox" disabled={loading} />
                                <span>Remember me</span>
                            </label>
                            <a href="#forgot" className="login-forgot-password" onClick={(e) => e.preventDefault()}>
                                Forgot password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="login-submit-btn"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <div className="login-spinner"></div>
                                    <span>Signing in...</span>
                                </>
                            ) : (
                                <span>Sign In</span>
                            )}
                        </button>
                    </form>

                    <div className="login-footer-text">
                        <span>Don't have an account? </span>
                        <a href="/contact">Contact support</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;