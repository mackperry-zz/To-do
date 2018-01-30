import React from "react";
class ToDo extends React.Component {
	constructor(props) {
		super(props);
		console.log("constructor");
		this.addTask = this.addTask.bind(this);
		this.handleChangeLocation = this.handleChangeLocation.bind(this);
		this.state = {
			tasks: [
				{
					name: "Grocery shop",
					time: "Afternoon",
					importance: "Medium",
					number: "1",
					location: "Cambridge"
				},
				{
					name: "Schedule doctor's appointment",
					time: "Morning",
					importance: "High",
					number: "2",
					location: "Home"
				},
				{
					name: "Dentist",
					time: "Morning",
					importance: "Medium",
					number: "3",
					location: "Boston"
				},
				{
					name: "Lunch with Nick",
					time: "Afternoon",
					importance: "Low",
					number: "4",
					location: "Boston"
				}
			],
			value: "",
			location: "",
			number: "",
			time: "",
			importance: ""
		};
	}

	handleChange = event => {
		this.setState({ value: event.target.value });
	};

	handleChangeLocation(event) {
		this.setState({ location: event.target.value });
	}

	handleChangeNumber = event => {
		this.setState({ number: event.target.value });
	};

	handleChangeTime = event => {
		this.setState({ time: event.target.value });
	};

	handleChangeImportance = event => {
		this.setState({ importance: event.target.value });
	};

	addTask() {
		if (this.state.value === "") {
			alert("Task is required");
			//set state to give warning
			this.setState({ valueNotFilledError: true });
		} else {
			this.state.tasks.push({
				name: this.state.value,
				time: this.state.time,
				importance: this.state.importance,
				number: this.state.number,
				location: this.state.location
			});

			this.setState({ tasks: this.state.tasks });

			console.log(this.state.tasks);

			this.setState({
				value: "",
				location: "",
				number: "",
				time: "",
				importance: ""
			});
		}
	}

	render() {
		console.log(this.state);
		const tasks = this.state.tasks.map((task, idx) => {
			return (
				<tr key={idx}>
					<td>{task.number}</td>
					<td>{task.name}</td>
					<td>{task.time}</td>
					<td>{task.importance}</td>
					<td>{task.location}</td>
				</tr>
			);
		});

		let taskClassName = "task";

		if (this.state.valueNotFilledError) {
			taskClassName = "task has-error";
		}

		return (
			<div>
				<h1>To Do List</h1>
				<h2>Mack Perry</h2>
				<form>
					<div className={taskClassName}>
						<input
							type="text"
							name="task"
							placeholder="Task"
							size="25"
							value={this.state.value}
							onChange={this.handleChange}
							required
							className="form-control"
						/>
					</div>
					<div className="number">
						<input
							type="text"
							name="task"
							placeholder="Number"
							size="7"
							value={this.state.number}
							onChange={this.handleChangeNumber}
						/>
					</div>
					<div className="time">
						<select value={this.state.time} onChange={this.handleChangeTime}>
							<option value="Time" disabled>
								Time
							</option>
							<option value="morning">Morning</option>
							<option value="afternoon">Afternoon</option>
							<option value="evening">Evening</option>
							<option value="night">Night</option>
						</select>
					</div>
					<div className="importance">
						<select
							value={this.state.importance}
							onChange={this.handleChangeImportance}
						>
							<option selected disabled>
								Importance
							</option>
							<option value="Low">Low</option>
							<option value="Medium">Medium</option>
							<option value="High">High</option>
						</select>
					</div>
					<div className="location">
						<input
							type="text"
							name="task"
							placeholder="Location"
							size="15"
							value={this.state.location}
							onChange={this.handleChangeLocation}
						/>
					</div>
				</form>
				<br /> <br />
				<button onClick={this.addTask}>Add Task</button>
				<br /> <br />
				<table>
					<thead>
						<tr>
							<th>Number</th>
							<th>Task</th>
							<th>Time</th>
							<th>Importance</th>
							<th>Location</th>
						</tr>
					</thead>
					<tbody>{tasks}</tbody>
				</table>
			</div>
		);
	}
}

export default ToDo;
