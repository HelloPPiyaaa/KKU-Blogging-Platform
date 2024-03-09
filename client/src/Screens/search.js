import { useMemo, useRef, useState } from "react";
import "../misc/search.css";
import Navbar2 from "../Navbar/Navbar1";
import { MdAddCircle } from "react-icons/md";

function Search() {
  const [items, setItems] = useState([
    "วิธีใช้ KKU Blogging Platform",
    "วิธีการเขียนและเผยแพร่บล็อกแรกของคุณ",
    "สามารถลบบัญชีผู้ใช้ได้อย่างไร",
    "เปลี่ยนรหัสผ่านได้อย่างไร",
    // เพิ่มตัวอย่างคำถามที่ฟิกซ์ไว้ที่นี่
  ]);
  const [query, setQuery] = useState("");
  const inputRef = useRef();

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      return item.toLowerCase().includes(query.toLowerCase());
    });
  }, [items, query]);

  function onSubmit(e) {
    e.preventDefault();

    const value = inputRef.current.value;
    if (value === "") return;
    setItems((prev) => {
      return [...prev, value];
    });

    inputRef.current.value = "";
  }

  return (
    <div>
      <Navbar2 /> {/* นำ Navbar2 มาวางที่นี่ */}
      <>
        <div className="search-con">
          <div className="search-head"> 
            <h3>ศูนย์ช่วยเหลือ</h3>
            <h3>KKU Blogging Platform</h3>
            <input
              className="search-help"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="search"
              placeholder="ค้นหา..."
            />
          </div>
        </div>

        <br />
        <br />
        <div className="help-bottom">
          <div className="allqt">
            <p>คำถามที่พบบ่อย</p>
            
          </div>
          <div className="addQT">
            <form onSubmit={onSubmit}>
              <input
                ref={inputRef}
                type="text"
                placeholder="เพิ่มคำถาม"
                className="inputQT"
              />
              <button type="submit" className="btnAddQT">
                <MdAddCircle />
              </button>
            </form>
            
          </div>
          
        </div>
        <div className="questionList">
        {filteredItems.map((item, index) => (
              <div key={index} className="newQuestion">
                <a href="/other-page">{item}</a>
              </div>
            ))}
          </div>
      </>
    </div>
  );
}

export default Search;
