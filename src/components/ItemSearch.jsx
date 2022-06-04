import React from "react";
import PropTypes from "prop-types";

import {Box, Button, Input, NativeBaseProvider, TextArea} from "native-base";

const FREE_WORD = "歌手";
const ERROR_FREE_WORD = "歌手を入力してください";

const ItemSearch = ({ value, error, handleFreeWord, handleSubmit}) => {
	return (
		<NativeBaseProvider>
			<Box>
				<TextArea
					label={FREE_WORD}
					variant="outlined"
					placeholder="歌手名"
					value={value.freeWord}
					onChange={handleFreeWord}
					error={error.freeWord && true}
					helperText={error.freeWord && ERROR_FREE_WORD}
				/>
				<Button variant="outline" onPress={() => handleSubmit(value)}>検索</Button>
			</Box>
		</NativeBaseProvider>
	);
}

export default ItemSearch;

// ItemSearch.PropTypes = {
// 	value: PropTypes.shape({
// 		freeWord: PropTypes.string.isRequired,
// 	}),
// 	error: PropTypes.shape({
// 		freeWord: PropTypes.bool.isRequired,
// 	}),
// 	handleFreeWord: PropTypes.func.isRequired,
// 	handleSubmit: PropTypes.func.isRequired,
// };

// ItemSearch.defaultProps = {
// 	value: {
// 		freeWord: '',
// 	},
// 	error: {
// 		freeWord: false,
// 	},
// 	handleFreeWord: () => {},
// 	handleSubmit: () => {},
// };