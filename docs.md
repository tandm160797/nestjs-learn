# Component / Page folder structure

```javascript
/*
 * components/Button.tsx
 * hoặc
 * components/Button/index.tsx
 * components/Button/styles.ts
 */

/*
 * components/MainLayout/components/Header.tsx
 *
 * components/MainLayout/components/Slider/index.tsx
 * components/MainLayout/components/Slider/styles.ts
 *
 * components/MainLayout/components/Footer/index.tsx
 * components/MainLayout/components/Footer/styles.ts
 */

/*
 * pages/Home.tsx
 * hoặc
 * pages/Home/index.tsx
 * pages/Home/styles.ts
 */

/*
 * pages/SalaryStatistics/components/IncomeStatistic.tsx
 *
 * pages/SalaryStatistics/components/StatisticParameterModal/index.tsx
 * pages/SalaryStatistics/components/StatisticParameterModal/styles.ts
 *
 * pages/SalaryStatistics/components/SalaryHistory/index.tsx
 * pages/SalaryStatistics/components/SalaryHistory/styles.ts
 */
```

---

# Others folder structure

```javascript
/*
 * utils/index.ts
 * utils/treeData.ts
 * services/axiosClient.ts
 */
```

---

# Hằng Số

```javascript
const HOURS_IN_DAY = 24;

const EMPLOYEE_DEFAULT_NAME = 'No name';

const HOME_PAGE_DRAWER_NAME = 'FullScreen/HomePage';

const DRAWER_MODE = {
	create: 'Create',
	update: 'Update',
	copy: 'Copy',
};

const TABLE_ROW_BG_COLOR = {
	header: '#32a1c8',
	footer: '#32a1c8',

	expand: '#32a1c8',
	collapse: '#32a1c8',

	hover: '#32a1c8',
	selected: '#32a1c8',

	parentLv1: '#32a1c8',
	parentLv2: '#32a1c8',

	childrenLv1: '#32a1c8',
	childrenLv2: '#32a1c8',
};

const MODULES = {
	core: {
		basename: 'core',
	},
};
```

---

# import

```javascript
import IcoMoon from 'react-icomoon';
import { useLocation } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';

import Welcome from '@biso24/components/Welcome';
import useDrawer from '@biso24/hooks/useDrawer';
import useFullScreen from '@biso24/hooks/useFullScreen';

import App from 'App';
import HeaderTop from 'components/HeaderTop';
import Select from 'components/InputFields/Select';
import useStyles from './styles';
```

---

# export

```javascript
// utils/index.ts
export const getCleanObject = (object: Record<string, any>) => {
	return Object.entries(object).reduce((prev, [key, value]) => {
		return ![undefined, null, ''].includes(value)
			? {
					...prev,
					[key]: value,
			  }
			: prev;
	}, {});
};

export const round = (num: number, fixed = 2) => {
	return !Number.isNaN(+num) ? +(+num).toFixed(fixed) : 0;
};

// components/Welcome.tsx
const Welcome = () => {
	const { styles } = useStyles();

	return (
		<div className={styles.welcome}>
			<h1 className="title">Welcome to {MODULES[getModuleBaseName()].title} module</h1>
		</div>
	);
};

export default Welcome;
```

---

# Zustand

```javascript
// hooks/useBearStore.ts
const useBearStore = create((set) => ({}));

export default useBearStore;

// hooks/useAuth.ts
export const useAuthStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

const useAuth = () => {
  const { user setUser} = useAuthStore();

  const [value, setValue] = useState();

  return {
    user,
    setUser,

    value,
    setValue,
  };
}

export default useAuth;

```

# CSS

```javascript
// pages/Auth/ResetPassword/index.tsx
return (
	<div className={styles.resetPassword}>
		<div className="content-wrapper">
			<div className="left">Left</div>
			<div className="right">Right</div>
		</div>
	</div>
);

// pages/Auth/ResetPassword/styles.ts
const useStyles = createStyles({
	resetPassword: {
		background: `url(${bgResetPassword}) no-repeat center top`,
		webkitBackgroundSize: 'cover',

		...tw`min-w-[100vw] max-w-[100vw] min-h-[100vh] max-h-[100vh] py-0 px-[100px] flex items-center bg-cover`,

		'.content-wrapper': {
			...tw`mt-auto mb-auto mr-auto ml-auto w-full gap-10 flex justify-between`,
			...tw`max-lg:merge-[mr-auto, pr-0, justify-center]`,

			'.left': {
				...tw`max-w-[60%]`,
				...tw`max-2xl:max-w-[50%]`,
				...tw`max-xl:max-w-[40%]`,
				...tw`max-lg:hidden`,
			},

			'.right': {
				...tw`!text-error`,
			},
		},
	},
});
```
