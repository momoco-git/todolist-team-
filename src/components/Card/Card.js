import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { fetchTodo } from "redux/todoSlice";

function Card() {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.todos);
	const todos = data.data;

	useEffect(() => {
		dispatch(fetchTodo(data));
	}, []);

	let navigate = useNavigate();

	// function moveDetail(id) {
	// 	navigate(`/detail/${id}`);
	// }

	return (
		<>
			{todos &&
				todos.map((todo) => (
					<div
						className="w-11/12 h-40 m-2 p-4 rounded-3xl bg-gray-100 shadow-xl hover:bg-green-200 transition duration-300						"
						onClick={() => {
							navigate(`/detail/${todo.id}`);
						}}
						key={todo.id}
					>
						<div className="text-2xl font-bold">{todo.title}</div>
						<div>{todo.content}</div>
					</div>
				))}
		</>
	);
}

export default Card;
