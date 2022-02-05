function Contact({ name, pictureUrl, popularity, wonOscar, wonEmmy }) {
  let oscarTrophy;
  let emmyTrophy
  if (wonOscar) {
    oscarTrophy = "🏆"
  }
  if (wonEmmy) {
    emmyTrophy = "🌟"
  }
  popularity = Math.round(popularity)
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
          <td><img width="100px" src={pictureUrl} alt="photo"/></td>
          <td>{name}</td>
          <td>{popularity}</td>
          <td>{oscarTrophy}</td>
          <td>{emmyTrophy}</td>
        </tr>
      </table>

      
    </>
  )
}

export default Contact;