declare const apiKey: string

export const createConversationUrl = async(urlPath:string) => {
    const orgEndpoint = "https://api.kustomerapp.com/v1/orgs/current"
    const myHeaders = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
    }
    const requestOptions = {
        method: "GET",
        headers: myHeaders
    };

    const orgName = (await fetch(orgEndpoint, requestOptions).then(response => response.json())).data.attributes.name;
    const url = `https://${orgName}.kustomerapp.com/app/customers/${urlPath}`
    return url
}

export const getCustomerName = async (customerId:string) => {
    const customerEndpoint = `https://api.kustomerapp.com/v1/customers/${customerId}`
    const myHeaders = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
    }
    const requestOptions = {
        method: "GET",
        headers: myHeaders
    };

    const response = (await fetch(customerEndpoint, requestOptions).then(response => response.json())).data;
        return (response.attributes.name)
}

export const getCustomerEmail = async (customerId:string) => {
    const customerEndpoint = `https://api.kustomerapp.com/v1/customers/${customerId}`
    const myHeaders = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
    }
    const requestOptions = {
        method: "GET",
        headers: myHeaders
    };

    const response = (await fetch(customerEndpoint, requestOptions).then(response => response.json())).data;
        return(response.attributes.emails[0].email)
}

export const getBrand = async (brandId:string) => {
    const brandEndpoint = `https://api.kustomerapp.com/v1/brands/${brandId}`
    const myHeaders = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
    }
    const requestOptions = {
        method: "GET",
        headers: myHeaders
    };

    const brand = (await fetch(brandEndpoint, requestOptions).then(response => response.json())).data.attributes.name;
    return(brand)
}