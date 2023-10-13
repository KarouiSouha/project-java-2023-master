
export const downloadCanvasToImage = (axios,auth,toast,navigate) => {
  const canvas = document.querySelector("canvas");
  const dataURL = canvas.toDataURL();
  const link = document.createElement("a");
  const getFileName=()=> {
    let d = new Date();
    let dformat = `${d.getHours()}-${d.getMinutes()}-${d.getSeconds()}`;
  
    console.log("getCurrentDate : ", dformat);
    return "shoe" + dformat + ".png";
  }
  const filename=getFileName()
  link.href = dataURL;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  axios.post('http://localhost:8080/api/v1/products/'+auth.id, {
        name: "T-Shirt Brand",
        originalPrice: 24.99,
        discountedPrice: 19.99,
        categoryName: "Man/Women",
        stock: true,
        rating: 0,
        description: "this Shirt is a good buy for everyday wear.",
        trending: true,
        size: 40,
        img: "/"+filename
      }).then(response=>{
        toast.success(`Shoe added successfully!`);
        navigate("/product-listing")
      console.log(response.data); })// Handle the response data as needed
     .catch (error=> {
      console.error(error); // Handle any errors that occur during the request
    })
};

export const reader = (file) =>
  new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = () => resolve(fileReader.result);
    fileReader.readAsDataURL(file);
  });

export const getContrastingColor = (color) => {
  // Remove the '#' character if it exists
  const hex = color.replace("#", "");

  // Convert the hex string to RGB values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Calculate the brightness of the color
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  // Return black or white depending on the brightness
  return brightness > 128 ? "black" : "white";
};
