const { jsPDF } = jspdf;

function capture() {
  html2canvas(document.getElementById("parent")).then((can) => {
    // let a = document.createElement("a");
    let img = can.toDataURL();

    let pdf = new jsPDF();
    pdf.addImage(img, "png", 3, 3, 205, 292);
    // pdf.addImage(img, "png", 0, 0, 800, 1145);
    pdf.save("test.pdf");

    // a.download = "test.png";
    // a.href = img;
    // a.click();
  });
}
