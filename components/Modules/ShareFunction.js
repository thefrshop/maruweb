export const ClassColor = (type) => {
  if (type === "스튜디오") return "#9dc53c";
  else if (type === "하드웨어LAB") return "#316db1";
  else if (type === "쿠킹LAB") return "#f2b541";
  else if (type === "미디어LAB") return "#7d1de0";
  else if (type === "공예LAB") return "#d95c51";
  else if (type === "컨텐츠LAB") return "#d95cb1";
  else return "#333";
};

export const ClassIcon = (type) => {
  if (type === "스튜디오") return "lab_cate/s_lab.png";
  else if (type === "하드웨어LAB") return "lab_cate/h_lab.png";
  else if (type === "쿠킹LAB") return "lab_cate/c_lab.png";
  else if (type === "미디어LAB") return "lab_cate/m_lab.png";
  else if (type === "공예LAB") return "lab_cate/cr_lab.png";
  else if (type === "컨텐츠LAB") return "lab_cate/con_lab.png";
  else return "";
};
