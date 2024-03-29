import { Input } from '../../components/ui/Input';
import { Switch } from '../../components/ui/Switch';
import { InputWrapper } from '../../components/wrapper/InputWrapper';
import { SwitchWrapper } from '../../components/wrapper/SwitchWrapper';
import { Label } from '../../components/ui/Label';

export const InvestmentInputField: React.FC<InputFieldFunction> = ({
	userInput,
	onChangeProp,
	investmentType,
	onInvestmentTypeChange,
}) => {
	return (
		<section className='md:w-4/12 grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center overflow-hidden flex-1 border-4 border-slate-300 rounded-xl p-6'>
			<article className=''>
				<Label htmlFor='investment-type' title='Investment Type' />
				<SwitchWrapper>
					<Switch
						title='SIP'
						onClick={() => onInvestmentTypeChange('SIP')}
						isActive={investmentType === 'SIP'}
					/>
					<Switch
						title='Lumpsum'
						onClick={() => onInvestmentTypeChange('Lumpsum')}
						isActive={investmentType === 'Lumpsum'}
					/>
				</SwitchWrapper>
			</article>

			<article className=''>
				<Label
					htmlFor='sip'
					title={investmentType === 'SIP' ? 'Monthly SIP' : 'Total Investment'}
				/>
				<InputWrapper>
					<span className='bg-stone-300 text-blue-800 p-3'>₹</span>
					<Input
						type='number'
						value={userInput.monthlySIP}
						onChange={(e) => onChangeProp('monthlySIP', e.target.value)}
						id='sip'
					/>
				</InputWrapper>
			</article>

			<article className=''>
				<Label htmlFor='roi' title='Expected Return (p.a)' />
				<InputWrapper>
					<Input
						type='number'
						value={userInput.ROI}
						onChange={(e) => onChangeProp('ROI', e.target.value)}
						id='roi'
					/>
					<span className='bg-stone-300 text-blue-800 p-3'>%</span>
				</InputWrapper>
			</article>

			<article className=''>
				<Label htmlFor='duration' title='Duration' />
				<InputWrapper>
					<Input
						type='number'
						value={userInput.duration}
						onChange={(e) => onChangeProp('duration', e.target.value)}
						id='duration'
					/>
					<span className='bg-stone-300 text-blue-800 p-3'>
						{userInput.duration >= 2 ? 'years' : 'year'}
					</span>
				</InputWrapper>
			</article>
		</section>
	);
};
