import Link from "next/link"
export default function Page(){
    return <div>
        <h1 className="text-lg font-semibold mb-6">Novo produtos</h1>
        <form className="flex gap-2">
        <div className="grid grid-cols-2 gap-2">    
            <input type="text" placeholder="nome" className="input input-primary" />
            <input type="number" placeholder="preço" className="input input-primary" />
            <input type="number" placeholder="estoque" className="input input-primary" />
            <select className="select select-primary">
            <option disabled selected>Categoria</option>
            <option value="Garrafas">Categoria</option>
            <option value="eletronicos">eletronicos</option>
            </select>
        </div>
        <div className=" flex justify-between mt-6">
            <Link className="btn btn-outline" href='/produtos'>Cancelar</Link>
            <button className="btn btn-outline">Criar</button>
        </div>
        </form>
        </div>
    
}
