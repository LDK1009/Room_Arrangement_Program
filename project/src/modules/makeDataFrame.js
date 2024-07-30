const makeDataFrame = (excelData) => {
    if(excelData){
        excelData = excelData.toSorted((a, b) => b.personnel - a.personnel); // 데이터 정렬
        excelData = excelData.filter((row) => row.personnel !== 0); // 등록 인원 === 0 행 제거
        excelData = excelData.map((row) => { // 컬럼 추가(필요한 방 개수, 나머지 인원,)
            return {
                ...row,
                requireRoomCount: Math.ceil(row.personnel / 6), // 소수점올림
                remainPersonnel : row.personnel % 6, // 나머지 인원
                scale : scaling(row.personnel), 
                
            };
        }); 


        return excelData;
    }
    return;
};

const scaling = (value) => {
    if(value >= 30){
        return 6;
    }
    else if(value>=25){
        return 5;
    }
    else if(value>=20){
        return 4;
    }
    else if(value>=15){
        return 3;
    }
    else if(value>=10){
        return 2;
    }
    else if(value>=5){
        return 1;
    }
    else{
        return 0;
    }
}


export default makeDataFrame;