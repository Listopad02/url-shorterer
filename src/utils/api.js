export default async function (url, data) {
    try {
      const response = await fetch("http://79.143.31.216" + url, data);
  
      if (response.status === 200 || 201) {
        return await response.json();
      }
    } catch (err) {
      return await err;
    }
  }
  