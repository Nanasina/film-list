import { Plus, Clapperboard } from "lucide-react";
// import { motion, Typewriter } from "motion/react"

function List() {

  return (
    <>
      <div className="flex gap-8 m-8">
        <h1 className="font-mono text-3xl font-bolds flex"> <Clapperboard className="m-2 animate-bounce"/>FILMS & SERIES</h1>
        <div>
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
        </div>
        
     <button className="btn btn-soft">Tous</button>
     <button className="btn btn-soft">A regarder</button>
     <button className="btn btn-soft">Vu</button>

     <div className="ml-15">
        <button className="btn btn-soft btn-secondary " onClick={()=>document.getElementById('my_modal_3').showModal()}> <Plus />Ajouter un film/série</button>
     </div>
     
    </div>

    <div className="m-8 rounded-lg border ">
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 ">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Titre</th>
        <th>Film ou Série</th>
        <th>Catégorie</th>
        <th>Status</th>
        <th>Nombre de vu</th>
        <th>Actions</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <td>hsgsfs</td>
      </tr>
    </tbody>
  </table>
</div>
    </div>

    <div>
      <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg text-center">AJOUTER UN FILM OU UNE SERIE</h3>
   <div className="m-8">
    <fieldset className="fieldset">
      <legend className="fieldset-legend">Titre</legend>
      <input type="text" className="input w-95" placeholder="Titre du film" />
  </fieldset>

   <fieldset className="fieldset">
      <legend className="fieldset-legend">Film ou série</legend>
      <select defaultValue="Film ou série" className="select w-95">
        <option disabled={true} >Film ou série</option>
        <option>Film</option>
        <option>Série</option>
        
     </select>
  </fieldset>

   <fieldset className="fieldset">
      <legend className="fieldset-legend">Catégorie</legend>
      <input type="text" className="input w-95" placeholder="exemple: K-drama" />
  </fieldset>
   </div>

   <div className="flex justify-center items-center">
    <button className="btn btn-soft btn-secondary btn-wide ">AJOUTER</button>
   </div>
    
  </div>
</dialog>
    </div>
    </>
  )
}

export default List