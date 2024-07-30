import React, {  useState } from "react";
import FileInputForm from "../components/FileInputForm";
import useGetExcelData from "../hooks/useGetExcelData";


const Main = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const {excelData} = useGetExcelData(selectedFile);

  return (
    <>
      <FileInputForm setSelectedFile={setSelectedFile} />
      {selectedFile && (
        <div>
          <p>선택된 파일: {selectedFile.name}</p>
        </div>
      )}

      {excelData && (
        <div>
          <h3>엑셀 데이터:</h3>
          <pre>{JSON.stringify(excelData, null, 2)}</pre>
        </div>
      )}
    </>
  );
};

export default Main;
