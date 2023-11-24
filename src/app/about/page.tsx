import {
	FileIcon,
	PhoneIcon,
	EmailIcon,
	HobbiesIcon,
	TerminalIcon,
	UserIcon,
} from '@/assets/icons/index';
import DropDown from '@/components/UI/DropDown';

const page = () => {
	return (
		<div className='grid grid-cols-[auto_244px_repeat(2,1fr)] h-full'>
			<div className='flex flex-col gap-8 text-secondary-gray px-5 pt-4 border-r-lines border-r-2 w-max'>
				<TerminalIcon className='opacity-40 cursor-pointer hover:opacity-100' />
				<UserIcon className='opacity-40 cursor-pointer hover:opacity-100' />
				<HobbiesIcon className='opacity-40 cursor-pointer hover:opacity-100' />
			</div>
			<div className='border-r-lines border-r-2 flex flex-col divide-y-2'>
				<DropDown title={'personal-info'} />
				<DropDown title={'contacts'} />
			</div>
			<div></div>
			<div></div>
		</div>
	);
};

export default page;
