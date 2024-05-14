export default function Form() {
  return (
    <form className="my-32 px-10 py-10 bg-orange-400 rounded-md space-y-6 md:w-1/2 2xl:w-1/3">
      <div className="space-y-4">
        <label htmlFor="name"
          className="text-white uppercase font-bold text-lg block"
        >
          Nombre o Ingredientes
        </label>
        <input type="text" id="name" name="name"
          className="w-full p-3 rounded-md focus:outline-none text-ellipsis"
          placeholder="Nombre o Ingrediente. Ejm: Vodka, Tequila, Café"
        />
      </div>

      <div className="space-y-4">
        <label htmlFor="name"
          className="text-white uppercase font-bold text-lg block"
        >
          Categoría
        </label>
        <select name="category" id="category"
          className="w-full p-3 rounded-md focus:outline-none"
        >
          <option value="">-- Seleccione --</option>
        </select>
      </div>

      <input type="submit" value="Buscar Recetas"
        className="bg-orange-800 hover:bg-orange-900 uppercase text-white text-center w-full rounded-md font-semibold py-2"
      />
    </form>
  )
}