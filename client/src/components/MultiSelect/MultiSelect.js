import React from 'react';
import Select from 'react-select'; 
import styles from './MultiSelect.module.css';

// Component for a multi-selection field 
// the props: 
// label - the label for the multi-selection in the form
// value - the state variable for the multi-selection
// onChange - the set function to update the correct state variable 
//emptyFields - an array of field names that should be marked as not filled by the user
// fieldName - the name of the current field in the form (as a string)
const MultiSelect = ({ label, value, onChange , emptyFields, fieldName }) => {
    // Checking if the current field is marked as part of the empty fields array, meaning that it was not filled by the user 
    const isError = emptyFields.includes(fieldName);

    // Defining the options for the multi-selection field
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ];

    // Function to handle the change event in the multi-selection field
    const handleChange = (selectedOptions) => {
        // Extracting the values from the selected options
        const values = selectedOptions ? selectedOptions.map(option => option.value) : [];
        // Updating the state with selected values
        onChange(values); 
    };

    return(
        <>
        <label>{label}</label>
            <Select 
                name={fieldName}
                required
                value={options.filter(option => value.includes(option.value))} // Filtering the available options to show only the selected ones.
                // The 'value' prop contains only the selected option values (e.g., ['chocolate', 'vanilla']).
                // We filter the 'options' array to find the full objects for those values, since this is what react-select requires for display.
                isMulti 
                onChange={handleChange} // Calling handleChange to extract the current values selected by the user
                className={emptyFields.includes(fieldName) ? styles.error : ''} // Adding error border if an error occurred
                options={options}
            />
            {isError && <span className={styles.errorText}>Required</span>} {/* if the field is empty, adding Required below it */}   
        </>
    )
    
}

export default MultiSelect;