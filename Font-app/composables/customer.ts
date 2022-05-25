export const createCustomer = async (customer) => {
    const resCustomer = $fetch("http://10.0.34.37:3333/api/v1/customer", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.parse(JSON.stringify(customer)),
    })
    return resCustomer;
};