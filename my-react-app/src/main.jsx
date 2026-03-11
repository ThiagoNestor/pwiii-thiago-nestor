import { createRoot } from 'react-dom/client'

const myelement = (
  <table>
    <tr>
      <th>
        Name
      </th>
    </tr>
    <tr>
      <td>
        Lais
      </td>
    </tr>
  </table>
);

createRoot (document.getElementById('root')).render(
  myelement
)

