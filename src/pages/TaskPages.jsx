import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPages()
{
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description");
    return (
    <div className="w-screen h-screen bg-slate-900 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex text-white mb-6">
            <button onClick={() => navigate(-1)} className="absolute left-0 top-0 bottom-0 text-slate-100">
                <ChevronLeftIcon />
            </button>
        </div>

        <h1 className="text-3xl text-slate-100 font-bold text-center" >Detalhes da tarefa</h1>

        <div className="bg-slate-400 p-4 rounded-md">
            <h2 className="text-xl text-slate-700 font-bold">{title}</h2>
            <p className="text-slate-700">{description}</p>
        </div>
      </div>
    </div>
    );
}

export default TaskPages;