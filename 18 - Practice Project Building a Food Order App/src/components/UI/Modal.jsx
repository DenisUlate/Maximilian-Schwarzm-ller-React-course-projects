import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

/**
 * Modal component that displays a dialog box.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The content to be displayed inside the modal.
 * @param {boolean} props.open - Determines whether the modal is open or closed.
 * @param {string} [props.className=""] - Additional CSS class names for the modal.
 * @param {Function} props.onClose - Callback function to be called when the modal is closed.
 * @returns {JSX.Element} The rendered Modal component.
 */
const Modal = ({ children, open, className = "", onClose }) => {
	const dialogRef = useRef();
	useEffect(() => {
		if (open) {
			dialogRef.current.showModal();
		} else {
			dialogRef.current.close();
		}
	}, [open]);
	return createPortal(
		<dialog ref={dialogRef} className={`modal ${className}`} onClose={onClose}>
			{children}
		</dialog>,
		document.getElementById("modal")
	);
};

export default Modal;
