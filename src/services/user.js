import axios from "axios"

const login = async (email, password) => {

    try {
        const response = await axios.post(
            'https://us-east-2.aws.data.mongodb-api.com/app/data-pnsoa/endpoint/data/v1/users',
            {
                email: email,
                password: password
            }
        )
        return response.data;
    } catch (error) {
        return null;
    }

}

export {
    login
}