export function generatePDF(){
    window.jsPDF = window.jspdf.jsPDF;
    // Crea una instancia de jsPDF
    var doc = new jsPDF();
    // Agrega contenido al PDF, los numeros son x & y
    doc.text("Cebúes", 20, 10);

    var datos = [
        ["Paquita", "Brahman", 680],
        ["Paquito", "GYR", 985]
    ];

    doc.autoTable({
        head: [["Nombre", "Raza", "Peso"]],
        body: datos,
        startY: 20
    });
    
    doc.save("vacota.pdf")
}