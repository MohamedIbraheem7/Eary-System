import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from 'axios'


export function attempts_Number(result){
    return result.filter(r => r !== undefined).length;
}

export function earnPoints_Number(result, answers, point){
    return result.map((element, i) => answers[i] === element).filter(i => i).map(i => point).reduce((prev, curr) => prev + curr, 0);
//filter ==> bizhrly index value aly atgaweb 3leh sah bs mesh bizhrly elghltat
//map ==> bizhrly eldrga bta3t kol so2al sah at7l
//reduce ==> btgm3ly eldrga bta3t kol so2al sah at7l
}

// m3lesh b2a da code law s2et
export function flagResult(totalPoints, earnPoints){
    return (totalPoints * 50 / 100) < earnPoints; /** earn 50% marks */
}

/** check user auth bkhleh agbary ydkhl userName */
export function CheckUserExist({ children }){
    const auth = useSelector(state => state.result.userId)
    return auth ? children : <Navigate to={'/'} replace={true}></Navigate>
}

/** get server data => backend */
export async function getServerData(url, callback){
    const data = await (await axios.get(url))?.data;
    return callback ? callback(data) : data;
}
// awl await .data btkhleny arg3 data mn backend
// ? ==> 3shan yrg3ha awl mikon fe data
// callback ==> hysmy data alhtrg3 callback law user 3rfha be callback , ? => then return callback with data, : => otherwise return data 


/** post server data => backend */
export async function postServerData(url, result, callback){
    const data = await (await axios.post(url, result))?.data;
    return callback ? callback(data) : data;
}