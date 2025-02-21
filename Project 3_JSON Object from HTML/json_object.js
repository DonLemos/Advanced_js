

const isValidValue = element => {
    return (!['checkbox', 'radio'].includes(element.type) || element.checked);
};

const isCheckBox = element => element.type === 'checkbox';

const isMultiSelect = element => element.options && element.multiple;

const getSelectValues = options => [].reduce.call(options, (values, option) => {
    return option.selected ? values.concat(option.value) : values;
}, []);

const formToJSON_deconstructed = elements => {
    const reducerFunction = (data, element) => {
        data[element.name] = element.value;
        console.log(JSON.stringify(data));
        return data;
    };

    const reducerInitialValue = {};

    console.log('Initial data value:', JSON.stringify(reducerInitialValue));

    const formData = [].reduce.call(elements, reducerFunction, reducerInitialValue);

    return formData;
};

const formToJSON = elements => [].reduce.call(elements, (data, element) => {
    if (isValidValue(element)) {
        if (isCheckBox(element)) {
            data[element.name] = (data[element.name] || []).concat(element.value);
        } else if (isMultiSelect(element)) {
            data[element.name] = getSelectValues(element);
        } else {
            data[element.name] = element.value;
        }
    }

    return data;
}, {});

const handleFormSubmit = event => {
    event.preventDefault();

    const data = formToJSON(form.elements);

    const dataContainer = document.getElementsByClassName('results_display')[0];

    dataContainer.textContent = JSON.stringify(data, null, ' ');
};

const form = document.getElementsByClassName('contact-form')[0];
form.addEventListener('submit', handleFormSubmit);
