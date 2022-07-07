import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import './Certificate.scss';


const CertificateTemplate = ({
	inputRef,
	certificateRecieverNameRef,
	certiticateCourseNameRef,
	certificateIssuedDateRef,
	certificateNumberRef,
	playlistLevelTitleRef,
}) => {
	return (
		<div ref={inputRef} className="certificate-template-container">
			<div className="certificate-top-strip"></div>

			<img src= "https://www.masaischool.com/img/navbar/logo.svg" className="certificate-issuer-logo" />

			<div className="certificate-issuer-details">
				<h2 className="certificate-text">CERTIFICATE</h2>
				<span className="certificate-completion-text">OF COMPLETION</span>
			</div>

			<div className="certificate-reciever-details">
				<span className="certificate-reciever-text">
					This has been presented to
				</span>
				<br />
				<span
					className="certificate-reciever-name"
					ref={certificateRecieverNameRef}
				>
					Anant Jain
				</span>

				<div className="certiticate-reciever-divider"></div>
			</div>

			<div className="certiticate-and-course-name">
				<span>
					For the successful completion of Masai's
				</span>
				<br />

				<span className="certiticate-course-name" ref={certiticateCourseNameRef}>
					Android Course
				</span>
			</div>

			<div className="certiticate-verifier-details">
				<div className="certificate-issued-date">
					<span ref={certificateIssuedDateRef}>
						{new Date().toLocaleDateString()}
					</span>

					<br />
					<span>Date</span>
				</div>
				<div className="certificate-issuer-desig">
					<span>Nrupul Dev</span>
					<br />
					<span>Co-founder & CTO</span>
				</div>
				<div className="certificate-number">
					<span style={{ cursor: 'pointer' }} ref={certificateNumberRef}>
						Unique Certificate Identifier`
					</span>
					<br />
					<span>Certificate No</span>
				</div>
			</div>
		</div>
	);
};

const Certificate = () => {
	const inputRef = useRef(null);
	const certificateRecieverNameRef = useRef(null);
	const certiticateCourseNameRef = useRef(null);
	const certificateIssuedDateRef = useRef(null);
	const certificateNumberRef = useRef(null);
	const playlistLevelTitleRef = useRef(null);

	const [isModalOpen, setIsModalOpen] = useState(false);
	const currUser = "Anant"

	const [IsDownloadingInProgres, setIsDownloadingInProgres] = useState(false);
	const [certificates, setCertificates] = useState([]);

	const downloadCertificate = async (
		certificateTitle,
		certificateId,
		playlistLevelTitle,
		issuedDate
	) => {
		setIsDownloadingInProgres(true);

		const input = inputRef.current;

		const certificateRecieverName = certificateRecieverNameRef.current;

		const userNameByConfirmation = window.confirm(
			'Do you want to keep your default username on certificate?'
		);

		if (userNameByConfirmation) {
			certificateRecieverName.textContent = currUser.name;
		} else {
			const userNameByChoice = prompt('Please enter your name?');
			certificateRecieverName.textContent = userNameByChoice;
		}

		const certiticateCourseName = certiticateCourseNameRef.current;

		certiticateCourseName.textContent = certificateTitle;

		const certificateIssuedDate = certificateIssuedDateRef.current;

		certificateIssuedDate.textContent = issuedDate;

		const certificateNumber = certificateNumberRef.current;

		const payload = {
			certificateId,
			recipientName: certificateRecieverName.textContent,
		};
		const uniqueId = "27635128731j2bd7s"

		certificateNumber.textContent = uniqueId

		const topicName = "android"

		const html2canvas = await import(
			/* webpackChunkName: "html2canvas"*/ 'html2canvas'
		);
		const { jsPDF } = await import(/* webpackChunkName: "jspdf"*/ 'jspdf');

		const canvas = await html2canvas.default(input);

		const imgData = canvas.toDataURL('image/png');
		const pdf = new jsPDF('landscape', 'px', 'a3');

        console.log(pdf)

		pdf.addImage(imgData, 'PNG', 0, 0, 900, 600, undefined, false);

		pdf.save('certificate.pdf');
	};


	return (
		<>
			<div
				className="ceritificate-template-hidden"
			>
				<CertificateTemplate
					inputRef={inputRef}
					certificateRecieverNameRef={certificateRecieverNameRef}
					certiticateCourseNameRef={certiticateCourseNameRef}
					certificateIssuedDateRef={certificateIssuedDateRef}
					certificateNumberRef={certificateNumberRef}
					playlistLevelTitleRef={playlistLevelTitleRef}
				/>
			</div>
            <button onClick = {downloadCertificate} >Download</button>
		</>
	);
};

export default Certificate;
