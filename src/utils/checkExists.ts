


export function checkExists(data: any, name: string, userId: number){
    if(!data) throw{type: 'not_found', message: `${name} not found`};
    if(data.user_id !== userId) throw{type: 'unauthorized', message: `this ${name} don't belongs to this user`};
}