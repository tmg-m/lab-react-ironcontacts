function Contact({ id, name, pictureUrl, popularity, wonOscar, wonEmmy, onDelete }) {
  let oscarTrophy;
  let emmyTrophy;
  if (wonOscar) {
    oscarTrophy = "🏆";
  }
  if (wonEmmy) {
    emmyTrophy = "🌟";
  }

  const handleOnRemove = () => {
    onDelete(id)
  }

  return (
    <>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </tr>
        <tr>
          <td>
            <img width="100px" src={pictureUrl} alt="photo" />
          </td>
          <td>{name}</td>
          <td>{popularity}</td>
          <td>{oscarTrophy}</td>
          <td>{emmyTrophy}</td>
          <td>
            <button onClick={handleOnRemove}>Remove</button>
          </td>
        </tr>
      </table>
    </>
  );
}

export default Contact;