import os
import PyPDF2

def pdf_to_text(pdf_path):
    try:
        text = ""
        with open(pdf_path, "rb") as pdf_file:
            pdf_reader = PyPDF2.PdfReader(pdf_file)
            for page_num in range(len(pdf_reader.pages)):
                page = pdf_reader.pages[page_num]
                text += page.extract_text()
        return text
    except Exception as e:
        print("Error:", e)
        return None

def save_text_to_file(text, output_path):
    try:
        with open(output_path, "w", encoding="utf-8") as file:
            file.write(text)
        print("Text saved to:", output_path)
    except Exception as e:
        print("Error:", e)

if __name__ == "__main__":
    input_directory = "./pdf"  # Replace with the directory containing your PDF files
    output_directory = "./txt"  # Replace with the directory where you want to save text files
    
    if not os.path.exists(output_directory):
        os.makedirs(output_directory)
    
    pdf_files = [file for file in os.listdir(input_directory) if file.endswith(".pdf")]
    
    for pdf_file in pdf_files:
        input_pdf_path = os.path.join(input_directory, pdf_file)
        output_text_path = os.path.join(output_directory, pdf_file.replace(".pdf", ".txt"))
        
        extracted_text = pdf_to_text(input_pdf_path)
        
        if extracted_text:
            save_text_to_file(extracted_text, output_text_path)
        else:
            print(f"Extraction failed for {pdf_file}")

