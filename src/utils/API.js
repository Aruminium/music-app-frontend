import { useState } from "react";
import axios from "axios";
import {appId} from "../../config";

const BASE_URL = "https://app.rakuten.co.jp/services/api/BooksCD/Search/20170404?format=json";


const useFetchData = () => {
	const [error, setError] = useState({
		freeWord: false,
	});
	const [result, setResult] = useState({});

	const [fetching, setFetching] = useState(false);

	const handleSubmit = (value) => {
		const params = value[""];
		console.log(value[""]);
		if (params) {
			setFetching(true);
			const encodedParams = encodeFreeWord(params);
			axios.get(`${BASE_URL}&artistName=${encodedParams}&applicationId=${appId}`).then(res => {
				setResult(res.data);
				console.log(res.data);
				setFetching(false);
			}).catch(error => {
				console.log(error);
			})
		}
		else{
			console.log("検索条件を入力してください");
			setError({
				freeWord: true,
			});
			setFetching(false);
		}
	};

	const encodeFreeWord = (params) => {
		var urlEncode = require('urlencode');
		return urlEncode(params);
	}

	return {error, setError, fetching, result, handleSubmit}
};

export default useFetchData;