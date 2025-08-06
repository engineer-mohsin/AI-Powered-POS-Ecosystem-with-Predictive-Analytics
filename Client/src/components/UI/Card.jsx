import React from "react";

export const Card = ({ children, title, className = "", icon: Icon, ...props }) => {
  return (
    <div
      className={`rounded-xl shadow-sm overflow-hidden border ${className}`}
      style={{
        backgroundColor: "var(--card-bg)",
        borderColor: "var(--card-border)",
        color: "var(--card-text)",
      }}
      {...props}
    >
      {title && (
        <div
          className="px-6 py-4 flex items-center justify-between border-b"
          style={{ borderColor: "var(--card-border)" }}
        >
          <div className="flex items-center gap-2">
            {Icon && (
              <Icon
                className="h-5 w-5"
                style={{ color: "var(--card-icon)" }}
              />
            )}
            <h3
              className="font-semibold"
              style={{ color: "var(--card-title)" }}
            >
              {title}
            </h3>
          </div>
          <div className="flex items-center gap-2">{props.actions}</div>
        </div>
      )}
      <div className="p-6" style={{ color: "var(--card-text)" }}>
        {children}
      </div>
    </div>
  );
};
