import React from "react";
import Styles from "./css/sources.module.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function createData(name, link) {
  return { name, link };
}

const rows = [
  createData("وزارة الصحة", "https://www.sante.gov.ma/Pages/Accueil.aspx"),
  createData(
    "مرصد الأخبار الرسمية حول كورونا 19 بالمغرب",
    "http://www.covidmaroc.ma/"
  ),
  createData("الموقع الخاص بالبلاغات المتعلقة بفيروس كورونا المستجد", "http://covid19.interieur.gov.ma/"),
  createData("Agence MAP", "https://twitter.com/MAP_Information")
];

export default function Sources() {
  return (
    <div className={Styles.tablecontainer}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table" className={Styles.table}>
          <TableHead>
            <TableRow>
              <TableCell align="right">الرابط</TableCell>
              <TableCell align="right">الاسم</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell align="right">
                  <a href={row.link} target="_blank" rel="noopener noreferrer">
                    {row.link}
                  </a>
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
