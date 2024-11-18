import {
  PDFDocument,
  rgb,
} from 'https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/+esm';
import fontkit from 'https://cdn.jsdelivr.net/npm/@pdf-lib/fontkit@1.1.1/+esm';

async function gerarCertificado(nome) {
  // Carrega o PDF existente em um array de bytes
  const existingPdfBytes = await fetch('/assets/certificado.pdf').then((res) =>
    res.arrayBuffer(),
  );

  // Carrega o PDF
  const pdfDoc = await PDFDocument.load(existingPdfBytes);

  // Embed a font
  pdfDoc.registerFontkit(fontkit);
  const fontBytes = await fetch('/assets/Montserrat.ttf').then((res) =>
    res.arrayBuffer(),
  );
  const montserrat = await pdfDoc.embedFont(fontBytes);

  // Get the first page of the document
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];
  const { width, height } = firstPage.getSize();

  // Define the text to be added
  const text = `Nome: ${nome}`;
  const nomeUpper = nome.toUpperCase();

  // Calculate text width and height
  const textSize = 24;
  const textWidth = montserrat.widthOfTextAtSize(nomeUpper, textSize);
  const textHeight = montserrat.heightAtSize(textSize);

  // Add text to the first page
  firstPage.drawText(nomeUpper, {
    x: 574 - textWidth / 2,
    y: 100 - textHeight / 2 + 16,
    size: textSize,
    font: montserrat,
    color: rgb(0.1, 0.4, 0.73),
  });

  // Get the current date and format it
  const now = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const formattedDate = now.toLocaleDateString('pt-BR', options);
  const formattedTime = now.toLocaleTimeString('pt-BR');

  // Define the date text to be added
  const dateText = `Gerado em: ${formattedDate} às ${formattedTime}`;

  // Calculate date text width and height
  const dateTextSize = 12;
  const dateTextWidth = montserrat.widthOfTextAtSize(dateText, dateTextSize);
  const dateTextHeight = montserrat.heightAtSize(dateTextSize);

  // Add date text to the first page
  firstPage.drawText(dateText, {
    x: 600 - dateTextWidth / 2,
    y: 30 - dateTextHeight / 2 + 16,
    size: dateTextSize,
    font: montserrat,
    color: rgb(0.1, 0.4, 0.73),
  });

  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytes = await pdfDoc.save();

  // Create a blob and open it in a new window
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  window.open(url);
}

export { gerarCertificado };
