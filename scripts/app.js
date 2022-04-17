/** @format */

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
// toast function
function toast({ title = "", msg = "", type = "infor", duration = 3000 }) {
	const main = $("#toast");

	if (main) {
		const toast = document.createElement("div");
		const delay = (duration / 1000).toFixed(2);
		const removeTime = duration + 1000;
		const icons = {
			success: "fa-solid fa-thumbs-up",
			infor: "fa-solid fa-info",
			warning: "fa-solid fa-circle-exclamation",
			error: "fa-solid fa-triangle-exclamation",
		};

		const icon = icons[type];

		const timeOutId = setTimeout(function () {
			main.removeChild(toast);
		}, removeTime);

		toast.onclick = close;
		function close(e) {
			if (e.target.closest(".toast__close")) {
				main.removeChild(toast);
				clearTimeout(timeOutId);
			}
		}

		toast.classList.add("my-toast", `toast--${type}`);
		toast.style.animation = `slideLeft ease 0.8s, fadeOut linear 1s ${delay}s forwards`;
		toast.innerHTML = `<div class="toast__icon">
				<i class="${icon}"></i>
				</div>
				<div class="toast__body">
					<h3 class="toast__title">${title}</h3>
					<p class="toast__msg">${msg}</p>
				</div>
				<div class="toast__close">
					<i class="fa-solid fa-circle-xmark"></i>
		</div>`;
		main.appendChild(toast);
	}
}

const success = $(".btn__success");
const warning = $(".btn__warning");

success.onclick = function handleSuccess() {
	toast({
		title: "success",
		msg: "Bạn đã kết nối thành công",
		type: "success",
		duration: 5000,
	});
};

warning.onclick = function handleWarning() {
	toast({
		title: "Warning",
		msg: "Xin lỗi bạn đã kết nối không thành công",
		type: "warning",
		duration: 5000,
	});
};
