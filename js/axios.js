const todas = async() => {
    try {
        const rsp = await axios.get('https://fcsapi.com/api-v3/crypto/latest?id=78&access_key=AdwRv3RwS56tV0PPSoyD8', {
    })
    console.log(rsp);
    }catch(error) {
        console.log(error);
    }
}
todas();