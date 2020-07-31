import React from 'react';
import './index.css'

function App() {
  return (
    <div className="App">
      <h1>Form Pembelian Buah</h1>

      <form action="">
        <table>
          <tr>
            <td>Nama Pelanggan</td>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <td>Daftar Item</td>
            <td>
              <input type="checkbox" id='semangka' /> <label for="semangka">Semangka</label><br />
              <input type="checkbox" id='jeruk' /> <label for="jeruk">Jeruk</label><br />
              <input type="checkbox" id='nanas' /> <label for="nanas">Nanas</label><br />
              <input type="checkbox" id='salak' /> <label for="salak">Salak</label><br />
              <input type="checkbox" id='anggur' /> <label for="anggur">Anggur</label>
            </td>
          </tr>
          <tr>
            <td><input type="submit" value="Kirim" className='kirim' /></td>
          </tr>
        </table>
      </form>
    </div>
  );
}

export default App;
