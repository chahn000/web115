var task_list = [];

var $ = function (id) { return document.getElementById(id); }

var update_task_list = function () {
    if ( task_list.length == 0 ) {
        $("task_list").value = "";
    } else {
        var list = "";
        for ( var i in task_list ) {
            list += (parseInt(i)+1) + ": " + task_list[i] + "\n";
        }
        $("task_list").value = list;
    }
}

var add_task_click = function () {
    $("add_task").blur();
    var task = prompt("Enter a task:", "");
    if ( task != "" && task != null) {
        task_list.push(task);
        update_task_list();
    }
}

var delete_task_click = function () {
    $("delete_task").blur();
    if ( task_list.length == 0 ) {
        alert("No task to delete.");
        return;
    }
    task_list.shift();
    update_task_list();
}

var modify_task_click = function () {
	$("modify_task").blur();
    if ( task_list.length == 0 ) {
        alert("No task to modify.");
        return;
	}
	var to_modify = prompt("Enter the task number to modify:", "");
	if (to_modify == null) { return; }
    to_modify = parseInt(to_modify);
    if ( isNaN(to_modify) ) {
        alert("You did not enter a number.");
        return;
    }
    if ( to_modify < 1 ) {
        alert("The task number is too low.");
        return;
    }
    if ( to_modify > task_list.length ) {
        alert("The task number is too high.");
        return;
    }
	var slot = to_modify - 1;
	var to_modify_text = prompt("Make your changes:", task_list[slot]);
	if (to_modify_text == null || to_modify_text == "") {
		alert("No updates made.");
		return;
	}
	task_list[slot] = to_modify_text;
	update_task_list();
}

var promote_task_click = function () {
	$("promote_task").blur();
	if ( task_list.length == 0 ) {
        alert("No task to promote.");
        return;
	}
	var to_promote = prompt("Enter the task number to promote:", "");
	if (to_promote == null) { return; }
    to_promote = parseInt(to_promote);
    if ( isNaN(to_promote) ) {
        alert("You did not enter a number.");
        return;
    }
    if ( to_promote < 1 ) {
        alert("The task number is too low.");
        return;
    }
    if ( to_promote > task_list.length ) {
        alert("The task number is too high.");
        return;
    }
	var slot = to_promote - 1;
	var item_to_promote = task_list.splice(slot, 1);
	task_list.unshift(item_to_promote);
	update_task_list();
}

window.onload = function() {
    $("add_task").onclick = add_task_click;
    $("delete_task").onclick = delete_task_click;
	$("modify_task").onclick = modify_task_click;
	$("promote_task").onclick = promote_task_click;
    update_task_list();
}