import { useEffect, useState } from 'react';

const useIntersection = ({
	ref,
	nodeId,
	rootMargin,
	options = { root: null, rootMargin: rootMargin ?? '0px', threshold: 1.0 }
}) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const callbackFunc = ([entry]) => {
			setIsVisible(entry.isIntersecting);
		};

		let refNode = ref?.current || document.querySelector(nodeId);
		const observer = new IntersectionObserver(callbackFunc, options);

		if (refNode) {
			observer.observe(refNode);
		}

		return () => {
			if (refNode) {
				observer.unobserve(refNode);
			}
		};
	}, [nodeId, options, ref]);

	return { isVisible };
};

export default useIntersection;
