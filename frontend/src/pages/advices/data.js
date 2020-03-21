import HandWashLogo from './logos/handwash.png';
import DontTouchLogo from './logos/dontTouch.png';
import SeparateLogo from './logos/quarantine.png';
import CoughLogo from './logos/cough.png';
import Infection from './logos/infektion.png';
import StayHome from './logos/stayHome.png';

const advicesData = [
	{
		logo: HandWashLogo,
		text: "غسل اليدين جيدا بالماء والصابون بانتظام ولمدة لا تقل عن 20 ثانية، او استعمال المعقمات الكحولية"
	},
	{
		logo: DontTouchLogo,
		text: "تجنب لمس العينين والأنف والفم حال ملامسة اليد لسطح يُرجح وجود الفيروس عليه، إذ يمكن أن ينتقل الفيروس إلى الجسم بهذه الطريقة"
	},
	{
		logo: SeparateLogo,
		text: "لا تقترب من المصابين بالسعال أو العطس أو الحمى، إذ يمكن أن ينشروا جسيمات صغيرة تحتوى على الفيروس في الهواء ويُفضل الابتعاد عنهم لمسافة متر واحد"
	},
	{
		logo: CoughLogo,
		text: "تغطية الفم والأنف عند العطس أو السعال وغسل اليدين بعدها لمنع انتشار الفيروس"
	},
	{
		logo: Infection,
		text: "اجتناب التجمعات و الإحتكاك المباشر مع الأشخاص عن طريق المصافحة، العناق أو التقبيل"
	},
	{
		logo: StayHome,
		text: "التزام المكوث في المنزل وعدم الخروج إلى عند الضرورة (التبضع، التطبيب، الإلتحاق بالعمل ...)"
	}
]

export default advicesData;
