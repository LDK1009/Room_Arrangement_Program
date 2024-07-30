import React, { useEffect, useState } from "react";
import FileInputForm from "../components/FileInputForm";
import useGetExcelData from "../hooks/useGetExcelData";
import makeDataFrame from "../modules/makeDataFrame";
import makeRooms from "../modules/makeRooms";

const Main = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const { excelData } = useGetExcelData(selectedFile);
  const dataFrame = makeDataFrame(excelData);
  const lines = [6, 4, 5, 6, 16] // 각 라인의 방 개수들 ex) 라인은 총 5개, 1번 라인의 방 개수는 6개
  const Rooms = makeRooms(lines);
  console.log(Rooms);

  return (
    <>
      <FileInputForm setSelectedFile={setSelectedFile} />
      {selectedFile && (
        <div>
          <p>선택된 파일: {selectedFile.name}</p>
        </div>
      )}

      {dataFrame && (
        <div>
          <h3>엑셀 데이터:</h3>
          <pre>{JSON.stringify(dataFrame, null, 2)}</pre>
        </div>
      )}
    </>
  );
};

export default Main;
