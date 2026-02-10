function List() {

  return (
    <>
      <div className="flex gap-8 m-8">
        <h1 className="font-mono text-3xl font-bolds">FILMS & SERIES</h1>
        <label className="input">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
               >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
             </g>
         </svg>
           <input type="search" placeholder="Recherche" />
     </label>
     <button className="btn btn-soft">Tous</button>
     <button className="btn btn-soft">A regarder</button>
     <button className="btn btn-soft">Vu</button>

     <div className="ml-15">
        <button className="btn btn-soft btn-secondary">Ajouter un film/série</button>
     </div>
     
    </div>

    <div className="m-8 ">
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Titre</th>
        <th>Type</th>
        <th>Status</th>
        <th>Nombre de vu</th>
        <th>Actions</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        
      </tr>
    </tbody>
  </table>
</div>
    </div>
    </>
  )
}

export default List