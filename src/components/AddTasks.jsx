function AddTasks()
{
    return (
        <div className="space-y-4 p-6 bg-slate-400 rounded-md shadow">
            <input type="text" placeholder="Digite o titulo da tarefa" className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md w-full"/> <br />
            <input type="text" placeholder="Digite a descrição da tarefa" className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md w-full"/>
            <button className="bg-slate-500 text-white px-4 py-2 rounded-md w-full">Adicionar</button>
        </div>
    );
}

export default AddTasks;