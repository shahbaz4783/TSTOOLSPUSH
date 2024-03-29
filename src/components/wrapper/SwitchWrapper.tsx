export const SwitchWrapper: React.FC<InputWrapper> = ({ children }) => {
	return (
		<menu className='flex justify-between overflow-hidden content-stretch items-center flex-1 border border-gray-200 rounded-md'>
			{children}
		</menu>
	);
};
