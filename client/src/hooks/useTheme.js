import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from '../redux/theme/themeSlice';

export const useTheme = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  const setCurrentTheme = (newTheme) => {
    // Only allow light theme
    if (newTheme === 'light') {
      dispatch(setTheme(newTheme));
    }
  };

  // Always light theme
  const isDark = false;
  const isLight = true;

  return {
    theme: 'light',
    isDark,
    isLight,
    setTheme: setCurrentTheme,
  };
};