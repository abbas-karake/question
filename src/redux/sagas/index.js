import { all } from "redux-saga/effects";
import fetchDataSaga from "./fetch.data.saga";

export default function* rootSaga(getState) {
    yield all([fetchDataSaga()]);
}