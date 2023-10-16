import "./index.scss";

const Header = (props) => {
  function handleSubmit(event) {
    event.preventDefault(); // esse event serve para ele fazer as alterações na pagina mesmo sem a mesma carregar

    const searchValue = event.target[0].value;
    props.onSubmit(searchValue);
    event.target[0].value = "";
  }

  return (
    <div className="Header">
      <h1>DNC Movie List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Pesquise por filmes" />
      </form>
    </div>
  );
};

export default Header;
