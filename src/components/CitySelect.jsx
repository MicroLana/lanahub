import Select from "react-select";

export default function CustomSelect({
  name = "select",
  options = [],
  placeholder = "Select an option",
  id,
  className = "",
  handleValidatedChange,
  errors = {},
}) {
  const handleChange = (selectedOption) => {
    handleValidatedChange?.({
      target: {
        name,
        value: selectedOption?.value || "",
      },
    });
  };

  return (
    <div className={`w-full ${className}`}>
      <Select
        inputId={id}
        options={options}
        placeholder={placeholder}
        onChange={handleChange}
        className="react-select-container"
        classNamePrefix="rs"
        styles={{
          control: (base, state) => ({
            ...base,
            backgroundColor: "white",
            borderColor: state.isFocused ? "#3b82f6" : "#d1d5db",
            boxShadow: state.isFocused ? "0 0 0 1px #3b82f6" : "",
            "&:hover": {
              borderColor: "#3b82f6",
            },
            borderRadius: "0.5rem",
            padding: "2px",
          }),
          option: (base, state) => ({
            ...base,
            backgroundColor: state.isSelected
              ? "#3b82f6"
              : state.isFocused
              ? "#e0f2fe"
              : undefined,
            color: state.isSelected ? "white" : "#111827",
            padding: "10px",
          }),
          menu: (base) => ({
            ...base,
            borderRadius: "0.5rem",
            padding: "4px 0",
            boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
          }),
        }}
      />

      {errors?.[name] && (
        <span className="text-red-500 text-xs mt-1 block">{errors[name]}</span>
      )}
    </div>
  );
}
