export function useDeepCopy(oldObj){
    let newObj = JSON.parse(JSON.stringify(oldObj));
    return newObj;
}