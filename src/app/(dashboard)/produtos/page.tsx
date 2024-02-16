import Link from "next/link";

export default function Page(){
    return(
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-lg font-semibold">produtos</h1>
                <Link className="btn btn-primary" href='/produtos/novo'>
                    Novo
                    </Link>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Estoque</th>
                        <th>Categoria</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Produto 1</td>
                        <td>R$ 20,00</td>
                        <td>20</td>
                        <td>Garrafas</td>
                        <td>Excluir</td>
                    </tr>
                </tbody>
            </table>
            </div>
    )
}