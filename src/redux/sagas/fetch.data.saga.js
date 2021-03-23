import { all, fork, put, takeEvery } from "redux-saga/effects";
import { SET_LOAD_DATA, SET_LOAD_DATA_SUCCESS, SET_LOAD_DATA_FAILED } from "../types";
import { sendRequest } from "../../utils/helpers";

function* fetchData(action) {
    const fetchedData = yield sendRequest("CmsGlobal/LoadData");
    if (!fetchedData.error) {
        yield put({ type: SET_LOAD_DATA_SUCCESS, payload: fetchedData.data });
    } else {
        yield put({ type: SET_LOAD_DATA_FAILED, payload: {} });
    }
}

function* fetchDataSaga() {
    yield takeEvery(SET_LOAD_DATA, fetchData);
}

export default function* rootSaga() {
    yield all([fork(fetchDataSaga)]);
}
