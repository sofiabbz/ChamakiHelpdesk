import "./PasswordStrength.css";

function PasswordStrength({ password }) {
  const getStrength = () => {
    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score++;

    if (score <= 1) return { label: "Fraca", color: "#EF4444", width: "25%" };
    if (score === 2) return { label: "Média", color: "#F59E0B", width: "50%" };
    if (score === 3) return { label: "Forte", color: "#3B82F6", width: "75%" };
    return { label: "Muito forte", color: "#10B981", width: "100%" };
  };

  const strength = getStrength();

  if (!password) return null;

  return (
    <div className="password-strength">
      <div className="strength-bar">
        <div
          className="strength-fill"
          style={{ width: strength.width, backgroundColor: strength.color }}
        ></div>
      </div>
      <span className="strength-label" style={{ color: strength.color }}>
        {strength.label}
      </span>
    </div>
  );
}

export default PasswordStrength;