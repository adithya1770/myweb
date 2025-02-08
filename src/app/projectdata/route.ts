import Data from './data.json';

export async function GET(){
    return Response.json(Data);
}

